/**
 * 비즈니스 공통 유틸리티
 */

/**
 * 숫자를 통화 포맷으로 변환합니다.
 */
export function formatCurrency(value: number, locale = 'ko-KR', currency = 'KRW'): string {
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value)
}

/**
 * 날짜 문자열을 로케일 포맷으로 변환합니다.
 */
export function formatDate(date: Date | string, locale = 'ko-KR'): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return d.toLocaleDateString(locale, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
}

/**
 * 상태 값을 라벨로 매핑합니다.
 */
export function mapStatusLabel<T extends string>(status: T, labels: Record<T, string>): string {
  return labels[status] ?? status
}
