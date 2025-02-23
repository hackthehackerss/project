import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Shield, Search, Filter } from "lucide-react";
import Navigation from "../components/Navigation";
import Typed from "typed.js";

// Terminal Component
const Terminal = ({ darkMode }) => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);
  const [pwd, setPwd] = useState("/home/user");
  const fakeIP = "192.168.42.100";
  const [history, setHistory] = useState([]);
  const [files, setFiles] = useState({
    "/home/user": ["file1.txt", "file2.txt", "logs.txt", "sensitive.txt", "tmp"],
    "/home/user/tmp": ["update.exe"],
  });

  const handleCommand = (command) => {
    if (!command.trim()) return; // Ignore empty commands
    const timestamp = new Date().toLocaleTimeString();
    const [cmd, ...args] = command.trim().split(" ");
    setHistory((prevHistory) => [...prevHistory, command]);

    let response = "";

    switch (cmd) {
      case "help":
        response = "Available commands: help, ls, cd, pwd, echo, clear, exit, cat, md5sum, touch, mkdir, rm, mv, cp, chmod, whoami, ifconfig, nmap, ssh, uname, history, ps aux, uptime, df -h, dmesg, journalctl, last";
        break;

      case "ls":
        response = files[pwd] ? files[pwd].join("  ") : "No files found.";
        break;

      case "pwd":
        response = pwd;
        break;

      case "cd":
        if (args[0] === "..") {
          // Move up one directory
          const newPwd = pwd.split('/').slice(0, -1).join('/') || '/';
          setPwd(newPwd);
          response = `Moved back to ${newPwd}`;
        } else if (args[0] === "tmp" && pwd === "/home/user") {
          // Move into /home/user/tmp
          setPwd("/home/user/tmp");
          response = "Moved into /home/user/tmp";
        } else {
          response = "Directory not found.";
        }
        break;

      case "echo":
        response = args.join(" ") || "No input provided";
        break;

      case "clear":
        setOutput([]);
        return;

      case "exit":
        response = "Goodbye!";
        break;

      case "md5sum":
        if (args[0] === "update.exe" && pwd === "/home/user/tmp") {
          response = "05da32043b1e3a147de634c550f1954d  update.exe";
        } else {
          response = `md5sum: ${args[0]}: No such file`;
        }
        break;

      case "cat":
        if (!args[0]) {
          response = "Usage: cat <filename>";
          break;
        }
        if (!files[pwd]?.includes(args[0])) {
          response = `cat: ${args[0]}: No such file or directory`;
          break;
        }
        switch (args[0]) {
          case "file1.txt":
            response = "HackTheHackers Cybersecurity Learning Platform\nLearn. Defend. Conquer.";
            break;
          case "file2.txt":
            response = "Hackers are not born, they are made. Join HackTheHackers to master the art of cybersecurity.";
            break;
          case "sensitive.txt":
            response = "user: admin\npassword: iamadmin";
            break;
          default:
            response = `Contents of ${args[0]}: [...]`;
        }
        break;

      case "whoami":
        response = "HackTheHackers";
        break;

      case "ifconfig":
        response = `eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet ${fakeIP}  netmask 255.255.255.0  broadcast 192.168.42.255
        inet6 fe80::1a2b:3c4d:5e6f:1a2b  prefixlen 64  scopeid 0x20<link>
        ether 00:1a:2b:3c:4d:5e  txqueuelen 1000  (Ethernet)
        RX packets 12345  bytes 123456789 (123.4 MB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 9876  bytes 98765432 (98.7 MB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0`;
        break;

      case "nmap":
        if (args.includes(fakeIP)) {
          response = `Starting Nmap 7.92 ( https://nmap.org ) at ${new Date().toLocaleString()}
          Nmap scan report for ${fakeIP}
          Host is up (0.0021s latency).
          Not shown: 997 closed ports
          PORT     STATE    SERVICE
          22/tcp   open     ssh
          80/tcp   filtered http
          443/tcp  filtered https
          MAC Address: 00:1A:2B:3C:4D:5E (Unknown)

          OS detection performed. Please report incorrect results at https://nmap.org/submit/.
          Nmap done: 1 IP address (1 host up) scanned in 2.71 seconds`;
        } else {
          response = "Nmap scan failed: Invalid target or host is down.";
        }
        break;

      case "ssh":
        if (args[0] === `admin@${fakeIP}`) {
          response = "admin@192.168.42.100's password:";
        } else {
          response = "ssh: Could not resolve hostname";
        }
        break;

      case "iamadmin":
        if (output.length > 0 && output[output.length - 1].response.includes("password:")) {
          response = "Access granted. FLAG{HACK_THE_HACKERS_Flag}";
        } else {
          response = "Command not found.";
        }
        break;

      case "ps aux":
        response = `PID    USER    COMMAND\n1      root    /sbin/init\n242    user    /bin/bash\n666    hacker  ./backdoor`;
        break;

      case "uptime":
        response = "up 6 days, 2:15, 1 user, load average: 0.05, 0.02, 0.01";
        break;

      case "df -h":
        response = `Filesystem      Size  Used Avail Use% Mounted on\n/dev/sda1       50G   20G   30G  40%  /`;
        break;

      case "history":
        response = history.join("\n");
        break;

      default:
        response = `Command not found: ${command}`;
    }

    setOutput((prevOutput) => [...prevOutput, { timestamp, command, response }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    handleCommand(input);
    setInput("");
  };

  // Command history navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowUp" && history.length > 0) {
        setInput(history[history.length - 1]);
      } else if (e.key === "ArrowDown") {
        setInput("");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [history]);

  return (
    <div
      className={`relative ${darkMode ? "text-green-400" : "text-green-800"} font-mono p-6 rounded-lg shadow-lg`}
      style={{
        backgroundImage: "url('/Main/linux.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "20px",
        borderRadius: "10px",
        minHeight: "400px",
      }}
    >
      <div className="h-64 overflow-y-auto mb-4 max-w-full bg-black/80 p-3 rounded-md">
        {output.map((item, index) => (
          <div key={index}>
            <div className="text-white">
              <span className="text-gray-500">{item.timestamp} </span>
              <span className="font-bold">$</span> {item.command}
            </div>
            <div>{item.response.split("\n").map((line, i) => <div key={i}>{line}</div>)}</div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex items-center">
        <span className="text-white">$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-transparent border-none text-green-400 ml-2 flex-grow focus:outline-none"
          autoFocus
          placeholder="Type a command"
        />
      </form>
    </div>
  );
};



  const filteredLabs = labs.filter((lab) => {
    const matchesSearch = lab.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDifficulty = filterDifficulty === "all" || lab.difficulty === filterDifficulty;
    return matchesSearch && matchesDifficulty;
  });

  useEffect(() => {
    const typed = new Typed("#tagline", {
      strings: [
        "Put Your Red Team Skills to the Test!",
        "Sharpen your ethical hacking skills with hands-on Capture The Flag challenges.",
        "Become a better ethical hacker—one challenge at a time!",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToLabs = () => {
    const labsSection = document.getElementById("labs");
    if (labsSection) {
      labsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? "bg-background text-white" : "bg-gray-100 text-black"} font-sans`}>
      <Navigation darkMode={darkMode} onToggleDarkMode={() => setDarkMode(!darkMode)} />

      <div className="relative py-20" style={{ height: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center mb-6">
            <img src="/Main/logo-shield.png" alt="HackTheHackers Logo" className="w-16 h-16 mr-4" />
            <h1 className="text-5xl font-bold">
              <span className={darkMode ? "text-white" : "text-black"}>Hack</span>
              <span className="text-red-500">The</span>
              <span className={darkMode ? "text-white" : "text-black"}>Hackers</span>
            </h1>
          </div>
          <p id="tagline" className="text-xl text-gray-400 mb-8"></p>
          <button onClick={scrollToLabs} className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 text-lg font-semibold transition-all">
            Explore Labs
          </button>
        </div>
      </div>
  
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
      {/* Terminal Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Linux Command Training</h2>
        <Terminal darkMode={darkMode} />
      </div>

      {/* Footer */}
      <footer className={`${darkMode ? "bg-primary-dark/30 border-primary-blue/20" : "bg-gray-200 border-gray-300"} text-white py-8 mt-16 border-t`}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>© 2025 HackTheHackers. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default CTFLabsPage;
