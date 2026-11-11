# Graph Report - GearHub  (2026-11-11)

## Corpus Check
- 86 files · ~67,855 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 4 file(s) not represented in the graph (top: .css 2, .example 1, (none) 1)

## Summary
- 650 nodes · 1311 edges · 20 communities
- Extraction: 96% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 56 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Storefront Client UI & Chat
- Admin Controller & CRM Operations
- JsonDB Engine & Storage Models
- Core ADRs & System Architecture
- Admin Portal Management & UI
- Product Crawler & AI Scripts
- Admin & Storefront HTML Templates
- Project Dependencies & Config
- Automated Test Suite & Node Refs
- Unified Auth & Routing Controllers
- Core Domain Models & Session Security
- Catalog Filter Engine & Hardware Specs
- File System & Local Database Drivers
- Database Seeding & Crypto Scripts
- Agent Guidelines & Workflow Rules
- Server Express & Middleware Pipeline
- Storefront Redesign & Taste Skill ADRs
- Product Specification & Positioning
- Customer Portal Integration Tests
- Vercel Serverless Deployment Config

## God Nodes (most connected - your core abstractions)
1. `ProductModel` - 27 edges
2. `index.html (GearHub Student Station Storefront)` - 26 edges
3. `TechStore Glossary` - 25 edges
4. `CustomerModel` - 22 edges
5. `admin.html (Quản Trị Hệ Thống Pro CRM)` - 19 edges
6. `OrderModel` - 17 edges
7. `showToast()` - 16 edges
8. `showToast()` - 16 edges
9. `loadDashboard()` - 15 edges
10. `renderProductList()` - 15 edges

## Surprising Connections (you probably didn't know these)
- `Domain Docs Consumption Guidelines` --references--> `Agent Instructions`  [INFERRED]
  docs/agents/domain.md → AGENTS.md
- `GitHub Issue Tracker Operations` --references--> `Agent Instructions`  [INFERRED]
  docs/agents/issue-tracker.md → AGENTS.md
- `Canonical Triage Labels` --references--> `Agent Instructions`  [INFERRED]
  docs/agents/triage-labels.md → AGENTS.md
- `Domain Docs Consumption Guidelines` --references--> `TechStore Glossary`  [EXTRACTED]
  docs/agents/domain.md → GLOSSARY.md
- `Agent Skill: Issue Tracker` --references--> `GitHub Issue Tracker Operations`  [EXTRACTED]
  AGENTS.md → docs/agents/issue-tracker.md

## Import Cycles
- None detected.

## Communities (20 total, 0 thin omitted)

### Community 0 - "Storefront Client UI & Chat"
Cohesion: 0.05
Nodes (87): activeQrSession, addToCart(), allProducts, appendChatBubble(), applyQuickPreset(), BENCH_MODELS, buyNow(), cancelCustomerOrderUI() (+79 more)

### Community 1 - "Admin Controller & CRM Operations"
Cohesion: 0.06
Nodes (32): createCustomer(), deleteCustomer(), deleteOrder(), exportCustomersCsv(), exportOrdersCsv(), getAllCustomers(), getAllOrders(), getCustomerDetail() (+24 more)

### Community 2 - "JsonDB Engine & Storage Models"
Cohesion: 0.06
Nodes (20): JsonDB, JsonStorageAdapter, PostgresStorageAdapter, adminSchema, customerSchema, findFieldDef(), mapRowToOrder(), mapRowToProduct() (+12 more)

### Community 3 - "Core ADRs & System Architecture"
Cohesion: 0.06
Nodes (48): Research: In-Memory TTL Caching & DB Indexing Benchmarks, HTTP Payload Optimization & Compression, PostgreSQL Indexing Strategy, In-Memory TTL Cache Pattern with Write-Through Invalidation, 3-Second HTTP Polling & Sandbox Webhook Pattern, Research: State Machine & Polling Strategy for Simulated QR Payment, Order & Payment State Machine Design, Lazy TTL Evaluation on Read + Poll (+40 more)

### Community 4 - "Admin Portal Management & UI"
Cohesion: 0.09
Nodes (54): ADMIN_CATEGORY_DEFAULTS, closeAdminModal(), currentCustFilter, currentOrderFilter, currentProdFilter, deleteCustomer(), deleteOrder(), deleteProduct() (+46 more)

### Community 5 - "Product Crawler & AI Scripts"
Cohesion: 0.06
Nodes (29): addFlagships(), flagships, run(), addProduct(), crawlProducts(), deleteProduct(), updateProduct(), addToCart() (+21 more)

### Community 6 - "Admin & Storefront HTML Templates"
Cohesion: 0.07
Nodes (45): admin.html (Quản Trị Hệ Thống Pro CRM), Customer CRM Tier Classification (Mới/Thân thiết/VIP), Auto-Crawler Sync Modal Form, Customer 360 Detail Modal, Customer Add/Edit Modal Form, Order Detail & Status Update Modal Form, Product Add/Edit Modal Form, Admin Sidebar Navigation (+37 more)

