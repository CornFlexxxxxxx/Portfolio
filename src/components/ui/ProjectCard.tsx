import { useState } from 'react';
import { type Project } from '../../data/projects';
import { FiGithub, FiExternalLink, FiArrowRight, FiPlay, FiX } from 'react-icons/fi';
import { HiOutlineChip, HiOutlineDatabase, HiOutlineWifi } from 'react-icons/hi';

interface ProjectCardProps {
    project: Project;
    index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
    const [showVideo, setShowVideo] = useState(false);

    const categoryIcons = {
        'AI/ML': HiOutlineChip,
        'Distributed Systems': HiOutlineWifi,
        'Data-Driven': HiOutlineDatabase,
    };

    const CategoryIcon = categoryIcons[project.category];

    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'AI/ML':
                return 'from-secondary-400 to-purple-400';
            case 'Distributed Systems':
                return 'from-accent-400 to-blue-400';
            case 'Data-Driven':
                return 'from-green-400 to-teal-400';
            default:
                return 'from-gray-400 to-gray-500';
        }
    };

    return (
        <>
            <div
                className="group relative bg-white dark:bg-primary-600/50 rounded-xl border border-gray-200 dark:border-primary-400/30 overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
                style={{
                    animationDelay: `${index * 100}ms`,
                }}
            >

                {/* Category indicator */}
                <div className={`h-1 bg-gradient-to-r ${getCategoryColor(project.category)}`}></div>

                <div className="p-6 flex flex-col flex-grow">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start gap-3">
                            <div className={`p-2 bg-gradient-to-br ${getCategoryColor(project.category)} rounded-lg text-white flex-shrink-0`}>
                                <CategoryIcon size={20} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-secondary-400 transition-colors">
                                    {project.title}
                                </h3>
                                <span className="text-xs text-gray-500 dark:text-gray-400">{project.category}</span>
                            </div>
                        </div>
                    </div>

                    {/* Content wrapper - this will grow to push actions to bottom */}
                    <div className="flex-grow">
                        {/* Description */}
                        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                            {project.description}
                        </p>

                        {/* Metrics */}
                        {project.metrics && (
                            <div className="grid grid-cols-3 gap-2 mb-4">
                                {project.metrics.slice(0, 3).map((metric) => (
                                    <div key={metric.label} className="text-center p-2 bg-gray-50 dark:bg-primary-700/50 rounded-lg">
                                        <div className="text-sm font-bold text-secondary-400">{metric.value}</div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400">{metric.label}</div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Tech stack */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.slice(0, 4).map((tech) => (
                                <span
                                    key={tech}
                                    className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-primary-700/50 text-gray-700 dark:text-gray-300 rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                            {project.tech.length > 4 && (
                                <span className="px-2 py-1 text-xs font-medium text-gray-500 dark:text-gray-400">
                                    +{project.tech.length - 4} more
                                </span>
                            )}
                        </div>

                        {/* Highlights */}
                        <div className="space-y-1 mb-4">
                            {project.highlights.slice(0, 2).map((highlight, idx) => (
                                <div key={idx} className="flex items-start gap-2">
                                    <FiArrowRight className="text-accent-400 mt-0.5 flex-shrink-0" size={12} />
                                    <span className="text-xs text-gray-600 dark:text-gray-400">{highlight}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Actions - Always at the bottom */}
                    <div className="flex items-center justify-between pt-4 mt-auto border-t border-gray-100 dark:border-primary-500/50">
                        <div className="flex gap-3">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-secondary-400 transition-colors"
                                >
                                    <FiGithub size={16} />
                                    <span>Code</span>
                                </a>
                            )}
                            {project.video && (
                                <button
                                    onClick={() => setShowVideo(true)}
                                    className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-accent-400 transition-colors"
                                >
                                    <FiPlay size={16} />
                                    <span>Watch Demo</span>
                                </button>
                            )}
                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-secondary-400 transition-colors"
                                >
                                    <FiExternalLink size={16} />
                                    <span>Live</span>
                                </a>
                            )}
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{project.date}</span>
                    </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary-400/0 to-accent-400/0 group-hover:from-secondary-400/10 group-hover:to-accent-400/10 transition-all duration-500 pointer-events-none"></div>
            </div>

            {/* Video Modal */}
            {showVideo && project.video && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
                    <div className="relative bg-white dark:bg-primary-600 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
                        {/* Close button */}
                        <button
                            onClick={() => setShowVideo(false)}
                            className="absolute top-4 right-4 z-10 p-2 bg-white/10 backdrop-blur-sm rounded-full text-gray-700 dark:text-gray-200 hover:bg-white/20 transition-colors"
                            aria-label="Close video"
                        >
                            <FiX size={24} />
                        </button>

                        {/* Video header */}
                        <div className="p-4 border-b border-gray-200 dark:border-primary-500">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                {project.title} - Demo
                            </h3>
                        </div>

                        {/* Video container */}
                        <div className="relative bg-black">
                            <video
                                className="w-full h-auto max-h-[calc(90vh-120px)]"
                                controls
                                autoPlay
                                onClick={(e) => e.stopPropagation()}
                            >
                                <source src={project.video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectCard;