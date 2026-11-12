// ============================================================================
// GEARHUB CART & ORDER CHECKOUT (COD + VIETQR)
// ============================================================================

async function addToCart(productId, openAfter = false) {
  try {
    const res = await fetch('/api/cart/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId })
    });
    const data = await res.json();
    if (data.success) {
      updateCart();
      if (typeof showToast === 'function') {
        showToast('Đã thêm sản phẩm vào giỏ hàng', 'success');
      }
      if (openAfter) openCartModal();
    }
  } catch {
    if (typeof showToast === 'function') {
      showToast('Không thể thêm sản phẩm vào giỏ hàng', 'error');
    }
  }
}

async function buyNow(productId) {
  await addToCart(productId, true);
}

async function updateCartQty(productId, newQty) {
  try {
    await fetch('/api/cart/update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId, quantity: newQty })
    });
    await updateCart();
    await openCartModal();
  } catch {
    if (typeof showToast === 'function') {
      showToast('Không thể cập nhật số lượng', 'error');
    }
  }
}

async function removeCartItem(productId) {
  try {
    await fetch('/api/cart/remove', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId })
    });
    await updateCart();
    await openCartModal();
  } catch {
    if (typeof showToast === 'function') {
      showToast('Không thể xóa sản phẩm khỏi giỏ', 'error');
    }
  }
}

async function updateCart() {
  try {
    const res = await fetch('/api/cart');
    const { cart } = await res.json();
    const count = (cart || []).reduce((s, i) => s + i.quantity, 0);
    if (typeof document !== 'undefined') {
      const el = document.getElementById('cart-count');
      if (el) el.innerText = count;
    }
  } catch {}
}

function selectPaymentMethodUI(method) {
  if (typeof document === 'undefined') return;
  const norm = String(method || 'COD').toUpperCase();
  const isQr = norm === 'QR' || norm === 'BANK_QR';
  document.getElementById('pay-opt-cod')?.classList.toggle('active', !isQr);
  document.getElementById('pay-opt-qr')?.classList.toggle('active', isQr);

  const radios = document.querySelectorAll('input[name="paymentMethod"]');
  radios.forEach((r) => {
    const val = r.value.toUpperCase();
    r.checked = isQr ? val === 'BANK_QR' || val === 'QR' : val === 'COD';
  });

  const btn = document.getElementById('btn-order-submit');
  if (btn) {
    btn.innerText = isQr
      ? 'Đặt hàng & Hiển thị mã VietQR'
      : 'Xác nhận đặt hàng (COD)';
  }
}

async function openCartModal() {
  if (typeof document === 'undefined') return;
  try {
    const res = await fetch('/api/cart');
    const { cart, total } = await res.json();
    const container = document.getElementById('cart-items');
    const fmt = typeof formatMoney === 'function' ? formatMoney : (v) => v + ' ₫';

    if (!cart || cart.length === 0) {
      if (container) {
        container.innerHTML =
          '<div style="padding: 1.5rem; background-color: var(--bg); color: var(--muted); text-align: center;">Giỏ hàng của bạn đang trống.</div>';
      }
      const totalEl = document.getElementById('cart-total');
      if (totalEl) totalEl.innerText = '0 ₫';
    } else {
      if (container) {
        container.innerHTML = cart
          .map(
            (i) => `
          <div class="cart-item">
            <div class="cart-item-info">
              <img class="cart-item-img" src="${i.image || ''}" alt="${i.name}" loading="lazy">
              <div>
                <div class="cart-item-title">${i.name}</div>
                <div class="cart-item-price">${fmt(i.price)} &times; ${i.quantity} = ${fmt(i.price * i.quantity)}</div>
              </div>
            </div>
            <div class="cart-item-controls">
              <button type="button" class="qty-btn" onclick="updateCartQty('${i.id}', ${i.quantity - 1})">-</button>
              <span class="tabular" style="min-width: 1.5rem; text-align: center;">${i.quantity}</span>
              <button type="button" class="qty-btn" onclick="updateCartQty('${i.id}', ${i.quantity + 1})">+</button>
              <button type="button" class="btn-remove" onclick="removeCartItem('${i.id}')">Xóa</button>
            </div>
          </div>
        `
          )
          .join('');
      }
      const totalEl = document.getElementById('cart-total');
      if (totalEl) totalEl.innerText = fmt(total || 0);
    }

    const user = typeof currentUser !== 'undefined' ? currentUser : null;
    if (user) {
      const cName = document.getElementById('c-name');
      const cPhone = document.getElementById('c-phone');
      const cAddr = document.getElementById('c-address');
      if (cName) cName.value = user.fullName || '';
      if (cPhone) cPhone.value = user.phone || '';
      if (cAddr) cAddr.value = user.address || '';
      const hint = document.getElementById('remember-hint');
      if (hint) hint.style.display = 'inline';
    }

    if (typeof openModal === 'function') {
      openModal('cart-modal');
    }
  } catch {
    if (typeof showToast === 'function') {
      showToast('Không thể tải giỏ hàng', 'error');
    }
  }
}

