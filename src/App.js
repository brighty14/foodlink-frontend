import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';

import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import BeneficiaryDashboard from './pages/BeneficiaryDashboard';
import DonorDashboard from './pages/DonorDashboard';
import VolunteerDashboard from './pages/VolunteerDashboard';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />

            <Route
              path="/beneficiary-dashboard"
              element={
                <PrivateRoute>
                  <BeneficiaryDashboard />
                </PrivateRoute>
              }
            />

            <Route
              path="/donor-dashboard"
              element={
                <PrivateRoute>
                  <DonorDashboard />
                </PrivateRoute>
              }
            />

            <Route
              path="/volunteer-dashboard"
              element={
                <PrivateRoute>
                  <VolunteerDashboard />
                </PrivateRoute>
              }
            />

            {/* Catch all unmatched routes */}
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;