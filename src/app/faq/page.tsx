import Hero from "@/components/faq/hero"
import { FaqList } from "@/components/ui/faq-list"
import { faqItems } from "@/data/faq"

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <Hero />
      <div className="p-4 md:px-32">
        <FaqList items={faqItems} />
      </div>
    </div>
  )
}
