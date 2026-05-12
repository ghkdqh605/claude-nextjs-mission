'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { CheckCircle, Zap, Image } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

export function SettingsOptimizationExample() {
  const [compressed, setCompressed] = useState(false)
  const [lazy, setLazy] = useState(false)
  const [cache, setCache] = useState(false)

  return (
    <div className="space-y-6">
      {/* 성능 최적화 체크리스트 */}
      <section>
        <h2 className="text-xl font-semibold mb-4">성능 최적화 체크리스트</h2>
        <Card>
          <CardContent className="pt-6 space-y-3">
            {[
              {
                id: 'images',
                title: '이미지 최적화',
                desc: 'Next.js Image 컴포넌트로 자동 최적화',
                enabled: compressed,
                toggle: setCompressed,
              },
              {
                id: 'lazy',
                title: '레이지 로딩',
                desc: '스크롤 시에만 컴포넌트 로드',
                enabled: lazy,
                toggle: setLazy,
              },
              {
                id: 'cache',
                title: '캐싱 전략',
                desc: 'localStorage와 HTTP 캐시 활용',
                enabled: cache,
                toggle: setCache,
              },
            ].map((item) => (
              <div key={item.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex-1">
                  <p className="font-medium text-sm">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
                <div className="flex items-center gap-3">
                  {item.enabled && <CheckCircle className="size-4 text-green-600" />}
                  <Switch checked={item.enabled} onCheckedChange={item.toggle} />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* 현재 최적화 상태 */}
        {(compressed || lazy || cache) && (
          <Alert className="mt-4 border-green-200 bg-green-50 dark:bg-green-950">
            <Zap className="h-4 w-4 text-green-600" />
            <AlertDescription>
              {[compressed && '이미지', lazy && '레이지 로딩', cache && '캐싱']
                .filter(Boolean)
                .join(', ')} 최적화가 활성화되었습니다.
            </AlertDescription>
          </Alert>
        )}
      </section>

      {/* 예제 1: 이미지 최적화 */}
      <section>
        <h2 className="text-xl font-semibold mb-4">이미지 최적화</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Next.js Image 컴포넌트</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-4 bg-muted rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Image className="size-5 text-blue-600" />
                <span className="font-medium text-sm">자동 최적화 기능</span>
              </div>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>✓ 자동 포맷 변환 (WebP, AVIF)</li>
                <li>✓ 반응형 이미지 크기 조정</li>
                <li>✓ 레이지 로딩</li>
                <li>✓ 플레이스홀더 표시</li>
              </ul>
            </div>

            <pre className="bg-muted p-4 rounded text-xs overflow-x-auto">
              {`import Image from 'next/image'

export function Profile() {
  return (
    <Image
      src="/profile.jpg"
      alt="프로필"
      width={200}
      height={200}
      priority // 중요한 이미지는 priority 사용
      placeholder="blur"
    />
  )
}`}
            </pre>
          </CardContent>
        </Card>
      </section>

      {/* 예제 2: 동적 import (레이지 로딩) */}
      <section>
        <h2 className="text-xl font-semibold mb-4">동적 Import (레이지 로딩)</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">코드 분할 및 지연 로딩</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-4 bg-muted rounded-lg space-y-2">
              <p className="text-sm font-medium">사용 사례</p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• 모달 컴포넌트</li>
                <li>• 드롭다운 메뉴</li>
                <li>• 타사 라이브러리 (차트, 에디터 등)</li>
              </ul>
            </div>

            <pre className="bg-muted p-4 rounded text-xs overflow-x-auto">
              {`import dynamic from 'next/dynamic'

// 동적 import로 필요할 때만 로드
const HeavyChart = dynamic(() => import('./HeavyChart'), {
  loading: () => <Skeleton />,
  ssr: false // SSR에서 제외
})

export function Dashboard() {
  return <HeavyChart />
}`}
            </pre>
          </CardContent>
        </Card>
      </section>

      {/* 예제 3: 캐싱 전략 */}
      <section>
        <h2 className="text-xl font-semibold mb-4">캐싱 전략</h2>
        <Card>
          <CardContent className="pt-6 space-y-3">
            {[
              {
                level: 'Browser Cache',
                desc: 'max-age, ETag를 활용한 캐싱',
                usage: '정적 자산 (이미지, CSS)',
              },
              {
                level: 'localStorage',
                desc: '사용자 선택, 설정값 저장',
                usage: 'use-local-storage-state 훅 사용',
              },
              {
                level: 'CDN Cache',
                desc: '글로벌 서버에서 캐싱',
                usage: '정적 페이지 배포',
              },
              {
                level: 'API Cache',
                desc: 'React Query, SWR로 자동 캐싱',
                usage: '데이터 페칭 최적화',
              },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex items-center gap-2">
                  <Badge className="text-xs">{i + 1}</Badge>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{item.level}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                    <p className="text-xs text-blue-600 mt-1">사용: {item.usage}</p>
                  </div>
                </div>
                {i < 3 && <Separator className="my-3" />}
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      {/* 예제 4: 번들 사이즈 최적화 */}
      <section>
        <h2 className="text-xl font-semibold mb-4">번들 사이즈 최적화</h2>
        <Card>
          <CardContent className="pt-6 space-y-3">
            <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg space-y-2">
              <p className="text-sm font-medium">최적화 팁</p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>✓ Tree-shaking (불필요한 코드 제거)</li>
                <li>✓ 라이브러리 크기 확인 (bundlephobia.com)</li>
                <li>✓ 동적 import로 코드 분할</li>
                <li>✓ usehooks-ts는 tree-shakable (필요한 것만 import)</li>
                <li>✓ next/image로 이미지 크기 최소화</li>
              </ul>
            </div>

            <pre className="bg-muted p-4 rounded text-xs overflow-x-auto">
              {`// ✓ 좋은 예: 필요한 것만 import
import { useCounter } from 'usehooks-ts'

// ✗ 나쁜 예: 전체 라이브러리 import
import * as usehooks from 'usehooks-ts'`}
            </pre>
          </CardContent>
        </Card>
      </section>

      {/* 예제 5: 성능 측정 */}
      <section>
        <h2 className="text-xl font-semibold mb-4">성능 측정</h2>
        <Card>
          <CardContent className="pt-6 space-y-3">
            <div className="p-4 bg-muted rounded-lg">
              <p className="font-medium text-sm mb-2">개발자 도구 활용</p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Chrome DevTools → Network: 번들 크기 확인</li>
                <li>• Chrome DevTools → Lighthouse: 성능 점수</li>
                <li>• Chrome DevTools → Performance: 렌더링 성능</li>
              </ul>
            </div>

            <Button variant="outline" className="w-full">
              Lighthouse 성능 검사 방법
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* 체크리스트 요약 */}
      <section>
        <h2 className="text-xl font-semibold mb-4">프로덕션 배포 체크리스트</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              {[
                'TypeScript 타입 검사 통과',
                'ESLint 린트 검사 통과',
                '모든 이미지 최적화',
                '필요 없는 의존성 제거',
                '환경 변수 설정 확인',
                '에러 처리 완료',
                'SEO 메타데이터 추가',
                '모바일 반응형 확인',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-2 hover:bg-muted rounded">
                  <input type="checkbox" id={`check-${i}`} />
                  <Label htmlFor={`check-${i}`} className="text-sm font-normal cursor-pointer flex-1">
                    {item}
                  </Label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
