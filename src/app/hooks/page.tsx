import { Metadata } from 'next'
import { AppShell } from '@/components/layout/app-shell'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BreakpointDemo } from '@/components/hooks/breakpoint-demo'
import { LocalStorageDemo } from '@/components/hooks/local-storage-demo'
import { UseHooksDemo } from '@/components/hooks/usehooks-demo'

export const metadata: Metadata = {
  title: '훅 라이브러리',
}

export default function HooksPage() {
  return (
    <AppShell>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">훅 라이브러리</h1>
        <p className="text-muted-foreground mt-2">
          React 훅 라이브러리들을 실습해봅시다.
        </p>
      </div>

      <Tabs defaultValue="responsive" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="responsive">react-responsive</TabsTrigger>
          <TabsTrigger value="storage">use-local-storage-state</TabsTrigger>
          <TabsTrigger value="usehooks">usehooks-ts</TabsTrigger>
        </TabsList>

        <TabsContent value="responsive" className="mt-6">
          <BreakpointDemo />
        </TabsContent>

        <TabsContent value="storage" className="mt-6">
          <LocalStorageDemo />
        </TabsContent>

        <TabsContent value="usehooks" className="mt-6">
          <UseHooksDemo />
        </TabsContent>
      </Tabs>
    </AppShell>
  )
}
