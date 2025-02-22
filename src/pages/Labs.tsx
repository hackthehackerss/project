import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Shield, Search, Filter } from "lucide-react";
import Navigation from "../components/Navigation";
import Typed from "typed.js";

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
    if (!command.trim()) return;
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
          const newPwd = pwd.split("/").slice(0, -1).join("/") || "/";
          setPwd(newPwd);
          response = `Moved back to ${newPwd}`;
        } else if (args[0] === "tmp" && pwd === "/home/user") {
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
      case "whoami":
        response = "HackTheHackers";
        break;
      case "ifconfig":
        response = `inet ${fakeIP} netmask 255.255.255.0 broadcast 192.168.42.255`;
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

  return (
    <div className={`relative ${darkMode ? "text-green-400" : "text-green-800"} font-mono p-6 rounded-lg shadow-lg`}> 
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
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="bg-transparent border-none text-green-400 ml-2 flex-grow focus:outline-none" autoFocus placeholder="Type a command" />
      </form>
    </div>
  );
};

const CTFLabsPage = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterDifficulty, setFilterDifficulty] = useState("all");
  
  const labs = [
    { id: 1, title: "Vulnerable Web App", difficulty: "easy", description: "Exploit common web vulnerabilities like SQL Injection to capture the flag.", image: "/Main/logo2.jpg", route: "/labs/sql" },
    { id: 2, title: "Vulnerable Online Shop", difficulty: "medium", description: "Perform web penetration testing on a vulnerable online shop. Identify and exploit misconfigurations.", image: "/Main/logo2.jpg", route: "/labs/shop" },
  ];

  return (
    <div>
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">CTF Labs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {labs.map((lab) => (
            <Link key={lab.id} to={lab.route} className="block bg-gray-800 p-4 rounded-md">
              <img src={lab.image} alt={lab.title} className="w-full h-32 object-cover mb-2 rounded" />
              <h2 className="text-lg font-semibold">{lab.title}</h2>
              <p className="text-sm">{lab.description}</p>
            </Link>
          ))}
        </div>
      </div>
      <Terminal darkMode={darkMode} />
    </div>
  );
};

export default CTFLabsPage;
