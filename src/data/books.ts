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

The book forced me to confront uncomfortable questions about civic duty in the tech sector. Karp's critique of Silicon Valley's "disembodied generation", brilliant minds who enjoy the protection of American security while avoiding any responsibility for maintaining it, resonated deeply. His argument isn't just philosophical; it's practical. The partnership between public innovation and private execution has the power to redefine society, and that redefinition can go either way depending on whether we embrace this responsibility or retreat from it.

What struck me most was how Karp reframes government work not as bureaucratic drudgery but as the ultimate engineering challenge, solving problems at scale that actually matter. His vision of the "technological republic" isn't about government control but about intelligent cooperation that harnesses both sectors' strengths.`,
      whatILoved: `**The Engineering Mindset Philosophy:** Karp's emphasis on "looking closely while suspending judgment" and his concept that "nothing of consequence is built in a straight line" provided a compelling framework for approaching complex problems with pragmatic flexibility.

**Critique of "Luxury Beliefs":** His analysis of how privileged positions allow people to advocate for policies they'll never experience the consequences of was particularly sharp and relevant.

**The Status vs. Substance Dynamic:** The exploration of how organizational hierarchies can either enable or stifle innovation, drawing from improvisational theater concepts, offered fresh insights into corporate culture.`,
      keyTakeaways: [
        '**Public-Private Partnership is Essential:** True technological progress requires symbiotic cooperation between government research capacity and private sector execution, not ideological separation.',
        '**Results Must Matter Over Performance:** The shift from outcome-based evaluation to performative discourse represents a dangerous trend that prioritizes messaging over actual problem-solving.',
        '**Collective Identity Enables Innovation:** Shared purpose and national identity aren\'t constraints on creativity but necessary foundations for sustained technological advancement.',
        '**The Engineering Mindset is Transferable:** The principles of observation, pragmatism, and iterative problem-solving that drive technological innovation can and should be applied to social and political challenges.',
        '**Partnership Quality Determines Societal Direction:** The relationship between public and private sectors has the power to redefine society for better or worse, making its conscious cultivation crucial.'
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
      introduction: `Rather than viewing focus as something that just happens when we eliminate distractions, Newport presents deep work as a proactive process, an environment and mindset you deliberately create. This shift from passive to active concentration was revelatory.
  
  The book's strength lies in its systematic approach to building what Newport calls "concentration stamina." The neurological explanation of myelin growth particularly resonated with me, the idea that focused practice literally builds fatty tissue around neurons, making you faster and more efficient at skills. This biological foundation makes the case for sustained, distraction-free work sessions compelling beyond just productivity rhetoric.
  
  What struck me most was how Newport positions deep work not just as a professional skill but as a path to meaning and satisfaction. His argument that "a deep life is a good life" connects the practical techniques to larger questions about fulfillment and human potential.`,
  
      whatILoved: `**The Four Philosophies of Deep Work:** Newport's framework - monastic, bimodal, rhythmic, and journalistic, provides concrete approaches rather than vague advice. The rhythmic philosophy particularly resonated with me, as it transforms deep work into a sustainable daily habit rather than something that requires perfect conditions.
  
  **The Myelin Growth Concept:** The neurological explanation of why focused practice works was fascinating. Understanding that "focusing intensely on a specific skill forces relevant circuits to fire in isolation, triggering myelination" gave me a scientific framework for why distraction-free work is so crucial.
  
  **The 4DX Framework:** The discipline of execution approach, focusing on wildly important goals, acting on lead measures, keeping score, and creating accountability, provided a business-tested methodology for implementing deep work practices.
  
  **Practical Strategies:** The book goes beyond theory with concrete techniques like scheduling every minute, quantifying task depth, and the craftsman approach to tool selection. These aren't just concepts but actionable frameworks.`,
  
      keyTakeaways: [
        '**Deep Work is a Created Environment:** Success requires proactively designing your workspace, schedule, and habits to support sustained focus, it\'s not something that happens naturally in our distracted world.',
        '**Attention is a Skill That Must be Trained:** Like physical fitness, the ability to concentrate deeply requires deliberate practice and progressive building of what Newport calls "concentration stamina."',
        '**The Rhythmic Philosophy is Most Sustainable:** Making deep work a consistent daily habit is more practical than waiting for perfect conditions or large blocks of time.',
        '**Quality Work = Intensity × Time:** This formula emphasizes that how you work matters as much as how long you work, focused effort produces exponentially better results than distracted effort.',
        '**Myelin Growth Explains Why Focus Works:** The neurological basis for skill development requires isolation of relevant circuits, which only happens through sustained, distraction-free practice.'
      ]
    },
    quotes: [
      {
        text: 'High quality work = intensity focus x time spent',
        page: 'Throughout'
      },
      {
        text: 'The ability to quickly master new things and the ability to produce at an elite level, with both speed and quality, if you don\'t produce you won\'t thrive',
        page: 'Chapter 1'
      },
      {
        text: 'Your world is what you pay attention to, skill management of your attention dictates your perception',
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
    id: 'ai-2041',
    title: 'AI 2041',
    author: 'Kai-Fu Lee and Chen Qiufan',
    publishedYear: '2021',
    category: 'Technology',
    reviewDate: '08/16/2025',
    status: 'published',
    coverImage: '/images/books/ai2041.jpeg',
    review: {
      introduction: `"AI 2041: Ten Visions for Our Future" pairs ten short stories by science fiction author Chen Qiufan with ten explanatory essays by AI researcher and venture capitalist Kai-Fu Lee, each covering a different technology and where it might realistically stand by the year 2041. The format works because the two halves do genuinely different jobs: Lee's essays explain what's technically plausible and why, while Chen's stories dramatize what it might actually feel like to live with that technology once it's fully woven into daily life, at work, at home, in a hospital, behind the wheel of a car.

Across chapters on deep learning, computer vision, natural language processing, healthcare, virtual reality, autonomous vehicles, quantum computing, labor displacement, and post-scarcity economics, the book is consistently better at describing the technology than at resolving the human problems it introduces, which, more often than not, is the more interesting result.`,

      whatILoved: `**Deep Learning & Objective Functions ("The Golden Elephant"):** This opening chapter follows a family in Mumbai whose insurance premiums rise and fall based on an AI's read of their daily choices, down to who their daughter falls in love with. Lee's essay explains how deep learning works and traces its origins back to a 1967 concept that only became viable once data and computing power caught up decades later, then turns to the "objective function," the single goal an AI is trained to optimize, and how even a simple one can produce discriminatory outcomes with no explicit intent behind them.

**Computer Vision, GANs & Deepfakes ("Gods Behind the Masks"):** Set in Lagos, this chapter follows a young man who uses deepfake technology both to hide his identity from the authorities and to impersonate women on dating apps. Lee's essay explains GANs, a forger network and a detective network trained against each other in permanent competition, which makes the resulting arms race feel structurally unwinnable rather than just a plot device.

**NLP, GPT-3 & AI Companions ("Twin Sparrows"):** This chapter follows two Korean orphans, each given a personalized AI companion that manages their schedules, tutors them, and grows alongside them over years. Lee pairs this with a technical history of natural language processing through GPT-3, and the fiction does the chapter's best work by raising real, mostly unaddressed questions about parental oversight of a child's AI relationship.

**Healthcare & Robotics ("Contactless Love"):** Set during a pandemic the book treats as a template for the next one, this chapter follows two people navigating quarantine and an almost entirely AI-mediated healthcare system. The digital health profile system depicted here, a biosensor membrane required to access transportation and basic services, is treated as background world-building but deserved more direct scrutiny.

**Virtual, Augmented & Mixed Reality ("My Haunting Idol"):** Set in Tokyo, this chapter follows an obsessive fan who becomes a beta tester for a project recreating her deceased idol as an interactive virtual character. Its darkest material, "digital immortality," raises genuine copyright and consent questions the book poses but doesn't resolve.

**Autonomous Vehicles ("The Holy Driver"):** This chapter follows a former delivery driver replaced by autonomous vehicles and a young gamer recruited into a project testing human versus AI driving decisions. The "augmented roads" proposal, redesigning infrastructure around AI's limitations, is one of the book's more pragmatic ideas, and one with real-world precedent already.

**Quantum Computing & Autonomous Weapons ("Quantum Genocide"):** Set in Munich, this chapter covers two very different technologies in one story. The autonomous weapons material is where the book is at its most urgent, laying out the tradeoff between keeping a human in the decision loop and removing one for speed and precision.

**Job Displacement & UBI ("The Job Savior"):** Set in San Francisco, this chapter follows a job reallocation agent whose growing disillusionment with her own work drives the story. Rather than simply arguing for or against UBI, the fiction shows a system collapsing under real institutional pressure, which lands with more force than the essay's own supporting statistics.

**Post-Scarcity & Happiness ("Dreaming of Plenitude"):** The book's closing chapter is set in a version of Australia transformed by clean energy and automation. Lee names this state "plenitude" and is honest enough to undercut his own optimism about how achievable it really is, closing the book on an aspirational note rather than a prediction.`,

      keyTakeaways: [
        '**The Essay/Fiction Pairing Is the Book\'s Greatest Strength:** The fiction consistently reveals consequences and tensions that the nonfiction essays describe but don\'t fully resolve.',
        '**AI Bias Is a Design Byproduct, Not Intent:** Bias in AI systems, as the book depicts it, isn\'t usually intentional, it\'s a byproduct of how objective functions are designed, which makes it harder to detect and correct than more overt discrimination.',
        '**The Deepfake Arms Race Is Structurally Unwinnable:** Detection alone can\'t win against a GAN\'s built-in ability to retrain and upgrade itself, which makes the book\'s proposed shift toward capture-point authentication one of its more forward-looking ideas.',
        '**GPT-3\'s Core Flaw Still Holds Up:** The book\'s criticism that GPT-3 doesn\'t know what it doesn\'t know remains an accurate description of hallucination in AI systems today.',
        '**The Book Raises Hard Questions More Than It Answers Them:** Child AI companions, digital immortality, and biometric happiness tracking are all left open, a fair approach for speculative fiction but one that leaves several threads unresolved.',
        '**Human-in-the-Loop Is the More Defensible Position:** On both autonomous weapons and autonomous vehicles, the book lays out real tradeoffs between safety and performance without forcing a conclusion, but keeping a human in the loop is the stronger stance in both cases.',
        '**Timeline Estimates Are Specific But Optimistic:** The book\'s technical predictions, like 40 percent of jobs automated by 2033 and an 80-percent chance of working quantum computers by 2041, are commendably falsifiable, even where they feel aggressive.',
        '**UBI and Plenitude Relocate the Same Unresolved Question:** Both chapters are the book\'s most honest moments of self-critique, each acknowledging through fiction rather than argument that the proposed fix doesn\'t fully solve the underlying problem of human purpose and institutional trust.'
      ]
    },
    quotes: [
      {
        text: 'No matter how we hide or if we change our surnames, our data is a shadow.',
        page: 'Page 64'
      },
      {
        text: 'The core of the issue is the simplicity of the objective function.',
        page: 'Page 79'
      },
      {
        text: 'Longer term, the biggest problem is that GAN has a built-in mechanism to "upgrade" the forger network.',
        page: 'Page 126'
      },
      {
        text: 'I consider the obsession with AGI to be a narcissistic human tendency to view ourselves as the gold standard.',
        page: 'Page 205'
      },
      {
        text: 'We humans have a good grasp on what we know and what we don\'t know. GPT-3 does not.',
        page: 'Page 200'
      },
      {
        text: 'Parents will never again have as much insight into their child as the child\'s AI.',
        page: 'Page 166'
      },
      {
        text: 'Such "digital immortality" or "digital reincarnation" will trigger many privacy and moral issues.',
        page: 'Page 337'
      },
      {
        text: 'The prowess of autonomous weapons largely comes from the speed and precision gained from not having a human in the loop.',
        page: 'Page 482'
      },
      {
        text: 'First, I\'ll describe quantum computing, which I believe has an 80-percent chance of working by 2041.',
        page: 'Page 468'
      },
      {
        text: 'UBI only prolong despair.',
        page: 'Page 491'
      },
      {
        text: 'We want something that is good, not just better than nothing.',
        page: 'Page 498'
      },
      {
        text: 'A successful transition to plenitude would require an improbable shift for corporations to prioritize social responsibility over profit.',
        page: 'Page 658'
      }
    ]
  },

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