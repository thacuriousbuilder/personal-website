"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { curiosityPosts } from '../../data/curiosity';

// Show only published and upcoming posts
const sortedCuriosity = [...curiosityPosts]
  .filter(post => post.status === 'published' || post.status === 'upcoming')
  .sort((a, b) => {
    if (a.status === 'published' && b.status !== 'published') return -1;
    if (a.status !== 'published' && b.status === 'published') return 1;
    return 0;
  });

const categories = [
  { name: 'All Posts', key: 'all', count: curiosityPosts.length },
  { name: 'Tech', key: 'Tech', count: curiosityPosts.filter(p => p.tags.includes('Tech')).length },
  { name: 'Personal', key: 'Personal', count: curiosityPosts.filter(p => p.tags.includes('Personal')).length },
];

export default function CuriosityPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredPosts = selectedCategory === 'all'
    ? sortedCuriosity
    : sortedCuriosity.filter(post => post.tags.includes(selectedCategory));

  return (
    <div className="min-h-screen bg-white text-zinc-900 pb-16">
      <div className="max-w-5xl mx-auto px-4 pt-12">
        <h1 className="text-4xl font-bold mb-4">Curiosity</h1>
        <p className="text-lg text-zinc-600 mb-8">
          A collection of personal blog posts, articles, and thoughts on technology, personal growth, and more. This is my space to share ideas, experiments, and reflections beyond my main projects.
        </p>
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-4 py-1 rounded-full border text-sm font-medium transition-colors ${
                selectedCategory === cat.key
                  ? 'bg-[#008080] text-white border-zinc-200'
                  : 'bg-zinc-100 text-zinc-700 border-zinc-200 hover:bg-gray-200'
              }`}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </div>
        {/* Blog Post Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            post.status === 'upcoming' ? (
              <div
                key={post.slug}
                className="bg-white border border-zinc-200 rounded-xl p-6 shadow-sm flex flex-col opacity-60 cursor-not-allowed relative transition-all duration-300"
                tabIndex={-1}
                aria-disabled="true"
              >
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-semibold text-zinc-900">
                    {post.title}
                  </h2>
                  <span className="text-xs px-2 py-0.5 rounded-full font-medium ml-2 bg-yellow-100 text-yellow-800">
                    Upcoming
                  </span>
                </div>
                <p className="text-zinc-600 text-sm mb-4 flex-1">{post.summary}</p>
                <div className="flex flex-wrap gap-2 mt-auto"></div>
              </div>
            ) : (
              <Link
                key={post.slug}
                href={`/curiosity/${post.slug}`}
                className="bg-white border border-zinc-200 rounded-xl p-6 shadow-sm flex flex-col transition-all duration-300 hover:shadow-xl hover:bg-gray-50 transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-semibold text-zinc-900">
                    {post.title}
                  </h2>
                </div>
                <p className="text-zinc-600 text-sm mb-4 flex-1">{post.summary}</p>
                <div className="flex flex-wrap gap-2 mt-auto"></div>
              </Link>
            )
          ))}
        </div>
      </div>
    </div>
  );
} 