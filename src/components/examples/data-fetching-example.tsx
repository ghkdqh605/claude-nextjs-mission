'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { AlertCircle, CheckCircle, Loader } from 'lucide-react'

interface User {
  id: number
  name: string
  email: string
  role: string
}

export function DataFetchingExample() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [data, setData] = useState<User[] | null>(null)

  // 시뮬레이션 데이터 페칭
  const fetchData = async () => {
    setLoading(true)
    setError('')
    setData(null)

    try {
      // API 호출 시뮬레이션
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // 성공 시뮬레이션
      const mockData: User[] = [
        {
          id: 1,
          name: '김철수',
          email: 'kim@example.com',
          role: '관리자',
        },
        {
          id: 2,
          name: '이영희',
          email: 'lee@example.com',
          role: '사용자',
        },
        {
          id: 3,
          name: '박민준',
          email: 'park@example.com',
          role: '사용자',
        },
      ]

      setData(mockData)
    } catch (_err) {
      setError('데이터를 불러올 수 없습니다.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      {/* 예제 1: 기본 데이터 페칭 */}
      <section>
        <h2 className="text-xl font-semibold mb-4">데이터 페칭 패턴</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">사용자 목록 로드</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button onClick={fetchData} disabled={loading} className="w-full">
              {loading ? (
                <>
                  <Loader className="mr-2 size-4 animate-spin" />
                  로딩 중...
                </>
              ) : (
                '데이터 로드'
              )}
            </Button>

            {/* 로딩 상태 */}
            {loading && (
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="space-y-2">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                ))}
              </div>
            )}

            {/* 에러 상태 */}
            {error && !loading && (
              <Alert className="border-red-200 bg-red-50 dark:bg-red-950">
                <AlertCircle className="h-4 w-4 text-red-600" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {/* 성공 상태 */}
            {data && !loading && (
              <div className="space-y-2">
                <Alert className="border-green-200 bg-green-50 dark:bg-green-950">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <AlertDescription>
                    {data.length}개의 사용자를 불러왔습니다.
                  </AlertDescription>
                </Alert>

                <div className="space-y-2">
                  {data.map((user) => (
                    <div
                      key={user.id}
                      className="p-3 border rounded-lg flex items-center justify-between"
                    >
                      <div>
                        <p className="font-medium text-sm">{user.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {user.email}
                        </p>
                      </div>
                      <Badge variant="outline">{user.role}</Badge>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </section>

      {/* 예제 2: 페칭 상태 관리 */}
      <section>
        <h2 className="text-xl font-semibold mb-4">페칭 상태 플로우</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                <Badge>1</Badge>
                <div>
                  <p className="font-medium text-sm">Idle</p>
                  <p className="text-xs text-muted-foreground">
                    초기 상태
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                <Badge>2</Badge>
                <div>
                  <p className="font-medium text-sm">Loading</p>
                  <p className="text-xs text-muted-foreground">
                    데이터 요청 중 (skeleton 표시)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                <Badge>3</Badge>
                <div>
                  <p className="font-medium text-sm">Success</p>
                  <p className="text-xs text-muted-foreground">
                    데이터 로드 완료
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                <Badge>4</Badge>
                <div>
                  <p className="font-medium text-sm">Error</p>
                  <p className="text-xs text-muted-foreground">
                    에러 메시지 표시
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 코드 예제 */}
      <section>
        <h2 className="text-xl font-semibold mb-4">페칭 코드 패턴</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">useState로 상태 관리</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded text-xs overflow-x-auto">
              {`const [loading, setLoading] = useState(false)
const [error, setError] = useState('')
const [data, setData] = useState(null)

const fetchData = async () => {
  setLoading(true)
  try {
    const res = await fetch('/api/users')
    const result = await res.json()
    setData(result)
  } catch (err) {
    setError('에러 발생')
  } finally {
    setLoading(false)
  }
}`}
            </pre>
          </CardContent>
        </Card>
      </section>

      {/* 예제 3: 캐싱 전략 */}
      <section>
        <h2 className="text-xl font-semibold mb-4">데이터 캐싱 전략</h2>
        <Card>
          <CardContent className="pt-6 space-y-3">
            <div className="p-3 border rounded-lg">
              <p className="font-medium text-sm mb-1">1. useEffect 캐싱</p>
              <p className="text-xs text-muted-foreground">
                의존성 배열로 필요할 때만 페칭
              </p>
            </div>
            <div className="p-3 border rounded-lg">
              <p className="font-medium text-sm mb-1">2. localStorage 캐싱</p>
              <p className="text-xs text-muted-foreground">
                브라우저에 데이터 저장하여 재사용
              </p>
            </div>
            <div className="p-3 border rounded-lg">
              <p className="font-medium text-sm mb-1">3. React Query 사용</p>
              <p className="text-xs text-muted-foreground">
                자동 캐싱 및 동기화 (npm install @tanstack/react-query)
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
