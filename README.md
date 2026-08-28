# Lunor

React 19 + Vite 8 기반의 **컴포넌트 플레이그라운드 & 디자인 시스템**(Glacier) 프로젝트.
40개의 UI 컴포넌트를 독립 페이지에서 테스트하고, 디자인 토큰과 스타일 아키텍처를 실험하기 위한 작업 공간입니다.

---

## 🛠 Tech Stack

| 영역 | 기술 |
|------|------|
| Framework | React 19 |
| Build Tool | Vite 8 (`@vitejs/plugin-react`) |
| Language | TypeScript 6 (strict mode) |
| State (Client) | Zustand |
| State (Server) | TanStack Query v5 |
| Routing | React Router 8 (lazy loading) |
| HTTP Client | ofetch (인터셉터 체인 지원) |
| CSS | 순수 CSS + Design Tokens (CSS Custom Properties) |
| CSS Transpiler | Lightning CSS (트랜스파일 & 미니파이) |
| Icons | Material Symbols |
| Font | Pretendard (woff2 self-hosted) |
| 3D | Three.js |
| E2E Test | Playwright |
| Linting | ESLint Flat Config (`@antfu/eslint-config`) |
| Package Manager | pnpm |

---

## 📦 Getting Started

### Prerequisite
- Node.js 20+
- [pnpm](https://pnpm.io/)

### Installation
```bash
pnpm install
```

### Development
```bash
pnpm dev          # http://localhost:3000
```

### Build & Preview
```bash
pnpm build        # tsc -b && vite build
pnpm preview      # 빌드 결과물 로컬 확인
```

### Lint
```bash
pnpm lint
```

### E2E Test
```bash
pnpm test:e2e     # Playwright 테스트 실행
pnpm test:e2e:ui  # Playwright UI 모드
```

---

## 📂 Project Structure

```text
src/
├── main.tsx                      # 엔트리포인트
├── app/                          # 애플리케이션 인프라
│   ├── App.tsx                   # Provider 트리 (Error → Query → Theme → Toast → Router)
│   ├── error/                    # GlobalErrorBoundary
│   ├── providers/                # QueryProvider, RouterProvider, ThemeProvider, ToastProvider
│   ├── router/
│   │   ├── routes.tsx            # 라우트 정의 (lazy import, 40+ 페이지)
│   │   └── guards.ts             # 라우트 가드
│   └── store/                    # Zustand 스토어 (auth, theme)
├── core/                         # 코어 UI 라이브러리
│   ├── components/                # 재사용 컴포넌트 (40개, Component.tsx/.css/.types.ts/index.ts 패턴)
│   │   ├── Foundation      → Icon, Stack, Divider, Spacer, Container
│   │   ├── Inputs          → Button, Input, InputGroup, Checkbox, Radio, Switch,
│   │   │                     Textarea, Slider, FileInput
│   │   ├── Data Display    → Card, Avatar, Badge, Chip, List, Accordion, Tabs,
│   │   │                     Table, DataTable, NoData
│   │   ├── Navigation      → Dropdown, Pagination, Breadcrumb, MenuItem, Link
│   │   ├── Feedback        → Toast, Spinner, ProgressBar, Skeleton, Alert
│   │   ├── Overlay         → Dialog, ConfirmDialog, Popover, Drawer, Tooltip, Modal
│   │   └── Showcase / ShowcaseItem  → 컴포넌트 데모 컨테이너 (플레이그라운드 전용)
│   ├── layout/                   # 플레이그라운드 레이아웃
│   │   ├── ComponentsShell.tsx   # 사이드바 + 컨텐츠 셸
│   │   ├── ComponentPlaygroundContext.tsx
│   │   ├── PropertiesPanel.tsx
│   │   ├── PropsControls.tsx
│   │   └── sidebarNav.ts         # 사이드바 네비게이션 설정 (그룹 구조, 새 컴포넌트 추가 시 갱신)
│   ├── pages/                    # 컴포넌트/파운데이션별 플레이그라운드 페이지 (40+ 페이지)
│   │   ├── Home.tsx, HomeHeroScene.tsx   # 홈 대시보드 + Three.js 히어로
│   │   ├── Colors.tsx, Typography.tsx, Shadows.tsx, Hooks.tsx  # 파운데이션 쇼케이스
│   │   └── <ComponentName>.tsx           # 컴포넌트별 플레이그라운드 (Button, Card, Dialog, ... 등 40개)
│   ├── request/                  # HTTP 요청 인프라 (ofetch 기반)
│   │   ├── createRequest.ts
│   │   ├── HttpError.ts
│   │   ├── interceptors/         # auth, error, logger 인터셉터
│   │   └── utils/executeInterceptor.ts
│   ├── hooks/                    # 커스텀 훅 (10개)
│   │   ├── useClickOutside, useClipboard, useDebounce, useDisclosure
│   │   ├── useEscapeKey, useFocusTrap, useIntersection
│   │   └── useMediaQuery, usePrevious, useThreeScene
│   ├── styles/                   # 디자인 시스템 스타일
│   │   ├── tokens/               # Design Tokens (CSS Custom Properties)
│   │   │   ├── color.css
│   │   │   ├── typography.css
│   │   │   ├── spacing.css
│   │   │   ├── radius.css
│   │   │   ├── shadow.css
│   │   │   ├── motion.css
│   │   │   ├── z-index.css
│   │   │   ├── breakpoints.css
│   │   │   └── font-face.css
│   │   ├── foundation/           # reset, normalize, base, accessibility
│   │   ├── layout/                # appbar, sidebar, workspace, glass, scrollbar, canvas, icon 등
│   │   └── pages/                 # Home 등 페이지 전용 CSS
│   ├── constants/                # APP_NAME, API_BASE_URL, DEFAULT_PAGE_SIZE, MAX_RETRY_COUNT
│   ├── types/                    # ApiResponse, PaginatedResponse, PaginationParams, ID
│   ├── utils/                    # cn, omitNil, sleep
│   ├── shared/assets/            # Pretendard 폰트, 이미지
│   └── index.ts                  # 공개 API 배럴 익스포트
├── features/                     # 도메인 기능 (현재 common/ 만 존재, 골격 단계)
│   └── common/
│       ├── components/           # (placeholder)
│       ├── hooks/                # (placeholder)
│       └── utils/                # formatCurrency, formatDate, mapStatusLabel
└── vite-env.d.ts

tests/
└── home.spec.ts                  # Playwright E2E — Home 페이지 (23개 테스트)
```

> ⚠️ 개별 컴포넌트(Button, Dialog 등)에 대한 E2E/유닛 테스트는 아직 작성되지 않았습니다. Home 페이지만 테스트되어 있습니다.

---

## 🎨 Design System

### CSS Architecture

CSS는 레이어 우선순위에 따라 순차 로드됩니다.

```
tokens/       → Design Tokens (CSS Custom Properties)
foundation/   → reset → normalize → base → accessibility
components/   → 컴포넌트별 CSS
layout/       → 레이아웃 CSS
pages/        → 페이지 CSS
```

### Design Tokens

`styles/tokens/` 에 CSS Custom Properties로 정의된 디자인 토큰 체계:

- **color** — Primitive + Semantic 색상
- **typography** — font-size, weight, line-height, letter-spacing
- **spacing** — 4px grid 스케일
- **radius** — border-radius 토큰
- **shadow** — elevation / shadow 토큰
- **motion** — animation / transition 토큰
- **z-index** — z-index 레이어 토큰
- **breakpoints** — 반응형 브레이크포인트
- **font-face** — Pretendard self-hosted 폰트

### Components (40)

| 그룹 | 컴포넌트 |
|------|----------|
| Foundation | Icon, Stack, Divider, Spacer, Container |
| Inputs | Button, Input, InputGroup, Checkbox, Radio, Switch, Textarea, Slider, FileInput |
| Data Display | Card, Avatar, Badge, Chip, List, Accordion, Tabs, Table, DataTable, NoData |
| Navigation | Dropdown, Pagination, Breadcrumb, MenuItem, Link |
| Feedback | Toast, Spinner, ProgressBar, Skeleton, Alert |
| Overlay | Dialog, ConfirmDialog, Popover, Drawer, Tooltip, Modal |

각 컴포넌트는 `Component.tsx` / `Component.css` / `Component.types.ts` / `index.ts` 4파일 구조로 통일되어 있으며, `@/core` 배럴에서 named export 됩니다.

---

## 🧭 Routing

모든 페이지는 `/components` 하위에서 lazy import로 코드 스플리팅됩니다.

| 그룹 | 경로 |
|------|------|
| Overview | `/components` (Home) |
| Foundation | `colors`, `typography`, `shadows`, `hooks`, `icon`, `stack`, `divider`, `spacer`, `container` |
| Components | `button`, `input`, `card`, `avatar`, `checkbox`, `radio`, `switch`, `textarea`, `slider`, `file-input`, `input-group`, `badge`, `chip`, `list`, `accordion`, `tabs`, `table`, `datatable`, `no-data`, `dropdown`, `pagination` |
| Feedback | `toast`, `spinner`, `progress-bar`, `skeleton`, `alert` |
| Navigation | `breadcrumb`, `menu-item`, `link` |
| Overlays | `dialog`, `confirm-dialog`, `popover`, `drawer`, `tooltip`, `modal` |

(전체 경로는 `/components/<path>` 형태이며, 사이드바 그룹 구조는 `core/layout/sidebarNav.ts` 참고)

---

## 🔌 HTTP Client

`core/request/` 에 ofetch 기반 HTTP 클라이언트 인프라를 구축했습니다.

- `createRequest()` — 인터셉터 체인이 적용된 ofetch 인스턴스 팩토리
- **인터셉터**: `auth` (토큰 주입), `error` (에러 정규화 → HttpError), `logger` (요청/응답 로깅)
- `HttpError` — 표준화된 에러 타입

---

## 🪝 Custom Hooks

`core/hooks/` 에 정의된 재사용 훅:

| 훅 | 설명 |
|------|------|
| `useClickOutside` | 특정 엘리먼트 바깥 클릭 감지 |
| `useClipboard` | 클립보드 복사 |
| `useDebounce` | 값 디바운싱 |
| `useDisclosure` | open/close 상태 관리 (Modal, Dialog 등) |
| `useEscapeKey` | ESC 키 입력 감지 |
| `useFocusTrap` | 포커스 트랩 (접근성) |
| `useIntersection` | IntersectionObserver 래핑 |
| `useMediaQuery` | 반응형 미디어 쿼리 |
| `usePrevious` | 이전 렌더링 값 추적 |
| `useThreeScene` | Three.js 인터랙티브 3D 배경 (Home 히어로) |

---

## 🧩 Core Exports

`@/core` 배럴에서 주요 API를 익스포트합니다:

```ts
// Components
import { Button, Dropdown, Input, Modal, Table } from '@/core'

// Hooks
import { useDebounce, useDisclosure } from '@/core'

// Request
import { createRequest, HttpError } from '@/core'

// Utils
import { cn, omitNil, sleep } from '@/core'

// Types
import type { ApiResponse, PaginatedResponse, PaginationParams } from '@/core'
```

---

## ⚙️ Configuration

### Path Alias
`@/` → `src/`

```ts
import { Button } from '@/core/components/Button'
```

### Environment Variables
`.env` 파일에 다음 변수를 설정합니다:

```
VITE_API_BASE_URL=https://api.example.com
```

### CSS Transpiler (Lightning CSS)
Vite의 CSS 트랜스파일러와 미니파이어로 Lightning CSS를 사용합니다.

- CSS Modules 활성화
- 타겟: Safari 15+, Chrome 100+, Firefox 100+

### ESLint
`@antfu/eslint-config` 기반 Flat Config. React 플러그인과 CSS 포매터가 활성화되어 있습니다.

### TypeScript
`strict` 모드 + `noUnusedLocals` / `noUnusedParameters` / `verbatimModuleSyntax` 적용.

---

## 📜 Scripts

| 명령 | 설명 |
|------|------|
| `pnpm dev` | 개발 서버 실행 (port 3000) |
| `pnpm build` | 타입 체크 + 프로덕션 빌드 |
| `pnpm preview` | 빌드 결과물 미리보기 |
| `pnpm lint` | ESLint 실행 |
| `pnpm test:e2e` | Playwright E2E 테스트 실행 |
| `pnpm test:e2e:ui` | Playwright UI 모드 실행 |
