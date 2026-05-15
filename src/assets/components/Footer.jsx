export default function Footer() {
  return (
    <footer className="border-t border-slate-100 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <h4 className="text-xl font-bold">Revolution Media</h4>

        <div className="flex gap-6 text-slate-600 text-sm">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>

        <p className="text-sm text-slate-500">
          © 2026 Revolution Media. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
