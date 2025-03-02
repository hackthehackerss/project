import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import { useAuth } from '../../contexts/AuthContext';

const FireScam: React.FC = () => {
  // Set dark mode to true by default for consistency
  const [darkMode, setDarkMode] = useState(true);
  const { profile } = useAuth();

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  // Get current URL for sharing purposes
  const currentUrl = window.location.href;

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navigation darkMode={darkMode} onToggleDarkMode={handleDarkModeToggle} />
      <main className="container mx-auto p-4">
        <article className="bg-gray-800 dark:bg-gray-900 text-white rounded-lg p-8">
          <header className="mb-6">
            <div className="flex items-center justify-between">
              <Link to="/blog" className="text-primary-blue hover:underline text-base">
                ← Back to Blog
              </Link>
              <p className="text-sm text-gray-400">Published on 2025-01-20</p>
            </div>
            <h1 className="text-3xl font-bold text-center mt-4">
              Beware of FireScam: A New Android Malware Disguised as Telegram
            </h1>
          </header>
          <figure className="mb-6">
            <div className="flex justify-center">
              <img
                src="/Blog/FireScam.png"
                alt="FireScam Banner"
                className="object-cover rounded w-1/2"
              />
            </div>
            <figcaption className="text-xs text-gray-500 text-center mt-2">
              FireScam Malware Disguised as Telegram
            </figcaption>
          </figure>
          <section className="space-y-4 text-lg leading-relaxed">
            <p>
              In a troubling turn of events for Android users, cybersecurity experts have uncovered a sophisticated malware campaign dubbed FireScam. This malicious software is cleverly disguised as a premium version of the popular messaging app, Telegram. Its goal? To steal sensitive data and maintain remote control over infected devices.
            </p>
            <p>
              The timing of this attack couldn’t be worse. With the FBI recently urging the public to avoid SMS and mobile carrier networks in favor of encrypted communication platforms like WhatsApp or Signal, many users are scrambling to find safer alternatives. Unfortunately, some are turning to Telegram, despite its security concerns. This shift has created the perfect opportunity for FireScam to exploit unsuspecting users seeking secure communication tools.
            </p>
            <p>
              Let’s dive into what FireScam is, how it operates, and—most importantly—how you can protect yourself from falling victim to this dangerous malware.
            </p>
            <h2 className="text-2xl font-bold mt-4">What Is FireScam?</h2>
            <p>
              FireScam is a malicious Android application that masquerades as Telegram. Once installed, it can steal sensitive information, monitor user activity, and even gain access to private data stored on your device. Its deceptive design makes it particularly dangerous, especially for users who download apps from unofficial sources.
            </p>
            <h2 className="text-2xl font-bold mt-4">How FireScam Works</h2>
            <p>
              FireScam uses classic phishing tactics to trick users into downloading the fake Telegram app. Here’s how the attack typically unfolds:
            </p>
            <ul className="list-disc ml-6">
              <li>
                <strong>Phishing Links:</strong> Users receive links to download “Telegram” from unofficial websites, often sent via email, SMS, or other messaging platforms.
              </li>
              <li>
                <strong>Convincing Interface:</strong> The fake app mimics Telegram’s interface so well that it’s nearly indistinguishable from the legitimate version.
              </li>
              <li>
                <strong>Data Theft:</strong> Once installed, FireScam begins collecting sensitive information, including login credentials, text messages, and even payment details.
              </li>
              <li>
                <strong>Remote Control:</strong> The malware connects to a remote server controlled by attackers, allowing them to execute commands, extract data, and further compromise the infected device.
              </li>
            </ul>
            <h2 className="text-2xl font-bold mt-4">Why Is FireScam So Dangerous?</h2>
            <p>
              FireScam’s greatest strength lies in its ability to mimic the real Telegram app. Many users won’t realize they’re using a counterfeit version until it’s too late. Additionally, the malware spreads through phishing links, making it easy for attackers to target a wide range of victims.
            </p>
            <p>
              The timing of this campaign is particularly concerning. With the FBI’s warning about SMS vulnerabilities, many users are seeking secure communication alternatives. Unfortunately, FireScam preys on this uncertainty, luring users into downloading a malicious app instead of a secure one.
            </p>
            <h2 className="text-2xl font-bold mt-4">How to Protect Yourself from FireScam</h2>
            <p>
              To safeguard your device and personal information, follow these essential cybersecurity practices:
            </p>
            <ul className="list-disc ml-6">
              <li>
                <strong>Download Apps Only from Official Sources:</strong> Always download apps like Telegram from the Google Play Store or the app’s official website. Avoid third-party app stores and unverified links.
              </li>
              <li>
                <strong>Check App Permissions:</strong> Be wary of apps that request excessive permissions. If an app asks for access to features or data it doesn’t need, consider it a red flag.
              </li>
              <li>
                <strong>Use Antivirus Software:</strong> Install reputable mobile security software to detect and block malware before it can harm your device.
              </li>
              <li>
                <strong>Enable Google Play Protect:</strong> This built-in feature scans your device for harmful apps and alerts you to suspicious activity.
              </li>
              <li>
                <strong>Stay Informed:</strong> Keep up with the latest cybersecurity threats and educate yourself on how to avoid them. Awareness is your first line of defense.
              </li>
            </ul>
            <h2 className="text-2xl font-bold mt-4">Final Thoughts</h2>
            <p>
              The FireScam malware campaign is a stark reminder of the risks associated with downloading apps from unofficial sources. By disguising itself as Telegram, FireScam exploits users’ trust in popular apps to breach their security.
            </p>
            <p>
              Ironically, in their search for secure communication tools, users are falling victim to FireScam—a malicious imitation of Telegram—while overlooking FBI-recommended platforms like Signal and WhatsApp.
            </p>
            <p>
              To stay safe online, always download apps from trusted sources, verify their authenticity, and stay informed about emerging threats. By taking these precautions, you can protect your device and personal information from cybercriminals.
            </p>
            <p>
              Stay vigilant, stay informed, and stay secure.
            </p>
          </section>
          <section className="mt-8 border-t border-gray-700 pt-4">
            <h2 className="text-xl font-bold mb-2">Share this article</h2>
            <div className="flex space-x-4">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-blue hover:underline"
              >
                Facebook
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent("Check out this article!")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-blue hover:underline"
              >
                X
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-blue hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
};

export default FireScam;
