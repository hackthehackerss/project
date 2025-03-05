import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Added useNavigate for redirection
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

const CTFLabsPage = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterDifficulty, setFilterDifficulty] = useState("all");
  const navigate = useNavigate();

  const labs = [
    {
      id: 1,
      title: "Vulnerable Web App",
      difficulty: "easy",
      description: "Exploit common web vulnerabilities like SQL Injection, XSS, and CSRF to capture the flag.",
      image: "/Main/logo2.jpg",
      link: "/labs/sqllab",
    },
    {
      id: 2,
      title: "Network Penetration Test",
      difficulty: "medium",
      description: "Perform network penetration testing on a vulnerable machine. Identify and exploit misconfigurations.",
      image: "/Main/logo2.jpg",
    },
    {
      id: 3,
      title: "Privilege Escalation",
      difficulty: "hard",
      description: "Gain root access by exploiting local privilege escalation vulnerabilities.",
      image: "/Main/logo2.jpg",
    },
  ];

  const filteredLabs = labs.filter((lab) => {
    const matchesSearch = lab.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDifficulty = filterDifficulty === "all" || lab.difficulty === filterDifficulty;
    return matchesSearch && matchesDifficulty;
  });

  // Typing Effect
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

      {/* Hero Section */}
      <div className="relative py-20" style={{ height: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center mb-6">
            <img
              src="/Main/logo-shield.png"
              alt="HackTheHackers Logo"
              className="w-16 h-16 mr-4"
            />
            <h1 className="text-5xl font-bold">
              <span className={darkMode ? "text-white" : "text-black"}>Hack</span>
              <span className="text-red-500">The</span>
              <span className={darkMode ? "text-white" : "text-black"}>Hackers</span>
            </h1>
          </div>
          <p id="tagline" className="text-xl text-gray-400 mb-8"></p>
          <button
            onClick={scrollToLabs}
            className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 text-lg font-semibold transition-all"
          >
            Explore Labs
          </button>
        </div>
      </div>

      {/* Labs Section */}
      <div id="labs" className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Available Labs</h2>
        <div className="flex justify-between mb-8">
          <input
            type="text"
            placeholder="Search labs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`${darkMode ? "bg-primary-dark/30 text-white" : "bg-gray-200 text-black"} p-2 rounded-lg w-64`}
          />
          <select
            value={filterDifficulty}
            onChange={(e) => setFilterDifficulty(e.target.value)}
            className={`${darkMode ? "bg-primary-dark/30 text-white" : "bg-gray-200 text-black"} p-2 rounded-lg`}
          >
            <option value="all">All Difficulties</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div className="wrapper">
          <div className="cols">
            {filteredLabs.map((lab) => (
              <div key={lab.id} className="col" onTouchStart={() => document.querySelector(`.col-${lab.id}`).classList.toggle('hover')}>
                <div className="container">
                  <div className="front" style={{ backgroundImage: `url(${lab.image})` }}>
                    <div className="inner">
                      <p>{lab.title}</p>
                      <span>{lab.difficulty.charAt(0).toUpperCase() + lab.difficulty.slice(1)}</span>
                    </div>
                  </div>
                  <div className="back">
                    <div className="inner">
                      <p>{lab.description}</p>
                      <button
                        onClick={() => lab.link && navigate(lab.link)}
                        className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 text-center transition-all"
                      >
                        Start Lab
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
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
