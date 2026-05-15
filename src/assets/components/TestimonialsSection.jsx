export default function TestimonialsSection() {
  const testimonials = [
    'Amazing work and professional communication.',
    'Our business grew after working with Revolution Media.',
    'Creative team with excellent design skills.',
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-4">Client Testimonials</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((review, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
            >
              <p className="text-slate-600 leading-relaxed">“{review}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
