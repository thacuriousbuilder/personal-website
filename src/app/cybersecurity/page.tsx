'use client'

import { useState } from 'react'
import Link from 'next/link'
import Button from '@/components/Button'
import { getAllProjects, getProjectsByCategory, type CybersecurityProject } from '@/data/cybersecurity'

export default function CybersecurityPage() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | CybersecurityProject['category']>('all')
  const [visibleProjects, setVisibleProjects] = useState(3)
  const [showAll, setShowAll] = useState(false)

  const allProjects = getAllProjects()
  const filteredProjects = selectedCategory === 'all' 
    ? allProjects.filter(project => project.status === 'published' || project.status === 'in-progress')
    : getProjectsByCategory(selectedCategory).filter(project => project.status === 'published' || project.status === 'in-progress')

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, visibleProjects)
  const hasMoreProjects = visibleProjects < filteredProjects.length && !showAll
  const canShowMore = visibleProjects < filteredProjects.length
  const canShowLess = visibleProjects > 3 || showAll

  const categories = [
    { id: 'all', name: 'All Projects', count: allProjects.filter(project => project.status === 'published' || project.status === 'in-progress').length },
    { id: 'SIEM', name: 'SIEM', count: getProjectsByCategory('SIEM').filter(project => project.status === 'published' || project.status === 'in-progress').length },
    { id: 'Threat Hunting', name: 'Threat Hunting', count: getProjectsByCategory('Threat Hunting').filter(project => project.status === 'published' || project.status === 'in-progress').length },
    { id: 'Tools', name: 'Tools', count: getProjectsByCategory('Tools').filter(project => project.status === 'published' || project.status === 'in-progress').length },
    { id: 'Research', name: 'Research', count: getProjectsByCategory('Research').filter(project => project.status === 'published' || project.status === 'in-progress').length },
    { id: 'Writeups', name: 'Writeups', count: getProjectsByCategory('Writeups').filter(project => project.status === 'published' || project.status === 'in-progress').length },
  ]

  const handleShowMore = () => {
    setVisibleProjects(prev => Math.min(prev + 3, filteredProjects.length))
  }

  const handleViewAll = () => {
    setShowAll(true)
  }

  const handleShowLess = () => {
    setVisibleProjects(3)
    setShowAll(false)
  }

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
      case 'SIEM': return 'bg-purple-100 text-purple-800'
      case 'Threat Hunting': return 'bg-red-100 text-red-800'
      case 'Tools': return 'bg-blue-100 text-blue-800'
      case 'Research': return 'bg-green-100 text-green-800'
      case 'Writeups': return 'bg-orange-100 text-orange-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header Section */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-6">
          <Link href="/" className="text-gray-600 hover:text-[#008080] transition-colors">
            ← Back to home
          </Link>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Cybersecurity
        </h1>
        
        <div className="max-w-3xl space-y-4 text-gray-700 mb-8">
          <p>
            A collection of cybersecurity projects, research, and technical writeups. 
            Here you&apos;ll find practical insights from SIEM engineering, threat hunting, 
            and hands-on security projects.
          </p>
          
          <p>
            Each project/writeup tries to simulate real-world experience and lessons learned in the field.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="mb-12">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setSelectedCategory(category.id as 'all' | CybersecurityProject['category'])
                setVisibleProjects(3)
                setShowAll(false)
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-[#008080] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project) => (
            <div key={project.id} className="border border-gray-200 rounded-lg p-6  hover:shadow-xl hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>
              
              <div className="mb-4">
                <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${getCategoryColor(project.category)} mb-2`}>
                  {project.category}
                </span>
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {project.content?.summary && (
                <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                  {project.content.summary}
                </p>
              )}

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{project.date}</span>
                <div className="flex gap-2">
                  {project.links?.googleDoc && (
                    <Button 
                      href={project.links.googleDoc} 
                      external 
                      variant="secondary" 
                      size="sm"
                    >
                      Docs
                    </Button>
                  )}
                  {project.links?.github && (
                    <Button 
                      href={project.links.github} 
                      external 
                      variant="secondary" 
                      size="sm"
                    >
                      Code
                    </Button>
                  )}
                  <Button 
                    href={`/cybersecurity/${project.id}`} 
                    variant="primary" 
                    size="sm"
                  >
                    View
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Show More / View All Buttons */}
        {canShowMore && (
          <div className="flex justify-center gap-4 mt-8">
            {hasMoreProjects && (
              <Button onClick={handleShowMore} variant="secondary" size="md">
                Show 3 More
              </Button>
            )}
            {!showAll && (
              <Button onClick={handleViewAll} variant="primary" size="md">
                View All ({filteredProjects.length})
              </Button>
            )}
          </div>
        )}
        
        {/* See Less Button */}
        {canShowLess && (
          <div className="flex justify-center mt-4">
            <Button onClick={handleShowLess} variant="ghost" size="md">
              See Less
            </Button>
          </div>
        )}
      </section>

    </div>
  )
} 