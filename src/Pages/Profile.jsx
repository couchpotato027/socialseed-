import React from "react";
import "../CSS/Profile.css";
import { FaMapMarkerAlt, FaEnvelope, FaPen } from "react-icons/fa";

function Profile() {
  return (
    <div className="profile-page">
      {/* Cover Image */}
      <div className="cover-image">
        <button className="edit-cover-btn">
          <FaPen size={12} style={{ marginRight: "6px" }} /> Edit Cover
        </button>
      </div>

      {/* Profile Box */}
      <div className="profile-box">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="avatar"
          className="profile-avatar"
        />

        <div className="profile-details">
          <h2>Sarah Johnson</h2>
          <p>Senior UX Designer at DesignHub</p>
          <p>
            <FaMapMarkerAlt size={12} style={{ marginRight: "6px" }} /> San Francisco, CA
            <FaEnvelope size={12} style={{ margin: "0 6px 0 16px" }} /> sarah.johnson@example.com
          </p>
        </div>

        <div className="edit-profile-btn-container">
          <button className="edit-profile-btn">
            <FaPen size={12} style={{ marginRight: "6px" }} /> Edit Profile
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <button className="tab-button active">About</button>
        <button className="tab-button">Experience</button>
        <button className="tab-button">Skills</button>
        <button className="tab-button">Activity</button>
      </div>

      {/* About Section */}
      <div className="section">
        <h3>About Me</h3>
        <p>
          Passionate UX designer with over 8 years of experience creating user-centered digital experiences
          for a variety of clients. Specialized in interaction design, user research, and creating accessible
          interfaces that delight users while meeting business goals.
        </p>
      </div>

      {/* Your Network Section */}
      <div className="network-section">
        <div className="network-header">
          <div>
            <h3>Your Network</h3>
            <p><strong>You have 354</strong> connections</p>
          </div>
          <button className="see-all-btn">See all connections</button>
        </div>

        <div className="network-grid">
          {[
            {
              name: "Michael Chen",
              title: "Product Manager at TechCorp",
              img: "https://randomuser.me/api/portraits/men/32.jpg",
            },
            {
              name: "Emily Rodriguez",
              title: "Frontend Developer at WebSolutions",
              img: "https://randomuser.me/api/portraits/women/65.jpg",
            },
            {
              name: "David Park",
              title: "Data Scientist at AnalyticsPro",
              img: "https://randomuser.me/api/portraits/men/44.jpg",
            },
            {
              name: "James Wilson",
              title: "Head of Marketing at InnovateLabs",
              img: "https://randomuser.me/api/portraits/men/21.jpg",
            }
          ].map((user, index) => (
            <div key={index} className="network-card">
              <img src={user.img} alt={user.name} className="network-avatar" />
              <p className="network-name">{user.name}</p>
              <p className="network-title">{user.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
