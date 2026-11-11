
// ==================== 0B. GEARHUB HERO SPOTLIGHT SELECTOR ====================
const FINISH_DATA = {
  clean: {
    label: 'Dịch vụ Vệ sinh Laptop Lấy liền',
    alt: 'Vệ sinh tản nhiệt laptop sinh viên GearHub',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=1200&auto=format&fit=crop&q=80',
    headline: 'Combo Sinh Viên Cool & Clean',
    desc: 'Hút sạch bụi quạt tản nhiệt, tra keo gốm Arctic MX-4, hạ ngay 10–15°C khi compile code hoặc render đồ họa. Hoàn thành nhanh 30–45 phút tại sảnh trường.',
    price: '79.000 ₫',
    specs: [
      { k: 'Vật tư chuẩn', v: 'Keo gốm Arctic MX-4' },
      { k: 'Thời gian', v: 'Lấy liền 30–45 phút' },
      { k: 'Cam kết', v: 'Đo nhiệt trước & sau' },
      { k: 'Chi phí', v: 'Đồng giá 79.000 ₫ SV' }
    ]
  },
  keyboard: {
    label: 'Thuê Bàn Phím Cơ Custom Sinh Viên',
    alt: 'Thuê bàn phím cơ DAREU EK75 Pro sinh viên',
    image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=1200&auto=format&fit=crop&q=80',
    headline: 'Thuê Phím Cơ DareU EK75 Gõ Êm KTX',
    desc: 'Dream Switch lube sẵn, đệm Gasket Mount êm ái 32dB không ồn phòng trọ. Kết nối 3 mode Bluetooth/2.4G/Type-C linh hoạt.',
    price: '25.000 ₫ / ngày',
    specs: [
      { k: 'Cảm giác gõ', v: 'Dream Switch êm 32dB' },
      { k: 'Kết nối', v: 'Type-C / 2.4G / BT5.0' },
      { k: 'Phụ kiện kèm', v: 'Dây Type-C & Keypuller' },
      { k: 'Thủ tục', v: 'Chỉ cần Thẻ Sinh Viên' }
    ]
  },
  mouse: {
    label: 'Thuê Chuột Silent Công Thái Học',
    alt: 'Thuê chuột không dây công thái học chống mỏi cổ tay',
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=1200&auto=format&fit=crop&q=80',
    headline: 'Chuột Công Thái Học Silent Chống Mỏi',
    desc: 'Form ôm sát lòng bàn tay chống mỏi cổ tay khi gõ code dài hạn. Click bấm Silent êm ái hoàn toàn không gây ồn thư viện hay phòng KTX.',
    price: '15.000 ₫ / ngày',
    specs: [
      { k: 'Thiết kế', v: 'Công thái học chống mỏi' },
      { k: 'Nút bấm', v: 'Silent Click siêu êm' },
      { k: 'Kết nối', v: 'Không dây 2.4GHz pin trâu' },
      { k: 'Thủ tục', v: 'Thẻ SV không cọc' }
    ]
  },
  slide: {
    label: 'Combo Thiết Bị Thuyết Trình Điểm A',
    alt: 'Hub chuyển đổi máy chiếu Type-C HDMI VGA',
    image: 'https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=1200&auto=format&fit=crop&q=80',
    headline: 'Combo Hub Type-C & Bút Trình Chiếu',
    desc: 'Hub đa năng HDMI 4K + VGA tương thích 100% máy chiếu giảng đường ĐHKHTN, kèm bút laser đỏ lật slide nhạy bén.',
    price: '20.000 ₫ / buổi',
    specs: [
      { k: 'Tương thích', v: 'HDMI 4K + VGA máy chiếu' },
      { k: 'Phụ kiện', v: 'Bút laser lật slide từ xa' },
      { k: 'Ứng dụng', v: 'Báo cáo đồ án / Seminar' },
      { k: 'Thủ tục', v: 'Thẻ SV lấy ngay tại sảnh' }
    ]
  },
  natural: {
    label: 'Dịch vụ Vệ sinh Laptop Lấy liền',
    alt: 'GearHub Spa Laptop',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=1200&auto=format&fit=crop&q=80',
    headline: 'Combo Sinh Viên Cool & Clean',
    desc: 'Hút sạch bụi quạt, tra keo gốm Arctic MX-4, hạ ngay 10–15°C khi compile code.',
    price: '79.000 ₫',
    specs: [
      { k: 'Vật tư chuẩn', v: 'Keo gốm Arctic MX-4' },
      { k: 'Thời gian', v: 'Lấy liền 30–45 phút' },
      { k: 'Cam kết', v: 'Đo nhiệt trước & sau' },
      { k: 'Chi phí', v: 'Đồng giá 79.000 ₫ SV' }
    ]
  }
};

function selectFinishSwatch(finish) {
  const data = FINISH_DATA[finish] || FINISH_DATA.clean || FINISH_DATA.natural;
  const imgEl = document.getElementById('stage-main-image');
  if (imgEl) {
    imgEl.src = data.image;
    imgEl.alt = data.alt;
  }
  const tagEl = document.getElementById('stage-finish-tag');
  if (tagEl) {
    tagEl.innerText = data.label;
  }
  const titleEl = document.getElementById('stage-main-title') || document.querySelector('.editorial-title');
  if (titleEl && data.headline) {
    titleEl.innerText = data.headline;
  }
  const descEl = document.getElementById('stage-main-desc') || document.querySelector('.editorial-desc');
  if (descEl && data.desc) {
    descEl.innerText = data.desc;
  }
  const priceEl = document.getElementById('stage-price-strong') || document.querySelector('.price-strong');
  if (priceEl && data.price) {
    priceEl.innerText = data.price;
  }

  // Update dynamic spec pills if present
  if (Array.isArray(data.specs)) {
    const specItems = document.querySelectorAll('#stage-specs-block .spec-line');
    data.specs.forEach((s, idx) => {
      if (specItems[idx]) {
        const kEl = specItems[idx].querySelector('.spec-k');
        const vEl = specItems[idx].querySelector('.spec-v');
        if (kEl) kEl.innerText = s.k;
        if (vEl) vEl.innerText = s.v;
      }
    });
  }

  document.querySelectorAll('.swatch-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-swatch') === finish);
  });
}

// ============================================================================
// TECHSTORE ATELIER - Storefront, Hardware Configurator, VietQR & Self-Service
// ============================================================================

let allProducts = [];
let currentBrand = 'all';
let currentSearch = '';
let currentSpecsFilter = {
  target: 'all',
  policy: 'all',
  standard: 'all',
  priceRange: 'all',
  sort: 'default'
};
let currentUser = null;
let userWishlist = [];
let chatHistory = [];

let activeQrSession = {
  orderId: null,
  paymentRef: null,
  expiresAt: null,
  pollTimer: null,
  countdownTimer: null,
  phone: ''
};

// Interactive Hero Hardware Bench Models (Mapped to GearHub catalog services/rentals)
const BENCH_MODELS = [
  {
    id: 'gearhub_clean_cool',
    name: 'Vệ Sinh Laptop & Tra Keo MX-4',
    brand: 'GearHub Dịch Vụ',
    finish: 'Keo Gốm Arctic MX-4 · Lấy Liền 30-45P',
    specBase: 'Hút bụi quạt tản · Giảm 10-15°C · Test HWMonitor',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=1200&auto=format&fit=crop&q=80',
    basePrice: 79000,
    saving: 40000,
    capacities: [
      { label: 'Gói Tiêu Chuẩn (MX-4)', delta: 0 },
      { label: 'Gói Nâng Cao (MX-6 + Lube Quạt)', delta: 60000 }
    ]
  },
  {
    id: 'gearhub_rent_ek75',
    name: 'Thuê Phím Cơ DareU EK75',
    brand: 'GearHub Cho Thuê',
    finish: 'Gasket Mount · Dream Switch Âm Trầm',
    specBase: 'Layout 75% · Cáp Type-C bọc dù · Không cọc tiền mặt',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=1200&auto=format&fit=crop&q=80',
    basePrice: 25000,
    saving: 10000,
    capacities: [
      { label: 'Thuê 1 Ngày (24H)', delta: 0 },
      { label: 'Combo 3 Ngày Chạy Deadline', delta: 40000 }
    ]
  },
  {
    id: 'gearhub_rent_mouse',
    name: 'Thuê Chuột Silent Ergonomic',
    brand: 'GearHub Cho Thuê',
    finish: 'Công Thái Học 57° · Silent Switch Siêu Êm',
    specBase: 'Pin sạc Type-C · Dùng phòng thư viện · Không cọc',
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=1200&auto=format&fit=crop&q=80',
    basePrice: 15000,
    saving: 5000,
    capacities: [
      { label: 'Thuê 1 Ngày (24H)', delta: 0 },
      { label: 'Combo Tuần Học Tập', delta: 55000 }
    ]
  }
];

let activeBenchModelIdx = 0;
let activeBenchCapIdx = 0;
let showAllCatalog = false;
let revealObserver = null;

const formatMoney = (amount) =>
  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount || 0);

const twoDigits = (n) => (n < 10 ? '0' + n : String(n));

// ==================== 0. KHỞI TẠO & MOTION REVEAL ====================

