import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LearningPaths from './pages/LearningPaths';
import CybersecurityFundamentals from './pages/Learning paths/CybersecurityFundamentals';
import SocAnalyst from './pages/Learning paths/SocAnalyst';
import IncidentResponse from './pages/Learning paths/IncidentResponse';
import ThreatHunting from './pages/Learning paths/ThreatHunting';
import MalwareAnalysis from './pages/Learning paths/MalwareAnalysis';
import CyberThreatIntelligence from './pages/Learning paths/CyberThreatIntelligence';
import Challenges from './pages/Challenges';
import PowerShellChallenge from './pages/Challenges/PowerShellChallenge';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import Certificates from './pages/Certificates';
import Admin from './pages/Admin';
import Leaderboard from './pages/Leaderboard';
import TermsOfUse from './pages/TermsOfUse';
import ContactUs from './pages/ContactUs';
import RedTeam from './pages/RedTeam';
import { AuthProvider } from './contexts/AuthContext';
import MinerOnTheRun from './pages/Challenges/MinerOnTheRun';
import MFTChallenge from './pages/Challenges/MasterFileTrap';
import Payment from './pages/Payment';
import Pricing from './pages/Pricing';
import PublicProfile from './pages/Public_Profile';
import Search from './pages/Search';
import NotFound from './pages/NotFound';
import SubmitChallenge from './pages/SubmitChallenge';
import Labs from './pages/Labs';
import SqlLab from './pages/Labs/sql.tsx';
import XssLab from './pages/Labs/xss.tsx';
import EmailAnalysisChallenge from './pages/Challenges/EmailAnalysisChallenge'; 

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learning-paths" element={<LearningPaths />} />
          <Route path="/cybersecurity-fundamentals" element={<CybersecurityFundamentals />} />
          <Route path="/soc-analyst" element={<SocAnalyst />} />
          <Route path="/incident-response" element={<IncidentResponse />} />
          <Route path="/threat-hunting" element={<ThreatHunting />} />
          <Route path="/malware-analysis" element={<MalwareAnalysis />} />
          <Route path="/cyber-threat-intelligence" element={<CyberThreatIntelligence />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/challenges/powershell-logs" element={<PowerShellChallenge />} />
          <Route path="/challenges/miner-on-the-run" element={<MinerOnTheRun />} /> 
          <Route path="/challenges/submit" element={<SubmitChallenge />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:username" element={<PublicProfile />} />
          <Route path="/profile/certificates" element={<Certificates />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/red-team" element={<RedTeam />} />
          <Route path="/challenges/mft-analysis" element={<MFTChallenge />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/labs" element={<Labs />} /> 
          <Route path="/labs/sql.tsx" element={<SQLLabs />} /> 
          <Route path="/labs/xss.tsx" element={<XSSLabs />} /> 
          <Route path="/challenges/email-analysis" element={<EmailAnalysisChallenge />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
