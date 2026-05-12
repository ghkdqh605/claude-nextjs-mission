'use client'

import { useState } from 'react'
import useLocalStorageState from 'use-local-storage-state'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Trash2 } from 'lucide-react'

export function LocalStorageDemo() {
  const [input, setInput] = useState('')
  const [todos, setTodos, { isPersistent, removeItem }] =
    useLocalStorageState<Array<{ id: string; text: string }>>('demo-todos', {
      defaultValue: [
        { id: '1', text: 'React 배우기' },
        { id: '2', text: 'Next.js 프로젝트 만들기' },
      ],
      defaultServerValue: [],
    })

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now().toString(), text: input }])
      setInput('')
    }
  }

  const removeTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>use-local-storage-state: 지속적인 상태</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-sm text-muted-foreground">
          페이지를 새로고침해도 데이터가 유지됩니다. localStorage에 자동으로 저장됩니다.
        </p>

        {/* 상태 표시 */}
        <div className="p-4 bg-muted rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <p className="text-sm font-medium">LocalStorage 상태:</p>
            <Badge variant={isPersistent ? 'default' : 'destructive'}>
              {isPersistent ? '✓ 사용 가능' : '✗ 불가능'}
            </Badge>
          </div>
          <p className="text-xs text-muted-foreground">
            {isPersistent
              ? '브라우저가 localStorage를 지원합니다'
              : '프라이빗 모드 또는 localStorage를 지원하지 않는 환경입니다'}
          </p>
        </div>

        {/* 입력 폼 */}
        <div className="flex gap-2">
          <Input
            placeholder="할일을 입력하세요..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') addTodo()
            }}
          />
          <Button onClick={addTodo}>추가</Button>
        </div>

        {/* 할일 목록 */}
        <div className="space-y-2">
          <p className="text-sm font-medium">할일 목록 ({todos.length})</p>
          {todos.length > 0 ? (
            <ul className="space-y-2">
              {todos.map((todo) => (
                <li
                  key={todo.id}
                  className="flex items-center justify-between p-3 bg-muted rounded-lg"
                >
                  <span className="text-sm">{todo.text}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeTodo(todo.id)}
                  >
                    <Trash2 className="size-4" />
                  </Button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-muted-foreground p-3">
              아직 할일이 없습니다.
            </p>
          )}
        </div>

        {/* 초기화 버튼 */}
        <Button variant="destructive" onClick={removeItem}>
          모두 초기화
        </Button>

        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg text-sm">
          <p className="font-medium text-blue-900 dark:text-blue-200 mb-2">
            💡 사용 사례
          </p>
          <ul className="text-blue-800 dark:text-blue-300 text-xs space-y-1">
            <li>• 사용자 설정 저장 (테마, 언어 등)</li>
            <li>• 장바구니 상태 유지</li>
            <li>• 폼 임시 저장</li>
            <li>• 탭 간 상태 동기화</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
