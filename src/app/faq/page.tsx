import Hero from "@/components/faq/hero"
import { FaqList } from "@/components/ui/faq-list"
import { faqItems } from "@/data/faq"
import { cn, pageWrapper } from "@/lib/utils"

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <Hero />
      <div className={cn(pageWrapper(), "pt-0")}>
        <div className="space-y-8 xl:space-y-16">
          <div className="space-y-10 xl:px-64">
            <FaqList items={faqItems} />
          </div>
        </div>
      </div>
    </div>
  )
}
