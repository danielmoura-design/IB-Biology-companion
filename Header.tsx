import React, { useMemo } from 'react';
import { Bell, Menu } from 'lucide-react';
import { CALENDAR_EVENTS } from '../constants';

interface HeaderProps {
  toggleSidebar: () => void;
  title: string;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, title }) => {
  // Calculate upcoming deadlines (next 14 days)
  const upcomingDeadlines = useMemo(() => {
    const today = new Date();
    today.setHours(0,0,0,0);
    const twoWeeks = new Date();
    twoWeeks.setDate(today.getDate() + 14);

    return CALENDAR_EVENTS.filter(event => {
      // Parse YYYY-MM-DD as local date to ensure "2025-03-31" is treated as midnight local time
      // irrespective of timezone offsets that might shift it to the previous day if parsed as UTC.
      const [y, m, d] = event.startDate.split('-').map(Number);
      const eventDate = new Date(y, m - 1, d);
      
      return eventDate >= today && eventDate <= twoWeeks && event.type === 'deadline';
    });
  }, []);

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40 px-6 py-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleSidebar}
          className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
        >
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="text-xl md:text-2xl font-bold text-slate-800">{title}</h1>
      </div>

      <div className="relative group">
        <button className="p-2 rounded-full text-slate-500 hover:bg-slate-100 relative transition-colors">
          <Bell className="w-6 h-6" />
          {upcomingDeadlines.length > 0 && (
            <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse">
              {upcomingDeadlines.length}
            </span>
          )}
        </button>
        
        {/* Notification Dropdown */}
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right z-50">
            <div className="p-4 border-b border-slate-100">
                <h3 className="font-semibold text-slate-800">Upcoming Deadlines</h3>
            </div>
            <div className="p-2 max-h-64 overflow-y-auto">
                {upcomingDeadlines.length === 0 ? (
                    <p className="text-sm text-slate-500 text-center py-4">No upcoming deadlines.</p>
                ) : (
                    upcomingDeadlines.map(event => (
                        <div key={event.id} className="p-3 hover:bg-slate-50 rounded-lg">
                            <p className="text-sm font-medium text-slate-800">{event.title}</p>
                            <p className="text-xs text-red-500 mt-1">Start: {event.startDate}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;