document.addEventListener('DOMContentLoaded', async () => {
  initScrollReveal();
  hydrateFiltersFromUrl();
  renderSkeletonCards();

  await Promise.all([loadProducts(), updateCart(), checkAuthState(), loadWishlistState()]);

  // Sync bench basePrice with loaded catalog if present
  BENCH_MODELS.forEach((m) => {
    const found =
      allProducts.find((p) => String(p.id) === String(m.id)) ||
      allProducts.find((p) => p.name.toLowerCase().includes(m.name.toLowerCase()));
    if (found && Number(found.price) > 0) {
      m.id = found.id;
      m.basePrice = Number(found.price);
    }
  });
  updateBenchDisplay();
  updateBrandCountBadges();

  // Auto-open Customer Self-Service Portal when visiting /customer-portal or ?portal=1
  const urlParams = new URLSearchParams(window.location.search);
  if (window.location.pathname === '/customer-portal' || urlParams.get('portal') === '1') {
    const requestedTab = urlParams.get('tab') || 'track';
    openCustomerPortal(requestedTab);
  }

  document.getElementById('btn-open-cart')?.addEventListener('click', openCartModal);
  document.getElementById('order-form')?.addEventListener('submit', handlePlaceOrder);

  // Search input expansion and keyboard shortcut '/'
  const searchInput = document.getElementById('input-search');
  const searchBox = document.querySelector('.search-box');
  const headerCenter = document.querySelector('.header-center');
  const headerInner = document.querySelector('.header-inner');
  const searchKbd = document.getElementById('btn-search-kbd') || document.querySelector('.search-kbd');

  const expandSearch = () => {
    headerInner?.classList.add('search-active');
    headerCenter?.classList.add('is-expanded');
    searchBox?.classList.add('is-expanded');
  };

  const collapseSearch = () => {
    headerInner?.classList.remove('search-active');
    headerCenter?.classList.remove('is-expanded');
    searchBox?.classList.remove('is-expanded');
  };

  const focusSearchInput = () => {
    if (!searchInput) return;
    expandSearch();
    searchInput.focus();
    searchInput.select?.();
  };

  if (searchInput) {
    searchInput.addEventListener('focus', expandSearch);
    searchInput.addEventListener('blur', collapseSearch);

    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        scrollToCatalog();
      }
      if (e.key === 'Escape') {
        searchInput.blur();
      }
    });
  }

  if (searchBox) {
    searchBox.addEventListener('click', (e) => {
      if (!e.target.closest('#btn-clear-search')) {
        focusSearchInput();
      }
    });
  }

  if (searchKbd) {
    searchKbd.addEventListener('click', (e) => {
      e.stopPropagation();
      focusSearchInput();
    });
    searchKbd.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        focusSearchInput();
      }
    });
  }

  // Keyboard shortcut '/' to focus and expand search input
  document.addEventListener('keydown', (e) => {
    const activeEl = document.activeElement;
    const tagName = activeEl?.tagName;
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(tagName) || activeEl?.isContentEditable) {
      return;
    }
    if (e.key === '/' || e.code === 'Slash') {
      e.preventDefault();
      focusSearchInput();
    }
  });

  window.addEventListener('popstate', () => {
    hydrateFiltersFromUrl();
    renderProductList();
  });
});

function copyTextToClipboard(text, label = 'Nội dung') {
  if (!text) return;
  const clean = String(text).trim();
  const fallbackCopy = () => {
    try {
      const ta = document.createElement('textarea');
      ta.value = clean;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      showToast(`Đã sao chép ${label}: ${clean}`, 'info');
    } catch {
      showToast(`Mã ${label}: ${clean}`, 'info');
    }
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard
      .writeText(clean)
      .then(() => {
        showToast(`Đã sao chép ${label}: ${clean}`, 'info');
      })
      .catch(fallbackCopy);
  } else {
    fallbackCopy();
  }
}

function initScrollReveal() {
  const shutterEl = document.getElementById('hero-shutter-frame');
  if (shutterEl) {
    requestAnimationFrame(() => shutterEl.classList.add('in'));
  }

  if ('IntersectionObserver' in window) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );
  } else {
    const fallbackReveal = () => {
      const windowH = window.innerHeight || document.documentElement.clientHeight;
      document.querySelectorAll('[data-reveal]:not(.in)').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= windowH * 0.95) {
          el.classList.add('in');
        }
      });
    };
    window.addEventListener('scroll', fallbackReveal, { passive: true });
    window.addEventListener('resize', fallbackReveal, { passive: true });
    fallbackReveal();
  }

  observeReveals();
}

function observeReveals() {
  const revealEls = document.querySelectorAll('[data-reveal]:not(.in)');
  if (!revealObserver) {
    revealEls.forEach((el) => el.classList.add('in'));
    return;
  }
  revealEls.forEach((el) => revealObserver.observe(el));
}

function expandAllCatalog() {
  showAllCatalog = true;
  renderProductList();
}

// ==================== 0B. HERO HARDWARE CONFIGURATOR ====================

function selectBenchModel(idx) {
  activeBenchModelIdx = idx;
  document.querySelectorAll('.bench-model-btn').forEach((btn, i) => {
    btn.classList.toggle('active', i === idx);
  });
  updateBenchDisplay();
}

function selectBenchCapacity(idx) {
  activeBenchCapIdx = idx;
  document.querySelectorAll('.bench-cap-btn').forEach((btn, i) => {
    btn.classList.toggle('active', i === idx);
  });
  updateBenchDisplay();
}

function updateBenchDisplay() {
  const model = BENCH_MODELS[activeBenchModelIdx] || BENCH_MODELS[0];
  const cap = model.capacities[activeBenchCapIdx] || model.capacities[0];
  const finalPrice = model.basePrice + cap.delta;

  const imgEl = document.getElementById('hero-stage-image');
  if (imgEl && imgEl.src !== model.image) {
    imgEl.src = model.image;
    imgEl.alt = model.name;
  }

  const visualLabelEl = document.getElementById('hero-visual-label');
  if (visualLabelEl) visualLabelEl.innerText = `${model.name} (${cap.label}) · Chính hãng VN/A`;

  const capModelEl = document.getElementById('hero-caption-model');
  if (capModelEl) capModelEl.innerText = `${model.name} · ${cap.label}`;

  const capFinishEl = document.getElementById('hero-caption-finish');
  if (capFinishEl) capFinishEl.innerText = model.finish;

  const specEl = document.getElementById('bench-spec-text');
  if (specEl) specEl.innerText = `${model.specBase} · ${cap.label}`;

  const priceEl = document.getElementById('bench-live-price');
  if (priceEl) priceEl.innerText = formatMoney(finalPrice);

  const saveEl = document.getElementById('bench-live-saving');
  if (saveEl) saveEl.innerText = `Tiết kiệm ${formatMoney(model.saving)} so với giá niêm yết · Giao nhanh 2H`;
}

async function triggerBenchBuy() {
  const model = BENCH_MODELS[activeBenchModelIdx] || BENCH_MODELS[0];
  const matched =
    allProducts.find((p) => String(p.id) === String(model.id)) ||
    allProducts.find((p) => p.name.toLowerCase().includes(model.name.toLowerCase())) ||
    allProducts.find((p) => (p.brand || '').toLowerCase() === model.brand.toLowerCase()) ||
    allProducts[0];
  const targetId = matched ? matched.id : model.id;
  await buyNow(targetId);
}

// ==================== 1. DANH MỤC, PHÂN LOẠI & BỘ LỌC ĐA CHIỀU ====================

const CATEGORY_BUTTON_LABELS = {
  all: 'Tất cả phân loại',
  service: 'Gói Dịch Vụ Vệ Sinh',
  rental: 'Thiết Bị Cho Thuê',
  accessory: 'Phụ Kiện IT Học Tập',
  other: 'Danh Mục Khác'
};

const CATEGORY_ICONS = {
  service:
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>',
  rental:
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"></rect><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M8 14h8"></path></svg>',
  accessory:
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>',
  other:
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>'
};

function getProductCategory(product) {
  if (window.CatalogFilter && typeof window.CatalogFilter.inferCategory === 'function') {
    return window.CatalogFilter.inferCategory(product);
  }
  return String(product?.category || 'other').toLowerCase().trim() || 'other';
}

function getCategoryMeta(catKey) {
  if (window.CatalogFilter && typeof window.CatalogFilter.getCategoryMeta === 'function') {
    return window.CatalogFilter.getCategoryMeta(catKey);
  }
  return {
    key: catKey,
    label: CATEGORY_BUTTON_LABELS[catKey] || 'Danh mục khác',
    unitLabel: 'mục',
    subtitle: ''
  };
}

function updateBrandCountBadges() {
  if (!Array.isArray(allProducts) || allProducts.length === 0) return;

  const counts = {
    all: allProducts.length,
    service: 0,
    rental: 0,
    accessory: 0
  };
  allProducts.forEach((p) => {
    const cat = getProductCategory(p);
    if (counts[cat] !== undefined) counts[cat] += 1;
  });

  document.querySelectorAll('.filter-bar .btn-filter').forEach((btn) => {
    const key = (btn.getAttribute('data-brand') || 'all').toLowerCase();
    const count = counts[key] !== undefined ? counts[key] : 0;
    const baseLabel = CATEGORY_BUTTON_LABELS[key] || btn.getAttribute('data-label') || key;
    btn.innerHTML = `${baseLabel} <span class="brand-count-badge">${count}</span>`;
  });

  const allPresetBtn = document.querySelector('.quick-presets-bar .preset-pill[data-preset="all"]');
  if (allPresetBtn) {
    allPresetBtn.innerText = `Tất cả (${counts.all} gói)`;
  }

  const ribbonLabels = {
    all: `Tất cả ${counts.all} dịch vụ & gear`,
    service: `Dịch vụ vệ sinh (${counts.service})`,
    rental: `Thiết bị cho thuê (${counts.rental})`,
    accessory: `Phụ kiện & Kit (${counts.accessory})`
  };
  document.querySelectorAll('[data-ribbon-brand]').forEach((btn) => {
    const key = (btn.getAttribute('data-ribbon-brand') || 'all').toLowerCase();
    if (ribbonLabels[key]) btn.innerText = ribbonLabels[key];
  });
}

function syncFilterButtonsActiveState() {
  const brandNorm = String(currentBrand || 'all').toLowerCase();

  document.querySelectorAll('.filter-bar .btn-filter').forEach((btn) => {
    const b = (btn.getAttribute('data-brand') || 'all').toLowerCase();
    btn.classList.toggle('active', b === brandNorm);
  });

  document.querySelectorAll('[data-ribbon-brand]').forEach((btn) => {
    const b = (btn.getAttribute('data-ribbon-brand') || 'all').toLowerCase();
    btn.classList.toggle('active', b === brandNorm);
  });

  const { target, policy, standard, priceRange, sort } = currentSpecsFilter;
  const sortNorm = sort || 'default';
  const hasSecondaryFilters =
    target !== 'all' || policy !== 'all' || standard !== 'all' || priceRange !== 'all';
  let activePreset = '';

  if ((sortNorm === 'discount' || sortNorm === 'discount_desc') && !hasSecondaryFilters && brandNorm === 'all') {
    activePreset = 'discount';
  } else if (['service', 'rental', 'accessory'].includes(brandNorm) && !hasSecondaryFilters && sortNorm === 'default') {
    activePreset = brandNorm;
  } else if (brandNorm === 'all' && !hasSecondaryFilters && sortNorm === 'default') {
    activePreset = 'all';
  }

  document.querySelectorAll('.quick-presets-bar .preset-pill').forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-preset') === activePreset);
  });
}

