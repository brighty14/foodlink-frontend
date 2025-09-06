import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  // TODO: Replace with real auth state
  const isLoggedIn = Boolean(localStorage.getItem('token'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600">
        FoodLink
      </Link>
      <div className="space-x-4">
        {isLoggedIn ? (
          <>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
              }
            >
              Profile
            </NavLink>
            <button
              onClick={handleLogout}
              className="text-red-600 hover:text-red-800 font-semibold"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
              }
            >
              Register
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;