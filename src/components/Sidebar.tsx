import React from 'react';
import { Home, FileText, Users, Settings, HelpCircle, Menu } from 'lucide-react';

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, setOpen }) => {
  const menuItems = [
    { icon: Home, text: 'Home' },
    { icon: FileText, text: 'Documents' },
    { icon: Users, text: 'Team' },
    { icon: Settings, text: 'Settings' },
    { icon: HelpCircle, text: 'Help' },
  ];

  return (
    <>
      <div
        className={`fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden ${
          open ? 'block' : 'hidden'
        }`}
        onClick={() => setOpen(false)}
      ></div>

      <div
        className={`fixed inset-y-0 left-0 z-30 w-20 overflow-y-auto transition duration-300 transform bg-blue-900 lg:translate-x-0 lg:static lg:inset-0 ${
          open ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'
        }`}
      >
        <div className="flex items-center justify-center mt-8">
          <Menu className="w-8 h-8 text-white" />
        </div>

        <nav className="mt-10">
          {menuItems.map((item, index) => (
            <a
              className="flex flex-col items-center py-4 text-white hover:bg-blue-800"
              href="#"
              key={index}
            >
              <item.icon className="w-6 h-6" />
              <span className="mt-2 text-xs">{item.text}</span>
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;