'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>첫 번째 항목</AccordionTrigger>
        <AccordionContent>
          이것은 첫 번째 항목의 내용입니다. 클릭하면 펼쳐지고 다시 클릭하면 접혀집니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>두 번째 항목</AccordionTrigger>
        <AccordionContent>
          이것은 두 번째 항목의 내용입니다. 아코디언 컴포넌트는 탭처럼 동작합니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>세 번째 항목</AccordionTrigger>
        <AccordionContent>
          이것은 세 번째 항목의 내용입니다. 여러 항목을 동시에 열 수도 있습니다.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
