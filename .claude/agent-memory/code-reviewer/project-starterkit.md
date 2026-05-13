---
name: project-starterkit
description: StarterKit 프로젝트 구성 및 주요 특징 — Next.js 16 + React 19 + TypeScript 5 + Tailwind CSS v4
metadata:
  type: project
---

StarterKit은 Next.js 16 + shadcn/ui + Tailwind CSS v4 기반 스타터킷 프로젝트이다.

**Why:** 대시보드, 폼 예제, 컴포넌트 쇼케이스, 훅 라이브러리 데모를 포함한 실무 패턴 참고용 스타터킷.

**How to apply:** 코드 리뷰 시 이 프로젝트가 교육/참고용 스타터킷임을 감안하여, 실무 프로덕션 수준의 엄격함보다는 패턴 정확성과 예제 코드 품질을 중심으로 평가한다.

주요 의존성: shadcn/ui, react-responsive, usehooks-ts, use-local-storage-state

반복 발견 이슈:
- useEffect 내 setMounted(true) 패턴이 4개 컴포넌트에서 동일하게 사용됨 (lint error: react-hooks/set-state-in-effect)
- sidebar.tsx의 lucide-react 동적 아이콘 조회에서 `as Record<string, any>` 캐스팅 사용 (any 금지 위배)
- 폼 컴포넌트들이 React Hook Form + Zod 없이 수동 상태 관리 (권고 기술스택 미사용)
- useEffect deps 누락: use-sidebar.ts에서 isOpen, setIsOpen 누락
