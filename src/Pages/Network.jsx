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

      <section className="network-connection-list">
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
    </main>
  );
}

export default Network;

