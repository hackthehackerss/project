import React from 'react';

const Labs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Labs</h1>
      <p className="text-lg text-gray-600 text-center mb-8">
        Explore hands-on cybersecurity labs to test and improve your skills.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example Lab 1 */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-2">SOC Investigation</h2>
          <p className="text-gray-500">Analyze real-world logs and detect malicious activity.</p>
          <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
            Start Lab
          </button>
        </div>

        {/* Example Lab 2 */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-2">Incident Response</h2>
          <p className="text-gray-500">Respond to an active security incident in a live environment.</p>
          <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
            Start Lab
          </button>
        </div>

        {/* Example Lab 3 */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-2">Malware Analysis</h2>
          <p className="text-gray-500">Analyze and reverse-engineer a suspicious executable.</p>
          <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
            Start Lab
          </button>
        </div>
      </div>
    </div>
  );
};

export default Labs;
