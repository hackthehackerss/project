import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { useAuth } from '../contexts/AuthContext';

const MainBlog: React.FC = () => {
  // Set dark mode to true by default
  const [darkMode, setDarkMode] = useState(true);
  const { profile } = useAuth();

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  // Function to scroll to the articles section
  const scrollToArticles = () => {
    const articlesSection = document.getElementById('articles-section');
    if (articlesSection) {
      articlesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Sample articles data
  const articles = [
    {
      id: 1,
      title: "Understanding Zero Trust Security",
      date: "2025-01-1",
      image: "https://via.placeholder.com/400x200?text=Zero+Trust+Security",
    },
    {
      id: 2,
      title: "Latest Cyber Threats in 2025",
      date: "2025-01-3",
      image: "https://via.placeholder.com/400x200?text=Cyber+Threats+2025",
    },
    {
      id: 3,
      title: "Bybit Suffers Largest Crypto Hack In History",
      date: "2025-02-27",
      image: "/Blog/bybit.png",  // Updated image path for Bybit article
    },
    // Add more articles as needed
  ];

  // Sort articles in descending order by date (newest first)
  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navigation darkMode={darkMode} onToggleDarkMode={handleDarkModeToggle} />
      <main className="container mx-auto p-4">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white rounded-lg p-8 text-center">
            <h1 className="text-5xl font-bold mb-4">Cybersecurity Blog</h1>
            <p className="text-xl mb-6">
              Dive into the latest insights, news, and articles on cybersecurity.
            </p>
            <button
              onClick={scrollToArticles}
              className="inline-block bg-white text-blue-900 font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Explore Articles
            </button>
          </div>
        </section>

        {/* Articles Grid */}
        <section id="articles-section" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
            >
              <Link to={article.id === 3 ? "/Blog/Blogs/Bybit" : `/blog/${article.id}`}>
                <div className="overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover transform hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                    {article.title}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    Published on {new Date(article.date).toLocaleDateString()}
                  </p>
                  <button className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                    Read More →
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p className="text-gray-400">
                HackTheHackers is a leading cybersecurity training platform, which also
                provides a cybersecurity blog offering insights, news, and resources to
                help you stay secure in the digital world.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/blog" className="text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  Twitter
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 HackTheHackers. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainBlog;
