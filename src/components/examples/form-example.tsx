'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Check } from 'lucide-react'

export function FormExample() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    category: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isAgree, setIsAgree] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.username.trim()) {
      newErrors.username = '사용자명을 입력해주세요'
    }
    if (!formData.email.includes('@')) {
      newErrors.email = '유효한 이메일을 입력해주세요'
    }
    if (!formData.category) {
      newErrors.category = '카테고리를 선택해주세요'
    }
    if (!formData.message.trim()) {
      newErrors.message = '메시지를 입력해주세요'
    }
    if (!isAgree) {
      newErrors.agree = '약관에 동의해야 합니다'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      setSubmitted(true)
      setTimeout(() => {
        setFormData({ username: '', email: '', category: '', message: '' })
        setIsAgree(false)
        setSubmitted(false)
      }, 2000)
    }
  }

  return (
    <div className="space-y-6">
      {/* 예제 1: 검증이 있는 폼 */}
      <section>
        <h2 className="text-xl font-semibold mb-4">검증이 있는 폼 예제</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">문의하기</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* 사용자명 */}
              <div className="space-y-2">
                <Label htmlFor="username">사용자명</Label>
                <Input
                  id="username"
                  placeholder="홍길동"
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                  className={errors.username ? 'border-red-500' : ''}
                />
                {errors.username && (
                  <p className="text-xs text-red-500">{errors.username}</p>
                )}
              </div>

              {/* 이메일 */}
              <div className="space-y-2">
                <Label htmlFor="email">이메일</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="user@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={errors.email ? 'border-red-500' : ''}
                />
                {errors.email && (
                  <p className="text-xs text-red-500">{errors.email}</p>
                )}
              </div>

              {/* 카테고리 */}
              <div className="space-y-2">
                <Label htmlFor="category">카테고리</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) =>
                    setFormData({ ...formData, category: value })
                  }
                >
                  <SelectTrigger
                    id="category"
                    className={errors.category ? 'border-red-500' : ''}
                  >
                    <SelectValue placeholder="카테고리 선택" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bug">버그 신고</SelectItem>
                    <SelectItem value="feature">기능 요청</SelectItem>
                    <SelectItem value="inquiry">문의</SelectItem>
                    <SelectItem value="other">기타</SelectItem>
                  </SelectContent>
                </Select>
                {errors.category && (
                  <p className="text-xs text-red-500">{errors.category}</p>
                )}
              </div>

              {/* 메시지 */}
              <div className="space-y-2">
                <Label htmlFor="message">메시지</Label>
                <Textarea
                  id="message"
                  placeholder="자세한 내용을 입력해주세요..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className={errors.message ? 'border-red-500' : ''}
                />
                {errors.message && (
                  <p className="text-xs text-red-500">{errors.message}</p>
                )}
              </div>

              {/* 약관 동의 */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="agree"
                  checked={isAgree}
                  onCheckedChange={(checked) => setIsAgree(checked as boolean)}
                />
                <Label htmlFor="agree" className="font-normal">
                  약관에 동의합니다
                </Label>
              </div>
              {errors.agree && (
                <p className="text-xs text-red-500">{errors.agree}</p>
              )}

              {/* 제출 버튼 */}
              <Button type="submit" className="w-full">
                제출
              </Button>

              {/* 성공 메시지 */}
              {submitted && (
                <Alert className="border-green-200 bg-green-50 dark:bg-green-950">
                  <Check className="h-4 w-4 text-green-600" />
                  <AlertDescription>
                    제출되었습니다. 감사합니다!
                  </AlertDescription>
                </Alert>
              )}
            </form>
          </CardContent>
        </Card>
      </section>

      {/* 코드 예제 */}
      <section>
        <h2 className="text-xl font-semibold mb-4">폼 검증 코드</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">검증 로직 예제</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded text-xs overflow-x-auto">
              {`const validateForm = () => {
  const errors: Record<string, string> = {}

  if (!email.includes('@')) {
    errors.email = '유효한 이메일을 입력해주세요'
  }

  setErrors(errors)
  return Object.keys(errors).length === 0
}

const handleSubmit = (e) => {
  e.preventDefault()
  if (validateForm()) {
    // 제출 로직
  }
}`}
            </pre>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
