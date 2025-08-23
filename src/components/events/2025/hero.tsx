export default function Hero() {
  return (
    <section className="relative p-4 md:py-16 md:px-32 bg-[url(/images/instar-event.webp)] bg-cover bg-no-repeat bg-tertiary-800 bg-blend-screen md:bg-center">
      <div className="absolute inset-0 bg-tertiary-800/80"></div>
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative mx-auto">
        <div className="grid items-center md:max-w-[70%]">
          <div className="space-y-4 py-6 md:space-y-8">
            <div className="space-y-1">
              <div className="text-lg lg:text-3xl font-bold leading-tight text-white">INSTAR 2025</div>
              <h1 className="text-2xl lg:text-5xl font-extrabold leading-tight text-white">
                Menghadirkan Agenda Bisnis yang Mendorong Perubahan Nyata
              </h1>
            </div>
            <p className="text-base lg:text-medium text-white">
              Rangkaian acara INSTAR 2025 menghadirkan forum strategis bagi para pemimpin bisnis dan pemangku kepentingan untuk membahas praktik integritas, keberlanjutan, serta transparansi korporasi di Indonesia.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
