import { useState } from 'react';
import { skillCategories, softSkills, languages } from '../../data/skills';
import { FiCheck } from 'react-icons/fi';

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState('ai-ml');

    const SkillBar = ({ name, level }: { name: string; level: number }) => (
        <div className="group">
            <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {name}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                    {level === 5 ? 'Expert' : level === 4 ? 'Advanced' : level === 3 ? 'Intermediate' : 'Learning'}
                </span>
            </div>
            <div className="w-full h-2 bg-gray-200 dark:bg-primary-600 rounded-full overflow-hidden">
                <div
                    className="h-full bg-gradient-to-r from-secondary-400 to-accent-400 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${(level / 5) * 100}%` }}
                />
            </div>
        </div>
    );

    return (
        <section id="skills" className="py-20 md:py-32 bg-white dark:bg-primary-500 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-secondary-400/5 via-accent-400/5 to-warm-400/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-l from-warm-400/5 via-accent-400/5 to-secondary-400/5 rounded-full blur-3xl"></div>

            <div className="section-container relative z-10">
                {/* Section header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
                        Technical Skills
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        From neural networks to distributed systems
                    </p>
                </div>

                {/* Main skills grid */}
                <div className="max-w-6xl mx-auto">
                    {/* Category tabs */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {skillCategories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${activeCategory === category.id
                                        ? 'bg-gradient-to-r from-secondary-400 to-accent-400 text-white shadow-lg scale-105'
                                        : 'bg-gray-100 dark:bg-primary-600 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-primary-500'
                                    }`}
                            >
                                <span className="text-lg">{category.icon}</span>
                                <span className="hidden sm:inline">{category.title}</span>
                            </button>
                        ))}
                    </div>

                    {/* Skills display */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left side - Active category */}
                        <div className="bg-white dark:bg-primary-600/50 rounded-xl p-8 border border-gray-200 dark:border-primary-400/30">
                            {skillCategories.map((category) => {
                                if (category.id !== activeCategory) return null;
                                return (
                                    <div key={category.id}>
                                        <div className="mb-6">
                                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-3">
                                                <span className="text-3xl">{category.icon}</span>
                                                {category.title}
                                            </h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                {category.description}
                                            </p>
                                        </div>
                                        <div className="space-y-4">
                                            {category.skills.map((skill) => (
                                                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Right side - Soft skills and languages */}
                        <div className="space-y-8">
                            {/* Soft Skills */}
                            <div className="bg-white dark:bg-primary-600/50 rounded-xl p-8 border border-gray-200 dark:border-primary-400/30">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                    Soft Skills & Leadership
                                </h3>
                                <div className="grid grid-cols-2 gap-3">
                                    {softSkills.map((skill) => (
                                        <div key={skill} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                                            <FiCheck className="text-green-500 flex-shrink-0" />
                                            <span>{skill}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Languages */}
                            <div className="bg-white dark:bg-primary-600/50 rounded-xl p-8 border border-gray-200 dark:border-primary-400/30">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                    Languages
                                </h3>
                                <div className="space-y-4">
                                    {languages.map((lang) => (
                                        <div key={lang.name} className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <span className="text-2xl">{lang.flag}</span>
                                                <span className="font-medium text-gray-700 dark:text-gray-300">
                                                    {lang.name}
                                                </span>
                                            </div>
                                            <span className="px-3 py-1 bg-gradient-to-r from-secondary-100 to-accent-100 dark:from-secondary-900/30 dark:to-accent-900/30 text-secondary-700 dark:text-secondary-300 text-sm font-medium rounded-full">
                                                {lang.level}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Quick stats */}
                            <div className="bg-gradient-to-br from-secondary-500 to-accent-500 rounded-xl p-8 text-white">
                                <h3 className="text-xl font-bold mb-6">Quick Stats</h3>
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <div className="text-3xl font-bold">4+</div>
                                        <div className="text-sm opacity-90">Years Programming</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold">3+</div>
                                        <div className="text-sm opacity-90">Years AI/ML</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold">5</div>
                                        <div className="text-sm opacity-90">Major Projects</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold">1000+</div>
                                        <div className="text-sm opacity-90">Event Attendees</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom highlight */}
                <div className="max-w-4xl mx-auto mt-16 text-center">
                    <div className="bg-gray-50 dark:bg-primary-600/50 rounded-xl p-8 border border-gray-200 dark:border-primary-400/30">
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                            <span className="font-bold text-gray-900 dark:text-white">Always Learning:</span> Currently
                            self-teaching quantitative finance and exploring advanced NLP architectures. My mindset shift
                            means I'm constantly seeking new challenges and technologies to master.
                        </p>
                        <div className="flex items-center justify-center gap-2 text-secondary-400">
                            <span className="text-2xl">🚀</span>
                            <span className="font-semibold">Growth Never Stops</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;