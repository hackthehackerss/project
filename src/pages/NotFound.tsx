import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertTriangle, ArrowLeft, Search } from 'lucide-react';
import Navigation from '../components/Navigation';

function NotFound() {
  const [darkMode] = React.useState(true);

  return (
    <div className="min-h-screen bg-background text-white">
      <Navigation darkMode={darkMode} onToggleDarkMode={() => {}} />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-16rem)]">
          <div className="bg-primary-dark/30 rounded-lg p-8 border border-primary-blue/20 max-w-lg w-full text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-blue via-primary-red to-primary-blue"></div>
            
            <div className="relative">
              <AlertTriangle className="w-24 h-24 text-primary-red mx-auto mb-6 animate-bounce" />
              
              <h1 className="text-6xl font-bold mb-4">404</h1>
              <h2 className="text-2xl font-semibold mb-6 text-gray-400">Page Not Found</h2>
              
              <p className="text-gray-400 mb-8">
                The page you're looking for doesn't exist or has been moved.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/"
                  className="flex items-center space-x-2 bg-primary-blue text-background px-6 py-3 rounded-lg hover:bg-secondary-blue transition-all duration-300 w-full sm:w-auto justify-center"
                >
                  <Home className="w-5 h-5" />
                  <span>Go Home</span>
                </Link>

                <Link
                  to="/search"
                  className="flex items-center space-x-2 border border-primary-blue text-primary-blue px-6 py-3 rounded-lg hover:bg-primary-blue/10 transition-all duration-300 w-full sm:w-auto justify-center"
                >
                  <Search className="w-5 h-5" />
                  <span>Search Site</span>
                </Link>
              </div>

              <div className="mt-8 pt-8 border-t border-primary-blue/20">
                <Link
                  to="/"
                  className="inline-flex items-center text-primary-blue hover:text-secondary-blue transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back to Homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;