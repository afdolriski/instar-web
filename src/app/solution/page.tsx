import Hero from "@/components/solution/hero"
import CompanyTable from "@/components/ranking/table"
import Methodology from "@/components/ranking/methodology"
import VerificationBanner from "@/components/ranking/2025/verification-banner"
import SubHeader from "@/components/solution/subheader"
import Solutions from "@/components/solution/solutions"
import TempoPromo from "@/components/solution/tempo-promo"
import ContactForm from "@/components/contact-form"

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <Hero />
      <SubHeader />
      <Solutions />
      <TempoPromo />
      <ContactForm />
      {/* <CompanyTable />
      <VerificationBanner />
      <Methodology /> */}
    </div>
  )
}
