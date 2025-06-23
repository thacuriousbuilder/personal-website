import { notFound } from 'next/navigation'
import BookReview from '@/components/BookReview'
import { getBookById } from '@/data/books'

interface BookPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function BookPage({ params }: BookPageProps) {
  const book = getBookById((await params).slug)
  
  if (!book) {
    notFound()
  }

  return (
    <BookReview
      title={book.title}
      author={book.author}
      publishedYear={book.publishedYear}
      review={book.review}
      quotes={book.quotes}
      media={book.media}
      category={book.category}
    />
  )
} 