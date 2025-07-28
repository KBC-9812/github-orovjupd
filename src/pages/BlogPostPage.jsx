
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getPostBySlug } from '@/lib/blog';
import { Calendar, User } from 'lucide-react';

const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const postData = getPostBySlug(slug);
    setPost(postData);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-white text-2xl">Loading post...</p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} - BobsonTech Blog</title>
        <meta name="description" content={post.description} />
      </Helmet>
      <Header />
      <main className="pt-32 bg-background">
        <article className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-display text-4xl lg:text-5xl font-bold mb-4 gradient-text text-center">
                {post.title}
              </h1>
              <div className="flex justify-center items-center gap-6 text-gray-400 mb-8">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
              </div>
              <img src={post.image || 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200'} alt={post.title} className="w-full h-auto max-h-[500px] object-cover rounded-2xl mb-12 shadow-2xl" />
              <div
                className="prose prose-invert prose-lg max-w-none text-gray-300 prose-headings:text-white prose-a:text-blue-400 hover:prose-a:text-blue-300"
                dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
              />
              <div className="text-center mt-12">
                <Link to="/blog" className="text-blue-400 hover:underline">
                  &larr; Back to all posts
                </Link>
              </div>
            </motion.div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default BlogPostPage;
