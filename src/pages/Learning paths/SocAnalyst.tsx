import React, { useState, useEffect } from 'react';
import { Book, ChevronRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function SocAnalyst() {
  const [activeSection, setActiveSection] = useState("soc-overview");
  const [activeSubSection, setActiveSubSection] = useState("");
  const [quizResults, setQuizResults] = useState({});

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    
    revealElements.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, [activeSection, activeSubSection]);

  const sections = [
    {
      id: "soc-overview",
      title: "SOC Overview",
      content: {
        introduction: "A Security Operations Center (SOC) is a centralized unit that deals with security issues on an organizational and technical level. It is the first line of defense against cyber threats.",
        sections: [
          {
            title: "What is a SOC?",
            content: [
              "A SOC is a team of cybersecurity professionals responsible for monitoring, detecting, and responding to security incidents.",
              "It operates 24/7 to ensure the organization's IT infrastructure is secure.",
              "Key functions include threat detection, incident response, and vulnerability management."
            ]
          },
          {
            title: "Definition and Purpose",
            content: [
              "The primary purpose of a SOC is to protect an organization's digital assets from cyber threats.",
              "It provides continuous monitoring, threat intelligence, and incident response capabilities.",
              "A SOC helps organizations comply with regulatory requirements like GDPR, HIPAA, and PCI-DSS."
            ]
          },
          {
            title: "Importance of a SOC in Cybersecurity",
            content: [
              "A SOC is critical for maintaining a strong cybersecurity posture.",
              "It reduces the Mean Time to Detect (MTTD) and Mean Time to Respond (MTTR) to incidents.",
              "A SOC enhances visibility into security events and helps prevent financial and reputational damage."
            ]
          },
          {
            title: "Different Types of SOCs",
            content: [
              "In-House SOC: Managed internally by a dedicated team.",
              "Managed SOC: Outsourced to a third-party provider.",
              "Hybrid SOC: Combines in-house and outsourced services.",
              "Virtual SOC: Operates remotely using cloud-based tools."
            ]
          }
        ]
      }
    },
    {
      id: "cyber-threats",
      title: "Understanding Cyber Threats",
      content: {
        introduction: "Cyber threats are malicious activities aimed at disrupting, damaging, or gaining unauthorized access to systems and data.",
        sections: [
          {
            title: "Phishing and Social Engineering",
            content: [
              "Phishing is a deceptive attack where attackers trick victims into revealing sensitive information.",
              "Social engineering exploits human psychology to manipulate individuals into divulging confidential data.",
              "Common techniques include email phishing, spear phishing, whaling, smishing, and vishing."
            ]
          },
          {
            title: "Malware",
            content: [
              "Malware is malicious software designed to infiltrate and damage computer systems.",
              "Types of malware include viruses, Trojans, ransomware, and rootkits.",
              "Mitigation strategies include deploying antivirus software and conducting regular system updates."
            ]
          },
          {
            title: "Advanced Persistent Threats (APTs)",
            content: [
              "APTs are long-term, targeted attacks conducted by skilled threat actors.",
              "They use sophisticated techniques like zero-day exploits and lateral movement.",
              "Detection requires advanced threat intelligence and behavioral analysis."
            ]
          },
          {
            title: "Denial-of-Service (DoS) and Distributed Denial-of-Service (DDoS)",
            content: [
              "DoS attacks overwhelm a system with traffic, rendering it unavailable.",
              "DDoS attacks use multiple systems to launch a coordinated attack.",
              "Mitigation involves deploying firewalls, load balancers, and traffic filtering."
            ]
          },
          {
            title: "Man-in-the-Middle (MITM) Attacks",
            content: [
              "MITM attacks intercept and manipulate communication between two parties.",
              "Common techniques include ARP spoofing and DNS spoofing.",
              "Prevention involves using encryption and secure communication protocols."
            ]
          }
        ]
      }
    },
    {
      id: "siem",
      title: "SIEM (Security Information and Event Management)",
      content: {
        introduction: "SIEM is a critical tool for SOCs, enabling real-time monitoring, log analysis, and incident response.",
        sections: [
          {
            title: "What is SIEM?",
            content: [
              "SIEM collects and analyzes security data from various sources.",
              "It provides real-time monitoring, threat detection, and incident response capabilities.",
              "Key features include log management, event correlation, and alerting."
            ]
          },
          {
            title: "How SIEM Works",
            content: [
              "SIEM aggregates logs from network devices, servers, and applications.",
              "It uses rules and machine learning to detect anomalies and generate alerts.",
              "SIEM tools provide dashboards and reports for security analysis."
            ]
          },
          {
            title: "Common SIEM Solutions",
            content: [
              "Splunk: A powerful SIEM tool with advanced analytics capabilities.",
              "QRadar: IBM's SIEM solution with integrated threat intelligence.",
              "LogRhythm: A user-friendly SIEM platform for mid-sized organizations.",
              "ELK Stack: An open-source SIEM solution for log analysis.",
              "Microsoft Sentinel: A cloud-native SIEM with AI-driven threat detection."
            ]
          }
        ]
      }
    },
    {
      id: "edr",
      title: "Endpoint Detection and Response (EDR)",
      content: {
        introduction: "EDR solutions provide advanced threat detection and response capabilities for endpoints.",
        sections: [
          {
            title: "Role of EDR in Threat Detection",
            content: [
              "EDR monitors endpoints for suspicious activity and provides real-time alerts.",
              "It enables forensic analysis and incident response.",
              "EDR tools integrate with SIEM and other security solutions."
            ]
          }
        ]
      }
    },
    {
      id: "network-security",
      title: "Network Security Tools",
      content: {
        introduction: "Network security tools are essential for protecting an organization's network infrastructure.",
        sections: [
          {
            title: "Intrusion Detection Systems (IDS) and Intrusion Prevention Systems (IPS)",
            content: [
              "IDS monitors network traffic for suspicious activity.",
              "IPS actively blocks malicious traffic.",
              "Both tools are critical for detecting and preventing network-based attacks."
            ]
          },
          {
            title: "Firewalls and Proxies",
            content: [
              "Firewalls filter incoming and outgoing traffic based on predefined rules.",
              "Proxies act as intermediaries between users and the internet, providing additional security."
            ]
          },
          {
            title: "Network Packet Capture and Analysis",
            content: [
              "Tools like Wireshark and Zeek capture and analyze network traffic.",
              "They help identify anomalies and investigate security incidents."
            ]
          }
        ]
      }
    },
    {
      id: "log-analysis",
      title: "Log Analysis Tools",
      content: {
        introduction: "Log analysis is a critical skill for SOC analysts, enabling them to detect and investigate security incidents.",
        sections: [
          {
            title: "Understanding Logs",
            content: [
              "Logs record events and activities on systems and networks.",
              "They provide valuable insights into security incidents."
            ]
          },
          {
            title: "Windows Event Logs",
            content: [
              "Windows Event Viewer records system, security, and application events.",
              "It is a key tool for investigating Windows-based incidents."
            ]
          },
          {
            title: "Linux System Logs",
            content: [
              "Linux logs are stored in files like /var/log/syslog and /var/log/auth.log.",
              "They provide information about system and user activities."
            ]
          },
          {
            title: "Network Logs",
            content: [
              "Firewall, IDS/IPS, DNS, and proxy logs provide insights into network activity.",
              "They are critical for detecting and investigating network-based attacks."
            ]
          }
        ]
      }
    },
    {
      id: "career-development",
      title: "Career Development for SOC Analysts",
      content: {
        introduction: "Building a successful career as a SOC analyst requires continuous learning and skill development.",
        sections: [
          {
            title: "Certifications",
            content: [
              "CompTIA Security+: Foundational cybersecurity knowledge.",
              "GIAC Security Essentials (GSEC): Hands-on security skills.",
              "Certified SOC Analyst (CSA): Focused on SOC operations.",
              "GIAC Certified Incident Handler (GCIH): Incident response expertise."
            ]
          },
          {
            title: "Building a Resume",
            content: [
              "Highlight experience with SIEM, EDR, and forensic tools.",
              "Showcase certifications and hands-on projects.",
              "Tailor your resume to the job description."
            ]
          },
          {
            title: "Common Interview Questions",
            content: [
              "Explain the difference between IDS and IPS.",
              "How would you analyze a phishing email?",
              "Describe the MITRE ATT&CK framework."
            ]
          },
          {
            title: "Career Growth Paths",
            content: [
              "Incident Responder: Handling active security incidents.",
              "Threat Hunter: Proactively searching for hidden threats.",
              "SOC Manager or Security Engineer: Leading teams and designing security infrastructures."
            ]
          }
        ]
      }
    }
  ];

  const activeContent = sections.find(section => section.id === activeSection)?.content;
  const activeSubSectionContent = activeContent?.sections?.find(s => s.title === activeSubSection);

  const handleQuizSubmit = (moduleId, answers) => {
    setQuizResults({ ...quizResults, [moduleId]: answers });
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
              <span className="text-xl font-bold animate-fadeIn">
                <span className="text-white">Hack</span>
                <span className="text-primary-red">The</span>
                <span className="text-white">Hackers</span>
              </span>
            </div>
          </div>
        </div>
      </nav>

      <div className="bg-primary-dark/50 py-8 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 animate-fadeIn">
            <Book className="w-8 h-8 text-primary-blue animate-pulse-slow" />
            <div>
              <h1 className="text-2xl font-bold gradient-text">SOC Analyst</h1>
              <p className="text-gray-400 text-sm mt-1">Master Security Operations Center processes and tools</p>
              <div className="mt-2 progress-bar"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="w-64 bg-primary-dark/30 min-h-[calc(100vh-11rem)] border-r border-primary-blue/20 glass-effect">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4 gradient-text">Course Sections</h2>
            <div className="space-y-2">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => {
                    setActiveSection(section.id);
                    setActiveSubSection("");
                  }}
                  className={`w-full text-left px-4 py-2 rounded-md flex items-center justify-between hover-card transition-all ${
                    activeSection === section.id
                      ? 'bg-primary-blue/20 text-primary-blue'
                      : 'hover:bg-primary-blue/10'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {section.title}
                  <ChevronRight className={`w-4 h-4 transform transition-transform ${
                    activeSection === section.id ? 'rotate-90' : ''
                  }`} />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 p-8">
          {activeContent && (
            <div className="space-y-8">
              {!activeSubSection && (
                <>
                  <h1 className="text-3xl font-bold text-primary-blue mb-4 reveal-scale">
                    {sections.find(s => s.id === activeSection)?.title}
                  </h1>
                  <p className="text-lg mb-8 whitespace-pre-line reveal">{activeContent.introduction}</p>
                </>
              )}
              
              {activeSubSection && activeSubSectionContent && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold gradient-text reveal">{activeSubSectionContent.title}</h2>
                  
                  {activeSubSectionContent.content && (
                    <ul className="list-disc list-inside space-y-2 text-gray-200">
                      {activeSubSectionContent.content.map((item, i) => (
                        <li 
                          key={i} 
                          className="reveal-left hover:text-primary-blue transition-colors" 
                          style={{ animationDelay: `${i * 100}ms` }}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {activeSubSectionContent.subsections && (
                    <div className="space-y-6">
                      {activeSubSectionContent.subsections.map((subsection, si) => (
                        <div 
                          key={si} 
                          className="space-y-2 reveal"
                          style={{ animationDelay: `${si * 100}ms` }}
                        >
                          <h3 className="text-xl font-bold">{subsection.title}</h3>
                          <ul className="list-disc list-inside space-y-2 text-gray-200">
                            {subsection.content.map((item, i) => (
                              <li 
                                key={i}
                                className="hover:text-primary-blue transition-colors reveal-left"
                                style={{ animationDelay: `${(si * 4 + i) * 100}ms` }}
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {activeContent?.sections && activeContent.sections.length > 0 && (
          <div className="w-64 bg-primary-dark/30 min-h-[calc(100vh-11rem)] border-l border-primary-blue/20 glass-effect">
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-4 gradient-text">Module Sections</h2>
              <div className="space-y-2">
                {activeContent.sections.map((section, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSubSection(section.title)}
                    className={`w-full text-left px-4 py-2 rounded-md hover-card transition-all ${
                      activeSubSection === section.title
                        ? 'bg-primary-blue/20 text-primary-blue'
                        : 'hover:bg-primary-blue/10'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {section.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SocAnalyst;
