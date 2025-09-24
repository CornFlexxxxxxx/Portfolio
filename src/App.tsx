import Header from './components/layout/Header';
import Section from './components/layout/Section';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-primary-500">
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Projects Section - Placeholder */}
      <Section id="projects">
        <h2 className="text-4xl font-display font-bold text-center mb-12 text-gray-900 dark:text-white">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="card p-6 hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                Project {i}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Project details coming soon...
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Experience Section - Placeholder */}
      <Section id="experience" className="bg-gray-50 dark:bg-primary-600">
        <h2 className="text-4xl font-display font-bold text-center mb-12 text-gray-900 dark:text-white">
          Experience
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="card p-8">
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Experience timeline coming soon...
            </p>
          </div>
        </div>
      </Section>

      {/* Skills Section - Placeholder */}
      <Section id="skills">
        <h2 className="text-4xl font-display font-bold text-center mb-12 text-gray-900 dark:text-white">
          Technical Skills
        </h2>
        <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
          {['Python', 'PyTorch', 'React', 'TypeScript', 'Kubernetes', 'Docker', 'MongoDB', 'NLP', 'Computer Vision'].map((skill) => (
            <span key={skill} className="tech-badge">
              {skill}
            </span>
          ))}
        </div>
      </Section>

      {/* Contact Section - Placeholder */}
      <Section id="contact" className="bg-gray-50 dark:bg-primary-600">
        <h2 className="text-4xl font-display font-bold text-center mb-12 text-gray-900 dark:text-white">
          Let's Connect
        </h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            I'm actively seeking AI/ML opportunities in the San Francisco Bay Area starting February 2026.
            Let's discuss how I can contribute to your team!
          </p>
          <a href="mailto:gabriel.monteillard@gmail.com" className="btn-primary">
            Send Email
          </a>
        </div>
      </Section>

      <Footer />
    </div>
  );
}

export default App;