'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { SIDEBAR_GROUPS } from '@/lib/constants'
import * as Icons from 'lucide-react'
import type { LucideProps } from 'lucide-react'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

function getIcon(iconName: string): React.ReactNode {
  // lucide-react 아이콘 동적 가져오기
  const IconComponent = (Icons as Record<string, React.ComponentType<LucideProps> | unknown>)[iconName]

  if (!IconComponent || typeof IconComponent !== 'function') {
    return null
  }

  const Icon = IconComponent as React.ComponentType<LucideProps>
  return <Icon className="size-4" />
}

function SidebarItem({
  href,
  label,
  icon,
  isActive,
}: {
  href: string
  label: string
  icon: React.ReactNode
  isActive: boolean
}) {
  return (
    <Button
      variant={isActive ? 'default' : 'ghost'}
      size="sm"
      className="w-full justify-start gap-2"
      asChild
    >
      <Link href={href}>
        <span className="flex items-center">{icon}</span>
        <span className="truncate">{label}</span>
      </Link>
    </Button>
  )
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname()

  return (
    <>
      {/* 모바일 오버레이 */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={onClose}
        />
      )}

      {/* 사이드바 */}
      <aside
        className={cn(
          'fixed left-0 top-14 z-40 h-[calc(100vh-3.5rem)] w-60 border-r border-border bg-background',
          'transition-transform duration-200',
          isOpen ? 'translate-x-0' : '-translate-x-full',
          'md:translate-x-0'
        )}
      >
        <nav className="flex flex-col gap-2 p-3">
          {SIDEBAR_GROUPS.map((group) => (
            <div key={group.groupLabel}>
              <p className="text-xs font-medium text-muted-foreground px-2 py-2">
                {group.groupLabel}
              </p>
              <div className="flex flex-col gap-1">
                {group.items.map((item) => (
                  <SidebarItem
                    key={item.href}
                    href={item.href}
                    label={item.label}
                    icon={getIcon(item.iconName)}
                    isActive={pathname === item.href}
                  />
                ))}
              </div>
              <Separator className="my-2" />
            </div>
          ))}
        </nav>
      </aside>
    </>
  )
}