### Community 7 - "Project Dependencies & Config"
Cohesion: 0.07
Nodes (34): dependencies, cookie-parser@^1.4.6, cors@^2.8.5, dotenv@^18.0.7, express@^4.19.2, express-session@^1.18.0, @google/genai@^3.0.0, pg@^8.23.1 (+26 more)

### Community 8 - "Automated Test Suite & Node Refs"
Cohesion: 0.09
Nodes (23): app, assert, http, { test, describe, before, after }, assert, http, { test, describe, before, after }, assert (+15 more)

### Community 9 - "Unified Auth & Routing Controllers"
Cohesion: 0.08
Nodes (18): express, changePassword(), login(), unifiedLogin(), AdminModel, hashPassword(), express, router (+10 more)

### Community 10 - "Core Domain Models & Session Security"
Cohesion: 0.14
Nodes (7): crypto, crypto, catalogCache, assert, fs, path, { test, describe, after }

### Community 11 - "Catalog Filter Engine & Hardware Specs"
Cohesion: 0.24
Nodes (16): buildProductTextHaystack(), escapeRegExp(), filterProducts(), getCategoryMeta(), groupProductsByCategory(), inferCategory(), matchesGearHubPolicy(), matchesGearHubStandard() (+8 more)

### Community 12 - "File System & Local Database Drivers"
Cohesion: 0.16
Nodes (9): baseDataDir, fs, path, assert, http, { test, describe, before, after }, zlib, assert (+1 more)

### Community 13 - "Database Seeding & Crypto Scripts"
Cohesion: 0.21
Nodes (6): crypto, fs, path, ensureReady(), initDatabase(), { Pool }

### Community 14 - "Agent Guidelines & Workflow Rules"
Cohesion: 0.21
Nodes (12): Agent Instructions, Agent Skill: Domain Docs, Agent Skill: Issue Tracker, Agent Skill: Triage Labels, ADR Conflict Surfacing Rule, Domain Docs Consumption Guidelines, Glossary Vocabulary Usage Rule, Issue Conventions & Native Dependencies (+4 more)

### Community 15 - "Server Express & Middleware Pipeline"
Cohesion: 0.20
Nodes (8): cookieParser, cors, express, path, compressionMiddleware(), zlib, express, router

### Community 16 - "Storefront Redesign & Taste Skill ADRs"
Cohesion: 0.31
Nodes (7): Forensic Contrast Audit & WCAG Remediation, UI & System Upgrade Conversation Summary, Luxury Light & Deep Obsidian Dark Themes, Prototype Phase & Variant B Selection, Pure SVG Vector System & Emoji Elimination, Tasteskill v2 Integration & Anti-Slop, UI/UX Pro Max Skill Reinstallation

### Community 17 - "Product Specification & Positioning"
Cohesion: 0.29
Nodes (7): WCAG 2.2 AA Accessibility Standards, Product Strategy (GearHub / TechStore), GearHub Web Platform, Product Principles (Student-First, Scan-to-Action), GearHub Purpose & USP, 8 Services & Rental Packages Catalog, IT Student Persona & Jobs to be Done

### Community 18 - "Customer Portal Integration Tests"
Cohesion: 0.50
Nodes (3): assert, http, { test, describe, before, after }

### Community 19 - "Vercel Serverless Deployment Config"
Cohesion: 0.50
Nodes (3): builds, routes, version

## Knowledge Gaps
- **43 isolated node(s):** `GearHub Web Platform`, `IT Student Persona & Jobs to be Done`, `GearHub Purpose & USP`, `8 Services & Rental Packages Catalog`, `Product Principles (Student-First, Scan-to-Action)` (+38 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 192 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `index.html (GearHub Student Station Storefront)` connect `Admin & Storefront HTML Templates` to `Storefront Client UI & Chat`, `Catalog Filter Engine & Hardware Specs`?**
  _High betweenness centrality (0.263) - this node is a cross-community bridge._
- **What connects `GearHub Web Platform`, `IT Student Persona & Jobs to be Done`, `GearHub Purpose & USP` to the rest of the system?**
  _43 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Storefront Client UI & Chat` be split into smaller, more focused modules?**
  _Cohesion score 0.05212716222533895 - nodes in this community are weakly interconnected._
- **Why does `admin.html (Quản Trị Hệ Thống Pro CRM)` connect `Admin & Storefront HTML Templates` to `Catalog Filter Engine & Hardware Specs`, `Admin Portal Management & UI`?**
  _High betweenness centrality (0.171) - this node is a cross-community bridge._
- **Should `Admin Controller & CRM Operations` be split into smaller, more focused modules?**
  _Cohesion score 0.06490384615384616 - nodes in this community are weakly interconnected._
- **Why does `ProductModel` connect `Product Crawler & AI Scripts` to `Admin Controller & CRM Operations`, `Automated Test Suite & Node Refs`, `Unified Auth & Routing Controllers`, `Core Domain Models & Session Security`, `File System & Local Database Drivers`?**
  _High betweenness centrality (0.047) - this node is a cross-community bridge._
- **Should `JsonDB Engine & Storage Models` be split into smaller, more focused modules?**
  _Cohesion score 0.058173076923076925 - nodes in this community are weakly interconnected._