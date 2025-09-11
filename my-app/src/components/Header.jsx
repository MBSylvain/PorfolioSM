export default function Header() {
  return (
    <header className="bg-gradient-to-r from-teal-700 to-teal-900 text-gray-100 py-6 shadow-lg sticky top-0 z-50">

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="font-bold text-gray-600 text-2xl hover:text-teal-200 transition-colors duration-300">Sylvain MBEUMOU</a>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-teal-600 transition-colors duration-300">À propos</a>
            <a href="#projects" className="text-gray-600 hover:text-teal-200 transition-colors duration-300">Projets</a>
            <a href="#services" className="text-gray-600 hover:text-teal-200 transition-colors duration-300">Services</a>
            <a href="#contact" className="text-gray-600 hover:text-teal-200 transition-colors duration-300">Contact</a>
          </nav>
          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
