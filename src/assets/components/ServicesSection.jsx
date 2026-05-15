export default function ServicesSection() {
  const services = [
    {
      title: 'Web Development',
      icon: '💻',
      description: 'Responsive and modern websites for startups and brands.',
    },
    {
      title: 'Branding & Design',
      icon: '🎨',
      description: 'Creative branding solutions to improve your identity.',
    },
    {
      title: 'Digital Marketing',
      icon: '📈',
      description: 'Marketing strategies that help businesses grow faster.',
    },
  ];

  return (
    <section id="services" className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-4">Our Services</h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            High-quality digital services designed for modern businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
            >
              <div className="text-5xl mb-5">{service.icon}</div>
              <h4 className="text-2xl font-bold mb-3">{service.title}</h4>
              <p className="text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
