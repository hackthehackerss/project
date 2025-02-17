import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, User, Book, Target, X } from 'lucide-react';
import { collection, query, where, getDocs, limit, orderBy } from 'firebase/firestore';
import { db } from '../lib/firebase';

interface SearchResult {
  id: string;
  type: 'user' | 'course' | 'challenge';
  title: string;
  subtitle?: string;
  link: string;
  image?: string;
}

function GlobalSearch() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const searchTimeout = setTimeout(async () => {
      if (searchQuery.length >= 2) {
        setLoading(true);
        try {
          // Search users
          const usersQuery = query(
            collection(db, 'profiles'),
            where('username', '>=', searchQuery.toLowerCase()),
            where('username', '<=', searchQuery.toLowerCase() + '\uf8ff'),
            limit(3)
          );
          const userDocs = await getDocs(usersQuery);
          const userResults = userDocs.docs.map(doc => ({
            id: doc.id,
            type: 'user' as const,
            title: doc.data().username,
            subtitle: doc.data().fullName,
            link: `/profile/${doc.data().username}`,
            image: doc.data().avatarUrl
          }));

          // Combine all results
          setResults([
            ...userResults,
            // Add mock course and challenge results for demonstration
            {
              id: 'course-1',
              type: 'course',
              title: 'Cybersecurity Fundamentals',
              subtitle: 'Learn the basics of cybersecurity',
              link: '/cybersecurity-fundamentals'
            },
            {
              id: 'challenge-1',
              type: 'challenge',
              title: 'PowerShell Analysis',
              subtitle: 'Analyze suspicious PowerShell commands',
              link: '/challenges/powershell-logs'
            }
          ]);
        } catch (error) {
          console.error('Search error:', error);
        } finally {
          setLoading(false);
        }
      } else {
        setResults([]);
      }
    }, 300);

    return () => clearTimeout(searchTimeout);
  }, [searchQuery]);

  const getIcon = (type: string) => {
    switch (type) {
      case 'user':
        return <User className="w-5 h-5" />;
      case 'course':
        return <Book className="w-5 h-5" />;
      case 'challenge':
        return <Target className="w-5 h-5" />;
      default:
        return <Search className="w-5 h-5" />;
    }
  };

  return (
    <div className="relative" ref={searchRef}>
      <div className="relative">
        <input
          type="text"
          placeholder="Search users, courses, challenges..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setShowResults(true);
          }}
          onFocus={() => setShowResults(true)}
          className="w-full px-4 py-2 pl-10 bg-primary-dark/30 border border-primary-blue/20 rounded-lg focus:outline-none focus:border-primary-blue text-white"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        {searchQuery && (
          <button
            onClick={() => {
              setSearchQuery('');
              setResults([]);
              setShowResults(false);
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {showResults && (searchQuery.length >= 2 || results.length > 0) && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-primary-dark/95 border border-primary-blue/20 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          {loading ? (
            <div className="p-4 text-center text-gray-400">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary-blue mx-auto"></div>
            </div>
          ) : results.length > 0 ? (
            <div className="py-2">
              {results.map((result) => (
                <button
                  key={result.id}
                  onClick={() => {
                    navigate(result.link);
                    setShowResults(false);
                    setSearchQuery('');
                  }}
                  className="w-full px-4 py-2 hover:bg-primary-blue/10 flex items-center space-x-3 transition-colors"
                >
                  <div className="text-primary-blue">
                    {getIcon(result.type)}
                  </div>
                  <div className="text-left">
                    <div className="font-medium">{result.title}</div>
                    {result.subtitle && (
                      <div className="text-sm text-gray-400">{result.subtitle}</div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          ) : searchQuery.length >= 2 ? (
            <div className="p-4 text-center text-gray-400">
              No results found for "{searchQuery}"
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default GlobalSearch;