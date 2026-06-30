# Lunor

React 19 + Vite 8 기반의 **컴포넌트 플레이그라운드 & 디자인 시스템** 프로젝트.
개별 UI 컴포넌트를 독립 페이지에서 테스트하고, 디자인 토큰과 스타일 아키텍처를 실험하기 위한 작업 공간입니다.

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
│   │   ├── routes.tsx            # 라우트 정의 (lazy import)
│   │   └── guards.ts             # 라우트 가드
│   └── store/                    # Zustand 스토어 (auth, theme)
├── core/                         # 코어 UI 라이브러리
│   ├── components/               # 재사용 컴포넌트
│   │   ├── Button/               # Button
│   │   ├── Card/                 # Card
│   │   ├── DataTable/            # DataTable
│   │   ├── Dialog/               # Dialog
│   │   ├── Dropdown/             # Dropdown (Root, Trigger, Content, Item, Separator)
│   │   ├── Input/                # Input
│   │   ├── Modal/                # Modal
│   │   ├── Pagination/           # Pagination
│   │   ├── Table/                # Table
│   │   ├── Showcase/             # Showcase (컴포넌트 데모 컨테이너)
│   │   └── ShowcaseItem/         # ShowcaseItem
│   ├── layout/                   # 플레이그라운드 레이아웃
│   │   ├── ComponentsShell.tsx   # 사이드바 + 컨텐츠 셸
│   │   ├── ComponentPlaygroundContext.tsx
│   │   ├── PropertiesPanel.tsx
│   │   ├── PropsControls.tsx
│   │   └── sidebarNav.ts         # 사이드바 네비게이션 설정
│   ├── pages/                    # 컴포넌트별 플레이그라운드 페이지
│   │   ├── Home.tsx
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Dialog.tsx
│   │   ├── Dropdown.tsx
│   │   ├── Pagination.tsx
│   │   ├── Table.tsx
│   │   └── DataTable.tsx
│   ├── request/                  # HTTP 요청 인프라 (ofetch 기반)
│   │   ├── createRequest.ts
│   │   ├── HttpError.ts
│   │   ├── interceptors/         # auth, error, logger 인터셉터
│   │   └── utils/executeInterceptor.ts
│   ├── hooks/                    # useDebounce, useDisclosure, useMediaQuery, useThreeScene
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
│   │   ├── layout/               # appbar, sidebar, workspace, glass, scrollbar 등
│   │   ├── pages/
│   │   └── index.css             # 로드 순서 관리 (tokens → foundation → components → layouts → pages)
│   ├── constants/                # APP_NAME, API_BASE_URL, DEFAULT_PAGE_SIZE 등
│   ├── types/                    # ApiResponse, PaginatedResponse, PaginationParams 등
│   ├── utils/                    # cn, omitNil, sleep
│   ├── shared/assets/            # Pretendard 폰트, 이미지
│   └── index.ts                  # 공개 API 배럴 익스포트
├── features/                     # 도메인 기능 (현재 common/ 만 존재)
└── vite-env.d.ts
```

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

---

## 🧭 Routing

| 경로 | 설명 |
|------|------|
| `/` | 루트 |
| `/components` | 플레이그라운드 셸 (ComponentsShell) |
| `/components` (index) | Home |
| `/components/button` | Button 플레이그라운드 |
| `/components/card` | Card 플레이그라운드 |
| `/components/input` | Input 플레이그라운드 |
| `/components/dialog` | Dialog 플레이그라운드 |
| `/components/dropdown` | Dropdown 플레이그라운드 |
| `/components/pagination` | Pagination 플레이그라운드 |
| `/components/table` | Table 플레이그라운드 |
| `/components/datatable` | DataTable 플레이그라운드 |

모든 페이지는 lazy import로 코드 스플리팅됩니다.

---

## 🔌 HTTP Client

`core/request/` 에 ofetch 기반 HTTP 클라이언트 인프라를 구축했습니다.

- `createRequest()` — 인터셉터 체인이 적용된 ofetch 인스턴스 팩토리
- **인터셉터**: `auth` (토큰 주입), `error` (에러 정규화 → HttpError), `logger` (요청/응답 로깅)
- `HttpError` — 표준화된 에러 타입

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