import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { getPosts } from '@/lib/blog';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(getPosts());
  }, []);

  return (
    <>
      <Helmet>
        <title>Blog - BobsonTech</title>
        <meta name="description" content="Read the latest insights, trends, and expert opinions on automation, RPA, and AI from the BobsonTech blog." />
      </Helmet>
      <Header />
      <main className="pt-32 bg-background">
        <section className="py-20 section-bg">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6 gradient-text">
                The BobsonTech Blog
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Your source for the latest news and insights in intelligent automation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="card-bg rounded-2xl overflow-hidden flex flex-col group transform hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img  alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1612179952335-7aba688e53a7" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-sm text-gray-400 mb-2">{new Date(post.date).toLocaleDateString()} by {post.author}</p>
                    <h3 className="font-display text-xl font-semibold text-white mb-3 flex-grow">{post.title}</h3>
                    <p className="text-gray-400 mb-4 line-clamp-3">{post.description}</p>
                    <Link to={`/blog/${post.slug}`} className="mt-auto">
                      <Button variant="link" className="text-blue-400 p-0 self-start hover:text-blue-300">
                        Read More <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BlogPage;