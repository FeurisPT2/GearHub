# Graph Report - GearHub  (2026-11-12)

## Corpus Check
- 87 files · ~72,981 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 4 file(s) not represented in the graph (top: .css 2, .example 1, (none) 1)

## Summary
- 720 nodes · 1283 edges · 49 communities (37 shown, 12 thin omitted)
- Extraction: 96% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 47 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Storefront UI & Client Runtime
- Authentication, Crypto & Security
- Admin CRM & Inventory Client
- Package Dependencies & Configuration
- AI Fallback & Unified Auth ADRs
- Storefront DOM & Mobile Components
- Admin Product & Customer Operations
- Catalog Filter & Spec Extractor
- Project Evolution & Milestones
- AI Consultation & Test Runner
- Product Seeding Scripts
- Cart Controller & Booking Flow
- Gemini AI Automation Architecture
- Server & HTTP Test Harness
- Storage Seam & Architecture ADR
- Getting Started & Runbooks
- Node Path & Utility Modules
- Web Crawler & Importers
- QR Payment State Machine Research
- Product Specs & Accessibility
- HTTP Compression & Gzip
- Postgres Storage Adapter
- Admin UI Views & Filters
- JSON Storage Adapter
- Database Schemas & Normalization
- Catalog Caching & Indexing Research
- Low-Level JSON DB Engine
- Storage Collection Dynamic Routing
- Gemini Automation Specification
- Student Settings Page & Profile UI
- Issue Tracker & GitHub Workflow
- Agent Instructions & Governance
- Domain Modeling Conventions
- Filesystem & I/O Handlers
- Node VM Sandbox Isolation
- Production Release Spec
- Glossary & Domain Terms
- Unified Login Page UI
- Login & Deployment Test Suite
- Payment & Order Test Suite
- Vercel Serverless Config
- Triage Labels & Workflow

## God Nodes (most connected - your core abstractions)
1. `ProductModel` - 27 edges
2. `CustomerModel` - 23 edges
3. `OrderModel` - 17 edges
4. `showToast()` - 16 edges
5. `showToast()` - 16 edges
6. `loadDashboard()` - 15 edges
7. `renderProductList()` - 15 edges
8. `JsonStorageAdapter` - 14 edges
9. `PostgresStorageAdapter` - 14 edges
10. `AdminModel` - 12 edges

## Surprising Connections (you probably didn't know these)
- `express@^4.19.2` --declares--> `express`  [EXTRACTED]
  package.json → package.json  _Bridges community 3 → community 4_

## Import Cycles
- None detected.

## Communities (49 total, 12 thin omitted)

### Community 0 - "Storefront UI & Client Runtime"
Cohesion: 0.05
Nodes (88): activeQrSession, addToCart(), allProducts, appendChatBubble(), applyQuickPreset(), BENCH_MODELS, buyNow(), cancelCustomerOrderUI() (+80 more)

### Community 1 - "Authentication, Crypto & Security"
Cohesion: 0.05
Nodes (36): changePassword(), getCustomerDetail(), login(), unifiedLogin(), changePassword(), getMyOrders(), getProfile(), getWishlist() (+28 more)

### Community 2 - "Admin CRM & Inventory Client"
Cohesion: 0.09
Nodes (54): ADMIN_CATEGORY_DEFAULTS, closeAdminModal(), currentCustFilter, currentOrderFilter, currentProdFilter, deleteCustomer(), deleteOrder(), deleteProduct() (+46 more)

### Community 3 - "Package Dependencies & Configuration"
Cohesion: 0.07
Nodes (34): dependencies, cookie-parser@^1.4.6, cors@^2.8.5, dotenv@^18.0.7, express@^4.19.2, express-session@^1.18.0, @google/genai@^3.0.0, pg@^8.23.1 (+26 more)

### Community 4 - "AI Fallback & Unified Auth ADRs"
Cohesion: 0.06
Nodes (14): express, chatController, express, router, express, router, express, router (+6 more)

### Community 5 - "Storefront DOM & Mobile Components"
Cohesion: 0.07
Nodes (27): active-filter-chips, auth-modal, auth-modal-title, btn-customer-portal, btn-mobile-drawer, cart-modal, catalog-section, customer-portal-modal (+19 more)

### Community 6 - "Admin Product & Customer Operations"
Cohesion: 0.11
Nodes (12): addProduct(), createCustomer(), deleteCustomer(), deleteOrder(), exportCustomersCsv(), exportOrdersCsv(), getAllCustomers(), getAllOrders() (+4 more)

### Community 7 - "Catalog Filter & Spec Extractor"
Cohesion: 0.24
Nodes (16): buildProductTextHaystack(), escapeRegExp(), filterProducts(), getCategoryMeta(), groupProductsByCategory(), inferCategory(), matchesGearHubPolicy(), matchesGearHubStandard() (+8 more)