function applyQuickPreset(preset) {
  currentSpecsFilter = { target: 'all', policy: 'all', standard: 'all', priceRange: 'all', sort: 'default' };

  if (preset === 'discount') {
    currentBrand = 'all';
    currentSpecsFilter.sort = 'discount';
  } else if (['service', 'rental', 'accessory'].includes(preset)) {
    currentBrand = preset;
  } else {
    currentBrand = 'all';
  }

  const setSelectVal = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.value = val;
  };
  setSelectVal('filter-target', currentSpecsFilter.target);
  setSelectVal('filter-policy', currentSpecsFilter.policy);
  setSelectVal('filter-standard', currentSpecsFilter.standard);
  setSelectVal('filter-price', currentSpecsFilter.priceRange);
  setSelectVal('filter-sort', currentSpecsFilter.sort || 'default');

  syncFiltersToUrl();
  renderProductList();
}

function hydrateFiltersFromUrl() {
  const params = new URLSearchParams(window.location.search);
  currentBrand = params.get('category') || params.get('brand') || 'all';
  currentSearch = (params.get('q') || '').toLowerCase().trim();
  currentSpecsFilter.target = params.get('target') || 'all';
  currentSpecsFilter.policy = params.get('policy') || 'all';
  currentSpecsFilter.standard = params.get('standard') || 'all';
  currentSpecsFilter.priceRange = params.get('priceRange') || 'all';
  currentSpecsFilter.sort = params.get('sort') || 'default';

  const searchInput = document.getElementById('input-search');
  if (searchInput) searchInput.value = params.get('q') || '';
  const clearBtn = document.getElementById('btn-clear-search');
  if (clearBtn) clearBtn.style.display = currentSearch ? 'inline-flex' : 'none';

  const setSelectVal = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.value = val;
  };
  setSelectVal('filter-target', currentSpecsFilter.target);
  setSelectVal('filter-policy', currentSpecsFilter.policy);
  setSelectVal('filter-standard', currentSpecsFilter.standard);
  setSelectVal('filter-price', currentSpecsFilter.priceRange);
  setSelectVal('filter-sort', currentSpecsFilter.sort || 'default');

  syncFilterButtonsActiveState();
}

function syncFiltersToUrl() {
  const params = new URLSearchParams();
  if (currentBrand && currentBrand !== 'all') params.set('category', currentBrand);
  if (currentSearch) params.set('q', currentSearch);
  if (currentSpecsFilter.target !== 'all') params.set('target', currentSpecsFilter.target);
  if (currentSpecsFilter.policy !== 'all') params.set('policy', currentSpecsFilter.policy);
  if (currentSpecsFilter.standard !== 'all') params.set('standard', currentSpecsFilter.standard);
  if (currentSpecsFilter.priceRange !== 'all') params.set('priceRange', currentSpecsFilter.priceRange);
  if (currentSpecsFilter.sort && currentSpecsFilter.sort !== 'default') {
    params.set('sort', currentSpecsFilter.sort);
  }

  const qs = params.toString();
  const nextUrl = qs ? `${window.location.pathname}?${qs}` : window.location.pathname;
  window.history.replaceState({}, '', nextUrl);
  syncFilterButtonsActiveState();
  updateBreadcrumbAndChips();
}

function getSelectedOptionText(selectId, fallbackVal) {
  const sel = document.getElementById(selectId);
  return sel?.options[sel.selectedIndex]?.text || fallbackVal;
}

function updateBreadcrumbAndChips() {
  const sep = document.getElementById('bc-active-sep');
  const label = document.getElementById('bc-active-label');
  const chipsBox = document.getElementById('active-filter-chips');

  const activeTags = [];
  if (currentBrand && currentBrand !== 'all') {
    const catLabel = CATEGORY_BUTTON_LABELS[currentBrand] || currentBrand;
    activeTags.push({ label: `Phân loại: ${catLabel}`, clear: () => filterByBrand('all') });
  }
  if (currentSpecsFilter.target && currentSpecsFilter.target !== 'all') {
    activeTags.push({
      label: `Thiết bị: ${getSelectedOptionText('filter-target', currentSpecsFilter.target)}`,
      clear: () => {
        const el = document.getElementById('filter-target');
        if (el) el.value = 'all';
        handleSpecsFilterChange();
      }
    });
  }
  if (currentSpecsFilter.policy && currentSpecsFilter.policy !== 'all') {
    activeTags.push({
      label: `Hình thức: ${getSelectedOptionText('filter-policy', currentSpecsFilter.policy)}`,
      clear: () => {
        const el = document.getElementById('filter-policy');
        if (el) el.value = 'all';
        handleSpecsFilterChange();
      }
    });
  }
  if (currentSpecsFilter.standard && currentSpecsFilter.standard !== 'all') {
    activeTags.push({
      label: `Tiêu chuẩn: ${getSelectedOptionText('filter-standard', currentSpecsFilter.standard)}`,
      clear: () => {
        const el = document.getElementById('filter-standard');
        if (el) el.value = 'all';
        handleSpecsFilterChange();
      }
    });
  }
  if (currentSpecsFilter.priceRange && currentSpecsFilter.priceRange !== 'all') {
    activeTags.push({
      label: `Giá: ${getSelectedOptionText('filter-price', currentSpecsFilter.priceRange)}`,
      clear: () => {
        const el = document.getElementById('filter-price');
        if (el) el.value = 'all';
        handleSpecsFilterChange();
      }
    });
  }
  if (currentSearch) {
    activeTags.push({
      label: `Từ khóa: "${currentSearch}"`,
      clear: () => {
        const el = document.getElementById('input-search');
        if (el) el.value = '';
        handleSearch('');
      }
    });
  }

  if (sep && label) {
    if (activeTags.length > 0) {
      sep.style.display = 'inline';
      label.style.display = 'inline';
      label.innerText = activeTags.map((t) => t.label).join(' · ');
    } else {
      sep.style.display = 'none';
      label.style.display = 'none';
    }
  }

  if (chipsBox) {
    if (activeTags.length === 0) {
      chipsBox.style.display = 'none';
      chipsBox.innerHTML = '';
    } else {
      chipsBox.style.display = 'flex';
      chipsBox.innerHTML = activeTags
        .map(
          (t, idx) => `
          <button type="button" class="filter-chip-tag" onclick="clearSingleFilterChip(${idx})">
            <span>${t.label}</span>
            <span>&times;</span>
          </button>
        `
        )
        .join('');
      window._activeFilterClearFns = activeTags.map((t) => t.clear);
    }
  }
}

function clearSingleFilterChip(idx) {
  if (window._activeFilterClearFns && window._activeFilterClearFns[idx]) {
    window._activeFilterClearFns[idx]();
  }
}

function renderSkeletonCards() {
  const container = document.getElementById('product-list');
  if (!container) return;
  container.innerHTML = `<div class="product-grid">${Array.from({ length: 6 })
    .map(
      () => `
      <div class="product-card" style="min-height: 420px; padding: 1.5rem;">
        <div style="height: 240px; background-color: var(--bg); margin-bottom: 1rem;"></div>
        <div style="height: 22px; width: 75%; background-color: var(--bg); margin-bottom: 0.75rem;"></div>
        <div style="height: 18px; width: 55%; background-color: var(--bg);"></div>
      </div>
    `
    )
    .join('')}</div>`;
}

async function loadProducts() {
  try {
    const res = await fetch('/api/products?brand=all');
    if (res.ok) {
      const { data } = await res.json();
      allProducts = data || [];
    } else {
      const fallbackRes = await fetch('../data/products.json');
      if (fallbackRes.ok) {
        allProducts = (await fallbackRes.json()) || [];
      }
    }
    updateBrandCountBadges();
    renderProductList();
  } catch (err) {
    console.error('Lỗi tải sản phẩm:', err);
  }
}

let searchScrollTimer = null;

function scrollToCatalog() {
  const section = document.getElementById('catalog-section');
  if (!section) return;
  if (currentSearch) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  const rect = section.getBoundingClientRect();
  // Scroll if section heading is not already in the upper reading zone
  if (rect.top > 130 || rect.top < -40) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

function handleSearch(val) {
  const inputVal = val !== undefined ? val : document.getElementById('input-search')?.value || '';
  currentSearch = String(inputVal).toLowerCase().trim();
  const clearBtn = document.getElementById('btn-clear-search');
  if (clearBtn) clearBtn.style.display = currentSearch ? 'inline-flex' : 'none';
  syncFiltersToUrl();
  renderProductList();

  if (currentSearch) {
    if (searchScrollTimer) clearTimeout(searchScrollTimer);
    searchScrollTimer = setTimeout(() => {
      scrollToCatalog();
    }, 120);
  }
}

function filterByBrand(brand) {
  currentBrand = brand;
  document.querySelectorAll('.filter-bar .btn-filter').forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-brand')?.toLowerCase() === brand.toLowerCase());
  });
  syncFiltersToUrl();
  renderProductList();
}

function handleSpecsFilterChange() {
  currentSpecsFilter.target = document.getElementById('filter-target')?.value || 'all';
  currentSpecsFilter.policy = document.getElementById('filter-policy')?.value || 'all';
  currentSpecsFilter.standard = document.getElementById('filter-standard')?.value || 'all';
  currentSpecsFilter.priceRange = document.getElementById('filter-price')?.value || 'all';
  currentSpecsFilter.sort = document.getElementById('filter-sort')?.value || 'default';
  syncFiltersToUrl();
  renderProductList();
}

function resetAllFilters() {
  currentBrand = 'all';
  currentSearch = '';
  currentSpecsFilter = { target: 'all', policy: 'all', standard: 'all', priceRange: 'all', sort: 'default' };

  const searchInput = document.getElementById('input-search');
  if (searchInput) searchInput.value = '';
  const clearBtn = document.getElementById('btn-clear-search');
  if (clearBtn) clearBtn.style.display = 'none';

  document.querySelectorAll('.filter-bar .btn-filter').forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-brand') === 'all');
  });
  document.querySelectorAll('.quick-presets-bar .preset-pill').forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-preset') === 'all');
  });

  ['filter-target', 'filter-policy', 'filter-standard', 'filter-price'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = 'all';
  });
  const sortEl = document.getElementById('filter-sort');
  if (sortEl) sortEl.value = 'default';

  syncFiltersToUrl();
  renderProductList();
}

