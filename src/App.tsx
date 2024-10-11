import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import PermissionDashboard from './components/PermissionDashboard';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-blue-900">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="flex-1 flex overflow-hidden">
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white rounded-tl-3xl">
            <div className="container mx-auto px-6 py-8">
              <PermissionDashboard />
            </div>
          </main>
          <aside className="w-64 bg-gray-100 overflow-y-auto">
            {/* Right sidebar content goes here */}
          </aside>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;