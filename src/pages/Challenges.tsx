import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { PlusCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import { useAuth } from '../contexts/AuthContext';
import Card from '../components/Card';

function Challenges() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('All');
  const [difficultyFilter, setDifficultyFilter] = useState('All');
  const [sortBy, setSortBy] = useState('default');
  const [suggestions, setSuggestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12); // Number of items per page
  const searchRef = useRef(null);

  // Sample challenges data
  const challenges = [
    {
      id: 1,
      title: 'PowerShell Analysis',
      description: 'Analyze a suspicious PowerShell command and investigate its role in a system compromise.',
      questions: 10,
      points: 200,
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
      points: 500,
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
      points: 500,
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
      points: 200,
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
      points: 500,
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
      points: 200,
      difficulty: 'Easy',
      category: 'DFIR',
      link: '/challenges/HackedByCaptcha',
      backgroundImage: '/Challenges/HackedByCaptcha.png',
    },
    {
      id: 7,
      title: 'Emotet Trace',
      description: 'Investigate a suspicious file hash using OSINT techniques.',
      questions: 13,
      points: 200,
      difficulty: 'Easy',
      category: 'Malware Analysis',
      link: '/challenges/emotet',
      backgroundImage: '/Challenges/Emotet.png',
    },
    {
      id: 8,
      title: 'Coming Soon',
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

  // Pagination: Calculate the challenges to display on the current page
  const indexOfLastChallenge = currentPage * itemsPerPage;
  const indexOfFirstChallenge = indexOfLastChallenge - itemsPerPage;
  const displayedChallenges = sortedChallenges.slice(indexOfFirstChallenge, indexOfLastChallenge);

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

  // Reset currentPage to 1 when searchQuery, activeTab, difficultyFilter, or sortBy changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, activeTab, difficultyFilter, sortBy]);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle challenge card click: check auth status before navigating
  const handleChallengeClick = (link) => {
    if (!user) {
      navigate('/signup');
    } else {
      navigate(link);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-background text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Navigation darkMode={darkMode} onToggleDarkMode={() => setDarkMode(!darkMode)} />

      {/* Hero Section */}
      <div className="bg-primary-dark/50 py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
          <img
            src="/Main/logo-full.png"
            alt="Full Logo"
            className="h-64 animate-float mr-8"
          />
          <div className="text-left">
            <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-black'} mb-1`}>
              Put Your Blue Team Skills to the Test!<br />
              Step into the role of a cybersecurity investigator and tackle real-world challenges designed to sharpen your defensive expertise.<br />
              Analyze security incidents, uncover hidden threats, and piece together the story behind cyber attacks using the knowledge you've gained.<br />
              Are you ready to take on the challenge?
            </p>
          </div>
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
              <Card
                key={challenge.id}
                challenge={challenge}
                onClick={() => handleChallengeClick(challenge.link)}
              />
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

        {/* Pagination Controls */}
        <div className="flex justify-center mt-8">
          {Array.from({ length: Math.ceil(sortedChallenges.length / itemsPerPage) }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={`mx-1 px-4 py-2 rounded-lg ${
                currentPage === i + 1
                  ? 'bg-primary-blue text-white'
                  : 'bg-primary-dark/30 text-white hover:bg-primary-blue/50'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
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
