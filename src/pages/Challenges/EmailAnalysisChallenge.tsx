import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Download,
  User,
  Droplet,
  Trophy,
  ChevronDown,
  ChevronUp,
  Star
} from 'lucide-react';
import Confetti from 'react-confetti';
import { motion } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext';
import { useChallengeProgress } from '../../hooks/useChallengeProgress';
import { useXP } from '../../hooks/useXP';
import { getChallengeCompletionXP } from '../../utils/xpSystem';

// Reusable QuestionCard Component
const QuestionCard = ({
  question,
  hintsRemaining,
  onAnswerChange,
  onSubmit,
  onToggleHint,
}) => {
  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      animate={{
        opacity: question.isCorrect === true ? 0.5 : 1,
        scale: question.isCorrect === true ? 0.98 : 1,
      }}
      transition={{ duration: 0.5 }}
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
              onChange={(e) => onAnswerChange(question.id, e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !question.isCorrect) {
                  onSubmit(question.id, question.userAnswer);
                }
              }}
              disabled={question.isCorrect === true}
            />
            <button
              className={`text-gray-500 hover:text-gray-400 transition-all ${
                hintsRemaining === 0 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              onClick={() => onToggleHint(question.id)}
              disabled={question.isCorrect === true || hintsRemaining === 0}
            >
              <HelpCircle className="w-5 h-5" />
            </button>
            {!question.isCorrect && (
              <button
                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 active:scale-95 transition-all"
                onClick={() => onSubmit(question.id, question.userAnswer)}
              >
                Submit
              </button>
            )}
            {question.isCorrect !== undefined &&
              (question.isCorrect ? (
                <CheckCircle2 className="w-6 h-6 text-green-500" />
              ) : (
                <XCircle className="w-6 h-6 text-red-500" />
              ))}
          </div>
          {question.showHint && (
            <div className="mt-4 text-gray-300 italic">{question.hint}</div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

function EmailAnalysisChallenge() {
  const navigate = useNavigate();
  const { profile } = useAuth();
  const { awardUserXP } = useXP();
  
  const [questions, setQuestions] = useState([
    {
      id: 1,
      text: "1. What is the sender's email address?",
      answer: 'trapmnk@gmail.com',
      hint: 'Check the "From" field in the email headers.',
      showHint: false,
      userAnswer: '',
      isCorrect: undefined,
    },
    {
      id: 2,
      text: "2. What is the recipient's email address?",
      answer: 'aviorcyber@gmail.com',
      hint: 'Check the "To" field in the email headers.',
      showHint: false,
      userAnswer: '',
      isCorrect: undefined,
    },
    {
      id: 3,
      text: '3. What is the subject line of the email?',
      answer: 'Action Required: Unfinished PayPal Payment!',
      hint: 'Look at the subject line in the email headers.',
      showHint: false,
      userAnswer: '',
      isCorrect: undefined,
    },
    {
      id: 4,
      text: '4. What transaction ID is mentioned in the email?',
      answer: 'PP-7K2M9X8L5D',
      hint: 'Search for a transaction ID in the email body.',
      showHint: false,
      userAnswer: '',
      isCorrect: undefined,
    },
    {
      id: 5,
      text: "5. Which Google service adds extra authentication headers to the email?",
      answer: 'Gmail',
      hint: 'Look for authentication headers added by Google services.',
      showHint: false,
      userAnswer: '',
      isCorrect: undefined,
    },
    {
      id: 6,
      text: '6. Did the SPF authentication pass? (Yes/No)',
      answer: 'Yes',
      hint: 'Check the SPF authentication results in the email headers.',
      showHint: false,
      userAnswer: '',
      isCorrect: undefined,
    },
    {
      id: 7,
      text: '7. What domain is used in the phishing link?',
      answer: 'paypalsecure-payment.com',
      hint: 'Inspect the hyperlinks in the email body.',
      showHint: false,
      userAnswer: '',
      isCorrect: undefined,
    },
    {
      id: 8,
      text: '8. In the email signature, who does the email claim to be from?',
      answer: 'service@paypal.com',
      hint: 'Look at the email signature at the bottom of the email.',
      showHint: false,
      userAnswer: '',
      isCorrect: undefined,
    },
    {
      id: 9,
      text: "9. What is the sending mail server's IP address?",
      answer: '209.85.220.41',
      hint: 'Check the "Received" headers for the originating IP address.',
      showHint: false,
      userAnswer: '',
      isCorrect: undefined,
    },
    {
      id: 10,
      text: '10. At what time was the email sent?',
      answer: '12:09:31',
      hint: 'Look for the "Date" field in the email headers.',
      showHint: false,
      userAnswer: '',
      isCorrect: undefined,
    },
    {
      id: 11,
      text: '11. What type of phishing attack is this?',
      answer: 'Credential Harvesting',
      hint: 'Analyze the email content and links to determine the attack type.',
      showHint: false,
      userAnswer: '',
      isCorrect: undefined,
    },
  ]);

  const [hintsRemaining, setHintsRemaining] = useState(3);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [questionsVisible, setQuestionsVisible] = useState(false);
  const [xpAwarded, setXpAwarded] = useState(0);
  const [xpNotification, setXpNotification] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false); // Share modal state

  // Challenge progress tracking
  const challengeId = "email-analysis";
  const { progress, updateProgress } = useChallengeProgress(profile?.uid || '', challengeId);

  // If the challenge is already completed, update the questions to reflect stored answers
  useEffect(() => {
    if (progress?.completed && progress.answers) {
      setQuestions(questions.map(q => ({
        ...q,
        userAnswer: progress.answers[q.id] || '',
        isCorrect: progress.answers[q.id]?.toLowerCase() === q.answer.toLowerCase(),
        showHint: false
      })));
      setShowSuccess(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress]);

  const allQuestionsAnswered = questions.every(q => q.isCorrect !== undefined);
  const correctAnswersCount = questions.filter(q => q.isCorrect).length;
  const totalQuestions = questions.length;
  const progressPercentage = (correctAnswersCount / totalQuestions) * 100;

  // Prevent editing if challenge is complete
  const handleAnswerChange = (id, value) => {
    if (progress?.completed) return;
    setQuestions(questions.map(q => q.id === id ? { ...q, userAnswer: value } : q));
  };

  const handleAnswerSubmit = (id, answer) => {
    if (progress?.completed) return;
    setQuestions(questions.map(q => {
      if (q.id === id) {
        return {
          ...q,
          userAnswer: answer.toLowerCase(),
          isCorrect: answer.toLowerCase() === q.answer.toLowerCase(),
        };
      }
      return q;
    }));
  };

  const toggleHint = (id) => {
    if (progress?.completed) return;
    if (hintsRemaining > 0) {
      setQuestions(questions.map(q => {
        if (q.id === id && !q.showHint) {
          setHintsRemaining(hintsRemaining - 1);
          return { ...q, showHint: true };
        }
        return q;
      }));
    }
  };

  const handleComplete = async () => {
    if (allQuestionsAnswered && correctAnswersCount === totalQuestions) {
      if (profile && !progress?.completed) {
        try {
          // Create an answers object
          const answers = questions.reduce((acc, q) => ({
            ...acc,
            [q.id]: q.userAnswer,
          }), {});
          // Update progress with the answers and difficulty ("Easy")
          const completed = await updateProgress(correctAnswersCount, totalQuestions, 0, "Easy", answers);
          if (completed) {
            const xpAmount = getChallengeCompletionXP("Easy");
            setXpAwarded(xpAmount);
            // Award XP to the user
            await awardUserXP(profile.uid, {
              amount: xpAmount,
              reason: `Completed Email Analysis Challenge`,
              type: 'challenge_completion'
            });
            setXpNotification(true);
            setTimeout(() => setXpNotification(false), 5000);
          }
        } catch (error) {
          console.error("Error updating progress:", error);
        }
      }
      setShowConfetti(true);
      setShowSuccess(true);
      setShowError(false);
      // Trigger share modal on completion
      setShowShareModal(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setShowError(true);
      setShowConfetti(false);
      setShowSuccess(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-white font-sans">
      {/* Sticky Header */}
      <motion.nav
        className="sticky top-0 z-50 bg-primary-dark border-b border-primary-blue/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
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
      </motion.nav>

      {/* Banner */}
      <motion.div
        className="flex justify-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative group">
          <div className="absolute inset-0 rounded-lg bg-primary-blue/40 blur-lg group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
          <img
            src="/Challenges/emailanalysischallenge.png"
            alt="Phishing Email Analysis Challenge Banner"
            className="w-auto max-h-80 object-cover rounded-lg shadow-lg group-hover:scale-105 group-hover:rotate-1 transition-transform duration-300 ease-in-out relative z-10"
          />
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 py-12 -mt-16 relative z-10">
        <motion.h1
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Phishing Email Analysis Challenge
        </motion.h1>

        {/* Progress Section */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-lg font-semibold mb-2">Progress</div>
          <div className="w-full bg-primary-dark/20 h-4 rounded-full relative overflow-hidden">
            <div
              className="h-4 rounded-full transition-all duration-500 ease-in-out"
              style={{
                width: `${Math.round(progressPercentage)}%`,
                background: 'linear-gradient(90deg, #4ade80, #3b82f6)',
                boxShadow: '0 0 8px rgba(59, 130, 246, 0.6)',
              }}
            >
              <div className="text-center text-white text-sm font-semibold absolute inset-0 flex items-center justify-center">
                {`${Math.round(progressPercentage)}%`}
              </div>
            </div>
          </div>
          <div className="text-sm mt-2 text-gray-400">
            {correctAnswersCount} of {totalQuestions} correct
          </div>
        </motion.div>

        {/* Hints Remaining */}
        <motion.div
          className="text-gray-400 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Hints Remaining: {hintsRemaining}
        </motion.div>

        {/* Challenge Introduction */}
        <motion.div
          className="bg-primary-dark/30 rounded-lg p-6 border border-primary-blue/20 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold mb-4">Challenge Introduction</h2>
          <p className="text-gray-400 mb-6">
            An employee has reported a suspicious email claiming to be from PayPal. Your task is to analyze the email headers and body to assess its legitimacy and identify key phishing indicators.
          </p>
        </motion.div>

        {/* Download Challenge Files */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="/Challenges/PhishingEmail.eml"
            download="PhishingEmail.eml"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center space-x-2"
          >
            <Download className="w-5 h-5" />
            <span>Download Challenge Files</span>
          </a>
        </motion.div>

        {/* Suggested Tools */}
        <motion.div
          className="bg-primary-dark/30 rounded-lg p-6 border border-primary-blue/20 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
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
        </motion.div>

        {/* Writeups Section */}
        <motion.div
          className="bg-primary-dark/30 rounded-lg p-6 border border-primary-blue/20 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold mb-4">Writeups</h2>
          <p className="text-gray-400">Coming Soon.</p>
        </motion.div>

        {/* Questions Dropdown Tab */}
        <motion.div
          className="mb-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div
            onClick={() => setQuestionsVisible(!questionsVisible)}
            className="cursor-pointer border border-gray-600 rounded-lg px-4 py-2 flex items-center justify-center mx-auto hover:bg-gray-700 transition-all"
          >
            <span className="mr-2">Questions</span>
            {questionsVisible ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </div>
        </motion.div>

        {/* Questions Section */}
        {questionsVisible && (
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {questions.map((question) => (
              <QuestionCard
                key={question.id}
                question={question}
                hintsRemaining={hintsRemaining}
                onAnswerChange={handleAnswerChange}
                onSubmit={handleAnswerSubmit}
                onToggleHint={toggleHint}
              />
            ))}
          </motion.div>
        )}

        {/* Complete Button */}
        <motion.div
          className="max-w-4xl mx-auto px-4 mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={handleComplete}
            className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 active:scale-95 transition-all flex items-center justify-center space-x-2"
          >
            <CheckCircle2 className="w-5 h-5" />
            <span>Complete Challenge</span>
          </button>
          {showError && (
            <div className="mt-4 p-4 bg-red-600 text-white rounded-lg">
              <p>Please answer all questions correctly before completing the challenge.</p>
            </div>
          )}
        </motion.div>

        {/* XP Notification */}
        {xpNotification && (
          <div className="fixed top-20 right-4 bg-primary-dark/90 border border-primary-blue/20 rounded-lg p-4 shadow-lg animate-slideIn z-50">
            <div className="flex items-center space-x-3">
              <div className="bg-yellow-500/20 p-2 rounded-full">
                <Star className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <p className="font-bold text-lg">+{xpAwarded} XP</p>
                <p className="text-sm text-gray-400">Challenge completed!</p>
              </div>
            </div>
          </div>
        )}

        {/* Success Message and Confetti */}
        {showSuccess && (
          <>
            <Confetti width={window.innerWidth} height={window.innerHeight} />
            <motion.div
              className="max-w-4xl mx-auto px-4 mt-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-4 bg-green-600 text-white rounded-lg">
                <p className="text-lg font-semibold">Congratulations!</p>
                <p>
                  You have completed the challenge with {correctAnswersCount} out of {totalQuestions} correct answers.
                </p>
                {xpAwarded > 0 && (
                  <p className="mt-2 text-yellow-300 font-bold">
                    +{xpAwarded} XP Awarded!
                  </p>
                )}
              </div>
            </motion.div>
          </>
        )}

        {/* Share Modal */}
        {showShareModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="bg-blue-600 rounded-lg p-8 z-50 text-center relative shadow-2xl">
              <button
                onClick={() => setShowShareModal(false)}
                className="absolute top-2 right-2 text-white hover:text-gray-200"
              >
                <XCircle className="w-6 h-6" />
              </button>
              <h2 className="text-2xl font-bold mb-4 text-white">Congratulations!</h2>
              <p className="mb-4 text-white">You have finished the challenge. Share your achievement!</p>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://www.linkedin.com/sharing/share-offsite/?url=https://yourdomain.com/challenge/email-analysis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-gray-100 font-semibold"
                >
                  Share on LinkedIn
                </a>
                <a
                  href="https://twitter.com/intent/tweet?text=I%20just%20finished%20the%20challenge%20on%20HackTheHackers!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-gray-100 font-semibold"
                >
                  Share on X
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Combined Frame for Created by and First Blood */}
        <motion.div
          className="max-w-4xl mx-auto px-4 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-primary-dark/40 p-6 rounded-xl border border-primary-blue/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center space-x-8">
              {/* Created by */}
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
              {/* First Blood */}
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
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="bg-primary-dark/30 text-white py-8 border-t border-primary-blue/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">© 2025 HackTheHackers. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default EmailAnalysisChallenge;
