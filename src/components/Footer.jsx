import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-4 text-gray-600 text-sm">
      &copy; {new Date().getFullYear()} FoodLink. All rights reserved.
    </footer>
  );
}

export default Footer;