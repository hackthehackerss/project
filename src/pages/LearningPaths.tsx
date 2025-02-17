import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Book, ChevronRight, Shield, Sword, Target, Code, Network, Lock, FileSearch, Bug, Braces, Filter, Search, Award } from 'lucide-react';
import Navigation from '../components/Navigation';

// Import images
import cyberFundamentalsImg from '../assets/images/cybersecurity-fundamentals.png';
import socAnalystImg from '../assets/images/soc-analyst.png';
import incidentResponseImg from '../assets/images/incident-response.png';
import malwareAnalysisImg from '../assets/images/malware-analysis.png';
import blueTeamImg from '../assets/images/blue-team.png';
import redTeamImg from '../assets/images/red-team.png';

function LearningPaths() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedAccess, setSelectedAccess] = useState('all');

  const blueTeamPaths = [
    {
      title: "Cybersecurity Fundamentals",
      path: "/cybersecurity-fundamentals",
      description: "Master the essential concepts and foundations of cybersecurity",
      icon: Shield,
      difficulty: "Beginner",
      access: "Free",
      image: cyberFundamentalsImg,
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
      image: socAnalystImg,
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
      icon: FileSearch,
      difficulty: "Advanced",
      access: "Pro",
      image: incidentResponseImg,
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
      difficulty: "Advanced",
      access: "Pro",
      image: malwareAnalysisImg,
      progress: 0,
      modules: [
        {
          title: "Static Analysis",
          topics: ["File Headers", "String Analysis", "Code Analysis", "Signature Detection"]
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
      access: "Pro",
      image: redTeamImg,
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
      image: redTeamImg,
      progress: 0,
      modules: [
        {
          title: "Web Vulnerabilities",
          topics: ["OWASP Top 10", "XSS & CSRF", "SQL Injection", "Authentication Bypass"]
        }
      ]
    },
    {
      title: "Advanced Exploitation",
      path: "/red-team/advanced-exploitation",
      description: "Advanced exploitation techniques and methodologies",
      icon: Bug,
      difficulty: "Advanced",
      access: "Pro",
      image: redTeamImg,
      progress: 0,
      modules: [
        {
          title: "Advanced Techniques",
          topics: ["Buffer Overflows", "Shellcoding", "Privilege Escalation", "Post Exploitation"]
        }
      ]
    }
  ];

  const certificationPaths = [
    {
      title: "Certified Security Defender (CSD)",
      path: "/certifications/security-defender",
      description: "Comprehensive certification for defensive security operations",
      icon: Shield,
      difficulty: "Advanced",
      access: "Pro",
      image: blueTeamImg,
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
      title: "Certified Incident Handler (CIH)",
      path: "/certifications/incident-handler",
      description: "Professional certification for incident response and handling",
      icon: FileSearch,
      difficulty: "Expert",
      access: "Pro",
      image: incidentResponseImg,
      duration: "4 months",
      examCost: "$399",
      modules: [
        {
          title: "Incident Management",
          topics: ["Incident Response", "Digital Forensics", "Threat Hunting", "Crisis Management"]
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
      image: redTeamImg,
      duration: "8 months",
      examCost: "$499",
      modules: [
        {
          title: "Advanced Penetration Testing",
          topics: ["Network Penetration", "Web App Security", "Mobile Security", "Cloud Security"]
        }
      ]
    },
    {
      title: "Certified Security Architect (CSA)",
      path: "/certifications/security-architect",
      description: "Expert-level certification for security architecture and design",
      icon: Lock,
      difficulty: "Expert",
      access: "Pro",
      image: cyberFundamentalsImg,
      duration: "12 months",
      examCost: "$599",
      modules: [
        {
          title: "Security Architecture",
          topics: ["Enterprise Security", "Cloud Security", "Application Security", "Network Security"]
        }
      ]
    }
  ];

  const filterPaths = (paths: any[]) => {
    return paths.filter(path => {
      const matchesSearch = path.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          path.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDifficulty = selectedDifficulty === 'all' || path.difficulty.toLowerCase() === selectedDifficulty;
      const matchesAccess = selectedAccess === 'all' || path.access.toLowerCase() === selectedAccess.toLowerCase();
      
      return matchesSearch && matchesDifficulty && matchesAccess;
    });
  };

  const filteredBluePaths = filterPaths(blueTeamPaths);
  const filteredRedPaths = filterPaths(redTeamPaths);
  const filteredCertPaths = filterPaths(certificationPaths);

  return (
    <div className="min-h-screen bg-background text-white">
      <Navigation darkMode={true} onToggleDarkMode={() => {}} />

      {/* Search and Filters */}
      <div className="bg-primary-dark/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search learning paths..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-background border border-primary-blue/20 rounded-lg focus:outline-none focus:border-primary-blue text-white"
              />
            </div>
            <div className="flex items-center space-x-4">
              <Filter className="text-primary-blue" />
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="bg-background border border-primary-blue/20 rounded-lg px-4 py-2 focus:outline-none focus:border-primary-blue text-white"
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
                className="bg-background border border-primary-blue/20 rounded-lg px-4 py-2 focus:outline-none focus:border-primary-blue text-white"
              >
                <option value="all">All Access</option>
                <option value="free">Free</option>
                <option value="pro">Pro</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Blue Team Paths */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Shield className="w-8 h-8 text-primary-blue mr-3" />
            Blue Team Learning Paths
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredBluePaths.map((path, index) => (
              <div 
                key={index}
                className="bg-primary-dark/30 rounded-lg border border-primary-blue/20 overflow-hidden hover:border-primary-blue transition-all hover:scale-105"
              >
                <div className="relative h-48">
                  <img
                    src={path.image}
                    alt={path.title}
                    className="w-full h-full object-cover"
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
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      path.access === 'Free' 
                        ? 'bg-green-500/10 text-green-500'
                        : 'bg-primary-red/10 text-primary-red'
                    }`}>
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

                  <Link
                    to={path.path}
                    className="bg-primary-blue text-background px-4 py-2 rounded-md hover:bg-secondary-blue transition flex items-center justify-center"
                  >
                    Start Learning
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Red Team Paths */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Sword className="w-8 h-8 text-primary-red mr-3" />
            Red Team Learning Paths
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredRedPaths.map((path, index) => (
              <div 
                key={index}
                className="bg-primary-dark/30 rounded-lg border border-primary-red/20 overflow-hidden hover:border-primary-red transition-all hover:scale-105"
              >
                <div className="relative h-48">
                  <img
                    src={path.image}
                    alt={path.title}
                    className="w-full h-full object-cover"
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
                    <span className="px-3 py-1 rounded-full bg-primary-red/10 text-primary-red text-sm">
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

                  <Link
                    to={path.path}
                    className="bg-primary-red text-background px-4 py-2 rounded-md hover:bg-secondary-red transition flex items-center justify-center"
                  >
                    Start Learning
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certification Paths */}
        <div>
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Award className="w-8 h-8 text-primary-blue mr-3" />
            Professional Certifications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCertPaths.map((path, index) => (
              <div 
                key={index}
                className="bg-primary-dark/30 rounded-lg border border-primary-blue/20 overflow-hidden hover:border-primary-blue transition-all hover:scale-105"
              >
                <div className="relative h-48">
                  <img
                    src={path.image}
                    alt={path.title}
                    className="w-full h-full object-cover"
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
                    <span className="px-3 py-1 rounded-full bg-primary-blue/10 text-primary-blue text-sm">
                      {path.duration}
                    </span>
                  </div>

                  <div className="mb-4 p-3 bg-primary-blue/5 rounded-lg border border-primary-blue/10">
                    <div className="text-sm text-gray-400">
                      Exam Cost: <span className="text-primary-blue font-semibold">{path.examCost}</span>
                    </div>
                  </div>

                  <Link
                    to={path.path}
                    className="bg-primary-blue text-background px-4 py-2 rounded-md hover:bg-secondary-blue transition flex items-center justify-center"
                  >
                    Start Certification
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearningPaths;