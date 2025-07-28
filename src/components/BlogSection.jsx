
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getPosts } from '@/lib/blog';

const BlogSection = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(getPosts().slice(0, 3)); 
  }, []);

  return (
    <section id="blog" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
            From Our Blog
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Insights, trends, and expert opinions on the world of automation and AI.
          </p>
        </motion.div>

        {posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-secondary/50 border border-blue-900/30 rounded-2xl overflow-hidden flex flex-col group transform hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={post.image || 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800'} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
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
        ) : (
          <div className="text-center text-gray-400">No blog posts yet. Check back soon!</div>
        )}
        
        <div className="text-center mt-12">
            <Link to="/blog">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-full tech-glow">
                    View All Posts
                </Button>
            </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
