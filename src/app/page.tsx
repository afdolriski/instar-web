import { Separator } from "@/components/ui/separator"
import Hero from "@/components/home/hero"
import Methodology from "@/components/home/methodology"
import Newsroom from "@/components/home/newsroom"
import Section1 from "@/components/home/section1"
import Solution from "@/components/home/solution"
import Timeline from "@/components/home/timeline"

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <Hero />
      <Section1 />
      <Separator />
      <Methodology />
      <Separator />
      <Solution />
      <Separator />
      <Timeline />
      <Separator />
      <Newsroom />
    </div>
  )
}
