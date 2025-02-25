import React, { useState, useEffect } from 'react';
import { Book, ArrowLeft, ChevronDown, ChevronRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from "../../components/Navigation";

function SocAnalystCourse() {
  // New course structure based on your syllabus.
  // Each module contains sections (with title and summary) and a quiz.
  const course = [
    {
      id: "module1",
      title: "Security Operations",
      sections: [
        {
          title: "Preparation and Prevention",
          summary: "Short summary for Preparation and Prevention. Edit content here."
        },
        {
          title: "Monitoring and Investigation",
          summary: "Short summary for Monitoring and Investigation. Edit content here."
        },
        {
          title: "A day In the life SOC",
          summary: "Short summary for A day In the life SOC. Edit content here."
        }
      ],
      quiz: {
        questions: [
          {
            id: 1,
            question: "What does SOC stand for?",
            options: [
              "Security Operations Center",
              "System Operations Center",
              "Security Optimization Center",
              "System Optimization Center"
            ],
            correctAnswer: "Security Operations Center"
          }
        ]
      }
    },
    {
      id: "module2",
      title: "Cyber Kill Chain",
      sections: [
        {
          title: "Introduction",
          summary: "Short summary for Introduction to the Cyber Kill Chain. Edit content here."
        },
        {
          title: "Reconnaissance",
          summary: "Short summary for Reconnaissance phase. Edit content here."
        },
        {
          title: "Weaponization",
          summary: "Short summary for Weaponization. Edit content here."
        },
        {
          title: "Delivery",
          summary: "Short summary for Delivery. Edit content here."
        },
        {
          title: "Exploitation",
          summary: "Short summary for Exploitation. Edit content here."
        },
        {
          title: "Installation",
          summary: "Short summary for Installation. Edit content here."
        },
        {
          title: "Command & Control",
          summary: "Short summary for Command & Control. Edit content here."
        },
        {
          title: "Actions on Objectives (Exfiltration)",
          summary: "Short summary for Actions on Objectives. Edit content here."
        }
      ],
      quiz: {
        questions: [
          {
            id: 1,
            question: "Which stage comes first in the Cyber Kill Chain?",
            options: [
              "Reconnaissance",
              "Delivery",
              "Exploitation",
              "Installation"
            ],
            correctAnswer: "Reconnaissance"
          }
        ]
      }
    },
    {
      id: "module3",
      title: "MITRE ATT&CK",
      sections: [
        {
          title: "What is the MITRE ATT&CK framework",
          summary: "Short summary for what is the MITRE ATT&CK framework. Edit content here."
        },
        {
          title: "MITRE ATT&CK Matrix",
          summary: "Short summary for the MITRE ATT&CK Matrix. Edit content here."
        },
        {
          title: "MITRE ATT&CK for Cloud Matrix",
          summary: "Short summary for MITRE ATT&CK for Cloud Matrix. Edit content here."
        },
        {
          title: "MITRE ATT&CK tactics",
          summary: "Short summary for MITRE ATT&CK tactics. Edit content here."
        },
        {
          title: "MITRE ATT&CK techniques",
          summary: "Short summary for MITRE ATT&CK techniques. Edit content here."
        },
        {
          title: "MITRE ATT&CK vs. the Cyber Kill Chain",
          summary: "Short summary comparing MITRE ATT&CK with the Cyber Kill Chain. Edit content here."
        },
        {
          title: "How Do You Use the MITRE ATT&CK Matrix",
          summary: "Short summary on how to use the MITRE ATT&CK Matrix. Edit content here."
        }
      ],
      quiz: {
        questions: [
          {
            id: 1,
            question: "What is the purpose of the MITRE ATT&CK framework?",
            options: [
              "To model adversary behavior",
              "To design firewalls",
              "To develop software",
              "To manage networks"
            ],
            correctAnswer: "To model adversary behavior"
          }
        ]
      }
    },
    {
      id: "module4",
      title: "Pyramid Of Pain",
      sections: [
        {
          title: "What is the Pyramid of Pain",
          summary: (
            <>
              <img
                src="/Learning Paths/SOC/Pyramid.png"
                alt="Pyramid of Pain"
                className="my-4 w-full max-w-md mx-auto"
              />
              <p>Short summary for the Pyramid Of Pain. Edit content here.</p>
            </>
          )
        },
        {
          title: "Hash values",
          summary: "Short summary for Hash values. Edit content here."
        },
        {
          title: "IP addresses",
          summary: "Short summary for IP addresses. Edit content here."
        },
        {
          title: "Domain names",
          summary: "Short summary for Domain names. Edit content here."
        },
        {
          title: "Network Artifacts",
          summary: "Short summary for Network Artifacts. Edit content here."
        },
        {
          title: "Host Artifacts",
          summary: "Short summary for Host Artifacts. Edit content here."
        },
        {
          title: "Tools",
          summary: "Short summary for Tools. Edit content here."
        },
        {
          title: "Tactics, Techniques and Procedures (TTPs)",
          summary: "Short summary for Tactics, Techniques and Procedures. Edit content here."
        }
      ],
      quiz: {
        questions: [
          {
            id: 1,
            question: "What does the Pyramid of Pain illustrate?",
            options: [
              "The difficulty in eliminating certain threat indicators",
              "A network topology",
              "A layered firewall design",
              "An encryption algorithm"
            ],
            correctAnswer: "The difficulty in eliminating certain threat indicators"
          }
        ]
      }
    },
    {
      id: "module5",
      title: "Phishing Emails",
      sections: [
        {
          title: "Phishing Analysis Fundamentals",
          summary: "Short summary for Phishing Analysis Fundamentals. Edit content here."
        },
        {
          title: "Basics",
          summary: "Short summary for Basics. Edit content here."
        },
        {
          title: "Email Header",
          summary: "Short summary for Email Header analysis. Edit content here."
        },
        {
          title: "Analysis And Tools",
          summary: "Short summary for Analysis and Tools used in phishing. Edit content here."
        },
        {
          title: "Phishing challenge",
          summary: "Short summary for the Phishing challenge. Edit content here."
        }
      ],
      quiz: {
        questions: [
          {
            id: 1,
            question: "What is one key element in phishing email analysis?",
            options: [
              "Examining the email header",
              "Designing graphics",
              "Writing code",
              "Configuring routers"
            ],
            correctAnswer: "Examining the email header"
          }
        ]
      }
    },
    {
      id: "module6",
      title: "SIEM",
      sections: [
        {
          title: "SIEM Introduction",
          summary: "Short summary for SIEM Introduction. Edit content here."
        },
        {
          title: "Popular SIEM Tools",
          summary: "Short summary for Popular SIEM Tools. Edit content here."
        },
        {
          title: "Core Components of a SIEM",
          summary: "Short summary for Core Components of a SIEM. Edit content here."
        },
        {
          title: "Investigating with SIEM",
          summary: "Short summary for Investigating with SIEM. Edit content here."
        }
      ],
      quiz: {
        questions: [
          {
            id: 1,
            question: "Which is a core function of SIEM?",
            options: [
              "Log aggregation and correlation",
              "Graphic design",
              "Email marketing",
              "Video streaming"
            ],
            correctAnswer: "Log aggregation and correlation"
          }
        ]
      }
    },
    {
      id: "module7",
      title: "Network Security",
      sections: [
        {
          title: "Traffic Analysis",
          summary: "Short summary for Traffic Analysis. Edit content here."
        },
        {
          title: "Firewall",
          summary: "Short summary for Firewall. Edit content here."
        },
        {
          title: "IDS/IPS",
          summary: "Short summary for IDS/IPS. Edit content here."
        },
        {
          title: "WAF",
          summary: "Short summary for WAF. Edit content here."
        },
        {
          title: "Web",
          summary: "Short summary for Web security. Edit content here."
        },
        {
          title: "DNS",
          summary: "Short summary for DNS security. Edit content here."
        },
        {
          title: "Wireshark Basic",
          summary: "Short summary for Wireshark Basic. Edit content here."
        },
        {
          title: "Wireshark Traffic Analysis",
          summary: "Short summary for Wireshark Traffic Analysis. Edit content here."
        },
        {
          title: "Challenge",
          summary: "Short summary for the Network Security Challenge. Edit content here."
        }
      ],
      quiz: {
        questions: [
          {
            id: 1,
            question: "Which tool is most commonly used for network traffic analysis?",
            options: [
              "Wireshark",
              "Photoshop",
              "Excel",
              "WordPress"
            ],
            correctAnswer: "Wireshark"
          }
        ]
      }
    },
    {
      id: "module8",
      title: "Endpoint Security",
      sections: [
        {
          title: "Intro to Endpoint Security",
          summary: "Short summary for Introduction to Endpoint Security. Edit content here."
        },
        {
          title: "Windows processes",
          summary: "Short summary for Windows processes. Edit content here."
        },
        {
          title: "Sysinternals",
          summary: "Short summary for Sysinternals. Edit content here."
        },
        {
          title: "Windows event log",
          summary: "Short summary for Windows event log analysis. Edit content here."
        },
        {
          title: "Sysmon",
          summary: "Short summary for Sysmon. Edit content here."
        },
        {
          title: "Challenge",
          summary: "Short summary for the Endpoint Security Challenge. Edit content here."
        }
      ],
      quiz: {
        questions: [
          {
            id: 1,
            question: "What is a key aspect of endpoint security?",
            options: [
              "Monitoring system processes",
              "Designing websites",
              "Social media management",
              "Graphic design"
            ],
            correctAnswer: "Monitoring system processes"
          }
        ]
      }
    },
    {
      id: "module9",
      title: "Brute Force Attacks",
      sections: [
        {
          title: "Introduction to Brute Force Attacks",
          summary: "Short summary for Introduction to Brute Force Attacks. Edit content here."
        },
        {
          title: "How Brute Force Attacks Work",
          summary: "Short summary for How Brute Force Attacks Work. Edit content here."
        },
        {
          title: "Detecting Brute Force Attacks",
          summary: "Short summary for Detecting Brute Force Attacks. Edit content here."
        },
        {
          title: "Mitigation and Prevention",
          summary: "Short summary for Mitigation and Prevention of Brute Force Attacks. Edit content here."
        },
        {
          title: "Challenge",
          summary: "Short summary for the Brute Force Attacks Challenge. Edit content here."
        }
      ],
      quiz: {
        questions: [
          {
            id: 1,
            question: "What is the primary concern with brute force attacks?",
            options: [
              "Unauthorized access through repeated attempts",
              "Poor web design",
              "Slow internet speed",
              "Excessive file sizes"
            ],
            correctAnswer: "Unauthorized access through repeated attempts"
          }
        ]
      }
    },
    {
      id: "module10",
      title: "Virustotal for SOC",
      sections: [
        {
          title: "Importance of VirusTotal in SOC operations",
          summary: "Short summary for the Importance of VirusTotal in SOC operations. Edit content here."
        },
        {
          title: "File Analysis",
          summary: "Short summary for File Analysis using VirusTotal. Edit content here."
        },
        {
          title: "URL and Domain Analysis",
          summary: "Short summary for URL and Domain Analysis using VirusTotal. Edit content here."
        },
        {
          title: "IP Address Analysis",
          summary: "Short summary for IP Address Analysis using VirusTotal. Edit content here."
        },
        {
          title: "Advanced Features",
          summary: "Short summary for the Advanced Features of VirusTotal. Edit content here."
        }
      ],
      quiz: {
        questions: [
          {
            id: 1,
            question: "What does VirusTotal help analyze?",
            options: [
              "Files, URLs, and IP addresses",
              "Graphic designs",
              "Stock prices",
              "Weather data"
            ],
            correctAnswer: "Files, URLs, and IP addresses"
          }
        ]
      }
    },
    {
      id: "module11",
      title: "Anyrun for SOC",
      sections: [
        {
          title: "Introduction to AnyRun",
          summary: "Short summary for Introduction to AnyRun. Edit content here."
        },
        {
          title: "AnyRun in the SOC Workflow",
          summary: "Short summary for how AnyRun fits into the SOC workflow. Edit content here."
        },
        {
          title: "File Analysis",
          summary: "Short summary for File Analysis using AnyRun. Edit content here."
        },
        {
          title: "URL Analysis",
          summary: "Short summary for URL Analysis using AnyRun. Edit content here."
        },
        {
          title: "Report Generation",
          summary: "Short summary for Report Generation using AnyRun. Edit content here."
        }
      ],
      quiz: {
        questions: [
          {
            id: 1,
            question: "What is the primary use of AnyRun in a SOC?",
            options: [
              "Dynamic malware analysis",
              "Graphic design",
              "Database management",
              "Social media monitoring"
            ],
            correctAnswer: "Dynamic malware analysis"
          }
        ]
      }
    },
    {
      id: "module12",
      title: "Simulating a SOC Environment at Home",
      sections: [
        {
          title: "Objectives",
          summary: "Short summary for the objectives of simulating a SOC at home. Edit content here."
        },
        {
          title: "Install windows 10",
          summary: "Short summary for installing Windows 10. Edit content here."
        },
        {
          title: "Install Sysmon",
          summary: "Short summary for installing Sysmon. Edit content here."
        },
        {
          title: "Install Wazuh",
          summary: "Short summary for installing Wazuh. Edit content here."
        },
        {
          title: "Install TheHive",
          summary: "Short summary for installing TheHive. Edit content here."
        },
        {
          title: "Simulate attack",
          summary: "Short summary for simulating an attack. Edit content here."
        },
        {
          title: "Rule Creation",
          summary: "Short summary for rule creation in a simulated SOC. Edit content here."
        }
      ],
      quiz: {
        questions: [
          {
            id: 1,
            question: "What is one objective of simulating a SOC at home?",
            options: [
              "Gaining hands-on experience with security tools",
              "Designing a website",
              "Creating social media content",
              "Editing videos"
            ],
            correctAnswer: "Gaining hands-on experience with security tools"
          }
        ]
      }
    }
  ];

  // State: which module, which section within that module, and whether we're in quiz mode.
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [inQuiz, setInQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizScore, setQuizScore] = useState(null);

  // State to track completed modules (quiz finished)
  const [completedModules, setCompletedModules] = useState(Array(course.length).fill(false));

  // Left sidebar dropdown state for each module (open/closed)
  const [openModules, setOpenModules] = useState(Array(course.length).fill(false));

  // Toggle dropdown for a module.
  const toggleModule = (index) => {
    setOpenModules((prev) =>
      prev.map((open, idx) => (idx === index ? !open : open))
    );
  };

  const currentModule = course[currentModuleIndex];
  const totalSections = currentModule.sections.length;

  // Reset quiz state when module, section, or quiz view changes.
  useEffect(() => {
    setQuizAnswers({});
    setQuizScore(null);
  }, [currentModuleIndex, currentSectionIndex, inQuiz]);

  // Optional: Intersection Observer for animations.
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const revealElements = document.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .reveal-scale'
    );
    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [currentModuleIndex, currentSectionIndex, inQuiz]);

  // Handle quiz answer changes.
  const handleQuizChange = (questionId, answer) => {
    setQuizAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    let score = 0;
    currentModule.quiz.questions.forEach((q) => {
      if (quizAnswers[q.id] === q.correctAnswer) {
        score++;
      }
    });
    setQuizScore(score);
    // Mark the current module as completed after quiz submission.
    setCompletedModules((prev) => {
      const newArr = [...prev];
      newArr[currentModuleIndex] = true;
      return newArr;
    });
  };

  // Next Page Navigation:
  // - If not in quiz mode, go through sections then switch to quiz.
  // - In quiz mode, allow user to continue without forcing quiz submission.
  // Additionally, when moving to a new module, update the openModules so the previous module closes and the new module opens.
  const handleNextPage = () => {
    if (!inQuiz) {
      if (currentSectionIndex < totalSections - 1) {
        setCurrentSectionIndex(currentSectionIndex + 1);
      } else {
        setInQuiz(true);
      }
    } else {
      if (currentModuleIndex < course.length - 1) {
        const newModuleIndex = currentModuleIndex + 1;
        setCurrentModuleIndex(newModuleIndex);
        setCurrentSectionIndex(0);
        setInQuiz(false);
        // Update the dropdown state: close all modules, then open the new one.
        setOpenModules(Array(course.length).fill(false).map((_, idx) => idx === newModuleIndex));
      } else {
        alert("Congratulations! You have completed the course.");
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background text-gray-900 dark:text-white">
      {/* Full Navigation Bar */}
      <div className="bg-gray-100 dark:bg-primary-dark">
        <Navigation />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* Left Sidebar */}
        <aside className="w-64 bg-gray-100 dark:bg-primary-dark/30 border-r border-primary-blue/20 glass-effect p-4">
          {/* Back to Learning Paths Link */}
          <div className="mb-6">
            <Link
              to="/learning-paths"
              className="flex items-center text-primary-blue hover:text-primary-blue/80"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Learning Paths
            </Link>
          </div>
          <h2 className="text-lg font-semibold mb-4 gradient-text">Course Modules</h2>
          {course.map((module, mIndex) => (
            <div key={module.id} className="mb-4">
              <button
                onClick={() => toggleModule(mIndex)}
                className="w-full flex justify-between items-center px-4 py-2 rounded-md hover:bg-primary-blue/10 transition"
              >
                <span className={`${mIndex === currentModuleIndex ? 'text-primary-blue font-bold' : ''}`}>
                  {module.title}
                </span>
                {completedModules[mIndex] && (
                  <Check className="w-4 h-4 text-green-500 inline ml-2" />
                )}
                {openModules[mIndex] ? <ChevronDown /> : <ChevronRight />}
              </button>
              {openModules[mIndex] && (
                <ul className="mt-2 ml-4 space-y-1">
                  {module.sections.map((sec, sIndex) => (
                    <li key={sIndex}>
                      <button
                        onClick={() => {
                          setCurrentModuleIndex(mIndex);
                          setCurrentSectionIndex(sIndex);
                          setInQuiz(false);
                        }}
                        className="w-full text-left px-4 py-1 rounded-md hover:bg-primary-blue/10 transition"
                      >
                        {sec.title}
                      </button>
                    </li>
                  ))}
                  <li>
                    <button
                      onClick={() => {
                        setCurrentModuleIndex(mIndex);
                        setInQuiz(true);
                      }}
                      className="w-full text-left px-4 py-1 rounded-md hover:bg-primary-blue/10 transition"
                    >
                      Quiz
                    </button>
                  </li>
                </ul>
              )}
            </div>
          ))}
        </aside>

        {/* Main Course Content */}
        <main className="flex-1 p-8 bg-white dark:bg-background">
          <header className="mb-8">
            <div className="flex items-center space-x-4">
              <Book className="w-8 h-8 text-primary-blue animate-pulse-slow" />
              <div>
                <h1 className="text-2xl font-bold gradient-text">SOC Analyst Course</h1>
                <p className="text-gray-400 text-sm">
                </p>
              </div>
            </div>
          </header>

          <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-4 reveal-scale">
              {currentModule.title}
            </h2>

            {/* Display Section Content or Quiz */}
            {!inQuiz ? (
              <div className="reveal">
                <h3 className="text-2xl font-bold mb-4">
                  {currentModule.sections[currentSectionIndex].title}
                </h3>
                <div className="text-lg whitespace-pre-line">
                  {currentModule.sections[currentSectionIndex].summary}
                </div>
              </div>
            ) : (
              <div className="bg-gray-100 dark:bg-primary-dark/40 p-6 rounded shadow-lg reveal-scale">
                <h3 className="text-2xl font-bold mb-4">Quiz: {currentModule.title}</h3>
                {quizScore === null ? (
                  <>
                    <form onSubmit={handleQuizSubmit}>
                      {currentModule.quiz.questions.map((q, index) => (
                        <div key={q.id} className="mb-6">
                          <p className="mb-2">
                            {index + 1}. {q.question}
                          </p>
                          <div className="space-y-2">
                            {q.options.map((option, idx) => (
                              <label key={idx} className="block">
                                <input
                                  type="radio"
                                  name={`question-${q.id}`}
                                  value={option}
                                  checked={quizAnswers[q.id] === option}
                                  onChange={() => handleQuizChange(q.id, option)}
                                  className="mr-2"
                                />
                                {option}
                              </label>
                            ))}
                          </div>
                        </div>
                      ))}
                      <button type="submit" className="px-4 py-2 bg-primary-blue text-white rounded hover:bg-primary-blue/80 transition">
                        Submit Quiz
                      </button>
                    </form>
                    <p className="mt-4 italic text-sm">
                      You may also skip this quiz and continue by clicking Next Page.
                    </p>
                  </>
                ) : (
                  <div className="p-4 bg-primary-blue/20 rounded">
                    <h4 className="text-xl font-bold">
                      Your Score: {quizScore} / {currentModule.quiz.questions.length}
                    </h4>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Next Page Navigation */}
          <div className="mt-12 flex justify-end">
            <button
              onClick={handleNextPage}
              className="px-4 py-2 bg-primary-blue text-white rounded hover:bg-primary-blue/80 transition"
            >
              Next Page
            </button>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-primary-dark/30 text-gray-900 dark:text-white py-8 border-t border-primary-blue/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">© 2025 HackTheHackers. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default SocAnalystCourse;
