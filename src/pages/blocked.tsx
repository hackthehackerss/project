import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, Mail, ArrowLeft, Shield, HelpCircle, ExternalLink } from 'lucide-react';
import QRCode from 'qrcode';

function BlockedPage() {
  const [supportQR, setSupportQR] = React.useState<string>('');

  React.useEffect(() => {
    // Generate QR code for support contact
    QRCode.toDataURL('https://hackthehackers.com/support')
      .then(url => setSupportQR(url))
      .catch(err => console.error('Error generating QR code:', err));
  }, []);

  return (
    <div className="min-h-screen bg-background text-white">
      <nav className="bg-primary-dark border-b border-primary-blue/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-primary-blue hover:text-primary-blue/80 flex items-center group">
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="max-w-2xl w-full mx-4">
          {/* Main Alert Card */}
          <div className="bg-primary-dark/30 p-8 rounded-lg border border-red-500/50 mb-6 animate-fadeIn">
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-red-500/20 rounded-full animate-ping"></div>
                <AlertCircle className="w-16 h-16 text-red-500 relative z-10" />
              </div>
            </div>
            
            <h1 className="text-3xl font-bold text-center mb-4">Account Blocked</h1>
            <p className="text-center text-lg mb-6 text-gray-300">
              Your account has been temporarily blocked due to suspicious activity or a violation of our terms of service.
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/20">
                <h2 className="font-semibold mb-2 flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-red-500" />
                  Common Reasons for Account Blocks
                </h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Multiple failed login attempts</li>
                  <li>Suspicious activity detected</li>
                  <li>Violation of terms of service</li>
                  <li>Security concerns requiring verification</li>
                </ul>
              </div>

              <div className="bg-primary-blue/10 p-4 rounded-lg border border-primary-blue/20">
                <h2 className="font-semibold mb-2 flex items-center">
                  <HelpCircle className="w-5 h-5 mr-2 text-primary-blue" />
                  What You Can Do
                </h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Contact our support team for assistance</li>
                  <li>Verify your identity if requested</li>
                  <li>Review our security guidelines</li>
                  <li>Update your security settings once restored</li>
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@hackthehackers.com"
                className="flex items-center justify-center bg-primary-blue text-background px-6 py-3 rounded-lg hover:bg-secondary-blue transition"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Support
              </a>
              <Link
                to="/support"
                className="flex items-center justify-center border border-primary-blue text-primary-blue px-6 py-3 rounded-lg hover:bg-primary-blue/10 transition"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Visit Help Center
              </Link>
            </div>
          </div>

          {/* Support Information */}
          <div className="bg-primary-dark/30 p-6 rounded-lg border border-primary-blue/20">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Need Immediate Assistance?</h3>
                <p className="text-gray-400 mb-4">
                  Our support team is available 24/7 to help you resolve any account issues.
                </p>
                <div className="space-y-2 text-gray-300">
                  <p className="flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-primary-blue" />
                    support@hackthehackers.com
                  </p>
                  <p className="flex items-center">
                    <Shield className="w-4 h-4 mr-2 text-primary-blue" />
                    Security Hotline: +1 (555) 123-4567
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center">
                {supportQR && (
                  <div className="text-center">
                    <img
                      src={supportQR}
                      alt="Support QR Code"
                      className="w-32 h-32 mx-auto mb-2 bg-white p-2 rounded-lg"
                    />
                    <p className="text-sm text-gray-400">Scan to visit support</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlockedPage;