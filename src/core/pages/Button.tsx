import { Button } from '@/core/components/Button/Button'

export default function ButtonPage() {
  return (
    <div>
      <h1>Button Examples</h1>
      <Button>저장</Button>
      <Button variant="outline">취소</Button>
      <Button variant="ghost">더보기</Button>
      <Button variant="danger">삭제</Button>
      <Button size="sm">이전</Button>
      <Button size="lg">회원가입</Button>
      <Button fullWidth>로그인</Button>
      <Button disabled>처리중...</Button>
    </div>
  )
}