### Community 8 - "Project Evolution & Milestones"
Cohesion: 0.12
Nodes (15): 10. Giai Đoạn 10: Tinh Gọn Giao Diện Storefront, 11. Giai Đoạn 11: Khắc Phục Lỗi Mất Session Trên Vercel Serverless Bằng HMAC-SHA256 Token, 12. Trạng Thái Vận Hành & Triển Khai Production, 1. Giai Đoạn 1: Tiếp Nhận Yêu Cầu & Thử Nghiệm Qua Prototype, 2. Giai Đoạn 2: Tích Hợp Mainline & Chuẩn Hóa Tasteskill v2, 3. Giai Đoạn 3: Forensic Audit & Sửa Lỗi Tương Phản Màu Sắc (WCAG AA/AAA), 4. Giai Đoạn 4: Cài Đặt Lại & Tích Hợp Skill UI/UX Pro Max, 5. Giai Đoạn 5: Xây Dựng Hệ Thống Theme Kép "Sang" & "Tối" Đồng Bộ Toàn Bộ Website (+7 more)

### Community 9 - "AI Consultation & Test Runner"
Cohesion: 0.17
Nodes (10): geminiService, assert, http, { test, describe, before, after }, assert, { test, describe }, assert, { test } (+2 more)

### Community 10 - "Product Seeding Scripts"
Cohesion: 0.21
Nodes (6): addFlagships(), flagships, deleteProduct(), updateProduct(), ProductModel, enrichAndPersistProduct()

### Community 11 - "Cart Controller & Booking Flow"
Cohesion: 0.13
Nodes (6): addToCart(), catalogCache, express, router, assert, { test, describe, after }

### Community 12 - "Gemini AI Automation Architecture"
Cohesion: 0.20
Nodes (8): consultCustomer(), consultWithCatalog(), enrichProduct(), fallbackEnrich(), getClient(), normalizeEnrichArgs(), selfHealCatalog(), toMiniProductCard()

### Community 13 - "Server & HTTP Test Harness"
Cohesion: 0.16
Nodes (10): app, assert, http, { test, describe, before, after }, assert, http, { test, describe, before, after }, assert (+2 more)

### Community 14 - "Storage Seam & Architecture ADR"
Cohesion: 0.17
Nodes (7): adminStorage, crypto, customerStorage, defaultAdmins, defaultProducts, orderStorage, productStorage

### Community 15 - "Getting Started & Runbooks"
Cohesion: 0.15
Nodes (12): 1. Cài đặt thư viện, 🛒 1. Phía Khách Hàng (Storefront), 2. Chạy môi trường phát triển, 🛡️ 2. Hệ Thống Quản Trị (Admin Panel & CRM), 3. Truy cập ứng dụng, 🚀 Cài Đặt & Khởi Chạy, Cách lấy chuỗi kết nối Neon Postgres:, hoặc chạy trực tiếp (+4 more)

### Community 16 - "Node Path & Utility Modules"
Cohesion: 0.19
Nodes (6): crypto, fs, path, ensureReady(), initDatabase(), { Pool }

### Community 17 - "Web Crawler & Importers"
Cohesion: 0.31
Nodes (7): run(), crawlProducts(), ACCESSORY_KEYWORDS, cleanProductName(), CrawlerService, generateSpecs(), normalizeBrand()

### Community 18 - "QR Payment State Machine Research"
Cohesion: 0.17
Nodes (11): 1. Context & Primary Sources, 2. Order & Payment State Machine Design, 3. Expiration Handling: Lazy TTL Evaluation vs Background Timers, 4. Client-Server Communication: Polling vs SSE/WebSockets, Comparison, Decision Recommendation, Existing Codebase Architecture, Findings (+3 more)

### Community 19 - "Product Specs & Accessibility"
Cohesion: 0.17
Nodes (11): Accessibility & Inclusion, Brand Commitments, Capabilities and Constraints, Evidence on Hand, Operating Context, Platform, Positioning, Product (+3 more)

### Community 20 - "HTTP Compression & Gzip"
Cohesion: 0.20
Nodes (8): cookieParser, cors, express, path, compressionMiddleware(), zlib, express, router

### Community 22 - "Admin UI Views & Filters"
Cohesion: 0.17
Nodes (11): cust-tag-filters, modal-crawl-products, modal-cust-edit-title, modal-customer-detail, modal-customer-edit, modal-order-detail, modal-order-id, modal-prod-title (+3 more)

### Community 24 - "Database Schemas & Normalization"
Cohesion: 0.24
Nodes (8): adminSchema, customerSchema, mapRowToOrder(), mapRowToProduct(), normalizeOrderHistoryEntry(), orderSchema, parseJsonField(), productSchema

