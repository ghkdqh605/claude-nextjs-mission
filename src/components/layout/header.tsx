'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ThemeToggle } from '@/components/theme/theme-toggle'
import { Menu, X, Layers } from 'lucide-react'
import { NAV_ITEMS } from '@/lib/constants'

interface HeaderProps {
  onSidebarToggle: () => void
  isSidebarOpen: boolean
}

export function Header({ onSidebarToggle, isSidebarOpen }: HeaderProps) {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="flex h-14 items-center gap-4 px-4 sm:px-6">
        {/* 햄버거 메뉴 */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onSidebarToggle}
          className="md:hidden"
        >
          {isSidebarOpen ? (
            <X className="size-5" />
          ) : (
            <Menu className="size-5" />
          )}
        </Button>

        {/* 로고 */}
        <Link href="/" className="flex items-center gap-2">
          <Layers className="size-5" />
          <span className="font-semibold hidden sm:inline">StarterKit</span>
        </Link>

        {/* 데스크탑 네비게이션 */}
        <nav className="hidden md:flex items-center gap-1 ml-4">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                variant={pathname === item.href ? 'default' : 'ghost'}
                size="sm"
              >
                {item.label}
              </Button>
            </Link>
          ))}
        </nav>

        {/* 우측 액션 */}
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <Separator orientation="vertical" className="h-6" />
          <Link href="/login">
            <Button variant="outline" size="sm">
              로그인
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
