'use client'

import { useState, useEffect } from 'react'
import useLocalStorageState from 'use-local-storage-state'

// 사이드바 상태를 localStorage에 지속화
export function useSidebar() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useLocalStorageState('sidebar-open', {
    defaultValue: true,
    defaultServerValue: false, // SSR 환경에서는 닫음으로 시작
  })

  // 마운트 후 브레이크포인트 확인해서 초기값 결정
  useEffect(() => {
    setMounted(true)
    // 모바일에서는 기본 닫힘
    const isMobile = window.matchMedia('(max-width: 768px)').matches
    if (isMobile && isOpen) {
      setIsOpen(false)
    }
  }, [])

  const toggle = () => setIsOpen((prev) => !prev)
  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  return {
    isOpen: mounted ? isOpen : false,
    setIsOpen,
    toggle,
    open,
    close,
  }
}