function renderProductCardHtml(p, idx) {
  const discount = p.oldPrice && p.oldPrice > p.price ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;
  const isLiked = userWishlist.includes(String(p.id));
  const badgeText = p.badge || (discount > 0 ? `Giảm -${discount}%` : 'Sinh viên');
  const originTag = p.unit ? `Đơn vị: ${p.unit}` : 'Lấy liền tại trường';
  const durationTag = p.duration || 'Lấy liền';
  const catMeta = getCategoryMeta(getProductCategory(p));
  const categoryBadge = p.categoryLabel || catMeta.badgeLabel || p.brand;

  let specPillsHtml = '';
  if (p.detailedSpecs) {
    const ds = p.detailedSpecs;
    const pills = [];
    if (ds.time) pills.push(`<span class="spec-pill spec-pill--highlight">${ds.time}</span>`);
    if (ds.type) pills.push(`<span class="spec-pill">${ds.type}</span>`);
    if (ds.impact) pills.push(`<span class="spec-pill">${ds.impact}</span>`);
    if (ds.model) pills.push(`<span class="spec-pill spec-pill--highlight">${ds.model}</span>`);
    if (ds.connection) pills.push(`<span class="spec-pill">${ds.connection}</span>`);
    if (ds.tools) pills.push(`<span class="spec-pill">${ds.tools.split(',')[0]}</span>`);
    if (ds.components) pills.push(`<span class="spec-pill spec-pill--highlight">${ds.components.split(',')[0]}</span>`);
    if (pills.length > 0) {
      specPillsHtml = `<div class="product-specs-pills">${pills.slice(0, 3).join('')}</div>`;
    }
  }
  if (!specPillsHtml) {
    specPillsHtml = `<p style="font-size:var(--fs-sm); color:var(--muted); line-height:1.4;">${p.description || p.specs || ''}</p>`;
  }

  return `
    <article class="product-card" data-category="${catMeta.key}" data-reveal style="--i:${idx % 3}">
      <div class="card-top-badges">
        <div class="card-badge-stack">
          <span class="card-discount-badge">${badgeText}</span>
          <span class="card-origin-badge">${originTag}</span>
        </div>
        <button type="button" class="card-wish-icon-btn ${isLiked ? 'active' : ''}" onclick="toggleWishlistItem('${p.id}')" title="${isLiked ? 'Bỏ lưu yêu thích' : 'Lưu vào danh sách yêu thích'}" aria-label="Yêu thích">
          ${isLiked ? '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>' : '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>'}
        </button>
      </div>

      <div class="product-img-wrapper" onclick="openProductDetailModal('${p.id}')">
        <img class="product-img" src="${p.image}" alt="${p.name}" loading="lazy" decoding="async">
        <span class="card-quickview-pill">Xem chi tiết &amp; AI tư vấn</span>
      </div>

      <div class="product-body">
        <div class="product-meta-row">
          <span class="product-brand-tag product-brand-tag--${catMeta.key}">${categoryBadge}</span>
          <span class="product-stock-tag"><span class="trust-dot" style="display:inline-block; vertical-align:middle; margin-right:4px;"></span>${durationTag}</span>
        </div>

        <div class="product-title" onclick="openProductDetailModal('${p.id}')" title="${p.name}">${p.name}</div>

        ${specPillsHtml}

        <div class="product-price-box">
          <div class="price-main-line">
            <span class="current-price">${formatMoney(p.price)}</span>
            ${p.oldPrice && p.oldPrice > p.price ? `<span class="old-price">${formatMoney(p.oldPrice)}</span>` : ''}
          </div>
          <div class="price-sub-line">
            <span>${p.duration ? `Thời gian: ${p.duration}` : 'Sảnh C ĐHKHTN'}</span>
            <span>${p.unit ? `Tính theo ${p.unit}` : 'Bảo hành 7 ngày'}</span>
          </div>
        </div>

        <div class="product-actions">
          <button type="button" class="btn-buy-now" onclick="buyNow('${p.id}')">Đặt lịch / Thuê ngay</button>
          <button type="button" class="btn-add-cart" onclick="addToCart('${p.id}')" title="Thêm vào danh sách đặt">+ Đặt lịch</button>
          <button type="button" class="btn-add-cart" onclick="openProductDetailModal('${p.id}')" title="Xem chi tiết">Chi tiết</button>
        </div>
      </div>
    </article>
  `;
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function renderProductList() {
  const container = document.getElementById('product-list');
  if (!container) return;

  const isSearching = Boolean(currentSearch && currentSearch.trim().length > 0);
  const heroSection = document.getElementById('hero-section');
  const uspSection = document.querySelector('.usp-recognition-section');
  const headlineEl = document.querySelector('#catalog-section .section-headline');

  if (document.body) {
    document.body.classList.toggle('is-searching', isSearching);
  }
  if (heroSection) {
    heroSection.style.display = isSearching ? 'none' : '';
  }
  if (uspSection) {
    uspSection.style.display = isSearching ? 'none' : '';
  }
  if (headlineEl) {
    if (isSearching) {
      if (!headlineEl.dataset.defaultTitle) {
        headlineEl.dataset.defaultTitle = headlineEl.innerText;
      }
      headlineEl.innerText = `Kết quả tìm kiếm cho "${currentSearch}"`;
    } else if (headlineEl.dataset.defaultTitle) {
      headlineEl.innerText = headlineEl.dataset.defaultTitle;
    }
  }

  updateBreadcrumbAndChips();

  const list = window.CatalogFilter
    ? window.CatalogFilter.filterProducts(allProducts, {
        brand: currentBrand,
        target: currentSpecsFilter.target,
        policy: currentSpecsFilter.policy,
        standard: currentSpecsFilter.standard,
        priceRange: currentSpecsFilter.priceRange,
        search: currentSearch,
        sort: currentSpecsFilter.sort
      })
    : [...allProducts];

  const countEl = document.getElementById('total-products-count');
  if (countEl) countEl.innerText = list.length;

  const moreWrap = document.getElementById('catalog-more-wrap');

  if (list.length === 0) {
    if (moreWrap) moreWrap.style.display = 'none';
    const searchNotice = currentSearch
      ? `Không tìm thấy kết quả phù hợp với từ khóa "<strong>${escapeHtml(currentSearch)}</strong>".`
      : 'Không tìm thấy kết quả nào phù hợp với bộ lọc hiện tại.';
    container.innerHTML = `
      <div class="catalog-empty-state" data-reveal style="--i:0">
        <div class="catalog-empty-icon" aria-hidden="true" style="margin-bottom:0.75rem; color:var(--muted);">
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            <line x1="8" y1="11" x2="14" y2="11"></line>
          </svg>
        </div>
        <h3 class="catalog-empty-title">Không tìm thấy kết quả</h3>
        <p class="catalog-empty-desc">${searchNotice} Bạn vui lòng thử tìm kiếm theo tên thiết bị khác, từ khóa mô tả ngắn gọn hoặc đặt lại bộ lọc.</p>
        <button type="button" class="btn-primary-sage" onclick="resetAllFilters()">Đặt lại toàn bộ bộ lọc</button>
      </div>
    `;
    if (typeof observeReveals === 'function') observeReveals();
    return;
  }

  const isUnfiltered =
    (!currentBrand || currentBrand === 'all') &&
    !currentSearch &&
    currentSpecsFilter.target === 'all' &&
    currentSpecsFilter.policy === 'all' &&
    currentSpecsFilter.standard === 'all' &&
    currentSpecsFilter.priceRange === 'all' &&
    (!currentSpecsFilter.sort || currentSpecsFilter.sort === 'default');

  const initialLimit = 12;
  const visibleList = isUnfiltered && !showAllCatalog ? list.slice(0, initialLimit) : list;

  if (moreWrap) {
    if (isUnfiltered && !showAllCatalog && list.length > initialLimit) {
      moreWrap.style.display = 'flex';
      moreWrap.innerHTML = `
        <button type="button" class="btn-secondary-tone" onclick="expandAllCatalog()">
          Xem đầy đủ toàn bộ ${list.length} dịch vụ &amp; thiết bị &darr;
        </button>
      `;
    } else {
      moreWrap.style.display = 'none';
      moreWrap.innerHTML = '';
    }
  }

  const isExplicitCrossSort =
    currentBrand === 'all' && currentSpecsFilter.sort && currentSpecsFilter.sort !== 'default';

  if (isExplicitCrossSort || !(window.CatalogFilter && window.CatalogFilter.groupProductsByCategory)) {
    const sortText = getSelectedOptionText('filter-sort', currentSpecsFilter.sort);
    container.innerHTML = `
      <div class="catalog-category-group">
        <div class="catalog-category-head">
          <div class="catalog-category-title-wrap">
            <span class="catalog-cat-icon">${CATEGORY_ICONS.other}</span>
            <div>
              <h3 class="catalog-cat-title">Danh sách tổng hợp (${visibleList.length} kết quả)</h3>
              <p class="catalog-cat-sub">Đang sắp xếp toàn bộ phân loại theo: ${sortText}</p>
            </div>
          </div>
          <button type="button" class="catalog-cat-action" onclick="const fs=document.getElementById('filter-sort'); if(fs) fs.value='default'; currentSpecsFilter.sort='default'; handleSpecsFilterChange();">
            Hiển thị theo 3 nhóm phân loại &rarr;
          </button>
        </div>
        <div class="product-grid">
          ${visibleList.map((p, idx) => renderProductCardHtml(p, idx)).join('')}
        </div>
      </div>
    `;
  } else {
    const groups = window.CatalogFilter.groupProductsByCategory(visibleList);
    const isSingleGroupSelected = currentBrand && currentBrand !== 'all';

    container.innerHTML = groups
      .map((group) => {
        const iconSvg = CATEGORY_ICONS[group.key] || CATEGORY_ICONS.other;
        const actionBtn = isSingleGroupSelected
          ? `<button type="button" class="catalog-cat-action" onclick="filterByBrand('all')">&larr; Xem tất cả phân loại</button>`
          : groups.length > 1
            ? `<button type="button" class="catalog-cat-action" onclick="filterByBrand('${group.key}')">Xem riêng nhóm này &rarr;</button>`
            : '';

        return `
          <section class="catalog-category-group" data-category="${group.key}" aria-label="${group.label}">
            <header class="catalog-category-head">
              <div class="catalog-category-title-wrap">
                <span class="catalog-cat-icon catalog-cat-icon--${group.key}">${iconSvg}</span>
                <div>
                  <div class="catalog-cat-title-row">
                    <h3 class="catalog-cat-title">${group.label}</h3>
                    <span class="catalog-cat-count">${group.items.length} ${group.unitLabel || 'mục'}</span>
                  </div>
                  <p class="catalog-cat-sub">${group.subtitle || ''}</p>
                </div>
              </div>
              ${actionBtn}
            </header>
            <div class="product-grid">
              ${group.items.map((p, idx) => renderProductCardHtml(p, idx)).join('')}
            </div>
          </section>
        `;
      })
      .join('');
  }

  observeReveals();
}

// ==================== 2. QUẢN LÝ GIỎ HÀNG & THANH TOÁN (COD + VIETQR) ====================

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
      showToast('Đã thêm sản phẩm vào giỏ hàng', 'success');
      if (openAfter) openCartModal();
    }
  } catch {
    showToast('Không thể thêm sản phẩm vào giỏ hàng', 'error');
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
    showToast('Không thể cập nhật số lượng', 'error');
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
    showToast('Không thể xóa sản phẩm khỏi giỏ', 'error');
  }
}

