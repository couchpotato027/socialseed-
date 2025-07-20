import React from 'react';
import '../CSS/Blog.css'; // Make sure the CSS is updated as well

function Blog() {
  const posts = [
    {
      id: 1,
      user: {
        name: 'Sarah Johnson',
        title: 'Senior UX Designer at DesignHub',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
      },
      time: '1h ago',
      content: `Excited to share that I've just completed a major redesign project for an e-commerce platform! The focus was on improving user experience and conversion rates.

Key improvements included:
- Simplified checkout process
- Enhanced product filtering
- Mobile-first responsive design

Happy to chat about UX best practices if anyone's interested!`,
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
      likes: 47,
      comments: [
        {
          name: 'David Park',
          text: 'This looks great! Would love to hear more about how you approached the mobile-first design.',
          time: '45m ago'
        },
        {
          name: 'Michael Chen',
          text: 'Impressive work! Did you see any immediate improvement in conversion rates after the redesign?',
          time: '35m ago'
        }
      ]
    },
    {
      id: 2,
      user: {
        name: 'Michael Chen',
        title: 'Product Manager at TechCorp',
        avatar: 'https://randomuser.me/api/portraits/men/45.jpg'
      },
      time: '1d ago',
      content: `Just published my article on 'The Future of Front-end Development in 2023'. Covering emerging trends like:

- Web Components
- Edge Computing
- Improved Core Web Vitals
- AI-assisted development

Link in comments. Would love your thoughts!`,
      image: null,
      likes: 32,
      comments: []
    },
    {
      id: 3,
      user: {
        name: 'David Park',
        title: 'Data Scientist at AnalyticsPro',
        avatar: 'https://randomuser.me/api/portraits/men/47.jpg'
      },
      time: '13/07/2025',
      content: `I'm hosting a virtual workshop next week on 'Data Science for Beginners'. We'll cover the basics of Python, data visualization, and intro to machine learning. Registration is free and spots are limited!`,
      image: null,
      likes: 65,
      comments: [
        {
          name: 'Robert Taylor',
          text: 'Just signed up! Looking forward to learning from you.',
          time: '6d ago'
        }
      ]
    }
  ];

  return (
    <div className="blog-page">
      {/* Header */}
      <div className="blog-header">
        <h1>Trending Insights</h1>
        <p>
          Latest thoughts and insights from your network. Discover trending topics and join
          the conversation.
        </p>
      </div>

      {/* Post Input */}
      <div className="post-box">
        <div className="user-avatar">
          <img src="https://via.placeholder.com/40" alt="User" />
        </div>
        <input
          type="text"
          className="post-input"
          placeholder="Share your thoughts, ideas, or insights..."
        />
        <div className="post-actions">
          <button>📷 Image</button>
          <button>🔗 Link</button>
          <button>📊 Poll</button>
          <button className="post-btn">Post</button>
        </div>
      </div>

      {/* Tabs and Filters */}
      <div className="tabs-filter">
        <div className="tabs">
          <button className="active">For You</button>
          <button>Trending</button>
          <button>Recent</button>
        </div>
        <div className="search-filter">
          <input type="text" placeholder="Search posts" />
          <button>🔍</button>
        </div>
        <div className="tags">
          <button className="active">Articles</button>
          <button>Videos</button>
          <button>Technology</button>
          <button>Design</button>
          <button>Marketing</button>
        </div>
      </div>

      {/* Post Feed */}
      <div className="post-feed">
        {posts.map((post) => (
          <div className="post-card" key={post.id}>
            <div className="post-header">
              <img src={post.user.avatar} alt="User" />
              <div>
                <h4>{post.user.name}</h4>
                <p>{post.user.title}</p>
                <span className="time">{post.time}</span>
              </div>
            </div>
            <p className="post-content">{post.content}</p>
            {post.image && (
              <div className="post-image">
                <img src={post.image} alt="Post" />
              </div>
            )}
            <p className="likes-comments">
              {post.likes} likes • {post.comments.length} comments
            </p>
            <div className="post-actions">
              <button>🤍 Like</button>
              <button>💬 Comment</button>
              <button>🔗 Share</button>
            </div>
            {post.comments.map((comment, index) => (
              <div className="comment" key={index}>
                <strong>{comment.name}</strong>
                <p>{comment.text}</p>
                <span className="comment-time">{comment.time}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;