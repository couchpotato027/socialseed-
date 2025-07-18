import React from 'react';
import '../CSS/Home.css';

function Home() {
  const users = [
    {
      name: 'Lisa Garcia',
      role: 'Product Designer at CreativeWorks',
      img: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      name: 'Robert Taylor',
      role: 'Software Engineer at CloudTech',
      img: 'https://randomuser.me/api/portraits/men/45.jpg',
    },
    {
      name: 'Jennifer Lee',
      role: 'UX Researcher at UserFirst',
      img: 'https://randomuser.me/api/portraits/women/46.jpg',
    },
    {
      name: 'James Wilson',
      role: 'Head of Marketing at InnovateLabs',
      img: 'https://randomuser.me/api/portraits/men/47.jpg',
    },
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-left">
          <h1>Connect, Share, Grow: Your Professional Network</h1>
          <p>
            Build meaningful connections, share your <br />
            expertise, and grow your career with our <br />
            professional networking platform.
          </p>
        </div>

        <div className="contact-form">
          <h3>Contact Us</h3>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message" rows="4"></textarea>
          <button className="send-btn">Send Message</button>
        </div>
      </section>

      {/* Connections Section */}
      <section className="connections-section">
        <h2>Connections You May Know</h2>
        <p>Expand your network with professionals in your industry</p>

        <div className="connections-grid">
          {users.map((user, index) => (
            <div key={index} className="connection-card">
              <img src={user.img} alt={user.name} className="avatar" />
              <h4>{user.name}</h4>
              <p>{user.role}</p>
              <button className="connect-btn">Connect</button>
            </div>
          ))}
        </div>
      </section>

      {/* Why SocialSeed */}
      <section className="why-socialseed">
        <h2>Why SocialSeed?</h2>
        <p>Discover how our platform can help advance your career</p>

        <div className="why-grid">
          <div className="why-item">
            <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5" alt="Network" />
            <div>
              <h3>Expand Your Professional Network</h3>
              <p>
                Connect with professionals in your industry, discover new opportunities,
                and build relationships that can advance your career.
              </p>
            </div>
          </div>

          <div className="why-item">
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" alt="Expertise" />
            <div>
              <h3>Share Your Expertise</h3>
              <p>
                Establish yourself as a thought leader by sharing your knowledge and experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>Success Stories</h2>
        <p>Hear from professionals who have found value in our platform</p>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="quote-icon">❝</div>
            <p>
              SocialSeed has completely transformed my professional networking experience.
              The quality of connections I've made here is far better than any other platform I’ve used.
            </p>
            <div className="testimonial-author">
              <img src="https://randomuser.me/api/portraits/men/11.jpg" alt="Michael" />
              <div>
                <strong>Michael Chen</strong>
                <span>Product Manager at TechCorp</span>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="quote-icon">❝</div>
            <p>
              I landed my dream job thanks to a connection I made on SocialSeed.
              The focused approach to professional networking makes all the difference.
            </p>
            <div className="testimonial-author">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="David" />
              <div>
                <strong>David Park</strong>
                <span>Data Scientist at AnalyticsPro</span>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="quote-icon">❝</div>
            <p>
              As a freelancer, SocialSeed has been invaluable for finding new clients and collaborators.
              The industry-specific groups are particularly helpful.
            </p>
            <div className="testimonial-author">
              <img src="https://randomuser.me/api/portraits/women/23.jpg" alt="Jennifer" />
              <div>
                <strong>Jennifer Lee</strong>
                <span>UX Researcher at UserFirst</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
