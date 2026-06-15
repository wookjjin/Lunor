/**
 * 공통 유틸리티 함수
 */

/**
 * 객체에서 undefined/null 값을 제거합니다.
 */
export function omitNil<T extends Record<string, unknown>>(obj: T): Partial<T> {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, v]) => v != null),
  ) as Partial<T>
}

/**
 * 지정된 시간(ms) 동안 대기합니다.
 */
export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * 클래스명을 조건부로 결합합니다.
 */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ')
}
