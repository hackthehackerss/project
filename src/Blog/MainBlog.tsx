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
        <section className="mb-8">
          <div className="bg-gray-800 dark:bg-gray-900 text-white rounded-lg p-8">
            <h1 className="text-4xl font-bold mb-4">Cybersecurity Blog</h1>
            <p className="text-lg mb-4">
              Dive into the latest insights, news, and articles on cybersecurity.
            </p>
            {profile && (
              <Link
                to="/blog/create"
                className="inline-block bg-primary-red text-white px-4 py-2 rounded hover:bg-secondary-red"
              >
                Create New Post
              </Link>
            )}
          </div>
        </section>

        {/* Articles Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedArticles.map((article) => (
            <Link
              key={article.id}
              // For the Bybit article, redirect to the custom route.
              to={article.id === 3 ? "/Blog/Blogs/Bybit" : `/blog/${article.id}`}
              className="block bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {article.title}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {article.date}
                </p>
              </div>
            </Link>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary-dark/30 dark:bg-gray-800 text-white py-8 mt-16 border-t border-primary-blue/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 HackTheHackers. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MainBlog;
