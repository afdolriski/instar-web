import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { JSX } from "react";

interface FaqItem {
  title: string;
  content?: JSX.Element;
}

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <Accordion
      type="single"
      className="w-full space-y-2 pb-8"
      collapsible={true}
      defaultValue={'0'}
    >
      {items.map((item, key) => (
        <AccordionItem value={key.toString()} key={key} className="border rounded-sm p-3 last:border">
          <AccordionTrigger className="cursor-pointer font-bold p-0 text-[16px]">{item.title}</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 mt-4 pb-0">
            <div className="font-secondary text-[14px]">
              {item.content}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