async function updateCart() {
  try {
    const res = await fetch('/api/cart');
    const { cart } = await res.json();
    const count = (cart || []).reduce((s, i) => s + i.quantity, 0);
    const el = document.getElementById('cart-count');
    if (el) el.innerText = count;
  } catch {}
}

function selectPaymentMethodUI(method) {
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
  try {
    const res = await fetch('/api/cart');
    const { cart, total } = await res.json();
    const container = document.getElementById('cart-items');

    if (!cart || cart.length === 0) {
      container.innerHTML =
        '<div style="padding: 1.5rem; background-color: var(--bg); color: var(--muted); text-align: center;">Giỏ hàng của bạn đang trống.</div>';
      document.getElementById('cart-total').innerText = '0 ₫';
    } else {
      container.innerHTML = cart
        .map(
          (i) => `
        <div class="cart-item">
          <div class="cart-item-info">
            <img class="cart-item-img" src="${i.image || ''}" alt="${i.name}" loading="lazy">
            <div>
              <div class="cart-item-title">${i.name}</div>
              <div class="cart-item-price">${formatMoney(i.price)} &times; ${i.quantity} = ${formatMoney(i.price * i.quantity)}</div>
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
      document.getElementById('cart-total').innerText = formatMoney(total || 0);
    }

    if (currentUser) {
      const cName = document.getElementById('c-name');
      const cPhone = document.getElementById('c-phone');
      const cAddr = document.getElementById('c-address');
      if (cName) cName.value = currentUser.fullName || '';
      if (cPhone) cPhone.value = currentUser.phone || '';
      if (cAddr) cAddr.value = currentUser.address || '';
      const hint = document.getElementById('remember-hint');
      if (hint) hint.style.display = 'inline';
    }

    openModal('cart-modal');
  } catch {
    showToast('Không thể tải giỏ hàng', 'error');
  }
}

function closeCartModal() {
  closeModal('cart-modal');
}

async function handlePlaceOrder(e) {
  e.preventDefault();
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
  const baseAddress = document.getElementById('c-address').value.trim();
  const baseNote = document.getElementById('c-note').value.trim();

  const combinedAddress = hallSlot ? `[Khung giờ: ${hallSlot}] - ${baseAddress}` : baseAddress;
  const combinedNote = studentId ? `MSSV: ${studentId}${baseNote ? ' · ' + baseNote : ''}` : baseNote;

  const payload = {
    fullName: document.getElementById('c-name').value.trim(),
    phone: document.getElementById('c-phone').value.trim(),
    address: combinedAddress,
    note: combinedNote,
    rememberMe: document.getElementById('c-remember').checked,
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
      closeModal('cart-modal');
      updateCart();
      await checkAuthState();

      if (data.paymentMethod === 'qr') {
        openQrPaymentModal(
          data.order || {
            id: data.orderId,
            paymentRef: data.paymentRef,
            paymentExpiresAt: data.paymentExpiresAt,
            totalAmount: data.order?.totalAmount || 0,
            customerInfo: { phone: payload.phone }
          }
        );
      } else {
        showToast('Đặt lịch hẹn GearHub thành công! Mã đơn: #' + data.orderId, 'success');
        openCustomerPortal('track', { orderId: data.orderId, phone: payload.phone });
      }
    } else {
      showToast(data.message || 'Lỗi đặt lịch hẹn', 'error');
    }
  } catch {
    showToast('Lỗi kết nối máy chủ khi đặt lịch hẹn', 'error');
  } finally {
    if (btn) btn.disabled = false;
    selectPaymentMethodUI(paymentMethod);
  }
}

// ==================== 2B. VIETQR PAYMENT SANDBOX & 3S POLLING ====================

function clearQrSessionTimers() {
  if (activeQrSession.pollTimer) {
    clearInterval(activeQrSession.pollTimer);
    activeQrSession.pollTimer = null;
  }
  if (activeQrSession.countdownTimer) {
    clearInterval(activeQrSession.countdownTimer);
    activeQrSession.countdownTimer = null;
  }
}

function openQrPaymentModal(order) {
  clearQrSessionTimers();
  activeQrSession.orderId = order.id;
  activeQrSession.paymentRef = order.paymentRef || `PAY_${order.id}`;
  activeQrSession.expiresAt = order.paymentExpiresAt;
  activeQrSession.phone = order.customerInfo?.phone || document.getElementById('c-phone')?.value || '';

  document.getElementById('qr-order-id-text').innerText = '#' + order.id;
  document.getElementById('qr-ref-text').innerText = activeQrSession.paymentRef;
  document.getElementById('qr-amount-display').innerText = formatMoney(order.totalAmount || 0);

  const qrData = encodeURIComponent(
    `GEARHUB|${order.id}|${activeQrSession.paymentRef}|${order.totalAmount || 0}`
  );
  document.getElementById('qr-code-img').src = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${qrData}`;

  const banner = document.getElementById('qr-status-banner');
  if (banner) {
    banner.className = 'qr-status-banner';
    banner.innerHTML =
      '<span id="qr-status-text">Đang chờ quét mã VietQR thanh toán (tự động kiểm tra mỗi 3 giây)...</span>';
  }

  openModal('qr-payment-modal');

  updateQrCountdownDisplay();
  activeQrSession.countdownTimer = setInterval(updateQrCountdownDisplay, 1000);
  activeQrSession.pollTimer = setInterval(() => pollQrPaymentStatus(order.id), 3000);
}

function updateQrCountdownDisplay() {
  const timerEl = document.getElementById('qr-countdown-timer');
  if (!timerEl || !activeQrSession.expiresAt) return;
  const remainingMs = Date.parse(activeQrSession.expiresAt) - Date.now();
  if (remainingMs <= 0) {
    timerEl.innerText = '00:00 (Hết hạn)';
    clearQrSessionTimers();
    pollQrPaymentStatus(activeQrSession.orderId);
    return;
  }
  const mins = Math.floor(remainingMs / 60000);
  const secs = Math.floor((remainingMs % 60000) / 1000);
  timerEl.innerText = `${twoDigits(mins)}:${twoDigits(secs)}`;
}

async function pollQrPaymentStatus(orderId) {
  if (!orderId) return;
  try {
    const res = await fetch(`/api/orders/${orderId}/payment-status`);
    const data = await res.json();
    if (!data.success) return;

    const banner = document.getElementById('qr-status-banner');
    if (data.paymentStatus === 'paid') {
      clearQrSessionTimers();
      if (banner) {
        banner.className = 'qr-status-banner paid';
        banner.innerHTML =
          '<span id="qr-status-text">Thanh toán VietQR thành công. Đơn hàng đã được xác nhận!</span>';
      }
      showToast('Thanh toán VietQR thành công cho đơn #' + orderId, 'success');
      setTimeout(() => {
        closeQrPaymentModal();
        openCustomerPortal('track', { orderId, phone: activeQrSession.phone });
      }, 900);
    } else if (data.paymentStatus === 'expired' || data.status === 'cancelled') {
      clearQrSessionTimers();
      if (banner) {
        banner.className = 'qr-status-banner expired';
        banner.innerHTML =
          '<span id="qr-status-text">Đơn hàng đã hết hạn thanh toán VietQR hoặc đã bị hủy.</span>';
      }
      showToast('Đơn hàng QR đã hết hạn hoặc bị hủy', 'error');
    }
  } catch {}
}

async function simulateQrWebhook(action = 'confirm') {
  if (!activeQrSession.orderId) return;
  const btn = document.getElementById('btn-simulate-qr-confirm');
  if (btn) btn.disabled = true;

  try {
    const res = await fetch('/api/payments/sandbox-webhook', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        orderId: activeQrSession.orderId,
        paymentRef: activeQrSession.paymentRef,
        action
      })
    });
    const data = await res.json();
    if (data.success) {
      await pollQrPaymentStatus(activeQrSession.orderId);
      if (action === 'cancel') {
        closeQrPaymentModal();
      }
    } else {
      showToast(data.message || 'Lỗi xử lý thanh toán VietQR', 'error');
    }
  } catch {
    showToast('Lỗi kết nối webhook sandbox', 'error');
  } finally {
    if (btn) btn.disabled = false;
  }
}

function closeQrPaymentModal() {
  clearQrSessionTimers();
  closeModal('qr-payment-modal');
}

// ==================== 3. XÁC THỰC KHÁCH HÀNG & WISHLIST ====================

async function checkAuthState() {
  try {
    const res = await fetch('/api/customers/profile');
    const { loggedIn, remembered, data } = await res.json();

    const authBtn = document.getElementById('btn-open-auth');
    const badge = document.getElementById('user-profile-badge');

    if (data && (loggedIn || remembered)) {
      currentUser = data;
      if (Array.isArray(data.wishlist)) {
        userWishlist = data.wishlist.map(String);
        updateWishlistBadge();
      }
      if (authBtn) authBtn.style.display = 'none';
      if (badge) badge.style.display = 'inline-flex';

      const name = data.fullName || 'Khách';
      const dispEl = document.getElementById('user-display-name');
      const initEl = document.getElementById('user-avatar-initial');
      if (dispEl) dispEl.innerText = name;
      if (initEl) initEl.innerText = name.charAt(0).toUpperCase();

      const cName = document.getElementById('c-name');
      const cPhone = document.getElementById('c-phone');
      const cAddress = document.getElementById('c-address');
      if (cName && !cName.value) cName.value = data.fullName || '';
      if (cPhone && !cPhone.value) cPhone.value = data.phone || '';
      if (cAddress && !cAddress.value) cAddress.value = data.address || '';
    } else {
      currentUser = null;
      if (authBtn) authBtn.style.display = 'inline-flex';
      if (badge) badge.style.display = 'none';
    }
  } catch {}
}

async function loadWishlistState() {
  try {
    const res = await fetch('/api/customers/wishlist');
    const data = await res.json();
    if (data.success && Array.isArray(data.wishlist)) {
      userWishlist = data.wishlist.map(String);
      updateWishlistBadge();
      renderProductList();
    }
  } catch {}
}

function updateWishlistBadge() {
  const badge = document.getElementById('wishlist-count-badge');
  if (!badge) return;
  badge.innerText = userWishlist.length;
  badge.style.display = userWishlist.length > 0 ? 'inline-flex' : 'none';
}

