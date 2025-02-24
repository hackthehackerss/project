import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, XCircle, HelpCircle, Download, User, Droplet, Trophy } from 'lucide-react';
import Confetti from 'react-confetti';

function WebBruteForceChallenge() {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      text: '1. What is the attacker\'s IP address?',
      answer: '58.216.174.226',
      hint: 'Look for the source IP address in the packets.',
    },
    {
      id: 2,
      text: '2. Which country is the attacker from?',
      answer: 'China',
      hint: 'Use a geolocation tool or database to map the IP address to a country.',
    },
    {
      id: 3,
      text: '3. What is the target server\'s IP address?',
      answer: '150.147.144.133',
      hint: 'Look for the destination IP address in the packets.',
    },
    {
      id: 4,
      text: '4. What is the destination port used for the brute-force attack?',
      answer: '80',
      hint: 'Check the TCP destination port in the packets.',
    },
    {
      id: 5,
      text: '5. What is the page targeted by the brute-force attack?',
      answer: '/admin.php',
      hint: 'Look for the HTTP request path in the POST requests.',
    },
    {
      id: 6,
      text: '6. What is the HTTP method used in the brute-force attack?',
      answer: 'POST',
      hint: 'Analyze the HTTP requests in the packets.',
    },
    {
      id: 7,
      text: '7. What HTTP response status code indicates a successful login?',
      answer: '200',
      hint: 'Look for the server\'s response to the successful login attempt.',
    },
    {
      id: 8,
      text: '8. What is the username of the successful login attempt?',
      answer: 'admin',
      hint: 'Find the username in the payload of the successful POST request.',
    },
    {
      id: 9,
      text: '9. What was the correct password used?',
      answer: 'ihatehackers',
      hint: 'Find the password in the payload of the successful POST request.',
    },
    {
      id: 10,
      text: '10. Which tool did the attacker use?',
      answer: 'Nikto',
      hint: 'Check the User-Agent string in the HTTP requests.',
    },
    {
      id: 11,
      text: '11. How many unique usernames were targeted in the brute-force attack?',
      answer: '20',
      hint: `tshark -r web_bruteforce.pcap -Y "tcp.port == 80" -T fields -e tcp.payload | xxd -r -p | grep -i "username=" | awk -F'username=' '{print $2}' | awk -F'&' '{print $1}' | sort | uniq -c"`,
    },
    {
      id: 12,
      text: '12. What is the Mitre ATT&CK technique ID for brute-force attacks?',
      answer: 'T1110',
      hint: 'Refer to the Mitre ATT&CK framework.',
    },
  ]);

  const [timeTaken, setTimeTaken] = useState(0);
  const [timerRunning, setTimerRunning] = useState(true);
  const [hintsRemaining, setHintsRemaining] = useState(3);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    let interval;
    if (timerRunning) {
      interval = setInterval(() => {
        setTimeTaken((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerRunning]);

  const allQuestionsAnswered = questions.every((q) => q.isCorrect !== undefined);
  const correctAnswersCount = questions.filter((q) => q.isCorrect).length;
  const totalQuestions = questions.length;
  const progress = (correctAnswersCount / totalQuestions) * 100;

  const handleAnswerSubmit = (id, answer) => {
    setQuestions(
      questions.map((q) => {
        if (q.id === id) {
          return {
            ...q,
            userAnswer: answer.toLowerCase(),
            isCorrect: answer.toLowerCase() === q.answer.toLowerCase(),
          };
        }
        return q;
      })
    );
  };

  const toggleHint = (id) => {
    if (hintsRemaining > 0) {
      setQuestions(
        questions.map((q) => {
          if (q.id === id && !q.showHint) {
            setHintsRemaining(hintsRemaining - 1);
            return {
              ...q,
              showHint: true,
            };
          }
          return q;
        })
      );
    }
  };

  const resetChallenge = () => {
    setQuestions(
      questions.map((q) => ({
        ...q,
        userAnswer: undefined,
        isCorrect: undefined,
        showHint: false,
      }))
    );
    setTimeTaken(0);
    setTimerRunning(true);
    setHintsRemaining(3);
    setShowConfetti(false);
    setShowSuccess(false);
    setShowError(false);
  };

  const handleComplete = () => {
    if (allQuestionsAnswered && correctAnswersCount === totalQuestions) {
      setShowConfetti(true);
      setShowSuccess(true);
      setShowError(false);
    } else {
      setShowError(true);
      setShowConfetti(false);
      setShowSuccess(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-white">
      <nav className="bg-primary-dark border-b border-primary-blue/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-4">
              <Link to="/challenges" className="text-primary-blue hover:text-primary-blue/80 flex items-center">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Challenges
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex justify-center mb-12">
        <div className="relative group">
          <div className="absolute inset-0 rounded-lg bg-primary-blue/40 blur-lg group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
          <img
            src="/Challenges/bruteforcechallenge.png"
            alt="Web Brute-Force Attack Analysis Challenge Banner"
            className="w-auto max-h-80 object-cover rounded-lg shadow-lg group-hover:scale-105 group-hover:rotate-1 transition-transform duration-300 ease-in-out relative z-10"
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 -mt-16 relative z-10">
        <h1 className="text-3xl font-bold mb-8">Web Server Brute-Force Detected</h1>

        <div className="text-center mb-6">
          <p className="text-gray-400">
            Time Taken: {Math.floor(timeTaken / 60)}:{timeTaken % 60 < 10 ? `0${timeTaken % 60}` : timeTaken % 60}
          </p>
        </div>

        <div className="mb-6">
          <div className="text-lg font-semibold mb-2">Progress</div>
          <div className="w-full bg-primary-dark/20 h-4 rounded-full relative overflow-hidden">
            <div
              className="h-4 rounded-full transition-all duration-500 ease-in-out"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #4ade80, #3b82f6)',
                boxShadow: '0 0 8px rgba(59, 130, 246, 0.6)',
              }}
            >
              <div className="text-center text-white text-sm font-semibold absolute inset-0 flex items-center justify-center">
                {`${Math.round(progress)}%`}
              </div>
            </div>
          </div>
          <div className="text-sm mt-2 text-gray-400">
            {correctAnswersCount} of {totalQuestions} correct
          </div>
        </div>

        <div className="text-gray-400 mb-6">
          Hints Remaining: {hintsRemaining}
        </div>

        <div className="text-center mb-6">
          <button
            onClick={resetChallenge}
            className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-all"
          >
            Reset Challenge
          </button>
        </div>

        <div className="bg-primary-dark/30 rounded-lg p-6 border border-primary-blue/20 mb-8">
          <h2 className="text-xl font-semibold mb-4">Challenge Introduction</h2>
          <p className="text-gray-400 mb-6">
            A web server has been targeted by a brute-force attack, and the network traffic has been captured in a PCAP file. Your task is to analyze the traffic, identify the attacker’s techniques, and determine the impact of the attack.
          </p>
        </div>

        <div className="text-center mb-8">
          <a
            href="/Challenges/web_bruteforce.pcap"
            download="web_bruteforce.pcap"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center space-x-2"
          >
            <Download className="w-5 h-5" />
            <span>Download Challenge Files</span>
          </a>
        </div>

        <div className="bg-primary-dark/30 rounded-lg p-6 border border-primary-blue/20 mb-8">
          <h2 className="text-xl font-semibold mb-4">Suggested Tools</h2>
          <p className="text-gray-400 mb-4">
            To analyze the PCAP file, you can use the following tools:
          </p>
          <ul className="list-disc list-inside text-gray-400">
            <li>
              <a
                href="https://www.wireshark.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-blue hover:text-primary-blue/80"
              >
                Wireshark
              </a>{' '}
              - A network protocol analyzer.
            </li>
            <li>
              <a
                href="https://tshark.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-blue hover:text-primary-blue/80"
              >
                Tshark
              </a>{' '}
              - A command-line version of Wireshark.
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          {questions.map((question) => (
            <div
              key={question.id}
              className="bg-primary-dark/30 rounded-lg p-6 border border-primary-blue/20 hover:bg-primary-dark/40 hover:border-primary-blue transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-4">{question.text}</h3>
                  <div className="flex items-center space-x-4">
                    <input
                      type="text"
                      className="bg-background border border-primary-blue/20 rounded-md px-4 py-2 focus:outline-none focus:border-primary-blue"
                      placeholder="Enter your answer"
                      onChange={(e) => handleAnswerSubmit(question.id, e.target.value)}
                    />
                    <button
                      className="text-gray-500 hover:text-gray-400"
                      onClick={() => toggleHint(question.id)}
                    >
                      <HelpCircle className="w-5 h-5" />
                    </button>
                    {question.userAnswer && (
                      question.isCorrect ? (
                        <CheckCircle2 className="w-6 h-6 text-green-500" />
                      ) : (
                        <XCircle className="w-6 h-6 text-red-500" />
                      )
                    )}
                  </div>
                  {question.showHint && (
                    <div className="mt-4 text-gray-300 italic">{question.hint}</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Complete Button */}
        <div className="max-w-4xl mx-auto px-4 mt-8 text-center">
          <button
            onClick={handleComplete}
            className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-all flex items-center justify-center space-x-2"
          >
            <CheckCircle2 className="w-5 h-5" />
            <span>Complete Challenge</span>
          </button>

          {/* Error Message */}
          {showError && (
            <div className="mt-4 p-4 bg-red-600 text-white rounded-lg">
              <p>Please answer all questions correctly before completing the challenge.</p>
            </div>
          )}
        </div>

        {/* Success Message and Confetti */}
        {showSuccess && (
          <>
            <Confetti width={window.innerWidth} height={window.innerHeight} />
            <div className="max-w-4xl mx-auto px-4 mt-8 text-center">
              <div className="p-4 bg-green-600 text-white rounded-lg">
                <p className="text-lg font-semibold">Congratulations!</p>
                <p>You have completed the challenge with {correctAnswersCount} out of {totalQuestions} correct answers.</p>
              </div>
            </div>
          </>
        )}

        {/* Combined frame for Created by and First Blood */}
        <div className="max-w-4xl mx-auto px-4 mt-8">
          <div className="bg-primary-dark/40 p-6 rounded-xl border border-primary-blue/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center space-x-8">
              {/* Created by section */}
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary-blue/10 rounded-full">
                  <User className="w-6 h-6 text-primary-blue" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Created by:</p>
                  <div className="flex items-center space-x-2">
                    <p className="text-primary-blue hover:text-primary-blue/80 font-semibold">HackTheHackers</p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="w-px bg-primary-blue/20 h-12"></div>

              {/* First Blood section */}
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-red-500/10 rounded-full">
                  <Droplet className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">First Blood:</p>
                  <div className="flex items-center space-x-2">
                    <Trophy className="w-5 h-5 text-yellow-500" />
                    <p className="text-red-500 hover:text-red-400 font-semibold">User</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer with Copyright */}
      <footer className="bg-primary-dark/30 text-white py-8 mt-8 border-t border-primary-blue/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Copyright notice */}
          <p className="text-gray-400">© 2025 HackTheHackers. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default WebBruteForceChallenge;
