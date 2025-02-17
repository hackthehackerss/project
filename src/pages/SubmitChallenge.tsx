import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Construction, Rocket } from 'lucide-react';
import Navigation from '../components/Navigation';

function SubmitChallenge() {
  return (
    <div className="min-h-screen bg-background text-white">
      <Navigation darkMode={true} onToggleDarkMode={() => {}} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-primary-dark/30 rounded-lg p-8 border border-primary-blue/20">
          <div className="text-center">
            <Construction className="w-16 h-16 text-primary-blue mx-auto mb-6 animate-bounce" />
            <h1 className="text-3xl font-bold mb-4">Challenge Submission</h1>
            <p className="text-xl text-gray-400 mb-8">Coming Soon</p>
            
            <div className="bg-primary-blue/10 rounded-lg p-6 mb-8">
              <Rocket className="w-8 h-8 text-primary-blue mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-4">Share Your Expertise</h2>
              <p className="text-gray-400 mb-4">
                Soon you'll be able to submit your own cybersecurity challenges and share them with the community.
                Create engaging scenarios, puzzles, and hands-on exercises to help others learn and grow.
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-left mt-8">
                <div className="bg-background/50 p-4 rounded-lg border border-primary-blue/20">
                  <h3 className="font-semibold mb-2">What You'll Be Able to Submit:</h3>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Forensics Challenges</li>
                    <li>• Malware Analysis Scenarios</li>
                    <li>• Network Security Puzzles</li>
                    <li>• Incident Response Simulations</li>
                  </ul>
                </div>
                <div className="bg-background/50 p-4 rounded-lg border border-primary-blue/20">
                  <h3 className="font-semibold mb-2">Benefits:</h3>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Get recognized by the community</li>
                    <li>• Earn special badges</li>
                    <li>• Help others learn</li>
                    <li>• Build your reputation</li>
                  </ul>
                </div>
              </div>
            </div>

            <Link
              to="/challenges"
              className="inline-flex items-center text-primary-blue hover:text-secondary-blue transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Challenges
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubmitChallenge;
