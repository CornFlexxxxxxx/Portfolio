import { FiMail, FiLinkedin, FiGithub, FiPhone, FiMapPin, FiCalendar, FiSend } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi';

const Contact = () => {
    const contactMethods = [
        {
            icon: FiMail,
            label: 'Email',
            value: 'gabriel.monteillard@gmail.com',
            href: 'mailto:gabriel.monteillard@gmail.com',
            color: 'from-secondary-400 to-purple-500',
        },
        {
            icon: FiLinkedin,
            label: 'LinkedIn',
            value: 'Connect on LinkedIn',
            href: 'https://www.linkedin.com/in/gabriel-monteillard-6a0448153/',
            color: 'from-blue-400 to-blue-600',
        },
        {
            icon: FiGithub,
            label: 'GitHub',
            value: 'View my code',
            href: 'https://github.com/CornFlexxxxxxx',
            color: 'from-gray-600 to-gray-800',
        },
        {
            icon: FiPhone,
            label: 'Phone',
            value: '+33 6 52 86 28 55',
            href: 'tel:+33652862855',
            color: 'from-accent-400 to-green-500',
        },
    ];

    return (
        <section id="contact" className="py-20 md:py-32 bg-gray-50 dark:bg-primary-600 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-secondary-400/10 to-accent-400/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-warm-400/10 to-secondary-400/10 rounded-full blur-3xl"></div>
            </div>

            <div className="section-container relative z-10">
                {/* Section header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
                        Let's Connect
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Ready to contribute to your team's success
                    </p>
                </div>

                {/* Main content */}
                <div className="max-w-5xl mx-auto">
                    {/* Availability card */}
                    <div className="bg-gradient-to-br from-secondary-500 to-accent-500 rounded-2xl p-8 md:p-12 text-white mb-12 shadow-2xl">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <HiOutlineSparkles className="text-2xl" />
                                    <span className="text-sm font-semibold uppercase tracking-wider opacity-90">
                                        Actively Seeking Opportunities
                                    </span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                    Available for San Francisco Bay Area Roles
                                </h3>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-white/90">
                                        <FiMapPin />
                                        <span>Open to relocation from Paris to SF</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-white/90">
                                        <FiCalendar />
                                        <span>Starting February 2026</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <a
                                    href="mailto:gabriel.monteillard@gmail.com?subject=Opportunity%20in%20San%20Francisco"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-secondary-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                                >
                                    <FiSend />
                                    <span>Send Email</span>
                                </a>
                                <a
                                    href="/resume-en.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/20 text-white font-semibold rounded-lg border border-white/30 hover:bg-white/30 transition-all duration-300"
                                >
                                    Download Resume
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact methods grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {contactMethods.map((method) => {
                            const Icon = method.icon;
                            return (
                                <a
                                    key={method.label}
                                    href={method.href}
                                    target={method.label !== 'Email' && method.label !== 'Phone' ? '_blank' : undefined}
                                    rel={method.label !== 'Email' && method.label !== 'Phone' ? 'noopener noreferrer' : undefined}
                                    className="group bg-white dark:bg-primary-500/50 rounded-xl p-6 border border-gray-200 dark:border-primary-400/30 hover:shadow-xl transition-all duration-300 hover:scale-105"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${method.color} flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform`}>
                                            <Icon size={20} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                                                {method.label}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300 group-hover:text-secondary-400 dark:group-hover:text-secondary-400 transition-colors">
                                                {method.value}
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            );
                        })}
                    </div>

                    {/* Additional info */}
                    <div className="text-center">
                        <div className="inline-flex flex-col items-center p-8 bg-white dark:bg-primary-500/50 rounded-xl border border-gray-200 dark:border-primary-400/30">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                What I'm Looking For
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl">
                                <div className="flex items-start gap-2">
                                    <span className="text-green-500 mt-1">✓</span>
                                    <span className="text-sm text-gray-600 dark:text-gray-300">
                                        AI/ML roles focusing on NLP or Computer Vision
                                    </span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-green-500 mt-1">✓</span>
                                    <span className="text-sm text-gray-600 dark:text-gray-300">
                                        Full-stack positions with ML components
                                    </span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-green-500 mt-1">✓</span>
                                    <span className="text-sm text-gray-600 dark:text-gray-300">
                                        Startups or established tech companies
                                    </span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-green-500 mt-1">✓</span>
                                    <span className="text-sm text-gray-600 dark:text-gray-300">
                                        Teams that value growth and innovation
                                    </span>
                                </div>
                            </div>
                            <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-xl">
                                I'm particularly interested in roles that combine technical challenges with
                                real-world impact, whether that's in sustainability, fintech, or consumer technology.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;