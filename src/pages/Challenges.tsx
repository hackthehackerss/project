import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle } from 'lucide-react';
import Navigation from '../components/Navigation';

function Challenges() {
  const [darkMode, setDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('All');
  const [difficultyFilter, setDifficultyFilter] = useState('All');
  const [sortBy, setSortBy] = useState('default');
  const [suggestions, setSuggestions] = useState([]);
  const [visibleChallenges, setVisibleChallenges] = useState(6); // Pagination
  const searchRef = useRef(null);

  // Sample challenges data
  const challenges = [
    {
      id: 1,
      title: 'PowerShell Analysis',
      description: 'Analyze a suspicious PowerShell command and investigate its role in a system compromise.',
      questions: 10,
      points: 500,
      difficulty: 'Easy',
      category: 'SOC',
      link: '/challenges/powershell-logs',
      backgroundImage: '/Challenges/powershell-banner2.jpg',
    },
    {
      id: 2,
      title: 'Miner On the Run',
      description: 'Investigate an encrypted endpoint and uncover a hidden cryptocurrency mining operation.',
      questions: 8,
      points: 600,
      difficulty: 'Medium',
      category: 'SOC',
      link: '/challenges/miner-on-the-run',
      backgroundImage: '/Challenges/cryptominer-banner.png',
    },
    {
      id: 3,
      title: 'Master File Trap',
      description: 'Analyze the Master File Table (MFT) to uncover details of a malware attack.',
      questions: 10,
      points: 700,
      difficulty: 'Medium',
      category: 'DFIR',
      link: '/challenges/mft-analysis',
      backgroundImage: '/Challenges/mft-banner.png',
    },
    {
      id: 4,
      title: 'Phishing Email Analysis',
      description: 'Analyze a suspicious email to uncover phishing indicators.',
      questions: 11,
      points: 500,
      difficulty: 'Easy',
      category: 'SOC',
      link: '/challenges/email-analysis',
      backgroundImage: '/Challenges/emailanalysischallenge.png',
    },
    {
      id: 5,
      title: 'Brute Force Detected',
      description: 'web server has been targeted by a brute-force attack.',
      questions: 12,
      points: 700,
      difficulty: 'Medium',
      category: 'SOC',
      link: '/challenges/bruteforcechallenge',
      backgroundImage: '/Challenges/bruteforcechallenge.png',
    },
    {
      id: 6,
      title: 'Hacked By Captcha',
      description: 'Analyze a compromised users interaction with a malicious CAPTCHA page.',
      questions: 12,
      points: 600,
      difficulty: 'Easy',
      category: 'DFIR',
      link: '/challenges/HackedByCaptcha',
      backgroundImage: '/Challenges/HackedByCaptcha.png',
    },
    {
      id: 7,
      title: '',
      questions: 0,
      points: 0,
      difficulty: '',
      category: '',
      link: '#',
      backgroundImage: '/Challenges/comingsoon.png',
    },
  ];

  // Filter challenges based on search query, active tab, and difficulty
  const filteredChallenges = challenges.filter((challenge) => {
    const matchesSearch = challenge.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === 'All' || challenge.category === activeTab;
    const matchesDifficulty = difficultyFilter === 'All' || challenge.difficulty === difficultyFilter;
    return matchesSearch && matchesTab && matchesDifficulty;
  });

  // Sort challenges
  const sortedChallenges = [...filteredChallenges].sort((a, b) => {
    if (sortBy === 'difficulty') {
      const difficultyOrder = { Easy: 1, Medium: 2, Hard: 3 };
      return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
    } else if (sortBy === 'points') {
      return b.points - a.points;
    }
    return 0;
  });

  // Pagination: Slice the challenges
  const displayedChallenges = sortedChallenges.slice(0, visibleChallenges);

  // Handle search input change for autocomplete
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setSuggestions(
      challenges.filter((challenge) =>
        challenge.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  // Close suggestions when clicking outside the search bar
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSuggestions([]);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-background text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Navigation darkMode={darkMode} onToggleDarkMode={() => setDarkMode(!darkMode)} />

      {/* Hero Section */}
      <div className="bg-primary-dark/50 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center mb-6">
            <img
              src="/Main/logo-shield.png"
              alt="HackTheHackers Logo"
              className="w-16 h-16 mr-4"
              loading="lazy"
            />
            <h1 className="text-5xl font-bold">
              <span className="text-white">Hack</span>
              <span className="text-red-500">The</span>
              <span className="text-white">Hackers</span>
            </h1>
          </div>
          <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-black'} mb-1`}>
            Put Your Blue Team Skills to the Test!<br />
            Step into the role of a cybersecurity investigator and tackle real-world challenges designed to sharpen your defensive expertise.<br /> Analyze security incidents, uncover hidden threats, and piece together the story behind cyber attacks using the knowledge you've gained.<br /> Are you ready to take on the challenge?
          </p>
        </div>
      </div>

      {/* Challenges Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center space-x-4">
              <h1 className="text-3xl font-bold">Challenges</h1>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-8">
          <Link
            to="/challenges/submit"
            className="bg-primary-blue text-background px-6 py-2 rounded-lg hover:bg-secondary-blue transition flex items-center space-x-2 mr-4"
          >
            <PlusCircle className="w-5 h-5" />
            <div className="flex flex-col items-start">
              <span className="text-xs font-semibold">GET RECOGNIZED</span>
              <span>Submit a Challenge</span>
            </div>
          </Link>

          <div className="flex items-center space-x-4">
            <div className="relative" ref={searchRef}>
              <input
                type="text"
                placeholder="Search challenges..."
                value={searchQuery}
                onChange={handleSearchChange}
                aria-label="Search challenges"
                className={`pl-10 pr-4 py-2 ${
                  darkMode ? 'bg-primary-dark/30 border-primary-blue/20' : 'bg-white border-gray-200'
                } border rounded-md focus:outline-none focus:border-primary-blue`}
              />
              {suggestions.length > 0 && (
                <div className="absolute z-10 bg-primary-dark/30 border border-primary-blue/20 rounded-md mt-1 w-full">
                  {suggestions.map((challenge) => (
                    <div
                      key={challenge.id}
                      className="p-2 hover:bg-primary-dark/40 cursor-pointer"
                      onClick={() => {
                        setSearchQuery(challenge.title);
                        setSuggestions([]);
                      }}
                    >
                      {challenge.title}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <select
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
              className={`px-4 py-2 ${
                darkMode ? 'bg-primary-dark/30 border-primary-blue/20' : 'bg-white border-gray-200'
              } border rounded-md focus:outline-none focus:border-primary-blue`}
            >
              <option value="All">All Categories</option>
              <option value="SOC">SOC</option>
              <option value="DFIR">DFIR</option>
              <option value="Malware Analysis">Malware Analysis</option>
            </select>

            <select
              value={difficultyFilter}
              onChange={(e) => setDifficultyFilter(e.target.value)}
              className={`px-4 py-2 ${
                darkMode ? 'bg-primary-dark/30 border-primary-blue/20' : 'bg-white border-gray-200'
              } border rounded-md focus:outline-none focus:border-primary-blue`}
            >
              <option value="All">All Difficulties</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className={`px-4 py-2 ${
                darkMode ? 'bg-primary-dark/30 border-primary-blue/20' : 'bg-white border-gray-200'
              } border rounded-md focus:outline-none focus:border-primary-blue`}
            >
              <option value="default">Sort By</option>
              <option value="difficulty">Difficulty</option>
              <option value="points">Points</option>
            </select>
          </div>
        </div>

        {/* Challenge Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedChallenges.length > 0 ? (
            displayedChallenges.map((challenge) => (
              <Link
                key={challenge.id}
                to={challenge.link}
                className={`relative rounded-lg p-6 border hover:border-primary-blue hover:scale-105 transition-transform transform-gpu will-change-transform group hover:shadow-lg overflow-hidden h-64`}
                style={{
                  backgroundImage: `url(${challenge.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-colors"></div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-primary-blue transition-colors">
                    {challenge.title || 'Coming Soon'}
                  </h3>
                  <p className={`text-gray-200 mb-4 group-hover:text-gray-100 transition-colors`}>
                    {challenge.description || 'Stay tuned for new challenges!'}
                  </p>
                  {/* Difficulty and Category Tags */}
                  <div className="mt-2 flex gap-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      challenge.difficulty === 'Easy' ? 'bg-green-500/20 text-green-500' :
                      challenge.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-500' :
                      challenge.difficulty === 'Hard' ? 'bg-red-500/20 text-red-500' : ''
                    }`}>
                      {challenge.difficulty}
                    </span>
                    <span className="text-xs bg-blue-500/20 text-blue-500 px-2 py-1 rounded-full">
                      {challenge.category}
                    </span>
                  </div>
                  {/* Points and Questions */}
                  {challenge.questions > 0 && (
                    <div className="flex justify-between text-sm mt-4">
                      <span className="text-primary-blue group-hover:text-primary-red transition-colors">
                        {challenge.questions} Questions
                      </span>
                      <span className="text-primary-red group-hover:text-primary-blue transition-colors">
                        {challenge.points} Points
                      </span>
                    </div>
                  )}
                  {/* Progress Bar */}
                  {challenge.questions > 0 && (
                    <div className="mt-4 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-primary-blue" style={{ width: '30%' }}></div>
                    </div>
                  )}
                </div>
              </Link>
            ))
          ) : (
            <div className="text-center py-12 col-span-full">
              <p className="text-xl text-gray-400 mb-4">No challenges found. Try adjusting your filters.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveTab('All');
                  setDifficultyFilter('All');
                }}
                className="bg-primary-blue text-white px-6 py-2 rounded-lg hover:bg-secondary-blue transition"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* Load More Button */}
        {filteredChallenges.length > visibleChallenges && (
          <button
            onClick={() => setVisibleChallenges((prev) => prev + 6)}
            className="mt-8 bg-primary-blue text-white px-6 py-2 rounded-lg hover:bg-secondary-blue transition"
          >
            Load More
          </button>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-primary-dark/30 text-white py-8 mt-16 border-t border-primary-blue/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className={`${darkMode ? 'text-gray-400' : 'text-black'}`}>
            © 2025 HackTheHackers. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Challenges;
