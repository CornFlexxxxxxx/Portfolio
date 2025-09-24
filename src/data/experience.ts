export interface Experience {
    id: string;
    role: string;
    company: string;
    location: string;
    period: string;
    type: 'work' | 'education' | 'leadership';
    current?: boolean;
    description: string;
    achievements: string[];
    tech?: string[];
    logo?: string;
}

export const experiences: Experience[] = [
    {
        id: 'epita',
        role: "Master's in Computer Science - AI & Cognitive Sciences",
        company: 'EPITA',
        location: 'Paris, France',
        period: 'Sep 2021 - May 2026',
        type: 'education',
        current: true,
        description: 'Pursuing advanced degree specializing in Artificial Intelligence and Cognitive Sciences at one of France\'s top engineering schools.',
        achievements: [
            'Specialization in Natural Language Processing and Machine Learning',
            'Completed advanced coursework in distributed systems and algorithms',
            'Maintaining strong academic performance while leading student associations',
            'Selected for competitive SF State exchange program',
        ],
        tech: ['Python', 'Java', 'C++', 'Scala', 'Machine Learning', 'NLP'],
    },
    {
        id: 'paillote',
        role: 'Vice President',
        company: 'Paillote Association',
        location: 'EPITA, Paris',
        period: '2025 - 2026',
        type: 'leadership',
        current: true,
        description: 'Leading EPITA\'s cocktail association, managing large-scale events and coordinating teams.',
        achievements: [
            'Organized events for 1000+ participants with flawless execution',
            'Delivered keynote speeches focusing on team wellbeing and motivation',
            'Redesigned organizational system using Notion, improving coordination by 40%',
            'Managed crisis situations with real-time problem-solving',
        ],
        tech: ['Event Management', 'Team Leadership', 'Public Speaking'],
    },
    {
        id: 'vesto',
        role: 'Software Development Intern',
        company: 'Vesto',
        location: 'Paris, France',
        period: 'Sep 2024 - Jan 2025',
        type: 'work',
        description: 'Contributed to environmental sustainability through technology at a waste-reduction startup.',
        achievements: [
            'Automated data synchronization between Vesto and partner databases using REST APIs',
            'Developed internal workflow tools using React Admin, Make, and Airtable',
            'Reduced manual data entry by 75% through automation',
            'Direct contribution to sustainability mission through efficient resource utilization',
        ],
        tech: ['React', 'REST APIs', 'Make', 'Airtable', 'JavaScript'],
    },
    {
        id: 'sfstate',
        role: 'Exchange Student',
        company: 'San Francisco State University',
        location: 'San Francisco, CA',
        period: 'Jan 2023 - Jun 2023',
        type: 'education',
        description: 'Six-month academic exchange that transformed my perspective on technology and innovation.',
        achievements: [
            'Immersed in Silicon Valley tech ecosystem and startup culture',
            'Completed advanced CS coursework with American teaching methods',
            'Built international network of tech professionals and students',
            'Gained cross-cultural communication skills essential for global teams',
        ],
        tech: ['Cross-Cultural Communication', 'Adaptability'],
    },
    {
        id: 'savencia',
        role: 'Cybersecurity Intern - CISO Team',
        company: 'Savencia',
        location: 'Viroflay, France',
        period: 'Jun 2022 - Jul 2022',
        type: 'work',
        description: 'Worked with the CISO team on enterprise security awareness and testing.',
        achievements: [
            'Developed cybersecurity "points-based permit" system for employee awareness',
            'Conducted phishing simulation campaign targeting 14,000+ employees',
            'Analyzed user behavior patterns to improve security training',
            'Gained insight into enterprise-scale security practices',
        ],
        tech: ['Security Awareness', 'Phishing Simulation', 'Data Analysis'],
    },
];