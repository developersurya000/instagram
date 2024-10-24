// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import './Home.css';
import { FiHeart, FiHome, FiUser, FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const dummyPosts = [
  {
    id: 1,
    username: 'hacker_user',
    imageUrl: 'https://via.placeholder.com/300',
    caption: 'Exploring the world of code!',
  },
  {
    id: 2,
    username: 'code_master',
    imageUrl: 'https://via.placeholder.com/300',
    caption: 'Another day, another bug fixed.',
  },
];

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  // Show the pop-up after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);
  const navigate=useNavigate()

  const closePopup = () => {
    setShowPopup(false);
    navigate('/')
  };

  return (
    <div className="home-container">
      {/* Header */}
      <header className="home-header">
        <h1>Instagram</h1>
      </header>

      {/* Post Feed */}
      <div className="post-feed">
        {dummyPosts.map((post) => (
          <div key={post.id} className="post">
            <div className="post-header">
              <strong>{post.username}</strong>
            </div>
            <img src={post.imageUrl} alt="Post" className="post-image" />
            <div className="post-caption">
              <p><strong>{post.username}</strong> {post.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <FiHome className="nav-icon" />
        <FiSearch className="nav-icon" />
        <FiHeart className="nav-icon" />
        <FiUser className="nav-icon" />
      </nav>

      {/* Pop-up Message */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Server busy, try again after some time.</p>
            <button onClick={closePopup} className="close-btn">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
