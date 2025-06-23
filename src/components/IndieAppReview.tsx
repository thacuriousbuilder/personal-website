import Link from 'next/link'
import Button from '@/components/Button'

interface MediaItem {
  src: string
  alt?: string
  caption?: string
}

interface IndieAppReviewProps {
  title: string
  category: string
  status: string
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
  media?: MediaItem[]
}

export default function IndieAppReview({
  title,
  category,
  status,
  date,
  tags,
  timeline,
  content,
  links,
}: IndieAppReviewProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live': return 'bg-green-100 text-green-800'
      case 'beta': return 'bg-blue-100 text-blue-800'
      case 'development': return 'bg-yellow-100 text-yellow-800'
      case 'planning': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'productivity': return 'bg-purple-100 text-purple-800'
      case 'security': return 'bg-red-100 text-red-800'
      case 'social': return 'bg-blue-100 text-blue-800'
      case 'utility': return 'bg-green-100 text-green-800'
      case 'experimental': return 'bg-orange-100 text-orange-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Navigation */}
      <section className="mb-8">
        <div className="flex items-center gap-4">
          <Link href="/apps" className="text-gray-600 hover:text-[#008080] transition-colors">
            ← Back to Indie Apps
          </Link>
        </div>
      </section>

      {/* App Header */}
      <section className="mb-12">    
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
        
        <p className="text-sm text-gray-500 mb-4">
          Last updated: {formatDate(date)}
        </p>
        <div className="flex items-start gap-3 mb-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(category)}`}>
            {category}
          </span>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(status)}`}>
            {status}
          </span>
        </div>
      </section>

      {/* App Overview */}
      {content && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">App Overview</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {content.summary}
            </p>
          </div>

          {/* Key Features */}
          {content.keyFeatures && content.keyFeatures.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Key Features</h3>
              <ul className="space-y-3">
                {content.keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-black font-bold mt-1">•</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          {content.techStack && content.techStack.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {content.techStack.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Challenges */}
          {content.challenges && content.challenges.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Challenges & Learnings</h3>
              <ul className="space-y-3">
                {content.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-black font-bold mt-1">•</span>
                    <span className="text-gray-700">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      )}

      {/* Quick Links */}
      {links && Object.keys(links).length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
          <div className="flex flex-wrap gap-3">
            {links.live && (
              <Button href={links.live} external variant="primary" size="md">
                🚀 Live App
              </Button>
            )}
            {links.github && (
              <Button href={links.github} external variant="secondary" size="md">
                💻 View Code
              </Button>
            )}
            {links.docs && (
              <Button href={links.docs} external variant="secondary" size="md">
                📚 Documentation
              </Button>
            )}
            {links.demo && (
              <Button href={links.demo} external variant="secondary" size="md">
                🎬 Demo
              </Button>
            )}
            {links.figma && (
              <Button href={links.figma} external variant="secondary" size="md">
                🎨 Design
              </Button>
            )}
          </div>
        </section>
      )}

      {/* Development Timeline */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Development Timeline</h2>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-3 h-3 bg-black rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Conceptualization</h3>
              <p className="text-gray-600 mb-2">{formatDate(timeline.concept)}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-3 h-3 bg-black rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Development</h3>
              {timeline.development ? (
                <>
                  <p className="text-gray-600 mb-2">{formatDate(timeline.development)}</p>
                </>
              ) : (
                <p className="text-gray-500 mb-2">Not started yet</p>
              )}
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-3 h-3 bg-black rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Launch</h3>
              {timeline.launch ? (
                <>
                  <p className="text-gray-600 mb-2">{formatDate(timeline.launch)}</p>
                </>
              ) : (
                <p className="text-gray-500 mb-2">Not launched yet</p>
              )}
            </div>
          </div>

          {timeline.updates && timeline.updates.length > 0 && (
            <div className="mt-8">
              <h3 className="font-semibold text-lg mb-4">Updates & Iterations</h3>
              <div className="space-y-3">
                {timeline.updates.map((update, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-gray-700">{update}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Media Gallery
      {media && media.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Screenshots & Media</h2>
          <div className="space-y-8">
            {media.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="relative">
                  <Image
                    src={item.src}
                    alt={item.alt || `Screenshot ${index + 1}`}
                    width={800}
                    height={600}
                    className="rounded-lg w-full h-auto border border-gray-200"
                  />
                </div>
                {item.caption && (
                  <p className="text-sm text-gray-600 italic text-center">
                    {item.caption}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )} */}

      {/* Call to Action */}
      <section className="mb-16">
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold mb-4">Want to explore more?</h3>
          <p className="text-gray-600 mb-6">
            {links?.live 
              ? "Try out the live app or explore the codebase."
              : "Check out the development progress"
            }
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {links?.live && (
              <Button href={links.live} external variant="primary" size="md">
                Try the App
              </Button>
            )}
            {links?.github && (
              <Button href={links.github} external variant="secondary" size="md">
                View on GitHub
              </Button>
            )}
            <Button href="/apps" variant="secondary" size="md">
              View All Apps
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
} 