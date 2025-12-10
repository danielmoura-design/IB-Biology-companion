import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Activity, Calendar, FileText, CheckSquare, BookOpen, Layers } from 'lucide-react';
import { PageRoute } from '../types';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const navItems = [
    { name: 'Home', path: PageRoute.HOME, icon: Home },
    { name: 'IB Biology Tracker', path: PageRoute.TRACKER, icon: Activity },
    { name: 'E-Coursework Calendar', path: PageRoute.CALENDAR, icon: Calendar },
    { name: 'Internal Assessment', path: PageRoute.INTERNAL_ASSESSMENT, icon: FileText },
    { name: 'List of Exercises', path: PageRoute.EXERCISES, icon: CheckSquare },
    { name: 'Kognity', path: PageRoute.KOGNITY, icon: BookOpen },
    { name: 'Full Syllabus', path: PageRoute.SYLLABUS, icon: Layers },
  ];

  return (
    <aside
      className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 shadow-lg transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:relative md:translate-x-0
      `}
    >
      <div className="flex items-center justify-between p-6 border-b border-slate-100">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">IB</span>
          </div>
          <span className="text-xl font-bold text-slate-800">Bio Companion</span>
        </div>
        <button onClick={toggleSidebar} className="md:hidden text-slate-500 hover:text-slate-700">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <nav className="p-4 space-y-2 overflow-y-auto h-[calc(100vh-80px)]">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => {
               if (window.innerWidth < 768) toggleSidebar();
            }}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors duration-200 ${
                isActive
                  ? 'bg-primary text-white shadow-md'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-primary'
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;