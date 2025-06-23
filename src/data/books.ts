export interface BookReview {
  id: string
  title: string
  author: string
  publishedYear: string
  category: string
  reviewDate: string
  status: 'published' | 'draft' | 'upcoming'
  coverImage?: string
  review: {
    introduction: string
    whatILoved: string
    keyTakeaways: string[]
  }
  quotes: Array<{
    text: string
    page: string
  }>
  media?: Array<{
    src: string
    alt?: string
    caption?: string
  }>
}

export const books: BookReview[] = [
  {
    id: 'the-bright-continent',
    title: 'The Bright Continent: Breaking  Rules & Making Change in Modern Africa',
    author: 'Dayo Olopade',
    publishedYear: '2014',
    category: 'Africa',
    reviewDate: '06/22/2025',
    status: 'published',
    coverImage: '/images/books/Bright-continent.jpg',
    review: {
      introduction: 'When I first picked up "The Bright Continent," I did not know what to expect. But to my delight what I found was an exploration of the innovative solutions and resilient systems that Africans have built to navigate around dysfunctional formal institutions.',
      whatILoved: 'Olopade masterfully reframes the conversation about Africa by introducing her concept of "kanju"—the specific creativity born from African difficulty. Rather than viewing constraints as limitations, she demonstrates how they\'ve fostered remarkable innovation and resourcefulness. Her five maps (Family, Technology, Commerce, Nature, and Youth) provide a brilliant framework for understanding the continent\'s authentic social and economic dynamics that exist parallel to—and often more effectively than—formal state structures.',
      keyTakeaways: [
        'The importance of understanding informal economies and networks that actually drive African societies',
        'How technological leapfrogging and mobile innovation are transforming daily life across the continent', 
        'Why traditional development aid often fails by ignoring existing local solutions and social structures',
        'The power of youth demographics and entrepreneurship in shaping Africa\'s future',
        'How resilience and adaptability, born from adversity, create unique competitive advantages'
      ]
    },
    quotes: [
      {
        text: 'kanju—the specific creativity born from African difficulty',
        page: '31'
      },
      {
        text: 'Don\'t think, but look! The continent needs to be seen and heard, not imagined and then ritually dismissed.',
        page: '13'
      },
      {
        text: 'Here is some prosperity porn: Africa provides a higher rate of return on investment than any other developing region of the world—including the celebrated "BRIC" nations of Brazil, Russia, India, and China.',
        page: '163'
      },
      {
        text: 'The median age is nineteen. Seventy percent of sub-Saharan Africa\'s population is less than thirty years old—the highest proportion in the world.',
        page: '253'
      }
    ],
    // media: [
    //   {
    //     src: '/images/books/program-programmer-cover.jpg',
    //     alt: 'The Program Programmer book cover',
    //     caption: 'The cover of The Program Programmer showing programming patterns'
    //   },
    //   {
    //     src: '/images/books/program-programmer-diagram.jpg',
    //     alt: 'Programming patterns diagram',
    //     caption: 'A visual representation of common programming patterns discussed in the book'
    //   }
    // ]
  },
  {
    id: 'the-technological-republic',
    title: 'The Technological Republic',
    author: 'Alexander C. Karp And Nicholas Zamiska',
    publishedYear: '2025',
    category: 'Technology',
    reviewDate: '',
    status: 'upcoming',
    coverImage: '/images/books/technological-republic.jpg',
    review: {
      introduction: 'Trading Systems offers a fascinating look at how systematic approaches can be applied to financial markets. The book bridges the gap between traditional trading wisdom and modern algorithmic approaches.',
      whatILoved: 'The practical examples and case studies make complex trading concepts accessible. The author does an excellent job of explaining both the theory and real-world application of trading systems.',
      keyTakeaways: [
        'The importance of systematic thinking in trading',
        'How to design and test trading strategies',
        'Risk management principles for algorithmic trading',
        'The balance between automation and human oversight'
      ]
    },
    quotes: [
      {
        text: 'The best trading systems are those that align with your risk tolerance and market understanding.',
        page: '23'
      },
      {
        text: 'Automation can eliminate emotional biases, but it cannot replace sound judgment.',
        page: '67'
      },
      {
        text: 'Risk management is not about avoiding losses, but about controlling them.',
        page: '134'
      }
    ]
  },
  {
    id: 'american-kingpin',
    title: 'American Kingpin: The Epic Hunt for the criminal master mind of the Silk Road ',
    author: 'Nick Bilton',
    publishedYear: '2019',
    category: 'Technology',
    reviewDate: '',
    status: 'upcoming',
    coverImage: '/images/books/american-kingpin.jpg',
    review: {
      introduction: 'Security Engineering is a masterclass in understanding how to build systems that can withstand real-world attacks. Anderson\'s approach combines theoretical rigor with practical insights.',
      whatILoved: 'The depth and breadth of coverage is impressive. Anderson doesn\'t just explain security concepts—he shows how they apply to real systems and real threats.',
      keyTakeaways: [
        'Security is a property of entire systems, not individual components',
        'Understanding the attacker\'s perspective is crucial',
        'Security engineering requires both technical and social considerations',
        'The importance of threat modeling and risk assessment'
      ]
    },
    quotes: [
      {
        text: 'Security is not a product, but a process.',
        page: '15'
      },
      {
        text: 'The attacker only needs to find one vulnerability; the defender must protect against all of them.',
        page: '89'
      },
      {
        text: 'Good security engineering starts with understanding what you\'re trying to protect.',
        page: '156'
      }
    ]
  }
]

export function getBookById(id: string): BookReview | undefined {
  const book = books.find(book => book.id === id)
  // Only return published books, not drafts or upcoming
  return book && book.status === 'published' ? book : undefined
}

export function getAllBooks(): BookReview[] {
  return books
    .filter(book => book.status === 'published' || book.status === 'upcoming')
    .sort((a, b) => new Date(b.reviewDate).getTime() - new Date(a.reviewDate).getTime())
} 