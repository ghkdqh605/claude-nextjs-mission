export const SITE_CONFIG = {
  name: 'StarterKit',
  description: 'Next.js 16 + shadcn/ui + Tailwind CSS v4 모던 웹 스타터킷',
  version: '1.0.0',
} as const

export type NavItem = {
  label: string
  href: string
  iconName: string
  description?: string
}

export type NavGroup = {
  groupLabel: string
  items: NavItem[]
}

export const SIDEBAR_GROUPS: NavGroup[] = [
  {
    groupLabel: '메인',
    items: [
      {
        label: '대시보드',
        href: '/',
        iconName: 'LayoutDashboard',
        description: '프로젝트 현황 및 통계',
      },
      {
        label: '컴포넌트',
        href: '/components',
        iconName: 'Layers',
        description: '모든 UI 컴포넌트 쇼케이스',
      },
      {
        label: '폼 예제',
        href: '/forms',
        iconName: 'FileText',
        description: '다양한 폼 패턴과 입력',
      },
      {
        label: '훅 라이브러리',
        href: '/hooks',
        iconName: 'Zap',
        description: 'React 훅 라이브러리 예제',
      },
      {
        label: '전체 예제',
        href: '/examples',
        iconName: 'BookOpen',
        description: '실무 예제 모음',
      },
    ],
  },
  {
    groupLabel: '기타',
    items: [
      {
        label: '설정',
        href: '/settings',
        iconName: 'Settings',
        description: '애플리케이션 설정',
      },
      {
        label: '도움말',
        href: '/help',
        iconName: 'HelpCircle',
        description: '문서 및 가이드',
      },
    ],
  },
]

export const NAV_ITEMS: NavItem[] = [
  {
    label: '대시보드',
    href: '/',
    iconName: 'LayoutDashboard',
  },
  {
    label: '컴포넌트',
    href: '/components',
    iconName: 'Layers',
  },
  {
    label: '폼 예제',
    href: '/forms',
    iconName: 'FileText',
  },
  {
    label: '훅 라이브러리',
    href: '/hooks',
    iconName: 'Zap',
  },
  {
    label: '예제',
    href: '/examples',
    iconName: 'BookOpen',
  },
]
