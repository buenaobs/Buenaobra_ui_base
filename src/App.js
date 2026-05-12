import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [darkMode, setDarkMode] = useState(false);

  const sidebarItems = [
    { icon: '🏠', label: 'Home', active: true },
    { icon: '📈', label: 'Trending', active: false },
    { icon: '📍', label: 'Map & Incidents', active: false },
    { icon: '📑', label: 'Categories', active: false },
    { icon: '⭐', label: 'Favorites', active: false },
    { icon: '💾', label: 'Saved Locations', active: false },
    { icon: '🎬', label: 'Multimedia', active: false },
  ];

  const categories = [
    { icon: '🏛️', label: 'Nation', color: '#e74c3c' },
    { icon: '⚽', label: 'Sports', color: '#f39c12' },
    { icon: '📅', label: 'Events', color: '#f1c40f' },
    { icon: '🛡️', label: 'Crime', color: '#27ae60' },
    { icon: '💡', label: 'Education', color: '#3498db' },
    { icon: '👥', label: 'Community', color: '#9b59b6' },
    { icon: '➕', label: 'More', color: '#e91e63' },
  ];

  const newsFilters = ['All', 'Nation', 'Sports', 'Events', 'Crime', 'More'];

  const newsArticles = [
    {
      id: 1,
      category: 'Sports',
      categoryColor: '#f39c12',
      title: 'NU Rookie Sam Cantada Gains Experience from UAAP Finals Loss',
      date: 'May 10, 2026',
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop',
    },
    {
      id: 2,
      category: 'Community',
      categoryColor: '#9b59b6',
      title: 'Navotas landfill fire extinguished — Marcos',
      date: 'May 10, 2026',
      image: 'https://images.unsplash.com/photo-1532693322450-2cb5c511067d?w=400&h=300&fit=crop',
    },
    {
      id: 3,
      category: 'Nation',
      categoryColor: '#e74c3c',
      title: 'UK Embassy in PH urged to revoke businessman’s visa over trafficking',
      date: 'May 10, 2026',
      image: 'https://images.unsplash.com/photo-1555525503-a0a27e0d3559?w=400&h=300&fit=crop',
    },
  ];

  const trendingNews = [
    'Duterte Lawyer Exits, Makes Last Bid For Client\'s Release',
    'Lawyer Pushing VP Impech Raps Wary Of Senate Delay',
    'Padilla To Dela Rosa On ICC Arrest Warrant Rumors: Don\'t Come Out',
  ];

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <div className="logo">NewsHub</div>
        </div>
        
        <div className="header-center">
          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input 
              type="text" 
              placeholder="Search news by keyword, location, or topic..." 
              className="search-input"
            />
          </div>
        </div>

        <div className="header-right">
          <div className="location-selector">
            <span className="location-icon">📍</span>
            <span>Lucena City</span>
            <span className="dropdown-arrow">▼</span>
          </div>
          
          <button 
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          
          <button className="notification-btn">
            <span>🔔</span>
          </button>
          
          <div className="user-profile">
            <div className="user-avatar">👤</div>
            <span>Barney</span>
            <span className="dropdown-arrow">▼</span>
          </div>
        </div>
      </header>

      <div className="main-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <nav className="sidebar-nav">
            {sidebarItems.map((item, index) => (
              <div 
                key={index} 
                className={`nav-item ${item.active ? 'active' : ''}`}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </div>
            ))}
          </nav>

          <div className="sidebar-categories">
            <h3 className="categories-title">Categories</h3>
            {categories.map((cat, index) => (
              <div key={index} className="category-item">
                <span 
                  className="category-icon"
                  style={{ backgroundColor: cat.color }}
                >
                  {cat.icon}
                </span>
                <span className="category-label">{cat.label}</span>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          {/* Hero Section */}
          <div className="hero-section">
            <div className="hero-content">
              <span className="hero-badge">RECENT</span>
              <h1 className="hero-title">
                Padilla: I'll keep defending Dutertes till Senate becomes impeachment court
              </h1>
              <p className="hero-author">By: Isabelle Pechay | Nation</p>
            </div>
            <div className="hero-image">
              <img 
                src="https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?w=800&h=400&fit=crop" 
                alt="Hero news"
              />
            </div>
          </div>

          {/* Content Grid */}
          <div className="content-grid">
            {/* Main News */}
            <div className="news-section">
              <h2 className="section-title">Latest News</h2>
              
              <div className="news-filters">
                {newsFilters.map((filter, index) => (
                  <button
                    key={index}
                    className={`filter-btn ${activeCategory === filter.toLowerCase() ? 'active' : ''}`}
                    onClick={() => setActiveCategory(filter.toLowerCase())}
                  >
                    <span className="filter-icon">
                      {index === 0 ? '📰' : index === 1 ? '🏛️' : index === 2 ? '⚽' : index === 3 ? '📅' : index === 4 ? '🛡️' : '➕'}
                    </span>
                    {filter}
                  </button>
                ))}
              </div>

              <div className="news-grid">
                {newsArticles.map((article) => (
                  <article key={article.id} className="news-card">
                    <div className="news-card-image">
                      <img src={article.image} alt={article.title} />
                      <span 
                        className="news-card-category"
                        style={{ backgroundColor: article.categoryColor }}
                      >
                        {article.category}
                      </span>
                    </div>
                    <div className="news-card-content">
                      <h3 className="news-card-title">{article.title}</h3>
                      <div className="news-card-footer">
                        <span className="news-date">{article.date}</span>
                        <button className="bookmark-btn">🔖</button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Right Sidebar */}
            <aside className="right-sidebar">
              {/* Weather Widget */}
              <div className="weather-widget">
                <div className="weather-header">
                  <span className="weather-location">📍 Lucena City</span>
                </div>
                <div className="weather-content">
                  <div className="weather-temp">25°</div>
                  <div className="weather-icon">⛅</div>
                </div>
                <div className="weather-desc">Partly Cloudy</div>
                <div className="weather-time">May 10, 2026 | 7:30 AM</div>
                <button className="view-forecast">View Forecast</button>
              </div>

              {/* Trending Now */}
              <div className="trending-widget">
                <h3 className="trending-title">Trending Now</h3>
                <div className="trending-list">
                  {trendingNews.map((news, index) => (
                    <div key={index} className="trending-item">
                      <span className="trending-number">{index + 1}</span>
                      <span className="trending-text">{news}</span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;