import React, { useState } from 'react';
import { Book, ChevronRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const sections = [
  {
    id: '1',
    title: 'What is SQL Injection?',
    subsections: [
      { id: '1.1', title: 'Introduction', content: 'SQL injection is a vulnerability...'},
      { id: '1.2', title: 'Example Attack', content: 'Consider a login form...'},
      { id: '1.3', title: 'Prevention', content: 'To prevent SQL injection...'},
    ],
    flag: 'FLAG{SQL_INJECTION_101}'
  },
  {
    id: '2',
    title: 'How to Detect SQL Injection Vulnerabilities',
    subsections: [
      { id: '2.1', title: 'Detection Techniques', content: 'SQL injection detection can...'},
      { id: '2.2', title: 'Automated Scanning', content: 'Tools like SQLmap...'},
      { id: '2.3', title: 'Manual Testing', content: 'Using error messages...'},
    ],
    flag: 'FLAG{DETECTION_SUCCESS}'
  },
];

function SQLLab() {
  const [activeSection, setActiveSection] = useState(null);
  const [activeSubSection, setActiveSubSection] = useState(null);
  const [userFlags, setUserFlags] = useState({});
  
  const handleFlagSubmit = (sectionId, inputFlag) => {
    if (inputFlag === sections.find(s => s.id === sectionId).flag) {
      alert('Correct flag! ✅');
    } else {
      alert('Incorrect flag ❌');
    }
  };

  return (
    <div className="min-h-screen bg-background text-white">
      <nav className="bg-primary-dark border-b border-primary-blue/20 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/learning-paths" className="text-primary-blue hover:text-primary-blue/80 flex items-center group">
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Learning Paths
            </Link>
          </div>
        </div>
      </nav>
      <div className="flex">
        <div className="w-64 bg-primary-dark/30 min-h-[calc(100vh-11rem)] border-r border-primary-blue/20 glass-effect">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4 gradient-text">SQL Lab</h2>
            {sections.map((section) => (
              <div key={section.id}>
                <button
                  onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
                  className="w-full text-left px-4 py-2 rounded-md flex items-center justify-between hover-card transition-all"
                >
                  {section.title}
                  <ChevronRight className={`w-4 h-4 transform transition-transform ${activeSection === section.id ? 'rotate-90' : ''}`} />
                </button>
                {activeSection === section.id && (
                  <div className="ml-4 border-l pl-2">
                    {section.subsections.map(sub => (
                      <button key={sub.id} onClick={() => setActiveSubSection(sub.id)}
                        className={`block px-3 py-1 ${activeSubSection === sub.id ? 'bg-primary-blue text-white' : 'hover:bg-primary-blue/10'}`}>
                        {sub.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 bg-primary-dark/10 py-8 glass-effect">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {activeSubSection && (
              <>
                <h1 className="text-2xl font-bold">{sections.find(s => s.id === activeSection)?.subsections.find(sub => sub.id === activeSubSection)?.title}</h1>
                <p className="mt-4">{sections.find(s => s.id === activeSection)?.subsections.find(sub => sub.id === activeSubSection)?.content}</p>
                {activeSection === sections[sections.length - 1].id && (
                  <button className="mt-4 px-4 py-2 bg-primary-blue text-white rounded-md">Try Lab</button>
                )}
              </>
            )}
            {activeSection && !activeSubSection && (
              <div className="mt-6">
                <h2 className="text-xl font-semibold">Submit Flag</h2>
                <input
                  type="text"
                  placeholder="Enter flag"
                  className="p-2 border rounded-md mt-2"
                  onChange={(e) => setUserFlags({ ...userFlags, [activeSection]: e.target.value })}
                />
                <button onClick={() => handleFlagSubmit(activeSection, userFlags[activeSection])}
                  className="ml-2 px-4 py-2 bg-primary-red text-white rounded-md">Submit
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SQLLab;