async function toggleWishlistItem(productId) {
  try {
    const res = await fetch('/api/customers/wishlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId })
    });
    const data = await res.json();
    if (data.success) {
      userWishlist = (data.wishlist || []).map(String);
      updateWishlistBadge();
      renderProductList();
      showToast(data.message || 'Đã cập nhật danh sách yêu thích', 'info');
      const wishPanel = document.getElementById('portal-panel-wishlist');
      if (wishPanel && wishPanel.style.display !== 'none') {
        renderPortalWishlistTab();
      }
    }
  } catch {
    showToast('Không thể cập nhật danh sách yêu thích', 'error');
  }
}

function openAuthModal(tab = 'login') {
  switchAuthTab(tab);
  openModal('auth-modal');
}

function closeAuthModal() {
  closeModal('auth-modal');
}

function switchAuthTab(tab) {
  const isLogin = tab === 'login';
  document.getElementById('tab-login-btn')?.classList.toggle('active', isLogin);
  document.getElementById('tab-register-btn')?.classList.toggle('active', !isLogin);
  const fLogin = document.getElementById('form-customer-login');
  const fReg = document.getElementById('form-customer-register');
  if (fLogin) fLogin.style.display = isLogin ? 'block' : 'none';
  if (fReg) fReg.style.display = isLogin ? 'none' : 'block';
  const titleEl = document.getElementById('auth-modal-title');
  if (titleEl) {
    titleEl.innerText = isLogin ? 'Đăng nhập tài khoản' : 'Đăng ký thành viên mới';
  }
}

async function handleCustomerLogin(e) {
  e.preventDefault();
  const btn = document.getElementById('btn-login-submit');
  if (btn) {
    btn.disabled = true;
    btn.innerText = 'Đang đăng nhập...';
  }

  const loginInput = document.getElementById('login-phone').value.trim();
  const payload = {
    identifier: loginInput,
    phone: loginInput,
    username: loginInput,
    password: document.getElementById('login-password').value,
    rememberMe: document.getElementById('login-remember')?.checked || false
  };

  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await res.json();

    if (data.success) {
      if (data.role === 'admin') {
        showToast('Xác thực Quản trị viên thành công. Đang chuyển vào Bảng quản trị...', 'success');
        setTimeout(() => {
          window.location.href = data.redirectUrl || '/admin';
        }, 600);
        return;
      }

      showToast('Xin chào, ' + (data.customer?.fullName || 'khách hàng'), 'success');
      closeModal('auth-modal');
      document.getElementById('form-customer-login')?.reset();
      await checkAuthState();
      await loadWishlistState();
    } else {
      showToast(data.message || 'Sai số điện thoại/tài khoản hoặc mật khẩu', 'error');
    }
  } catch {
    showToast('Lỗi kết nối máy chủ', 'error');
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.innerText = 'Đăng nhập ngay';
    }
  }
}

async function handleCustomerRegister(e) {
  e.preventDefault();
  const btn = document.getElementById('btn-reg-submit');
  if (btn) {
    btn.disabled = true;
    btn.innerText = 'Đang tạo tài khoản...';
  }

  const payload = {
    fullName: document.getElementById('reg-name').value.trim(),
    phone: document.getElementById('reg-phone').value.trim(),
    password: document.getElementById('reg-password').value,
    email: document.getElementById('reg-email').value.trim(),
    address: document.getElementById('reg-address').value.trim()
  };

  try {
    const res = await fetch('/api/customers/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await res.json();

    if (data.success) {
      showToast('Đăng ký tài khoản thành công', 'success');
      closeModal('auth-modal');
      document.getElementById('form-customer-register')?.reset();
      await checkAuthState();
      await loadWishlistState();
    } else {
      showToast(data.message || 'Lỗi đăng ký tài khoản', 'error');
    }
  } catch {
    showToast('Lỗi kết nối máy chủ', 'error');
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.innerText = 'Tạo tài khoản';
    }
  }
}

async function logoutCustomer() {
  if (confirm('Bạn có chắc chắn muốn đăng xuất tài khoản?')) {
    await fetch('/api/customers/logout', { method: 'POST' });
    currentUser = null;
    const badge = document.getElementById('user-profile-badge');
    const authBtn = document.getElementById('btn-open-auth');
    if (badge) badge.style.display = 'none';
    if (authBtn) authBtn.style.display = 'inline-flex';
    document.getElementById('order-form')?.reset();
    showToast('Đã đăng xuất tài khoản', 'info');
  }
}

// ==================== 4. CỔNG KHÁCH HÀNG TỰ PHỤC VỤ & TIMELINE ====================

function openCustomerPortal(tab = 'track', prefill = null) {
  openModal('customer-portal-modal');
  switchPortalTab(tab);

  if (prefill && prefill.orderId) {
    const idInput = document.getElementById('track-order-id');
    const phoneInput = document.getElementById('track-order-phone');
    if (idInput) idInput.value = prefill.orderId;
    if (phoneInput) phoneInput.value = prefill.phone || currentUser?.phone || '';
    if (idInput?.value && phoneInput?.value) {
      executeTrackOrder(idInput.value, phoneInput.value);
    }
  } else if (tab === 'track' && currentUser?.phone) {
    const phoneInput = document.getElementById('track-order-phone');
    if (phoneInput && !phoneInput.value) phoneInput.value = currentUser.phone;
  }
}

function closeCustomerPortal() {
  closeModal('customer-portal-modal');
}

function switchPortalTab(tab) {
  document.querySelectorAll('.portal-tabs .portal-tab-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-ptab') === tab);
  });

  ['track', 'orders', 'profile', 'wishlist'].forEach((t) => {
    const panel = document.getElementById(`portal-panel-${t}`);
    if (panel) panel.style.display = t === tab ? 'block' : 'none';
  });

  if (tab === 'orders') renderPortalOrdersTab();
  if (tab === 'profile') renderPortalProfileTab();
  if (tab === 'wishlist') renderPortalWishlistTab();
}

