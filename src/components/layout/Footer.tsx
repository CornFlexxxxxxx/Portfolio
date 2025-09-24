import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: FiGithub, href: 'https://github.com/CornFlexxxxxxx', label: 'GitHub' },
        { icon: FiLinkedin, href: 'https://www.linkedin.com/in/gabriel-monteillard-6a0448153/', label: 'LinkedIn' },
        { icon: FiMail, href: 'mailto:gabriel.monteillard@gmail.com', label: 'Email' },
        { icon: FiPhone, href: 'tel:+33652862855', label: 'Phone' },
    ];

    return (
        <footer className="bg-gray-50 dark:bg-primary-600 border-t border-gray-200 dark:border-primary-500">
            <div className="section-container py-12">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
                    {/* Branding */}
                    <div className="text-center md:text-left">
                        <p className="font-display font-bold text-xl text-gray-900 dark:text-white">
                            Gabriel Monteillard
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            AI/ML Engineer | Data Scientist
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center space-x-6">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 dark:text-gray-400 hover:text-secondary-400 dark:hover:text-secondary-400 transition-colors"
                                    aria-label={social.label}
                                >
                                    <Icon size={20} />
                                </a>
                            );
                        })}
                    </div>

                    {/* Availability Status */}
                    <div className="text-center md:text-right">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Open to opportunities
                        </p>
                        <p className="text-sm font-medium text-accent-500 dark:text-accent-400">
                            Available from Feb 2026
                        </p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-primary-500">
                    <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                        © {currentYear} Gabriel Monteillard. Built with React, TypeScript, and Tailwind CSS.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;