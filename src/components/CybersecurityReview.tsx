import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/Button'

interface MediaItem {
  src: string
  alt?: string
  caption?: string
}

interface CybersecurityReviewProps {
  title: string
  description: string
  category: string
  status: string
  date: string
  tags: string[]
  content: {
    summary: string
    keyFindings?: string[]
    tools?: string[]
    techniques?: string[]
  }
  links?: {
    googleDoc?: string
    github?: string
    demo?: string
    report?: string
  }
  media?: MediaItem[]
}

export default function CybersecurityReview({
  title,
  description,
  category,
  status,
  date,
  tags,
  content,
  links,
  media
}: CybersecurityReviewProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800'
      case 'draft': return 'bg-yellow-100 text-yellow-800'
      case 'in-progress': return 'bg-blue-100 text-blue-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'siem': return 'bg-purple-100 text-purple-800'
      case 'threat-hunting': return 'bg-red-100 text-red-800'
      case 'tools': return 'bg-blue-100 text-blue-800'
      case 'research': return 'bg-green-100 text-green-800'
      case 'writeup': return 'bg-orange-100 text-orange-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Navigation */}
      <section className="mb-8">
        <div className="flex items-center gap-4">
          <Link href="/cybersecurity" className="text-gray-600 hover:text-[#008080] transition-colors">
            ← Back to Cybersecurity
          </Link>
        </div>
      </section>

      {/* Project Header */}
      <section className="mb-12">
        <div className="flex items-start gap-3 mb-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(category)}`}>
            {category}
          </span>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(status)}`}>
            {status}
          </span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg text-gray-600 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
        
        <p className="text-sm text-gray-500">
          Last updated: {new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>
      </section>

      {/* Quick Links */}
      {links && Object.keys(links).length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
          <div className="flex flex-wrap gap-3">
            {links.googleDoc && (
              <Button href={links.googleDoc} external variant="primary" size="md">
                📄 View Full Document
              </Button>
            )}
            {links.github && (
              <Button href={links.github} external variant="secondary" size="md">
                💻 View Code
              </Button>
            )}
            {links.demo && (
              <Button href={links.demo} external variant="secondary" size="md">
                🚀 Live Demo
              </Button>
            )}
            {links.report && (
              <Button href={links.report} external variant="secondary" size="md">
                📊 Full Report
              </Button>
            )}
          </div>
        </section>
      )}

      {/* Project Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {content.summary}
          </p>
        </div>
      </section>

      {/* Key Findings */}
      {content.keyFindings && content.keyFindings.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Key Findings</h2>
          <ul className="space-y-4">
            {content.keyFindings.map((finding, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-[#008080] font-bold mt-1">•</span>
                <span className="text-gray-700">{finding}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Tools & Technologies */}
      {content.tools && content.tools.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Tools & Technologies</h2>
          <div className="flex flex-wrap gap-2">
            {content.tools.map((tool) => (
              <span key={tool} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                {tool}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Techniques & Methodologies */}
      {content.techniques && content.techniques.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Techniques & Methodologies</h2>
          <div className="flex flex-wrap gap-2">
            {content.techniques.map((technique) => (
              <span key={technique} className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                {technique}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Media Gallery */}
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
      )}

      {/* Call to Action */}
      <section className="mb-16">
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold mb-4">Want to dive deeper?</h3>
          <p className="text-gray-600 mb-6">
            {links?.googleDoc 
              ? "Check out the full technical documentation and detailed analysis."
              : "Explore more cybersecurity projects and research."
            }
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {links?.googleDoc && (
              <Button href={links.googleDoc} external variant="primary" size="md">
                Read Full Document
              </Button>
            )}
            <Button href="/cybersecurity" variant="secondary" size="md">
              View All Projects
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 