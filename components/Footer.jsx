export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <p className="mb-2">© {currentYear} Your Name. All rights reserved.</p>
          <p className="text-gray-400">
            Built with Next.js, React, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
