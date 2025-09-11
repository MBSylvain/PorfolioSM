
export default function Header() {
  return (
    <header className="sticky top-0 z-50 py-6 text-[#222222] shadow-lg bg-gradient-to-r from-[#F5F5F5] to-[#D6D3CD]">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-[#333333] transition-colors duration-300 hover:text-[#5A6D7A]">Sylvain MBEUMOU</a>
          <nav className="hidden space-x-8 md:flex">
            <a href="#about" className="text-[#333333] transition-colors duration-300 hover:text-[#5A6D7A]">À propos</a>
            <a href="#projects" className="text-[#333333] transition-colors duration-300 hover:text-[#5A6D7A]">Projets</a>
            <a href="#services" className="text-[#333333] transition-colors duration-300 hover:text-[#5A6D7A]">Services</a>
            <a href="#contact" className="text-[#333333] transition-colors duration-300 hover:text-[#5A6D7A]">Contact</a>
          </nav>
          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
