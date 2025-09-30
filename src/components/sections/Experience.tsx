import { experiences } from '../../data/experience';
import { FiBriefcase, FiBook, FiUsers, FiMapPin, FiCalendar, FiAward } from 'react-icons/fi';

const Experience = () => {
    const getTypeIcon = (type: string) => {
        switch (type) {
            case 'work':
                return FiBriefcase;
            case 'education':
                return FiBook;
            case 'leadership':
                return FiUsers;
            default:
                return FiBriefcase;
        }
    };

    const getTypeColor = (type: string) => {
        switch (type) {
            case 'work':
                return 'bg-secondary-400';
            case 'education':
                return 'bg-accent-400';
            case 'leadership':
                return 'bg-warm-400';
            default:
                return 'bg-gray-400';
        }
    };

    // Check if experience has a recommendation
    const hasRecommendation = (expId: string) => {
        return expId === 'vesto' || expId === 'epita';
    };

    return (
        <section id="experience" className="py-20 md:py-32 bg-gray-50 dark:bg-primary-600 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/3 left-0 w-96 h-96 bg-gradient-to-r from-secondary-400/10 to-accent-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-gradient-to-l from-warm-400/10 to-secondary-400/10 rounded-full blur-3xl"></div>

            <div className="section-container relative z-10">
                {/* Section header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
                        Experience & Education
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        A journey of continuous learning and leadership
                    </p>
                </div>

                {/* Timeline */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-primary-500 md:transform md:-translate-x-1/2"></div>

                        {/* Experience items */}
                        {experiences.map((exp, index) => {
                            const Icon = getTypeIcon(exp.type);
                            const isEven = index % 2 === 0;

                            return (
                                <div
                                    key={exp.id}
                                    className={`relative flex items-center mb-12 animate-fade-up`}
                                    style={{
                                        animationDelay: `${index * 100}ms`,
                                        animationFillMode: 'backwards',
                                    }}
                                >
                                    {/* Mobile layout */}
                                    <div className="md:hidden flex w-full">
                                        {/* Icon */}
                                        <div className="flex-shrink-0 relative z-10">
                                            <div className={`w-16 h-16 rounded-full ${getTypeColor(exp.type)} flex items-center justify-center text-white shadow-lg`}>
                                                <Icon size={24} />
                                            </div>
                                            {exp.current && (
                                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                                            )}
                                            {hasRecommendation(exp.id) && (
                                                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center shadow-md">
                                                    <FiAward size={14} className="text-white" />
                                                </div>
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="ml-6 flex-1">
                                            <div className="bg-white dark:bg-primary-500/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                                                <ExperienceCard exp={exp} hasRecommendation={hasRecommendation(exp.id)} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Desktop layout */}
                                    <div className="hidden md:flex w-full">
                                        {/* Left side */}
                                        <div className={`w-1/2 ${isEven ? 'pr-8 text-right' : 'opacity-0'}`}>
                                            {isEven && (
                                                <div className="bg-white dark:bg-primary-500/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                                                    <ExperienceCard exp={exp} hasRecommendation={hasRecommendation(exp.id)} />
                                                </div>
                                            )}
                                        </div>

                                        {/* Center icon */}
                                        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                                            <div className={`w-16 h-16 rounded-full ${getTypeColor(exp.type)} flex items-center justify-center text-white shadow-lg z-10`}>
                                                <Icon size={24} />
                                            </div>
                                            {exp.current && (
                                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                                            )}
                                            {hasRecommendation(exp.id) && (
                                                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center shadow-md">
                                                    <FiAward size={14} className="text-white" />
                                                </div>
                                            )}
                                        </div>

                                        {/* Right side */}
                                        <div className={`w-1/2 ${!isEven ? 'pl-8' : 'opacity-0'}`}>
                                            {!isEven && (
                                                <div className="bg-white dark:bg-primary-500/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                                                    <ExperienceCard exp={exp} hasRecommendation={hasRecommendation(exp.id)} />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

// Experience Card Component
const ExperienceCard = ({ exp, hasRecommendation }: { exp: typeof experiences[0], hasRecommendation: boolean }) => (
    <>
        {/* Header */}
        <div className="mb-4">
            {hasRecommendation && (
                <a
                    href="#about"
                    className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 text-xs font-medium rounded-full hover:bg-yellow-100 dark:hover:bg-yellow-900/30 transition-colors mb-2"
                    title="View recommendation letter"
                >
                    <FiAward size={12} />
                    <span>Recommended</span>
                </a>
            )}
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                {exp.role}
            </h3>
            <div className="text-secondary-400 font-semibold">
                {exp.company}
            </div>
            <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1">
                    <FiMapPin size={14} />
                    <span>{exp.location}</span>
                </div>
                <div className="flex items-center gap-1">
                    <FiCalendar size={14} />
                    <span>{exp.period}</span>
                </div>
                {exp.current && (
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-semibold rounded-full">
                        Current
                    </span>
                )}
            </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
            {exp.description}
        </p>

        {/* Achievements */}
        <ul className="space-y-2 mb-4">
            {exp.achievements.slice(0, 3).map((achievement, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span className="text-accent-400 mt-1">•</span>
                    <span>{achievement}</span>
                </li>
            ))}
        </ul>

        {/* Tech stack */}
        {exp.tech && (
            <div className="flex flex-wrap gap-1">
                {exp.tech.map((tech) => (
                    <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-primary-600 text-gray-600 dark:text-gray-300 rounded"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        )}
    </>
);

export default Experience;