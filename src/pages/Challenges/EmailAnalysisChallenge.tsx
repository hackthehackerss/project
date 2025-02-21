import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, XCircle, HelpCircle, Download } from 'lucide-react';
import Confetti from 'react-confetti';

function EmailAnalysisChallenge() {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      text: '1. What is the sender\'s email address?',
      answer: 'trapmnk@gmail.com',
      hint: 'Check the "From" field in the email headers.',
    },
    {
      id: 2,
      text: '2. What is the recipient\'s email address?',
      answer: 'aviorcyber@gmail.com',
      hint: 'Check the "To" field in the email headers.',
    },
    {
      id: 3,
      text: '3. What is the subject line of the email?',
      answer: 'Action Required: Unfinished PayPal Payment!',
      hint: 'Look at the subject line in the email headers.',
    },
    {
      id: 4,
      text: '4. What transaction ID is mentioned in the email?',
      answer: 'PP-7K2M9X8L5D',
      hint: 'Search for a transaction ID in the email body.',
    },
    {
      id: 5,
      text: '5. Which Google service adds extra authentication headers to the email?',
      answer: 'Gmail',
      hint: 'Look for authentication headers added by Google services.',
    },
    {
      id: 6,
      text: '6. Did the SPF authentication pass? (Yes/No)',
      answer: 'Yes',
      hint: 'Check the SPF authentication results in the email headers.',
    },
    {
      id: 7,
      text: '7. What domain is used in the phishing link?',
      answer: 'paypalsecure-payment.com',
      hint: 'Inspect the hyperlinks in the email body.',
    },
    {
      id: 8,
      text: '8. In the email signature, who does the email claim to be from?',
      answer: 'service@paypal.com',
      hint: 'Look at the email signature at the bottom of the email.',
    },
    {
      id: 9,
      text: '9. What is the sending mail server\'s IP address?',
      answer: '209.85.220.41',
      hint: 'Check the "Received" headers for the originating IP address.',
    },
    {
      id: 10,
      text: '10. At what time was the email sent?',
      answer: '12:09:31',
      hint: 'Look for the "Date" field in the email headers.',
    },
    {
      id: 11,
      text: '11. What type of phishing attack is this?',
      answer: 'Credential Harvesting',
      hint: 'Analyze the email content and links to determine the attack type.',
    },
  ]);

  const [timeTaken, setTimeTaken] = useState(0);
  const [timerRunning, setTimerRunning] = useState(true);
  const [hintsRemaining, setHintsRemaining] = useState(3);

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
  useEffect(() => {
    if (allQuestionsAnswered) {
      setTimerRunning(false);
    }
  }, [allQuestionsAnswered]);

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
  };

  const correctAnswersCount = questions.filter((q) => q.isCorrect).length;
  const totalQuestions = questions.length;
  const progress = (correctAnswersCount / totalQuestions) * 100;

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
            src="/Challenges/emailanalysischallenge.png"
            alt="Phishing Email Analysis Challenge Banner"
            className="w-auto max-h-80 object-cover rounded-lg shadow-lg group-hover:scale-105 group-hover:rotate-1 transition-transform duration-300 ease-in-out relative z-10"
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 -mt-16 relative z-10">
        <h1 className="text-3xl font-bold mb-8">Phishing Email Analysis Challenge</h1>

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
            An employee has reported a suspicious email claiming to be from PayPal. Your task is to analyze the email headers and body to assess its legitimacy and identify key phishing indicators.
          </p>
        </div>

        <div className="text-center mb-8">
          <a
            href="/Challenges/PhishingEmail.eml"
            download="PhishingEmail.eml"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center space-x-2"
          >
            <Download className="w-5 h-5" />
            <span>Download PhishingEmail.eml</span>
          </a>
        </div>

        <div className="bg-primary-dark/30 rounded-lg p-6 border border-primary-blue/20 mb-8">
          <h2 className="text-xl font-semibold mb-4">Suggested Tools</h2>
          <p className="text-gray-400 mb-4">
            To analyze the email, you can use the following tools:
          </p>
          <ul className="list-disc list-inside text-gray-400">
            <li>
              <a
                href="https://mxtoolbox.com/EmailHeaders.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-blue hover:text-primary-blue/80"
              >
                MXToolbox Email Header Analyzer
              </a>{' '}
              - A tool for analyzing email headers.
            </li>
            <li>
              <a
                href="https://toolbox.googleapps.com/apps/messageheader/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-blue hover:text-primary-blue/80"
              >
                Google Messageheader Analyzer
              </a>{' '}
              - A tool for parsing email headers.
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

        {allQuestionsAnswered && (
          <>
            <Confetti width={window.innerWidth} height={window.innerHeight} />
            <div className="mt-8 p-4 bg-green-600 text-white rounded-lg text-center">
              <p className="text-lg font-semibold">Congratulations!</p>
              <p>You have completed the challenge with {correctAnswersCount} out of {totalQuestions} correct answers.</p>
            </div>
          </>
        )}
      </div>
{/* Footer */}
<footer className="bg-primary-dark/30 text-white py-8 mt-16 border-t border-primary-blue/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">© 2025 HackTheHackers. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default EmailAnalysisChallenge;