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
      {
        title: "Introduction to Windows",
        summary: (
          <>
            <p><strong>Overview and History</strong></p>
            <p>
              Windows is one of the most widely used operating systems in the world, powering millions of personal computers, enterprise systems, and specialized devices. Developed by Microsoft, Windows has evolved from its early days as a graphical interface for MS-DOS into a sophisticated, feature-rich platform that underpins modern computing. From Windows 1.0 in the mid-1980s to the modern iterations like Windows 10 and Windows 11, the operating system has continuously adapted to meet the growing demands of users and enterprises alike.
            </p>
            <p>
              The evolution of Windows is marked by major milestones such as the introduction of the Start Menu, taskbar, and a robust networking infrastructure. Each new version has built upon the previous one by enhancing security, user experience, and performance. Today, Windows is not only recognized for its ease of use and powerful graphical interface but also for its extensive support for command-line tools and scripting environments that are essential for advanced system management and cybersecurity.
            </p>
            <p><strong>Architecture and Key Features</strong></p>
            <p>
              At its core, Windows is built on a modular architecture that includes the kernel, system libraries, drivers, and user interface components. This design allows for high flexibility and scalability while maintaining stability and security. The operating system uses a layered approach to manage hardware resources, process scheduling, memory management, and input/output operations, ensuring that applications and services run efficiently.
            </p>
            <p>
              Windows incorporates a variety of security mechanisms such as User Account Control (UAC), Windows Defender, BitLocker encryption, and built-in firewall settings. These features are designed to protect the system from malware, unauthorized access, and other cyber threats. Additionally, Windows supports virtualization, remote desktop management, and a suite of administration tools that are indispensable for IT professionals.
            </p>
            <p><strong>Relevance in the Cybersecurity Landscape</strong></p>
            <p>
              Given its ubiquity, Windows is often a primary target for cyberattacks. Understanding its architecture and operational nuances is critical for cybersecurity professionals tasked with protecting sensitive information and ensuring system integrity. From malware analysis to penetration testing and incident response, in-depth knowledge of Windows is essential for diagnosing vulnerabilities and implementing effective security measures.
            </p>
            <p>
              In this course, we will explore not only the fundamentals of Windows but also the tools and best practices necessary to secure Windows environments. This foundation will prepare you for advanced topics in cybersecurity, where you will apply these principles to real-world scenarios.
            </p>
          </>
        )
      },
      {
        title: "Windows File Systems",
        summary: (
          <>
            <p><strong>Understanding Windows File Systems</strong></p>
            <p>
              Windows supports a variety of file systems, each designed to address specific needs for data storage, performance, and security. The most prominent file system in modern Windows environments is NTFS (New Technology File System), which provides advanced features such as file-level security, journaling, compression, and encryption. In addition to NTFS, legacy systems and external storage devices may use FAT, FAT32, or exFAT.
            </p>
            <p><strong>NTFS: The Modern Standard</strong></p>
            <p>
              NTFS is the default file system for Windows due to its robustness and feature set. Key features include:
            </p>
            <ul>
              <li><strong>Security Permissions:</strong> NTFS allows granular control over file and folder permissions using Access Control Lists (ACLs), ensuring that only authorized users can access or modify data.</li>
              <li><strong>Journaling:</strong> This feature helps protect data integrity by keeping a log of changes, which is vital for recovery in the event of a system failure or power outage.</li>
              <li><strong>File Compression and Encryption:</strong> NTFS supports both compression and the Encrypting File System (EFS) to save disk space and protect sensitive data.</li>
              <li><strong>Disk Quotas:</strong> Administrators can set limits on disk usage, helping to manage storage resources effectively.</li>
            </ul>
            <p><strong>FAT, FAT32, and exFAT</strong></p>
            <p>
              While NTFS is preferred for internal drives, FAT and FAT32 remain in use for removable media due to their compatibility across different operating systems. exFAT, an evolution of FAT32, is optimized for flash drives and large external storage devices.
            </p>
            <p>
              Each file system has its strengths and limitations. For example, FAT32 is simple and widely supported but cannot handle files larger than 4GB, whereas NTFS offers extensive security features but may not be supported by non-Windows operating systems.
            </p>
            <p><strong>File Metadata and Its Role in Security</strong></p>
            <p>
              Beyond storing data, Windows file systems maintain metadata that includes information such as file creation dates, last modified dates, and file permissions. This metadata is crucial for forensic analysis and auditing, as it provides insight into file activity and potential security breaches.
            </p>
            <p>
              Administrators often use tools like the Windows File Explorer or command-line utilities to inspect file metadata, helping to identify unauthorized changes or data corruption. Advanced users can also leverage PowerShell scripts to automate metadata extraction for compliance reporting and security audits.
            </p>
            <p><strong>Best Practices in File System Management</strong></p>
            <p>
              Proper management of file systems is essential for maintaining data integrity and system performance. Key practices include:
            </p>
            <ul>
              <li><strong>Regular Audits:</strong> Periodically review file permissions and metadata to detect anomalies.</li>
              <li><strong>Data Backup and Recovery:</strong> Implement backup solutions that leverage NTFS features like shadow copies to ensure rapid recovery after a failure.</li>
              <li><strong>Encryption:</strong> Utilize EFS to protect sensitive files, especially on systems that store confidential or critical information.</li>
              <li><strong>Disk Cleanup:</strong> Regularly remove unnecessary files and defragment the disk to improve performance.</li>
            </ul>
            <p>
              This comprehensive understanding of Windows file systems is a cornerstone for securing data and ensuring that system integrity is maintained in both enterprise and personal computing environments.
            </p>
          </>
        )
      },
      {
        title: "Windows Directory Structure",
        summary: (
          <>
            <p><strong>Understanding the Hierarchical Structure</strong></p>
            <p>
              The Windows directory structure is designed as a hierarchical tree that organizes files and folders in a logical manner. At the root of the structure lies the system drive (commonly C:\), which branches out into various folders such as Windows, Program Files, and Users. Each of these directories serves a specific purpose in the overall operation of the system.
            </p>
            <p><strong>Key Directories Explained</strong></p>
            <ul>
              <li>
                <strong>C:\Windows:</strong> This directory contains the operating system files, libraries, and drivers essential for system functionality. Subdirectories like <code>System32</code> hold critical executables and dynamic link libraries (DLLs) that are vital for hardware interaction.
              </li>
              <li>
                <strong>C:\Program Files and C:\Program Files (x86):</strong> These folders are used for storing installed applications. The division between 32-bit and 64-bit programs ensures compatibility and optimal performance.
              </li>
              <li>
                <strong>C:\Users:</strong> Every user account on the system has a dedicated folder under this directory. It stores personal files, application data, and user-specific settings.
              </li>
              <li>
                <strong>Legacy Directories:</strong> Older systems often used <code>C:\Documents and Settings</code> to store user profiles. Knowledge of these directories is useful for managing legacy systems and data migrations.
              </li>
            </ul>
            <p><strong>System Environment Variables</strong></p>
            <p>
              Windows utilizes environment variables (such as <code>%SystemRoot%</code> and <code>%USERPROFILE%</code>) to abstract the actual paths of key directories. These variables simplify the scripting and automation processes by providing dynamic references to frequently used paths.
            </p>
            <p><strong>Security and Permissions in the Directory Structure</strong></p>
            <p>
              The directory structure is not only about organization—it’s also about security. Each folder and file is governed by permissions that determine who can read, modify, or execute them. For example, system directories like <code>C:\Windows</code> are typically restricted to prevent unauthorized modifications.
            </p>
            <p>
              Best practices in directory management include regular audits of folder permissions, enforcing the principle of least privilege, and employing Group Policy settings to maintain consistent security policies across all users.
            </p>
            <p>
              Understanding the Windows directory structure is fundamental for troubleshooting, system optimization, and effective security management. It allows administrators and cybersecurity professionals to quickly navigate the file system, locate critical files, and identify potential vulnerabilities.
            </p>
          </>
        )
      },
      {
        title: "Command Line Basics",
        summary: (
          <>
            <p><strong>Introduction to the Command Line</strong></p>
            <p>
              The Windows Command Prompt is a powerful tool that provides a text-based interface for executing commands. While many users rely on the graphical interface, the command line offers greater flexibility, speed, and control over system operations—making it indispensable for automation, troubleshooting, and cybersecurity.
            </p>
            <p><strong>Navigation and File Management</strong></p>
            <p>
              Here are some fundamental commands along with practical examples:
            </p>
            <ul>
              <li>
                <strong>cd</strong>: Changes the current directory.
                <br /><code>{'cd C:\\Users\\JohnDoe\\Documents'}</code> – Navigates to the Documents folder.
              </li>
              <li>
                <strong>dir</strong>: Lists files and directories.
                <br /><code>{'dir /a'}</code> – Lists all files including hidden ones.
              </li>
              <li>
                <strong>mkdir</strong>: Creates a new directory.
                <br /><code>{'mkdir NewProject'}</code> – Creates a folder named NewProject.
              </li>
              <li>
                <strong>copy</strong>: Copies files from one location to another.
                <br /><code>{'copy file1.txt D:\\Backup\\file1.txt'}</code> – Copies a file to a backup folder.
              </li>
              <li>
                <strong>del</strong>: Deletes specified files.
                <br /><code>{'del /F /Q file2.txt'}</code> – Forces deletion of a file without prompt.
              </li>
            </ul>
            <p><strong>Advanced Command Line Techniques</strong></p>
            <p>
              The command line supports chaining commands and using redirection operators to combine multiple tasks. For example:
            </p>
            <ul>
              <li>
                <strong>Pipes:</strong> Use the pipe symbol (<code>|</code>) to pass the output of one command as input to another.
                <br /><code>{'dir | find "Project"'}</code> – Filters the directory listing to show only items containing “Project.”
              </li>
              <li>
                <strong>Redirection:</strong> Redirect output to a file using the <code>&gt;</code> operator.
                <br /><code>{'ipconfig > networkinfo.txt'}</code> – Saves the output of ipconfig to a text file.
              </li>
              <li>
                <strong>Chaining Commands:</strong> Use the ampersand (<code>&amp;</code>) to run multiple commands in sequence.
                <br /><code>{'cd C:\\Logs &amp; dir > loglist.txt'}</code> – Changes directory and then lists files into a file.
              </li>
            </ul>
            <p><strong>Real-World Scenarios</strong></p>
            <p>
              In a cybersecurity context, the command line is often used to quickly inspect system configurations, monitor network settings, and run diagnostic scripts. For example, an analyst might use:
            </p>
            <ul>
              <li>
                <strong>netstat -an</strong>: To display active network connections and open ports.
              </li>
              <li>
                <strong>systeminfo</strong>: To retrieve detailed information about the operating system and hardware configuration.
              </li>
              <li>
                <strong>tasklist</strong>: To view currently running processes and identify suspicious activities.
              </li>
              <li>
                <strong>Get-Process</strong>: Retrieves information about running processes.
                <br /><code>{'Get-Process | Where-Object { $_.CPU -gt 50 }'}</code> – Filters processes using more than 50 CPU seconds.
              </li>
            </ul>
            <p>
              Mastery of the command line not only increases efficiency but also provides deeper insight into system behavior, which is critical when diagnosing security issues or automating routine administrative tasks.
            </p>
          </>
        )
      },
      {
        title: "Windows PowerShell",
        summary: (
          <>
            <p><strong>Introduction to PowerShell</strong></p>
            <p>
              Windows PowerShell is a task automation and configuration management framework that provides a powerful command-line shell and scripting language built on .NET. Unlike the traditional Command Prompt, PowerShell is object-oriented, allowing users to work with rich data types and automate complex tasks with ease.
            </p>
            <p><strong>Core Cmdlets and Their Usage</strong></p>
            <p>
              PowerShell comes with an extensive library of cmdlets. Here are some common examples:
            </p>
            <ul>
              <li>
                <strong>Get-Help</strong>: Provides detailed documentation for cmdlets.
                <br /><code>{'Get-Help Get-Process -Full'}</code> – Displays comprehensive help for the Get-Process cmdlet.
              </li>
              <li>
                <strong>Get-Command</strong>: Lists all available cmdlets.
                <br /><code>{'Get-Command *service*'}</code> – Finds all commands related to services.
              </li>
              <li>
                <strong>Get-Process</strong>: Retrieves information about running processes.
                <br /><code>{'Get-Process | Where-Object { $_.CPU -gt 50 }'}</code> – Filters processes using more than 50 CPU seconds.
              </li>
              <li>
                <strong>Stop-Process</strong>: Terminates a process.
                <br /><code>{'Stop-Process -Name notepad'}</code> – Closes all instances of Notepad.
              </li>
            </ul>
            <p><strong>Working with Objects and Pipelines</strong></p>
            <p>
              One of the key strengths of PowerShell is its ability to pass objects between cmdlets via the pipeline. For example, to list services that are not running:
            </p>
            <pre>{`Get-Service | Where-Object { $_.Status -ne "Running" }`}</pre>
            <p>
              You can then further format the output:
            </p>
            <pre>{`Get-Service | Where-Object { $_.Status -ne "Running" } | Format-Table -AutoSize`}</pre>
            <p><strong>Scripting Examples</strong></p>
            <p>
              PowerShell’s scripting capabilities allow you to automate administrative tasks. Consider the following script that checks disk space and sends an alert if free space is below a threshold:
            </p>
            <pre>{`$drives = Get-PSDrive -PSProvider FileSystem
  foreach ($drive in $drives) {
      if ($drive.Free -lt 10GB) {
          Write-Output "Drive $($drive.Name) has low free space: $([math]::round($drive.Free / 1GB,2)) GB remaining."
      }
  }`}</pre>
            <p>
              Another example involves automating user account management. The following script disables inactive user accounts in Active Directory:
            </p>
            <pre>{`Import-Module ActiveDirectory
  $inactiveUsers = Get-ADUser -Filter {LastLogonDate -lt (Get-Date).AddDays(-90)}
  foreach ($user in $inactiveUsers) {
      Disable-ADAccount -Identity $user.SamAccountName
      Write-Output "Disabled account for $($user.SamAccountName)"
  }`}</pre>
            <p><strong>Advanced Features</strong></p>
            <p>
              PowerShell also supports advanced functions, error handling with Try/Catch blocks, and integration with REST APIs. For instance, you can use Invoke-RestMethod to query web services:
            </p>
            <pre>{`try {
      $response = Invoke-RestMethod -Uri "https://api.example.com/data" -Method Get
      $response.data | Format-Table
  } catch {
      Write-Error "Failed to retrieve data: $_"
  }`}</pre>
            <p>
              These examples demonstrate how PowerShell can be leveraged to automate and secure Windows environments. Its flexibility and power make it an essential tool for modern IT professionals and cybersecurity experts.
            </p>
          </>
        )
      },
      {
        title: "User Accounts and Permissions",
        summary: (
          <>
            <p><strong>Managing User Accounts in Windows</strong></p>
            <p>
              Windows supports both local and domain-based user accounts. Effective user account management is critical to maintaining a secure environment by ensuring that each user has only the access necessary to perform their tasks.
            </p>
            <p><strong>Types of User Accounts</strong></p>
            <ul>
              <li>
                <strong>Standard Users:</strong> Limited privileges to reduce the risk of system modifications.
              </li>
              <li>
                <strong>Administrators:</strong> Elevated privileges for system configuration and management.
              </li>
              <li>
                <strong>Guest Accounts:</strong> Temporary access with minimal permissions.
              </li>
              <li>
                <strong>Service Accounts:</strong> Dedicated accounts for running background services and applications.
              </li>
            </ul>
            <p><strong>Access Control and Permissions</strong></p>
            <p>
              Windows uses Access Control Lists (ACLs) to manage permissions for files, folders, and other system resources. Each ACL defines which users or groups have access and what level of access they are granted (read, write, execute, etc.). Following the principle of least privilege is essential to minimize the attack surface.
            </p>
            <p>
              For example, system directories like <code>C:\Windows</code> are typically locked down to prevent unauthorized modifications, while user directories under <code>C:\Users</code> are managed with individualized permissions.
            </p>
            <p><strong>Active Directory and Group Policy</strong></p>
            <p>
              In enterprise environments, Active Directory (AD) is the cornerstone of user account management. AD allows for centralized control of user accounts, groups, and policies. Group Policy can enforce password complexity, account lockout policies, and other security settings across the organization.
            </p>
            <p>
              Scripts and administrative tools can be used to automate routine tasks such as onboarding new employees or disabling inactive accounts. This ensures that user privileges remain aligned with job roles and security policies.
            </p>
            <p><strong>Best Practices for User Security</strong></p>
            <ul>
              <li>
                <strong>Regular Auditing:</strong> Monitor and review user account activity and permissions.
              </li>
              <li>
                <strong>Strong Authentication:</strong> Implement strong passwords, multi-factor authentication, and account lockout policies.
              </li>
              <li>
                <strong>Role-Based Access Control:</strong> Assign permissions based on job responsibilities to reduce the risk of over-privileged accounts.
              </li>
              <li>
                <strong>User Education:</strong> Train users to recognize social engineering attacks and maintain secure password practices.
              </li>
            </ul>
            <p>
              A well-managed user account system is a critical component of a secure IT environment. Proper configuration, monitoring, and regular audits help ensure that only authorized users can access sensitive data and system resources.
            </p>
          </>
        )
      },
      {
        title: "Security Features in Windows",
        summary: (
          <>
            <p><strong>Overview of Windows Security Features</strong></p>
            <p>
              Windows comes equipped with a suite of built-in security features designed to protect against malware, unauthorized access, and other cyber threats. These features form the backbone of Windows security and are essential for maintaining the integrity and confidentiality of system data.
            </p>
            <p><strong>Antivirus and Anti-Malware</strong></p>
            <p>
              <strong>Windows Defender</strong> is the integrated antivirus solution that continuously monitors system activity for malicious behavior. It is regularly updated to detect and neutralize the latest threats, and its cloud-delivered protection further enhances its responsiveness.
            </p>
            <p><strong>Firewall and Network Protection</strong></p>
            <p>
              The Windows Firewall helps control incoming and outgoing network traffic. By setting rules and policies, administrators can block unauthorized access and reduce the risk of external attacks. Advanced configurations allow integration with Group Policy for enterprise-wide enforcement.
            </p>
            <p><strong>Data Encryption and Protection</strong></p>
            <p>
              <strong>BitLocker</strong> provides full-disk encryption, ensuring that sensitive data remains protected even if a device is lost or stolen. In addition, the Encrypting File System (EFS) allows for file-level encryption, enabling users to secure specific files and folders.
            </p>
            <p><strong>Authentication and Access Controls</strong></p>
            <p>
              Windows includes multiple layers of authentication and access control mechanisms. Features such as <strong>Windows Hello</strong> offer biometric authentication options, while User Account Control (UAC) prompts for elevated permissions when necessary. Advanced security tools like Credential Guard and Device Guard further protect against unauthorized code execution and credential theft.
            </p>
            <p><strong>System Integrity and Updates</strong></p>
            <p>
              Secure Boot ensures that only trusted software is loaded during the startup process. Coupled with regular updates from Windows Update, these features work together to close vulnerabilities and improve overall system resilience.
            </p>
            <p><strong>Monitoring and Logging</strong></p>
            <p>
              Tools such as the Event Viewer and Audit Policies help administrators monitor system activities, track security events, and conduct forensic investigations when needed. Regular log reviews can be instrumental in detecting unusual activity and preventing potential security breaches.
            </p>
            <p>
              <strong>Best Practices for Leveraging Windows Security:</strong>
            </p>
            <ul>
              <li>
                <strong>Enable and configure built-in security tools:</strong> Ensure that Windows Defender, BitLocker, and the Firewall are active and properly configured.
              </li>
              <li>
                <strong>Regularly update systems:</strong> Apply patches and updates promptly to protect against known vulnerabilities.
              </li>
              <li>
                <strong>Conduct security audits:</strong> Regularly review logs, monitor user activity, and audit permissions to identify and mitigate potential risks.
              </li>
              <li>
                <strong>User Awareness Training:</strong> Educate users on security best practices, phishing awareness, and safe computing habits.
              </li>
            </ul>
            <p>
              By integrating these robust security features, Windows provides a multi-layered defense strategy that is essential for protecting sensitive data and maintaining system integrity in an ever-evolving threat landscape.
            </p>
          </>
        )
      }
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
      {
        title: "Introduction to Linux",
        summary: (
          <>
            <p><strong>What is Linux?</strong></p>
            <p>
              Linux is an open-source, Unix-like operating system built around the Linux kernel. Known for its stability, flexibility, and security, Linux is widely used in servers, desktops, embedded systems, and cloud infrastructures. Unlike proprietary operating systems, Linux is developed and maintained by a community of contributors around the globe.
            </p>
            <p>
              One of the hallmarks of Linux is its modularity. Users can choose from a wide variety of distributions (or distros), each tailored to different needs. Some distros are optimized for security and enterprise use (e.g., Red Hat Enterprise Linux, CentOS), while others focus on ease-of-use for home users (e.g., Ubuntu, Linux Mint).
            </p>
            <p>
              <strong>Key Advantages:</strong> Open-source nature, customizable interface, robust security, and extensive community support. With thousands of software packages available through repositories, Linux offers a versatile ecosystem for developers and system administrators alike.
            </p>
            <p>
              <strong>Examples:</strong> Running a web server using Apache or Nginx on Linux; developing software using open-source tools such as GCC and Vim; using package managers like <code>apt</code> (Debian/Ubuntu) or <code>yum</code>/<code>dnf</code> (CentOS/Fedora) to install applications.
            </p>
            <p>
              Overall, Linux is not just an operating system—it's a platform for innovation, a tool for education, and the backbone of modern internet infrastructure.
            </p>
          </>
        )
      },
      {
        title: "History and Evolution of Linux",
        summary: (
          <>
            <p><strong>The Beginnings</strong></p>
            <p>
              The roots of Linux lie in the early days of Unix. In 1969, AT&T’s Bell Labs developed Unix, a multitasking, multiuser system that influenced many later operating systems.
            </p>
            <p>
              In the early 1980s, Richard Stallman launched the GNU Project to create a free Unix-like operating system. While GNU provided many essential tools, it lacked a kernel.
            </p>
            <p>
              In 1991, Linus Torvalds, a Finnish computer science student, released the first version of the Linux kernel. Combined with GNU utilities, this led to the first fully functional GNU/Linux system.
            </p>
            <p><strong>Milestones in Linux Evolution</strong></p>
            <ul>
              <li>
                <strong>1991:</strong> Linus Torvalds releases Linux 0.01; initial public distribution.
              </li>
              <li>
                <strong>1992:</strong> Linux becomes free software under the GNU General Public License (GPL), paving the way for community contributions.
              </li>
              <li>
                <strong>Late 1990s:</strong> Linux gains popularity in server environments with distributions like Red Hat and Debian emerging.
              </li>
              <li>
                <strong>2000s:</strong> Linux enters the enterprise space and becomes the foundation of many web servers and data centers.
              </li>
              <li>
                <strong>Today:</strong> Linux powers a vast range of devices—from smartphones (via Android) to supercomputers and cloud platforms.
              </li>
            </ul>
            <p>
              <strong>Real-World Impact:</strong> Linux has revolutionized the way we build and manage IT systems. It has democratized access to technology, fostered innovation in the software industry, and remains a critical component in cybersecurity and server management.
            </p>
            <p>
              With ongoing development and a vibrant open-source community, Linux continues to evolve and adapt to new technologies, ensuring its relevance in the modern computing landscape.
            </p>
          </>
        )
      },
      {
        title: "Linux Directory Structure",
        summary: (
          <>
            <p><strong>The Filesystem Hierarchy Standard (FHS)</strong></p>
            <p>
              Linux organizes its files and directories following the Filesystem Hierarchy Standard (FHS), which defines a standard directory layout. This ensures consistency across distributions and makes it easier for administrators and users to navigate the system.
            </p>
            <p>
              At the top is the root directory, denoted by <code>/</code>. From here, the filesystem branches into several standard directories:
            </p>
            <ul>
              <li>
                <strong>/bin</strong>: Essential binary executables required during booting and for basic system functionality.
              </li>
              <li>
                <strong>/sbin</strong>: System binaries for administrative tasks.
              </li>
              <li>
                <strong>/etc</strong>: Configuration files for system and application settings.
              </li>
              <li>
                <strong>/home</strong>: User home directories where personal files and settings are stored.
              </li>
              <li>
                <strong>/var</strong>: Variable data like logs, databases, and spool files.
              </li>
              <li>
                <strong>/usr</strong>: Secondary hierarchy for user utilities and applications.
              </li>
              <li>
                <strong>/tmp</strong>: Temporary files that may be cleared upon system reboot.
              </li>
              <li>
                <strong>/dev</strong>: Device files representing hardware components.
              </li>
              <li>
                <strong>/proc</strong>: Virtual filesystem providing process and kernel information.
              </li>
            </ul>
            <p>
              <strong>Examples:</strong> Running <code>ls /</code> in a terminal displays the root directories. Viewing <code>cat /etc/os-release</code> reveals details about the Linux distribution.
            </p>
            <p>
              Understanding the Linux directory structure is essential for system troubleshooting, administration, and security audits. It allows administrators to quickly locate configuration files, log files, and system binaries.
            </p>
          </>
        )
      },
      {
        title: "Understanding Permission Levels",
        summary: (
          <>
            <p><strong>File and Directory Permissions</strong></p>
            <p>
              Linux employs a robust permission model to control access to files and directories. Every file has associated permissions that define who can read, write, or execute it. These permissions are represented for the file owner, the group, and others.
            </p>
            <p>
              <strong>Example of Permission Display:</strong> Running <code>ls -l file.txt</code> might output:
            </p>
            <pre>{`-rw-r--r-- 1 alice staff 1234 Mar 01 10:30 file.txt`}</pre>
            <p>
              Here, <code>rw-</code> (owner), <code>r--</code> (group), and <code>r--</code> (others) indicate the permission sets.
            </p>
            <p><strong>Changing Permissions</strong></p>
            <p>
              The <code>chmod</code> command adjusts permissions. For example:
            </p>
            <pre>{`chmod 755 script.sh`}</pre>
            <p>
              This command sets the permissions to <code>rwxr-xr-x</code>, allowing the owner to read, write, and execute, while the group and others can only read and execute.
            </p>
            <p>
              Additionally, the <code>chown</code> command changes file ownership:
            </p>
            <pre>{`chown bob:developers file.txt`}</pre>
            <p>
              These commands are vital for enforcing the principle of least privilege, reducing the risk of unauthorized modifications.
            </p>
            <p>
              <strong>Advanced Permission Concepts:</strong> Beyond basic permissions, Linux supports Access Control Lists (ACLs) for more granular control. ACLs allow administrators to specify permissions for individual users or groups beyond the traditional user/group/other model.
            </p>
            <p>
              Properly understanding and managing permissions is essential for system security and operational integrity.
            </p>
          </>
        )
      },
      {
        title: "Linux Command Line",
        summary: (
          <>
            <p><strong>Why the Command Line?</strong></p>
            <p>
              The Linux command line is a powerful interface that allows users to execute commands, manage files, and control system operations efficiently. It is favored by system administrators and cybersecurity professionals for its speed, flexibility, and automation capabilities.
            </p>
            <p><strong>Basic Commands and Navigation</strong></p>
            <p>
              Here are some essential commands with examples:
            </p>
            <ul>
              <li>
                <strong>pwd</strong>: Prints the current working directory.
                <br /><code>pwd</code>
              </li>
              <li>
                <strong>ls</strong>: Lists directory contents.
                <br /><code>ls -l /home</code>
              </li>
              <li>
                <strong>cd</strong>: Changes the current directory.
                <br /><code>cd /var/log</code>
              </li>
              <li>
                <strong>touch</strong>: Creates an empty file.
                <br /><code>touch newfile.txt</code>
              </li>
              <li>
                <strong>rm</strong>: Removes files.
                <br /><code>rm oldfile.txt</code>
              </li>
            </ul>
            <p>
              <strong>Advanced Techniques:</strong> Linux supports piping and redirection:
            </p>
            <ul>
              <li>
                <strong>Pipes:</strong> Use the pipe (<code>|</code>) to send the output of one command to another.
                <br /><code>ls -l | grep '^d'</code> – Lists only directories.
              </li>
              <li>
                <strong>Redirection:</strong> Redirect output to a file with <code>&gt;</code>.
                <br /><code>df -h &gt; disk_usage.txt</code> – Saves disk usage information to a file.
              </li>
              <li>
                <strong>Chaining Commands:</strong> Execute multiple commands using <code>&amp;&amp;</code>.
                <br /><code>cd /tmp && ls</code> – Changes directory and lists its contents.
              </li>
            </ul>
            <p>
              Mastery of the Linux command line enables rapid troubleshooting, automation, and efficient system management.
            </p>
          </>
        )
      },
      {
        title: "Introduction to Shell Scripting",
        summary: (
          <>
            <p><strong>What is Shell Scripting?</strong></p>
            <p>
              Shell scripting is the process of writing a series of commands in a file to automate tasks on Linux. These scripts are executed by a shell—commonly Bash—which interprets the commands.
            </p>
            <p>
              <strong>Benefits:</strong> Automating repetitive tasks, scheduling maintenance, and simplifying complex procedures. Shell scripts can combine multiple commands, use variables, and include logic such as loops and conditionals.
            </p>
            <p>
              <strong>Example: A Simple Hello World Script</strong>
            </p>
            <pre>{`#!/bin/bash
  # This script prints Hello, World!
  echo "Hello, World!"`}</pre>
            <p>
              Save this code in a file (e.g., <code>hello.sh</code>), then make it executable with <code>chmod +x hello.sh</code> and run it using <code>./hello.sh</code>.
            </p>
            <p>
              Shell scripting is an essential skill for Linux administrators and cybersecurity experts alike, as it allows for rapid prototyping and automation of complex workflows.
            </p>
          </>
        )
      },
      {
        title: "Writing and Executing Simple Scripts",
        summary: (
          <>
            <p><strong>Getting Started with Script Writing</strong></p>
            <p>
              Writing scripts involves creating a plain text file with a series of Linux commands and saving it with a <code>.sh</code> extension. The first line, called the shebang (<code>#!/bin/bash</code>), tells the system which interpreter to use.
            </p>
            <p>
              <strong>Example Script: Greeting the User</strong>
            </p>
            <pre>{`#!/bin/bash
  echo "Enter your name:"
  read username
  echo "Welcome, $username!"`}</pre>
            <p>
              To run the script, first change its permissions:
            </p>
            <pre>{`chmod +x greet.sh`}</pre>
            <p>
              Then execute it:
            </p>
            <pre>{`./greet.sh`}</pre>
            <p>
              <strong>Script Execution Best Practices:</strong> Always include comments to explain code sections. Test scripts in a safe environment before deployment.
            </p>
            <p>
              As you gain confidence, you can begin to incorporate more complex constructs such as loops and conditionals to create robust automation tasks.
            </p>
          </>
        )
      },
      {
        title: "Variables, Loops, and Conditionals in Bash",
        summary: (
          <>
            <p><strong>Using Variables in Bash</strong></p>
            <p>
              Variables in Bash allow you to store data for later use. They are declared without a type:
            </p>
            <pre>{`#!/bin/bash
  # Assign a value to a variable
  greeting="Hello"
  name="Alice"
  echo "$greeting, $name!"`}</pre>
            <p><strong>Conditional Statements</strong></p>
            <p>
              Conditionals let you execute code based on conditions. The basic syntax uses <code>if</code>, <code>then</code>, and <code>fi</code>:
            </p>
            <pre>{`#!/bin/bash
  x=10
  if [ $x -gt 5 ]; then
    echo "x is greater than 5"
  else
    echo "x is not greater than 5"
  fi`}</pre>
            <p><strong>Loops in Bash</strong></p>
            <p>
              Loops allow repetitive execution of commands:
            </p>
            <ul>
              <li>
                <strong>For Loop:</strong>
                <pre>{`#!/bin/bash
  for i in {1..5}; do
    echo "Iteration $i"
  done`}</pre>
              </li>
              <li>
                <strong>While Loop:</strong>
                <pre>{`#!/bin/bash
  count=1
  while [ $count -le 5 ]; do
    echo "Count: $count"
    ((count++))
  done`}</pre>
              </li>
            </ul>
            <p>
              These scripting fundamentals form the basis for more advanced automation and are critical for creating dynamic, responsive scripts.
            </p>
          </>
        )
      },
      {
        title: "Automating Tasks with Scripts",
        summary: (
          <>
            <p><strong>Automation Overview</strong></p>
            <p>
              Automation in Linux is often achieved through shell scripts scheduled with cron jobs. This allows system administrators to run maintenance tasks, backups, or monitoring scripts automatically.
            </p>
            <p>
              <strong>Creating a Cron Job:</strong> Edit your cron table by executing <code>crontab -e</code>. For example, to run a backup script every day at 2 AM, add:
            </p>
            <pre>{`0 2 * * * /home/user/backup.sh`}</pre>
            <p>
              <strong>Example: Automated Backup Script</strong>
            </p>
            <pre>{`#!/bin/bash
  # backup.sh - A simple backup script
  src="/home/user/data"
  dest="/mnt/backup/data_$(date +%F)"
  mkdir -p "$dest"
  cp -r "$src" "$dest"
  echo "Backup completed on $(date)" >> /home/user/backup.log`}</pre>
            <p>
              This script creates a dated backup of a data directory and logs the operation.
            </p>
            <p>
              <strong>Real-World Uses:</strong> Automate system updates, log rotations, database backups, and security scans. The flexibility of Bash scripting combined with cron scheduling makes it a powerful tool for streamlining administrative tasks.
            </p>
          </>
        )
      },
      {
        title: "User Accounts and Permissions",
        summary: (
          <>
            <p><strong>Managing Users and Groups</strong></p>
            <p>
              In Linux, user account management is crucial for system security. Users are assigned to groups to control access to resources.
            </p>
            <p>
              <strong>Common Commands:</strong>
            </p>
            <ul>
              <li>
                <strong>useradd</strong>: Creates a new user.
                <br /><code>sudo useradd -m newuser</code>
              </li>
              <li>
                <strong>passwd</strong>: Sets or changes a user’s password.
                <br /><code>sudo passwd newuser</code>
              </li>
              <li>
                <strong>groupadd</strong>: Creates a new group.
                <br /><code>sudo groupadd developers</code>
              </li>
              <li>
                <strong>usermod</strong>: Modifies a user’s group memberships.
                <br /><code>sudo usermod -aG developers newuser</code>
              </li>
              <li>
                <strong>groups</strong>: Displays group membership.
                <br /><code>groups newuser</code>
              </li>
            </ul>
            <p>
              <strong>File Ownership and Permissions:</strong> Use <code>chown</code> to change ownership and <code>chmod</code> to adjust permissions. For example:
            </p>
            <pre>{`sudo chown newuser:developers file.txt
  chmod 644 file.txt`}</pre>
            <p>
              These commands ensure that only authorized users can modify critical files and directories.
            </p>
            <p>
              <strong>Best Practices:</strong> Regularly audit user accounts and permissions, disable unused accounts, and use tools like <code>sudo</code> to restrict administrative access. A strong user management policy is a cornerstone of system security.
            </p>
          </>
        )
      }
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
      {
        title: "Introduction to Networking",
        summary: (
          <>
            <p><strong>Overview of Networking</strong></p>
            <p>
              Networking is the backbone of modern communication, connecting computers, devices, and systems to exchange data efficiently and securely. It encompasses everything from local area networks (LANs) in small offices to wide area networks (WANs) that span the globe. Networks enable resource sharing, collaboration, and the functioning of the internet.
            </p>
            <p>
              Modern networks are built upon both hardware and software components. The hardware includes cables, switches, routers, and wireless access points, while software comprises protocols and operating systems that manage data transmission. The synergy between these elements allows for seamless communication, whether you're streaming video, browsing a website, or conducting a secure financial transaction.
            </p>
            <p>
              <strong>Key Concepts in Networking:</strong>
            </p>
            <ul>
              <li><strong>Data Transmission:</strong> The process of sending information from one point to another.</li>
              <li><strong>Protocols:</strong> Sets of rules that dictate how data is formatted and transmitted (e.g., TCP/IP, HTTP, DNS).</li>
              <li><strong>Topology:</strong> The arrangement of network devices (e.g., star, mesh, bus).</li>
              <li><strong>Bandwidth and Latency:</strong> Measures of data transfer capacity and delay, respectively.</li>
            </ul>
            <p>
              <strong>Examples:</strong> Setting up a home network with a wireless router, configuring a LAN in an office environment, or establishing VPN connections for remote work.
            </p>
            <p>
              A strong foundation in networking is essential for anyone in IT or cybersecurity, as many attacks target network vulnerabilities. Understanding how networks function and interconnect helps in both designing robust infrastructures and identifying potential security gaps.
            </p>
          </>
        )
      },
      {
        title: "Network Devices",
        summary: (
          <>
            <p><strong>Introduction to Network Devices</strong></p>
            <p>
              Network devices are the physical components that form and manage the connections between systems in a network. They perform tasks such as data transmission, routing, switching, and security enforcement. Without these devices, the complex interconnectivity we rely on would not be possible.
            </p>
            <p>
              <strong>Common Network Devices and Their Functions:</strong>
            </p>
            <ul>
              <li>
                <strong>Router:</strong> Directs data packets between different networks based on routing tables. Example: A home router that connects a local network to the internet.
              </li>
              <li>
                <strong>Switch:</strong> Connects multiple devices within a network, efficiently directing data only to the intended recipient. Example: An Ethernet switch in an office.
              </li>
              <li>
                <strong>Hub:</strong> A simple device that broadcasts incoming data to all connected ports (largely outdated due to inefficiency).
              </li>
              <li>
                <strong>Firewall:</strong> Monitors and controls incoming and outgoing traffic based on security rules. Example: A hardware firewall protecting a corporate network.
              </li>
              <li>
                <strong>Modem:</strong> Converts signals between digital data and analog signals for communication over telephone lines or cable systems.
              </li>
              <li>
                <strong>Access Point (AP):</strong> Provides wireless connectivity to network devices. Example: A Wi-Fi access point in a public library.
              </li>
            </ul>
            <p>
              <strong>Real-World Application:</strong> In an enterprise environment, routers and switches work in tandem to direct traffic, while firewalls and intrusion detection systems safeguard against external attacks. Understanding these devices is crucial for configuring and maintaining secure networks.
            </p>
            <p>
              Knowing how each device functions and interacts with others allows network and security professionals to optimize performance, troubleshoot issues, and implement effective security measures.
            </p>
          </>
        )
      },
      {
        title: "OSI Model",
        summary: (
          <>
            <p><strong>The OSI Model: A Layered Framework</strong></p>
            <p>
              The Open Systems Interconnection (OSI) model is a conceptual framework used to understand and design networks. It divides the network communication process into seven distinct layers, each responsible for a specific function.
            </p>
            <p>
              <strong>The Seven Layers of the OSI Model:</strong>
            </p>
            <ul>
              <li>
                <strong>Layer 1 – Physical:</strong> Concerns the hardware transmission of raw bit streams over a physical medium. Examples include cables, switches, and network cards.
              </li>
              <li>
                <strong>Layer 2 – Data Link:</strong> Responsible for node-to-node data transfer and error detection. Uses MAC addresses for communication.
              </li>
              <li>
                <strong>Layer 3 – Network:</strong> Handles logical addressing and routing. IP addresses operate at this layer.
              </li>
              <li>
                <strong>Layer 4 – Transport:</strong> Ensures reliable data transfer using protocols like TCP and UDP.
              </li>
              <li>
                <strong>Layer 5 – Session:</strong> Manages sessions between applications, establishing, maintaining, and terminating connections.
              </li>
              <li>
                <strong>Layer 6 – Presentation:</strong> Transforms data into a format that can be understood by the application layer, including encryption and compression.
              </li>
              <li>
                <strong>Layer 7 – Application:</strong> Provides network services directly to applications, such as email, file transfer, and web browsing.
              </li>
            </ul>
            <p>
              <strong>Example in Practice:</strong> When you access a website, your browser (Layer 7) sends an HTTP request. The data is encapsulated in a TCP segment (Layer 4), which is then packaged into an IP packet (Layer 3). As the packet travels through the network, each layer adds or strips its header information until the data reaches the destination, where the process is reversed.
            </p>
            <p>
              The OSI model is a fundamental tool for diagnosing network issues, as it allows administrators to pinpoint which layer is experiencing problems—be it a faulty cable (Physical) or an IP addressing error (Network).
            </p>
          </>
        )
      },
      {
        title: "TCP/IP Model",
        summary: (
          <>
            <p><strong>The TCP/IP Model: Practical Networking</strong></p>
            <p>
              The TCP/IP model is the standard framework for modern network communications and underpins the internet. While it shares similarities with the OSI model, it consists of four layers that focus on practical implementation.
            </p>
            <p>
              <strong>Layers of the TCP/IP Model:</strong>
            </p>
            <ul>
              <li>
                <strong>Application Layer:</strong> Encompasses protocols for high-level services such as HTTP, FTP, SMTP, and DNS.
              </li>
              <li>
                <strong>Transport Layer:</strong> Manages end-to-end communication using TCP (for reliable connections) or UDP (for faster, connectionless communication).
              </li>
              <li>
                <strong>Internet Layer:</strong> Handles logical addressing and routing using IP. It determines how data packets travel across networks.
              </li>
              <li>
                <strong>Link Layer:</strong> Combines the functions of the OSI model’s Physical and Data Link layers, dealing with hardware transmission.
              </li>
            </ul>
            <p>
              <strong>Example:</strong> Sending an email involves the application layer (SMTP), transport layer (TCP), internet layer (IP addressing and routing), and link layer (Ethernet or Wi-Fi). Each layer plays a specific role in ensuring that the email is delivered accurately and securely.
            </p>
            <p>
              The TCP/IP model’s simplicity and direct alignment with real-world implementations make it indispensable for network configuration, troubleshooting, and security analysis.
            </p>
          </>
        )
      },
      {
        title: "IP Addressing and Subnetting",
        summary: (
          <>
            <p><strong>Understanding IP Addressing</strong></p>
            <p>
              IP addresses are numerical labels assigned to devices on a network, enabling them to communicate with one another. There are two primary types of IP addresses: IPv4 and IPv6. IPv4 addresses are 32-bit numbers, commonly expressed in dotted-decimal notation (e.g., 192.168.1.1), while IPv6 addresses are 128-bit numbers written in hexadecimal.
            </p>
            <p>
              <strong>IPv4 Example:</strong> <code>192.168.0.1</code> – Suitable for most local networks, but limited to approximately 4.3 billion unique addresses.
            </p>
            <p>
              <strong>IPv6 Example:</strong> <code>2001:0db8:85a3:0000:0000:8a2e:0370:7334</code> – Provides a vastly larger address space and is essential as the internet continues to grow.
            </p>
            <p><strong>Subnetting:</strong></p>
            <p>
              Subnetting divides a large IP network into smaller, more manageable sub-networks (subnets). This improves network performance and security by limiting broadcast domains and segmenting traffic.
            </p>
            <p>
              <strong>Example of Subnetting:</strong> Consider a network <code>192.168.1.0/24</code>. By borrowing bits from the host portion, you can create multiple subnets, such as <code>192.168.1.0/26</code>, each with a smaller range of IP addresses. Tools like <code>ipcalc</code> help calculate subnet boundaries.
            </p>
            <p>
              Proper IP addressing and subnetting are critical for network design, as they ensure efficient use of IP address space and reduce potential network congestion.
            </p>
          </>
        )
      },
      {
        title: "Network Protocols and Services",
        summary: (
          <>
            <p><strong>Understanding Network Protocols</strong></p>
            <p>
              Network protocols are the standardized rules that govern communication between devices on a network. They ensure that data is transmitted in a consistent and reliable manner, regardless of hardware or software differences.
            </p>
            <p>
              <strong>Common Protocols and Their Functions:</strong>
            </p>
            <ul>
              <li>
                <strong>HTTP/HTTPS:</strong> Protocols used for transmitting web pages. HTTPS adds encryption for secure browsing.
              </li>
              <li>
                <strong>FTP/SFTP:</strong> Used for file transfers. SFTP encrypts the data to ensure secure transfers.
              </li>
              <li>
                <strong>DNS:</strong> Translates human-friendly domain names (e.g., www.example.com) into IP addresses.
              </li>
              <li>
                <strong>DHCP:</strong> Dynamically assigns IP addresses to devices on a network, simplifying network management.
              </li>
              <li>
                <strong>SMTP/POP3/IMAP:</strong> Protocols for sending and retrieving email.
              </li>
              <li>
                <strong>SNMP:</strong> Simple Network Management Protocol, used for monitoring network devices.
              </li>
            </ul>
            <p>
              <strong>Real-World Applications:</strong> A web server uses HTTPS to provide secure access to websites, while a DNS server resolves domain names for internet browsing. DHCP servers automatically manage IP address allocation in corporate networks.
            </p>
            <p>
              Understanding these protocols and services is essential for network troubleshooting, performance optimization, and security implementation.
            </p>
          </>
        )
      },
      {
        title: "Network Monitoring and Analysis",
        summary: (
          <>
            <p><strong>The Role of Network Monitoring</strong></p>
            <p>
              Network monitoring involves continuously tracking network performance, traffic patterns, and potential security threats. This practice is vital for maintaining network health, ensuring optimal performance, and detecting malicious activity before it escalates.
            </p>
            <p>
              <strong>Key Tools and Techniques:</strong>
            </p>
            <ul>
              <li>
                <strong>Wireshark:</strong> A graphical packet analyzer that captures and displays network traffic in real time. Example: Using Wireshark to inspect HTTP requests and detect anomalies.
              </li>
              <li>
                <strong>tcpdump:</strong> A command-line packet analyzer for capturing traffic on network interfaces.
                <br /><code>sudo tcpdump -i eth0</code> – Captures live traffic on the <code>eth0</code> interface.
              </li>
              <li>
                <strong>Netstat:</strong> Displays active network connections, routing tables, and interface statistics.
                <br /><code>netstat -an</code> – Lists active TCP/UDP connections.
              </li>
              <li>
                <strong>Nmap:</strong> A network scanner used to discover hosts and services on a network.
                <br /><code>nmap -sS 192.168.1.0/24</code> – Performs a stealth scan on a subnet.
              </li>
            </ul>
            <p>
              <strong>Analysis and Troubleshooting:</strong> By monitoring network traffic, administrators can identify bottlenecks, detect unauthorized access, and troubleshoot connectivity issues. For example, a sudden surge in broadcast traffic might indicate a misconfigured device causing a network storm.
            </p>
            <p>
              Continuous network monitoring is a cornerstone of proactive cybersecurity, allowing for rapid response to potential intrusions and system failures.
            </p>
          </>
        )
      }
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
      {
        title: "Introduction to Cryptography",
        summary: (
          <>
            <p><strong>What is Cryptography?</strong></p>
            <p>
              Cryptography is the art and science of secure communication. It involves transforming information in such a way that only intended recipients can understand it, even if the data is intercepted. From the earliest recorded history—with simple substitution ciphers used by ancient civilizations—to modern-day encryption standards that secure online transactions, cryptography plays a pivotal role in protecting data integrity, confidentiality, and authenticity.
            </p>
            <p>
              At its core, cryptography is about converting readable data, known as plaintext, into an unreadable format, called ciphertext, using algorithms and keys. This process ensures that even if data is exposed, it remains useless without the proper key to decrypt it.
            </p>
            <p>
              Historically, cryptographic methods ranged from simple techniques like the Caesar cipher—a method that shifts letters by a fixed number—to complex algorithms such as the Advanced Encryption Standard (AES) used today. Modern cryptography not only secures communications but also underpins essential technologies like digital signatures, blockchain, and secure online transactions.
            </p>
            <p>
              <strong>Examples:</strong> 
            </p>
            <ul>
              <li>
                <strong>Caesar Cipher:</strong> One of the simplest encryption techniques where each letter in the plaintext is shifted a fixed number of positions down the alphabet. For instance, a shift of 3 turns “HELLO” into “KHOOR.”
              </li>
              <li>
                <strong>Modern Applications:</strong> HTTPS uses TLS (Transport Layer Security) to encrypt communications between your browser and web servers. Digital wallets use cryptographic methods to secure transactions.
              </li>
            </ul>
            <p>
              As cyber threats continue to evolve, understanding cryptography becomes essential for securing digital communications, safeguarding data, and ensuring trust in online interactions.
            </p>
          </>
        )
      },
      {
        title: "Types of Cryptography",
        summary: (
          <>
            <p><strong>Overview of Cryptographic Methods</strong></p>
            <p>
              Cryptography can be broadly classified into several types based on the techniques and key management approaches used. The three main categories are symmetric cryptography, asymmetric cryptography, and cryptographic hash functions.
            </p>
            <p>
              <strong>Symmetric Cryptography:</strong> Uses the same key for both encryption and decryption. It is generally faster and more efficient for encrypting large amounts of data.
            </p>
            <ul>
              <li>
                <strong>AES (Advanced Encryption Standard):</strong> Widely used in government and industry; it supports key sizes of 128, 192, and 256 bits.
              </li>
              <li>
                <strong>DES (Data Encryption Standard):</strong> An older standard with a 56-bit key, now largely replaced due to vulnerabilities.
              </li>
            </ul>
            <p>
              <strong>Asymmetric Cryptography:</strong> Utilizes a pair of keys—a public key and a private key. Data encrypted with one key can only be decrypted with the other, making it ideal for secure key exchange and digital signatures.
            </p>
            <ul>
              <li>
                <strong>RSA:</strong> One of the most common asymmetric algorithms; used for secure data transmission and digital signatures.
              </li>
              <li>
                <strong>ECC (Elliptic Curve Cryptography):</strong> Provides similar security to RSA with smaller key sizes, making it efficient for mobile devices and constrained environments.
              </li>
            </ul>
            <p>
              <strong>Cryptographic Hash Functions:</strong> Generate a fixed-size string (a hash) from input data. Hash functions are designed to be one-way, meaning it is computationally infeasible to reverse the process.
            </p>
            <ul>
              <li>
                <strong>MD5:</strong> Once widely used but now considered insecure due to vulnerabilities.
              </li>
              <li>
                <strong>SHA-256:</strong> Part of the Secure Hash Algorithm family, used in many security applications including SSL/TLS and cryptocurrencies.
              </li>
            </ul>
            <p>
              <strong>Hybrid Cryptosystems:</strong> Combine both symmetric and asymmetric techniques. For example, in a secure web connection, asymmetric encryption is used to exchange a symmetric session key that then encrypts the bulk of the data.
            </p>
            <p>
              Each type of cryptography serves a specific purpose and comes with its own strengths and limitations. Understanding these differences is crucial for selecting the appropriate method for securing various types of data.
            </p>
          </>
        )
      },
      {
        title: "Plaintext to Ciphertext",
        summary: (
          <>
            <p><strong>Encryption Process: Converting Plaintext to Ciphertext</strong></p>
            <p>
              The fundamental process of encryption transforms readable plaintext into unreadable ciphertext. This process involves an encryption algorithm and a secret key. The algorithm defines the mathematical operations applied to the plaintext, while the key controls the transformation.
            </p>
            <p>
              <strong>Steps in the Encryption Process:</strong>
            </p>
            <ol>
              <li>
                <strong>Input Plaintext:</strong> The original readable message or data.
              </li>
              <li>
                <strong>Encryption Algorithm:</strong> The method used to scramble the plaintext. This can be a simple substitution cipher or a complex algorithm like AES.
              </li>
              <li>
                <strong>Key Application:</strong> A key (or keys, in the case of asymmetric cryptography) is applied during the encryption process.
              </li>
              <li>
                <strong>Output Ciphertext:</strong> The resulting encrypted data that is unintelligible without the correct decryption key.
              </li>
            </ol>
            <p>
              <strong>Example: Caesar Cipher</strong>
            </p>
            <p>
              Consider a simple Caesar cipher with a shift of 3:
            </p>
            <pre>{`Plaintext: HELLO
  Shift: 3
  Ciphertext: KHOOR`}</pre>
            <p>
              Although a Caesar cipher is not secure by modern standards, it illustrates the basic concept of shifting plaintext into ciphertext.
            </p>
            <p>
              <strong>Example: AES Encryption</strong>
            </p>
            <p>
              In modern cryptography, AES encrypts data in blocks using keys of 128, 192, or 256 bits. For instance, encrypting a message with AES-256 might involve:
            </p>
            <pre>{`plaintext: "Sensitive Data"
  key: "a_secure_random_256_bit_key"
  ciphertext: [binary data, represented in hex: 3f7a9e...]
  `}</pre>
            <p>
              The ciphertext appears as a random series of bytes and is unreadable without the proper key.
            </p>
            <p>
              Understanding the transformation from plaintext to ciphertext is essential for grasping how encryption protects data confidentiality in transit and at rest.
            </p>
          </>
        )
      },
      {
        title: "What is a hash?",
        summary: (
          <>
            <p><strong>Understanding Cryptographic Hash Functions</strong></p>
            <p>
              A cryptographic hash function takes an input (or 'message') and returns a fixed-size string of bytes. The output, commonly known as the hash value or digest, is unique to each unique input. Hash functions are designed to be one-way, meaning it is computationally infeasible to retrieve the original input from its hash value.
            </p>
            <p>
              <strong>Key Properties of a Good Hash Function:</strong>
            </p>
            <ul>
              <li><strong>Deterministic:</strong> The same input always produces the same hash.</li>
              <li><strong>Pre-image Resistance:</strong> Given a hash value, it should be computationally infeasible to reverse-engineer the original input.</li>
              <li><strong>Collision Resistance:</strong> It should be extremely unlikely that two different inputs produce the same hash.</li>
              <li><strong>Fast Computation:</strong> Hash functions should quickly compute the hash for any given input.</li>
            </ul>
            <p>
              <strong>Examples:</strong>
            </p>
            <ul>
              <li>
                <strong>MD5:</strong> Produces a 128-bit hash value. While historically popular, vulnerabilities have made MD5 unsuitable for security-sensitive applications.
              </li>
              <li>
                <strong>SHA-1:</strong> Produces a 160-bit hash but has known collision weaknesses.
              </li>
              <li>
                <strong>SHA-256:</strong> Part of the SHA-2 family, generating a 256-bit hash, and widely used in modern applications for its security and robustness.
              </li>
            </ul>
            <p>
              <strong>Real-World Applications:</strong> Hash functions are essential in verifying data integrity (e.g., file checksums), securely storing passwords (through salted hashes), and underpinning blockchain technologies.
            </p>
            <p>
              In summary, cryptographic hashes play a critical role in ensuring data integrity and authenticity in many security protocols.
            </p>
          </>
        )
      },
      {
        title: "Decoding/Encoding",
        summary: (
          <>
            <p><strong>Understanding Encoding vs. Encryption</strong></p>
            <p>
              While encoding and encryption both transform data, their purposes differ significantly. Encoding converts data into a different format using publicly available methods so that it can be easily reversed. Its primary goal is data integrity and compatibility, not secrecy.
            </p>
            <p>
              <strong>Common Encoding Schemes:</strong>
            </p>
            <ul>
              <li>
                <strong>Base64 Encoding:</strong> Transforms binary data into ASCII text. For example, the string "Hello" becomes "SGVsbG8=".
              </li>
              <li>
                <strong>URL Encoding:</strong> Converts characters into a format that can be transmitted over the Internet. For instance, a space character is encoded as <code>%20</code>.
              </li>
            </ul>
            <p>
              <strong>Decoding:</strong> The reverse process, where encoded data is transformed back into its original format. In Base64, decoding "SGVsbG8=" returns "Hello".
            </p>
            <p>
              <strong>Encryption vs. Encoding:</strong> Unlike encoding, encryption uses a secret key to transform data, making it unreadable without decryption. Encoding is reversible without a key.
            </p>
            <p>
              <strong>Examples:</strong> 
            </p>
            <ul>
              <li>
                <strong>Base64:</strong> 
                <br /><code>echo "Hello" | base64</code> outputs <code>SGVsbG8=</code>.
                <br /><code>echo "SGVsbG8=" | base64 --decode</code> returns <code>Hello</code>.
              </li>
              <li>
                <strong>URL Encoding:</strong> 
                <br />Using JavaScript’s <code>encodeURIComponent("Hello World!")</code> results in <code>Hello%20World%21</code>.
              </li>
            </ul>
            <p>
              In summary, understanding the differences between encoding and encryption—and knowing when to use each—is fundamental for data transmission, storage, and security in digital communications.
            </p>
          </>
        )
      },
      {
        title: "Cryptographic Attacks",
        summary: (
          <>
            <p><strong>Overview of Cryptographic Attacks</strong></p>
            <p>
              Despite the strength of modern cryptographic algorithms, attackers continually develop methods to undermine security. Cryptographic attacks target weaknesses in encryption algorithms, key management, or implementation errors.
            </p>
            <p>
              <strong>Common Types of Cryptographic Attacks:</strong>
            </p>
            <ul>
              <li>
                <strong>Brute Force Attack:</strong> Attempts every possible key until the correct one is found. While effective against weak keys, modern encryption with long keys makes brute force computationally impractical.
              </li>
              <li>
                <strong>Dictionary Attack:</strong> Uses precomputed tables of likely keys or passwords. Often mitigated by employing strong, complex passwords.
              </li>
              <li>
                <strong>Man-in-the-Middle (MitM) Attack:</strong> Intercepts communications between two parties to capture or alter data. Protocols like TLS are designed to prevent these attacks.
              </li>
              <li>
                <strong>Side-Channel Attack:</strong> Exploits physical implementations of cryptography, such as timing information, power consumption, or electromagnetic leaks.
              </li>
              <li>
                <strong>Chosen Plaintext/Ciphertext Attack:</strong> The attacker obtains ciphertexts for chosen plaintexts (or vice versa) in order to deduce the encryption key or algorithm weaknesses.
              </li>
            </ul>
            <p>
              <strong>Examples and Mitigations:</strong> 
            </p>
            <ul>
              <li>
                <strong>Brute Force Example:</strong> An attacker attempting all key combinations on a 56-bit key (as in old DES) can succeed; modern standards like AES-256 render this approach unfeasible.
              </li>
              <li>
                <strong>Side-Channel Example:</strong> Analyzing the power consumption of a cryptographic device to deduce the key. Countermeasures include implementing constant-time algorithms and shielding.
              </li>
            </ul>
            <p>
              Effective cryptography involves not only designing robust algorithms but also ensuring secure implementation and key management practices. Regular audits, updated protocols, and awareness of emerging attack techniques are essential for maintaining a secure cryptographic environment.
            </p>
            <p>
              In summary, by understanding common cryptographic attacks and their mitigations, security professionals can better safeguard sensitive information and design systems that resist evolving threats.
            </p>
          </>
        )
      }
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
      {
        title: "What is the Web?",
        summary: (
          <>
            <p><strong>Understanding the World Wide Web</strong></p>
            <p>
              The Web, or World Wide Web (WWW), is a vast collection of interconnected documents and resources accessed via the Internet. It is built on open standards and protocols that enable seamless communication between different systems and devices. Rather than being the Internet itself, the Web is a service running on top of it—allowing users to access websites, multimedia content, and interactive web applications through their browsers.
            </p>
            <p>
              At its foundation, the Web employs a client–server model. Web browsers (clients) request resources from web servers, which host content and applications. Over the years, the Web has evolved from static HTML pages to dynamic, interactive applications that power everything from social media to online banking.
            </p>
            <p>
              <strong>Examples and Applications:</strong>
            </p>
            <ul>
              <li><strong>Static Websites:</strong> Basic sites built with HTML and CSS that display fixed content.</li>
              <li><strong>Dynamic Web Applications:</strong> Platforms such as e-commerce sites or social networks that use server-side scripting (like PHP, Node.js, or Python) to generate content dynamically.</li>
              <li><strong>APIs and Web Services:</strong> RESTful services that allow various applications to communicate over HTTP and exchange data in formats like JSON or XML.</li>
            </ul>
            <p>
              The Web has revolutionized how we access information, communicate, and conduct business. Its continuous evolution drives innovation in multimedia, interactive design, and internet technologies.
            </p>
          </>
        )
      },
      {
        title: "HTTP/HTTPS Protocol",
        summary: (
          <>
            <p><strong>Overview of HTTP and HTTPS</strong></p>
            <p>
              HTTP (Hypertext Transfer Protocol) is the foundation for data communication on the Web. It works using a request–response model, where a client sends a request and the server returns the corresponding response—often in the form of HTML pages, images, or other resources.
            </p>
            <p>
              HTTPS (HTTP Secure) is the secure version of HTTP. By employing Transport Layer Security (TLS) or its predecessor, Secure Sockets Layer (SSL), HTTPS encrypts the data exchanged between the client and server. This encryption is essential for protecting sensitive information from eavesdroppers and man-in-the-middle attacks.
            </p>
            <p>
              <strong>Key Differences:</strong>
            </p>
            <ul>
              <li><strong>Encryption:</strong> HTTPS encrypts the data; HTTP sends it as plaintext.</li>
              <li><strong>Authentication:</strong> HTTPS uses digital certificates to verify server identities, reducing the risk of spoofing and interception.</li>
              <li><strong>Ports:</strong> HTTP typically uses port 80, while HTTPS uses port 443.</li>
            </ul>
            <p>
              <strong>Examples:</strong>
            </p>
            <ul>
              <li>Visiting <code>http://example.com</code> vs. <code>https://example.com</code> in your browser.</li>
              <li>Using command-line tools:
                <br /><code>curl -I http://example.com</code>
                <br />versus
                <br /><code>curl -I https://example.com</code>
              </li>
            </ul>
            <p>
              In today’s security-conscious environment, HTTPS has become the standard, especially for applications that handle user credentials, payment data, or any sensitive information.
            </p>
          </>
        )
      },
      {
        title: "DNS (Domain Name System)",
        summary: (
          <>
            <p><strong>Understanding DNS</strong></p>
            <p>
              The Domain Name System (DNS) functions as the Internet’s phonebook, translating human-friendly domain names (e.g., <code>www.example.com</code>) into machine-friendly IP addresses (e.g., 192.0.2.1). This process is essential for routing traffic to the correct destination.
            </p>
            <p>
              DNS operates hierarchically with root servers at the top, followed by top-level domain (TLD) servers, and then authoritative name servers that store specific domain records.
            </p>
            <p>
              <strong>Examples and Tools:</strong>
            </p>
            <ul>
              <li>Run <code>nslookup www.google.com</code> or <code>dig example.com</code> in your terminal to see the IP address and DNS details of a domain.</li>
              <li>DNS caching on local machines speeds up subsequent requests for the same domain.</li>
            </ul>
            <p>
              Correct DNS configuration is vital for both performance and security, helping prevent issues such as domain hijacking or phishing.
            </p>
          </>
        )
      },
      {
        title: "How a Web Page Loads",
        summary: (
          <>
            <p><strong>The Web Page Loading Process</strong></p>
            <p>
              Loading a web page is a multi-step process that begins when a user enters a URL in a browser and ends when the page is fully rendered on the screen. This process involves DNS resolution, establishing TCP connections, sending HTTP/HTTPS requests, and finally, rendering the page content.
            </p>
            <p>
              <strong>Step-by-Step Process:</strong>
            </p>
            <ol>
              <li><strong>DNS Lookup:</strong> The browser resolves the domain name to an IP address.</li>
              <li><strong>TCP Connection:</strong> A TCP connection is established through a three-way handshake.</li>
              <li><strong>HTTP/HTTPS Request:</strong> The browser sends a request for the web page.</li>
              <li><strong>Server Response:</strong> The server processes the request and returns the HTML content along with other resources.</li>
              <li><strong>Resource Loading:</strong> The browser parses the HTML and loads additional resources such as CSS, JavaScript, images, and fonts.</li>
              <li><strong>Rendering:</strong> The browser constructs the Document Object Model (DOM) and renders the page for display.</li>
            </ol>
            <p>
              <strong>Examples and Tools:</strong>
            </p>
            <ul>
              <li>Open your browser’s Developer Tools (F12) and inspect the Network tab to view each request and response as a page loads.</li>
              <li>Use <code>curl -I https://www.example.com</code> from the command line to view HTTP headers and status codes.</li>
            </ul>
            <p>
              Understanding these steps is crucial for diagnosing performance issues, optimizing load times, and ensuring a smooth user experience.
            </p>
          </>
        )
      },
      {
        title: "Cookies and Sessions",
        summary: (
          <>
            <p><strong>What are Cookies and Sessions?</strong></p>
            <p>
              Cookies are small text files stored by your web browser that remember information about your interactions with a website. They are used to maintain state, store user preferences, and track session data. Sessions, managed on the server side, are often identified by a session ID stored in a cookie.
            </p>
            <p>
              When a user visits a website, the server may set a cookie, which the browser stores and sends back with every subsequent request. This helps the server identify returning users and maintain their session state.
            </p>
            <p>
              <strong>Examples:</strong>
            </p>
            <ul>
              <li>
                <strong>Setting a Cookie in PHP:</strong>
                <br /><code>{'<?php echo htmlspecialchars("setcookie(\'user\', \'Alice\', time() + 3600);"); ?>'}</code>
              </li>
              <li>
                <strong>Reading Cookies in JavaScript:</strong>
                <br /><code>document.cookie</code>
              </li>
              <li>
                <strong>Session Management Example (Node.js with Express):</strong>
                <br /><code>{`app.use(session({ secret: 'your_secret_key', resave: false, saveUninitialized: true }));`}</code>
              </li>
            </ul>
            <p>
              Cookies and sessions are vital for providing personalized user experiences and for managing login states. However, they must be handled securely to prevent attacks like session hijacking.
            </p>
          </>
        )
      },
      {
        title: "Security in Web Communication",
        summary: (
          <>
            <p><strong>Securing Data in Transit</strong></p>
            <p>
              Securing web communication is critical to protect data from interception and tampering. HTTPS is the main protocol used to secure data transmissions by encrypting the connection between the client and server.
            </p>
            <p>
              <strong>How HTTPS Secures Communication:</strong>
            </p>
            <ul>
              <li><strong>Certificate Exchange:</strong> The server presents a digital certificate to verify its identity.</li>
              <li><strong>Key Exchange:</strong> A secure symmetric key is negotiated for the session.</li>
              <li><strong>Encrypted Transmission:</strong> All data exchanged during the session is encrypted using this key.</li>
            </ul>
            <p>
              <strong>Examples and Testing:</strong>
            </p>
            <ul>
              <li>Click the padlock icon in your browser’s address bar to view certificate details.</li>
              <li>Run <code>curl -I https://www.example.com</code> to verify HTTPS response headers.</li>
              <li>Implement HSTS (HTTP Strict Transport Security) to ensure browsers use HTTPS for future requests.</li>
            </ul>
            <p>
              These measures work together to ensure that sensitive information, such as login credentials or financial data, is transmitted securely across the internet.
            </p>
          </>
        )
      },
      {
        title: "What is Web Application Security?",
        summary: (
          <>
            <p><strong>Defining Web Application Security</strong></p>
            <p>
              Web application security focuses on protecting websites, web applications, and APIs from cyber threats. This field involves implementing secure coding practices, performing vulnerability assessments, and deploying tools that detect and mitigate attacks.
            </p>
            <p>
              Security in web applications is critical for protecting user data, maintaining service availability, and ensuring the integrity of the application. It covers areas such as authentication, authorization, input validation, and secure session management.
            </p>
            <p>
              <strong>Examples of Security Measures:</strong>
            </p>
            <ul>
              <li>Input validation to prevent SQL injection attacks.</li>
              <li>Using Content Security Policy (CSP) headers to mitigate cross-site scripting (XSS).</li>
              <li>Enforcing secure session management to prevent session hijacking.</li>
            </ul>
            <p>
              Web application security is an ongoing process that requires regular updates and continuous monitoring to defend against evolving threats.
            </p>
          </>
        )
      },
      {
        title: "Common Web Application Threats",
        summary: (
          <>
            <p><strong>Overview of Threats</strong></p>
            <p>
              Web applications face a variety of threats that can compromise both data and functionality. Being familiar with these threats is essential for developing effective defenses.
            </p>
            <p>
              <strong>Major Threats Include:</strong>
            </p>
            <ul>
              <li><strong>Cross-Site Scripting (XSS):</strong> Attackers inject malicious scripts into webpages, which then execute in the browser of unsuspecting users.</li>
              <li><strong>SQL Injection:</strong> Malicious SQL queries are inserted into input fields, potentially exposing or modifying database information.</li>
              <li><strong>Cross-Site Request Forgery (CSRF):</strong> Forces an authenticated user’s browser to perform unwanted actions on a trusted site.</li>
              <li><strong>Clickjacking:</strong> Tricks users into clicking on concealed elements, thereby exposing sensitive information or performing unintended actions.</li>
              <li><strong>Remote Code Execution (RCE):</strong> Exploits vulnerabilities that allow attackers to execute arbitrary code on the server.</li>
            </ul>
            <p>
              <strong>Examples:</strong>
            </p>
            <ul>
              <li>An XSS attack could inject a script to steal a user's session cookie.</li>
              <li>SQL injection may be used to dump an entire user database if inputs are not sanitized.</li>
              <li>CSRF can force actions such as unauthorized fund transfers.</li>
            </ul>
            <p>
              Understanding these threats helps security professionals design better defenses and implement robust security measures to safeguard web applications.
            </p>
          </>
        )
      },
      {
        title: "Secure Coding Practices",
        summary: (
          <>
            <p><strong>Developing Secure Web Applications</strong></p>
            <p>
              Secure coding practices are fundamental to defending web applications against common threats. Developers must adopt a proactive approach to security throughout the entire development lifecycle—beginning with proper design and continuing through coding, testing, and deployment.
            </p>
            <p>
              <strong>Key Practices Include:</strong>
            </p>
            <ul>
              <li><strong>Input Validation and Sanitization:</strong> Ensure that all user inputs are validated and sanitized before processing.</li>
              <li><strong>Output Encoding:</strong> Encode data before rendering it to a webpage to prevent XSS attacks.</li>
              <li><strong>Authentication and Authorization:</strong> Implement strong authentication mechanisms and ensure that users have access only to the resources they need.</li>
              <li><strong>Session Management:</strong> Use secure, HTTP-only cookies and implement session timeouts to protect session data.</li>
              <li><strong>Error Handling:</strong> Avoid exposing detailed error messages that could provide attackers with insight into the system.</li>
            </ul>
            <p>
              <strong>Examples:</strong>
            </p>
            <ul>
              <li>In PHP, encode output using <code>htmlspecialchars()</code>:
                <br /><code>{'<?php echo htmlspecialchars($user_input, ENT_QUOTES, "UTF-8"); ?>'}</code>
              </li>
              <li>Use prepared statements in SQL to prevent injection attacks:
                <br /><code>stmt = db.prepare("SELECT * FROM users WHERE username = ?");</code>
              </li>
              <li>Implement strict Content Security Policy (CSP) headers in JavaScript to mitigate XSS risks.</li>
            </ul>
            <p>
              Secure coding is not a one-time effort—it requires continuous code reviews, vulnerability assessments, and adherence to industry best practices to ensure that applications remain secure over time.
            </p>
          </>
        )
      },
      {
        title: "Web Application Security Tools",
        summary: (
          <>
            <p><strong>Introduction to Security Tools</strong></p>
            <p>
              Web application security tools are designed to help developers and security professionals identify vulnerabilities, assess the overall security posture, and remediate weaknesses before they can be exploited. These tools range from automated scanners to full-featured penetration testing suites.
            </p>
            <p>
              <strong>Popular Tools Include:</strong>
            </p>
            <ul>
              <li><strong>OWASP ZAP:</strong> An open-source web application security scanner that can automatically find vulnerabilities in web applications.</li>
              <li><strong>Burp Suite:</strong> A comprehensive platform for testing web application security, including features for intercepting, scanning, and manipulating web traffic.</li>
              <li><strong>Nikto:</strong> A command-line tool that scans web servers for known vulnerabilities and misconfigurations.</li>
              <li><strong>Wapiti:</strong> An open-source tool that conducts “black-box” scans to detect security issues in web applications.</li>
              <li><strong>Acunetix:</strong> A commercial vulnerability scanner that provides detailed assessments and remediation guidance for web applications.</li>
            </ul>
            <p>
              <strong>Usage Examples:</strong>
            </p>
            <ul>
              <li>Run OWASP ZAP in daemon mode with: <code>zap.sh -daemon -port 8080</code></li>
              <li>Configure Burp Suite as a proxy to capture and analyze browser traffic.</li>
              <li>Scan a website with Nikto: <code>nikto -h http://www.example.com</code></li>
            </ul>
            <p>
              Regular use of these tools—ideally integrated into a CI/CD pipeline—ensures that web applications remain secure through continuous testing and prompt remediation of discovered vulnerabilities.
            </p>
          </>
        )
      }
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
      {
        title: "Firewalls and IDS/IPS",
        summary: (
          <>
            <p><strong>Overview of Firewalls and IDS/IPS</strong></p>
            <p>
              Firewalls and Intrusion Detection/Prevention Systems (IDS/IPS) are foundational components in network security. They serve as the first line of defense by filtering traffic, monitoring network activities, and preventing unauthorized access. While firewalls primarily block or allow traffic based on preconfigured rules, IDS/IPS solutions focus on detecting and sometimes preventing anomalous or malicious activities.
            </p>
            <p><strong>Firewalls</strong></p>
            <p>
              Firewalls act as gatekeepers between trusted internal networks and untrusted external networks (such as the Internet). They can be implemented as hardware, software, or a combination of both. The most common types include:
            </p>
            <ul>
              <li>
                <strong>Network Firewalls:</strong> Typically deployed at the perimeter of a network, these devices inspect incoming and outgoing traffic based on IP addresses, port numbers, and protocols. Examples include Cisco ASA, Palo Alto Networks, and Fortinet.
              </li>
              <li>
                <strong>Host-based Firewalls:</strong> Installed directly on an endpoint (such as a server or workstation), these firewalls provide an additional layer of defense by filtering traffic to and from the specific device. Windows Defender Firewall and iptables on Linux are common examples.
              </li>
            </ul>
            <p>
              Firewalls can be configured with granular policies that allow only specific traffic to pass through. For example, an organization might only allow HTTP/HTTPS traffic (ports 80/443) from the Internet while blocking all other ports.
            </p>
            <p><strong>Intrusion Detection and Prevention Systems (IDS/IPS)</strong></p>
            <p>
              IDS and IPS are designed to detect, alert, and even block potential threats. They monitor network traffic for signatures or unusual behaviors that indicate a possible security breach.
            </p>
            <ul>
              <li>
                <strong>Signature-Based Detection:</strong> Compares network traffic against a database of known attack patterns. Tools like Snort and Suricata are well-known for signature-based detection.
              </li>
              <li>
                <strong>Anomaly-Based Detection:</strong> Establishes a baseline of normal behavior and flags deviations from this norm. This method is useful for detecting zero-day attacks.
              </li>
              <li>
                <strong>Prevention Capabilities:</strong> Some systems (IPS) can automatically block malicious traffic once an intrusion is detected, whereas IDS typically only alert administrators.
              </li>
            </ul>
            <p>
              <strong>Real-World Example:</strong> A company might deploy a Cisco ASA firewall at its network perimeter to block unauthorized external traffic while using Snort as an IDS to monitor internal traffic for signs of compromise. Alerts from Snort can then be correlated with firewall logs for deeper analysis.
            </p>
            <p>
              Together, firewalls and IDS/IPS form a multi-layered defense strategy that helps secure networks by preventing attacks at the perimeter and detecting suspicious activities internally.
            </p>
          </>
        )
      },
      {
        title: "Endpoint Detection and Response",
        summary: (
          <>
            <p><strong>Introduction to Endpoint Detection and Response (EDR)</strong></p>
            <p>
              Endpoint Detection and Response (EDR) solutions are designed to continuously monitor endpoints—such as workstations, laptops, and servers—for signs of malicious activity. Unlike traditional antivirus software, EDR tools offer advanced behavioral analysis, real-time threat detection, and automated response capabilities.
            </p>
            <p>
              <strong>Key Capabilities of EDR:</strong>
            </p>
            <ul>
              <li>
                <strong>Continuous Monitoring:</strong> EDR systems monitor endpoints in real time to detect anomalies and suspicious behavior.
              </li>
              <li>
                <strong>Threat Detection:</strong> Uses machine learning and behavioral analytics to identify known and unknown threats.
              </li>
              <li>
                <strong>Automated Response:</strong> Some EDR platforms can automatically isolate compromised endpoints, terminate malicious processes, or roll back harmful changes.
              </li>
              <li>
                <strong>Forensic Analysis:</strong> EDR tools collect and store detailed endpoint data to assist with incident investigations.
              </li>
            </ul>
            <p>
              <strong>Popular EDR Solutions:</strong> Examples include CrowdStrike Falcon, Carbon Black, SentinelOne, and Microsoft Defender ATP. These platforms integrate with Security Information and Event Management (SIEM) systems to provide a centralized view of endpoint security.
            </p>
            <p>
              <strong>Example Scenario:</strong> Imagine a scenario where an employee unknowingly downloads a malicious file. An EDR solution immediately detects unusual behavior (such as unexpected process execution or network connections), alerts the security team, and isolates the endpoint from the network—all while logging critical forensic data for further investigation.
            </p>
            <p>
              EDR systems not only improve the speed and accuracy of threat detection but also reduce the impact of breaches by automating response processes. They are an essential tool for modern cybersecurity strategies.
            </p>
          </>
        )
      },
      {
        title: "Vulnerability Scanners",
        summary: (
          <>
            <p><strong>Understanding Vulnerability Scanners</strong></p>
            <p>
              Vulnerability scanners are automated tools used to identify security weaknesses in systems, networks, and applications. They scan for known vulnerabilities, misconfigurations, and compliance issues, providing detailed reports that can guide remediation efforts.
            </p>
            <p>
              <strong>How Vulnerability Scanners Work:</strong> These tools typically work by probing systems using a database of known vulnerabilities. They check for missing patches, insecure configurations, default passwords, and other common issues.
            </p>
            <p>
              <strong>Common Vulnerability Scanning Tools:</strong>
            </p>
            <ul>
              <li>
                <strong>Nessus:</strong> One of the most widely used commercial vulnerability scanners that offers comprehensive scanning capabilities for networks, operating systems, and applications.
              </li>
              <li>
                <strong>OpenVAS:</strong> An open-source vulnerability scanning solution that provides extensive network scanning and vulnerability assessment.
              </li>
              <li>
                <strong>Qualys:</strong> A cloud-based platform offering vulnerability management, continuous monitoring, and compliance solutions.
              </li>
              <li>
                <strong>Rapid7 Nexpose:</strong> A vulnerability management solution that scans, prioritizes, and helps remediate security risks.
              </li>
            </ul>
            <p>
              <strong>Examples and Practical Use Cases:</strong>
            </p>
            <ul>
              <li>
                Running a network scan with Nessus might reveal outdated software or unpatched vulnerabilities on servers and workstations.
              </li>
              <li>
                OpenVAS can be set up to perform regular scans of an organization’s network, generating detailed reports that highlight vulnerabilities and provide remediation recommendations.
              </li>
              <li>
                Integration with a vulnerability management system allows organizations to schedule scans, track remediation progress, and ensure compliance with industry standards.
              </li>
            </ul>
            <p>
              Vulnerability scanners are an essential part of proactive security management. By regularly scanning systems and networks, organizations can identify weaknesses before attackers exploit them, thereby reducing the overall risk of a security breach.
            </p>
          </>
        )
      }
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
      {
        title: "What is Social Engineering?",
        summary: (
          <>
            <p><strong>Defining Social Engineering</strong></p>
            <p>
              Social engineering is the art of manipulating people into divulging confidential information or performing actions that compromise security. Unlike traditional hacking, which exploits technical vulnerabilities, social engineering targets the human element. It exploits trust, curiosity, fear, or a sense of urgency to trick individuals into giving up passwords, financial data, or access to systems.
            </p>
            <p>
              This form of attack leverages psychological tactics rather than relying solely on technical vulnerabilities. Social engineers often use pretexts or fabricated scenarios to gain the victim’s trust, making it easier to extract sensitive information.
            </p>
            <p>
              <strong>Key Characteristics:</strong>
            </p>
            <ul>
              <li>Exploits human psychology rather than system vulnerabilities.</li>
              <li>Relies on persuasion, deception, and manipulation.</li>
              <li>Often involves impersonation or fabricated scenarios.</li>
            </ul>
            <p>
              <strong>Examples:</strong> 
            </p>
            <ul>
              <li>A phishing email that appears to come from a trusted bank, urging the recipient to verify account details.</li>
              <li>A phone call from someone pretending to be from IT support, asking for a user’s login credentials.</li>
              <li>An in-person impersonation where an attacker tailgates into a secure area by pretending to be a delivery person.</li>
            </ul>
            <p>
              Understanding social engineering is crucial because even the most sophisticated technical defenses can be undermined by a well-crafted manipulation of human behavior.
            </p>
          </>
        )
      },
      {
        title: "Types of Social Engineering Attacks",
        summary: (
          <>
            <p><strong>Common Methods of Social Engineering</strong></p>
            <p>
              Social engineering attacks come in many forms, each designed to exploit different human vulnerabilities. Attackers choose their methods based on the target, the desired outcome, and the context of the attack.
            </p>
            <p>
              <strong>Major Types Include:</strong>
            </p>
            <ul>
              <li>
                <strong>Phishing:</strong> Mass-distributed fraudulent emails or messages designed to trick recipients into clicking on malicious links or providing sensitive information.
                <br /><em>Example:</em> An email that appears to be from a reputable company asking you to update your password via a fake website.
              </li>
              <li>
                <strong>Spear Phishing:</strong> Targeted phishing attacks aimed at specific individuals or organizations. The messages are tailored to the recipient, often referencing personal details.
                <br /><em>Example:</em> An email to a company executive that appears to come from the CEO, requesting a confidential report.
              </li>
              <li>
                <strong>Pretexting:</strong> The attacker creates a fabricated scenario to obtain personal information. This often involves posing as a trusted authority or familiar entity.
                <br /><em>Example:</em> A fraudster posing as a bank official calling to confirm account details.
              </li>
              <li>
                <strong>Baiting:</strong> Entices victims with the promise of something valuable, such as free software or a prize, to lure them into a trap.
                <br /><em>Example:</em> Leaving a USB drive labeled “Confidential” in a public place, knowing someone will pick it up and plug it into their computer.
              </li>
              <li>
                <strong>Tailgating (or Piggybacking):</strong> An attacker physically follows someone into a secure area by exploiting human courtesy.
                <br /><em>Example:</em> An unauthorized person holding the door open for employees entering a building.
              </li>
              <li>
                <strong>Quid Pro Quo:</strong> An attacker offers something in return for information, such as technical support in exchange for login credentials.
                <br /><em>Example:</em> A scammer calling employees, offering free software upgrades, and asking for personal details in return.
              </li>
            </ul>
            <p>
              Each type of attack relies on different techniques and scenarios, but they all exploit basic human traits like trust, fear, and greed. Recognizing these methods is the first step in protecting against them.
            </p>
          </>
        )
      },
      {
        title: "Psychological Principles Behind Social Engineering",
        summary: (
          <>
            <p><strong>The Human Element in Security</strong></p>
            <p>
              Social engineering attacks are successful because they leverage fundamental psychological principles. By understanding these principles, security professionals can better design training programs and countermeasures.
            </p>
            <p>
              <strong>Key Psychological Tactics:</strong>
            </p>
            <ul>
              <li>
                <strong>Authority:</strong> People are more likely to comply with requests from figures of authority.
                <br /><em>Example:</em> An attacker posing as a high-ranking executive demanding immediate action.
              </li>
              <li>
                <strong>Reciprocity:</strong> The social norm of returning favors. An attacker might offer a small gift or favor to lower the victim’s guard.
                <br /><em>Example:</em> A scammer providing seemingly helpful information before asking for personal details.
              </li>
              <li>
                <strong>Scarcity:</strong> People are more inclined to act when they believe a resource is limited.
                <br /><em>Example:</em> A phishing email stating that a limited-time offer will expire soon, pressuring the recipient to act quickly.
              </li>
              <li>
                <strong>Social Proof:</strong> Individuals often look to others for cues on how to behave, especially in uncertain situations.
                <br /><em>Example:</em> An attacker might reference a recent security breach that affected many users, implying that everyone is at risk.
              </li>
              <li>
                <strong>Consistency and Commitment:</strong> Once people commit to something, they are more likely to continue in that direction.
                <br /><em>Example:</em> An attacker may start with a small request and gradually escalate to more sensitive information.
              </li>
              <li>
                <strong>Liking:</strong> People are more likely to be influenced by those they find attractive or similar to themselves.
                <br /><em>Example:</em> A social engineer might build rapport through shared interests or compliments before making a request.
              </li>
              <li>
                <strong>Urgency/Fear:</strong> Creating a sense of urgency or fear can prompt individuals to bypass normal security protocols.
                <br /><em>Example:</em> An email warning of immediate account suspension if actions are not taken.
              </li>
            </ul>
            <p>
              By exploiting these psychological triggers, social engineers can bypass technical controls and manipulate even well-trained individuals. Recognizing these tactics is essential for developing effective security awareness programs.
            </p>
          </>
        )
      },
      {
        title: "Real-World Examples of Social Engineering",
        summary: (
          <>
            <p><strong>Case Studies and Real-World Incidents</strong></p>
            <p>
              Real-world examples of social engineering demonstrate how these attacks can compromise security despite robust technical defenses. These incidents highlight the importance of combining technical controls with effective human training.
            </p>
            <p>
              <strong>Notable Examples:</strong>
            </p>
            <ul>
              <li>
                <strong>The Kevin Mitnick Story:</strong> One of the most famous social engineering cases, where famed hacker Kevin Mitnick used phone calls, impersonation, and pretexting to gain access to confidential systems.
              </li>
              <li>
                <strong>Phishing Campaigns:</strong> Large-scale phishing attacks have targeted millions of users, often disguised as messages from banks, tech companies, or even government agencies. For example, emails urging recipients to reset their passwords on a fake login page.
              </li>
              <li>
                <strong>CEO Fraud (Business Email Compromise):</strong> Attackers impersonate company executives to trick employees into transferring funds or revealing sensitive data. Such attacks have led to multi-million-dollar losses in several high-profile cases.
              </li>
              <li>
                <strong>Physical Social Engineering:</strong> In some instances, attackers have gained physical access to secure facilities by tailgating—following an employee through a secure door by pretending to be a delivery person.
              </li>
              <li>
                <strong>Tech Support Scams:</strong> Scammers call individuals claiming to be from reputable tech companies, convincing victims to grant remote access to their computers or pay for unnecessary support services.
              </li>
            </ul>
            <p>
              These examples illustrate that social engineering is not confined to the digital realm; it also exploits physical and psychological vulnerabilities to breach security.
            </p>
          </>
        )
      },
      {
        title: "Defending Against Social Engineering",
        summary: (
          <>
            <p><strong>Strategies for Prevention and Response</strong></p>
            <p>
              Defending against social engineering requires a multi-layered approach that combines technical controls, employee training, and robust policies. Awareness is the first line of defense.
            </p>
            <p>
              <strong>Key Defensive Measures:</strong>
            </p>
            <ul>
              <li>
                <strong>Security Awareness Training:</strong> Regular training sessions help employees recognize and respond appropriately to social engineering attempts. Simulated phishing campaigns can be used to test and reinforce training.
              </li>
              <li>
                <strong>Verification Procedures:</strong> Encourage employees to verify requests through separate communication channels. For example, a phone call or direct message to a supervisor before sharing sensitive information.
              </li>
              <li>
                <strong>Multi-Factor Authentication (MFA):</strong> Even if an attacker obtains a password through social engineering, MFA provides an additional layer of security.
              </li>
              <li>
                <strong>Clear Security Policies:</strong> Establish policies that outline acceptable behaviors, reporting procedures, and consequences for security breaches. Regularly update these policies as threats evolve.
              </li>
              <li>
                <strong>Incident Response Plans:</strong> Develop and maintain a response plan that includes steps to follow if a social engineering attack is suspected or confirmed.
              </li>
            </ul>
            <p>
              <strong>Examples of Best Practices:</strong>
            </p>
            <ul>
              <li>
                Conducting periodic simulated phishing tests to gauge employee awareness and measure training effectiveness.
              </li>
              <li>
                Implementing strict call-back procedures in organizations where financial transactions are approved via phone.
              </li>
              <li>
                Using technology solutions, such as email filtering and anti-spoofing measures, to reduce the number of phishing attempts reaching employees.
              </li>
            </ul>
            <p>
              By combining these strategies, organizations can build a resilient defense against social engineering attacks. Continuous training, regular testing, and robust verification processes are essential to minimize the risk posed by human factors in security.
            </p>
          </>
        )
      }
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
