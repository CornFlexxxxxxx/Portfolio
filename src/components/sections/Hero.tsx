import { useEffect, useState } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiCalendar } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi';

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Typing animation for roles
    const roles = ['AI Engineer', 'NLP Specialist', 'Full-Stack Developer'];
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [currentRole, setCurrentRole] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Typing effect
    useEffect(() => {
        const role = roles[currentRoleIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (currentRole.length < role.length) {
                    setCurrentRole(role.slice(0, currentRole.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 1500);
                }
            } else {
                if (currentRole.length > 0) {
                    setCurrentRole(currentRole.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [currentRole, currentRoleIndex, isDeleting]);

    const socialLinks = [
        { icon: FiGithub, href: 'https://github.com/CornFlexxxxxxx', label: 'GitHub' },
        { icon: FiLinkedin, href: 'https://www.linkedin.com/in/gabriel-monteillard-6a0448153/', label: 'LinkedIn' },
        { icon: FiMail, href: 'mailto:gabriel.monteillard@gmail.com', label: 'Email' },
    ];

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600">
                <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
            </div>

            {/* Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-64 h-64 bg-secondary-400/10 rounded-full blur-3xl animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${i * 2}s`,
                            animationDuration: `${15 + i * 5}s`,
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 section-container text-center">
                <div className={`max-w-4xl mx-auto space-y-8 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                        <HiOutlineSparkles className="text-accent-400" />
                        <span className="text-sm font-medium text-white">Open to Opportunities</span>
                    </div>

                    {/* Name */}
                    <div>
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-4">
                            Gabriel
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-secondary-400">
                                Monteillard
                            </span>
                        </h1>
                    </div>

                    {/* Dynamic role */}
                    <div className="h-8 md:h-10">
                        <p className="text-xl md:text-2xl lg:text-3xl text-gray-200">
                            <span>{currentRole}</span>
                            <span className="animate-pulse">|</span>
                        </p>
                    </div>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Final-year Master's student at{' '}
                        <span className="text-white font-semibold">EPITA Paris</span> specializing in{' '}
                        <span className="text-accent-400 font-semibold">AI & NLP</span>.
                        Former exchange student at{' '}
                        <span className="text-white font-semibold">SF State University</span>,
                        seeking to return to the Bay Area to contribute to cutting-edge AI innovation.
                    </p>

                    {/* Location & Availability */}
                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-300">
                        <div className="flex items-center gap-2">
                            <FiMapPin className="text-accent-400" />
                            <span>Paris → San Francisco</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FiCalendar className="text-accent-400" />
                            <span>Available from Feb 2026</span>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                        <a
                            href="#projects"
                            className="group relative px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 hover:scale-105"
                        >
                            <span className="relative z-10">Explore My Work</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-accent-400 to-secondary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <span className="absolute inset-0 bg-gradient-to-r from-accent-400 to-secondary-400 opacity-100 group-hover:opacity-0 transition-opacity duration-300 blur-xl"></span>
                        </a>
                        <a
                            href="/resume-en.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white/30 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/60 hover:scale-105"
                        >
                            Download Resume
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center justify-center gap-6 pt-8">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:border-white/40"
                                    aria-label={social.label}
                                >
                                    <Icon size={20} />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;