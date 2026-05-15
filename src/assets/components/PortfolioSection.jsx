
export default function PortfolioSection() {
  const projects = ['Startup Website', 'Brand Identity', 'Marketing Campaign'];

  return (
    <section id="portfolio" className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-4">Recent Projects</h3>
          <p className="text-slate-600">
            Some of the creative work we delivered for our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100"
            >
              <div className="h-56 bg-gradient-to-r from-blue-600 to-purple-600"></div>

              <div className="p-6">
                <h4 className="text-2xl font-bold mb-3">{project}</h4>
                <p className="text-slate-600">
                  Modern and creative project tailored for business growth.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
