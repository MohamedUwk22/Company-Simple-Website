import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-100">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">
          Revolution Media
        </h1>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <li><a className="hover:text-slate-900 " href="#home">
            Home
          </a></li>
          <li><a className="hover:text-slate-900" href="#services">
            Services
          </a></li>
          <li><a className="hover:text-slate-900" href="#portfolio">
            Portfolio
          </a></li>
          <li><a className="hover:text-slate-900" href="#pricing">
            Pricing
          </a></li>
          <li><a className="hover:text-slate-900" href="#contact">
            Contact
          </a></li>
        </ul>

        <div className="flex items-center gap-3">
         <Link to="/login"className="text-sm font-semibold text-slate-700 hover:text-slate-900">
              Login
            </Link>

          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-lg">
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
}
