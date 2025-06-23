import Button from '@/components/Button'
import ProjectCard from '@/components/ProjectCard'
import { getAllBooks } from '@/data/books'
import { getAllApps } from '@/data/indieApps'
import { getAllProjects } from '@/data/cybersecurity'

export default function HomePage() {
  // Fetch books from the centralized data
  const allBooks = getAllBooks()
  
  // Get the first 3 books for the main page preview
  const featuredBooks = allBooks.slice(0, 3).map((book, index) => ({
    href: `/blog/${book.id}`,
    title: book.title,
    date: book.reviewDate,
    variant: "cover2cover" as const,
    placeholder: index === 0 ? "square" as const : index === 1 ? "circle" as const : "triangle" as const,
    coverImage: book.coverImage,
    comingSoon: book.status === 'upcoming',
  }))

  // Fetch indie apps from the centralized data
  const allApps = getAllApps()
  
  // Get the first 3 apps for the main page preview
  const featuredApps = allApps.slice(0, 3).map((app, index) => ({
    href: `/apps/${app.id}`,
    title: app.title,
    variant: "indie" as const,
    category: app.category.charAt(0).toUpperCase() + app.category.slice(1) as 'Productivity' | 'Security' | 'Social' | 'Utility' | 'Experimental',
    placeholder: index === 0 ? "square" as const : index === 1 ? "circle" as const : "triangle" as const,
    coverImage: app.media?.[0]?.src,
  }))

  // Fetch cybersecurity projects from the centralized data
  const allProjects = getAllProjects()
  
  // Get the first 3 projects for the main page preview
  const featuredProjects = allProjects.slice(0, 3).map((project, index) => ({
    href: `/cybersecurity/${project.id}`,
    title: project.title,
    description: project.description,
    variant: "cybersecurity" as const,
    category: project.category,
    placeholder: index === 0 ? "square" as const : index === 1 ? "circle" as const : "triangle" as const,
  }))

  // Social media icons
  const icons = {
    github: (
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    linkedin: (
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    email: (
      <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    twitter: (
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    )
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="mb-16">
      
        {/* Logo Shapes */}
        <div className="flex space-x-2 text-4xl font-medium mb-6">
          <span className="block w-12 h-12 bg-[#2b2b2b]"></span>
          <span className="block w-12 h-12 bg-[#2b2b2b] rounded-full"></span>
          <span className="block w-0 h-0 border-l-[24px] border-r-[24px] border-b-[40px] border-l-transparent border-r-transparent border-b-[#2b2b2b]"></span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Alhouseny Camara
        </h1>
        
        <div className="max-w-3xl space-y-4 text-gray-700 mb-8">
          <p>
            Welcome to my simple corner on the web—a space 
            to showcase curiosities, projects, and ideas.
          </p>
          
          <p>
            I enjoy exploring everything from app 
            development to security research/implementation and the 
            endless possibilities born from a curious 
            mindset.
          </p>
          
          <p className='font-bold'>
            Hope you&apos;re able to find something that sparks your curiosity!
          </p>
        </div>

        {/* Find me section */}
        <div>
          <p className="text-sm text-gray-600 mb-3">Find me on</p>
          <div className="flex gap-4">
            <Button href="https://www.linkedin.com/in/alhousenycamara/" external variant="secondary" size="sm" icon={icons.linkedin}>
              LinkedIn
            </Button>
            <Button href="https://github.com/thacuriousbuilder" external variant="secondary" size="sm" icon={icons.github}>
              GitHub
            </Button>
            <Button href="https://x.com/thacuriousb" external variant="secondary" size="sm" >
              X (Twitter)
            </Button>
          </div>
          <p className="text-sm font-bold text-gray-600 mt-4">
            Email me at: <span className="text-[#008080]">camaraalhouseny44@gmail.com</span>
          </p>
        </div>
      </section>

      {/* Cybersecurity Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-2">
          <a href="/cybersecurity" className="hover:text-[#008080] transition-colors">Cybersecurity</a>
        </h2>
        <p className="text-sm text-gray-600 mb-6">Projects & writeups</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard 
              key={index}
              href={project.href}
              title={project.title}
              description={project.description}
              variant={project.variant}
              category={project.category}
              placeholder={project.placeholder}
            />
          ))}
        </div>
      </section>

      {/* Cover 2 Cover Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">
          <a href="/blog" className="hover:text-[#008080] transition-colors">Cover 2 Cover</a>
        </h2>
        <p className="text-sm text-gray-600 mb-6">Book notes and reflections</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featuredBooks.map((book, index) => (
            <ProjectCard 
              key={index}
              href={book.href}
              title={book.title}
              date={book.date}
              variant={book.variant}
              placeholder={book.placeholder}
              coverImage={book.coverImage}
              comingSoon={book.comingSoon}
            />
          ))}
        </div>
      </section>

      {/* Indie Apps Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-2">
          <a href="/apps" className="hover:text-[#008080] transition-colors">Indie Apps</a>
        </h2>
        <p className="text-sm text-gray-600 mb-6">Vibes & creations</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredApps.map((app, index) => (
            <ProjectCard 
              key={index}
              href={app.href}
              title={app.title}
              variant={app.variant}
              category={app.category}
              placeholder={app.placeholder}
              coverImage={app.coverImage}
            />
          ))}
        </div>
      </section>

      {/* Ideas & Curiosity Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-2">Ideas I Haven&apos;t Built Yet</h2>
        <div className="space-y-3">
          <p className="text-gray-700">Some ideas become projects, while others remain as seeds for creative exploration.</p>
          <p className="text-gray-700">Feel free to browse or get in touch if any spark your own curiosity.</p>
        </div>
        <div className="mt-2 space-y-2">
          <a href="https://docs.google.com/document/d/1T8l4ws8wbej3HDCF-laSyiwgLkxFdsEtwxyOIYa16g4/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="block font-medium hover:text-[#008080] transition-colors">• EarlyBird</a>
          <a href="https://docs.google.com/document/d/1b8EuTTVL2usVDMyLvlWJ1bEoA2c8rucJ-jQbzMnL0Mw/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="block font-medium hover:text-[#008080] transition-colors">• PhishProof</a>
          <a href="https://docs.google.com/document/d/1pOg5BiWvVUl7yG74FAuK5WxAlm5tNj_WbGesqtt0SUc/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="block font-medium hover:text-[#008080] transition-colors">• TinyCupid</a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="border-t pt-8 pb-16">
        <h2 className="text-2xl font-bold mb-4">Contact me</h2>
        <div className="flex gap-4">
          <Button href="https://www.linkedin.com/in/alhousenycamara/" external variant="secondary" size="sm" icon={icons.linkedin}>
            LinkedIn
          </Button>
          <Button href="https://x.com/thacuriousb" external variant="secondary" size="sm">
            X (Twitter)
          </Button>
        </div>
        <p className="text-sm font-bold text-gray-600 mt-4">
          Email me at: <span className="text-[#008080]">camaraalhouseny44@gmail.com</span>
        </p>
      </section>
    </div>
  )
}