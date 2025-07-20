import React from "react";
import "../CSS/Network.css";

const connections = [
  {
    name: "Sarah Johnson",
    role: "Senior UX Designer at DesignHub",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Chen",
    role: "Product Manager at TechCorp",
    img: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "Emily Rodriguez",
    role: "Frontend Developer at WebSolutions",
    img: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    name: "David Park",
    role: "Data Scientist at AnalyticsPro",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

function Network() {
  return (
    <main className="network-page">
      {/* Intro Section */}
      <section className="network-intro network-blue-bg">
        <div className="network-intro-content">
          <h1 className="network-heading">Grow Your Professional Circle</h1>
          <p className="network-subheading">
            Connect with industry professionals, discover new opportunities,
            and build meaningful relationships that advance your career.
          </p>

          <div className="network-statistics">
            <div className="network-stat-box">
              <p>Your Connections</p>
              <h2>247</h2>
            </div>
            <div className="network-stat-box">
              <p>Pending Requests</p>
              <h2>13</h2>
            </div>
            <div className="network-stat-box">
              <p>New Suggestions</p>
              <h2>24</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Connections Section */}
      <section className="network-connection-list" style={{ marginBottom: "2rem" }}>
        <h2 className="network-list-title">Your Connections</h2>
        <p className="network-list-subtitle">
          Stay in touch with professionals in your network
        </p>

        <div className="network-card-grid">
          {connections.map((conn, i) => (
            <div key={i} className="network-person-card">
              <img
                src={conn.img}
                alt={`Profile of ${conn.name}`}
                className="network-person-avatar"
              />
              <h4 className="network-person-name">{conn.name}</h4>
              <p className="network-person-role">{conn.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Professional Groups Section */}
      <section className="network-groups">
        <h2 className="network-list-title">Professional Groups</h2>
        <p className="network-list-subtitle">
          Join communities and discussions in your industry
        </p>

        <div className="group-tabs">
          <button className="tab active">Featured</button>
          <button className="tab">Industry-specific</button>
          <button className="tab">Your Groups</button>
        </div>

        <div className="group-card-grid">
          <div className="group-card gradient-blue">
            <h3>UX Designers Hub</h3>
            <p>A community of 14,320 UX designers sharing insights, job opportunities, and resources.</p>
            <div className="group-avatars">
              <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="User avatar" />
              <img src="https://randomuser.me/api/portraits/men/66.jpg" alt="User avatar" />
              <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="User avatar" />
              <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="User avatar" />
              <span>+14k</span>
            </div>
            <button className="join-btn">Join Group</button>
          </div>

          <div className="group-card gradient-lightblue">
            <h3>Product Managers Network</h3>
            <p>Connect with 8,750 product managers to discuss strategies, tools, and career growth.</p>
            <div className="group-avatars">
              <img src="https://randomuser.me/api/portraits/men/21.jpg" alt="User avatar" />
              <img src="https://randomuser.me/api/portraits/men/22.jpg" alt="User avatar" />
              <img src="https://randomuser.me/api/portraits/women/24.jpg" alt="User avatar" />
              <img src="https://randomuser.me/api/portraits/women/25.jpg" alt="User avatar" />
              <span>+8k</span>
            </div>
            <button className="join-btn">Join Group</button>
          </div>

          <div className="group-card gradient-purple">
            <h3>Tech Startups</h3>
            <p>A community for founders, employees, and investors in the tech startup ecosystem.</p>
            <div className="group-avatars">
              <img src="https://randomuser.me/api/portraits/men/30.jpg" alt="User avatar" />
              <img src="https://randomuser.me/api/portraits/women/33.jpg" alt="User avatar" />
              <img src="https://randomuser.me/api/portraits/men/35.jpg" alt="User avatar" />
              <img src="https://randomuser.me/api/portraits/women/36.jpg" alt="User avatar" />
              <span>+12k</span>
            </div>
            <button className="join-btn">Join Group</button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* FAQ Section */}
<section className="network-faq-section">
  <h2 className="network-list-title">Frequently Asked Questions</h2>
  <p className="network-list-subtitle">
    Common questions about networking features
  </p>

  <div className="faq-list">
    <details open>
      <summary>How do I manage my connection requests?</summary>
      <p>
        You can manage your connection requests from the “Network” tab. Review incoming requests and choose to accept or ignore them. You can also view sent requests and cancel them if needed.
      </p>
    </details>

    <details>
      <summary>Is there a limit to how many connections I can have?</summary>
      <p>
        There is no strict limit to the number of connections you can have. However, we recommend focusing on quality connections that are relevant to your professional goals rather than simply accumulating a large number.
      </p>
    </details>

    <details>
      <summary>How does the recommendation algorithm work?</summary>
      <p>
        Our algorithm suggests connections based on your industry, shared interests, mutual connections, and recent interactions. It continuously improves to help you discover professionals aligned with your profile.
      </p>
    </details>

    <details>
      <summary>Can I control who sees my profile?</summary>
      <p>
        Yes, you can manage visibility settings from your profile privacy controls. Choose to make your profile public, visible to connections only, or hidden entirely from search and recommendations.
      </p>
    </details>

    <details>
      <summary>How do I remove a connection?</summary>
      <p>
        Visit the user’s profile or go to your connections list, then click “Remove Connection.” They will not be notified when you remove them.
      </p>
    </details>
  </div>

  <div style={{ marginTop: "1.5rem" }}>
    <button className="join-btn" style={{ padding: "0.6rem 1.5rem", background: "#f5f5f5", color: "#333" }}>
      View Help Center
    </button>
  </div>
</section>

    </main>
  );
}

export default Network;