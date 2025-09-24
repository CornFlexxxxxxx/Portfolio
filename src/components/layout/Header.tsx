import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Navigation items
    const navItems = [
        { label: 'About', href: '#about' },
        { label: 'Projects', href: '#projects' },
        { label: 'Experience', href: '#experience' },
        { label: 'Skills', href: '#skills' },
        { label: 'Contact', href: '#contact' },
    ];

    // Social links
    const socialLinks = [
        { icon: FiGithub, href: 'https://github.com/CornFlexxxxxxx', label: 'GitHub' },
        { icon: FiLinkedin, href: 'https://linkedin.com/in/gabriel-monteillard-6a0448153/', label: 'LinkedIn' },
        { icon: FiMail, href: 'mailto:gabriel.monteillard@gmail.com', label: 'Email' },
    ];

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const threshold = window.innerHeight * 0.95;
            setIsScrolled(window.scrollY > threshold);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when clicking a link
    const handleNavClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen
                ? 'bg-white/90 dark:bg-primary-500/90 backdrop-blur-md shadow-lg'
                : 'bg-primary-500/60 dark:bg-primary-500/60 backdrop-blur-sm'
                }`}
        >
            <nav className="section-container">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo / Name */}
                    <a
                        href="#hero"
                        className="font-display font-bold text-xl md:text-2xl text-gray-700 dark:text-white hover:text-secondary-400 dark:hover:text-secondary-400 transition-colors"
                    >
                        GM<span className="text-secondary-400">.</span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-gray-700 dark:text-gray-200 hover:text-secondary-400 dark:hover:text-secondary-400 font-medium transition-colors link-underline"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* Desktop Social Links */}
                    <div className="hidden md:flex items-center space-x-4">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 dark:text-gray-300 hover:text-secondary-400 dark:hover:text-secondary-400 transition-colors"
                                    aria-label={social.label}
                                >
                                    <Icon size={20} />
                                </a>
                            );
                        })}
                        <a
                            href="/resume-en.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-4 px-4 py-2 text-sm font-medium text-secondary-400 border border-secondary-400 rounded-lg hover:bg-secondary-400 hover:text-white transition-all duration-300"
                        >
                            Resume
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-gray-700 dark:text-gray-200 hover:text-secondary-400 dark:hover:text-secondary-400 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen
                        ? 'max-h-96 opacity-100'
                        : 'max-h-0 opacity-0 overflow-hidden'
                        }`}
                >
                    <div className="py-4 space-y-3 border-t border-gray-200 dark:border-gray-700">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={handleNavClick}
                                className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-secondary-400 dark:hover:text-secondary-400 font-medium transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                        <div className="flex items-center space-x-4 px-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600 dark:text-gray-300 hover:text-secondary-400 dark:hover:text-secondary-400 transition-colors"
                                        aria-label={social.label}
                                    >
                                        <Icon size={20} />
                                    </a>
                                );
                            })}
                            <a
                                href="/resume-en.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-auto px-4 py-2 text-sm font-medium text-secondary-400 border border-secondary-400 rounded-lg"
                            >
                                Resume
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;