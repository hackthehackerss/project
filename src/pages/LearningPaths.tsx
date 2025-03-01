import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Book, ChevronRight, Shield, Sword, Target, Code, Network, Search, Filter, Award, Bug } from 'lucide-react';
import Navigation from '../components/Navigation';
import { useAuth } from '../contexts/AuthContext';

function LearningPaths() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(true); // Dark mode state
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedAccess, setSelectedAccess] = useState('all');
  const [visiblePaths, setVisiblePaths] = useState(6); // Pagination
  const timeoutRef = useRef(null);

  // Debounce search input
  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 300); // 300ms debounce delay

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [searchQuery]);

  // Scroll to section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handler to check auth before navigating to a path
  const handlePathClick = (path) => {
    if (!user) {
      navigate('/signup');
    } else {
      navigate(path);
    }
  };

  // Path cards without lock icons
  const pathCards = [
    {
      type: 'blue',
      title: 'Blue Team',
      description: 'Focus on defending systems, detecting threats, and responding to incidents. Perfect for aspiring Security Analysts and Incident Responders.',
      image: "/Learning Paths/blue-team-page.png",
      borderColor: 'border-primary-blue',
      hoverBorderColor: 'hover:border-primary-blue',
      iconColor: 'text-primary-blue',
      bgHover: 'hover:bg-primary-blue/5',
      icon: Shield
    },
    {
      type: 'red',
      title: 'Red Team',
      description: 'Master offensive security techniques, penetration testing, and vulnerability assessment. Ideal for aspiring Ethical Hackers.',
      image: "/Learning Paths/red-team-page.png",
      borderColor: 'border-primary-red',
      hoverBorderColor: 'hover:border-primary-red',
      iconColor: 'text-primary-red',
      bgHover: 'hover:bg-primary-red/5',
      icon: Sword
    }
  ];

  const blueTeamPaths = [
    {
      title: "Cybersecurity Fundamentals",
      path: "/cybersecurity-fundamentals",
      description: "Master the essential concepts and foundations of cybersecurity",
      icon: Shield,
      difficulty: "Beginner",
      access: "Free",
      image: "/Learning Paths/cybersecurity-fundamentals.jpeg",
      progress: 0,
      modules: [
        {
          title: "Core Concepts",
          topics: ["The CIA Triad", "Security Domains", "Types of Threats", "Attack Lifecycle"]
        },
        {
          title: "Network Security",
          topics: ["Network Protocols", "Firewalls & IDS/IPS", "Network Monitoring", "Traffic Analysis"]
        }
      ]
    },
    {
      title: "SOC Analyst",
      path: "/soc-analyst",
      description: "Master Security Operations Center processes and tools",
      icon: Target,
      difficulty: "Intermediate",
      access: "Pro",
      image: "/Learning Paths/soc-analyst.jpeg",
      progress: 0,
      modules: [
        {
          title: "SIEM Fundamentals",
          topics: ["Log Analysis", "Alert Triage", "Incident Response", "Threat Detection"]
        }
      ]
    },
    {
      title: "Incident Response",
      path: "/incident-response",
      description: "Learn to handle and respond to security incidents",
      icon: Network,
      difficulty: "Advanced",
      access: "Pro",
      image: "/Learning Paths/incident-response.jpeg",
      progress: 0,
      modules: [
        {
          title: "IR Process",
          topics: ["Incident Handling", "Digital Forensics", "Evidence Collection", "Root Cause Analysis"]
        }
      ]
    },
    {
      title: "Malware Analysis",
      path: "/malware-analysis",
      description: "Learn to analyze and understand malicious software",
      icon: Bug,
      difficulty: "Intermediate",
      access: "Pro",
      image: "/Learning Paths/malware-analysis.jpeg",
      progress: 0,
      modules: [
        {
          title: "Static Analysis",
          topics: ["File Headers", "String Analysis", "Code Analysis", "Signature Detection"]
        }
      ]
    },
    {
      title: "CySA+ Road Map",
      path: "/cysa-roadmap",
      description: "Comprehensive preparation for CompTIA CySA+ certification",
      icon: Shield,
      difficulty: "Advanced",
      access: "Pro",
      image: "/Learning Paths/cysa.jpeg",
      progress: 0,
      modules: [
        {
          title: "Threat Management",
          topics: ["Threat Intelligence", "Security Tools", "Vulnerability Management", "Incident Response"]
        }
      ]
    }
  ];

  const redTeamPaths = [
    {
      title: "Penetration Testing Basics",
      path: "/red-team/pentest-basics",
      description: "Learn the fundamentals of penetration testing",
      icon: Sword,
      difficulty: "Beginner",
      access: "Free",
      image: "/Learning Paths/pentestbasic.jpeg",
      progress: 0,
      modules: [
        {
          title: "Reconnaissance",
          topics: ["Information Gathering", "OSINT Techniques", "Network Scanning", "Vulnerability Assessment"]
        }
      ]
    },
    {
      title: "Web Application Security",
      path: "/red-team/web-security",
      description: "Master web application security testing",
      icon: Code,
      difficulty: "Intermediate",
      access: "Pro",
      image: "/Learning Paths/webexploit.jpeg",
      progress: 0,
      modules: [
        {
          title: "Web Vulnerabilities",
          topics: ["OWASP Top 10", "XSS & CSRF", "SQL Injection", "Authentication Bypass"]
        }
      ]
    },
    {
      title: "Offensive VBA Scripting",
      path: "/vba-scripting",
      description: "Create your first Office document macro and discover how to weaponize and exploit hidden functionalities within Office document properties.",
      icon: Bug,
      difficulty: "Advanced",
      access: "Free",
      image: "/Learning Paths/advancedpt.jpeg",
      progress: 0,
      modules: [
        {
          title: "Advanced Techniques",
          topics: ["Macro developing", "Shellcoding", "Initial Access", "Exploit Office"]
        }
      ]
    },
    {
      title: "OSCP Road Map",
      path: "/red-team/oscp-roadmap",
      description: "Comprehensive preparation for Offensive Security Certified Professional",
      icon: Sword,
      difficulty: "Advanced",
      access: "Pro",
      image: "/Learning Paths/oscp.jpeg",
      progress: 0,
      modules: [
        {
          title: "OSCP Preparation",
          topics: ["Buffer Overflow", "Active Directory", "Privilege Escalation", "Report Writing"]
        }
      ]
    },
    {
      title: "OSWP Road Map",
      path: "/OSWPCourse",
      description: "OSWP (Offensive Security Wireless Professional) is a certification from Offensive Security focused on wireless network security. It teaches Wi-Fi hacking techniques, including WEP, WPA, and WPA2 attacks using tools like Aircrack-ng.",
      icon: Sword,
      difficulty: "Advanced",
      access: "Pro",
      image: "/Learning Paths/oscp.jpeg",
      progress: 0,
      modules: [
        {
          title: "OSWP Road Map",
          topics: ["Wireless Network Fundamentals", "Attacking Wireless Networks", "Post-Exploitation & Rogue AP Attacks", "Wireless Reconnaissance & Enumeration"]
        }
      ]
    }
  ];

  const certificationPaths = [
    {
      title: "Certified SOC & Incident Responder (CSIR)",
      path: "/certifications/security-defender",
      description: "Comprehensive certification for defensive security operations",
      icon: Shield,
      difficulty: "Expert",
      access: "Pro",
      image: "/Main/logo2.jpg",
      duration: "6 months",
      examCost: "$299",
      modules: [
        {
          title: "Defense Fundamentals",
          topics: ["Security Architecture", "Defense in Depth", "Zero Trust Models", "Security Controls"]
        }
      ]
    },
    {
      title: "Certified Ethical Hacker Professional (CEHP)",
      path: "/certifications/ethical-hacker",
      description: "Advanced certification for ethical hacking and penetration testing",
      icon: Sword,
      difficulty: "Expert",
      access: "Pro",
      image: "/Main/logo2.jpg",
      duration: "8 months",
      examCost: "$499",
      modules: [
        {
          title: "Advanced Penetration Testing",
          topics: ["Network Penetration", "Web App Security", "Mobile Security", "Cloud Security"]
        }
      ],
      theme: 'red'
    }
  ];

  // Filter paths
  const filterPaths = (paths) => {
    return paths.filter(path => {
      const matchesSearch =
        path.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
        path.description.toLowerCase().includes(debouncedSearchQuery.toLowerCase());
      const matchesDifficulty = selectedDifficulty === 'all' || path.difficulty.toLowerCase() === selectedDifficulty.toLowerCase();
      const matchesAccess = selectedAccess === 'all' || path.access.toLowerCase() === selectedAccess.toLowerCase();
      return matchesSearch && matchesDifficulty && matchesAccess;
    });
  };

  const filteredBluePaths = filterPaths(blueTeamPaths).slice(0, visiblePaths);
  const filteredRedPaths = filterPaths(redTeamPaths).slice(0, visiblePaths);
  const filteredCertPaths = filterPaths(certificationPaths).slice(0, visiblePaths);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-background text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Navigation darkMode={darkMode} onToggleDarkMode={() => setDarkMode(!darkMode)} />

      {/* Choose Your Path Section */}
      <div className="bg-primary-dark/50 py-16 relative overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/10 via-primary-red/10 to-primary-blue/10 animate-gradient-x opacity-50" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 animate-fade-in title-gradient title-glow">
              Choose Your Path
            </h1>
            <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-black'} animate-fade-in`}>
              Select your specialization and begin your cybersecurity journey
            </p>
          </div>

          {/* Red and Blue Team Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {pathCards.map((card, index) => (
              <div
                key={index}
                className={`relative bg-primary-dark/30 rounded-lg p-8 border ${card.borderColor} ${card.hoverBorderColor} ${card.bgHover} transition-all duration-300 cursor-pointer group hover:scale-105 hover:shadow-lg hover:shadow-${card.type === 'blue' ? 'primary-blue/20' : 'primary-red/20'} overflow-hidden`}
                onClick={() => scrollToSection(card.type === 'blue' ? 'blue-team-paths' : 'red-team-paths')}
              >
                {/* Glowing Border */}
                <div className={`absolute inset-0 rounded-lg border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${card.type === 'blue' ? 'border-primary-blue/50' : 'border-primary-red/50'}`} />

                {/* Card Content */}
                <div className="flex items-center">
                  <div className="w-48 h-48 flex-shrink-0 mr-6">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    {/* Animated Icon */}
                    <card.icon
                      className={`w-12 h-12 mb-4 ${card.iconColor} transition-transform duration-300 group-hover:scale-110`}
                    />
                    {/* Fade-in Title */}
                    <h2 className="text-2xl font-bold mb-2 animate-fade-in">
                      {card.title}
                    </h2>
                    <p className="text-gray-400">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-primary-dark/30 py-8 border-y border-primary-blue/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search learning paths..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-10 pr-4 py-2 ${darkMode ? 'bg-background border-primary-blue/20' : 'bg-white border-gray-200'} border rounded-lg focus:outline-none focus:border-primary-blue text-white`}
                aria-label="Search learning paths"
              />
            </div>
            <div className="flex items-center space-x-4">
              <Filter className="text-primary-blue" />
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className={`px-4 py-2 ${darkMode ? 'bg-background border-primary-blue/20' : 'bg-white border-gray-200'} border rounded-md focus:outline-none focus:border-primary-blue text-white`}
              >
                <option value="all">All Difficulties</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
                <option value="expert">Expert</option>
              </select>
              <select
                value={selectedAccess}
                onChange={(e) => setSelectedAccess(e.target.value)}
                className={`px-4 py-2 ${darkMode ? 'bg-background border-primary-blue/20' : 'bg-white border-gray-200'} border rounded-md focus:outline-none focus:border-primary-blue text-white`}
              >
                <option value="all">All Access</option>
                <option value="free">Free</option>
                <option value="pro">Pro</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Paths Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Blue Team Paths */}
        <div id="blue-team-paths" className="mb-12">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Shield className="w-8 h-8 text-primary-blue mr-3" />
            Blue Team Learning Paths
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBluePaths.length > 0 ? (
              filteredBluePaths.map((path, index) => (
                <div
                  key={index}
                  onClick={() => handlePathClick(path.path)}
                  className="bg-primary-dark/30 rounded-lg border border-primary-blue/20 overflow-hidden hover:border-primary-blue transition-all hover:scale-105 cursor-pointer"
                >
                  <div className="relative h-82">
                    <img
                      src={path.image}
                      alt={path.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <path.icon className="w-6 h-6 text-primary-blue" />
                      <h3 className="text-xl font-bold">{path.title}</h3>
                    </div>
                    <p className="text-gray-400 mb-4">{path.description}</p>
                    
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 rounded-full bg-primary-blue/10 text-primary-blue text-sm">
                        {path.difficulty}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm ${path.access === 'Free' ? 'bg-green-500/10 text-green-500' : 'bg-primary-red/10 text-primary-red'}`}>
                        {path.access}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-400 mb-1">
                        <span>Progress</span>
                        <span>{path.progress}%</span>
                      </div>
                      <div className="w-full h-2 bg-primary-dark rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary-blue transition-all duration-300"
                          style={{ width: `${path.progress}%` }}
                        />
                      </div>
                    </div>

                    <button className="bg-primary-blue text-background px-4 py-2 rounded-md hover:bg-secondary-blue transition flex items-center justify-center w-full">
                      Start Learning
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-xl text-gray-400 mb-4">No blue team paths found. Try adjusting your filters.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedDifficulty('all');
                    setSelectedAccess('all');
                  }}
                  className="bg-primary-blue text-white px-6 py-2 rounded-lg hover:bg-secondary-blue transition"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Red Team Paths */}
        <div id="red-team-paths" className="mb-12">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Sword className="w-8 h-8 text-primary-red mr-3" />
            Red Team Learning Paths
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRedPaths.length > 0 ? (
              filteredRedPaths.map((path, index) => (
                <div
                  key={index}
                  onClick={() => handlePathClick(path.path)}
                  className="bg-primary-dark/30 rounded-lg border border-primary-red/20 overflow-hidden hover:border-primary-red transition-all hover:scale-105 cursor-pointer"
                >
                  <div className="relative h-82">
                    <img
                      src={path.image}
                      alt={path.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <path.icon className="w-6 h-6 text-primary-red" />
                      <h3 className="text-xl font-bold">{path.title}</h3>
                    </div>
                    <p className="text-gray-400 mb-4">{path.description}</p>
                    
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 rounded-full bg-primary-red/10 text-primary-red text-sm">
                        {path.difficulty}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm ${path.access === 'Free' ? 'bg-green-500/10 text-green-500' : 'bg-primary-red/10 text-primary-red'}`}>
                        {path.access}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-400 mb-1">
                        <span>Progress</span>
                        <span>{path.progress}%</span>
                      </div>
                      <div className="w-full h-2 bg-primary-dark rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary-red transition-all duration-300"
                          style={{ width: `${path.progress}%` }}
                        />
                      </div>
                    </div>

                    <button className="bg-primary-red text-background px-4 py-2 rounded-md hover:bg-secondary-red transition flex items-center justify-center w-full">
                      Start Learning
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-xl text-gray-400 mb-4">No red team paths found. Try adjusting your filters.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedDifficulty('all');
                    setSelectedAccess('all');
                  }}
                  className="bg-primary-red text-white px-6 py-2 rounded-lg hover:bg-secondary-red transition"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Professional Certifications */}
        <div>
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Award className="w-8 h-8 text-primary-blue mr-3" />
            Professional Certifications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertPaths.length > 0 ? (
              filteredCertPaths.map((path, index) => (
                <div
                  key={index}
                  onClick={() => handlePathClick(path.path)}
                  className={`bg-primary-dark/30 rounded-lg border ${path.theme === 'red' ? 'border-primary-red/20 hover:border-primary-red' : 'border-primary-blue/20 hover:border-primary-blue'} overflow-hidden transition-all hover:scale-105 cursor-pointer`}
                >
                  <div className="relative h-82">
                    <img
                      src={path.image}
                      alt={path.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <path.icon className={`w-6 h-6 ${path.theme === 'red' ? 'text-primary-red' : 'text-primary-blue'}`} />
                      <h3 className="text-xl font-bold">{path.title}</h3>
                    </div>
                    <p className="text-gray-400 mb-4">{path.description}</p>
                    
                    <div className="flex items-center space-x-4 mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm ${path.theme === 'red' ? 'bg-primary-red/10 text-primary-red' : 'bg-primary-blue/10 text-primary-blue'}`}>
                        {path.difficulty}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm ${path.theme === 'red' ? 'bg-primary-red/10 text-primary-red' : 'bg-primary-blue/10 text-primary-blue'}`}>
                        {path.duration}
                      </span>
                    </div>

                    <div className={`mb-4 p-3 ${path.theme === 'red' ? 'bg-primary-red/5' : 'bg-primary-blue/5'} rounded-lg border ${path.theme === 'red' ? 'border-primary-red/10' : 'border-primary-blue/10'}`}>
                      <div className="text-sm text-gray-400">
                        Exam Cost: <span className={`font-semibold ${path.theme === 'red' ? 'text-primary-red' : 'text-primary-blue'}`}>
                          {path.examCost}
                        </span>
                      </div>
                    </div>

                    <button className={`${path.theme === 'red' ? 'bg-primary-red hover:bg-secondary-red' : 'bg-primary-blue hover:bg-secondary-blue'} text-background px-4 py-2 rounded-md transition flex items-center justify-center w-full`}>
                      Start Certification
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-xl text-gray-400 mb-4">No certifications found. Try adjusting your filters.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedDifficulty('all');
                    setSelectedAccess('all');
                  }}
                  className="bg-primary-blue text-white px-6 py-2 rounded-lg hover:bg-secondary-blue transition"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
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

export default LearningPaths;
