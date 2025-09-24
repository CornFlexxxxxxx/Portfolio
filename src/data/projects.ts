export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    tech: string[];
    category: 'AI/ML' | 'Distributed Systems' | 'Data-Driven';
    github?: string;
    demo?: string;
    image?: string;
    highlights: string[];
    metrics?: {
        label: string;
        value: string;
    }[];
    date: string;
}

export const projects: Project[] = [
    {
        id: 'minecraft-ai',
        title: 'AI-Powered Game Companion',
        description: 'Natural language bot that translates conversational commands into autonomous Minecraft behaviors.',
        longDescription: 'Built during the Mistral AI Hackathon in 24 hours. Created a TypeScript REST API connecting a Minecraft bot to a Python MCP server, enabling complex autonomous behaviors through natural language commands.',
        tech: ['Python', 'TypeScript', 'MCP Protocol', 'REST API', 'Mistral AI'],
        category: 'AI/ML',
        github: 'https://github.com/BADSTART-Mistral-Hackathon-MCP/Minecraft-MistralMCP',
        highlights: [
            'Built in 24-hour hackathon at Mistral AI',
            'Bridges natural language to game actions',
            'Autonomous mining, crafting, and building',
            'Real-time player interaction'
        ],
        metrics: [
            { label: 'Hackathon', value: 'Mistral AI' },
            { label: 'Time', value: '24 hours' },
            { label: 'Team Size', value: '3 members' }
        ],
        date: '2025'
    },
    {
        id: 'business-reviews-nlp',
        title: 'Business Reviews NLP',
        description: 'Advanced sentiment analysis system using fine-tuned transformers on 100,000+ business reviews.',
        longDescription: 'Developed comprehensive NLP pipeline with DistilBERT for sentiment classification and GPT-2 for text generation. Built interactive React interface for real-time model testing and visualization.',
        tech: ['Python', 'PyTorch', 'DistilBERT', 'GPT-2', 'React', 'FastAPI'],
        category: 'AI/ML',
        github: 'https://github.com/aygoun/nlp1-business-reviews',
        highlights: [
            'Fine-tuned on 100,000+ business reviews',
            'Implements transformer architectures',
            'Real-time inference API',
            'Interactive web interface'
        ],
        metrics: [
            { label: 'Dataset Size', value: '100K+ reviews' },
            { label: 'Accuracy', value: '94.3%' },
            { label: 'Response Time', value: '<100ms' }
        ],
        date: '2025'
    },
    {
        id: 'tinyx-platform',
        title: 'TinyX - Distributed Social Media Platform',
        description: 'Scalable microservices platform supporting 150+ cores and 260GB+ memory with sharded databases.',
        longDescription: 'Built a Twitter-like platform with 7 microservices using sharded MongoDB for posts, Neo4j for social graphs, and Redis clustering for caching. Implemented automated CI/CD with Docker and Kubernetes.',
        tech: ['Java', 'Kubernetes', 'Docker', 'MongoDB', 'Neo4j', 'Redis', 'Apache Kafka'],
        category: 'Distributed Systems',
        github: 'https://gitlab.cri.epita.fr/ing/majeures/tc/info/student/2026/2025-epitweet-tinyx-02',
        highlights: [
            '7 independent microservices',
            'Sharded database architecture',
            'Support for 150+ cores',
            '260GB+ memory capacity',
            'Automated CI/CD pipeline'
        ],
        metrics: [
            { label: 'Scale', value: '150+ cores' },
            { label: 'Memory', value: '260GB+' },
            { label: 'Microservices', value: '7' }
        ],
        date: '2025'
    },
    {
        id: 'ship-cnn',
        title: 'Ship Classification CNN',
        description: 'Computer vision model achieving 82.69% accuracy on degraded 32x32 ship images with severe class imbalance.',
        longDescription: 'Developed a constrained VGG-style CNN for ship classification, optimizing architecture within 25-layer limit. Handled 3.86:1 class imbalance through intelligent weighting and spatial detail preservation.',
        tech: ['Python', 'TensorFlow', 'Computer Vision', 'CNN', 'NumPy'],
        category: 'AI/ML',
        github: 'https://www.kaggle.com/competitions/navires-2025',
        highlights: [
            '82.69% accuracy on degraded images',
            'Handled 3.86:1 class imbalance',
            'Optimized within 25-layer constraint',
            'Custom VGG architecture'
        ],
        metrics: [
            { label: 'Accuracy', value: '82.69%' },
            { label: 'Class Imbalance', value: '3.86:1' },
            { label: 'Model Layers', value: '25' }
        ],
        date: '2025'
    },
    {
        id: 'iot-washing-machine',
        title: 'IoT Washing Machine System',
        description: 'Distributed IoT platform with real-time stream processing and anomaly detection for smart appliances.',
        longDescription: 'Developed a PoC for IoT washing machine management using 3-tier Data Lake architecture. Implemented real-time processing with Kafka and Spark Streaming, including anomaly detection and multi-channel alerts.',
        tech: ['Scala', 'Apache Kafka', 'Spark Streaming', 'Cassandra', 'MinIO', 'Elasticsearch'],
        category: 'Data-Driven',
        github: 'https://github.com/CornFlexxxxxxx/IoT-WasingMachine-PoC',
        highlights: [
            '3-tier Data Lake architecture',
            'Real-time stream processing',
            'Anomaly detection system',
            'Multi-channel alert system'
        ],
        metrics: [
            { label: 'Data Layers', value: '3-tier' },
            { label: 'Processing', value: 'Real-time' },
            { label: 'Storage', value: 'Distributed' }
        ],
        date: '2025'
    }
];