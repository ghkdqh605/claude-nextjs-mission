import { Metadata } from 'next'
import { AppShell } from '@/components/layout/app-shell'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ComponentShowcaseExample } from '@/components/examples/component-showcase-example'
import { FormExample } from '@/components/examples/form-example'
import { LayoutExample } from '@/components/examples/layout-example'
import { UseHooksExample } from '@/components/examples/usehooks-example'
import { DataFetchingExample } from '@/components/examples/data-fetching-example'
import { SettingsOptimizationExample } from '@/components/examples/settings-optimization-example'

export const metadata: Metadata = {
  title: '예제',
}

export default function ExamplesPage() {
  return (
    <AppShell>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">예제 모음</h1>
        <p className="text-muted-foreground mt-2">
          실제 사용 사례를 통해 배우는 개발 예제들입니다.
        </p>
      </div>

      <Tabs defaultValue="components" className="w-full">
        <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
          <TabsTrigger value="components">컴포넌트</TabsTrigger>
          <TabsTrigger value="forms">폼</TabsTrigger>
          <TabsTrigger value="layouts">레이아웃</TabsTrigger>
          <TabsTrigger value="hooks">훅</TabsTrigger>
          <TabsTrigger value="data">데이터</TabsTrigger>
          <TabsTrigger value="settings">설정</TabsTrigger>
        </TabsList>

        <TabsContent value="components" className="mt-6">
          <ComponentShowcaseExample />
        </TabsContent>

        <TabsContent value="forms" className="mt-6">
          <FormExample />
        </TabsContent>

        <TabsContent value="layouts" className="mt-6">
          <LayoutExample />
        </TabsContent>

        <TabsContent value="hooks" className="mt-6">
          <UseHooksExample />
        </TabsContent>

        <TabsContent value="data" className="mt-6">
          <DataFetchingExample />
        </TabsContent>

        <TabsContent value="settings" className="mt-6">
          <SettingsOptimizationExample />
        </TabsContent>
      </Tabs>
    </AppShell>
  )
}
