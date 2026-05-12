'use client'

import { useState, useEffect } from 'react'
import { useBreakpoint } from '@/hooks/use-breakpoint'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function BreakpointDemo() {
  const [mounted, setMounted] = useState(false)
  const { isMobile, isTablet, isDesktop, isLargeDesktop, current } =
    useBreakpoint()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>react-responsive: 반응형 브레이크포인트</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-sm text-muted-foreground">
            창 크기를 조정해보세요. 현재 브레이크포인트가 실시간으로 업데이트됩니다.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="p-4 border rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">로딩 중...</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>react-responsive: 반응형 브레이크포인트</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-sm text-muted-foreground">
          창 크기를 조정해보세요. 현재 브레이크포인트가 실시간으로 업데이트됩니다.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 border rounded-lg">
            <p className="text-sm text-muted-foreground mb-2">모바일</p>
            <Badge variant={isMobile ? 'default' : 'outline'}>
              {isMobile ? '활성' : '비활성'}
            </Badge>
          </div>
          <div className="p-4 border rounded-lg">
            <p className="text-sm text-muted-foreground mb-2">태블릿</p>
            <Badge variant={isTablet ? 'default' : 'outline'}>
              {isTablet ? '활성' : '비활성'}
            </Badge>
          </div>
          <div className="p-4 border rounded-lg">
            <p className="text-sm text-muted-foreground mb-2">데스크탑</p>
            <Badge variant={isDesktop ? 'default' : 'outline'}>
              {isDesktop ? '활성' : '비활성'}
            </Badge>
          </div>
          <div className="p-4 border rounded-lg">
            <p className="text-sm text-muted-foreground mb-2">큰화면</p>
            <Badge variant={isLargeDesktop ? 'default' : 'outline'}>
              {isLargeDesktop ? '활성' : '비활성'}
            </Badge>
          </div>
        </div>

        <div className="p-4 bg-muted rounded-lg">
          <p className="text-sm font-medium mb-2">현재 브레이크포인트:</p>
          <p className="text-2xl font-bold text-primary">{current.toUpperCase()}</p>
          <p className="text-xs text-muted-foreground mt-2">
            {current === 'sm'
              ? 'sm: 640px 이하 (모바일)'
              : current === 'md'
                ? 'md: 768px ~ 1023px (태블릿)'
                : current === 'lg'
                  ? 'lg: 1024px ~ 1279px (데스크탑)'
                  : 'xl: 1280px 이상 (큰 화면)'}
          </p>
        </div>

        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg text-sm">
          <p className="font-medium text-blue-900 dark:text-blue-200 mb-2">
            💡 사용 사례
          </p>
          <ul className="text-blue-800 dark:text-blue-300 text-xs space-y-1">
            <li>• 반응형 레이아웃 제어</li>
            <li>• 모바일에서만 다른 컴포넌트 표시</li>
            <li>• 미디어 쿼리 기반 동작 조건</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
