import React from 'react';
import { CheckCircle } from 'lucide-react';

const PermissionDashboard: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="text-center">
        <div className="mb-4">
          <img
            className="w-24 h-24 rounded-full mx-auto"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
            alt="Profile"
          />
          <CheckCircle className="w-8 h-8 text-green-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        <h2 className="text-2xl font-semibold mb-2">You're all set!</h2>
        <p className="text-gray-600 mb-6">Enjoy your first day at work, Kelly.</p>
        <button className="bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition duration-300">
          Back to home
        </button>
      </div>
    </div>
  );
};

export default PermissionDashboard;