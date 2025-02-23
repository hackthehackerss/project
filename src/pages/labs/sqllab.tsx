import React, { useState, useEffect } from 'react';
import { Book, ChevronRight, ArrowLeft, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Confetti from 'react-confetti';

function SQLLab() {
  // Load saved values from localStorage
  const [activeSection, setActiveSection] = useState(localStorage.getItem('activeSection') || "");
  const [activeSubSection, setActiveSubSection] = useState(localStorage.getItem('activeSubSection') || "");
  const [quizResults, setQuizResults] = useState(JSON.parse(localStorage.getItem('quizResults')) || {});
  const [flagInput, setFlagInput] = useState("");
  const [flagMessage, setFlagMessage] = useState("");
  const [progress, setProgress] = useState(parseInt(localStorage.getItem('progress')) || 0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [labRating, setLabRating] = useState(localStorage.getItem('labRating') || null);
  const [hintMessage, setHintMessage] = useState("");

  // Correct flags keyed by subsection identifiers
  const correctFlags = {
    "1.1": "flag{sql_injection_basics}",
    "1.2": "flag{detecting_sql_vulnerabilities}",
    "1.3": "flag{retrieving_hidden_data}",
    "2.1": "flag{subverting_application_logic}",
    "2.2": "flag{union_attacks}"
  };

  const sections = [
    {
      id: "1",
      title: "What is SQL Injection?",
      subsections: [
        { id: "1.1", title: "Introduction", content: "SQL Injection is a code injection technique that can compromise your database." },
        { id: "1.2", title: "History", content: "The history of SQL Injection dates back to the early days of web applications." },
        { id: "1.3", title: "Real-world Examples", content: "A famous SQL injection attack compromised a major website." }
      ]
    },
    {
      id: "2",
      title: "How to Detect SQL Injection Vulnerabilities",
      subsections: [
        { id: "2.1", title: "Manual Testing", content: "Manual testing involves checking input fields for vulnerabilities." },
        { id: "2.2", title: "Automated Tools", content: "Automated tools can quickly detect SQL injection vulnerabilities." }
      ]
    }
  ];

  useEffect(() => {
    // Reset flag message, input, and hint when the subsection changes
    setFlagMessage("");
    setFlagInput("");
    setHintMessage("");
  }, [activeSubSection]);

  useEffect(() => {
    // Auto-save progress and current section/subsection in localStorage
    localStorage.setItem('activeSection', activeSection);
    localStorage.setItem('activeSubSection', activeSubSection);
    localStorage.setItem('progress', progress);
    localStorage.setItem('quizResults', JSON.stringify(quizResults));
  }, [activeSection, activeSubSection, progress, quizResults]);

  const handleFlagSubmit = () => {
    if (flagInput === correctFlags[activeSubSection]) {
      setFlagMessage("✅ Correct flag!");
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000); // Hide confetti after 3 seconds
      setQuizResults(prev => ({ ...prev, [activeSubSection]: true }));
      // Increase progress if this subsection wasn't already completed
      if (!quizResults[activeSubSection]) {
        setProgress(prev => Math.min(prev + 5, 100));
      }
    } else {
      setFlagMessage("❌ Incorrect flag. Try again!");
    }
  };

  const handleRating = (rating) => {
    setLabRating(rating);
    localStorage.setItem('labRating', rating);
  };

  const getHint = () => {
    // Return a hint based on the current subsection
    if (activeSubSection === "1.1") return "Look up common SQL injection examples.";
    if (activeSubSection === "1.2") return "Search for the first recorded SQL injection attack.";
    if (activeSubSection === "1.3") return "Recall a major incident involving SQL injection.";
    if (activeSubSection === "2.1") return "Think about manual penetration testing techniques.";
    if (activeSubSection === "2.2") return "Consider tools like sqlmap for automated testing.";
    return "No hint available.";
  };

  const handleShowHint = () => {
    setHintMessage(getHint());
  };

  const handleContinue = () => {
    // Determine the next subsection or section
    const currentSectionIndex = sections.findIndex(sec => sec.id === activeSection);
    if (currentSectionIndex === -1) return;
    const currentSection = sections[currentSectionIndex];
    const currentSubIndex = currentSection.subsections.findIndex(sub => sub.id === activeSubSection);
    if (currentSubIndex === -1) return;

    if (currentSubIndex < currentSection.subsections.length - 1) {
      // Move to next subsection in the current section
      const nextSubsection = currentSection.subsections[currentSubIndex + 1];
      setActiveSubSection(nextSubsection.id);
    } else {
      // If no more subsections in current section, check for next section
      if (currentSectionIndex < sections.length - 1) {
        const nextSection = sections[currentSectionIndex + 1];
        setActiveSection(nextSection.id);
        setActiveSubSection(nextSection.subsections[0].id);
      } else {
        // All content completed; display a completion message as hint
        setHintMessage("You've completed all the content!");
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-white">
      <nav className="bg-primary-dark border-b border-primary-blue/20 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-4">
              <Link to="/labs" className="text-primary-blue hover:text-primary-blue/80 flex items-center group">
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Labs
              </Link>
              <span className="text-xl font-bold animate-fadeIn">SQL Injection Course</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar with Sections */}
        <div className="w-64 bg-primary-dark/30 min-h-screen border-r border-primary-blue/20 glass-effect">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4 gradient-text">Sections</h2>
            <div className="space-y-2">
              {sections.map((section) => (
                <div key={section.id}>
                  <button
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-4 py-2 rounded-md flex items-center justify-between hover-card transition-all ${activeSection === section.id ? 'bg-primary-blue/20 text-primary-blue' : 'hover:bg-primary-blue/10'}`}
                  >
                    {section.title}
                    <ChevronRight className={`w-4 h-4 transform transition-transform ${activeSection === section.id ? 'rotate-90' : ''}`} />
                  </button>
                  {activeSection === section.id && (
                    <div className="pl-4">
                      {section.subsections.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => setActiveSubSection(sub.id)}
                          className={`block w-full text-left px-4 py-2 text-sm rounded-md hover:bg-primary-blue/10 transition-all ${activeSubSection === sub.id ? 'bg-primary-blue/20 text-primary-blue' : ''}`}
                        >
                          {sub.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 bg-primary-dark/10 py-8 px-6 text-center">
          {activeSubSection && (
            <div>
              <h1 className="text-2xl font-bold mb-4">
                {sections.find(sec => sec.id === activeSection)?.subsections.find(sub => sub.id === activeSubSection)?.title}
              </h1>
              <p className="text-gray-300">
                {sections.find(sec => sec.id === activeSection)?.subsections.find(sub => sub.id === activeSubSection)?.content}
              </p>

              {/* Flag Submission */}
              <div className="mt-6">
                <h2 className="text-lg font-semibold">Submit Flag</h2>
                <input
                  type="text"
                  className="border border-gray-600 rounded-md px-4 py-2 text-black mt-2 w-1/2 mx-auto"
                  placeholder="Enter flag here..."
                  value={flagInput}
                  onChange={(e) => setFlagInput(e.target.value)}
                />
                <button
                  className="mt-2 px-4 py-2 bg-primary-blue text-white rounded-md hover:bg-primary-blue/80"
                  onClick={handleFlagSubmit}
                >
                  Submit Flag
                </button>
                {flagMessage && <p className="mt-2 text-lg">{flagMessage}</p>}
              </div>

              {/* Hints */}
              <div className="mt-4">
                <button
                  className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                  onClick={handleShowHint}
                >
                  Get a Hint
                </button>
                {hintMessage && <p className="mt-2 text-gray-300">{hintMessage}</p>}
              </div>

              {/* Confetti Animation */}
              {showConfetti && <Confetti />}

              {/* Like/Dislike Buttons */}
              <div className="mt-4">
                <button onClick={() => handleRating("like")} className="text-green-500 mr-2">
                  <ThumbsUp /> Like
                </button>
                <button onClick={() => handleRating("dislike")} className="text-red-500">
                  <ThumbsDown /> Dislike
                </button>
              </div>

              {/* Progress Bar */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Course Progress</h3>
                <div className="w-full bg-gray-500 rounded-full h-2 mt-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: `${progress}%` }}></div>
                </div>
                <p className="mt-2 text-gray-300">{progress}% Completed</p>
              </div>

              {/* Continue Button */}
              <div className="mt-6">
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                  onClick={handleContinue}
                >
                  Continue
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SQLLab;
