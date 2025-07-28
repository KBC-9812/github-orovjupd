
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { addPost } from '@/lib/blog';
import { PlusCircle } from 'lucide-react';

const AdminPage = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const newPost = addPost({ title, author, description, content, image });
      toast({
        title: "✅ Post Created Successfully!",
        description: "Your new blog post has been published.",
      });
      navigate(`/blog/${newPost.slug}`);
    } catch (error) {
      toast({
        title: "❌ Error!",
        description: "Could not create the post. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Admin - Add New Post - BobsonTech</title>
        <meta name="description" content="Admin panel to add new blog posts for BobsonTech." />
      </Helmet>
      <Header />
      <main className="pt-32 bg-background">
        <section className="py-20 section-bg">
          <div className="container mx-auto px-4 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="card-bg p-8 rounded-2xl"
            >
              <h1 className="font-display text-4xl font-bold mb-6 text-center gradient-text">
                Add New Blog Post
              </h1>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  type="text"
                  placeholder="Post Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="bg-secondary border-blue-800"
                />
                <Input
                  type="text"
                  placeholder="Author Name"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  required
                  className="bg-secondary border-blue-800"
                />
                <Input
                  type="text"
                  placeholder="Image URL (optional)"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="bg-secondary border-blue-800"
                />
                <Textarea
                  placeholder="Short Description (for post previews)"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  rows={3}
                  className="bg-secondary border-blue-800"
                />
                <Textarea
                  placeholder="Full Post Content (HTML supported via line breaks)"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                  rows={10}
                  className="bg-secondary border-blue-800"
                />
                <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white tech-glow">
                  <PlusCircle className="w-5 h-5 mr-2" />
                  Publish Post
                </Button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AdminPage;
