export type CuriosityPost = {
  title: string;
  slug: string;
  status: 'published' | 'draft' | 'upcoming';
  summary: string;
  content: string;
  tags: string[];
  date: string; // ISO date string
};

export const curiosityPosts: CuriosityPost[] = [
  {
    title: 'Machines Of Loving Grace',
    slug: 'machines-of-loving-grace',
    status: 'upcoming',
    summary:
      'My thoughts and takeaways from Dario Amodei\'s essay on the future of AI',
    content: `# Introduction
Building side projects has always been a source of joy and learning for me. In this post, I want to share why I believe everyone should try building something on their own.

## The Freedom to Experiment
When you work on your own project, you have the freedom to try new technologies, approaches, and ideas without the constraints of a formal job or client work.

### Learning by Doing
Nothing beats hands-on experience. Every side project is an opportunity to learn, fail, and grow.

## Building a Portfolio
Side projects are a great way to showcase your skills to potential employers or collaborators. They are living proof of your initiative and creativity.

# Conclusion
If you've been thinking about starting a side project, go for it! The journey is as rewarding as the outcome.`,
    tags: [ 'Tech', 'AI'],
    date: '2024-05-01',
  },
  // {
  //   title: 'The Future of Human-AI Collaboration',
  //   slug: 'future-of-human-ai-collaboration',
  //   status: 'upcoming',
  //   summary: 'A preview of my upcoming thoughts on how humans and AI will work together in the next decade.',
  //   content: '',
  //   tags: ['Tech', 'AI'],
  //   date: '2024-07-01',
  // },
//   {
//     title: 'The Ethics of AI: My Thoughts',
//     slug: 'the-ethics-of-ai-my-thoughts',
//     status: 'draft',
//     summary:
//       'Some personal musings on the ethical challenges and opportunities presented by artificial intelligence.',
//     content: `# The Promise of AI
// Artificial intelligence has the potential to transform society for the better, but it also raises important ethical questions.

// ## Bias and Fairness
// One of the biggest concerns is ensuring that AI systems are fair and do not perpetuate existing biases.

// ### Transparency
// We need to understand how AI systems make decisions, especially in high-stakes domains like healthcare and criminal justice.

// ## Responsibility
// Who is responsible when an AI system causes harm? This is a question that society must grapple with as AI becomes more prevalent.

// # Final Thoughts
// Ethical AI requires collaboration between technologists, policymakers, and the public. Ongoing dialogue is essential.`,
//     tags: ['Tech'],
//     date: '2024-05-10',
//   },
//   {
//     title: 'How I Organize My Reading Notes',
//     slug: 'how-i-organize-my-reading-notes',
//     status: 'published',
//     summary:
//       'A look at my process for taking, organizing, and revisiting book notes for learning and creativity.',
//     content: `# My Note-Taking Philosophy
// Taking notes while reading helps me retain information and connect ideas across books.

// ## Tools I Use
// I use a combination of digital and analog tools, including Notion, Obsidian, and a simple notebook.

// ### Digital Notes
// Digital tools make it easy to search, link, and revisit notes. I tag notes by topic and book.

// ### Analog Notes
// Sometimes, writing by hand helps me process information more deeply.

// ## Reviewing and Revisiting
// I regularly review my notes and summarize key insights. This helps reinforce learning and sparks new ideas.

// # Conclusion
// Organizing reading notes is a personal process—find what works for you and stick with it!`,
//     tags: ['Personal'],
//     date: '2024-05-15',
//   },
]; 