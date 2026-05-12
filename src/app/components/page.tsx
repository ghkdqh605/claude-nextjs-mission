import { Metadata } from 'next'
import { AppShell } from '@/components/layout/app-shell'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import {
  AlertCircle,
  CheckCircle,
  Info,
  AlertTriangle,
} from 'lucide-react'
import { DialogDemo } from '@/components/showcase/dialog-demo'
import { AccordionDemo } from '@/components/showcase/accordion-demo'

export const metadata: Metadata = {
  title: '컴포넌트',
}

export default function ComponentsPage() {
  return (
    <AppShell>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">컴포넌트 쇼케이스</h1>
        <p className="text-muted-foreground mt-2">
          shadcn/ui와 커스텀 컴포넌트 라이브러리입니다.
        </p>
      </div>

      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="basic">기본</TabsTrigger>
          <TabsTrigger value="data">데이터</TabsTrigger>
          <TabsTrigger value="feedback">피드백</TabsTrigger>
        </TabsList>

        {/* 기본 탭 */}
        <TabsContent value="basic" className="space-y-6 mt-6">
          {/* 버튼 */}
          <section>
            <h2 className="text-lg font-semibold mb-3">버튼</h2>
            <Card>
              <CardContent className="flex flex-wrap gap-2 p-6">
                <Button variant="default">기본</Button>
                <Button variant="secondary">보조</Button>
                <Button variant="outline">외곽선</Button>
                <Button variant="ghost">고스트</Button>
                <Button variant="destructive">위험</Button>
                <Button variant="link">링크</Button>
              </CardContent>
            </Card>
          </section>

          {/* 사이즈 */}
          <section>
            <h2 className="text-lg font-semibold mb-3">버튼 사이즈</h2>
            <Card>
              <CardContent className="flex flex-wrap gap-2 p-6 items-center">
                <Button size="xs">XS</Button>
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
              </CardContent>
            </Card>
          </section>

          {/* 배지 */}
          <section>
            <h2 className="text-lg font-semibold mb-3">배지</h2>
            <Card>
              <CardContent className="flex flex-wrap gap-2 p-6">
                <Badge>기본</Badge>
                <Badge variant="secondary">보조</Badge>
                <Badge variant="outline">외곽선</Badge>
                <Badge variant="destructive">위험</Badge>
              </CardContent>
            </Card>
          </section>

          {/* 아바타 */}
          <section>
            <h2 className="text-lg font-semibold mb-3">아바타</h2>
            <Card>
              <CardContent className="flex flex-wrap gap-4 p-6">
                <Avatar>
                  <AvatarFallback>KH</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
              </CardContent>
            </Card>
          </section>

          {/* Separator */}
          <section>
            <h2 className="text-lg font-semibold mb-3">구분선</h2>
            <Card>
              <CardContent className="p-6 space-y-4">
                <div>수평 구분선:</div>
                <Separator />
                <div className="flex gap-4">
                  <div>수직 구분선:</div>
                  <Separator orientation="vertical" className="h-6" />
                  <div>여기</div>
                </div>
              </CardContent>
            </Card>
          </section>
        </TabsContent>

        {/* 데이터 탭 */}
        <TabsContent value="data" className="space-y-6 mt-6">
          {/* 프로그레스 */}
          <section>
            <h2 className="text-lg font-semibold mb-3">진행 상황</h2>
            <Card>
              <CardContent className="space-y-4 p-6">
                <div>
                  <p className="text-sm mb-2">25%</p>
                  <Progress value={25} />
                </div>
                <div>
                  <p className="text-sm mb-2">50%</p>
                  <Progress value={50} />
                </div>
                <div>
                  <p className="text-sm mb-2">100%</p>
                  <Progress value={100} />
                </div>
              </CardContent>
            </Card>
          </section>

          {/* 스켈레톤 */}
          <section>
            <h2 className="text-lg font-semibold mb-3">스켈레톤 로딩</h2>
            <Card>
              <CardContent className="space-y-4 p-6">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-4/5" />
                </div>
              </CardContent>
            </Card>
          </section>
        </TabsContent>

        {/* 피드백 탭 */}
        <TabsContent value="feedback" className="space-y-6 mt-6">
          {/* 알림 */}
          <section>
            <h2 className="text-lg font-semibold mb-3">알림</h2>
            <div className="space-y-4">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>정보</AlertTitle>
                <AlertDescription>
                  이것은 정보성 알림입니다.
                </AlertDescription>
              </Alert>

              <Alert className="border-green-600 dark:border-green-400">
                <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                <AlertTitle>성공</AlertTitle>
                <AlertDescription>
                  작업이 성공적으로 완료되었습니다.
                </AlertDescription>
              </Alert>

              <Alert className="border-yellow-600 dark:border-yellow-400">
                <AlertTriangle className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                <AlertTitle>경고</AlertTitle>
                <AlertDescription>
                  주의가 필요합니다.
                </AlertDescription>
              </Alert>

              <Alert className="border-red-600 dark:border-red-400">
                <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                <AlertTitle>오류</AlertTitle>
                <AlertDescription>
                  문제가 발생했습니다.
                </AlertDescription>
              </Alert>
            </div>
          </section>

          {/* 다이얼로그 */}
          <section>
            <h2 className="text-lg font-semibold mb-3">다이얼로그</h2>
            <Card>
              <CardContent className="p-6">
                <DialogDemo />
              </CardContent>
            </Card>
          </section>

          {/* 아코디언 */}
          <section>
            <h2 className="text-lg font-semibold mb-3">아코디언</h2>
            <Card>
              <CardContent className="p-6">
                <AccordionDemo />
              </CardContent>
            </Card>
          </section>
        </TabsContent>
      </Tabs>
    </AppShell>
  )
}
