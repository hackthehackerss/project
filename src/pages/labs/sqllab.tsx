import React, { useState, useEffect } from 'react';
import { Book, ChevronRight, ChevronDown, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function SQLLab() {
  const [activeSection, setActiveSection] = useState(null);
  const [activeSubSection, setActiveSubSection] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const sections = [
    "What is SQL injection?",
    "How to detect SQL injection vulnerabilities",
    "Retrieving hidden data",
    "Subverting application logic",
    "SQL injection UNION attacks",
    "Determining the number of columns required",
    "Finding columns with a useful data type",
    "Using a SQL injection UNION attack to retrieve interesting data",
    "Retrieving multiple values within a single column",
    "Examining the database",
    "Blind SQL injection",
    "Exploiting blind SQL injection by triggering conditional responses",
    "Error-based SQL injection",
    "Exploiting blind SQL injection by triggering time delays",
    "Exploiting blind SQL injection using out-of-band (OAST) techniques",
    "SQL injection in different contexts",
    "Second-order SQL injection",
    "How to prevent SQL injection",
  ];

  const paragraphs = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  ];

  const handleNextPage = () => {
    if (currentPage < 4) {
      setCurrentPage(currentPage + 1);
    } else {
      const nextSectionIndex = sections.indexOf(activeSection) + 1;
      if (nextSectionIndex < sections.length) {
        setActiveSection(sections[nextSectionIndex]);
        setCurrentPage(1);
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-white">
      <nav className="bg-primary-dark border-b border-primary-blue/20 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-4">
              <Link to="/learning-paths" className="text-primary-blue hover:text-primary-blue/80 flex items-center group">
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Learning Paths
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        <div className="w-64 bg-primary-dark/30 min-h-screen border-r border-primary-blue/20 p-4">
          <h2 className="text-lg font-semibold mb-4">SQL Injection Topics</h2>
          <div className="space-y-2">
            {sections.map((section, index) => (
              <div key={index}>
                <button
                  onClick={() => setActiveSection(section === activeSection ? null : section)}
                  className="w-full text-left px-4 py-2 rounded-md flex items-center justify-between hover:bg-primary-blue/10 transition-all"
                >
                  {section}
                  {activeSection === section ? <ChevronDown /> : <ChevronRight />}
                </button>
                {activeSection === section && (
                  <div className="ml-4 mt-2 space-y-1">
                    {[1, 2, 3, 4].map((page) => (
                      <button
                        key={page}
                        onClick={() => { setActiveSubSection(page); setCurrentPage(1); }}
                        className={`w-full text-left px-3 py-1 rounded-md hover:bg-primary-blue/10 ${activeSubSection === page ? 'bg-primary-blue/20' : ''}`}
                      >
                        Page {page}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 bg-primary-dark/10 py-8 px-6">
          {activeSection && (
            <div>
              <h1 className="text-2xl font-bold mb-4">{activeSection} - Page {currentPage}</h1>
              {paragraphs.map((text, i) => (
                <p key={i} className="mb-4">{text}</p>
              ))}
              <button
                onClick={handleNextPage}
                className="mt-4 px-4 py-2 bg-primary-blue text-white rounded-md hover:bg-primary-blue/80"
              >
                {currentPage < 4 ? 'Next Page' : 'Next Section'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SQLLab;
