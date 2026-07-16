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
    status: 'published',
    summary:
      'My thoughts and takeaways from Dario Amodei\'s essay on the future of AI',
    content: `# Introduction
Dario Amodei presents an optimistic vision of what powerful AI could achieve in the 5-10 years once it's developed, ranging from curing most diseases to revolutionizing mental health, from eliminating poverty to transforming governance. Amodei examines the potential of powerful AI to amplify human progress.

By "powerful AI," he means a system broadly similar to today's LLMs, though potentially built on different architectures or composed of multiple interacting models, that exceeds the most capable humans across many intellectual tasks, including proving unsolved theorems, writing high-quality literature, and generating complex software from scratch. It would have access to the same virtual interfaces as a human (text, audio, video, mouse and keyboard, and the internet), could autonomously execute tasks over hours, days, or weeks, and, despite lacking a physical body, could control robots or laboratory equipment through software. Crucially, it could be deployed at a massive scale, with millions of instances operating in parallel at speeds far exceeding human cognition.
After sitting with this essay, I found myself agreeing with much of Amodei's vision while questioning the assumptions underneath it. He may well be right about what AI could achieve, but the timeline feels overly optimistic, and the path from here to there remains unclear.

## The Cult of Certainty
Amodei opens the essay by explaining why he and Anthropic have typically avoided talking about AI's benefits. He offers four reasons: he wants to maximize leverage by focusing on risks (which he believes can still be changed, while benefits seem inevitable due to market forces), avoid the perception of propaganda that comes when AI companies list their own product's upsides, avoid grandiosity where AI leaders sound like prophets of a coming salvation, and avoid sci-fi baggage that makes serious claims sound like fantasy.
Of these four, the point about grandiosity resonates most with me. There's something genuinely dangerous about AI leaders positioning themselves as prophets. It creates a cultish dynamic where followers stop thinking critically, breeding both unrealistic expectations and unnecessary fear.
But here's where I diverge from Amodei: many AI leaders, consciously or not, exploit our "microwave society" mentality. We want results now. These leaders understand this psychology and push a technology that is fundamentally unstable, unpredictable, and not ready for macro-scale deployment. AI is in its infancy. The promises of solving major health crises and eliminating economic disparity aren't necessarily wrong; they're premature. And premature promises create a public that either expects miracles or rejects the technology as hype.

### Medical Miracles and Human Limits
Amodei's medical predictions are staggering. He argues that most of biology's progress comes from a small number of major discoveries, roughly one per year, that provide new tools for measuring or intervening in biological systems. Powerful AI, he claims, could act as a "virtual biologist" running experiments, inventing new methods, and accelerating these breakthroughs by 10x or more. The result is what he calls the "compressed 21st century": achieving in 5-10 years what would otherwise take 100. His specific predictions include the reliable prevention of infectious diseases, the elimination of most cancers, effective cures for genetic diseases, and a doubling of the human lifespan.
Some of this excites me. Reliable prevention of infectious diseases would address real suffering happening right now, particularly in the developing world. But the lifespan-doubling goal strikes me as fundamentally misguided, rooted in a worldview that treats death as a problem to be solved rather than as a natural boundary. What is the "right" age to die? This feels less like addressing suffering and more like existential greed. I'd rather focus energy on the diseases causing premature death than chase arbitrary extensions of lifespan. 
Amodei extends similar optimism to mental health. He argues AI-accelerated neuroscience could cure most mental illnesses, enable genetic prevention of psychiatric conditions, and even improve the baseline human emotional experience, expanding what he calls "cognitive and mental freedom." These predictions are potentially transformative, but here I get cautious: emotional experiences should be guided, not altered. Using AI to develop better therapeutic approaches for trauma? Thats Genuine treatment. Chemically altering someone's emotional baseline when they're not ill? That crosses into dependency rather than cure.
And there's an obstacle Amodei doesn't address: trust. Post-COVID institutional distrust runs deep. The technology might be ready before society is.

### The Global Equity Question
Amodei writes that "powerful AI should help the developing world catch up to the developed world, even as it revolutionizes the latter." He imagines AI accelerating the distribution of health interventions, driving economic growth, improving food security, and mitigating climate change in the world's poorest regions. It's a hopeful vision, but the path to make such a thing happen is not straightforward.
Left to market forces alone, AI will widen the gap, not narrow it. Cutting-edge development happens in wealthy countries with the resources to build massive computing clusters. The benefits accrue to those who control the technology.
A different outcome requires deliberate investment in the human capital of developing nations. Not aid in the traditional sense, but investment in homegrown solutions, training people to solve their own problems, giving them access to knowledge, building capability rather than dependency. AI should assist this process, not replace it. The goal is to help developing nations learn to fish with AI assistance, not have AI catch fish for them while they become passive consumers of technology designed elsewhere.
This tension becomes even sharper in Amodei's discussion of geopolitics. He argues that democracies must control powerful AI to prevent "AI-powered authoritarianism," and proposes what he calls an "entente strategy": a coalition of democracies that gains a clear AI advantage by securing supply chains, scaling quickly, and blocking adversaries' access to critical resources like semiconductor chips.
I struggle with this. On the one hand, I advocate for AI to be universally accessible. On the other hand, not everyone has good intentions for humanity. A cold war over AI has already begun between the US and China. Honestly, I'd rather the US have AI supremacy than China. But should Chinese citizens be denied medical breakthroughs because of their government? I struggle with this.
What I do know is that these questions can't be answered by one company or one nation. My imperfect solution would be a UN-style delegation with representatives from each country, tasked with ensuring AI is democratized and serves humanity, not any single entity. The foundation would be built on universal human needs: food, shelter, and belonging. Enforcement through sanctions, as international governance works now. Is this realistic? Maybe not. But leaving AI governance to market forces and geopolitical competition seems far worse

### The Economics of Meaning
Toward the end of the essay, Amodei confronts perhaps the hardest question: what happens to human meaning and economic survival when AI can do everything better than we can? His answer is layered. In the short term, he argues that as long as AI is only better at 90% of a job, the remaining 10% will make humans highly leveraged and even create new roles. But he admits that in the long run, AI will become so cheap and broadly effective that our current economic system will no longer make sense. He floats possibilities—universal basic income, an AI-driven economy that rewards humans based on values, even a whimsical reference to "Whuffie points" from science fiction —but he's honest that no one has yet envisioned the answer well.
Regarding meaning, Amodei suggests that it comes primarily from human relationships and connections, not from economic labor. Here, he gets something crucial right: meaning doesn't come from labor itself, but from contribution and usefulness. We don't find self-worth in job titles; we find it in the feeling of being of use to someone. We've conflated work with worth because paid labor is our primary way of contributing. Separate those things, and job loss becomes less existential.
I'm skeptical that Amodei's "10% leverage" argument will hold forever, but I do believe there will always be value in human interaction, not because we're better, but because we have an innate need to connect and belong. AI can't fully replace that.
My intuition for a post-AI economy points toward something like a microservices or small business economy, closer to how Upwork operates, but more distributed and direct. A world of freelancers, indie developers, artists creating for niche audiences, and people exchanging services directly. Even something resembling barter: I teach your kid piano, you fix my roof. Currency might remain, but the structure would be more relational and less abstracted. Utopian/optimistic? Maybe. But any viable system must preserve what makes us human: the need to contribute, connect, and feel that our presence matters.

### A Call for Better Questions
I'm left with a mixture of hope and frustration.
The hope comes from Amodei's willingness to articulate a positive vision when discourse has been dominated by boosterism or fear-mongering. He's right that we should be fundamentally optimistic about AI's potential.
The frustration comes from three places.
Timeline. Amodei assumes AGI arrives as early as 2026, with the transformation in 5-10 years afterward. I don't believe AGI is coming that soon—I'm not even sure we can create such a thing, though we'll get close. Human nature resists rapid change. Governments are static. Building trust, navigating regulation, and retraining workforces takes time. A systemic, iterative approach that is slow and holistic serves humanity better than a compressed century that bulldozes social and ethical guardrails.
Distribution. Amodei gestures toward equity but is vague about mechanisms. How does Anthropic actually plan to ensure benefits reach everyone? Market forces alone won't solve this.
The blind spot. Most AI leaders are so removed from the daily struggles that they can't see how their optimistic timelines are causing real suffering now. Mass layoffs. New graduates are locked out of entry-level positions, being automated away. These disruptions don't touch Silicon Valley executives. I don't think this is malicious, but the profit motive is the primary driver, and the optimistic vision is secondary.
So here's my takeaway: question AI leaders. Not reflexively, but thoughtfully. Ask about timelines and whether they're realistic or driven by competitive pressure. Ask about distribution mechanisms. Ask about guardrails. Ask who gets to decide what problems AI should solve and whose values shape those decisions.
Pandora's box is open. There's no returning to a pre-AI world. But the story doesn't end with everything terrible flying out; hope remains. We can embrace AI's potential while demanding it be developed responsibly, deployed equitably, and governed democratically. Amodei's vision gives us something to aim for, but a vision without a credible path is just a dream. And dreams, however beautiful, don't change the world. Choices do.
The question now is: what choices will we make?

`,
    tags: [ 'Tech', 'AI'],
    date: '2024-05-01',
  },
  {
    title: 'Micro Businesses Are The Present ',
    slug: 'micro-business-are-the-present',
    status: 'draft',
    summary:
      'How AI is changing the workforce and creating new economic opportunities.',
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