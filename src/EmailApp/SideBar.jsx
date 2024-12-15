import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Addtoken, clearUser } from "../components/Global/Slice"; // Import your Redux actions
import { useDispatch, useSelector } from "react-redux";

const Sidebar = () => {
  const location = useLocation(); // Get the current route to highlight the active link
  const dispatch = useDispatch();

  const navItems = [
    { name: 'Home', path: '/' },
    // Add other navigation items here
  ];

  // Handle logout function
  const handleLogout = () => {
    dispatch(clearUser()); // Clear user data
   // Redirect to login page after logout
  };

  return (
    <div className="w-[1005px] from-primary to-secondary shadow-md pt-[19px] pl-[13px] text-[black] h-[100%] dark:text-[white]">
      <h2 className="text-2xl font-semibold mb-8">Dashboard</h2>
      <ul>
        {navItems.map((item) => (
          <li key={item.name} className="mb-4">
            <Link
              to={item.path}
              className={`block p-2 rounded-md transition duration-300 hover:bg-blue-600 dark:hover:bg-blue-600 ${
                location.pathname === item.path ? 'bg-blue-600' : ''
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="mt-8 block p-2 rounded-md bg-red-600 text-white transition duration-300 hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
