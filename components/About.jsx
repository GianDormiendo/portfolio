export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-gray-900">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 text-lg mb-4">
              I'm a passionate web developer with 5+ years of experience in creating beautiful and functional web applications.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              My journey in tech started with a curiosity about how things work. Today, I specialize in building responsive, user-friendly applications using modern technologies.
            </p>
            <p className="text-gray-700 text-lg">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the community.
            </p>
          </div>
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Profile Image Placeholder</p>
          </div>
        </div>
      </div>
    </section>
  );
}
