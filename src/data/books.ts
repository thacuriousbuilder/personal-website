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
    reviewDate: '07/06/2025',
    status: 'published',
    coverImage: '/images/books/technological-republic.jpg',
    review: {
      introduction: `Karp's "The Technological Republic" fundamentally challenged my understanding of where technological innovation truly originates and who bears responsibility for its direction. Rather than accepting the Silicon Valley mythology of purely private sector disruption, Karp methodically demonstrates how every major technological breakthrough has emerged from public-private partnerships, with government laying the foundational research that private companies later commercialize and scale.

The book forced me to confront uncomfortable questions about civic duty in the tech sector. Karp's critique of Silicon Valley's "disembodied generation" - brilliant minds who enjoy the protection of American security while avoiding any responsibility for maintaining it - resonated deeply. His argument isn't just philosophical; it's practical. The partnership between public innovation and private execution has the power to redefine society, and that redefinition can go either way depending on whether we embrace this responsibility or retreat from it.

What struck me most was how Karp reframes government work not as bureaucratic drudgery but as the ultimate engineering challenge - solving problems at scale that actually matter. His vision of the "technological republic" isn't about government control but about intelligent cooperation that harnesses both sectors' strengths.`,
      whatILoved: `**The Engineering Mindset Philosophy:** Karp's emphasis on "looking closely while suspending judgment" and his concept that "nothing of consequence is built in a straight line" provided a compelling framework for approaching complex problems with pragmatic flexibility.

**Critique of "Luxury Beliefs":** His analysis of how privileged positions allow people to advocate for policies they'll never experience the consequences of was particularly sharp and relevant.

**The Status vs. Substance Dynamic:** The exploration of how organizational hierarchies can either enable or stifle innovation, drawing from improvisational theater concepts, offered fresh insights into corporate culture.`,
      keyTakeaways: [
        '**Public-Private Partnership is Essential:** True technological progress requires symbiotic cooperation between government research capacity and private sector execution, not ideological separation.',
        '**Results Must Matter Over Performance:** The shift from outcome-based evaluation to performative discourse represents a dangerous trend that prioritizes messaging over actual problem-solving.',
        '**Collective Identity Enables Innovation:** Shared purpose and national identity aren\'t constraints on creativity but necessary foundations for sustained technological advancement.',
        '**The Engineering Mindset is Transferable:** The principles of observation, pragmatism, and iterative problem-solving that drive technological innovation can and should be applied to social and political challenges.',
        '**Partnership Quality Determines Societal Direction:** The relationship between public and private sectors has the power to redefine society for better or worse - making its conscious cultivation crucial.'
      ]
    },
    quotes: [
      {
        text: 'The reconstruction of a technological republic, in the United States and elsewhere, will require a re-embrace of collective experience, of shared purpose and identity, of civic rituals that are capable of binding us together.',
        page: '268'
      },
      {
        text: 'Our argument is that the path forward will involve a reconciliation of a commitment to the free market, and its atomization and isolation of individual wants and needs, with the insatiable human desire for some form of collective experience and endeavor.',
        page: '267'
      },
      {
        text: 'The future belongs to those who, rather than hide behind an often hollow claim of accommodating all views, fight for something singular and new.',
        page: '252'
      },
      {
        text: 'Nothing of consequence is built in a straight line. A voracious pragmatism is needed, as well as a willingness to bend one\'s model of the world to the evidence at hand, not bend the evidence to one\'s model.',
        page: '202'
      },
      {
        text: 'The ability of free and democratic societies to prevail requires something more than moral appeal. It requires hard power, and hard power in this century will be built on software.',
        page: '55'
      }
    ]
  },
  {
    id: 'deep-work-rules',
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publishedYear: '2016',
    category: 'Productivity',
    reviewDate: '07/19/2024',
    status: 'published',
    coverImage: '/images/books/deep-work.jpeg',
    review: {
      introduction: `Rather than viewing focus as something that just happens when we eliminate distractions, Newport presents deep work as a proactive process - an environment and mindset you deliberately create. This shift from passive to active concentration was revelatory.
  
  The book's strength lies in its systematic approach to building what Newport calls "concentration stamina." The neurological explanation of myelin growth particularly resonated with me - the idea that focused practice literally builds fatty tissue around neurons, making you faster and more efficient at skills. This biological foundation makes the case for sustained, distraction-free work sessions compelling beyond just productivity rhetoric.
  
  What struck me most was how Newport positions deep work not just as a professional skill but as a path to meaning and satisfaction. His argument that "a deep life is a good life" connects the practical techniques to larger questions about fulfillment and human potential.`,
  
      whatILoved: `**The Four Philosophies of Deep Work:** Newport's framework - monastic, bimodal, rhythmic, and journalistic - provides concrete approaches rather than vague advice. The rhythmic philosophy particularly resonated with me, as it transforms deep work into a sustainable daily habit rather than something that requires perfect conditions.
  
  **The Myelin Growth Concept:** The neurological explanation of why focused practice works was fascinating. Understanding that "focusing intensely on a specific skill forces relevant circuits to fire in isolation, triggering myelination" gave me a scientific framework for why distraction-free work is so crucial.
  
  **The 4DX Framework:** The discipline of execution approach - focusing on wildly important goals, acting on lead measures, keeping score, and creating accountability - provided a business-tested methodology for implementing deep work practices.
  
  **Practical Strategies:** The book goes beyond theory with concrete techniques like scheduling every minute, quantifying task depth, and the craftsman approach to tool selection. These aren't just concepts but actionable frameworks.`,
  
      keyTakeaways: [
        '**Deep Work is a Created Environment:** Success requires proactively designing your workspace, schedule, and habits to support sustained focus - it\'s not something that happens naturally in our distracted world.',
        '**Attention is a Skill That Must be Trained:** Like physical fitness, the ability to concentrate deeply requires deliberate practice and progressive building of what Newport calls "concentration stamina."',
        '**The Rhythmic Philosophy is Most Sustainable:** Making deep work a consistent daily habit is more practical than waiting for perfect conditions or large blocks of time.',
        '**Quality Work = Intensity × Time:** This formula emphasizes that how you work matters as much as how long you work - focused effort produces exponentially better results than distracted effort.',
        '**Myelin Growth Explains Why Focus Works:** The neurological basis for skill development requires isolation of relevant circuits, which only happens through sustained, distraction-free practice.'
      ]
    },
    quotes: [
      {
        text: 'High quality work = intensity focus x time spent',
        page: 'Throughout'
      },
      {
        text: 'The ability to quickly master new things and the ability to produce at an elite level, with both speed and quality - if you don\'t produce you won\'t thrive',
        page: 'Chapter 1'
      },
      {
        text: 'Your world is what you pay attention to - skill management of your attention dictates your perception',
        page: 'Chapter 3'
      },
      {
        text: 'Great creative minds think like artists but work like accountants',
        page: 'Rule 1'
      },
      {
        text: 'The principle of least resistance: in a business setting without clear feedback on the impact of various behaviors to the bottom line, people tend toward behaviors that are easiest in the moment',
        page: 'Chapter 2'
      }
    ]
  },
  {
    id: 'the-right-it',
    title: 'The Right It',
    author: 'Alberto Savoia',
    publishedYear: '2019',
    category: 'Technology',
    reviewDate: '11/06/2024',
    status: 'published',
    coverImage: '/images/books/the-right-it.png',
    review: {
      introduction: `"The Right It" fundamentally challenged my approach to product development, shifting my perspective from "build first, find customers later" to "validate demand before building anything." This book came at the perfect time as I was working on my study app, Savantra, and had already started getting email signups for validation - reading Savoia's framework made me realize I was intuitively applying the fake door pretotype technique.
  
  The book's core insight that 90% of products fail in the market, regardless of how smart the teams building them are, was both sobering and liberating. It reinforced that market validation isn't just a nice-to-have - it's essential for survival. The immediate feedback I was getting from my email signups gave me much more confidence that Savantra was worth pursuing, and the book provided a framework for understanding why that validation mattered so much.`,
      
      whatILoved: `**The Pretotyping Toolkit:** The variety of pretotyping techniques (Mechanical Turk, Pinocchio, Fake Door, Facade, YouTube, One-Night Stand, Infiltrator, Relabel) provided concrete, actionable methods for testing ideas quickly and cheaply.
  
  **The Market Engagement Hypothesis (MEH):** The framework for expressing assumptions with numbers rather than vague words made testing much more precise and actionable.
  
  **"Skin in the Game" Validation:** The emphasis on meaningful commitment (validated emails, scheduled meetings, money invested) over superficial engagement (likes, comments, survey responses) was a crucial distinction.
  
  **Real-World Examples:** Stories like Airbnb's air mattress experiment and CarsDirect's facade approach made the concepts tangible and inspiring.`,
      
      keyTakeaways: [
        '**Market Validation Must Come First:** The traditional approach of building first and finding customers later is backwards - validate demand before investing in development.',
        '**Data Beats Opinions:** Focus on collecting your own fresh, relevant, trustworthy data rather than relying on focus groups, surveys, or other people\'s research.',
        '**Most Products Fail:** 90% of products fail in the market regardless of team competence - the "Law of Market Failure" is blind and affects even the smartest companies.',
        '**Test Cheap and Fast:** Use pretotyping techniques to gather market data quickly and inexpensively before committing significant resources.',
        '**Skin in the Game Matters:** Look for meaningful commitment from potential customers rather than casual interest.',
        '**Tweak Before You Pivot:** Don\'t abandon ideas after initial disappointing results - often small tweaks can dramatically change outcomes.'
      ]
    },
    quotes: [
      {
        text: 'Most new products will fail in the market - 90% of products fail regardless of how competently they are executed.',
        page: 'Chapter 1'
      },
      {
        text: 'The success equation only takes one key factor to mess up for the product to fail in the market.',
        page: 'Chapter 1'
      },
      {
        text: 'Your data needs to be Fresh, Relevant, Trustworthy, and Statistically significant.',
        page: 'Chapter 3'
      },
      {
        text: 'The best and most reliable way to get market data is to get Your Own Data (YODA).',
        page: 'Chapter 3'
      },
      {
        text: 'Testing now beats testing later - get your ideas out of thought-land and start testing with an attainable market size.',
        page: 'Chapter 7'
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