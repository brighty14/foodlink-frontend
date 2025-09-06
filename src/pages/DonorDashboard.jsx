import React from 'react';

function DonorDashboard() {
  return (
    <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow">
      <h2 className="text-3xl font-bold mb-6">Donor Dashboard</h2>
      <p className="text-gray-700 mb-4">
        Welcome to your dashboard! Here you can manage your donations and view impact.
      </p>
      {/* Add your donor-specific content here */}
      <div className="border border-dashed border-gray-300 rounded p-6 text-center text-gray-400">
        No data available yet.
      </div>
    </div>
  );
}

export default DonorDashboard;