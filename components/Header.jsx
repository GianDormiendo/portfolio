'use client';

export default function Header() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-900">Portfolio</div>
        <ul className="flex gap-8">
          <li>
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-gray-900 transition"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Skills
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
