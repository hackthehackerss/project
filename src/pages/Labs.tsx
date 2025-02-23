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
  const [visibleChallenges, setVisibleChallenges] = useState(6);
  const searchRef = useRef(null);

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
      points: 700,
      difficulty: 'Easy',
      category: 'SOC',
      link: '/challenges/email-analysis',
      backgroundImage: '/Challenges/emailanalysischallenge.png',
    },
    {
      id: 5,
      title: 'Web Log Investigation',
      description: 'Analyze server logs to detect and mitigate potential web attacks.',
      questions: 9,
      points: 750,
      difficulty: 'Hard',
      category: 'DFIR',
      link: '/challenges/web-log-investigation',
      backgroundImage: '/Challenges/weblog-banner.jpg',
    },
    {
      id: 6,
      title: '',
      questions: 0,
      points: 0,
      difficulty: '',
      category: '',
      link: '#',
      backgroundImage: '/Challenges/comingsoon.png',
    },
  ];

  const filteredChallenges = challenges.filter((challenge) => {
    const matchesSearch = challenge.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === 'All' || challenge.category === activeTab;
    const matchesDifficulty = difficultyFilter === 'All' || challenge.difficulty === difficultyFilter;
    return matchesSearch && matchesTab && matchesDifficulty;
  });

  const sortedChallenges = [...filteredChallenges].sort((a, b) => {
    if (sortBy === 'difficulty') {
      const difficultyOrder = { Easy: 1, Medium: 2, Hard: 3 };
      return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
    } else if (sortBy === 'points') {
      return b.points - a.points;
    }
    return 0;
  });

  const displayedChallenges = sortedChallenges.slice(0, visibleChallenges);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setSuggestions(
      challenges.filter((challenge) =>
        challenge.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

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
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedChallenges.map((challenge) => (
            <Link key={challenge.id} to={challenge.link} className="relative rounded-lg p-6 border hover:border-primary-blue hover:scale-105 transition-transform">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${challenge.backgroundImage})` }}></div>
              <div className="relative z-10 text-white">
                <h2 className="text-xl font-bold">{challenge.title}</h2>
                <p className="text-sm">{challenge.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Challenges;
