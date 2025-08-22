import HighlightCard from "../highlight-card";

const challanges = [
  {
    title: 'Upaya ESG sulit divalidasi publik',
    description: 'Meski sudah berbagai upaya dilakukan, tapi belum ada standar obyektif untuk menunjukkan komitmen tersebut secara terbuka.',
    icon: 'icons/check.svg',
  },
  {
    title: 'Kurangnya eksposur di mata investor & masyarakat',
    description: 'Upaya keberlanjutan Anda bisa luput dari perhatian publik bila tidak dikomunikasikan dengan tepat.',
    icon: 'icons/exposure.svg',
  },{
    title: 'Tekanan transparansi semakin tinggi',
    description: 'Standar dan ekspektasi terhadap keterbukaan ESG terus meningkat, termasuk dari regulator dan mitra bisnis.',
    icon: 'icons/pressure.svg',
  },
];

export default function SubHeader() {
  return (
    <div className="p-4 md:px-32">
      <div className="mx-auto">
        <h1 className="text-3xl md:text-3xl font-bold mb-8 leading-tight">
          Tantangan Utama Perusahaan
        </h1>

        <p className="mb-8 font-medium">
          Banyak perusahaan telah berupaya menerapkan prinsip ESG—sosial, HAM, lingkungan, dan antikorupsi. Namun, mereka menghadapi tantangan besar untuk mendapatkan pengakuan yang kredibel dan menunjukkan komitmen tersebut kepada publik, regulator, dan investor.
        </p>
      </div>

      <div className="space-y-8 md:flex md:space-x-8">
        {challanges.map((item, key) => (
          <HighlightCard key={key} {...item} />
        ))}
      </div>
    </div>
  )
}
