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
      type="multiple"
      className="w-full"
      defaultValue={['0']}
    >
      {items.map((item, key) => (
        <AccordionItem value={key.toString()} key={key}>
          <AccordionTrigger className="cursor-pointer font-bold">{item.title}</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <div className="font-secondary">
              {item.content}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
