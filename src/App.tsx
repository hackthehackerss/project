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
import EmailAnalysisChallenge from './pages/Challenges/EmailAnalysisChallenge'; 
import BruteforceChallenge from './pages/Challenges/BruteforceChallenge';
import HackedByCaptcha from './pages/Challenges/HackedByCaptcha';
import SqlLab from './pages/labs/sqllab';
import VbaScripting from './pages/red-team/vba-scripting';
import TORProject from './pages/red-team/TORProject';
import OSWPCourse from './pages/red-team/OSWPCourse';
import LABexercise01 from './pages/labs/sql_labs/lab-exercise01';
import LABexercise02 from './pages/labs/sql_labs/lab-exercise02';
import LABexercise03 from './pages/labs/sql_labs/lab-exercise03';
import MainBlog from './Blog/MainBlog';
import BybitBlog from './Blog/Blogs/Bybit';
import FireScam from './Blog/Blogs/firescam';
import Emotet from './pages/Challenges/EDRInvestigationChallenge';

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
          <Route path="/challenges/email-analysis" element={<EmailAnalysisChallenge />} />
          <Route path="/challenges/bruteforcechallenge" element={<BruteforceChallenge />} />
          <Route path="/challenges/HackedByCaptcha" element={<HackedByCaptcha />} />
          <Route path="/labs/sqllab" element={<SqlLab />} /> 
          <Route path="/vba-scripting" element={<VbaScripting />} /> 
          <Route path="/labs/sqllab/lab-exercise01" element={<LABexercise01 />} /> 
          <Route path="/labs/sqllab/lab-exercise02" element={<LABexercise02 />} /> 
          <Route path="/labs/sqllab/lab-exercise03" element={<LABexercise03 />} /> 
          <Route path="/blog" element={<MainBlog />} />
          <Route path="/Blog/Blogs/Bybit" element={<BybitBlog />} />
          <Route path="/OSWPCourse" element={<OSWPCourse />} /> 
          <Route path="/TORProject" element={<TORProject />} />
          <Route path="/Blog/Blogs/firescam" element={<FireScam />} />
          <Route path="/challenges/emotet" element={<Emotet />} />

        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
