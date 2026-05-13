---
description: 'React 함수형 컴포넌트를 자동으로 생성합니다 (TypeScript + Tailwind CSS)'
allowed-tools:
  [
    'Bash(mkdir:*)',
    'Bash(test:*)',
    'Write(*)',
  ]
---

# Claude 명령어: Add Component

React 함수형 컴포넌트를 TypeScript와 Tailwind CSS 템플릿으로 자동 생성합니다.

## 사용법

```
/add-component <컴포넌트명>
```

예:
```
/add-component Button
/add-component UserCard
/add-component Modal
```

## 실행 단계

1. 입력 검증: 컴포넌트 이름이 제공되었는지 확인
2. 폴더 생성: `src/components/` 폴더 확인 및 필요시 생성
3. 파일 생성: `src/components/<컴포넌트명>.tsx` 생성
4. 템플릿 적용: TypeScript + Tailwind CSS 기본 템플릿 작성

## 생성될 컴포넌트 템플릿

파일명: `src/components/{컴포넌트명}.tsx`

```typescript
interface {컴포넌트명}Props {
  // Props 타입을 여기에 정의하세요
  children?: React.ReactNode;
}

export function {컴포넌트명}({ children }: {컴포넌트명}Props) {
  return (
    <div className="flex items-center justify-center p-4">
      {children && <span>{children}</span>}
    </div>
  );
}
```

## 기술 스택

- **TypeScript**: 타입 안정성
- **React**: 함수형 컴포넌트 (FC 패턴)
- **Tailwind CSS**: 유틸리티 기반 스타일
- **Props 인터페이스**: 확장성 있는 구조

## 참고사항

- 컴포넌트 이름은 PascalCase로 자동 변환됩니다
- 기존 파일이 있으면 생성하지 않습니다
- 자동으로 src/components/ 폴더를 생성합니다
