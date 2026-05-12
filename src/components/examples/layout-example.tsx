import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export function LayoutExample() {
  return (
    <div className="space-y-6">
      {/* 예제 1: 그리드 레이아웃 */}
      <section>
        <h2 className="text-xl font-semibold mb-4">반응형 그리드 레이아웃</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center text-white font-semibold"
                >
                  칼럼 {i}
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              • 모바일: 1개 칼럼 | 태블릿: 2개 칼럼 | 데스크탑: 3개 칼럼
            </p>
          </CardContent>
        </Card>
      </section>

      {/* 예제 2: 플렉스 레이아웃 */}
      <section>
        <h2 className="text-xl font-semibold mb-4">플렉스 레이아웃</h2>
        <Card>
          <CardContent className="pt-6 space-y-4">
            {/* 상단 네비게이션 */}
            <div className="flex items-center justify-between gap-4 p-4 bg-muted rounded-lg">
              <div className="font-semibold">로고</div>
              <div className="flex gap-2">
                <div className="px-3 py-1 text-sm">메뉴1</div>
                <div className="px-3 py-1 text-sm">메뉴2</div>
              </div>
              <div className="text-sm text-muted-foreground">로그인</div>
            </div>

            {/* 두 개의 칼럼 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2 h-40 bg-muted rounded-lg p-4">
                <p className="text-sm font-medium">메인 콘텐츠 (2/3)</p>
              </div>
              <div className="h-40 bg-muted rounded-lg p-4">
                <p className="text-sm font-medium">사이드바 (1/3)</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 예제 3: 카드 그리드 */}
      <section>
        <h2 className="text-xl font-semibold mb-4">카드 그리드 레이아웃</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {['기본 유형', '고급 유형', '커스텀 유형'].map((type, i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-base">{type}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  효율적인 정보 표현
                </p>
                <div className="flex gap-2 mt-3">
                  <Badge>{i + 1}번</Badge>
                  <Badge variant="outline">레이아웃</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 예제 4: 세로 스택 */}
      <section>
        <h2 className="text-xl font-semibold mb-4">세로 스택 레이아웃</h2>
        <Card>
          <CardContent className="pt-6 space-y-3">
            {['항목 1', '항목 2', '항목 3', '항목 4'].map((item, i) => (
              <div key={i}>
                <div className="p-3 bg-muted rounded-lg text-sm">{item}</div>
                {i < 3 && <Separator className="my-3" />}
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      {/* 코드 예제 */}
      <section>
        <h2 className="text-xl font-semibold mb-4">레이아웃 코드 예제</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">반응형 그리드</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded text-xs overflow-x-auto">
              {`{/* 모바일: 1칼럼, 태블릿: 2칼럼, 데스크톱: 3칼럼 */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  {items.map((item) => (
    <Card key={item.id}>
      <CardContent>{item.name}</CardContent>
    </Card>
  ))}
</div>`}
            </pre>
          </CardContent>
        </Card>
      </section>

      {/* 레이아웃 패턴 정리 */}
      <section>
        <h2 className="text-xl font-semibold mb-4">주요 레이아웃 패턴</h2>
        <Card>
          <CardContent className="pt-6 space-y-3">
            <div className="flex items-start gap-3">
              <Badge className="mt-1">1</Badge>
              <div>
                <p className="font-medium text-sm">그리드 레이아웃</p>
                <p className="text-xs text-muted-foreground">
                  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                </p>
              </div>
            </div>
            <Separator />
            <div className="flex items-start gap-3">
              <Badge className="mt-1">2</Badge>
              <div>
                <p className="font-medium text-sm">플렉스 레이아웃</p>
                <p className="text-xs text-muted-foreground">
                  flex justify-between items-center
                </p>
              </div>
            </div>
            <Separator />
            <div className="flex items-start gap-3">
              <Badge className="mt-1">3</Badge>
              <div>
                <p className="font-medium text-sm">스택 레이아웃</p>
                <p className="text-xs text-muted-foreground">
                  space-y-4 (세로) 또는 space-x-4 (가로)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
