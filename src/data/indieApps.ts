export interface IndieApp {
  id: string
  title: string
  category: 'productivity' | 'security' | 'social' | 'utility' | 'experimental'
  status: 'live' | 'beta' | 'development' | 'planning'
  date: string
  tags: string[]
  timeline: {
    concept: string
    development?: string
    launch?: string
    updates?: string[]
  }
  content?: {
    summary: string
    keyFeatures: string[]
    techStack: string[]
    challenges: string[]
  }
  links?: {
    live?: string
    github?: string
    docs?: string
    demo?: string
    figma?: string
  }
  media?: Array<{
    src: string
    alt?: string
    caption?: string
  }>
}

export const indieApps: IndieApp[] = [
  {
    id: 'savantra',
    title: 'Savantra',
   
    category: 'productivity',
    status: 'development',
    date: '2025-01-10',
    tags: ['Productivity', 'Education', 'AI', 'Study'],
   
    timeline: {
      concept: '10/15/2024',
      development: '06/15/2025',
      updates: [
        'Placeholder screens for the app: Home, Course, Create, Quiz, Profile',
        'Navigation Architecture implemented: Root Navigation, Bottom Tab Navigation, Stack Navigation',
        'Created the theme and components',
        'Figma Mockups',
        'Created the repo and set up the expo project',
      ]
    },
    content: {
      summary: 'Savantra is an app, which helps students study smarter on their time! The app utilizes AI to create a micro-learning/studying experience through the use of daily quizzes from the student course topics from their syllabus and personal notes. Savantra manages student tasks and deadlines, and sends perfectly timed reminders. The app adapts to the students performance and upcoming deadlines.',
      keyFeatures: [
        'AI-powered micro-learning/studying experience',
        'Daily quizzes from the student course topics from their syllabus and personal notes',
        'Task and deadline management',
        'Perfectly timed reminders',
        'Progress analytics and insights',
        'Visual streak tracking with heatmaps',
        'Customizable Study categories',
        'Gentle reminder system',
      ],
      techStack: ['React Native', 'Expo', 'Supase', 'TypeScript', 'React Native Elements'],
      challenges: [
        'Utilizing AI to create a micro-learning/studying experience',
        'Properly prompting the AI to parse the syllabus and notes',
        'Creating a user-friendly interface for the app',
        
      ]
    },
    links: {
      github: 'https://github.com/thacuriousbuilder/savantra',
    },
    media: [{
      src: '/images/apps/savantralogo.png',
      alt: 'Savantra screenshot'
    }]
  },
  {
    id: 'securenotes',
    title: 'SecureNotes',
    category: 'security',
    status: 'planning',
    date: '2024-12-20',
    tags: ['Security', 'Encryption', 'Notes', 'Privacy'],
    timeline: {
      concept: '2024-08-01',
      development: '2024-09-15',
      launch: '2024-12-20'
    },
    content: {
      summary: 'A privacy-focused note-taking app that ensures your notes remain secure with client-side encryption and zero-knowledge architecture.',
      keyFeatures: [
        'End-to-end encryption',
        'Zero-knowledge architecture',
        'Cross-platform sync',
        'Markdown support',
        'Secure sharing with time-limited links'
      ],
      techStack: ['Next.js', 'Web Crypto API', 'IndexedDB', 'Tailwind CSS', 'TypeScript'],
      challenges: [
        'Implementing secure client-side encryption',
        'Managing encryption keys safely',
        'Ensuring cross-platform compatibility'
      ]
    },
    links: {
      live: 'https://securenotes.app',
      github: 'https://github.com/thacuriousbuilder/securenotes',
      docs: 'https://docs.securenotes.app'
    }
  },
  {
    id: 'booklist',
    title: 'Booklist',
    category: 'social',
    status: 'planning',
    date: '2024-11-15',
    tags: ['Books', 'Social', 'Recommendations', 'Reading'],
    timeline: {
      concept: '2024-07-01',
      development: '2024-10-01',
      launch: '2025-03-01'
    },
    content: {
      summary: 'A social platform for book lovers to discover new reads, share recommendations, and track their reading journey with friends.',
      keyFeatures: [
        'Book discovery and recommendations',
        'Social reading lists',
        'Reading progress tracking',
        'Book club features',
        'Integration with Goodreads API'
      ],
      techStack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
      challenges: [
        'Building effective recommendation algorithms',
        'Managing social features and privacy',
        'Integrating with external book APIs'
      ]
    },
    links: {
      github: 'https://github.com/thacuriousbuilder/booklist',
      figma: 'https://figma.com/file/booklist-design'
    }
  },
  {
    id: 'mindful-timer',
    title: 'Mindful Timer',
    category: 'utility',
    status: 'planning',
    date: '2025-02-01',
    tags: ['Meditation', 'Focus', 'Wellness', 'Audio'],
    timeline: {
      concept: '2024-12-01',
      launch: '2025-04-01'
    },
    content: {
      summary: 'A beautiful timer app designed for meditation, focus sessions, and mindfulness practices with customizable ambient sounds.',
      keyFeatures: [
        'Customizable timer durations',
        'Ambient sound library',
        'Guided meditation sessions',
        'Focus mode with website blocking',
        'Progress tracking and streaks'
      ],
      techStack: ['React Native', 'Expo AV', 'Firebase', 'TypeScript'],
      challenges: [
        'Curating high-quality ambient sounds',
        'Implementing effective focus blocking',
        'Creating engaging guided content'
      ]
    },
    links: {
      github: 'https://github.com/thacuriousbuilder/mindful-timer',
      figma: 'https://figma.com/file/mindful-timer-design'
    }
  },
  {
    id: 'code-snippets',
    title: 'Code Snippets',
    category: 'utility',
    status: 'planning',
    date: '2024-09-15',
    tags: ['Development', 'Code', 'Productivity', 'Sharing'],
    timeline: {
      concept: '2024-06-01',
      development: '2024-07-01',
      launch: '2024-09-15',
      updates: [
        '2024-10-01: Added team collaboration',
        '2024-11-01: Implemented version control',
        '2024-12-01: Added VS Code extension'
      ]
    },
    content: {
      summary: 'A powerful code snippet manager with syntax highlighting, search capabilities, and easy sharing for developers.',
      keyFeatures: [
        'Syntax highlighting for 100+ languages',
        'Advanced search and filtering',
        'Team collaboration features',
        'VS Code extension integration',
        'Version control for snippets'
      ],
      techStack: ['Next.js', 'Prism.js', 'PostgreSQL', 'TypeScript', 'Tailwind CSS'],
      challenges: [
        'Implementing comprehensive syntax highlighting',
        'Building efficient search functionality',
        'Creating seamless VS Code integration'
      ]
    },
    links: {
      live: 'https://codesnippets.app',
      github: 'https://github.com/thacuriousbuilder/code-snippets',
      docs: 'https://docs.codesnippets.app'
    }
  }
]

export function getAppById(id: string): IndieApp | undefined {
  const app = indieApps.find(app => app.id === id)
  // Only return apps that are not in planning status
  return app && app.status !== 'planning' ? app : undefined
}

export function getAllApps(): IndieApp[] {
  return indieApps
    .filter(app => app.status === 'live' || app.status === 'beta' || app.status === 'development')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getAppsByCategory(category: IndieApp['category']): IndieApp[] {
  return indieApps
    .filter(app => app.status === 'live' || app.status === 'beta' || app.status === 'development')
    .filter(app => app.category === category)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
} 