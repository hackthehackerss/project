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
      {
        title: "The ABCs of Cybersecurity",
        summary: (
          
          <>
                    <img
  src="/Learning Paths/Fundamentals/ABC.png"
  alt="ABC"
  className="max-w-xl w-full h-auto border border-gray-300 rounded-lg p-2 shadow-md mx-auto"
/> <p className="mt-4"></p>
            <p><strong>A is for Authentication &amp; Access Control</strong></p>
            <p>
              In cybersecurity, one of the first concepts you’ll encounter is authentication—the process of verifying someone’s identity. Think of it as showing your ID at the door. Whether it’s a password, fingerprint scan, or multi-factor authentication (MFA), authentication ensures that only authorized individuals can access sensitive systems.
            </p>
            <p>
              But it doesn’t stop there. Access control takes it a step further by determining what you’re allowed to do once you’re inside. For example, while authentication might grant you entry to a company’s network, access control dictates which files you can view, edit, or share.
            </p>
            <p>
            <p className="mt-2"></p>
              <strong>Why it matters:</strong> Weak or stolen credentials are among the most common ways hackers breach systems. Understanding and implementing strong authentication and access control measures are essential for building secure systems and protecting sensitive information.
            </p>
            <p className="mt-2"></p>
            <p><strong>B is for Backups &amp; Data Security</strong></p>
            <p>
              Cybersecurity isn’t just about keeping hackers out—it’s also about safeguarding the integrity and availability of your data. This is where backups come into play. Backups are copies of your critical data that you can rely on in case of emergencies, such as cyberattacks, accidental deletions, or hardware failures. However, backups are only useful if they’ve been tested and proven reliable for restoration.
            </p>
            <p>
              Beyond backups, data security involves encrypting your data (scrambling it so unauthorized users can’t read it) and storing it securely. This ensures that even if data is intercepted, it remains unusable to cybercriminals.
            </p>
            <p>
            <p className="mt-2"></p>
              <strong>Why it matters:</strong> No system is completely foolproof. Strong backups and robust data security practices ensure that you can recover quickly and minimize damage in the event of a breach or data loss.
            </p>
            <p className="mt-2"></p>
            <p><strong>C is for Cloud Security &amp; Cyber Hygiene</strong></p>
            <p>
              As more organizations transition to the cloud, understanding cloud security is critical. Cloud security focuses on protecting the data, applications, and services stored in the cloud from unauthorized access, attacks, and loss. Beginners should familiarize themselves with the shared responsibility model, which outlines what the cloud provider secures versus what you’re responsible for protecting.
            </p>
            <p>
              Equally important is cyber hygiene—a set of practices and habits that help keep your devices and information secure. Think of it as washing your hands in the digital world. Cyber hygiene includes keeping software up to date, using strong passwords, enabling MFA, and regularly scanning systems for vulnerabilities.
            </p>
            <p>
            <p className="mt-2"></p>
              <strong>Why it matters:</strong> While cloud services offer immense power and flexibility, they’re not immune to risks. Prioritizing cloud security and maintaining good cyber hygiene are key to protecting sensitive data and maintaining a secure online environment.
            </p>
          </>
        )
      },
      {
        title: "Why Cybersecurity is Important",
        summary: (
          <>
<img
  src="/Learning Paths/Fundamentals/securityimportant.png"
  alt="Important Security"
  className="max-w-xl w-full h-auto border border-gray-300 rounded-lg p-2 shadow-md mx-auto"
/>

<p className="mt-4"></p>
            <h2 className="text-xl font-bold mb-2">What is Cybersecurity?</h2>
            <p>
              Cybersecurity is the practice of protecting devices, systems, networks,
              and data from malicious electronic attacks carried out by hackers,
              spammers, and cybercriminals. While some aspects of cybersecurity may
              involve proactive measures, the primary focus for most professionals is
              on defending digital assets—ranging from computers and smartphones to
              networks and databases—against unauthorized access, damage, or theft.
            </p>
      
            <p className="mt-4">
              In the media, cybersecurity is often used as a broad term to describe
              protection against various forms of cybercrime, from identity theft to
              sophisticated digital weapons. While these descriptions are accurate,
              they often fail to convey the depth and complexity of cybersecurity,
              especially for those without a technical background or experience in the
              field.
            </p>
      
            <p className="mt-4">
              The consequences of a cyberattack extend far beyond the immediate loss
              of confidential data. For businesses, a breach can damage customer
              trust, tarnish reputations, and even result in significant legal and
              financial repercussions. As technology continues to evolve—from
              self-driving cars to smart home devices—the risks associated with
              cybercrime grow more severe, making robust cybersecurity measures more
              critical than ever.
            </p>
      
            <h3 className="text-lg font-semibold mt-6 mb-2">What Are Cyberattacks?</h3>
            <p>
              A cyberattack is a deliberate and malicious attempt to gain unauthorized
              access to computer systems, networks, or data. According to IBM, the
              goals of such attacks can vary widely, including stealing sensitive
              information, exposing private data, altering or destroying systems, or
              disrupting operations.
            </p>
      
            <p className="mt-4">
              Cyberattacks can be motivated by a range of factors, including financial
              gain, political agendas, or personal revenge. As noted by cybersecurity
              expert Royster, “While there are many reasons behind cyberattacks,
              financial gain is often the primary driver, as attackers can potentially
              make significant profits from these exploits.”
            </p>
      
            <h3 className="text-lg font-semibold mt-6 mb-2">
              Who is Behind Cyberattacks?
            </h3>
            <p>
              Cyberattacks against organizations can originate from a variety of
              sources, broadly categorized as outsider threats and insider threats.
            </p>
      
            <h4 className="font-semibold mt-4">Outsider Threats (External Threats):</h4>
            <p>
              These attacks come from individuals or groups outside the organization.
              Common sources include:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>
                <strong>Organized Crime Groups:</strong> Sophisticated networks that
                target businesses for financial gain.
              </li>
              <li>
                <strong>Professional Hackers:</strong> Skilled individuals or groups
                hired to breach systems for profit or espionage.
              </li>
              <li>
                <strong>Amateur Hackers:</strong> Less experienced individuals who may
                use pre-made tools to exploit vulnerabilities.
              </li>
            </ul>
      
            <h4 className="font-semibold mt-4">Insider Threats (Internal Threats):</h4>
            <p>
              These threats come from within the organization and involve individuals
              who have authorized access to systems or data. Insider threats can be
              intentional or accidental and include:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>
                <strong>Careless Employees:</strong> Individuals who inadvertently
                compromise security by neglecting protocols, such as using weak
                passwords or falling for phishing scams.
              </li>
              <li>
                <strong>Disgruntled Employees:</strong> Current or former staff
                members who deliberately misuse their access to harm the organization.
              </li>
              <li>
                <strong>Business Partners or Clients:</strong> Third parties with
                system access who may abuse their privileges, either intentionally or
                unintentionally.
              </li>
            </ul>
      
            <h3 className="text-lg font-semibold mt-6 mb-2">Why It Matters</h3>
            <p>
              Understanding the nature of cyberattacks and the motivations behind them
              is crucial for building effective defenses. Whether the threat comes
              from an external hacker or a trusted insider, organizations must
              implement comprehensive cybersecurity strategies to protect their
              assets, maintain customer trust, and avoid legal and financial
              consequences. As cyber threats continue to evolve, staying informed and
              proactive is key to staying secure in an increasingly digital world.
            </p>
          </>
        )
      },
      
      {
        title: "The Evolving Threat Landscape",
        summary: (
          <>
          <img
  src="/Learning Paths/Fundamentals/The Evolving Threat Landscape.png"
  alt="Important Security"
  className="max-w-xl w-full h-auto border border-gray-300 rounded-lg p-2 shadow-md mx-auto"
/>
<p className="mt-6"></p>
     
            <p>
              The cybersecurity threat landscape is in a constant state of flux, with new and increasingly sophisticated threats emerging regularly. Staying ahead of these challenges requires vigilance and adaptability. Here are some key trends shaping the cybersecurity landscape this year:
            </p>
      
            <h3 className="mt-4 font-bold">Increasing Sophistication of Cyberattacks</h3>
            <p>
              Cyberattacks are becoming more advanced, leveraging cutting-edge technologies like Artificial Intelligence (AI) and machine learning (ML) to automate attacks, evade detection, and exploit vulnerabilities at scale. Attackers are also using these tools to craft highly targeted phishing campaigns, making it harder for traditional security measures to keep up.
            </p>
      
            <h3 className="mt-4 font-bold">Rise of Ransomware Attacks</h3>
            <p>
              Ransomware remains one of the most significant threats to businesses. Attackers encrypt critical data and demand hefty ransoms for its release, often causing severe financial losses, operational disruptions, and reputational damage. The rise of Ransomware-as-a-Service (RaaS) has made these attacks more accessible to less-skilled criminals, increasing their frequency and impact.
            </p>
      
            <h3 className="mt-4 font-bold">Growing Threat of Insider Attacks</h3>
            <p>
              Insider threats—whether intentional or accidental—are on the rise. Employees, contractors, or partners with access to sensitive data can inadvertently or deliberately cause harm. These attacks are particularly challenging to detect and prevent, as they often come from trusted individuals with legitimate access to systems.
            </p>
      
            <h3 className="mt-4 font-bold">Expanding Attack Surface with IoT Devices</h3>
            <p>
              The proliferation of Internet of Things (IoT) devices has significantly expanded the attack surface for cybercriminals. Many IoT devices lack robust security measures, making them easy targets for exploitation. Once compromised, these devices can serve as entry points into larger networks, posing a serious risk to organizations.
            </p>
      
            <h3 className="mt-4 font-bold">Staying Ahead of Cybersecurity Threats</h3>
            <p>
              To effectively navigate the evolving threat landscape, businesses must adopt a proactive and holistic approach to cybersecurity. Here are key strategies to consider:
            </p>
      
            <h4 className="mt-4 font-semibold">Conduct Regular Risk Assessments</h4>
            <p>
              Regular risk assessments are critical for identifying and mitigating potential vulnerabilities. By thoroughly analyzing your systems, data, and processes, you can uncover weak points and implement targeted measures to address them before they are exploited.
            </p>
      
            <h4 className="mt-4 font-semibold">Implement a Comprehensive Cybersecurity Framework</h4>
            <p>
              A robust cybersecurity framework is essential for managing risks effectively. This framework should include a combination of technical controls (e.g., firewalls, encryption), administrative controls (e.g., policies, procedures), and physical controls (e.g., access restrictions). Establishing clear incident response plans also minimizes damage in the event of a breach.
            </p>
      
            <h4 className="mt-4 font-semibold">Invest in Employee Training and Awareness</h4>
            <p>
              Employees are often the first line of defense against cyber threats. Regular training and awareness programs empower your workforce to recognize and respond to potential risks, such as phishing attempts or suspicious activities. Building a strong cybersecurity culture ensures security is a shared responsibility across the organization.
            </p>
      
            <h4 className="mt-4 font-semibold">Stay Informed About Emerging Threats</h4>
            <p>
              The cybersecurity landscape evolves rapidly. Staying informed about the latest trends and vulnerabilities allows you to adapt your defenses and implement proactive measures to protect your business.
            </p>
      
            <h3 className="mt-4 font-bold">Conclusion</h3>
            <p>
              The cybersecurity threat landscape is dynamic and increasingly complex, requiring businesses to remain vigilant and proactive. A comprehensive approach—encompassing regular risk assessments, robust frameworks, employee training, and continuous vigilance—is essential for long-term resilience.
            </p>
          </>
        )
      },
      {
        title: "Cybersecurity Frameworks and Standards",
        summary: (
          <>
                    <img
  src="/Learning Paths/Fundamentals/NIST.png"
  alt="Important Security"
  className="max-w-3xl w-full h-auto border border-gray-300 rounded-lg p-2 shadow-md "
/>
<p className="mt-6"></p>
            <h2 className="text-xl font-bold mb-2">
              What Are Cybersecurity Frameworks, and Why Are They Necessary?
            </h2>
            <p>
              A cybersecurity framework is a structured set of policies, practices, and procedures designed to establish and maintain an effective cybersecurity posture. These frameworks provide organizations with the guidance needed to identify, assess, and manage risks that could lead to data breaches, system outages, or other disruptions. By offering a systematic approach to cybersecurity, frameworks help organizations protect their critical assets and ensure operational resilience.
            </p>
            <p className="mt-4">
              Cybersecurity frameworks are essential because they enable organizations to:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>
                <strong>Evaluate Current Security Practices:</strong> Identify strengths and weaknesses in existing security measures.
              </li>
              <li>
                <strong>Address Gaps in Protection:</strong> Implement targeted safeguards to mitigate vulnerabilities.
              </li>
              <li>
                <strong>Align Security with Business Goals:</strong> Ensure cybersecurity strategies support the organization’s specific needs and objectives.
              </li>
            </ul>
            <p className="mt-4">
              For managed service providers (MSPs) looking to integrate a cybersecurity framework into their operations, resources like <em>Building a Framework for MSP Success</em> can provide a solid starting point.
            </p>
            <h3 className="mt-6 font-bold">Key Cybersecurity Frameworks to Consider</h3>
            <p>
              The field of information security is vast and ever-evolving, encompassing a wide range of technologies, frameworks, and best practices. The choice of framework depends on factors such as industry, organizational size, and operational scope. Below are some of the most widely adopted cybersecurity frameworks:
            </p>
            <ol className="list-decimal list-inside mt-2">
              <li>
                <strong>NIST Cybersecurity Framework:</strong> Developed by the National Institute of Standards and Technology (NIST), this framework helps organizations manage and reduce cybersecurity risks. Originally created in 2014 for federal agencies, it has become a global standard built around five core functions: Identify, Protect, Detect, Respond, and Recover. In February 2024, NIST released Version 2.0 with enhanced governance and supply chain security.
              </li>
              <li className="mt-2">
                <strong>ISO 27001 and ISO 27002:</strong> These standards provide a comprehensive approach to information security management. ISO 27001 establishes an Information Security Management System (ISMS), while ISO 27002 offers detailed guidance on cybersecurity controls, ensuring organizations protect sensitive data and meet regulatory requirements.
              </li>
              <li className="mt-2">
                <strong>CIS Controls:</strong> The Center for Internet Security (CIS) Controls framework offers a prioritized set of best practices—organized into Basic, Foundational, and Organizational controls—to help organizations defend against cyber threats.
              </li>
              <li className="mt-2">
                <strong>SOC2:</strong> This auditing standard is used to assess the security, availability, processing integrity, confidentiality, and privacy of a company’s systems and services. SOC2 is widely adopted by cloud service providers to demonstrate high security and operational standards.
              </li>
              <li className="mt-2">
                <strong>PCI-DSS:</strong> Developed by a council of major payment processors, PCI-DSS protects customer payment card data with 12 key requirements, including strong access controls, encryption, and regular network monitoring. PCI-DSS Version 4.0 became mandatory in March 2024, introducing MFA for added security.
              </li>
            </ol>
            <h3 className="mt-6 font-bold">Conclusion</h3>
            <p>
              Cybersecurity frameworks are indispensable tools for organizations seeking to protect their assets, comply with regulations, and build resilience against evolving threats. Whether you choose the NIST Cybersecurity Framework, ISO 27001, CIS Controls, SOC2, or PCI-DSS, adopting a structured approach to cybersecurity ensures that your organization is well-equipped to navigate the complexities of the digital landscape. Leveraging these frameworks not only mitigates risks but also fosters trust with customers and stakeholders in an interconnected world.
            </p>
          </>
        )
      }
      
     
    ],
    quiz: {
      questions: [
        {
          id: 1,
          question: "In the ABCs of Cybersecurity, what does the letter 'A' represent?",
          options: [
            "Authentication & Access Control",
            "Antivirus & Analysis",
            "Automation & Algorithms",
            "Administration & Auditing"
          ],
          correctAnswer: "Authentication & Access Control"
        },
        {
          id: 2,
          question: "Why is strong authentication important in cybersecurity?",
          options: [
            "It prevents unauthorized access by verifying identity",
            "It speeds up network performance",
            "It reduces hardware costs",
            "It improves software usability"
          ],
          correctAnswer: "It prevents unauthorized access by verifying identity"
        },
        {
          id: 3,
          question: "Why is cybersecurity important for businesses?",
          options: [
            "It prevents data breaches and protects a company’s reputation",
            "It lowers operational costs immediately",
            "It eliminates the need for employee training",
            "It speeds up product development"
          ],
          correctAnswer: "It prevents data breaches and protects a company’s reputation"
        },
        {
          id: 4,
          question: "Which of the following is a major consequence of a cyberattack?",
          options: [
            "Loss of customer trust",
            "Increase in employee salaries",
            "Improved system performance",
            "Faster website load times"
          ],
          correctAnswer: "Loss of customer trust"
        },
        {
          id: 5,
          question: "What is one key trend in the evolving threat landscape?",
          options: [
            "Increasing sophistication of cyberattacks with AI and ML",
            "Decreasing frequency of attacks",
            "Simpler phishing methods",
            "Lower risks for small businesses"
          ],
          correctAnswer: "Increasing sophistication of cyberattacks with AI and ML"
        },
        {
          id: 6,
          question: "Which emerging threat is highlighted in the evolving threat landscape?",
          options: [
            "Rise of ransomware attacks",
            "Elimination of malware",
            "Universal patching of vulnerabilities",
            "Decreased insider threats"
          ],
          correctAnswer: "Rise of ransomware attacks"
        },
        {
          id: 7,
          question: "Which framework is built around the five functions: Identify, Protect, Detect, Respond, and Recover?",
          options: [
            "NIST Cybersecurity Framework",
            "ISO 27001",
            "CIS Controls",
            "SOC2"
          ],
          correctAnswer: "NIST Cybersecurity Framework"
        },
        {
          id: 8,
          question: "What is the primary purpose of a cybersecurity framework?",
          options: [
            "To provide guidance for managing cybersecurity risks",
            "To design new hardware",
            "To automate marketing campaigns",
            "To improve website aesthetics"
          ],
          correctAnswer: "To provide guidance for managing cybersecurity risks"
        },
        {
          id: 9,
          question: "Which benefit is provided by using a cybersecurity framework?",
          options: [
            "Evaluate current security practices",
            "Eliminate the need for backups",
            "Guarantee 100% protection",
            "Automatically fix vulnerabilities"
          ],
          correctAnswer: "Evaluate current security practices"
        },
        {
          id: 10,
          question: "What does 'operational resilience' mean in the context of cybersecurity frameworks?",
          options: [
            "The ability to maintain critical operations during and after a cyberattack",
            "Faster internet connectivity",
            "Enhanced graphic performance",
            "Automated email responses"
          ],
          correctAnswer: "The ability to maintain critical operations during and after a cyberattack"
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
          "id": 1,
          "question": "Which role is responsible for monitoring and analyzing security alerts from SIEM tools?",
          "options": ["Security Engineer", "SOC Analyst", "Incident Responder", "Penetration Tester"],
          "correctAnswer": "SOC Analyst"
        },
        {
          "id": 2,
          "question": "Which role focuses on reverse-engineering malware to understand its behavior?",
          "options": ["Malware Analyst", "Digital Forensics Analyst", "Security Engineer", "Incident Responder"],
          "correctAnswer": "Malware Analyst"
        },
        {
          "id": 3,
          "question": "Which role is responsible for designing and implementing security controls to protect an organization's infrastructure?",
          "options": ["Security Engineer", "Penetration Tester", "SOC Analyst", "Digital Forensics Analyst"],
          "correctAnswer": "Security Engineer"
        },
        {
          "id": 4,
          "question": "Which role involves simulating cyberattacks to identify vulnerabilities in systems and networks?",
          "options": ["Penetration Tester", "SOC Analyst", "Incident Responder", "Malware Analyst"],
          "correctAnswer": "Penetration Tester"
        },
        {
          "id": 5,
          "question": "Which role is responsible for handling and mitigating cybersecurity incidents?",
          "options": ["Incident Responder", "SOC Analyst", "Security Engineer", "Digital Forensics Analyst"],
          "correctAnswer": "Incident Responder"
        },
        {
          "id": 6,
          "question": "Which role investigates cybercrimes by analyzing digital evidence and preparing forensic reports?",
          "options": ["Digital Forensics Analyst", "Malware Analyst", "Penetration Tester", "Security Engineer"],
          "correctAnswer": "Digital Forensics Analyst"
        }
      ]
    }
  },
  {
    id: "module3",
    title: "The CIA Triad",
    sections: [
      {
        title: "What Is The CIA Triad?",
        summary: (
          <>
                    <img
  src="/Learning Paths/Fundamentals/The CIA Triad.png"
  alt="Important Security"
  className="max-w-xl w-full h-auto border border-gray-300 rounded-lg p-2 shadow-md mx-auto"
/>
            <p><strong>What Is The CIA Triad?</strong></p>
            <p>
              The CIA Triad—comprising Confidentiality, Integrity, and Availability—is a cornerstone model in information security. It serves as a blueprint for designing, evaluating, and strengthening security systems. By breaking down security into these three core principles, organizations can better identify vulnerabilities, implement targeted solutions, and build a robust defense against cyber threats. When all three elements are effectively addressed, an organization’s security posture becomes resilient, capable of safeguarding critical assets and maintaining operational continuity.
            </p>
            <p>
              But why is the CIA Triad so widely adopted, and how can it be uniquely applied to modern cybersecurity challenges? Let’s explore its components, their significance, and how they can be tailored to address evolving threats.
            </p>
            <p className="mt-2"></p>
            <p><strong>Why the CIA Triad Matters</strong></p>
            <p>
              The CIA Triad is not just a theoretical concept; it’s a practical framework that guides decision-making in cybersecurity. It provides a high-level checklist for evaluating security policies, tools, and incident responses.
            </p>
            <ul>
              <li>
              <p className="mt-2"></p>
                <strong>Holistic Security:</strong> It ensures that no critical aspect of security is overlooked. A system that excels in confidentiality but fails in availability is incomplete.
              </li>
              <li>
              <p className="mt-2"></p>
                <strong>Incident Analysis:</strong> After a security breach, the triad helps dissect what went wrong. For instance, was confidentiality breached, or was availability disrupted? This analysis informs better future defenses.
              </li>
              <li>
              <p className="mt-2"></p>
                <strong>Proactive Defense:</strong> By focusing on the triad, organizations can anticipate attacker motives and disrupt the Cyber Kill Chain—the step-by-step process attackers use to execute breaches.
              </li>
              <li>
              <p className="mt-2"></p>
                <strong>Employee Training:</strong> It simplifies cybersecurity concepts, making it easier to train employees on protecting sensitive data and systems.
              </li>
            </ul>
          </>
        )
      },
      {
        title: "Confidentiality",
        summary: (
          <>
           
            <p><strong>Confidentiality: Keeping Secrets Safe</strong></p>
            <p>
              Confidentiality ensures that sensitive information is accessible only to authorized individuals. It’s about controlling who can view, share, or modify data. In a world where data breaches are rampant, maintaining confidentiality is critical to protecting trade secrets, customer information, and intellectual property.
            </p>
            <p className="mt-2"></p>
            <p><strong>Threats to Confidentiality:</strong></p>
            <ul>
              <li>
                <strong>Cyberattacks:</strong> Techniques like man-in-the-middle (MITM) attacks, phishing, or credential theft aim to steal or expose sensitive data.
              </li>
              <li>
                <strong>Human Error:</strong> Weak passwords, accidental data sharing, or improper encryption can lead to unintended exposure.
              </li>
              <li>
                <strong>Insider Threats:</strong> Employees with malicious intent or poor security practices can compromise confidentiality.
              </li>
            </ul>
            <p><strong>Unique Strategies for Confidentiality:</strong></p>
            <ul>
              <li>
                <strong>Data Classification:</strong> Label data based on sensitivity (e.g., public, internal, confidential) and enforce access controls accordingly.
              </li>
              <li>
                <strong>Zero Trust Architecture:</strong> Assume no user or device is inherently trustworthy. Verify every access request, even from within the network.
              </li>
              <li>
                <strong>Homomorphic Encryption:</strong> Process encrypted data without decrypting it, ensuring confidentiality even during computation.
              </li>
            </ul>
          </>
        )
      },
      {
        title: "Integrity",
        summary: (
          <>
           
            <p><strong>Integrity: Ensuring Trustworthy Data</strong></p>
            <p>
              Integrity ensures that data remains accurate, consistent, and unaltered throughout its lifecycle. Whether it’s financial records, customer databases, or website content, tampered data can lead to mistrust, financial losses, and reputational damage.
            </p>
            <p className="mt-2"></p>
            <p><strong>Threats to Integrity:</strong></p>
            <ul>
              <li>
                <strong>Cyberattacks:</strong> Hackers may alter data to mislead, sabotage, or extort an organization.
              </li>
              <li>
                <strong>System Errors:</strong> Software bugs or hardware malfunctions can corrupt data.
              </li>
              <li>
                <strong>Human Error:</strong> Accidental changes or deletions can compromise data reliability.
              </li>
            </ul>
            <p className="mt-2"></p>
            <p><strong>Unique Strategies for Integrity:</strong></p>
            <ul>
              <li>
                <strong>Blockchain Technology:</strong> Use decentralized ledgers to create immutable records of transactions or data changes.
              </li>
              <li>
                <strong>Digital Signatures:</strong> Verify the authenticity and integrity of documents or communications.
              </li>
              <li>
                <strong>Checksums and Hashing:</strong> Detect unauthorized changes by comparing hash values before and after data transmission or storage.
              </li>
            </ul>
          </>
        )
      },
      {
        title: "Availability",
        summary: (
          <>
         
            <p><strong>Availability: Ensuring Access When Needed</strong></p>
            <p>
              Availability ensures that systems, data, and services are accessible to authorized users when required. Downtime, whether caused by cyberattacks, hardware failures, or natural disasters, can cripple operations and erode customer trust.
            </p>
            <p className="mt-2"></p>
            <p><strong>Threats to Availability:</strong></p>
            <ul>
              <li>
              <p className="mt-2"></p>
                <strong>Denial-of-Service (DoS) Attacks:</strong> Overwhelm systems to make them unavailable to legitimate users.
              </li>
              <li>
              <p className="mt-2"></p>
                <strong>Ransomware:</strong> Encrypt data or systems, rendering them inaccessible until a ransom is paid.
              </li>
              <li>
              <p className="mt-2"></p>
                <strong>Hardware Failures:</strong> Servers, storage devices, or network equipment can fail, disrupting operations.
              </li>
            </ul>
            <p className="mt-2"></p>
            <p><strong>Unique Strategies for Availability:</strong></p>
            <ul>
              <li>
              <p className="mt-2"></p>
                <strong>Edge Computing:</strong> Distribute computing resources closer to users to reduce latency and improve resilience.
              </li>
              <li>
              <p className="mt-2"></p>
                <strong>AI-Driven Monitoring:</strong> Use machine learning to predict and prevent potential system failures or attacks.
              </li>
              <li>
              <p className="mt-2"></p>
                <strong>Immutable Backups:</strong> Store backups in a way that prevents tampering, ensuring quick recovery after an attack.
              </li>
            </ul>
          </>
        )
      },
      {
        title: "Beyond the Basics",
        summary: (
          <>
        
            <p><strong>When to Use the CIA Triad</strong></p>
            <ul>
              <li>
              <p className="mt-2"></p>
                <strong>System Design:</strong> Build security into new systems from the ground up.
              </li>
              <li>
              <p className="mt-2"></p>
                <strong>Incident Response:</strong> Analyze breaches to identify which pillar was compromised and how.
              </li>
              <li>
              <p className="mt-2"></p>
                <strong>Compliance:</strong> Align security practices with regulations like GDPR, HIPAA, or PCI-DSS.
              </li>
              <li>
              <p className="mt-2"></p>
                <strong>Employee Training:</strong> Teach staff to think in terms of confidentiality, integrity, and availability when handling data.
              </li>
            </ul>
            <p className="mt-2"></p>
            <p><strong>Beyond the Basics: Making the CIA Triad Unique</strong></p>
            <p>
              
              While the CIA Triad is a well-established model, its application can be tailored to address modern challenges:
            </p>
            <ul>
              <li>
              <p className="mt-2"></p>
                <strong>Adapt to Emerging Technologies:</strong> As organizations adopt cloud computing, IoT, and AI, the triad must evolve. For example:
                <ul>
                  <li>
                  <p className="mt-2"></p>
                    <strong>Confidentiality:</strong> Encrypt data in transit and at rest, even in multi-cloud environments.
                  </li>
                  <li>
                  <p className="mt-2"></p>
                    <strong>Integrity:</strong> Use AI to detect anomalies in data patterns that may indicate tampering.
                  </li>
                  <li>
                  <p className="mt-2"></p>
                    <strong>Availability:</strong> Leverage cloud redundancy to ensure uninterrupted access.
                  </li>
                </ul>
              </li>
              <li>
              <p className="mt-2"></p>
                <strong>Focus on Human-Centric Security:</strong> Recognize that humans are often the weakest link. Implement:
                <ul>
                  <li>
                    <strong>Behavioral Analytics:</strong> Monitor user activity to detect unusual behavior.
                  </li>
                  <li>
                    <strong>Gamified Training:</strong> Make cybersecurity training engaging and memorable.
                  </li>
                </ul>
              </li>
              <li>
              <p className="mt-2"></p>
                <strong>Integrate with Threat Intelligence:</strong> Use real-time threat data to prioritize efforts. For example:
                <ul>
                  <li>
                    If ransomware attacks are on the rise, focus on availability and backup strategies.
                  </li>
                  <li>
                    If phishing campaigns target your industry, emphasize confidentiality and employee awareness.
                  </li>
                </ul>
              </li>
              <li>
              <p className="mt-2"></p>
                <strong>Leverage Automation:</strong> 
                <p className="mt-2"></p>Automate routine tasks like patch management, access control, and incident response to ensure consistency and reduce human error.
              </li>
            </ul>
            <p className="mt-4"></p>
            <p><strong>Conclusion</strong></p>
            <p>
              The CIA Triad is more than just a theoretical framework—it’s a dynamic tool that adapts to the ever-changing cybersecurity landscape. By focusing on confidentiality, integrity, and availability, organizations can build a multi-layered defense that not only protects against current threats but also anticipates future challenges. Whether you’re designing a new system, responding to an incident, or training your team, the CIA Triad provides a clear, actionable roadmap for achieving robust security. In a world where data is the new currency, the CIA Triad ensures that your organization’s most valuable assets remain secure, trustworthy, and accessible.
            </p>
          </>
        )
      }
    ],
    quiz: {
      questions: [
        {
          id: 1,
          question: "Which component of the CIA Triad ensures that data is accessible to authorized users when needed?",
          options: ["Confidentiality", "Integrity", "Availability", "Authentication"],
          correctAnswer: "Availability"
        },
        {
          id: 2,
          question: "What is the primary goal of confidentiality in the CIA Triad?",
          options: [
            "Ensuring data accuracy",
            "Preventing unauthorized access to data",
            "Ensuring data is always available",
            "Detecting data tampering"
          ],
          correctAnswer: "Preventing unauthorized access to data"
        },
        {
          id: 3,
          question: "Which of the following is a strategy to ensure data integrity?",
          options: [
            "Data Classification",
            "Blockchain Technology",
            "Edge Computing",
            "Homomorphic Encryption"
          ],
          correctAnswer: "Blockchain Technology"
        },
        {
          id: 4,
          question: "What is a common threat to availability?",
          options: [
            "Phishing Attacks",
            "Ransomware",
            "Data Classification Errors",
            "Weak Passwords"
          ],
          correctAnswer: "Ransomware"
        },
        {
          id: 5,
          question: "Which of the following is NOT part of the CIA Triad?",
          options: [
            "Confidentiality",
            "Integrity",
            "Availability",
            "Authentication"
          ],
          correctAnswer: "Authentication"
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
