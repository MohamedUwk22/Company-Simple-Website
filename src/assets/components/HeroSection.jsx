export default function HeroSection() {
  return (
    <section
      id="home"
      className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center"
    >
      <div className="space-y-8">
        <span className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
          Creative Startup Agency
        </span>

        <h2 className="text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
          Helping Brands Grow Through Creative Digital Solutions
        </h2>

        <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
          Revolution Media builds modern websites, impactful brands, and
          marketing strategies designed to help businesses grow faster.
        </p>

        <div className="flex gap-4 flex-wrap">
          <button className="bg-black text-white px-6 py-3 rounded-2xl font-semibold hover:bg-gray-800">
            Start Your Project
          </button>

          <button className="border border-slate-300 px-6 py-3 rounded-2xl font-semibold hover:bg-slate-200">
            Learn More
          </button>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-[2rem] h-[450px]  flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
        Revolution Media
      </div>
    </section>
  );
}
