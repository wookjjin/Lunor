import { Input } from '@/core/components/Input/Input'

export default function InputPage() {
  return (
    <div>
      <h1>Input Examples</h1>
      <Input placeholder="이름" />
      <Input size="sm" placeholder="작은 입력" />
      <Input size="lg" placeholder="큰 입력" />
      <Input variant="filled" placeholder="채워진 스타일" />
      <Input invalid placeholder="오류 상태" />
      <Input disabled placeholder="비활성" />
      <Input readOnly value="읽기 전용" />
    </div>
  )
}
