import { notFound } from 'next/navigation'
import IndieAppReview from '@/components/IndieAppReview'
import { getAppById } from '@/data/indieApps'

interface PageProps {
  params: {
    slug: string
  }
}

export default async function IndieAppPage({ params }: PageProps) {
  const app = getAppById((await params).slug)

  if (!app) {
    notFound()
  }

  return (
    <IndieAppReview
      title={app.title}
      category={app.category}
      status={app.status}
      date={app.date}
      tags={app.tags}
      timeline={app.timeline}
      content={app.content || { summary: '', keyFeatures: [], techStack: [], challenges: [] }}
      links={app.links}
      media={app.media}
    />
  )
} 