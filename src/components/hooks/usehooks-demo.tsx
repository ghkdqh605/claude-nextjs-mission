'use client'

import { useRef, useState } from 'react'
import { useCounter, useToggle, useDebounceValue, useOnClickOutside } from 'usehooks-ts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'

export function UseHooksDemo() {
  // useCounter 예제
  const { count, increment, decrement, reset } = useCounter(0)

  // useToggle 예제
  const [isOpen, toggle] = useToggle(false)

  // useDebounceValue 예제
  const [searchInput, setSearchInput] = useState('')
  const [debouncedValue] = useDebounceValue(searchInput, 500)

  // useOnClickOutside 예제
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  useOnClickOutside(dropdownRef as React.RefObject<HTMLElement>, () =>
    setDropdownOpen(false)
  )

  return (
    <Tabs defaultValue="counter" className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="counter">useCounter</TabsTrigger>
        <TabsTrigger value="toggle">useToggle</TabsTrigger>
        <TabsTrigger value="debounce">useDebounce</TabsTrigger>
        <TabsTrigger value="clickoutside">useOnClickOutside</TabsTrigger>
      </TabsList>

      {/* useCounter */}
      <TabsContent value="counter" className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>useCounter: 카운터 상태</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-sm text-muted-foreground">
              숫자 상태를 쉽게 관리할 수 있습니다.
            </p>

            <div className="p-6 bg-muted rounded-lg text-center">
              <p className="text-sm text-muted-foreground mb-2">현재 값</p>
              <p className="text-4xl font-bold">{count}</p>
            </div>

            <div className="flex gap-2">
              <Button onClick={decrement} variant="outline">
                감소
              </Button>
              <Button onClick={reset} variant="outline">
                초기화
              </Button>
              <Button onClick={increment}>증가</Button>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg text-sm">
              <p className="font-medium text-blue-900 dark:text-blue-200">
                💡 자동으로 제공되는 메서드:
              </p>
              <ul className="text-blue-800 dark:text-blue-300 text-xs space-y-1 mt-2">
                <li>• increment() / decrement()</li>
                <li>• reset()</li>
                <li>• set(value)</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      {/* useToggle */}
      <TabsContent value="toggle" className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>useToggle: 토글 상태</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-sm text-muted-foreground">
              boolean 상태를 토글하는 훅입니다.
            </p>

            <div className="p-6 bg-muted rounded-lg text-center">
              <p className="text-sm text-muted-foreground mb-2">상태</p>
              <Badge variant={isOpen ? 'default' : 'outline'}>
                {isOpen ? '열림' : '닫힘'}
              </Badge>
            </div>

            <Button onClick={toggle} className="w-full">
              토글
            </Button>

            {isOpen && (
              <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <p className="text-sm font-medium text-green-900 dark:text-green-200">
                  ✓ 이 내용은 토글이 열려있을 때만 보입니다.
                </p>
              </div>
            )}

            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg text-sm">
              <p className="font-medium text-blue-900 dark:text-blue-200">
                💡 사용처:
              </p>
              <ul className="text-blue-800 dark:text-blue-300 text-xs space-y-1 mt-2">
                <li>• 모달/드롭다운 열기닫기</li>
                <li>• 메뉴 토글</li>
                <li>• 접기/펼치기 기능</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      {/* useDebounceValue */}
      <TabsContent value="debounce" className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>useDebounceValue: 디바운스 값</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-sm text-muted-foreground">
              입력을 멈춘 후 500ms 후에 값이 업데이트됩니다.
            </p>

            <div className="space-y-2">
              <Input
                placeholder="검색어를 입력해보세요..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-xs text-muted-foreground mb-2">입력된 값</p>
                <p className="font-mono text-sm break-all">
                  {searchInput || '없음'}
                </p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-xs text-muted-foreground mb-2">
                  디바운스된 값
                </p>
                <p className="font-mono text-sm break-all">
                  {debouncedValue || '없음'}
                </p>
              </div>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg text-sm">
              <p className="font-medium text-blue-900 dark:text-blue-200">
                💡 사용처:
              </p>
              <ul className="text-blue-800 dark:text-blue-300 text-xs space-y-1 mt-2">
                <li>• 검색 입력 API 호출 줄이기</li>
                <li>• 폼 자동 저장</li>
                <li>• 실시간 필터링</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      {/* useOnClickOutside */}
      <TabsContent value="clickoutside" className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>useOnClickOutside: 외부 클릭 감지</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-sm text-muted-foreground">
              요소 외부를 클릭하면 상태가 변합니다.
            </p>

            <div className="relative" ref={dropdownRef}>
              <Button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-full"
              >
                {dropdownOpen ? '드롭다운 닫기' : '드롭다운 열기'}
              </Button>

              {dropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-lg shadow-lg z-10">
                  <button className="block w-full text-left px-4 py-2 hover:bg-muted">
                    옵션 1
                  </button>
                  <button className="block w-full text-left px-4 py-2 hover:bg-muted">
                    옵션 2
                  </button>
                  <button className="block w-full text-left px-4 py-2 hover:bg-muted">
                    옵션 3
                  </button>
                </div>
              )}
            </div>

            <p className="text-sm text-muted-foreground">
              이 영역 외부를 클릭하면 드롭다운이 자동으로 닫힙니다.
            </p>

            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg text-sm">
              <p className="font-medium text-blue-900 dark:text-blue-200">
                💡 사용처:
              </p>
              <ul className="text-blue-800 dark:text-blue-300 text-xs space-y-1 mt-2">
                <li>• 드롭다운 메뉴 닫기</li>
                <li>• 모달 외부 클릭 시 닫기</li>
                <li>• 팝오버 자동 닫기</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
