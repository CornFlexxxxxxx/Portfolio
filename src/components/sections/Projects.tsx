import { useState, useEffect } from 'react';
import { projects } from '../../data/projects';
import ProjectCard from '../ui/ProjectCard';
import { FiFilter, FiGrid, FiList } from 'react-icons/fi';

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [isVisible, setIsVisible] = useState(false);
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const section = document.getElementById('projects');
        if (section) {
            observer.observe(section);
        }

        return () => {
            if (section) {
                observer.unobserve(section);
            }
        };
    }, []);

    const categories = [
        { value: 'all', label: 'All Projects', count: projects.length },
        { value: 'AI/ML', label: 'AI/ML', count: projects.filter(p => p.category === 'AI/ML').length },
        { value: 'Distributed Systems', label: 'Distributed', count: projects.filter(p => p.category === 'Distributed Systems').length },
        { value: 'Full-Stack', label: 'Full-Stack', count: projects.filter(p => p.category === 'Full-Stack').length },
        { value: 'IoT', label: 'IoT', count: projects.filter(p => p.category === 'IoT').length },
    ];

    const filteredProjects = selectedCategory === 'all'
        ? projects
        : projects.filter(p => p.category === selectedCategory);

    // Sort to show featured projects first
    const sortedProjects = [...filteredProjects].sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return 0;
    });

    return (
        <section id="projects" className="py-20 md:py-32 bg-white dark:bg-primary-500 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-r from-secondary-400/5 to-accent-400/5 rounded-full blur-3xl -translate-y-1/2"></div>
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-l from-warm-400/5 to-secondary-400/5 rounded-full blur-3xl -translate-y-1/2"></div>

            <div className="section-container relative z-10">
                {/* Section header */}
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        From AI/ML innovations to distributed systems at scale
                    </p>
                </div>

                {/* Filter controls */}
                <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
                    <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
                        <FiFilter className="text-gray-500 flex-shrink-0" />
                        <div className="flex gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat.value}
                                    onClick={() => setSelectedCategory(cat.value)}
                                    className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all duration-300 ${selectedCategory === cat.value
                                            ? 'bg-secondary-400 text-white shadow-lg shadow-secondary-400/30'
                                            : 'bg-gray-100 dark:bg-primary-600 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-primary-700'
                                        }`}
                                >
                                    {cat.label}
                                    <span className="ml-2 px-1.5 py-0.5 bg-white/20 rounded text-xs">
                                        {cat.count}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* View mode toggle */}
                    <div className="flex items-center gap-2 bg-gray-100 dark:bg-primary-600 rounded-lg p-1">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`p-2 rounded transition-all ${viewMode === 'grid'
                                    ? 'bg-white dark:bg-primary-500 text-secondary-400 shadow-md'
                                    : 'text-gray-500 dark:text-gray-400'
                                }`}
                            aria-label="Grid view"
                        >
                            <FiGrid size={18} />
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`p-2 rounded transition-all ${viewMode === 'list'
                                    ? 'bg-white dark:bg-primary-500 text-secondary-400 shadow-md'
                                    : 'text-gray-500 dark:text-gray-400'
                                }`}
                            aria-label="List view"
                        >
                            <FiList size={18} />
                        </button>
                    </div>
                </div>

                {/* Projects grid/list */}
                <div className={`
          ${viewMode === 'grid'
                        ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                        : 'space-y-6 max-w-4xl mx-auto'
                    }
          ${isVisible ? 'animate-fade-up' : 'opacity-0'}
        `}>
                    {sortedProjects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                {/* Empty state */}
                {sortedProjects.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 dark:text-gray-400">
                            No projects found in this category.
                        </p>
                    </div>
                )}

                {/* Statistics */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-secondary-400 mb-2">5+</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Major Projects</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-accent-400 mb-2">15+</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-warm-400 mb-2">100K+</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Data Points</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Passion</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;