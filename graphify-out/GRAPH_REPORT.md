# Graph Report - phone-store-node  (2026-11-11)

## Corpus Check
- 78 files · ~65,414 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 4 file(s) not represented in the graph (top: .css 2, .example 1, (none) 1)

## Summary
- 635 nodes · 1267 edges · 25 communities (22 shown, 3 thin omitted)
- Extraction: 96% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 56 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f77c0c51`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Storefront Client UI & Chat
- Product Crawler & Flagship Scripts
- Testing Framework & Node Refs
- Admin Portal Management & UI
- Core ADRs & System Architecture
- dependencies
- Admin & Storefront HTML Templates
- Core Domain Models & Crypto
- Customer Controller & Auth
- JsonDB Engine & Storage
- Admin Controller & CRM Operations
- Order Lifecycle & Controller
- catalogFilter.js
- Agent Guidelines & Workflow Rules
- storageSeam.js
- AdminModel
- orderRoutes.js
- express
- Storefront Redesign & Taste Skill ADRs
- Product Specification & Positioning
- scripts
- Vercel Serverless Configuration
- package.json
- express-session
- adminRoutes.js

## God Nodes (most connected - your core abstractions)
1. `ProductModel` - 26 edges
2. `index.html (GearHub Student Station Storefront)` - 26 edges
3. `TechStore Glossary` - 22 edges
4. `CustomerModel` - 21 edges
5. `admin.html (Quản Trị Hệ Thống Pro CRM)` - 19 edges
6. `showToast()` - 16 edges
7. `showToast()` - 16 edges
8. `loadDashboard()` - 15 edges
9. `OrderModel` - 15 edges
10. `renderProductList()` - 14 edges

## Surprising Connections (you probably didn't know these)
- `Domain Docs Consumption Guidelines` --references--> `Agent Instructions`  [INFERRED]
  docs/agents/domain.md → AGENTS.md
- `GitHub Issue Tracker Operations` --references--> `Agent Instructions`  [INFERRED]
  docs/agents/issue-tracker.md → AGENTS.md
- `Canonical Triage Labels` --references--> `Agent Instructions`  [INFERRED]
  docs/agents/triage-labels.md → AGENTS.md
- `Domain Docs Consumption Guidelines` --references--> `TechStore Glossary`  [EXTRACTED]
  docs/agents/domain.md → GLOSSARY.md
- `Agent Skill: Domain Docs` --references--> `Domain Docs Consumption Guidelines`  [EXTRACTED]
  AGENTS.md → docs/agents/domain.md

## Import Cycles
- None detected.

## Communities (25 total, 3 thin omitted)

### Community 0 - "Storefront Client UI & Chat"
Cohesion: 0.05
Nodes (85): activeQrSession, addToCart(), allProducts, appendChatBubble(), applyQuickPreset(), BENCH_MODELS, buyNow(), cancelCustomerOrderUI() (+77 more)

### Community 1 - "Product Crawler & Flagship Scripts"
Cohesion: 0.07
Nodes (28): addFlagships(), flagships, run(), crawlProducts(), deleteProduct(), updateProduct(), addToCart(), chatController (+20 more)

### Community 2 - "Testing Framework & Node Refs"
Cohesion: 0.05
Nodes (40): app, cookieParser, cors, express, path, zlib, baseDataDir, fs (+32 more)

### Community 3 - "Admin Portal Management & UI"
Cohesion: 0.09
Nodes (54): ADMIN_CATEGORY_DEFAULTS, closeAdminModal(), currentCustFilter, currentOrderFilter, currentProdFilter, deleteCustomer(), deleteOrder(), deleteProduct() (+46 more)

### Community 4 - "Core ADRs & System Architecture"
Cohesion: 0.07
Nodes (45): Research: In-Memory TTL Caching & DB Indexing Benchmarks, HTTP Payload Optimization & Compression, PostgreSQL Indexing Strategy, In-Memory TTL Cache Pattern with Write-Through Invalidation, 3-Second HTTP Polling & Sandbox Webhook Pattern, Research: State Machine & Polling Strategy for Simulated QR Payment, Order & Payment State Machine Design, Lazy TTL Evaluation on Read + Poll (+37 more)

### Community 5 - "dependencies"
Cohesion: 0.17
Nodes (15): dependencies, cookie-parser@^1.4.6, cors@^2.8.5, dotenv@^18.0.7, express@^4.19.2, @google/genai@^3.0.0, pg@^8.23.1, main (+7 more)

### Community 6 - "Admin & Storefront HTML Templates"
Cohesion: 0.07
Nodes (45): admin.html (Quản Trị Hệ Thống Pro CRM), Customer CRM Tier Classification (Mới/Thân thiết/VIP), Auto-Crawler Sync Modal Form, Customer 360 Detail Modal, Customer Add/Edit Modal Form, Order Detail & Status Update Modal Form, Product Add/Edit Modal Form, Admin Sidebar Navigation (+37 more)

### Community 7 - "Core Domain Models & Crypto"
Cohesion: 0.13
Nodes (8): crypto, crypto, STATUS_TITLES, catalogCache, assert, fs, path, { test, describe, after }

### Community 8 - "Customer Controller & Auth"
Cohesion: 0.19
Nodes (10): getProfile(), getWishlist(), login(), lookup(), register(), toggleWishlist(), updateProfile(), calculateTag() (+2 more)

### Community 10 - "Admin Controller & CRM Operations"
Cohesion: 0.11
Nodes (12): addProduct(), createCustomer(), deleteCustomer(), deleteOrder(), exportCustomersCsv(), exportOrdersCsv(), getAllCustomers(), getAllOrders() (+4 more)

### Community 11 - "Order Lifecycle & Controller"
Cohesion: 0.21
Nodes (10): getCustomerDetail(), getMyOrders(), cancelOrder(), createOrder(), getPaymentStatus(), handleSandboxWebhook(), trackOrder(), createHistoryEntry() (+2 more)

### Community 12 - "catalogFilter.js"
Cohesion: 0.25
Nodes (15): buildProductTextHaystack(), escapeRegExp(), filterProducts(), getCategoryMeta(), groupProductsByCategory(), inferCategory(), matchesGearHubPolicy(), matchesGearHubStandard() (+7 more)

### Community 13 - "Agent Guidelines & Workflow Rules"
Cohesion: 0.21
Nodes (12): Agent Instructions, Agent Skill: Domain Docs, Agent Skill: Issue Tracker, Agent Skill: Triage Labels, ADR Conflict Surfacing Rule, Domain Docs Consumption Guidelines, Glossary Vocabulary Usage Rule, Issue Conventions & Native Dependencies (+4 more)

### Community 14 - "storageSeam.js"
Cohesion: 0.05
Nodes (24): crypto, fs, path, ensureReady(), initDatabase(), { Pool }, PostgresStorageAdapter, adminSchema (+16 more)

### Community 15 - "AdminModel"
Cohesion: 0.43
Nodes (4): changePassword(), login(), AdminModel, hashPassword()

### Community 17 - "express"
Cohesion: 0.15
Nodes (9): express, express, router, express, router, express, router, express (+1 more)

### Community 18 - "Storefront Redesign & Taste Skill ADRs"
Cohesion: 0.31
Nodes (7): Forensic Contrast Audit & WCAG Remediation, UI & System Upgrade Conversation Summary, Luxury Light & Deep Obsidian Dark Themes, Prototype Phase & Variant B Selection, Pure SVG Vector System & Emoji Elimination, Tasteskill v2 Integration & Anti-Slop, UI/UX Pro Max Skill Reinstallation

### Community 20 - "Product Specification & Positioning"
Cohesion: 0.29
Nodes (7): WCAG 2.2 AA Accessibility Standards, Product Strategy (GearHub / TechStore), GearHub Web Platform, Product Principles (Student-First, Scan-to-Action), GearHub Purpose & USP, 8 Services & Rental Packages Catalog, IT Student Persona & Jobs to be Done

### Community 21 - "scripts"
Cohesion: 0.20
Nodes (10): scripts, build, crawl, db:seed, dev, start, test, vercel:deploy (+2 more)

### Community 24 - "Vercel Serverless Configuration"
Cohesion: 0.50
Nodes (3): builds, routes, version

### Community 25 - "package.json"
Cohesion: 0.40
Nodes (5): devDependencies, nodemon@^3.1.14, vercel@^63.1.2, nodemon, vercel

### Community 26 - "express-session"
Cohesion: 0.50
Nodes (3): express-session@^1.18.0, express-session, session

## Knowledge Gaps
- **42 isolated node(s):** `ADR Conflict Surfacing Rule`, `Glossary Vocabulary Usage Rule`, `Issue Conventions & Native Dependencies`, `Wayfinding Map & Child Tickets Operations`, `Five-Role Triage Mapping Table` (+37 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 190 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `index.html (GearHub Student Station Storefront)` connect `Admin & Storefront HTML Templates` to `Storefront Client UI & Chat`, `catalogFilter.js`?**
  _High betweenness centrality (0.265) - this node is a cross-community bridge._
- **What connects `ADR Conflict Surfacing Rule`, `Glossary Vocabulary Usage Rule`, `Issue Conventions & Native Dependencies` to the rest of the system?**
  _42 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Storefront Client UI & Chat` be split into smaller, more focused modules?**
  _Cohesion score 0.05347985347985348 - nodes in this community are weakly interconnected._
- **Why does `admin.html (Quản Trị Hệ Thống Pro CRM)` connect `Admin & Storefront HTML Templates` to `Admin Portal Management & UI`, `catalogFilter.js`?**
  _High betweenness centrality (0.175) - this node is a cross-community bridge._
- **Should `Product Crawler & Flagship Scripts` be split into smaller, more focused modules?**
  _Cohesion score 0.06638714185883997 - nodes in this community are weakly interconnected._
- **Why does `ProductModel` connect `Product Crawler & Flagship Scripts` to `Testing Framework & Node Refs`, `Core Domain Models & Crypto`, `Customer Controller & Auth`, `Admin Controller & CRM Operations`, `express`?**
  _High betweenness centrality (0.048) - this node is a cross-community bridge._
- **Should `Testing Framework & Node Refs` be split into smaller, more focused modules?**
  _Cohesion score 0.05009920634920635 - nodes in this community are weakly interconnected._