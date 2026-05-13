'use client'

import { useEffect, useRef } from 'react'
import useLocalStorageState from 'use-local-storage-state'

// 사이드바 상태를 localStorage에 지속화
export function useSidebar() {
  const [isOpen, setIsOpen] = useLocalStorageState('sidebar-open', {
    defaultValue: true,
    defaultServerValue: false, // SSR 환경에서는 닫음으로 시작
  })

  // 마운트 후 브레이크포인트 확인해서 초기값 결정
  const initializedRef = useRef(false)

  useEffect(() => {
    if (initializedRef.current) return
    initializedRef.current = true

    // 모바일에서는 기본 닫힘
    const isMobile = window.matchMedia('(max-width: 768px)').matches
    if (isMobile) {
      setIsOpen(false)
    }
  }, [setIsOpen])

  const toggle = () => setIsOpen((prev) => !prev)
  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  return {
    isOpen,
    setIsOpen,
    toggle,
    open,
    close,
  }
}
