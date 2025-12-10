import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { PageRoute } from './types';

// Pages
import Home from './pages/Home';
import Tracker from './pages/Tracker';
import CalendarView from './pages/Calendar';
import InternalAssessment from './pages/InternalAssessment';
import Exercises from './pages/Exercises';
import Kognity from './pages/Kognity';
import Syllabus from './pages/Syllabus';

const AppContent: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const getPageTitle = (path: string) => {
    switch(path) {
        case PageRoute.HOME: return 'Home';
        case PageRoute.TRACKER: return 'IB Biology Tracker';
        case PageRoute.CALENDAR: return 'E-Coursework Calendar';
        case PageRoute.INTERNAL_ASSESSMENT: return 'Internal Assessment';
        case PageRoute.EXERCISES: return 'List of Exercises';
        case PageRoute.KOGNITY: return 'Kognity';
        case PageRoute.SYLLABUS: return 'Full Syllabus';
        default: return 'IB Bio Companion';
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex-1 flex flex-col h-full w-full relative">
        <Header 
            toggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
            title={getPageTitle(location.pathname)}
        />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth">
          <div className="max-w-7xl mx-auto h-full">
            <Routes>
                <Route path={PageRoute.HOME} element={<Home />} />
                <Route path={PageRoute.TRACKER} element={<Tracker />} />
                <Route path={PageRoute.CALENDAR} element={<CalendarView />} />
                <Route path={PageRoute.INTERNAL_ASSESSMENT} element={<InternalAssessment />} />
                <Route path={PageRoute.EXERCISES} element={<Exercises />} />
                <Route path={PageRoute.KOGNITY} element={<Kognity />} />
                <Route path={PageRoute.SYLLABUS} element={<Syllabus />} />
                <Route path="*" element={<Navigate to={PageRoute.HOME} replace />} />
            </Routes>
          </div>
        </main>
      </div>

      {/* Mobile overlay for sidebar */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;