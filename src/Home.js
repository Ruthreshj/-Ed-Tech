import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const [user, setUser] = useState(null);
  const [showProfileSidebar, setShowProfileSidebar] = useState(false);
  const [courses, setCourses] = useState([
    { id: 1, title: 'Web Development', progress: 65, status: 'In Progress' },
    { id: 2, title: 'Data Science', progress: 40, status: 'In Progress' },
    { id: 3, title: 'Digital Marketing', progress: 85, status: 'In Progress' }
  ]);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const toggleProfileSidebar = () => {
    setShowProfileSidebar(!showProfileSidebar);
  };

  return (
    <div className="home-page">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">Ed-Tech Platform</div>
        <div className="nav-links">
          {user ? (
            <div className="user-menu">
              <button 
                onClick={toggleProfileSidebar}
                className="user-info-btn"
              >
                <span className="profile-icon">👤</span>
                {user.name}
              </button>
              <button onClick={handleLogout} className="logout-btn">Logout</button>
            </div>
          ) : (
            <>
              <Link to="/">Signup</Link>
              <Link to="/login" className="login-link">
                <span className="profile-icon">👤</span>
                Login
              </Link>
            </>
          )}
        </div>
        </div>
      </nav>
      
      {/* Profile Sidebar */}
      {user && (
        <div className={`profile-sidebar ${showProfileSidebar ? 'open' : ''}`}>
          <div className="sidebar-header">
            <h2>Profile Details</h2>
            <button 
              className="close-btn" 
              onClick={toggleProfileSidebar}
            >
              ✕
            </button>
          </div>
          
          <div className="profile-section">
            <div className="profile-avatar">👤</div>
            <h3>{user.name}</h3>
            <p className="profile-email">{user.email}</p>
          </div>

          <div className="courses-section">
            <h3>Courses In Progress</h3>
            <div className="courses-list">
              {courses.map(course => (
                <div key={course.id} className="course-item">
                  <div className="course-header">
                    <h4>{course.title}</h4>
                    <span className="course-status">{course.status}</span>
                  </div>
                  <div className="progress-bar-container">
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                    <span className="progress-text">{course.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="sidebar-footer">
            <Link to="/users" className="view-all-users">View All Users</Link>
          </div>
        </div>
      )}

      {/* Overlay for sidebar */}
      {showProfileSidebar && (
        <div 
          className="sidebar-overlay" 
          onClick={toggleProfileSidebar}
        ></div>
      )}
      <section className="hero">
        <div className="hero-content">
          <h1>Empower Your Learning Journey</h1>
          <p>Discover a world of knowledge with our comprehensive courses, interactive lessons, and expert instructors. Join thousands of learners today!</p>
          <div className="hero-buttons">
            <Link to="/">
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
          <Link to="/">
            <button className="btn-primary">Explore More</button>
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