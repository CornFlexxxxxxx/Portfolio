export interface Skill {
    name: string;
    level: number; // 1-5
    category: 'languages' | 'ai-ml' | 'backend' | 'frontend' | 'databases' | 'devops' | 'tools';
}

export interface SkillCategory {
    id: string;
    title: string;
    icon: string;
    description: string;
    skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
    {
        id: 'languages',
        title: 'Programming Languages',
        icon: '💻',
        description: '4+ years of polyglot programming',
        skills: [
            { name: 'Python', level: 5, category: 'languages' },
            { name: 'C/C++', level: 5, category: 'languages' },
            { name: 'Java', level: 4, category: 'languages' },
            { name: 'TypeScript', level: 4, category: 'languages' },
            { name: 'JavaScript', level: 4, category: 'languages' },
            { name: 'Scala', level: 4, category: 'languages' },
            { name: 'SQL', level: 4, category: 'languages' },
        ],
    },
    {
        id: 'ai-ml',
        title: 'AI & Machine Learning',
        icon: '🧠',
        description: 'Specializing in NLP and Computer Vision',
        skills: [
            { name: 'NLP', level: 5, category: 'ai-ml' },
            { name: 'PyTorch', level: 5, category: 'ai-ml' },
            { name: 'Transformers', level: 4, category: 'ai-ml' },
            { name: 'DistilBERT / GPT', level: 4, category: 'ai-ml' },
            { name: 'Computer Vision', level: 4, category: 'ai-ml' },
            { name: 'TensorFlow', level: 4, category: 'ai-ml' },
            { name: 'Hugging Face', level: 4, category: 'ai-ml' },
            { name: 'Reinforcement Learning', level: 4, category: 'ai-ml' },
            { name: 'scikit-learn', level: 4, category: 'ai-ml' },
        ],
    },
    {
        id: 'databases',
        title: 'Databases & Storage',
        icon: '🗄️',
        description: 'SQL, NoSQL, and graph databases',
        skills: [
            { name: 'MongoDB', level: 4, category: 'databases' },
            { name: 'PostgreSQL', level: 4, category: 'databases' },
            { name: 'Redis', level: 4, category: 'databases' },
            { name: 'Neo4j', level: 3, category: 'databases' },
            { name: 'Cassandra', level: 3, category: 'databases' },
            { name: 'ElasticSearch', level: 3, category: 'databases' },
            { name: 'MinIO', level: 3, category: 'databases' },
        ],
    },
    {
        id: 'devops',
        title: 'DevOps & Cloud',
        icon: '☁️',
        description: 'Container orchestration and CI/CD',
        skills: [
            { name: 'Git', level: 5, category: 'devops' },
            { name: 'Linux', level: 5, category: 'devops' },
            { name: 'Docker', level: 5, category: 'devops' },
            { name: 'Kubernetes', level: 4, category: 'devops' },
            { name: 'CI/CD', level: 4, category: 'devops' },
            { name: 'VMs/SSH/SCP', level: 4, category: 'devops' },
            { name: 'Azure', level: 3, category: 'devops' },
            { name: 'AWS', level: 3, category: 'devops' },
        ],
    },
    {
        id: 'backend',
        title: 'Backend & Distributed Systems',
        icon: '⚡',
        description: 'Building scalable, distributed architectures',
        skills: [
            { name: 'REST APIs', level: 5, category: 'backend' },
            { name: 'Microservices', level: 4, category: 'backend' },
            { name: 'Node.js', level: 4, category: 'backend' },
            { name: 'FastAPI', level: 4, category: 'backend' },
            { name: 'Apache Kafka', level: 3, category: 'backend' },
            { name: 'Spark', level: 3, category: 'backend' },
        ],
    },
    {
        id: 'frontend',
        title: 'Frontend Development',
        icon: '🎨',
        description: 'Creating responsive, modern interfaces',
        skills: [
            { name: 'HTML/CSS', level: 5, category: 'frontend' },
            { name: 'Streamlit', level: 5, category: 'frontend' },
            { name: 'Tailwind CSS', level: 4, category: 'frontend' },
            { name: 'Material-UI', level: 4, category: 'frontend' },
            { name: 'React', level: 3, category: 'frontend' },
            { name: 'Next.js', level: 3, category: 'frontend' },
        ],
    },
];

export const softSkills = [
    'Problem Solving',
    'Team Leadership',
    'Cross-Cultural Communication',
    'Public Speaking',
    'Project Management',
    'Agile/Scrum',
];

export const languages = [
    { name: 'French', level: 'Native', flag: '🇫🇷' },
    { name: 'English', level: 'Advanced (C1)', flag: '🇺🇸' },
];