import Link from 'next/link'
import Image from 'next/image'

interface MediaItem {
  src: string
  alt?: string
  caption?: string
}

interface BookReviewProps {
  title: string
  author: string
  publishedYear: string
  category: string
  review: {
    introduction: string
    whatILoved: string
    keyTakeaways: string[]
  }
  quotes: Array<{
    text: string
    page: string
  }>
  media?: MediaItem[]
  fullReviewLink?: string
}

export default function BookReview({
  title,
  author,
  publishedYear,
  category,
  review,
  quotes,
  media,
  fullReviewLink
}: BookReviewProps) {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Navigation */}
      <section className="mb-8">
        <div className="flex items-center gap-4">
          <Link href="/blog" className="text-gray-600 hover:text-[#008080] transition-colors">
            ← Back to Cover 2 Cover
          </Link>
        </div>
      </section>

      {/* Book Header */}
      <section className="mb-12">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
          <p className="text-lg text-gray-600 mb-2">Author: {author}</p>
          <p className="text-gray-600 mb-2">Published: {publishedYear}</p>
          <p className="text-gray-600 mb-6">Category: {category}</p>
        </div>
      </section>

      {/* Review Content */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-2">Review</h2>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-6">
            {review.introduction}
          </p>
          
          <h3 className="text-xl font-semibold mb-2 text-[#2b2b2b]">What I Loved</h3>
          <p className="text-gray-700 mb-6">
            {review.whatILoved}
          </p>
          
          <h3 className="text-xl font-semibold mb-2 text-[#2b2b2b]">Key Takeaways</h3>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            {review.keyTakeaways.map((takeaway, index) => (
              <li key={index}>{takeaway}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Media Section */}
      {media && media.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Images</h2>
          <div className="space-y-8">
            {media.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="relative">
                  <Image
                    src={item.src}
                    alt={item.alt || `Image ${index + 1}`}
                    width={800}
                    height={600}
                    className="rounded-lg w-full h-auto"
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

      {/* Reading Notes */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Reading Notes</h2>
        <div className="space-y-4">
          {quotes.map((quote, index) => (
            <div key={index} className="border-l-4 border-black pl-4">
              <p className="text-gray-700 italic mb-2">
                &quot;{quote.text}&quot;
              </p>
              <p className="text-sm text-gray-600">Page {quote.page}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="mb-16">
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold mb-4">Want to dive deeper?</h3>
          <p className="text-gray-600 mb-6">
            Read the full breakdown and explore more book reviews in my reading journey.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {fullReviewLink ? (
              <>
                <a href={fullReviewLink} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-[#008080] text-white rounded-lg hover:bg-[#006666] transition-colors">
                  Read Full Breakdown
                </a>
                <Link href="/blog" className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                  View All Reviews
                </Link>
              </>
            ) : (
              <>
                <p className="text-gray-600 italic">Full breakdown coming soon!</p>
                <Link href="/blog" className="px-6 py-2 bg-[#008080] text-white rounded-lg hover:bg-[#006666] transition-colors">
                  View All Reviews
                </Link>
              </>
            )}
          </div>
        </div>
      </section>

    </div>
  )
} 