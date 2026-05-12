'use client'

import { useMediaQuery } from 'react-responsive'

// Tailwind 브레이크포인트 기준
// sm: 640px, md: 768px, lg: 1024px, xl: 1280px, 2xl: 1536px
export function useBreakpoint() {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 })
  const isDesktop = useMediaQuery({ minWidth: 1024 })
  const isLargeDesktop = useMediaQuery({ minWidth: 1280 })

  return {
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,
    // 현재 브레이크포인트 (가장 구체적인 것 반환)
    current: isLargeDesktop ? 'xl' : isDesktop ? 'lg' : isTablet ? 'md' : 'sm',
  }
}
