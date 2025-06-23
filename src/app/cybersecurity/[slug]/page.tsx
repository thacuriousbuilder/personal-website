import { notFound } from 'next/navigation'
import CybersecurityReview from '@/components/CybersecurityReview'
import { getProjectById } from '@/data/cybersecurity'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function CybersecurityProjectPage({ params }: PageProps) {
  const project = getProjectById((await params).slug)

  if (!project) {
    notFound()
  }

  return (
    <CybersecurityReview
      title={project.title}
      description={project.description}
      category={project.category}
      status={project.status}
      date={project.date}
      tags={project.tags}
      content={project.content || { summary: '' }}
      links={project.links}
      media={project.media}
    />
  )
} 