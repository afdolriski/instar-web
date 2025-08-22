import Hero from "@/components/solution/hero"
import CompanyTable from "@/components/ranking/table"
import VerificationBanner from "@/components/ranking/2025/verification-banner"
import SubHeader from "@/components/solution/subheader"
import Solutions from "@/components/solution/solutions"
import TempoPromo from "@/components/solution/tempo-promo"
import ContactForm from "@/components/contact-form"
import { Separator } from "@/components/ui/separator"

export default function Page() {
  return (
    <div className="flex flex-1 flex-col">
      <Hero />
      <div className="py-4 pb-16 space-y-12">
        <SubHeader />
        <Separator />
        <Solutions />
        <TempoPromo />
        <Separator />
        <ContactForm />
      </div>
      {/* <CompanyTable />
      <VerificationBanner />
      <Methodology /> */}
    </div>
  )
}