function closeCartModal() {
  if (typeof closeModal === 'function') {
    closeModal('cart-modal');
  }
}

async function handlePlaceOrder(e) {
  if (e && typeof e.preventDefault === 'function') {
    e.preventDefault();
  }
  if (typeof document === 'undefined') return;

  const btn = document.getElementById('btn-order-submit');
  if (btn) {
    btn.disabled = true;
    btn.innerText = 'Đang khởi tạo lịch hẹn...';
  }

  const selectedRadio = document.querySelector('input[name="paymentMethod"]:checked');
  const rawMethod = selectedRadio ? selectedRadio.value : 'COD';
  const paymentMethod = rawMethod.toUpperCase() === 'BANK_QR' || rawMethod.toLowerCase() === 'qr' ? 'qr' : 'cod';

  const studentId = document.getElementById('c-student-id')?.value.trim() || '';
  const hallSlot = document.getElementById('c-hall-slot')?.value.trim() || '';
  const baseAddress = document.getElementById('c-address')?.value.trim() || '';
  const baseNote = document.getElementById('c-note')?.value.trim() || '';

  const combinedAddress = hallSlot ? `[Khung giờ: ${hallSlot}] - ${baseAddress}` : baseAddress;
  const combinedNote = studentId ? `MSSV: ${studentId}${baseNote ? ' · ' + baseNote : ''}` : baseNote;

  const payload = {
    fullName: document.getElementById('c-name')?.value.trim() || '',
    phone: document.getElementById('c-phone')?.value.trim() || '',
    address: combinedAddress,
    note: combinedNote,
    rememberMe: document.getElementById('c-remember')?.checked || false,
    paymentMethod
  };

  try {
    const res = await fetch('/api/orders/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await res.json();

    if (data.success) {
      if (typeof closeModal === 'function') {
        closeModal('cart-modal');
      }
      updateCart();
      if (typeof checkAuthState === 'function') {
        await checkAuthState();
      }

      if (data.paymentMethod === 'qr') {
        if (typeof openQrPaymentModal === 'function') {
          openQrPaymentModal(
            data.order || {
              id: data.orderId,
              paymentRef: data.paymentRef,
              paymentExpiresAt: data.paymentExpiresAt,
              totalAmount: data.order?.totalAmount || 0,
              customerInfo: { phone: payload.phone }
            }
          );
        }
      } else {
        if (typeof showToast === 'function') {
          showToast('Đặt lịch hẹn GearHub thành công! Mã đơn: #' + data.orderId, 'success');
        }
        if (typeof openCustomerPortal === 'function') {
          openCustomerPortal('track', { orderId: data.orderId, phone: payload.phone });
        }
      }
    } else {
      if (typeof showToast === 'function') {
        showToast(data.message || 'Lỗi đặt lịch hẹn', 'error');
      }
    }
  } catch {
    if (typeof showToast === 'function') {
      showToast('Lỗi kết nối máy chủ khi đặt lịch hẹn', 'error');
    }
  } finally {
    if (btn) btn.disabled = false;
    selectPaymentMethodUI(paymentMethod);
  }
}
