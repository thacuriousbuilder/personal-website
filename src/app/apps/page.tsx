'use client'

import { useState } from 'react'
import Link from 'next/link'
import Button from '@/components/Button'
import { getAllApps, getAppsByCategory, type IndieApp } from '@/data/indieApps'

export default function IndieAppsPage() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | IndieApp['category']>('all')
  const [visibleApps, setVisibleApps] = useState(3)
  const [showAll, setShowAll] = useState(false)

  const allApps = getAllApps()
  const filteredApps = selectedCategory === 'all' 
    ? allApps 
    : getAppsByCategory(selectedCategory)

  const displayedApps = showAll ? filteredApps : filteredApps.slice(0, visibleApps)
  const hasMoreApps = visibleApps < filteredApps.length && !showAll
  const canShowMore = visibleApps < filteredApps.length
  const canShowLess = visibleApps > 3 || showAll

  const categories = [
    { id: 'all', name: 'All Apps', count: allApps.length },
    { id: 'productivity', name: 'Productivity', count: getAppsByCategory('productivity').length },
    { id: 'security', name: 'Security', count: getAppsByCategory('security').length },
    { id: 'social', name: 'Social', count: getAppsByCategory('social').length },
    { id: 'utility', name: 'Utility', count: getAppsByCategory('utility').length },
    { id: 'experimental', name: 'Experimental', count: getAppsByCategory('experimental').length },
  ]

  const handleShowMore = () => {
    setVisibleApps(prev => Math.min(prev + 3, filteredApps.length))
  }

  const handleViewAll = () => {
    setShowAll(true)
  }

  const handleShowLess = () => {
    setVisibleApps(3)
    setShowAll(false)
  }

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
      month: 'short',
      day: 'numeric'
    })
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
          Indie Apps
        </h1>
        
        <div className="max-w-3xl space-y-4 text-gray-700 mb-8">
          <p>
            A collection of side projects, each with its own journey from concept to launch. 
            Here you&apos;ll find apps focused on productivity, security, and creative problem-solving.
          </p>
          
          <p>
            From initial conception to live applications, each project represents the iterative process I made
            of building and shipping software that solves real problems.
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
                setSelectedCategory(category.id as 'all' | IndieApp['category'])
                setVisibleApps(3)
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

      {/* Apps Grid */}
      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedApps.map((app) => (
            <div key={app.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{app.title}</h3>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(app.status)}`}>
                  {app.status}
                </span>
              </div>
              
              <div className="mb-4">
                <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${getCategoryColor(app.category)} mb-2`}>
                  {app.category}
                </span>
                <div className="flex flex-wrap gap-1">
                  {app.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                  {app.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                      +{app.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Timeline Preview */}
              <div className="mb-4">
                <div className="text-xs text-gray-500 mb-2">Timeline</div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span>Concept:</span>
                    <span>{formatDate(app.timeline.concept)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Development:</span>
                    <span>{app.timeline.development ? formatDate(app.timeline.development) : 'N/A'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Launch:</span>
                    <span>{app.timeline.launch ? formatDate(app.timeline.launch) : 'N/A'}</span>
                  </div>
                </div>
              </div>

              {app.content?.summary && (
                <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                  {app.content.summary}
                </p>
              )}

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{formatDate(app.date)}</span>
                <div className="flex gap-2">
                  {app.links?.live && (
                    <Button 
                      href={app.links.live} 
                      external 
                      variant="secondary" 
                      size="sm"
                    >
                      Live
                    </Button>
                  )}
                  {app.links?.github && (
                    <Button 
                      href={app.links.github} 
                      external 
                      variant="secondary" 
                      size="sm"
                    >
                      Code
                    </Button>
                  )}
                  <Button 
                    href={`/apps/${app.id}`} 
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
            {hasMoreApps && (
              <Button onClick={handleShowMore} variant="secondary" size="md">
                Show 3 More
              </Button>
            )}
            {!showAll && (
              <Button onClick={handleViewAll} variant="primary" size="md">
                View All ({filteredApps.length})
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