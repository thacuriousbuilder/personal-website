import { curiosityPosts } from '../../../data/curiosity';
import { notFound } from 'next/navigation';
import React from 'react';

// Helper to extract headings from content (very basic, for demo)
function extractHeadings(content: string) {
  // This will match lines that start with #, ##, or ### (markdown headings)
  return content
    .split('\n')
    .filter((line) => line.trim().startsWith('#'))
    .map((line) => {
      const level = line.match(/^#+/)?.[0].length || 1;
      const text = line.replace(/^#+\s*/, '');
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      return { level, text, id };
    });
}

export default function CuriosityPostPage({ params }: { params: { slug: string } }) {
  const post = curiosityPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Extract headings for sidebar TOC
  const headings = extractHeadings(post.content);

  // Use a placeholder date if not present
  const publishedDate = post.date ? new Date(post.date).toLocaleDateString() : 'Date not available';

  return (
    <div className="min-h-screen bg-white text-zinc-900 flex">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-zinc-100 p-8 min-h-screen hidden md:block">
        <h2 className="text-xl font-bold mb-8">Contents</h2>
        <nav>
          <ul className="space-y-4">
            {headings.length > 0 ? (
              headings.map((h) => (
                <li key={h.id} className={`ml-${(h.level - 1) * 4}`}>
                  <a
                    href={`#${h.id}`}
                    className="text-zinc-700 hover:text-emerald-700 text-base transition-colors"
                  >
                    {h.text}
                  </a>
                </li>
              ))
            ) : (
              <li className="text-zinc-400">No sections</li>
            )}
          </ul>
        </nav>
      </aside>
      {/* Main Content */}
      <main className="flex-1 max-w-3xl mx-auto px-4 pt-12 pb-16">
        <a href="/curiosity" className="text-emerald-700 hover:underline text-sm mb-6 inline-block">← Back to Curiosity</a>
        <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
        <div className="text-sm text-gray-500 mb-6">Published: {publishedDate}</div>
        {/* Render content with headings as anchors */}
        <div className="prose prose-zinc max-w-none mt-6 text-lg">
          {post.content.split('\n').map((line, idx) => {
            if (line.startsWith('### ')) {
              const text = line.replace('### ', '');
              const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
              return <h3 key={id} id={id}>{text}</h3>;
            }
            if (line.startsWith('## ')) {
              const text = line.replace('## ', '');
              const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
              return <h2 key={id} id={id}>{text}</h2>;
            }
            if (line.startsWith('# ')) {
              const text = line.replace('# ', '');
              const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
              return <h1 key={id} id={id}>{text}</h1>;
            }
            return <p key={idx}>{line}</p>;
          })}
        </div>
      </main>
    </div>
  );
} 