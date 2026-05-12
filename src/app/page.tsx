import { Metadata } from 'next'
import { AppShell } from '@/components/layout/app-shell'
import { StatsCard } from '@/components/dashboard/stats-card'
import { ActivityFeed } from '@/components/dashboard/activity-feed'
import { RecentTable } from '@/components/dashboard/recent-table'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  Users,
  Layers,
  CheckCircle,
  TrendingUp,
  ArrowRight,
} from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '대시보드',
}

export default function Dashboard() {
  return (
    <AppShell>
      {/* 페이지 헤더 */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">대시보드</h1>
        <p className="text-muted-foreground mt-2">
          프로젝트 현황을 한눈에 확인하세요.
        </p>
      </div>

      {/* 통계 카드 그리드 */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatsCard
          title="총 방문자"
          value="12,543"
          change={12.5}
          changeLabel="지난 달 대비"
          icon={<Users className="size-5" />}
        />
        <StatsCard
          title="활성 프로젝트"
          value="24"
          change={-3.2}
          changeLabel="지난 달 대비"
          icon={<Layers className="size-5" />}
        />
        <StatsCard
          title="완료율"
          value="78%"
          change={5.1}
          changeLabel="지난 달 대비"
          icon={<CheckCircle className="size-5" />}
        />
        <StatsCard
          title="수익"
          value="₩2.4M"
          change={18.7}
          changeLabel="지난 달 대비"
          icon={<TrendingUp className="size-5" />}
        />
      </section>

      {/* 활동 피드 + 최근 테이블 */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <ActivityFeed />
        <RecentTable />
      </section>

      {/* 빠른 탐색 섹션 */}
      <section>
        <h2 className="text-lg font-semibold mb-4">빠른 탐색</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold">모든 컴포넌트</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  shadcn/ui와 커스텀 컴포넌트 쇼케이스
                </p>
              </div>
              <Layers className="size-5 text-muted-foreground" />
            </div>
            <Button asChild variant="ghost" size="sm" className="mt-4 p-0">
              <Link href="/components" className="group">
                보러가기
                <ArrowRight className="size-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </Card>

          <Card className="p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold">폼 예제</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  입력 요소와 폼 레이아웃 패턴
                </p>
              </div>
              <CheckCircle className="size-5 text-muted-foreground" />
            </div>
            <Button asChild variant="ghost" size="sm" className="mt-4 p-0">
              <Link href="/forms" className="group">
                보러가기
                <ArrowRight className="size-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </Card>

          <Card className="p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold">훅 라이브러리</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  React 훅 라이브러리 실습
                </p>
              </div>
              <TrendingUp className="size-5 text-muted-foreground" />
            </div>
            <Button asChild variant="ghost" size="sm" className="mt-4 p-0">
              <Link href="/hooks" className="group">
                보러가기
                <ArrowRight className="size-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </Card>
        </div>
      </section>
    </AppShell>
  )
}
