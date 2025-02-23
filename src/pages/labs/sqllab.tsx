import React, { useState, useEffect } from 'react';
import { Book, ChevronRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function SQLLab() {
  const [activeSection, setActiveSection] = useState("");
  const [activeSubSection, setActiveSubSection] = useState("");
  const [quizResults, setQuizResults] = useState({});
  const [flagInput, setFlagInput] = useState("");
  const [flagMessage, setFlagMessage] = useState("");

  const correctFlags = {
    "1": "flag{sql_injection_basics}",
    "2": "flag{detecting_sql_vulnerabilities}",
    "3": "flag{retrieving_hidden_data}",
    "4": "flag{subverting_application_logic}",
    "5": "flag{union_attacks}",
    "6": "flag{finding_column_number}",
    "7": "flag{useful_data_type}",
    "8": "flag{retrieving_interesting_data}",
    "9": "flag{retrieving_multiple_values}",
    "10": "flag{examining_database}",
    "11": "flag{blind_sql_injection}",
    "12": "flag{conditional_responses}",
    "13": "flag{error_based_sql_injection}",
    "14": "flag{time_based_injection}",
    "15": "flag{oast_techniques}",
    "16": "flag{sql_injection_contexts}",
    "17": "flag{second_order_sql}",
    "18": "flag{preventing_sql_injection}"
  };

  useEffect(() => {
    setFlagMessage("");
  }, [activeSubSection]);

  const handleFlagSubmit = () => {
    if (flagInput === correctFlags[activeSubSection]) {
      setFlagMessage("✅ Correct flag!");
    } else {
      setFlagMessage("❌ Incorrect flag. Try again!");
    }
  };

  const sections = [
    {
      id: "1",
      title: "What is SQL Injection?",
      subsections: [
        { id: "1.1", title: "Introduction", content: "SQL Injection is..." },
        { id: "1.2", title: "History", content: "The history of SQL Injection..." },
        { id: "1.3", title: "Real-world Examples", content: "A famous SQL injection..." }
      ]
    },
    {
      id: "2",
      title: "How to Detect SQL Injection Vulnerabilities",
      subsections: [
        { id: "2.1", title: "Manual Testing", content: "One way to detect..." },
        { id: "2.2", title: "Automated Tools", content: "Using scanners like..." }
      ]
    }
  ];

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
        <div className="flex-1 bg-primary-dark/10 py-8 px-6">
          {activeSubSection && (
            <div>
              <h1 className="text-2xl font-bold mb-4">{sections.find(sec => sec.id === activeSection)?.subsections.find(sub => sub.id === activeSubSection)?.title}</h1>
              <p className="text-gray-300">{sections.find(sec => sec.id === activeSection)?.subsections.find(sub => sub.id === activeSubSection)?.content}</p>

              {/* Flag Submission */}
              <div className="mt-6">
                <h2 className="text-lg font-semibold">Submit Flag</h2>
                <input
                  type="text"
                  className="border border-gray-600 rounded-md px-4 py-2 text-black mt-2 w-full"
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
              
              {/* Try Lab */}
              <div className="mt-6">
                <Link to="/lab-exercise" className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700">Try Lab</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SQLLab;
