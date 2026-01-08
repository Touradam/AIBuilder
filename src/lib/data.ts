export interface Day {
  id: string;
  title: string;
  subtitle: string;
  topics: string[];
}

export interface Week {
  id: string;
  title: string;
  subtitle: string;
  days: Day[];
}

export const programData: Week[] = [
  {
    id: 'week1',
    title: 'Week 1 — BOOTCAMP',
    subtitle: 'Foundation + Hands-On Skills',
    days: [
      {
        id: 'day1',
        title: 'Friday: Understanding AI',
        subtitle: 'Introduction to AI, Machine Learning & Neural Networks',
        topics: [
          'What AI is vs what it is not',
          'History and evolution of AI',
          'What machine learning actually means',
          'How models learn (data, training, inference)',
          'Neural networks — explained intuitively',
          'Common myths, fears, and limitations of AI',
          'How to think critically about AI outputs',
        ],
      },
      {
        id: 'day2',
        title: 'Saturday: Programming Fundamentals',
        subtitle: 'Tools & Foundations for Building',
        topics: [
          'Programming fundamentals (Python + basics)',
          'How software applications are structured',
          'Introduction to Cursor (AI-assisted coding)',
          'Git & version control',
          'Project organization',
          'How developers actually work with AI today',
          'Using AI to accelerate learning, not replace thinking',
        ],
      },
      {
        id: 'day3',
        title: 'Sunday: Building & Deployment',
        subtitle: 'From Idea to Working Application',
        topics: [
          'Building a simple web app',
          'Building a Python application',
          'Connecting AI models to applications',
          'Prompt design basics',
          'Deployment fundamentals',
          'Turning ideas into usable tools',
          'Best practices to avoid over-reliance on AI',
        ],
      },
    ],
  },
  {
    id: 'week2',
    title: 'Week 2 — WORKSHOP',
    subtitle: 'Advanced Concepts + Personal Projects',
    days: [
      {
        id: 'day4',
        title: 'Friday: Agentic Workflows',
        subtitle: 'How AI Agents Think & Act',
        topics: [
          'Introduction to frontier LLM models',
          'Introduction to open source LLM models',
          'Introduction to AI agents',
          'Introduction to Jupyter Lab',
          'Introduction to CrewAI and AutoGen',
          'Working with APIs',
          'Building a simple AI agent application',
          'Where agents help — and where they shouldn\'t be trusted',
        ],
      },
      {
        id: 'day5',
        title: 'Saturday: AI Agent Applications',
        subtitle: 'Build Your Own AI Agent',
        topics: [
          'Designing a real-world AI agent',
          'Connecting tools, APIs, and data',
          'Building agents for productivity',
          'Building agents for research',
          'Building agents for personal automation',
          'Ethics, safety, and boundaries',
          'How to stay in control of AI systems',
        ],
      },
      {
        id: 'day6',
        title: 'Sunday: Q&A + Integration',
        subtitle: 'Reflection, Ethics & Next Steps',
        topics: [
          'Live Q&A',
          'Review of key concepts',
          'Common mistakes beginners make',
          'How to continue learning responsibly',
          'How to use AI without becoming dependent',
          'Building a long-term AI mindset',
        ],
      },
    ],
  },
];

export const targetAudience = [
  {
    title: 'Students',
    description: 'Build a competitive edge for your future career',
  },
  {
    title: 'Entrepreneurs',
    description: 'Learn to build AI-powered tools for your business',
  },
  {
    title: 'Creatives',
    description: 'Enhance your creative work with AI capabilities',
  },
  {
    title: 'Professionals',
    description: 'Stay ahead in your field with AI skills',
  },
  {
    title: 'Non-technical people',
    description: 'No programming experience required to get started',
  },
];

export const corePhilosophy = [
  'AI is a tool, not a replacement for human thinking',
  'Understanding principles matters more than memorizing tools',
  'You should use AI deliberately, not passively',
  'The goal is agency, clarity, and empowerment',
];

export const programStats = [
  { label: 'Duration', value: '2 Weekends' },
  { label: 'Total Days', value: '6 Days' },
  { label: 'Prerequisites', value: 'None' },
  { label: 'Group Size', value: 'Small' },
];
