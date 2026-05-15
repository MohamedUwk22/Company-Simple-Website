
export default function PricingSection() {
  return (
    <section id="pricing" className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h3 className="text-4xl font-bold mb-4">Simple Pricing</h3>
        <p className="text-slate-600">
          Flexible plans for startups and growing businesses.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {['Basic', 'Pro', 'Enterprise'].map((plan, index) => (
          <div
            key={index}
            className="border border-slate-200 rounded-3xl p-8 text-center"
          >
            <h4 className="text-2xl font-bold mb-4">{plan}</h4>
            <p className="text-5xl font-bold mb-6">$99</p>

            <div className="space-y-3 text-slate-600 mb-8">
              <p>Responsive Design</p>
              <p>SEO Optimization</p>
              <p>Premium Support</p>
            </div>

            <button className="bg-black text-white px-6 py-3 rounded-2xl font-semibold w-full">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

