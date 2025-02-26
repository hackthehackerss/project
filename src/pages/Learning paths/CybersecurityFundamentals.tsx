import React, { useState, useEffect } from 'react';
import { Book, ArrowLeft, ChevronDown, ChevronRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from "../../components/Navigation";

interface Section {
  title: string;
  summary: string | JSX.Element;
}

interface Module {
  id: string;
  title: string;
  sections: Section[];
  quiz: {
    questions: {
      id: number;
      question: string;
      options: string[];
      correctAnswer: string;
    }[];
  };
}

const course: Module[] = [
  {
    id: "module1",
    title: "What is Cybersecurity",
    sections: [
      { title: "The ABCs of Cybersecurity", summary: "Edit summary for The ABCs of Cybersecurity." },
      { title: "Why Cybersecurity is Important", summary: "Edit summary for Why Cybersecurity is Important." },
      { title: "The Evolving Threat Landscape", summary: "Edit summary for The Evolving Threat Landscape." },
      { title: "Cybersecurity Frameworks and Standards", summary: "Edit summary for Cybersecurity Frameworks and Standards." },
      { title: "Emerging Trends in Cybersecurity", summary: "Edit summary for Emerging Trends in Cybersecurity." },
    ],
    quiz: {
      questions: [
        {
          id: 1,
          question: "Placeholder: What is Cybersecurity?",
          options: ["Answer A", "Answer B", "Answer C", "Answer D"],
          correctAnswer: "Answer A"
        }
      ]
    }
  },
  {
    id: "module2",
    title: "Careers in Cybersecurity",
    sections: [
      {
        title: "Security Operations Center (SOC) Analyst",
        summary: (
          <>
            <img
  src="/Learning Paths/Fundamentals/soc.png"
  alt="SOC"
  className="w-80 border border-gray-300 rounded-lg p-2 shadow-md"
/>
           <p className="mt-4"></p>
            <p><strong>Job Description:</strong></p>
            <p className="mt-1">
            <p>SOC Analysts are the first line of defense against cyber threats. They monitor security alerts, investigate potential incidents, and respond to cyberattacks in real time. They work in a Security Operations Center (SOC), analyzing logs and network traffic to detect malicious activity.</p>
            </p>
            <p className="mt-2"></p>
            <p><strong>Key Responsibilities:</strong></p>
            <p className="mt-2"></p>
            <ul>
              <li>Monitor and analyze security alerts from SIEM tools.</li>
              <li>Investigate suspicious activities and escalate threats.</li>
              <li>Respond to security incidents and document findings.</li>
              <li>Perform threat intelligence analysis.</li>
              <li>Conduct vulnerability assessments.</li>
            </ul>
            <p className="mt-2"></p>
            <p><strong>Required Skills:</strong></p>
            <p className="mt-2"></p>
            <ul>
              <li>Knowledge of SIEM tools (Splunk, ELK, etc.).</li>
              <li>Familiarity with Windows, Linux, and networking fundamentals.</li>
              <li>Understanding of malware analysis and threat intelligence.</li>
              <li>Strong analytical and problem-solving skills.</li>
            </ul>
          </>
        )
      },
      {
        title: "Security Engineer",
        summary: (
          <>
          <img
  src="/Learning Paths/Fundamentals/Engineer.png"
  alt="SOC"
  className="w-80 border border-gray-300 rounded-lg p-2 shadow-md"
/> <p className="mt-4"></p>
            <p><strong>Job Description:</strong></p>
           
            <p>Security Engineers design, implement, and maintain security controls to protect an organization’s infrastructure. They focus on strengthening defenses to prevent cyber threats.</p>
            <p className="mt-2"></p>
            <p><strong>Key Responsibilities:</strong></p>
            <ul>
              
              <li>Develop and implement security policies and procedures.</li>
              <li>Configure and manage firewalls, IDS/IPS, and endpoint security solutions.</li>
              <li>Collaborate with cross-functional teams for secure development and deployment.</li>
              <li>Automate security processes to improve efficiency and response times.</li>
              <li>Conduct security training for employees.</li>
            </ul>
            <p className="mt-2"></p>
            <p><strong>Required Skills:</strong></p>
            <ul>
              <li>Strong understanding of networking and system administration.</li>
              <li>Proficiency in scripting languages (Python, Bash, PowerShell).</li>
              <li>Experience with cloud security (AWS, Azure, GCP).</li>
              <li>Knowledge of cryptography and secure coding practices.</li>
            </ul>
          </>
        )
      },
      {
        title: "Incident Responder",
        summary: (
          <>
                 <img
  src="/Learning Paths/Fundamentals/Responder.png"
  alt="SOC"
  className="w-80 border border-gray-300 rounded-lg p-2 shadow-md"
/> <p className="mt-4"></p>

            <p><strong>Job Description:</strong></p>
            <p>Incident Responders handle cybersecurity incidents, mitigating damage and preventing recurrence. They work to identify, contain, and remediate cyberattacks.</p>
            <p className="mt-2"></p>
            <p><strong>Key Responsibilities:</strong></p>
            <ul>
              <li>Analyze and contain security incidents.</li>
              <li>Conduct forensic analysis on compromised systems.</li>
              <li>Develop incident response plans and playbooks.</li>
              <li>Work with SOC analysts to investigate threats.</li>
              <li>Provide recommendations for security improvements.</li>
            </ul>
            <p className="mt-2"></p>
            <p><strong>Required Skills:</strong></p>
            <ul>
              <li>Proficiency in digital forensics and malware analysis.</li>
              <li>Understanding of attack techniques (MITRE ATT&CK framework).</li>
              <li>Experience with EDR, SIEM, and forensic tools.</li>
              <li>Strong communication and report-writing skills.</li>
            </ul>
          </>
        )
      },
      {
        title: "Digital Forensics Analyst",
        summary: (
          <>
                           <img
  src="/Learning Paths/Fundamentals/Forensics.png"
  alt="SOC"
  className="w-80 border border-gray-300 rounded-lg p-2 shadow-md"
/> <p className="mt-4"></p>
            <p><strong>Job Description:</strong></p>
            <p>Digital Forensics Analysts investigate cybercrimes by analyzing digital evidence. They work on legal cases, corporate investigations, and incident response teams.</p>
            <p className="mt-2"></p>
            <p><strong>Key Responsibilities:</strong></p>
            <ul>
              <li>Collect and analyze digital evidence from computers, servers, and mobile devices.</li>
              <li>Recover deleted files and trace cybercriminal activities.</li>
              <li>Prepare forensic reports and provide expert testimony.</li>
              <li>Use forensic tools such as Autopsy, EnCase, and FTK.</li>
              <li>Maintain the integrity and chain of custody of evidence.</li>
            </ul>
            <p className="mt-2"></p>
            <p><strong>Required Skills:</strong></p>
            <ul>
              <li>Deep knowledge of file systems and operating systems.</li>
              <li>Experience with forensic tools and methodologies.</li>
              <li>Strong attention to detail and analytical thinking.</li>
              <li>Understanding of cyber laws and compliance requirements.</li>
            </ul>
          </>
        )
      },
      {
        title: "Malware Analyst",
        summary: (
          <>
                                     <img
  src="/Learning Paths/Fundamentals/Malware.png"
  alt="SOC"
  className="w-80 border border-gray-300 rounded-lg p-2 shadow-md"
/> <p className="mt-4"></p>
            <p><strong>Job Description:</strong></p>
            <p>Malware Analysts study malicious software to understand how it works and how to defend against it. They reverse-engineer malware to uncover its purpose and mitigate threats.</p>
            <p className="mt-2"></p>
            <p><strong>Key Responsibilities:</strong></p>
            <ul>
              <li>Analyze malware samples using dynamic and static analysis techniques.</li>
              <li>Reverse-engineer malware using tools like IDA Pro and Ghidra.</li>
              <li>Develop signatures and countermeasures to detect and remove malware.</li>
              <li>Research emerging threats and document findings.</li>
              <li>Collaborate with incident responders and threat intelligence teams.</li>
            </ul>
            <p className="mt-2"></p>
            <p><strong>Required Skills:</strong></p>
            <ul>
              <li>Proficiency in assembly language and reverse engineering.</li>
              <li>Knowledge of Windows internals and sandbox environments.</li>
              <li>Experience with debugging tools (OllyDbg, x64dbg).</li>
              <li>Strong programming skills (Python, C, C++).</li>
            </ul>
          </>
        )
      },
      {
        title: "Penetration Tester",
        summary: (
          <>
                                               <img
  src="/Learning Paths/Fundamentals/PTester.png"
  alt="SOC"
  className="w-80 border border-gray-300 rounded-lg p-2 shadow-md"
/> <p className="mt-4"></p>
            <p><strong>Job Description:</strong></p>
            <p>Penetration Testers (ethical hackers) simulate cyberattacks to identify security weaknesses in systems, networks, and applications.</p>
            <p className="mt-2"></p>
            <p><strong>Key Responsibilities:</strong></p>
            <ul>
              <li>Conduct vulnerability assessments and penetration tests.</li>
              <li>Exploit security flaws to demonstrate potential risks.</li>
              <li>Provide remediation recommendations to fix vulnerabilities.</li>
              <li>Write detailed reports on findings.</li>
              <li>Keep up with the latest hacking techniques and tools.</li>
            </ul>
            <p className="mt-2"></p>
            <p><strong>Required Skills:</strong></p>
            <ul>
              <li>Strong understanding of networking, web applications, and operating systems.</li>
              <li>Proficiency in penetration testing tools (Burp Suite, Metasploit, Nmap).</li>
              <li>Knowledge of scripting (Python, Bash) and exploit development.</li>
              <li>Certifications such as OSCP, CEH are a plus.</li>
            </ul>
          </>
        )
      },
      {
        title: "Career Growth Opportunities",
        summary: (
          <>
                                                         <img
  src="/Learning Paths/Fundamentals/career.png"
  alt="SOC"
  className="w-80 border border-gray-300 rounded-lg p-2 shadow-md"
/> <p className="mt-4"></p>
            <p>Cybersecurity offers numerous opportunities for career advancement. Professionals can start in entry-level roles and progress to specialized or leadership positions such as:</p>
            <ul>
            <p className="mt-2"></p>
              <li>Security Architect: Designs security frameworks and ensures overall security posture.</li>
              <li>Threat Hunter: Proactively searches for hidden threats within an organization.</li>
              <li>Chief Information Security Officer (CISO): Leads an organization’s cybersecurity strategy and teams.</li>
              <li>Red Team vs. Blue Team Specialist: Focuses on offensive (Red) or defensive (Blue) security strategies.</li>
              <li>Cybersecurity Consultant: Provides security expertise to various organizations.</li>
            </ul>
            <p className="mt-2"></p>
            <p>With continuous learning, certifications (CISSP, OSCP, GIAC, etc.), and hands-on experience, professionals can shape their careers based on their interests and skills.</p>
          </>
        )
      }
    ],
    quiz: {
      questions: [
        {
          id: 1,
          question: "Placeholder: Which career requires forensic analysis?",
          options: ["SOC Analyst", "Penetration Tester", "Digital Forensics Analyst", "Security Engineer"],
          correctAnswer: "Digital Forensics Analyst"
        }
      ]
    }
  },
  {
    id: "module3",
    title: "The CIA Triad",
    sections: [
      { title: "Confidentiality", summary: "Edit summary for Confidentiality." },
      { title: "Integrity", summary: "Edit summary for Integrity." },
      { title: "Availability", summary: "Edit summary for Availability." },
      { title: "Quiz", summary: "Quiz placeholder" }
    ],
    quiz: {
      questions: [
        {
          id: 1,
          question: "Placeholder: What does the CIA Triad stand for?",
          options: [
            "Confidentiality, Integrity, Availability",
            "Control, Integrity, Accuracy",
            "Confidentiality, Innovation, Adaptability",
            "None of the above"
          ],
          correctAnswer: "Confidentiality, Integrity, Availability"
        }
      ]
    }
  },
  {
    id: "module4",
    title: "Windows Fundamentals",
    sections: [
      { title: "Introduction to Windows", summary: "Edit summary for Introduction to Windows." },
      { title: "Windows File Systems", summary: "Edit summary for Windows File Systems." },
      { title: "Windows Directory Structure", summary: "Edit summary for Windows Directory Structure." },
      { title: "Command Line Basics", summary: "Edit summary for Command Line Basics." },
      { title: "Windows Powershell", summary: "Edit summary for Windows Powershell." },
      { title: "User Accounts and Permissions", summary: "Edit summary for User Accounts and Permissions." },
      { title: "Security Features in Windows", summary: "Edit summary for Security Features in Windows." },
      
    ],
    quiz: {
      questions: [
        {
          id: 1,
          question: "Placeholder: Which Windows feature helps manage user permissions?",
          options: ["User Account Control", "Windows Update", "Task Manager", "File Explorer"],
          correctAnswer: "User Account Control"
        }
      ]
    }
  },
  {
    id: "module5",
    title: "Linux Fundamentals",
    sections: [
      { title: "Introduction to Linux", summary: "Edit summary for Introduction to Linux." },
      { title: "History and evolution of Linux", summary: "Edit summary for History and evolution of Linux." },
      { title: "Linux Directory Structure", summary: "Edit summary for Linux Directory Structure." },
      { title: "Understanding permission levels", summary: "Edit summary for Understanding permission levels." },
      { title: "Linux Command Line", summary: "Edit summary for Linux Command Line." },
      { title: "Introduction to shell scripting", summary: "Edit summary for Introduction to shell scripting." },
      { title: "Writing and executing simple scripts", summary: "Edit summary for Writing and executing simple scripts." },
      { title: "Variables, loops, and conditionals in Bash", summary: "Edit summary for Variables, loops, and conditionals in Bash." },
      { title: "Automating tasks with scripts", summary: "Edit summary for Automating tasks with scripts." },
      { title: "User Accounts and Permissions", summary: "Edit summary for User Accounts and Permissions." },
      
    ],
    quiz: {
      questions: [
        {
          id: 1,
          question: "Placeholder: Which command is used to list files in Linux?",
          options: ["ls", "dir", "list", "show"],
          correctAnswer: "ls"
        }
      ]
    }
  },
  {
    id: "module6",
    title: "Networking Fundamentals",
    sections: [
      { title: "Introduction to Networking", summary: "Edit summary for Introduction to Networking." },
      { title: "Network Devices", summary: "Edit summary for Network Devices." },
      { title: "OSI Model", summary: "Edit summary for OSI Model." },
      { title: "TCP/IP Model", summary: "Edit summary for TCP/IP Model." },
      { title: "IP Addressing and Subnetting", summary: "Edit summary for IP Addressing and Subnetting." },
      { title: "Network Protocols and Services", summary: "Edit summary for Network Protocols and Services." },
      { title: "Network Monitoring and Analysis", summary: "Edit summary for Network Monitoring and Analysis." },
      
    ],
    quiz: {
      questions: [
        {
          id: 1,
          question: "Placeholder: What does the OSI model stand for?",
          options: ["Open Systems Interconnection", "Online Security Interface", "Operational System Index", "None of the above"],
          correctAnswer: "Open Systems Interconnection"
        }
      ]
    }
  },
  {
    id: "module7",
    title: "Cryptography Basics",
    sections: [
      { title: "Introduction to Cryptography", summary: "Edit summary for Introduction to Cryptography." },
      { title: "Types of Cryptography", summary: "Edit summary for Types of Cryptography." },
      { title: "Plaintext to Ciphertext", summary: "Edit summary for Plaintext to Ciphertext." },
      { title: "What is a hash?", summary: "Edit summary for What is a hash?" },
      { title: "Decoding/encoding", summary: "Edit summary for Decoding/encoding." },
      { title: "Cryptographic Attacks", summary: "Edit summary for Cryptographic Attacks." },
    ],
    quiz: {
      questions: [
        {
          id: 1,
          question: "Placeholder: What is the purpose of a cryptographic hash?",
          options: ["Data integrity", "Encryption", "Compression", "Authentication"],
          correctAnswer: "Data integrity"
        }
      ]
    }
  },
  {
    id: "module8",
    title: "Web Application Security",
    sections: [
      { title: "What is the Web?", summary: "Edit summary for What is the Web?" },
      { title: "HTTP/HTTPS Protocol", summary: "Edit summary for HTTP/HTTPS Protocol." },
      { title: "DNS (Domain Name System)", summary: "Edit summary for DNS (Domain Name System)." },
      { title: "How a Web Page Loads", summary: "Edit summary for How a Web Page Loads." },
      { title: "Cookies and Sessions", summary: "Edit summary for Cookies and Sessions." },
      { title: "Security in Web Communication", summary: "Edit summary for Security in Web Communication." },
      { title: "What is Web Application Security?", summary: "Edit summary for What is Web Application Security?" },
      { title: "Common Web Application Threats", summary: "Edit summary for Common Web Application Threats." },
      { title: "Secure Coding Practices", summary: "Edit summary for Secure Coding Practices." },
      { title: "Web Application Security Tools", summary: "Edit summary for Web Application Security Tools." },
    ],
    quiz: {
      questions: [
        {
          id: 1,
          question: "Placeholder: Which protocol is used for secure web communication?",
          options: ["HTTPS", "HTTP", "FTP", "SMTP"],
          correctAnswer: "HTTPS"
        }
      ]
    }
  },
  {
    id: "module9",
    title: "Security Tools and Technologies",
    sections: [
      { title: "Firewalls and IDS/IPS", summary: "Edit summary for Firewalls and IDS/IPS." },
      { title: "Endpoint Detection and Response", summary: "Edit summary for Endpoint Detection and Response." },
      { title: "Vulnerability Scanners", summary: "Edit summary for Vulnerability Scanners." },
    ],
    quiz: {
      questions: [
        {
          id: 1,
          question: "Placeholder: Which security tool is primarily used to detect network intrusions?",
          options: ["IDS/IPS", "Antivirus", "VPN", "SIEM"],
          correctAnswer: "IDS/IPS"
        }
      ]
    }
  },
  {
    id: "module10",
    title: "Social Engineering and Human Factors",
    sections: [
      { title: "What is Social Engineering?", summary: "Edit summary for What is Social Engineering?" },
      { title: "Types of Social Engineering Attacks", summary: "Edit summary for Types of Social Engineering Attacks." },
      { title: "Psychological Principles Behind Social Engineering", summary: "Edit summary for Psychological Principles Behind Social Engineering." },
      { title: "Real-World Examples of Social Engineering", summary: "Edit summary for Real-World Examples of Social Engineering." },
      { title: "Defending Against Social Engineering", summary: "Edit summary for Defending Against Social Engineering." },
    ],
    quiz: {
      questions: [
        {
          id: 1,
          question: "Placeholder: What is one common tactic in social engineering?",
          options: ["Phishing", "Encryption", "Firewalling", "Load balancing"],
          correctAnswer: "Phishing"
        }
      ]
    }
  }
];

const CybersecurityFundamentals: React.FC = () => {
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [inQuiz, setInQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: string }>({});
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [completedModules, setCompletedModules] = useState<boolean[]>(Array(course.length).fill(false));
  const [openModules, setOpenModules] = useState<boolean[]>(Array(course.length).fill(false));

  const toggleModule = (index: number) => {
    setOpenModules(prev => prev.map((open, idx) => (idx === index ? !open : open)));
  };

  const currentModule = course[currentModuleIndex];
  const totalSections = currentModule.sections.length;

  useEffect(() => {
    setQuizAnswers({});
    setQuizScore(null);
  }, [currentModuleIndex, currentSectionIndex, inQuiz]);

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    revealElements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, [currentModuleIndex, currentSectionIndex, inQuiz]);

  const handleQuizChange = (questionId: number, answer: string) => {
    setQuizAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleQuizSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let score = 0;
    currentModule.quiz.questions.forEach(q => {
      if (quizAnswers[q.id]?.toLowerCase() === q.correctAnswer.toLowerCase()) {
        score++;
      }
    });
    setQuizScore(score);
    if (score === currentModule.quiz.questions.length) {
      setCompletedModules(prev => {
        const newArr = [...prev];
        newArr[currentModuleIndex] = true;
        return newArr;
      });
    }
  };

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
        <aside className="w-64 bg-gray-100 dark:bg-primary-dark/30 border-r border-primary-blue/20 p-4">
          {/* Back to Learning Paths Link */}
          <div className="mb-6">
            <Link to="/learning-paths" className="flex items-center text-primary-blue hover:text-primary-blue/80">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Learning Paths
            </Link>
          </div>
          <h2 className="text-lg font-semibold mb-4">Course Modules</h2>
          {course.map((module, mIndex) => (
            <div key={module.id} className="mb-4">
              <button
                onClick={() => toggleModule(mIndex)}
                className="w-full flex justify-between items-center px-4 py-2 rounded-md hover:bg-primary-blue/10 transition"
              >
                <span className={`${mIndex === currentModuleIndex ? 'text-primary-blue font-bold' : ''}`}>
                  {module.title}
                </span>
                {completedModules[mIndex] && <Check className="w-4 h-4 text-green-500 ml-2" />}
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
        <main className="flex-1 p-8">
          <header className="mb-8">
            <div className="flex items-center space-x-4">
              <Book className="w-8 h-8 text-primary-blue animate-pulse-slow" />
              <div>
                <h1 className="text-2xl font-bold">Cybersecurity Fundamentals</h1>
                <p className="text-gray-400 text-sm">
                </p>
              </div>
            </div>
          </header>

          <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-4">{course[currentModuleIndex].title}</h2>
            {!inQuiz ? (
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  {currentModule.sections[currentSectionIndex].title}
                </h3>
                <div className="text-lg">
                  {currentModule.sections[currentSectionIndex].summary}
                </div>
              </div>
            ) : (
              <div className="bg-gray-100 dark:bg-primary-dark/40 p-6 rounded shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Quiz: {course[currentModuleIndex].title}</h3>
                {quizScore === null ? (
                  <>
                    <form onSubmit={handleQuizSubmit}>
                      {course[currentModuleIndex].quiz.questions.map((q, index) => (
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
                      Your Score: {quizScore} / {course[currentModuleIndex].quiz.questions.length}
                    </h4>
                  </div>
                )}
              </div>
            )}
          </div>

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

      <footer className="bg-gray-100 dark:bg-primary-dark/30 text-gray-900 dark:text-white py-8 border-t border-primary-blue/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">© 2025 HackTheHackers. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default CybersecurityFundamentals;
