import { useState } from 'react';
import { FiChevronRight, FiGlobe, FiTrendingUp, FiUsers, FiCode } from 'react-icons/fi';
import { HiOutlineLightningBolt, HiOutlineAcademicCap } from 'react-icons/hi';

const About = () => {
    const [activeTab, setActiveTab] = useState('journey');

    const highlights = [
        {
            icon: FiGlobe,
            title: 'International Perspective',
            description: '6-month exchange at SF State University, bridging French excellence with Silicon Valley innovation',
        },
        {
            icon: FiTrendingUp,
            title: 'Growth Mindset',
            description: 'Transformed from passive learner to actively seeking challenges and pushing boundaries',
        },
        {
            icon: FiUsers,
            title: 'Leadership at Scale',
            description: 'VP of EPITA\'s Paillote association, organizing events for 1000+ participants',
        },
        {
            icon: FiCode,
            title: 'Full-Stack Expertise',
            description: '4+ years mastering everything from distributed systems to neural networks',
        },
    ];

    const values = [
        'Continuous Learning',
        'Innovation',
        'Collaboration',
        'Impact-Driven',
        'Authenticity',
    ];

    const tabs = {
        journey: {
            title: 'My Journey',
            content: (
                <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                    <p>
                        My path to tech wasn't linear, and that's what makes it powerful. Growing up in France,
                        I was always curious about how things worked, but it wasn't until{' '}
                        <span className="text-gray-900 dark:text-white font-semibold">EPITA</span> that
                        I discovered my passion for AI and its potential to solve real-world problems.
                    </p>
                    <p>
                        The turning point came during my{' '}
                        <span className="text-accent-500 font-semibold">exchange at San Francisco State University</span>.
                        Those six months in the Bay Area didn't just teach me new technologies – they fundamentally
                        changed how I approach challenges. I witnessed the Silicon Valley mindset firsthand: the
                        relentless innovation, the "why not?" attitude, and the belief that a small team can change the world.
                    </p>
                    <p>
                        Recently, I shifted from passively absorbing knowledge to <span className="text-secondary-300 font-semibold">actively challenging myself.</span>
                        Whether it's going deeper into school work, learning independently, giving my best in associative activities,
                        or seeking out hackathons and new experiences, I now embrace complexity rather than shy away from it.
                    </p>
                    <p>
                        As I approach graduation, I'm not just looking for a job, I'm seeking to contribute to
                        something meaningful. The Bay Area represents more than a location; it's where my technical
                        skills, international perspective, and hunger for impact can converge to create real value.
                    </p>
                </div>
            ),
        },
        motivation: {
            title: 'What Drives Me',
            content: (
                <div className="space-y-6">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        I'm motivated by the intersection of elegant code, meaningful impact, and authentic collaboration.
                        I thrive on learning with people who inspire me, understanding deeply what I do, and creating systems or models
                        that truly make a difference. Autonomy, curiosity, and clear communication guide every project I take on.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        <div className="p-4 bg-gradient-to-br from-secondary-50 to-accent-50 dark:from-secondary-900/20 dark:to-accent-900/20 rounded-lg border border-secondary-200 dark:border-secondary-800">
                            <HiOutlineLightningBolt className="text-secondary-400 text-2xl mb-2" />
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Technical Excellence</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                I focus on building solutions that scale, maintain, and have a genuine impact, not just code that works.
                            </p>
                        </div>
                        <div className="p-4 bg-gradient-to-br from-accent-50 to-warm-50 dark:from-accent-900/20 dark:to-warm-900/20 rounded-lg border border-accent-200 dark:border-accent-800">
                            <HiOutlineAcademicCap className="text-accent-500 text-2xl mb-2" />
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Curiosity & Learning</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                I embrace challenges as opportunities to learn, whether studying independently
                                or collaborating with people who push me to grow.
                            </p>
                        </div>
                    </div>

                    <div className="mt-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Core Values</h4>
                        <div className="flex flex-wrap gap-2">
                            {values.map((value) => (
                                <span
                                    key={value}
                                    className="px-4 py-2 bg-white dark:bg-primary-600 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-primary-500"
                                >
                                    {value}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ),
        },
        beyond: {
            title: 'Beyond Code',
            content: (
                <div className="space-y-6">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        Technology is just one facet of who I am. My experiences outside of coding have shaped
                        me into a more complete engineer and leader.
                    </p>
                    <div className="space-y-4">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-warm-100 dark:bg-warm-900/20 rounded-lg flex items-center justify-center">
                                <span className="text-xl">🍹</span>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white">Event Leadership</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                    As VP of Paillote, I've learned that organizing events for 1000+ people is like
                                    orchestrating a distributed system – it requires planning, redundancy, and grace under pressure.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-accent-100 dark:bg-accent-900/20 rounded-lg flex items-center justify-center">
                                <span className="text-xl">📈</span>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white">Self-Directed Learning</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                    Currently teaching myself quantitative finance – because understanding markets helps
                                    me build better fintech solutions and showcases my intellectual curiosity.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-secondary-100 dark:bg-secondary-900/20 rounded-lg flex items-center justify-center">
                                <span className="text-xl">🏄‍♂️</span>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white">Sports & Adventure</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                    I stay active through volleyball, gym workouts, wakeboarding, snowboarding, and surfing — all ways to challenge myself physically and mentally.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-accent-100 dark:bg-accent-900/20 rounded-lg flex items-center justify-center">
                                <span className="text-xl">🌍</span>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white">Culture & Learning</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                    I enjoy learning languages like Italian and Spanish, exploring new cuisines through cooking and wine tasting, and discovering new cultures whenever possible.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
    };

    return (
        <section id="about" className="py-20 md:py-32 bg-gray-50 dark:bg-primary-600 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-secondary-400/10 to-accent-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent-400/10 to-warm-400/10 rounded-full blur-3xl"></div>

            <div className="section-container relative z-10">
                {/* Section header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
                        About Me
                    </h2>
                </div>

                {/* Highlights grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {highlights.map((highlight, index) => {
                        const Icon = highlight.icon;
                        return (
                            <div
                                key={index}
                                className="group bg-white dark:bg-primary-500/50 rounded-xl p-6 border border-gray-200 dark:border-primary-400/30 hover:shadow-xl hover:scale-105 transition-all duration-300"
                            >
                                <Icon className="text-3xl text-secondary-400 mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                    {highlight.title}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    {highlight.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Tabbed content */}
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-wrap gap-2 mb-8 justify-center">
                        {Object.entries(tabs).map(([key, tab]) => (
                            <button
                                key={key}
                                onClick={() => setActiveTab(key)}
                                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeTab === key
                                    ? 'bg-secondary-400 text-white shadow-lg shadow-secondary-400/30'
                                    : 'bg-white dark:bg-primary-500 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-primary-400'
                                    }`}
                            >
                                {tab.title}
                            </button>
                        ))}
                    </div>

                    <div className="bg-white dark:bg-primary-500/50 rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-primary-400/30">
                        {tabs[activeTab as keyof typeof tabs].content}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <a
                        href="#projects"
                        className="inline-flex items-center gap-2 text-secondary-400 hover:text-secondary-500 font-medium transition-colors group"
                    >
                        <span>See what I've built</span>
                        <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;