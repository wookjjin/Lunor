import { expect, test } from '@playwright/test'

/* =============================================================================
   Home Page E2E Tests
   Glacier UI 대시보드형 홈 화면 테스트
   ============================================================================= */

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components')
  })

  test('페이지가 정상 로드된다', async ({ page }) => {
    await expect(page).toHaveTitle(/Core UI|Glacier|Lunor/i)
  })

  test('Hero 섹션이 표시된다', async ({ page }) => {
    await expect(page.locator('.home-hero')).toBeVisible()
    await expect(page.locator('.home-hero-title')).toBeVisible()
    await expect(page.locator('.home-hero-subtitle')).toBeVisible()
  })

  test('Hero 배지에 Glacier v1.0이 표시된다', async ({ page }) => {
    await expect(page.locator('.home-hero-badge')).toContainText('Glacier Design System v1.0')
  })

  test('Hero CTA 버튼이 존재한다', async ({ page }) => {
    await expect(page.locator('.home-cta-primary')).toBeVisible()
    await expect(page.locator('.home-cta-secondary')).toBeVisible()
  })

  test('Hero CTA 클릭 시 Foundation 페이지로 이동한다', async ({ page }) => {
    await page.locator('.home-cta-primary').click()
    await expect(page).toHaveURL(/\/components\/colors/)
  })

  test('카테고리 허브 섹션이 6개 그룹을 표시한다', async ({ page }) => {
    await page.locator('.home-hub-grid').scrollIntoViewIfNeeded()
    await expect(page.locator('.home-hub-grid')).toBeVisible()
    const hubCards = page.locator('.home-hub-card')
    await expect(hubCards).toHaveCount(6)
  })

  test('카테고리 허브에 Foundation 그룹이 있다', async ({ page }) => {
    const foundationCard = page.locator('.home-hub-card').filter({ hasText: 'Foundation' })
    await expect(foundationCard).toBeVisible()
    await expect(foundationCard).toContainText('Colors')
  })

  test('카테고리 허브 클릭 시 해당 페이지로 이동한다', async ({ page }) => {
    await page.locator('.home-hub-card', { hasText: 'Feedback' }).click()
    await expect(page).toHaveURL(/\/components\/toast/)
  })

  test('Featured 컴포넌트 섹션이 8개 카드를 표시한다', async ({ page }) => {
    await page.locator('.home-section-label', { hasText: 'Featured' }).scrollIntoViewIfNeeded()
    await expect(page.locator('.home-section-label', { hasText: 'Featured' })).toBeVisible()
    const featuredSection = page.locator('.home-section').nth(1)
    const featuredCards = featuredSection.locator('.home-card')
    await expect(featuredCards).toHaveCount(8)
  })

  test('Featured 카드 클릭 시 컴포넌트 페이지로 이동한다', async ({ page }) => {
    await page.locator('.home-card', { hasText: 'Accordion' }).click()
    await expect(page).toHaveURL(/\/components\/accordion/)
  })

  test('Design Tokens 섹션이 3개 미리보기 카드를 표시한다', async ({ page }) => {
    await expect(page.locator('.home-section', { hasText: 'Design Tokens' })).toBeVisible()
    const tokenCards = page.locator('.home-token-card')
    await expect(tokenCards).toHaveCount(3)
  })

  test('Colors 토큰 카드 클릭 시 Colors 페이지로 이동한다', async ({ page }) => {
    await page.locator('.home-token-card', { hasText: 'Colors' }).click()
    await expect(page).toHaveURL(/\/components\/colors/)
  })

  test('Typography 토큰 카드 클릭 시 Typography 페이지로 이동한다', async ({ page }) => {
    await page.locator('.home-token-card', { hasText: 'Typography' }).click()
    await expect(page).toHaveURL(/\/components\/typography/)
  })

  test('Shadows 토큰 카드 클릭 시 Shadows 페이지로 이동한다', async ({ page }) => {
    await page.locator('.home-token-card', { hasText: 'Shadows' }).click()
    await expect(page).toHaveURL(/\/components\/shadows/)
  })

  test('Quick Start 섹션이 표시된다', async ({ page }) => {
    await page.locator('.home-quickstart').scrollIntoViewIfNeeded()
    await expect(page.locator('.home-quickstart')).toBeVisible()
    await expect(page.locator('.home-quickstart-title')).toContainText('Quick Start')
  })

  test('코드 블록이 2개 표시된다', async ({ page }) => {
    const codeBlocks = page.locator('.home-code-block')
    await expect(codeBlocks).toHaveCount(2)
  })

  test('코드 복사 버튼이 동작한다', async ({ page }) => {
    const copyBtn = page.locator('.home-code-copy-btn').first()
    await expect(copyBtn).toBeVisible()
    await copyBtn.click()
    // 복사 후 check 아이콘으로 변경되는지 확인
    await expect(page.locator('.home-code-copy-btn').first().locator('.material-symbols-outlined')).toHaveText('check')
  })

  test('Stats 섹션이 4개 항목을 표시한다', async ({ page }) => {
    await expect(page.locator('.home-stats')).toBeVisible()
    const statItems = page.locator('.home-stat-item')
    await expect(statItems).toHaveCount(4)
  })

  test('Stats에 실제 컴포넌트 카운트가 표시된다', async ({ page }) => {
    await page.locator('.home-stats').scrollIntoViewIfNeeded()
    await expect(page.locator('.home-stat-item', { hasText: 'Components' })).toContainText('46')
    const hooksStat = page.locator('.home-stat-item').filter({ hasText: 'Hooks' })
    await expect(hooksStat).toContainText('6')
  })

  test('Footer가 표시된다', async ({ page }) => {
    await page.locator('.home-footer').scrollIntoViewIfNeeded()
    await expect(page.locator('.home-footer')).toBeVisible()
    await expect(page.locator('.home-footer')).toContainText('Glacier Design System')
  })

  test('스크롤 인디케이터가 표시된다', async ({ page }) => {
    await expect(page.locator('.home-scroll-indicator')).toBeVisible()
  })

  test('3D 캔버스가 렌더링된다', async ({ page }) => {
    await expect(page.locator('.home-hero-canvas')).toBeVisible()
  })

  test('카드 호버 시 3D tilt 효과가 적용된다', async ({ page }) => {
    const card = page.locator('.home-card').first()
    await card.hover()
    // transform 스타일이 변경되었는지 확인 (perspective + rotateX/Y)
    const transform = await card.evaluate(el => el.style.transform)
    expect(transform).toContain('perspective')
  })
})