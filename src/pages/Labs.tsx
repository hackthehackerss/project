import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Search, Filter } from 'lucide-react';
import Navigation from '../components/Navigation';

// Terminal Component
const Terminal = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);

  const handleCommand = (command) => {
    let response = '';
    const timestamp = new Date().toLocaleTimeString();

    // Split the command and arguments
    const [cmd, ...args] = command.trim().split(' ');

    switch (cmd) {
      case 'help':
        response = 'Available commands: help, ls, cd, pwd, echo, clear, exit, cat, touch, mkdir';
        break;
      case 'ls':
        response = 'file1.txt  file2.txt  directory1';
        break;
      case 'pwd':
        response = '/home/user';
        break;
      case 'echo':
        response = args.join(' ') || 'No input provided';
        break;
      case 'clear':
        setOutput([]);
        return;
      case 'exit':
        response = 'Goodbye!';
        break;
      case 'mkdir':
        if (args.length > 0) {
          response = `Directory '${args.join(' ')}' created successfully!`;
        } else {
          response = 'Please provide a directory name.';
        }
        break;
      default:
        response = `Command not found: ${command}`;
    }

    setOutput((prevOutput) => [
      ...prevOutput,
      { timestamp, command, response },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    handleCommand(input);
    setInput('');
  };

  return (
    <div className="bg-black/90 text-green-400 font-mono p-6 rounded-lg shadow-lg">
      <div className="h-64 overflow-y-auto mb-4 max-w-full">
        {output.map((item, index) => (
          <div key={index}>
            <div className="text-white">
              <span className="text-gray-500">{item.timestamp} </span>
              <span className="font-bold">$</span> {item.command}
            </div>
            <div>{item.response}</div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex items-center relative">
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
  return (
    <div className="min-h-screen bg-background text-white font-sans">
      {/* Navigation Bar */}
      <Navigation darkMode={true} onToggleDarkMode={() => {}} />

      {/* Hero Section */}
      <div className="bg-primary-dark/50 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center mb-6">
            <img
              src="/Main/logo-shield.png"
              alt="HackTheHackers Logo"
              className="w-16 h-16 mr-4"
            />
            <h1 className="text-5xl font-bold">
              <span className="text-white">Hack</span>
              <span className="text-red-500">The</span>
              <span className="text-white">Hackers</span>
            </h1>
          </div>
          <p className="text-xl text-gray-400 mb-8">
            Put Your Red Team Skills to the Test!<br />
            Sharpen your ethical hacking skills with hands-on Capture The Flag challenges.<br /> Exploit vulnerabilities, solve complex puzzles, and think like an attacker to enhance your offensive security expertise.<br /> Become a better ethical hacker—one challenge at a time!
          </p>
          <a
            href="#labs"
            className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 text-lg font-semibold transition-all"
          >
            Explore Labs
          </a>
        </div>
      </div>

      {/* Labs Section */}
      <div id="labs" className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Available Labs</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* CTF Challenge 1 */}
          <div className="bg-primary-dark/30 rounded-lg border border-primary-blue/20 hover:border-primary-blue transition-all transform hover:-translate-y-2 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="p-6 relative">
              <img
                src="/Main/logo2.jpg"
                alt="Vulnerable Web App"
                className="w-64 h-64 mx-auto mb-4 object-cover rounded-lg"
              />
              <h2 className="text-xl font-semibold mb-3">Vulnerable Web App</h2>
              <p className="text-gray-400 mb-4">
                Exploit common web vulnerabilities like SQL Injection, XSS, and CSRF to capture the flag.
              </p>
              <div className="flex items-center mb-4">
                <span className="text-sm text-gray-400">Difficulty:</span>
                <div className="w-24 h-2 bg-gray-700 rounded-full ml-2">
                  <div className="h-2 bg-green-500 rounded-full" style={{ width: '40%' }}></div>
                </div>
                <span className="text-sm text-gray-400 ml-2">Easy</span>
              </div>
              <a
                href="https://example.com/vulnerable-web-app"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 text-center transition-all"
              >
                Start Lab
              </a>
            </div>
          </div>

          {/* CTF Challenge 2 */}
          <div className="bg-primary-dark/30 rounded-lg border border-primary-blue/20 hover:border-primary-blue transition-all transform hover:-translate-y-2 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="p-6 relative">
              <img
                src="/Main/logo2.jpg"
                alt="Network Penetration Test"
                className="w-64 h-64 mx-auto mb-4 object-cover rounded-lg"
              />
              <h2 className="text-xl font-semibold mb-3">Network Penetration Test</h2>
              <p className="text-gray-400 mb-4">
                Perform network penetration testing on a vulnerable machine. Identify and exploit misconfigurations.
              </p>
              <div className="flex items-center mb-4">
                <span className="text-sm text-gray-400">Difficulty:</span>
                <div className="w-24 h-2 bg-gray-700 rounded-full ml-2">
                  <div className="h-2 bg-yellow-500 rounded-full" style={{ width: '60%' }}></div>
                </div>
                <span className="text-sm text-gray-400 ml-2">Medium</span>
              </div>
              <a
                href="https://example.com/network-pt-machine"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 text-center transition-all"
              >
                Start Lab
              </a>
            </div>
          </div>

          {/* CTF Challenge 3 */}
          <div className="bg-primary-dark/30 rounded-lg border border-primary-blue/20 hover:border-primary-blue transition-all transform hover:-translate-y-2 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="p-6 relative">
              <img
                src="/Main/logo2.jpg"
                alt="Privilege Escalation"
                className="w-64 h-64 mx-auto mb-4 object-cover rounded-lg"
              />
              <h2 className="text-xl font-semibold mb-3">Privilege Escalation</h2>
              <p className="text-gray-400 mb-4">
                Gain root access by exploiting local privilege escalation vulnerabilities.
              </p>
              <div className="flex items-center mb-4">
                <span className="text-sm text-gray-400">Difficulty:</span>
                <div className="w-24 h-2 bg-gray-700 rounded-full ml-2">
                  <div className="h-2 bg-red-500 rounded-full" style={{ width: '80%' }}></div>
                </div>
                <span className="text-sm text-gray-400 ml-2">Hard</span>
              </div>
              <a
                href="https://example.com/priv-esc-challenge"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 text-center transition-all"
              >
                Start Lab
              </a>
            </div>
          </div>
        </div>
      </div>

        {/* Terminal Section */}
        <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Linux Command Training</h2>
        <Terminal />
      </div>

      {/* Footer */}
      <footer className="bg-primary-dark/30 text-white py-8 mt-16 border-t border-primary-blue/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">© 2025 HackTheHackers. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default CTFLabsPage;
