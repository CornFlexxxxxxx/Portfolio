function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 flex items-center justify-center">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white">
          Gabriel Monteillard
        </h1>
        <p className="text-xl md:text-2xl text-gray-200">
          <span className="gradient-text font-semibold">AI Engineer</span> • Full-Stack Developer
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="btn-primary">
            View Projects
          </button>
          <button className="btn-outline">
            Contact Me
          </button>
        </div>
        <div className="flex gap-3 justify-center flex-wrap pt-4">
          <span className="tech-badge">PyTorch</span>
          <span className="tech-badge">React</span>
          <span className="tech-badge">TypeScript</span>
          <span className="tech-badge">Kubernetes</span>
        </div>
      </div>
    </div>
  )
}

export default App