
const STORAGE_KEY = 'bobsontech_blog_posts';

const defaultPosts = [
  {
    slug: "the-rise-of-hyperautomation",
    title: "The Rise of Hyperautomation: What It Means for Your Business",
    description: "Explore how hyperautomation is reshaping industries by combining RPA, AI, and machine learning to achieve end-to-end process automation.",
    content: "Hyperautomation represents the next step in the evolution of process automation. It's not just about automating tasks; it's about automating the entire business process, from discovery to optimization. This involves a combination of technologies, including Robotic Process Automation (RPA), Artificial Intelligence (AI), Machine Learning (ML), and process mining. By orchestrating these tools, businesses can achieve a level of automation that was previously unimaginable, leading to significant gains in efficiency, accuracy, and agility.",
    date: "2025-07-20T10:00:00Z",
    author: "Jane Doe",
    image: "https://images.unsplash.com/photo-1634912341342-333a765d5865?q=80&w=800"
  },
  {
    slug: "5-common-rpa-implementation-pitfalls",
    title: "5 Common RPA Implementation Pitfalls and How to Avoid Them",
    description: "Learn from common mistakes to ensure your RPA implementation is a success. We cover everything from process selection to change management.",
    content: "Embarking on an RPA journey can be transformative, but it's not without its challenges. Common pitfalls include poor process selection, lack of a clear governance model, underestimating the need for change management, ignoring scalability, and failing to measure ROI. A successful RPA program requires a strategic approach that addresses these issues head-on. Start small, prove value, and then scale with a clear vision and robust support structure.",
    date: "2025-07-15T11:00:00Z",
    author: "John Smith",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800"
  },
  {
    slug: "ai-in-customer-service",
    title: "AI in Customer Service: A Game Changer for User Experience",
    description: "Discover how AI-powered chatbots and virtual assistants are revolutionizing customer support, providing 24/7 assistance and personalized interactions.",
    content: "AI is no longer a futuristic concept in customer service; it's a present-day reality. AI-powered chatbots can handle a vast number of queries simultaneously, freeing up human agents to focus on more complex issues. They provide instant, 24/7 support, improving customer satisfaction and loyalty. Furthermore, AI can analyze customer data to provide personalized recommendations and proactive support, creating a truly exceptional customer experience.",
    date: "2025-07-10T12:00:00Z",
    author: "Alex Johnson",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=800"
  }
];

function initializePosts() {
  if (typeof window !== 'undefined' && !localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultPosts));
  }
}

initializePosts();

export function getPosts() {
  if (typeof window === 'undefined') return defaultPosts;
  const posts = localStorage.getItem(STORAGE_KEY);
  return posts ? JSON.parse(posts).sort((a, b) => new Date(b.date) - new Date(a.date)) : [];
}

export function getPostBySlug(slug) {
  const posts = getPosts();
  return posts.find(post => post.slug === slug);
}

export function addPost(postData) {
  if (typeof window === 'undefined') return;
  const posts = getPosts();
  const slug = postData.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
  const newPost = {
    ...postData,
    slug,
    date: new Date().toISOString(),
  };
  const updatedPosts = [newPost, ...posts];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPosts));
  return newPost;
}
