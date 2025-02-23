import React, { useState } from 'react';
import { Book, ChevronRight, ArrowLeft, CheckCircle, XCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const SQL_LAB_SECTIONS = [
  {
    id: "1",
    title: "What is SQL Injection?",
    subsections: ["Introduction", "Examples", "Risks", "Prevention"],
    flag: "FLAG-123-SQLI"
  },
  {
    id: "2",
    title: "Detecting SQL Injection",
    subsections: ["Manual Testing", "Automated Scanning", "Error-Based Detection"],
    flag: "FLAG-456-DETECT"
  },
  {
    id: "3",
    title: "Retrieving Hidden Data",
    subsections: ["Union-Based Injection", "Boolean-Based Injection", "Time-Based Injection"],
    flag: "FLAG-789-HIDDEN"
  },
  {
    id: "4",
    title: "SQL Injection Labs",
    subsections: ["Try Lab 1", "Try Lab 2", "Try Lab 3"],
    flag: "FINAL-FLAG-SECURE"
  }
];

function SQLLab() {
  const [activeSection, setActiveSection] = useState(null);
  const [activeSubSection, setActiveSubSection] = useState(null);
  const [userFlag, setUserFlag] = useState("");
  const [flagStatus, setFlagStatus] = useState(null);
  const navigate = useNavigate();

  const handleSectionClick = (sectionId) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
    setActiveSubSection(null);
  };

  const handleSubSectionClick = (subSection) => {
    setActiveSubSection(subSection);
  };

  const handleFlagSubmit = () => {
    const correctFlag = SQL_LAB_SECTIONS.find(sec => sec.id === activeSection)?.flag;
    if (userFlag.trim() === correctFlag) {
      setFlagStatus("correct");
    } else {
      setFlagStatus("incorrect");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <nav className="bg-gray-800 p-4 flex justify-between items-center">
        <Link to="/labs" className="text-blue-400 flex items-center hover:text-blue-300">
          <ArrowLeft className="w-5 h-5 mr-2" /> Back to Labs
        </Link>
      </nav>

      <div className="max-w-4xl mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-4">SQL Injection Lab</h1>
        <div className="space-y-4">
          {SQL_LAB_SECTIONS.map(section => (
            <div key={section.id} className="bg-gray-800 p-4 rounded-lg">
              <button
                className="w-full flex justify-between items-center text-left font-semibold text-lg py-2"
                onClick={() => handleSectionClick(section.id)}
              >
                {section.title}
                <ChevronRight className={`w-5 h-5 transition-transform ${activeSection === section.id ? 'rotate-90' : ''}`} />
              </button>
              {activeSection === section.id && (
                <div className="ml-4 mt-2 space-y-2">
                  {section.subsections.map(sub => (
                    <button
                      key={sub}
                      className={`block w-full text-left px-3 py-2 rounded-md hover:bg-gray-700 transition-all ${activeSubSection === sub ? 'bg-blue-500 text-white' : 'text-gray-300'}`}
                      onClick={() => handleSubSectionClick(sub)}
                    >
                      {sub}
                    </button>
                  ))}
                  {section.id === "4" && (
                    <button
                      className="mt-3 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md"
                      onClick={() => navigate("/sql-lab-exercises")}
                    >
                      Try Lab
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {activeSection && (
        <div className="max-w-4xl mx-auto mt-6 p-4 bg-gray-800 rounded-lg">
          <h2 className="text-2xl font-bold mb-2">{activeSubSection || "Select a subsection"}</h2>
          <p className="text-gray-300 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus velit nec urna convallis, ut sodales purus elementum.</p>
          <p className="text-gray-300 mb-4">Mauris placerat metus vel libero gravida, in consequat nulla pretium. Sed porttitor arcu eu vehicula vehicula.</p>
          <p className="text-gray-300 mb-4">Phasellus dictum dolor at risus scelerisque, sit amet tincidunt nulla egestas.</p>

          <h3 className="text-xl font-semibold mt-4">Submit Flag</h3>
          <input
            type="text"
            placeholder="Enter flag here..."
            className="w-full p-2 mt-2 bg-gray-700 rounded border border-gray-600 text-white"
            value={userFlag}
            onChange={(e) => setUserFlag(e.target.value)}
          />
          <button
            className="mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md"
            onClick={handleFlagSubmit}
          >
            Submit
          </button>
          {flagStatus && (
            <div className={`mt-3 p-3 rounded-lg text-white ${flagStatus === 'correct' ? 'bg-green-500' : 'bg-red-500'}`}>
              {flagStatus === "correct" ? (
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" /> Correct flag!
                </div>
              ) : (
                <div className="flex items-center">
                  <XCircle className="w-5 h-5 mr-2" /> Incorrect flag, try again.
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SQLLab;
