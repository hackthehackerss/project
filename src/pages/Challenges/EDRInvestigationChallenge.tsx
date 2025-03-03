import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle2,
  XCircle,
  HelpCircle,
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

function EDRInvestigationChallenge() {
  const navigate = useNavigate();
  const { profile } = useAuth();
  const { awardUserXP } = useXP();

  const [questions, setQuestions] = useState([
    {
      id: 1,
      text: '1. What malware family does this hash belong to?',
      answer: 'emotet',
      hint: 'Use VirusTotal’s detection tab to identify the malware name.',
      showHint: false,
      userAnswer: '',
      isCorrect: undefined,
    },
    {
      id: 2,
      text: '2. What type of malware is this file classified as?',
      answer: 'info stealer',
      hint: 'This malware is known for stealing credentials.',
      showHint: false,
      userAnswer: '',
      isCorrect: undefined,
    },
    {
      id: 3,
      text: '3. What is the name of the file associated with this hash?',
      answer: 'myfile.exe',
      hint: 'Check the file metadata section in VirusTotal or sandbox reports.',
      showHint: false,
      userAnswer: '',
      isCorrect: undefined,
    },
    {
      id: 4,
      text: '4. What is the Imphash of the file?',
      answer: '172e2482c918b417462d6a5059c769f7',
      hint: 'Look under the “Details” tab in VirusTotal.',
      showHint: false,
      userAnswer: '',
      isCorrect: undefined,
    },
    {
      id: 5,
      text: '5. What is the file size in KB?',
      answer: '148',
      hint: 'Find the file’s metadata in VirusTotal or an analysis report.',
      showHint: false,
      userAnswer: '',
      isCorrect: undefined,
    },
    {
      id: 6,
      text: '6. What IP address does this malware communicate with?',
      answer: '84.200.208.98',
      hint: 'Check the “Relations” or “Communicating Files” section.',
      showHint: false,
      userAnswer: '',
      isCorrect: undefined,
    },
    {
      id: 7,
      text: '7. What is the ISP of the IP address?',
      answer: 'firstcolo gmbh',
      hint: 'Use tools like VirusTotal, AbuseIPDB, or WHOIS lookup to identify the ISP.',
      showHint: false,
      userAnswer: '',
      isCorrect: undefined,
    },
    {
      id: 8,
      text: '8. Which protocol does the malware use to communicate with the IP address?',
      answer: 'http',
      hint: 'Check the network behavior to see if it sends requests to a C2 server.',
      showHint: false,
      userAnswer: '',
      isCorrect: undefined,
    },
    {
      id: 9,
      text: '9. What sandbox analysis platform assigns the behavior similarity hash 2fbb625426fff8355ca1c86db1346007 to this malware?',
      answer: 'capa',
      hint: 'This tool helps identify common behaviors in malware samples.',
      showHint: false,
      userAnswer: '',
      isCorrect: undefined,
    },
    {
      id: 10,
      text: '10. What domains did the malware contact to make it look legitimate?',
      answer: 'microsoft.com',
      hint: 'Threat actors often spoof well-known domains to blend in.',
      showHint: false,
      userAnswer: '',
      isCorrect: undefined,
    },
    {
      id: 11,
      text: '11. Which well-known malware technique does this file use on other processes?',
      answer: 'process injection',
      hint: 'This technique allows malware to execute malicious code within another process.',
      showHint: false,
      userAnswer: '',
      isCorrect: undefined,
    },
    {
      id: 12,
      text: '12. Which executable does this malware attempt to delete?',
      answer: 'program.exe',
      hint: 'Look for file deletion events in sandbox analysis reports.',
      showHint: false,
      userAnswer: '',
      isCorrect: undefined,
    },
    {
      id: 13,
      text: '13. Which process connects to the cnc server?',
      answer: 'devicelaunch.exe',
      hint: 'Check the behavioral analysis logs for network activity.',
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
  const [showShareModal, setShowShareModal] = useState(false);

  // Challenge progress tracking
  const challengeId = "edr-investigation-challenge";
  const { progress, updateProgress } = useChallengeProgress(profile?.uid || '', challengeId);
  const isCompleted = progress?.completed;

  // When progress is complete, update questions (filling in stored answers, marking as correct, fading) and show the completed banner.
  useEffect(() => {
    if (progress?.completed && progress.answers) {
      setQuestions(prevQuestions =>
        prevQuestions.map(q => {
          const storedAnswer = progress.answers[q.id] || progress.answers[q.id.toString()] || '';
          const finalAnswer = storedAnswer || q.answer;
          return {
            ...q,
            userAnswer: finalAnswer,
            isCorrect: finalAnswer.toLowerCase() === q.answer.toLowerCase(),
            showHint: false,
          };
        })
      );
      setShowSuccess(true);
    }
  }, [progress]);

  const allQuestionsAnswered = questions.every(q => q.isCorrect !== undefined);
  const correctAnswersCount = questions.filter(q => q.isCorrect).length;
  const totalQuestions = questions.length;
  const progressPercentage = (correctAnswersCount / totalQuestions) * 100;

  const handleAnswerChange = (id, value) => {
    if (isCompleted) return;
    setQuestions(prev =>
      prev.map(q => (q.id === id ? { ...q, userAnswer: value } : q))
    );
  };

  const handleAnswerSubmit = (id, answer) => {
    if (isCompleted) return;
    setQuestions(prev =>
      prev.map(q => {
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
    if (isCompleted) return;
    if (hintsRemaining > 0) {
      setQuestions(prev =>
        prev.map(q => {
          if (q.id === id && !q.showHint) {
            setHintsRemaining(prevHints => prevHints - 1);
            return { ...q, showHint: true };
          }
          return q;
        })
      );
    }
  };

  const handleComplete = async () => {
    if (allQuestionsAnswered && correctAnswersCount === totalQuestions) {
      if (profile && !progress?.completed) {
        try {
          const answers = questions.reduce((acc, q) => ({
            ...acc,
            [q.id]: q.userAnswer,
          }), {});
          const completed = await updateProgress(correctAnswersCount, totalQuestions, 0, "Medium", answers);
          if (completed) {
            const xpAmount = getChallengeCompletionXP("Medium");
            setXpAwarded(xpAmount);
            await awardUserXP(profile.uid, {
              amount: xpAmount,
              reason: `Completed Emotet Trace Challenge`,
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
            src="/Challenges/Emotet.png"
            alt="Emotet Trace Challenge Banner"
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
          Emotet Trace Challenge
        </motion.h1>

        {/* Completion Banner */}
        {progress?.completed && (
          <motion.div
            className="p-4 bg-green-600 text-white rounded-lg mb-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Challenge Completed!
          </motion.div>
        )}

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

        {/* Hints Remaining (shown only if not completed) */}
        {!progress?.completed && (
          <motion.div
            className="text-gray-400 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Hints Remaining: {hintsRemaining}
          </motion.div>
        )}

        {/* Challenge Introduction */}
        <motion.div
          className="bg-primary-dark/30 rounded-lg p-6 border border-primary-blue/20 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold mb-4">Challenge Introduction</h2>
          <p className="text-gray-400 mb-6">
            The EDR has flagged a suspicious file hash, triggering an urgent investigation.
            As an analyst, your mission is to leverage OSINT techniques to uncover the file's origin,
            behavior, and potential threat level.
          </p>
          <p className="text-gray-400 mb-6">
            Using publicly available intelligence sources, analyze the file and answer key questions
            to assess its risk and impact. Time is critical—let's see if you can piece together the full picture.
          </p>
          <p className="text-gray-400 mb-6">
            <strong>File Hash:</strong> eea5a1c7b3cc8350f8d5a95b6e2b7e3701d22cb362f8b988e815789f95c32eca
          </p>
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
            To analyze the file, you can use the following tool:
          </p>
          <ul className="list-disc list-inside text-gray-400">
            <li>
              <a
                href="https://www.virustotal.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-blue hover:text-primary-blue/80"
              >
                VirusTotal
              </a>{' '}
              - Use it to review file metadata, detection names, and network behavior.
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
              <motion.div
                key={question.id}
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
                        value={progress?.completed ? question.answer : question.userAnswer}
                        onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            handleAnswerSubmit(question.id, question.userAnswer);
                          }
                        }}
                        disabled={progress?.completed || question.isCorrect === true}
                      />
                      {!progress?.completed && question.isCorrect !== true && (
                        <button
                          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 active:scale-95 transition-all"
                          onClick={() => handleAnswerSubmit(question.id, question.userAnswer)}
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
                      <button
                        className={`text-gray-500 hover:text-gray-400 transition-all ${
                          hintsRemaining === 0 || progress?.completed ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        onClick={() => toggleHint(question.id)}
                        disabled={question.isCorrect === true || hintsRemaining === 0 || progress?.completed}
                      >
                        <HelpCircle className="w-5 h-5" />
                      </button>
                    </div>
                    {question.showHint && (
                      <div className="mt-4 text-gray-300 italic">{question.hint}</div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Complete Button (only if challenge is not completed) */}
        {!progress?.completed && (
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
        )}

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
                  href="https://www.linkedin.com/sharing/share-offsite/?url=https://yourdomain.com/challenge/edr-investigation-challenge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-gray-100 font-semibold"
                >
                  Share on LinkedIn
                </a>
                <a
                  href="https://twitter.com/intent/tweet?text=I%20just%20finished%20the%20EDR%20Investigation%20Challenge%20on%20HackTheHackers!"
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

        {/* Created by / First Blood Section */}
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

export default EDRInvestigationChallenge;
