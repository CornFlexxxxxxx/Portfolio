import { type Project } from '../../data/projects';
import { FiGithub, FiExternalLink, FiStar, FiArrowRight } from 'react-icons/fi';
import { HiOutlineChip, HiOutlineDatabase, HiOutlineCode, HiOutlineWifi } from 'react-icons/hi';

interface ProjectCardProps {
    project: Project;
    index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
    const categoryIcons = {
        'AI/ML': HiOutlineChip,
        'Distributed Systems': HiOutlineDatabase,
        'Full-Stack': HiOutlineCode,
        'IoT': HiOutlineWifi,
    };

    const CategoryIcon = categoryIcons[project.category];

    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'AI/ML':
                return 'from-secondary-400 to-purple-400';
            case 'Distributed Systems':
                return 'from-accent-400 to-blue-400';
            case 'Full-Stack':
                return 'from-warm-400 to-orange-400';
            case 'IoT':
                return 'from-green-400 to-teal-400';
            default:
                return 'from-gray-400 to-gray-500';
        }
    };

    return (
        <div
            className="group relative bg-white dark:bg-primary-600/50 rounded-xl border border-gray-200 dark:border-primary-400/30 overflow-hidden hover:shadow-2xl transition-all duration-500"
            style={{
                animationDelay: `${index * 100}ms`,
            }}
        >

            {/* Category indicator */}
            <div className={`h-1 bg-gradient-to-r ${getCategoryColor(project.category)}`}></div>

            <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className={`p-2 bg-gradient-to-br ${getCategoryColor(project.category)} rounded-lg text-white`}>
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

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-primary-500/50">
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
                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-secondary-400 transition-colors"
                            >
                                <FiExternalLink size={16} />
                                <span>Demo</span>
                            </a>
                        )}
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{project.date}</span>
                </div>
            </div>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary-400/0 to-accent-400/0 group-hover:from-secondary-400/10 group-hover:to-accent-400/10 transition-all duration-500 pointer-events-none"></div>
        </div>
    );
};

export default ProjectCard;