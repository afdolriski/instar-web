import Hero from "@/components/faq/hero"
import { FAQList } from "@/components/faq-list"

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <Hero />
      <div className="p-4 md:px-32">
        <FAQList />
      </div>
    </div>
  )
}
