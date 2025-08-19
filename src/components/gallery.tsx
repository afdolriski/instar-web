export default function Gallery() {
  return (
    <div className="min-h-screen bg-[#eeeeee] p-8">
      <div className="max-w-6xl mx-auto">
        {/* Gallery Header */}
        <h1 className="text-[#404040] text-3xl font-semibold mb-8">Gallery</h1>

        {/* Gallery Grid */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          {/* First image - actual photo */}
          <div className="aspect-[4/3] bg-white rounded-lg overflow-hidden shadow-sm">
            <img
              src="/blue-conference-stage.png"
              alt="Conference stage with blue branding"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Placeholder images */}
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="aspect-[4/3] bg-white rounded-lg overflow-hidden shadow-sm">
              <img src="/placeholder-image.png" alt="Placeholder image" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center">
          <button className="bg-[#194793] text-white px-12 py-3 rounded-md font-medium hover:bg-[#194793]/90 transition-colors">
            Load More
          </button>
        </div>
      </div>
    </div>
  )
}
