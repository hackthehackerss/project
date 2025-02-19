import React from 'react';

const Labs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Penetration Testing Labs</h1>
      <p className="text-lg text-gray-600 text-center mb-8">
        Dive into hands-on CTF challenges and penetration testing labs designed to sharpen your hacking skills. Capture flags, exploit vulnerabilities, and solve security puzzles to advance your knowledge!
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* CTF Challenge 1 */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-2">Vulnerable Web App</h2>
          <p className="text-gray-500">Exploit common web application vulnerabilities such as SQL Injection, XSS, and CSRF to capture the flag.</p>
          <a
            href="https://example.com/vulnerable-web-app"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 text-center inline-block"
          >
            Start Lab
          </a>
        </div>

        {/* CTF Challenge 2 */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-2">Network Penetration Test</h2>
          <p className="text-gray-500">Perform network penetration testing on a vulnerable machine. Identify and exploit misconfigurations, open ports, and services.</p>
          <a
            href="https://example.com/network-pt-machine"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 text-center inline-block"
          >
            Start Lab
          </a>
        </div>

        {/* CTF Challenge 3 */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-2">Privilege Escalation Challenge</h2>
          <p className="text-gray-500">Gain root access by exploiting local privilege escalation vulnerabilities. Test your skills in escalating from a low-privileged user.</p>
          <a
            href="https://example.com/priv-esc-challenge"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 text-center inline-block"
          >
            Start Lab
          </a>
        </div>

        {/* CTF Challenge 4 */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-2">Buffer Overflow Exploit</h2>
          <p className="text-gray-500">Test your knowledge on buffer overflow vulnerabilities and exploit them to gain unauthorized access to a system.</p>
          <a
            href="https://example.com/buffer-overflow-lab"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 text-center inline-block"
          >
            Start Lab
          </a>
        </div>

        {/* CTF Challenge 5 */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-2">Capture the Flag: IoT Hacking</h2>
          <p className="text-gray-500">Exploit vulnerabilities in an IoT system and capture the flag by taking control of the device or network.</p>
          <a
            href="https://example.com/iot-ctf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 text-center inline-block"
          >
            Start Lab
          </a>
        </div>

        {/* CTF Challenge 6 */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-2">Reverse Engineering Challenge</h2>
          <p className="text-gray-500">Analyze a malicious binary and reverse-engineer it to uncover the hidden flag. Test your reverse engineering skills!</p>
          <a
            href="https://example.com/reverse-engineering-lab"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 text-center inline-block"
          >
            Start Lab
          </a>
        </div>
      </div>
    </div>
  );
};

export default Labs;