function renderOrderTimelineTracker(order) {
  const status = order.status || 'pending';
  const isCancelled = status === 'cancelled';

  const steps = [
    { key: 'pending', label: order.paymentMethod === 'qr' ? 'Chờ TT QR / Xác nhận' : 'Chờ xác nhận' },
    { key: 'confirmed', label: 'Đã xác nhận' },
    { key: 'shipping', label: 'Đang giao hàng' },
    { key: 'completed', label: 'Hoàn thành' }
  ];

  const rankMap = {
    awaiting_payment: 0,
    pending: 0,
    confirmed: 1,
    shipping: 2,
    completed: 3
  };
  const currentRank = rankMap[status] !== undefined ? rankMap[status] : 0;

  const stepsHtml = steps
    .map((s, idx) => {
      let stateClass = '';
      if (!isCancelled && (idx < currentRank || status === 'completed')) {
        stateClass = 'done';
      } else if (!isCancelled && idx === currentRank) {
        stateClass = 'current';
      }
      return `<div class="step-node ${stateClass}">${s.label}</div>`;
    })
    .join('');

  const cancelBanner = isCancelled
    ? `<div style="background-color: var(--danger-bg); color: var(--danger-ink); padding: 0.75rem 1rem; margin-top: 0.75rem; font-size: 0.875rem;">
        Đơn hàng này đã bị hủy (${order.paymentStatus === 'expired' ? 'Quá hạn thanh toán QR 15 phút' : 'Đã hủy'}).
      </div>`
    : '';

  const canCancel = ['pending', 'awaiting_payment'].includes(status);
  const canPayQr = status === 'awaiting_payment' && order.paymentStatus === 'awaiting_payment';

  return `
    <div class="cust-order-card" data-ui>
      <div class="cust-order-head">
        <div>
          <span class="cust-order-id">#${order.id}</span>
          <span style="font-size: 0.8125rem; color: var(--muted); margin-left: 0.5rem;">
            ${new Date(order.createdAt).toLocaleString('vi-VN')}
          </span>
        </div>
        <span style="font-size: 0.8125rem; padding: 0.25rem 0.6rem; background-color: var(--surface); color: var(--accent-text);">
          ${order.paymentMethod === 'qr' ? 'VietQR' : 'COD'} · ${
            order.paymentStatus === 'paid'
              ? 'Đã thanh toán'
              : order.paymentStatus === 'awaiting_payment'
                ? 'Chờ quét QR'
                : order.paymentStatus === 'expired'
                  ? 'Hết hạn QR'
                  : order.paymentStatus === 'cancelled' || order.paymentStatus === 'failed'
                    ? 'Đã hủy TT'
                    : 'Chưa thanh toán'
          }
        </span>
      </div>

      <div class="order-stepper">${stepsHtml}</div>
      ${cancelBanner}
      ${
        Array.isArray(order.statusHistory) && order.statusHistory.length > 0
          ? `<div style="margin-top: 0.65rem; padding: 0.65rem 0.85rem; background-color: var(--surface); font-size: 0.8125rem; color: var(--muted);">
              ${order.statusHistory
                .slice()
                .reverse()
                .map((h) => {
                  const ts = h.timestamp || h.time;
                  return `<div style="display:flex; justify-content:space-between; gap:0.5rem; padding:0.15rem 0;">
                      <span><strong style="color:var(--ink);">${h.note || h.title || h.status}</strong></span>
                      <span class="tabular">${ts ? new Date(ts).toLocaleString('vi-VN') : ''}</span>
                    </div>`;
                })
                .join('')}
            </div>`
          : ''
      }

      <div style="margin-top: 0.75rem; padding: 0.85rem; background-color: var(--surface); font-size: 0.875rem;">
        <div style="margin-bottom: 0.5rem;">
          ${(order.items || [])
            .map((i) => `<div>${i.name} (x${i.quantity}) · <strong class="tabular">${formatMoney(i.price * i.quantity)}</strong></div>`)
            .join('')}
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; padding-top: 0.5rem; color: var(--muted);">
          <span>Người nhận: ${order.customerInfo?.fullName || ''} (${order.customerInfo?.phone || ''}) · ${order.customerInfo?.address || ''}</span>
          <strong class="tabular" style="font-size: 1rem; color: var(--accent-text);">Tổng: ${formatMoney(order.totalAmount)}</strong>
        </div>
      </div>

      <div style="display: flex; justify-content: flex-end; gap: 0.65rem; margin-top: 0.85rem;">
        ${
          canPayQr
            ? `<button type="button" class="btn-primary-sage" onclick="openQrModalByOrderMeta('${String(order.id).replace(/'/g, "\\'")}', '${String(order.paymentRef || '').replace(/'/g, "\\'")}', '${String(order.paymentExpiresAt || '').replace(/'/g, "\\'")}', ${Number(order.totalAmount) || 0}, '${String(order.customerInfo?.phone || '').replace(/'/g, "\\'")}')">Mở mã VietQR</button>`
            : ''
        }
        ${
          canCancel
            ? `<button type="button" class="btn-remove" onclick="cancelCustomerOrderUI('${String(order.id).replace(/'/g, "\\'")}', '${String(order.customerInfo?.phone || '').replace(/'/g, "\\'")}')">Hủy đơn hàng</button>`
            : ''
        }
      </div>
    </div>
  `;
}

function openQrModalByOrderMeta(id, paymentRef, paymentExpiresAt, totalAmount, phone) {
  openQrPaymentModal({
    id,
    paymentRef,
    paymentExpiresAt,
    totalAmount,
    customerInfo: { phone }
  });
}

async function handleTrackOrderSubmit(e) {
  e.preventDefault();
  const orderId = document.getElementById('track-order-id').value.trim();
  const phone = document.getElementById('track-order-phone').value.trim();
  await executeTrackOrder(orderId, phone);
}

async function executeTrackOrder(orderId, phone) {
  const box = document.getElementById('track-order-result');
  if (!box) return;
  box.innerHTML = '<p style="padding: 1rem; color: var(--muted);">Đang tra cứu tiến độ đơn hàng...</p>';

  try {
    const res = await fetch(
      `/api/orders/track?orderId=${encodeURIComponent(orderId)}&phone=${encodeURIComponent(phone)}`
    );
    const data = await res.json();
    if (!res.ok || !data.success || !data.order) {
      box.innerHTML = `
        <div style="padding: 1.25rem; background-color: var(--danger-bg); color: var(--danger-ink);">
          <strong>${data.message || 'Không tìm thấy đơn hàng'}</strong>
          <p style="font-size: 0.875rem; margin-top: 0.25rem;">Vui lòng kiểm tra lại chính xác Mã đơn và Số điện thoại đặt hàng.</p>
        </div>
      `;
      return;
    }
    box.innerHTML = renderOrderTimelineTracker(data.order);
  } catch {
    box.innerHTML = '<p style="color: var(--danger-ink); padding: 1rem;">Lỗi kết nối máy chủ khi tra cứu đơn hàng.</p>';
  }
}

async function cancelCustomerOrderUI(orderId, phone) {
  const reason = prompt('Vui lòng nhập lý do hủy đơn hàng:', 'Thay đổi nhu cầu mua sắm');
  if (reason === null) return;

  try {
    const res = await fetch(`/api/orders/${orderId}/cancel`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone, reason })
    });
    const data = await res.json();
    if (data.success) {
      showToast('Đã hủy đơn hàng #' + orderId, 'info');
      const trackPanel = document.getElementById('portal-panel-track');
      if (trackPanel && trackPanel.style.display !== 'none') {
        executeTrackOrder(orderId, phone);
      } else {
        renderPortalOrdersTab();
      }
    } else {
      showToast(data.message || 'Không thể hủy đơn hàng', 'error');
    }
  } catch {
    showToast('Lỗi kết nối khi hủy đơn hàng', 'error');
  }
}

async function renderPortalOrdersTab() {
  const container = document.getElementById('my-orders-list-body');
  if (!container) return;
  container.innerHTML = '<p style="padding: 1rem; color: var(--muted);">Đang tải lịch sử đơn hàng...</p>';

  try {
    const res = await fetch('/api/customers/my-orders');
    const { success, orders } = await res.json();

    if (!success || !orders) {
      container.innerHTML = `
        <div style="padding: 2rem; background-color: var(--bg); text-align: center;">
          <p style="margin-bottom: 1rem;">Vui lòng đăng nhập tài khoản hoặc dùng tab Tra cứu vận đơn với Số điện thoại + Mã đơn.</p>
          <button type="button" class="btn-primary-sage" onclick="closeCustomerPortal(); openAuthModal('login');">Đăng nhập ngay</button>
        </div>
      `;
      return;
    }

    if (orders.length === 0) {
      container.innerHTML = '<p style="padding: 1.5rem; background-color: var(--bg); color: var(--muted); text-align: center;">Bạn chưa có lịch hẹn dịch vụ nào tại GearHub.</p>';
      return;
    }

    container.innerHTML = orders.map((o) => renderOrderTimelineTracker(o)).join('');
  } catch {
    container.innerHTML = '<p style="color: var(--danger-ink);">Lỗi tải danh sách đơn hàng.</p>';
  }
}

async function renderPortalProfileTab() {
  const box = document.getElementById('portal-profile-content');
  if (!box) return;

  if (!currentUser) {
    box.innerHTML = `
      <div style="padding: 2rem; background-color: var(--bg); text-align: center;">
        <p style="margin-bottom: 1rem;">Đăng nhập để quản lý Sổ địa chỉ nhận hàng mặc định và theo dõi hạng thành viên.</p>
        <button type="button" class="btn-primary-sage" onclick="closeCustomerPortal(); openAuthModal('login');">Đăng nhập / Đăng ký</button>
      </div>
    `;
    return;
  }

  const spent = Number(currentUser.totalSpent) || 0;
  const tag = currentUser.tag || 'Mới';

  box.innerHTML = `
    <div style="padding: 1.25rem; background-color: var(--bg); margin-bottom: 1.5rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
        <div>
          <span style="font-size: 0.8125rem; color: var(--muted);">Hạng thành viên hiện tại</span>
          <div style="font-size: 1.35rem; font-weight: 600; color: var(--accent-text);">${tag}</div>
        </div>
        <div class="tabular" style="font-size: 0.9375rem;">
          Đã hoàn tất <strong>${currentUser.orderCount || 0} đơn</strong> · Chi tiêu tích lũy: <strong style="color: var(--accent-text);">${formatMoney(spent)}</strong>
        </div>
      </div>
    </div>

    <form id="form-portal-profile" onsubmit="handleUpdateCustomerProfile(event)">
      <div class="form-row">
        <div class="form-group">
          <label for="prof-fullname">Họ và tên người nhận</label>
          <input type="text" id="prof-fullname" required value="${currentUser.fullName || ''}">
        </div>
        <div class="form-group">
          <label>Số điện thoại định danh</label>
          <input type="tel" value="${currentUser.phone || ''}" disabled style="opacity: 0.65;">
        </div>
      </div>
      <div class="form-group">
        <label for="prof-email">Email nhận hóa đơn</label>
        <input type="email" id="prof-email" value="${currentUser.email || ''}" placeholder="example@email.com">
      </div>
      <div class="form-group">
        <label for="prof-address">Địa chỉ giao hàng mặc định</label>
        <textarea id="prof-address" rows="2" required>${currentUser.address || ''}</textarea>
      </div>
      <div class="form-group">
        <label for="prof-note">Ghi chú giao hàng mặc định</label>
        <input type="text" id="prof-note" value="${currentUser.note || ''}" placeholder="Giao giờ hành chính">
      </div>
      <button type="submit" class="btn-submit" id="btn-save-profile">Lưu hồ sơ &amp; địa chỉ mặc định</button>
    </form>
  `;
}

async function handleUpdateCustomerProfile(e) {
  e.preventDefault();
  const btn = document.getElementById('btn-save-profile');
  if (btn) btn.disabled = true;

  const payload = {
    fullName: document.getElementById('prof-fullname').value.trim(),
    email: document.getElementById('prof-email').value.trim(),
    address: document.getElementById('prof-address').value.trim(),
    note: document.getElementById('prof-note').value.trim()
  };

  try {
    const res = await fetch('/api/customers/profile', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    if (data.success) {
      currentUser = data.customer;
      showToast(data.message || 'Đã cập nhật hồ sơ mặc định', 'success');
      await checkAuthState();
      renderPortalProfileTab();
    } else {
      showToast(data.message || 'Lỗi cập nhật hồ sơ', 'error');
    }
  } catch {
    showToast('Lỗi kết nối máy chủ', 'error');
  } finally {
    if (btn) btn.disabled = false;
  }
}

async function renderPortalWishlistTab() {
  const box = document.getElementById('portal-wishlist-content');
  if (!box) return;
  box.innerHTML = '<p style="padding: 1rem; color: var(--muted);">Đang tải danh sách yêu thích...</p>';

  try {
    const res = await fetch('/api/customers/wishlist');
    const data = await res.json();
    const items = data.products || [];
    if (items.length === 0) {
      box.innerHTML = '<p style="padding: 1.5rem; background-color: var(--bg); color: var(--muted); text-align: center;">Danh sách yêu thích đang trống.</p>';
      return;
    }

    box.innerHTML = `
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1rem;">
        ${items
          .map(
            (p) => `
          <div style="background-color: var(--bg); padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem;">
            <img src="${p.image}" alt="${p.name}" loading="lazy" style="width: 100%; height: 140px; object-fit: contain;">
            <strong style="font-size: 0.9375rem;">${p.name}</strong>
            <span class="tabular" style="color: var(--accent-text); font-weight: 600;">${formatMoney(p.price)}</span>
            <div style="display: flex; gap: 0.5rem; margin-top: auto;">
              <button type="button" class="btn-buy-now" style="flex: 1; padding: 0.5rem;" onclick="closeCustomerPortal(); buyNow('${p.id}')">Mua ngay</button>
              <button type="button" class="btn-remove" onclick="toggleWishlistItem('${p.id}')">Xóa</button>
            </div>
          </div>
        `
          )
          .join('')}
      </div>
    `;
  } catch {
    box.innerHTML = '<p style="color: var(--danger-ink);">Lỗi tải danh sách yêu thích.</p>';
  }
}

// ==================== 5. TIỆN ÍCH MODAL, DRAWER & TOAST ====================

function openModal(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.remove('hidden');
  el.style.display = 'flex';
}

function closeModal(id) {
  if (id === 'qr-payment-modal') {
    clearQrSessionTimers();
  }
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.add('hidden');
  el.style.display = 'none';
}

function toggleMobileDrawer(forceState) {
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('mobile-drawer-backdrop');
  if (!drawer || !backdrop) return;
  const shouldOpen = forceState !== undefined ? forceState : !drawer.classList.contains('open');
  drawer.classList.toggle('open', shouldOpen);
  backdrop.classList.toggle('open', shouldOpen);
}

function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerText = message;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(40px)';
    setTimeout(() => toast.remove(), 260);
  }, 3200);
}

// ==================== 6. MODAL CHI TIẾT SẢN PHẨM & ĐÁNH GIÁ AI ====================

async function openProductDetailModal(productId) {
  let p = allProducts.find((item) => String(item.id) === String(productId));
  if (!p) {
    try {
      const res = await fetch(`/api/products/${productId}`);
      const json = await res.json();
      if (json.data) p = json.data;
    } catch (e) {
      console.error('Lỗi tải chi tiết sản phẩm:', e);
    }
  }

  if (!p) {
    showToast('Không tìm thấy thông tin sản phẩm', 'error');
    return;
  }

  document.getElementById('detail-modal-title').innerText = p.name;
  document.getElementById('detail-img').src = p.image || '';
  document.getElementById('detail-img').alt = p.name;
  const detailCatMeta = getCategoryMeta(getProductCategory(p));
  document.getElementById('detail-brand-badge').innerText = p.categoryLabel || detailCatMeta.badgeLabel || p.brand || 'GearHub';
  document.getElementById('detail-price').innerText = formatMoney(p.price);

  const oldPriceEl = document.getElementById('detail-old-price');
  if (p.oldPrice && p.oldPrice > p.price) {
    oldPriceEl.innerText = formatMoney(p.oldPrice);
    oldPriceEl.style.display = 'inline';
  } else {
    oldPriceEl.style.display = 'none';
  }

  document.getElementById('detail-btn-buy').onclick = () => {
    closeProductDetailModal();
    buyNow(p.id);
  };
  document.getElementById('detail-btn-cart').onclick = () => {
    addToCart(p.id);
  };

  const GEARHUB_SPEC_LABELS = {
    type: 'Hạng mục',
    time: 'Thời gian thực hiện',
    tools: 'Dụng cụ / Vật tư',
    thermalPaste: 'Keo tản nhiệt',
    impact: 'Hiệu quả thực tế',
    warranty: 'Bảo hành / Hỗ trợ',
    scope: 'Hệ điều hành hỗ trợ',
    safety: 'Cam kết an toàn dữ liệu',
    method: 'Quy trình thực hiện',
    lube: 'Dầu / Mỡ lube switch',
    effect: 'Cảm giác & Âm gõ',
    model: 'Model thiết bị',
    connection: 'Chuẩn kết nối',
    layout: 'Layout bàn phím',
    switch: 'Loại Switch',
    weight: 'Trọng lượng',
    dpi: 'Độ nhạy DPI',
    rentalPolicy: 'Thủ tục thuê SV',
    hubPorts: 'Cổng kết nối Hub',
    pointer: 'Bút trình chiếu',
    compatibility: 'Thiết bị tương thích',
    components: 'Thành phần bộ Kit',
    material: 'Chất liệu',
    size: 'Kích thước',
    usage: 'Công dụng'
  };

  const ds = p.detailedSpecs && typeof p.detailedSpecs === 'object' ? p.detailedSpecs : null;
  const hasGearHubSpecKeys =
    ds && Object.keys(ds).some((k) => Object.prototype.hasOwnProperty.call(GEARHUB_SPEC_LABELS, k));

  let specsList = [];
  if (hasGearHubSpecKeys) {
    specsList.push({ label: 'Phân loại', val: p.categoryLabel || detailCatMeta.badgeLabel });
    if (p.duration || p.unit) {
      specsList.push({
        label: 'Thời lượng / Đơn vị',
        val: [p.duration, p.unit ? `Tính theo ${p.unit}` : ''].filter(Boolean).join(' · ')
      });
    }
    Object.entries(ds).forEach(([k, val]) => {
      if (val) {
        specsList.push({ label: GEARHUB_SPEC_LABELS[k] || k, val });
      }
    });
  } else {
    const specs =
      ds ||
      (window.CatalogFilter && typeof window.CatalogFilter.extractHardwareSpecs === 'function'
        ? window.CatalogFilter.extractHardwareSpecs({
            name: p.name,
            brand: p.brand,
            rawText: p.specs || p.description || ''
          })
        : {
            screen: 'Đạt chuẩn trạm kỹ thuật',
            chip: p.brand || 'GearHub',
            ram: '8GB',
            storage: '128GB',
            battery: 'Tiêu chuẩn',
            camera: 'Tiêu chuẩn',
            charging: 'Type-C PD',
            os: 'Windows / macOS'
          });

    specsList = [
      { label: 'Màn hình', val: specs.screen },
      { label: 'Vi xử lý (SoC)', val: specs.chip },
      { label: 'Bộ nhớ RAM', val: specs.ram },
      { label: 'Bộ nhớ trong', val: specs.storage },
      { label: 'Dung lượng Pin', val: specs.battery },
      { label: 'Hệ thống Camera', val: specs.camera },
      { label: 'Công nghệ Sạc', val: specs.charging },
      { label: 'Hệ điều hành', val: specs.os }
    ];
  }

  document.getElementById('detail-specs-sheet').innerHTML = specsList
    .map(
      (item) => `
      <div class="spec-sheet-item">
        <span class="spec-sheet-label">${item.label}</span>
        <span class="spec-sheet-val">${item.val || 'Đang cập nhật'}</span>
      </div>
    `
    )
    .join('');

  const review = p.aiReview || {
    summary: p.description || `${p.name} là gói dịch vụ & thiết bị chuẩn sinh viên tại trạm GearHub Sảnh C ĐHKHTN.`,
    pros: [
      `Mức giá sinh viên minh bạch ${formatMoney(p.price)}`,
      'Thực hiện trực tiếp / nhận gear nhanh với Thẻ Sinh Viên'
    ],
    cons: ['Nên đặt lịch trước giờ cao điểm giữa tiết hoặc tuần thi cuối kỳ'],
    targetAudience: 'Sinh viên CNTT cần chăm sóc laptop hoặc thuê gear học tập, thuyết trình'
  };

  document.getElementById('detail-ai-summary').innerText = review.summary;
  document.getElementById('detail-ai-pros').innerHTML = (review.pros || []).map((pro) => `<li>${pro}</li>`).join('');
  document.getElementById('detail-ai-cons').innerHTML = (review.cons || []).map((con) => `<li>${con}</li>`).join('');
  document.getElementById('detail-ai-audience').innerText = review.targetAudience || 'Sinh viên, giảng viên và lập trình viên';

  openModal('product-detail-modal');
}

function closeProductDetailModal() {
  closeModal('product-detail-modal');
}

// ==================== 7. FLOATING AI SHOPPING CONSULTANT ====================

function toggleAiChat() {
  const win = document.getElementById('ai-chat-window');
  if (!win) return;
  const isOpen = win.classList.toggle('open');
  if (isOpen) {
    document.getElementById('ai-chat-input')?.focus();
  }
}

function sendQuickPrompt(promptText) {
  const input = document.getElementById('ai-chat-input');
  if (input) {
    input.value = promptText;
    handleAiChatSubmit();
  }
}

async function handleAiChatSubmit(event) {
  if (event) event.preventDefault();
  const input = document.getElementById('ai-chat-input');
  if (!input) return;
  const message = input.value.trim();
  if (!message) return;

  input.value = '';
  appendChatBubble('user', message);

  const typing = document.getElementById('chat-typing-indicator');
  if (typing) typing.style.display = 'block';
  scrollChatToBottom();

  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, history: chatHistory })
    });
    const data = await res.json();
    if (typing) typing.style.display = 'none';

    if (data.success) {
      chatHistory.push({ role: 'user', content: message });
      chatHistory.push({ role: 'model', content: data.reply });
      appendChatBubble('bot', data.reply, data.suggestedProducts);
    } else {
      appendChatBubble('bot', 'Hiện tại kết nối tư vấn đang gián đoạn, bạn vui lòng thử lại sau giây lát.');
    }
  } catch (err) {
    if (typing) typing.style.display = 'none';
    console.error('Lỗi gọi chat AI:', err);
    appendChatBubble('bot', 'Hệ thống tư vấn đang bận, bạn vui lòng gửi lại câu hỏi.');
  }

  scrollChatToBottom();
}

function appendChatBubble(role, text, suggestedProducts = []) {
  const container = document.getElementById('ai-chat-messages');
  if (!container) return;

  const msgDiv = document.createElement('div');
  msgDiv.className = `chat-msg ${role === 'user' ? 'user' : 'bot'}`;

  const formattedText = (text || '')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br>');

  let miniCardsHtml = '';
  if (Array.isArray(suggestedProducts) && suggestedProducts.length > 0) {
    miniCardsHtml = `
      <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-top: 0.75rem;">
        ${suggestedProducts
          .map(
            (p) => `
          <div style="display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; padding: 0.5rem; background-color: var(--surface);">
            <div>
              <div style="font-weight: 600; font-size: 0.8125rem;">${p.name}</div>
              <div class="tabular" style="color: var(--accent-text); font-size: 0.8125rem;">${formatMoney(p.price)}</div>
            </div>
            <div style="display: flex; gap: 0.35rem;">
              <button type="button" style="padding: 0.3rem 0.55rem; background-color: var(--bg); font-size: 0.8125rem;" onclick="openProductDetailModal('${p.id}')">Xem</button>
              <button type="button" style="padding: 0.3rem 0.55rem; background-color: var(--accent); color: var(--accent-ink); font-weight: 600; font-size: 0.8125rem;" onclick="addToCart('${p.id}')">Mua</button>
            </div>
          </div>
        `
          )
          .join('')}
      </div>
    `;
  }

  msgDiv.innerHTML = `<div class="msg-bubble">${formattedText}${miniCardsHtml}</div>`;
  container.appendChild(msgDiv);
  scrollChatToBottom();
}

function scrollChatToBottom() {
  const container = document.getElementById('ai-chat-messages');
  if (container) {
    container.scrollTop = container.scrollHeight;
  }
}


// ==================== THEME MANAGEMENT & REAL-TIME SYNC (UI/UX Pro Max) ====================
function getStoredTheme() {
  const saved = localStorage.getItem('techstore_theme');
  if (saved === 'dark' || saved === 'light') return saved;
  return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('techstore_theme', theme);
  updateThemeUI(theme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || getStoredTheme();
  const next = current === 'dark' ? 'light' : 'dark';
  setTheme(next);
}

function updateThemeUI(theme) {
  const labels = document.querySelectorAll('.theme-name-text, .theme-label-text');
  labels.forEach(el => {
    el.textContent = theme === 'dark' ? 'Tối' : 'Sáng';
  });
  const mobileLabel = document.getElementById('theme-status-mobile');
  if (mobileLabel) {
    mobileLabel.textContent = theme === 'dark' ? 'Tối' : 'Sáng';
  }
}

window.addEventListener('storage', function(e) {
  if (e.key === 'techstore_theme' && e.newValue) {
    document.documentElement.setAttribute('data-theme', e.newValue);
    updateThemeUI(e.newValue);
  }
});

// Run UI sync on DOM load
document.addEventListener('DOMContentLoaded', function() {
  const t = getStoredTheme();
  updateThemeUI(t);
});

