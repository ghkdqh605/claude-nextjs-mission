import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-border bg-background">
      <Separator />
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="text-sm text-muted-foreground">
          <p>© {currentYear} StarterKit. Next.js 16 + shadcn/ui</p>
        </div>
        <nav className="flex items-center gap-4">
          <Link
            href="/components"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            컴포넌트
          </Link>
          <Link
            href="/forms"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            폼 예제
          </Link>
          <Link
            href="/hooks"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            훅 라이브러리
          </Link>
        </nav>
      </div>
    </footer>
  )
}
