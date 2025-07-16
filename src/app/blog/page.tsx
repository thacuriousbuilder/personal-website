'use client'

import { useState } from 'react'
import ProjectCard from '@/components/ProjectCard'
import Link from 'next/link'
import Button from '@/components/Button'
import { getAllBooks } from '@/data/books'

const categoryList = [
  { name: 'All', key: 'all' },
  { name: 'Technology', key: 'Technology' },
  { name: 'Business', key: 'Business' },
  { name: 'Philosophy', key: 'Philosophy' },
  { name: 'Africa', key: 'Africa' },
  { name: 'Productivity', key: 'Productivity' },
  { name: 'Entertainment', key: 'Entertainment' },
]

export default function Cover2CoverPage() {
  const [visibleReviews, setVisibleReviews] = useState(3)
  const [showAll, setShowAll] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Fetch books from the centralized data
  const allBooks = getAllBooks()
  
  // Calculate counts for each category
  const categories = categoryList.map(cat => ({
    ...cat,
    count: cat.key === 'all'
      ? allBooks.length
      : allBooks.filter(book => book.category === cat.key).length
  }))

  const filteredBooks = selectedCategory === 'all'
    ? allBooks
    : allBooks.filter(book => book.category === selectedCategory)

  // Map books to ProjectCard format
  const allReviews = filteredBooks.map((book, index) => ({
    href: `/blog/${book.id}`,
    title: book.title,
    date: book.reviewDate,
    description: book.review.introduction.substring(0, 150) + '...', // Truncate introduction for preview
    variant: "cover2cover" as const,
    placeholder: index % 3 === 0 ? "square" as const : index % 3 === 1 ? "circle" as const : "triangle" as const,
    coverImage: book.coverImage,
    comingSoon: book.status === 'upcoming',
  }))

  const displayedReviews = showAll ? allReviews : allReviews.slice(0, visibleReviews)
  const hasMoreReviews = visibleReviews < allReviews.length && !showAll
  const canShowMore = visibleReviews < allReviews.length
  const canShowLess = visibleReviews > 3 || showAll

  const handleShowMore = () => {
    setVisibleReviews(prev => Math.min(prev + 3, allReviews.length))
  }

  const handleViewAll = () => {
    setShowAll(true)
  }

  const handleShowLess = () => {
    setVisibleReviews(3)
    setShowAll(false)
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
          Cover 2 Cover
        </h1>
        
        <div className="max-w-3xl space-y-4 text-gray-700 mb-8">
          <p>
            A collection of book reviews, reading notes, and reflections from cover to cover. 
            Here you&apos;ll find thoughts on books that have shaped my thinking, sparked curiosity, 
            or simply provided an enjoyable escape.
          </p>
          
          <p>
            From technical deep-dives to philosophical explorations, each book offers 
            a unique perspective worth sharing and discussing.
          </p>
          <p className='text-sm text-[#008080]'>Ps: These are just my thoughts and opinions.</p>
        </div>
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === cat.key
                  ? 'bg-[#008080] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedReviews.map((review, index) => (
            <ProjectCard 
              key={index}
              href={review.href}
              title={review.title}
              date={review.date}
              description={review.description}
              variant={review.variant}
              placeholder={review.placeholder}
              coverImage={review.coverImage}
              comingSoon={review.comingSoon}
            />
          ))}
        </div>
        
        {/* Show More / View All Buttons */}
        {canShowMore && (
          <div className="flex justify-center gap-4 mt-8">
            {hasMoreReviews && (
              <Button onClick={handleShowMore} variant="secondary" size="md">
                Show 3 More
              </Button>
            )}
            {!showAll && (
              <Button onClick={handleViewAll} variant="primary" size="md">
                View All ({allReviews.length})
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

      {/* Reading List */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Currently Reading</h2>
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:border-[#008080] transition-colors">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-lg mb-1">Dead Aid</h3>
                <p className="text-gray-600 mb-2">Dambisa Moyo</p>
                <p className="text-sm text-gray-700">
                A critique of the international aid system and its impact on Africa.
                </p>
              </div>
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">In Progress</span>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-[#008080] transition-colors">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-lg mb-1">AI 2041: Ten Visions for Our Future</h3>
                <p className="text-gray-600 mb-2"> Kai-Fu Lee</p>
                <p className="text-sm text-gray-700">
                A look at the future of AI and its impact on society, 
                including the potential for AI to revolutionize industries and improve people&apos;s lives.
                </p>
              </div>
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Next Up</span>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
} 