### Community 25 - "Catalog Caching & Indexing Research"
Cohesion: 0.20
Nodes (9): 1. Context & Primary Sources, 2. In-Memory TTL Cache with Write-Through Invalidation, 3. PostgreSQL Indexing Strategy, 4. HTTP Payload Optimization & Compression, Architecture Pattern, Design Requirements, Existing Codebase Architecture, Impact Analysis (+1 more)

### Community 28 - "Gemini Automation Specification"
Cohesion: 0.22
Nodes (8): Further Notes, Implementation Decisions, Out of Scope, Problem Statement, Solution, Spec 0001: Gemini AI Automation (Product Enrichment, Shopping Consultant & Self-healing Catalog), Testing Decisions, User Stories

### Community 30 - "Student Settings Page & Profile UI"
Cohesion: 0.25
Nodes (7): hero-avatar-initial, hero-phone-number, hero-student-status, hero-tier-badge, hero-user-name, section-settings-hero, user-hero-card

### Community 31 - "Issue Tracker & GitHub Workflow"
Cohesion: 0.29
Nodes (6): Conventions, Issue tracker: GitHub, Pull requests as a triage surface, Wayfinding operations, When a skill says "fetch the relevant ticket", When a skill says "publish to the issue tracker"

### Community 32 - "Agent Instructions & Governance"
Cohesion: 0.33
Nodes (5): Agent Instructions, Agent skills, Domain docs, Issue tracker, Triage labels

### Community 34 - "Domain Modeling Conventions"
Cohesion: 0.33
Nodes (5): Before exploring, read these, Domain Docs, File structure, Flag ADR conflicts, Use the glossary's vocabulary

### Community 35 - "Filesystem & I/O Handlers"
Cohesion: 0.33
Nodes (3): baseDataDir, fs, path

### Community 36 - "Node VM Sandbox Isolation"
Cohesion: 0.33
Nodes (4): assert, http, { test, describe, before, after }, zlib

### Community 37 - "Production Release Spec"
Cohesion: 0.50
Nodes (3): Problem Statement, Solution, Spec 0002: TechStore v2.0 Production-Ready Release (QR Payment, Customer Portal, Multi-Attribute Specs Filter & Performance Optimization)

### Community 38 - "Glossary & Domain Terms"
Cohesion: 0.50
Nodes (3): _Avoid_, Language, TechStore

### Community 39 - "Unified Login Page UI"
Cohesion: 0.50
Nodes (3): header-icon, portal-subtitle, portal-title

### Community 40 - "Login & Deployment Test Suite"
Cohesion: 0.50
Nodes (3): assert, http, { test, describe, before, after }

### Community 41 - "Payment & Order Test Suite"
Cohesion: 0.50
Nodes (3): assert, http, { test, describe, before, after }

### Community 42 - "Vercel Serverless Config"
Cohesion: 0.50
Nodes (3): builds, routes, version

## Knowledge Gaps
- **137 isolated node(s):** `Agent Instructions`, `Agent skills`, `Issue tracker`, `Triage labels`, `Domain docs` (+132 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 320 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **12 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `express` connect `AI Fallback & Unified Auth ADRs` to `Cart Controller & Booking Flow`, `Package Dependencies & Configuration`, `HTTP Compression & Gzip`?**
  _High betweenness centrality (0.035) - this node is a cross-community bridge._
- **What connects `Agent Instructions`, `Agent skills`, `Issue tracker` to the rest of the system?**
  _137 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Storefront UI & Client Runtime` be split into smaller, more focused modules?**
  _Cohesion score 0.05170441546556852 - nodes in this community are weakly interconnected._
- **Why does `ProductModel` connect `Product Seeding Scripts` to `Authentication, Crypto & Security`, `Node VM Sandbox Isolation`, `Admin Product & Customer Operations`, `AI Consultation & Test Runner`, `Cart Controller & Booking Flow`, `Gemini AI Automation Architecture`, `Server & HTTP Test Harness`, `Web Crawler & Importers`?**
  _High betweenness centrality (0.034) - this node is a cross-community bridge._
- **Should `Authentication, Crypto & Security` be split into smaller, more focused modules?**
  _Cohesion score 0.05443037974683544 - nodes in this community are weakly interconnected._
- **Why does `CustomerModel` connect `Authentication, Crypto & Security` to `Payment & Order Test Suite`, `Admin Product & Customer Operations`?**
  _High betweenness centrality (0.021) - this node is a cross-community bridge._
- **Should `Admin CRM & Inventory Client` be split into smaller, more focused modules?**
  _Cohesion score 0.09025974025974026 - nodes in this community are weakly interconnected._