export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex items-center justify-center mt-16"
    >
      <div className="text-center px-4">
        <h1 className="text-6xl sm:text-7xl font-bold mb-4 animate-fade-in">
          Hi, I'm Your Name
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-8">
          Full-stack developer & creative problem solver
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition">
          Explore My Work
        </button>
      </div>
    </section>
  );
}
