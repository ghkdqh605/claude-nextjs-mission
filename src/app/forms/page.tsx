import { Metadata } from 'next'
import { AppShell } from '@/components/layout/app-shell'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BasicInputsForm } from '@/components/forms/basic-inputs-form'
import { SelectControlsForm } from '@/components/forms/select-controls-form'
import { LayoutExamplesForm } from '@/components/forms/layout-examples-form'

export const metadata: Metadata = {
  title: '폼 예제',
}

export default function FormsPage() {
  return (
    <AppShell>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">폼 예제</h1>
        <p className="text-muted-foreground mt-2">
          다양한 폼 컨트롤과 레이아웃 패턴 예시입니다.
        </p>
      </div>

      <Tabs defaultValue="inputs" className="w-full">
        <TabsList>
          <TabsTrigger value="inputs">기본 입력</TabsTrigger>
          <TabsTrigger value="controls">선택 요소</TabsTrigger>
          <TabsTrigger value="layout">폼 레이아웃</TabsTrigger>
        </TabsList>

        <TabsContent value="inputs" className="mt-6">
          <BasicInputsForm />
        </TabsContent>

        <TabsContent value="controls" className="mt-6">
          <SelectControlsForm />
        </TabsContent>

        <TabsContent value="layout" className="mt-6">
          <LayoutExamplesForm />
        </TabsContent>
      </Tabs>
    </AppShell>
  )
}
