'use client'

import { useSidebar } from '@/hooks/use-sidebar'
import { Header } from './header'
import { Sidebar } from './sidebar'
import { Footer } from './footer'
import { cn } from '@/lib/utils'

interface AppShellProps {
  children: React.ReactNode
}

export function AppShell({ children }: AppShellProps) {
  const { isOpen, toggle, close } = useSidebar()

  return (
    <div className="min-h-full flex flex-col">
      <Header onSidebarToggle={toggle} isSidebarOpen={isOpen} />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={isOpen} onClose={close} />

        <main
          className={cn(
            'flex-1 overflow-auto transition-all duration-200',
            isOpen ? 'md:ml-60' : 'md:ml-0'
          )}
        >
          <div className="container mx-auto px-4 py-6 max-w-6xl">
            {children}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}
