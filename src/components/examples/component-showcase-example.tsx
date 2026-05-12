import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { CheckCircle, AlertCircle, Info } from 'lucide-react'

export function ComponentShowcaseExample() {
  return (
    <div className="space-y-6">
      {/* 실습 1: 카드 컴포넌트 */}
      <section>
        <h2 className="text-xl font-semibold mb-4">카드 컴포넌트 활용</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-base">프로젝트 카드</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-muted-foreground">
                shadcn/ui 카드로 콘텐츠를 구성합니다.
              </p>
              <div className="flex gap-2">
                <Badge>활성</Badge>
                <Badge variant="secondary">타입</Badge>
              </div>
              <Button size="sm" className="w-full mt-2">
                자세히 보기
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-base">상품 카드</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-muted-foreground">
                이미지와 설명을 포함한 카드 구성입니다.
              </p>
              <div className="text-2xl font-bold">₩49,000</div>
              <Button size="sm" variant="outline" className="w-full">
                장바구니
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-base">사용자 카드</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full" />
              <p className="font-medium text-sm">김철수</p>
              <p className="text-xs text-muted-foreground">
                seoul@example.com
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 실습 2: 배지와 상태 표현 */}
      <section>
        <h2 className="text-xl font-semibold mb-4">배지로 상태 표현</h2>
        <Card>
          <CardContent className="pt-6 space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Badge>기본</Badge>
                <span className="text-sm text-muted-foreground">
                  상태, 카테고리
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">보조</Badge>
                <span className="text-sm text-muted-foreground">
                  진행중, 대기중
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="destructive">위험</Badge>
                <span className="text-sm text-muted-foreground">
                  완료, 취소
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">외곽선</Badge>
                <span className="text-sm text-muted-foreground">
                  중립적, 선택사항
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 실습 3: 알림 컴포넌트 */}
      <section>
        <h2 className="text-xl font-semibold mb-4">알림 컴포넌트 패턴</h2>
        <div className="space-y-3">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>정보</AlertTitle>
            <AlertDescription>
              사용자에게 알려야 할 중요한 정보입니다.
            </AlertDescription>
          </Alert>

          <Alert className="border-green-200 bg-green-50 dark:bg-green-950 dark:border-green-800">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertTitle>성공</AlertTitle>
            <AlertDescription>
              작업이 성공적으로 완료되었습니다.
            </AlertDescription>
          </Alert>

          <Alert className="border-red-200 bg-red-50 dark:bg-red-950 dark:border-red-800">
            <AlertCircle className="h-4 w-4 text-red-600" />
            <AlertTitle>오류</AlertTitle>
            <AlertDescription>
              문제가 발생했습니다. 다시 시도해주세요.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* 코드 예제 */}
      <section>
        <h2 className="text-xl font-semibold mb-4">코드 예제</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">카드 컴포넌트 사용법</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded text-xs overflow-x-auto">
              {`import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MyCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>제목</CardTitle>
      </CardHeader>
      <CardContent>
        <p>카드 내용</p>
      </CardContent>
    </Card>
  )
}`}
            </pre>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
