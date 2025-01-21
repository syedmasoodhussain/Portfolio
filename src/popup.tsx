import React, { useState, useEffect } from 'react';
import { Settings, Search, BarChart2, Mail } from 'lucide-react';

function Popup() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [stats, setStats] = useState({
    appliedToday: 0,
    interviews: 0,
    responses: 0
  });

  useEffect(() => {
    // Load stats from chrome.storage
    chrome.storage.local.get(['jobStats'], (result) => {
      if (result.jobStats) {
        setStats(result.jobStats);
      }
    });
  }, []);

  return (
    <div className="w-[400px] min-h-[500px] bg-white">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-xl font-bold">Ultimate Job Application Assistant</h1>
      </header>

      <nav className="bg-gray-100 p-2">
        <div className="flex justify-between">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`flex items-center px-3 py-2 rounded ${
              activeTab === 'dashboard' ? 'bg-blue-600 text-white' : 'text-gray-700'
            }`}
          >
            <BarChart2 className="w-4 h-4 mr-2" />
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab('search')}
            className={`flex items-center px-3 py-2 rounded ${
              activeTab === 'search' ? 'bg-blue-600 text-white' : 'text-gray-700'
            }`}
          >
            <Search className="w-4 h-4 mr-2" />
            Search
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`flex items-center px-3 py-2 rounded ${
              activeTab === 'settings' ? 'bg-blue-600 text-white' : 'text-gray-700'
            }`}
          >
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </button>
        </div>
      </nav>

      <main className="p-4">
        {activeTab === 'dashboard' && (
          <div>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-sm text-gray-600">Applied Today</h3>
                <p className="text-2xl font-bold text-blue-600">{stats.appliedToday}</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-sm text-gray-600">Interviews</h3>
                <p className="text-2xl font-bold text-green-600">{stats.interviews}</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="text-sm text-gray-600">Responses</h3>
                <p className="text-2xl font-bold text-purple-600">{stats.responses}</p>
              </div>
            </div>

            <div className="space-y-4">
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                Start Auto-Apply Session
              </button>
              <button className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
                Optimize Resume
              </button>
              <button className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700">
                Generate Cold Emails
              </button>
            </div>
          </div>
        )}

        {activeTab === 'search' && (
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Job Titles</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Java Full Stack, Backend Developer..."
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="City, State, or Remote"
              />
            </div>
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
              Search Jobs
            </button>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Resume Upload</label>
              <input type="file" className="w-full" accept=".pdf,.doc,.docx" />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Email Template</label>
              <textarea
                className="w-full p-2 border rounded"
                rows={4}
                placeholder="Your cold email template..."
              />
            </div>
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
              Save Settings
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default Popup;