'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export function BasicInputsForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  return (
    <Card>
      <CardHeader>
        <CardTitle>기본 입력 요소</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          {/* 이메일 */}
          <div className="space-y-2">
            <Label htmlFor="email">이메일</Label>
            <Input
              id="email"
              type="email"
              placeholder="user@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* 비밀번호 */}
          <div className="space-y-2">
            <Label htmlFor="password">비밀번호</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* 메시지 */}
          <div className="space-y-2">
            <Label htmlFor="message">메시지</Label>
            <Textarea
              id="message"
              placeholder="여기에 메시지를 입력하세요..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
            />
          </div>

          {/* 제출 버튼 */}
          <div className="flex gap-2">
            <Button type="submit">제출</Button>
            <Button type="reset" variant="outline">
              초기화
            </Button>
          </div>

          {/* 상태 표시 */}
          {(email || password || message) && (
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <p className="text-sm font-medium">입력된 값:</p>
              <ul className="text-xs text-muted-foreground mt-2 space-y-1">
                {email && <li>이메일: {email}</li>}
                {password && <li>비밀번호: {'*'.repeat(password.length)}</li>}
                {message && <li>메시지: {message}</li>}
              </ul>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  )
}
