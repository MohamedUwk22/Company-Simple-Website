export default function AboutSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <h3 className="text-4xl font-bold mb-6">
          We Create Digital Experiences That Inspire Growth
        </h3>

        <p className="text-slate-600 text-lg leading-relaxed mb-5">
          Revolution Media is a startup agency helping brands succeed online.
        </p>

        <p className="text-slate-600 text-lg leading-relaxed">
          We combine creativity and technology to build powerful digital
          experiences.
        </p>
      </div>

      <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-[2rem] p-10 text-white shadow-2xl">
        <div className="space-y-8">
          <div>
            <h4 className="text-5xl font-bold">50+</h4>
            <p>Projects Completed</p>
          </div>

          <div>
            <h4 className="text-5xl font-bold">98%</h4>
            <p>Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}

