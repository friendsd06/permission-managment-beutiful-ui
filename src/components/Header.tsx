import React from 'react';
import { Bell } from 'lucide-react';

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="flex items-center justify-end px-4 py-2 bg-blue-900 text-white">
      <div className="flex items-center">
        <button className="flex mx-3 text-blue-300 hover:text-white focus:outline-none transition duration-300">
          <Bell className="w-5 h-5" />
        </button>

        <div className="relative">
          <button className="relative z-10 block w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none focus:ring-2 focus:ring-blue-500">
            <img
              className="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
              alt="Your avatar"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;