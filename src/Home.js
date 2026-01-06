import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <nav className="navbar">
        <div className="logo">Ed-Tech Platform</div>
        <div className="nav-links">
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      </nav>
      <section className="hero">
        <div className="hero-content">
          <h1>Empower Your Learning Journey</h1>
          <p>Discover a world of knowledge with our comprehensive courses, interactive lessons, and expert instructors. Join thousands of learners today!</p>
          <div className="hero-buttons">
            <Link to="/signup">
              <button className="btn-primary">Get Started</button>
            </Link>
            <Link to="/login">
              <button className="btn-secondary">Login</button>
            </Link>
          </div>
        </div>
        <div className="hero-image">
          {/* Placeholder for image */}
          <div className="image-placeholder">Learning Illustration</div>
        </div>
      </section>
      <section className="features">
        <div className="container">
          <h2>Why Choose Our Platform?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Expert Instructors</h3>
              <p>Learn from industry professionals with years of experience.</p>
            </div>
            <div className="feature-card">
              <h3>Interactive Learning</h3>
              <p>Engage with hands-on projects and real-world scenarios.</p>
            </div>
            <div className="feature-card">
              <h3>Flexible Schedule</h3>
              <p>Study at your own pace with 24/7 access to course materials.</p>
            </div>
            <div className="feature-card">
              <h3>Certification</h3>
              <p>Earn recognized certificates upon course completion.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="courses-preview">
        <div className="container">
          <h2>Popular Courses</h2>
          <div className="courses-grid">
            <div className="course-card">
              <h3>Web Development</h3>
              <p>Master HTML, CSS, JavaScript, and modern frameworks.</p>
              <button className="btn-outline">Learn More</button>
            </div>
            <div className="course-card">
              <h3>Data Science</h3>
              <p>Explore data analysis, machine learning, and AI concepts.</p>
              <button className="btn-outline">Learn More</button>
            </div>
            <div className="course-card">
              <h3>Digital Marketing</h3>
              <p>Boost your skills in SEO, social media, and online advertising.</p>
              <button className="btn-outline">Learn More</button>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Start Learning?</h2>
          <p>Join thousands of students already learning on our platform.</p>
          <Link to="/signup">
            <button className="btn-primary">Sign Up Now</button>
          </Link>
        </div>
      </section>
      <footer className="footer">
        <p>&copy; 2026 Ed-Tech Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;