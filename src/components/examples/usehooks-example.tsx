'use client'

import { useState } from 'react'
import { useCounter, useDebounceValue } from 'usehooks-ts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Info } from 'lucide-react'

export function UseHooksExample() {
  // useCounter 예제
  const counter = useCounter(0)

  // useDebounceValue 예제
  const [searchText, setSearchText] = useState('')
  const [debouncedSearch] = useDebounceValue(searchText, 800)

  // 검색 결과 시뮬레이션
  const results = debouncedSearch
    ? ['검색 결과 1', '검색 결과 2', '검색 결과 3']
    : []

  return (
    <div className="space-y-6">
      {/* 예제 1: useCounter */}
      <section>
        <h2 className="text-xl font-semibold mb-4">useCounter: 카운터 상태 관리</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">장바구니 수량 관리</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 rounded-lg text-center">
              <p className="text-sm text-muted-foreground mb-2">장바구니 수량</p>
              <p className="text-5xl font-bold text-blue-600 dark:text-blue-300">
                {counter.count}
              </p>
              <p className="text-xs text-muted-foreground mt-2">개</p>
            </div>

            <div className="flex gap-2">
              <Button
                onClick={counter.decrement}
                variant="outline"
                className="flex-1"
              >
                감소
              </Button>
              <Button
                onClick={counter.reset}
                variant="outline"
                className="flex-1"
              >
                초기화
              </Button>
              <Button onClick={counter.increment} className="flex-1">
                증가
              </Button>
            </div>

            <Alert className="border-blue-200 bg-blue-50 dark:bg-blue-950">
              <Info className="h-4 w-4 text-blue-600" />
              <AlertDescription className="text-sm">
                useCounter로 숫자 상태를 쉽게 관리할 수 있습니다.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </section>

      {/* 예제 2: useDebounceValue */}
      <section>
        <h2 className="text-xl font-semibold mb-4">useDebounceValue: 검색 최적화</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">실시간 검색 예제</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                상품 검색 (입력 멈춘 후 800ms 후 검색)
              </p>
              <Input
                placeholder="검색어를 입력해보세요..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>

            {/* 입력 vs 디바운스 상태 */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-muted rounded-lg">
                <p className="text-xs text-muted-foreground mb-1">입력된 텍스트</p>
                <p className="text-sm font-mono break-all">
                  {searchText || '없음'}
                </p>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <p className="text-xs text-muted-foreground mb-1">디바운스된 텍스트</p>
                <p className="text-sm font-mono break-all">
                  {debouncedSearch || '없음'}
                </p>
              </div>
            </div>

            {/* 검색 결과 */}
            <div>
              <p className="text-sm font-medium mb-2">검색 결과</p>
              {results.length > 0 ? (
                <ul className="space-y-2">
                  {results.map((result, i) => (
                    <li
                      key={i}
                      className="p-2 bg-muted rounded text-sm flex items-center gap-2"
                    >
                      <Badge variant="outline">{i + 1}</Badge>
                      {result}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-muted-foreground p-2">
                  {searchText ? '검색 중...' : '검색어를 입력하세요'}
                </p>
              )}
            </div>

            <Alert className="border-blue-200 bg-blue-50 dark:bg-blue-950">
              <Info className="h-4 w-4 text-blue-600" />
              <AlertDescription className="text-sm">
                API 호출을 줄이기 위해 사용자가 입력을 멈춘 후에만 검색합니다.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </section>

      {/* 코드 예제 */}
      <section>
        <h2 className="text-xl font-semibold mb-4">usehooks-ts 코드 예제</h2>
        <div className="space-y-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">useCounter 사용법</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded text-xs overflow-x-auto">
                {`import { useCounter } from 'usehooks-ts'

export function ShoppingCart() {
  const { count, increment, decrement, reset } = useCounter(0)

  return (
    <>
      <p>수량: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>초기화</button>
    </>
  )
}`}
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">useDebounceValue 사용법</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded text-xs overflow-x-auto">
                {`import { useDebounceValue } from 'usehooks-ts'

export function SearchBox() {
  const [searchInput, setSearchInput] = useState('')
  const [debouncedValue] = useDebounceValue(searchInput, 500)

  useEffect(() => {
    // API 호출 (500ms 후)
    fetch(\`/api/search?q=\${debouncedValue}\`)
  }, [debouncedValue])

  return <input onChange={(e) => setSearchInput(e.target.value)} />
}`}
              </pre>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 유용한 훅 리스트 */}
      <section>
        <h2 className="text-xl font-semibold mb-4">usehooks-ts 주요 훅</h2>
        <Card>
          <CardContent className="pt-6 space-y-3">
            {[
              { name: 'useCounter', desc: '카운터 상태 관리' },
              { name: 'useBoolean', desc: '참/거짓 토글' },
              { name: 'useDebounceValue', desc: '값 디바운스' },
              { name: 'useWindowSize', desc: '창 크기 감지' },
              { name: 'useOnClickOutside', desc: '외부 클릭 감지' },
              { name: 'useLocalStorage', desc: 'localStorage 관리' },
            ].map((hook, i) => (
              <div key={i} className="flex items-center gap-3">
                <Badge className="text-xs">{i + 1}</Badge>
                <div className="flex-1">
                  <p className="text-sm font-medium">{hook.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {hook.desc}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
