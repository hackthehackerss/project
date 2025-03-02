import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Award, Download, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { formatDate } from '../utils/formatters';

interface Certificate {
  id: string;
  courseId: string;
  name: string;
  issuedAt: Date;
  expiresAt?: Date;
  image: string;
  earned: boolean;
}

function Certificates() {
  const { profile } = useAuth();
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Updated mock data with an "earned" flag.
    const mockCertificates: Certificate[] = [
      {
        id: '1',
        courseId: 'cybersecurity-fundamentals',
        name: 'Cybersecurity Fundamentals Certificate',
        issuedAt: new Date('2024-01-15'),
        expiresAt: new Date('2025-01-15'),
        image: '/certificates/fundamentals.png',
        earned: true
      },
      {
        id: '2',
        courseId: 'soc-analyst',
        name: 'SOC Analyst Certificate',
        issuedAt: new Date('2024-02-01'),
        image: '/certificates/soc.png',
        earned: false
      },
      {
        id: '3',
        courseId: 'incident-responder',
        name: 'Incident Responder Certificate',
        issuedAt: new Date('2024-03-10'),
        image: '/certificates/ir.png',
        earned: false
      },
      {
        id: '4',
        courseId: 'malware-analysis',
        name: 'Malware Analysis Certificate',
        issuedAt: new Date('2024-04-05'),
        image: '/certificates/malware.png',
        earned: false
      }
    ];

    setCertificates(mockCertificates);
    setLoading(false);
  }, []);

  const handleDownload = (certificateId: string) => {
    // Only available if the certificate is earned
    console.log('Downloading certificate:', certificateId);
  };

  const handleShare = (certificateId: string, platform: 'twitter' | 'linkedin' | 'facebook') => {
    const certificate = certificates.find(c => c.id === certificateId);
    if (!certificate) return;

    const shareText = encodeURIComponent(
      `I just earned my ${certificate.name} from HackTheHackers! 🎓 #cybersecurity #learning`
    );
    
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${shareText}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?text=${shareText}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?quote=${shareText}`
    };

    window.open(shareUrls[platform], '_blank');
  };

  return (
    <div className="min-h-screen bg-background text-white">
      {/* Navigation */}
      <nav className="bg-primary-dark border-b border-primary-blue/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-4">
              <Link to="/profile" className="text-primary-blue hover:text-primary-blue/80 flex items-center group">
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Profile
              </Link>
              <span className="text-xl font-bold">My Certificates</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center space-x-4 mb-6">
          <Award className="w-6 h-6 text-primary-blue" />
          <h1 className="text-2xl font-bold">My Certificates</h1>
        </div>

        {loading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary-blue mx-auto"></div>
          </div>
        ) : certificates.length > 0 ? (
          <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
            {certificates.map((certificate) => (
              <div
                key={certificate.id}
                className="bg-primary-dark/30 rounded-lg p-3 border border-primary-blue/20 hover-card flex flex-col items-center"
              >
                <img 
                  src={certificate.image} 
                  alt={certificate.name} 
                  className={`rounded mb-2 w-64 h-40 ${!certificate.earned ? 'filter grayscale' : ''}`} 
                />
                <h2 className="text-sm font-semibold text-center">{certificate.name}</h2>
                <p className="text-xs text-gray-400 text-center">
                  Issued on {formatDate(certificate.issuedAt)}
                  {certificate.expiresAt && <> · Expires on {formatDate(certificate.expiresAt)}</>}
                </p>
                {!certificate.earned && (
                  <p className="text-xs text-red-500 mt-1">Locked</p>
                )}
                <div className="mt-2 flex items-center space-x-2">
                  {certificate.earned && (
                    <button
                      onClick={() => handleDownload(certificate.id)}
                      className="p-1 text-primary-blue hover:bg-primary-blue/10 rounded-full transition"
                      title="Download Certificate"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  )}
                  <div className="relative group">
                    <button
                      className="p-1 text-primary-blue hover:bg-primary-blue/10 rounded-full transition"
                      title="Share Certificate"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                    <div className="absolute right-0 mt-2 w-40 rounded-lg shadow-lg py-1 bg-primary-dark border border-primary-blue/20 hidden group-hover:block">
                      <button
                        onClick={() => handleShare(certificate.id, 'twitter')}
                        className="w-full text-left px-3 py-1 text-xs text-white hover:bg-primary-blue/10 transition-colors flex items-center"
                      >
                        <Twitter className="w-3 h-3 mr-1" />
                        Twitter
                      </button>
                      <button
                        onClick={() => handleShare(certificate.id, 'linkedin')}
                        className="w-full text-left px-3 py-1 text-xs text-white hover:bg-primary-blue/10 transition-colors flex items-center"
                      >
                        <Linkedin className="w-3 h-3 mr-1" />
                        LinkedIn
                      </button>
                      <button
                        onClick={() => handleShare(certificate.id, 'facebook')}
                        className="w-full text-left px-3 py-1 text-xs text-white hover:bg-primary-blue/10 transition-colors flex items-center"
                      >
                        <Facebook className="w-3 h-3 mr-1" />
                        Facebook
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-400 mb-4">You haven't earned any certificates yet.</p>
            <Link
              to="/learning-paths"
              className="text-primary-blue hover:text-secondary-blue transition"
            >
              Start a course to earn your first certificate
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Certificates;
