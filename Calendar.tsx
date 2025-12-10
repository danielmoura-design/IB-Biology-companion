import React, { useState, useMemo } from 'react';
import { CALENDAR_EVENTS } from '../constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CalendarEvent } from '../types';

const CalendarView: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));
  const goToToday = () => setCurrentDate(new Date());

  // Helper to safely parse YYYY-MM-DD as local date (00:00:00)
  // This avoids timezone shifts that occur when using new Date("YYYY-MM-DD") which assumes UTC.
  const parseLocalDate = (dateStr: string) => {
    const [y, m, d] = dateStr.split('-').map(Number);
    return new Date(y, m - 1, d);
  };
  
  // Helper to format date to YYYY-MM-DD based on local time
  const formatLocalDate = (date: Date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  };

  // Helper: Get all days to display (including padding days for the grid)
  const calendarDays = useMemo(() => {
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    
    // Start from the Sunday before the 1st (or the 1st if it is Sunday)
    const startDate = new Date(firstDayOfMonth);
    startDate.setDate(firstDayOfMonth.getDate() - firstDayOfMonth.getDay());

    // End on the Saturday after the last day (or the last day if it is Saturday)
    const endDate = new Date(lastDayOfMonth);
    if (endDate.getDay() !== 6) {
        endDate.setDate(endDate.getDate() + (6 - endDate.getDay()));
    }

    const days: Date[] = [];
    const loopDate = new Date(startDate);
    while (loopDate <= endDate) {
        days.push(new Date(loopDate));
        loopDate.setDate(loopDate.getDate() + 1);
    }
    return days;
  }, [year, month]);

  // Chunk days into weeks
  const weeks = useMemo(() => {
    const chunks: Date[][] = [];
    for (let i = 0; i < calendarDays.length; i += 7) {
        chunks.push(calendarDays.slice(i, i + 7));
    }
    return chunks;
  }, [calendarDays]);

  // Helper to check collision/intersection with the current week
  const getEventsForWeek = (weekStart: Date, weekEnd: Date) => {
    const weekStartStr = formatLocalDate(weekStart);
    const weekEndStr = formatLocalDate(weekEnd);

    return CALENDAR_EVENTS.filter(e => {
        const start = e.startDate;
        const end = e.endDate || e.startDate;
        
        // Check overlap
        return (start <= weekEndStr) && (end >= weekStartStr);
    }).sort((a, b) => {
        // Sort by start date
        return a.startDate.localeCompare(b.startDate);
    });
  };

  const isSameDate = (d1: Date, d2: Date) => {
      return d1.getFullYear() === d2.getFullYear() &&
             d1.getMonth() === d2.getMonth() &&
             d1.getDate() === d2.getDate();
  };

  return (
    <div className="space-y-6 h-full flex flex-col">
       <div className="bg-white rounded-xl shadow-sm border border-slate-200 flex-grow flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                {monthNames[month]} <span className="text-slate-400 font-normal">{year}</span>
            </h2>
            <div className="flex space-x-2">
                <button onClick={goToToday} className="px-3 py-2 text-sm font-medium text-slate-600 bg-slate-100 rounded hover:bg-slate-200 transition-colors">
                    Today
                </button>
                <div className="w-px h-8 bg-slate-200 mx-2"></div>
                <button onClick={prevMonth} className="p-2 rounded hover:bg-slate-100 border border-slate-200 transition-colors">
                    <ChevronLeft className="w-5 h-5 text-slate-600" />
                </button>
                <button onClick={nextMonth} className="p-2 rounded hover:bg-slate-100 border border-slate-200 transition-colors">
                    <ChevronRight className="w-5 h-5 text-slate-600" />
                </button>
            </div>
        </div>

        {/* Days Header */}
        <div className="grid grid-cols-7 border-b border-slate-200 bg-slate-50">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="py-2 text-center text-sm font-bold text-slate-500 uppercase tracking-wide">
                    {day}
                </div>
            ))}
        </div>

        {/* Calendar Grid */}
        <div className="flex-grow flex flex-col overflow-y-auto">
            {weeks.map((week, wIndex) => {
                const weekStart = week[0];
                const weekEnd = week[6];
                const weekEvents = getEventsForWeek(weekStart, weekEnd);

                return (
                    <div key={wIndex} className="relative min-h-[140px] flex-1 border-b border-slate-200 last:border-b-0">
                        {/* 1. Background Grid (Dates) */}
                        <div className="absolute inset-0 grid grid-cols-7 divide-x divide-slate-100">
                            {week.map((day, dIndex) => {
                                const isCurrentMonth = day.getMonth() === month;
                                const isToday = isSameDate(day, new Date());
                                
                                return (
                                    <div key={dIndex} className={`p-2 relative ${isCurrentMonth ? 'bg-white' : 'bg-slate-50/50'}`}>
                                        <span 
                                            className={`
                                                flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold
                                                ${isToday ? 'bg-primary text-white shadow-md' : isCurrentMonth ? 'text-slate-700' : 'text-slate-400'}
                                            `}
                                        >
                                            {day.getDate()}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>

                        {/* 2. Events Layer (Overlay) */}
                        {/* We use a grid that matches the background columns to easily place items */}
                        <div className="relative z-10 grid grid-cols-7 gap-y-1 pt-12 pb-2 px-1 pointer-events-none">
                            {/* We use grid-auto-flow dense if we wanted to pack tight, but standard stacking is fine */}
                            {weekEvents.map(event => {
                                // Parse event dates using the local date helper to ensure matching grid timezone
                                const eventStart = parseLocalDate(event.startDate);
                                const eventEnd = event.endDate ? parseLocalDate(event.endDate) : parseLocalDate(event.startDate);
                                
                                // Calculate grid column start and span relative to this week
                                // Grid columns are 1-7 (Sun-Sat)
                                
                                // Start Index (0-6)
                                let startIndex = 0;
                                if (eventStart >= weekStart) {
                                    startIndex = eventStart.getDay();
                                }
                                
                                // End Index (0-6)
                                let endIndex = 6;
                                if (eventEnd <= weekEnd) {
                                    endIndex = eventEnd.getDay();
                                }

                                const colStart = startIndex + 1;
                                const colSpan = endIndex - startIndex + 1;

                                // Styles based on type
                                let styles = "bg-blue-100 text-blue-800 border-blue-200"; // default/reminder
                                if (event.type === 'deadline') {
                                    styles = "bg-red-600 text-white border-red-700 shadow-md"; // High visibility for deadline
                                } else if (event.type === 'exam') {
                                    styles = "bg-amber-100 text-amber-900 border-amber-300";
                                }

                                return (
                                    <div
                                        key={`${event.id}-${wIndex}`}
                                        className={`
                                            ${styles} border rounded px-2 py-1 text-xs md:text-sm font-medium truncate pointer-events-auto
                                            hover:opacity-90 transition-opacity cursor-pointer relative
                                        `}
                                        style={{
                                            gridColumnStart: colStart,
                                            gridColumnEnd: `span ${colSpan}`,
                                        }}
                                        title={`${event.title} (${event.startDate}${event.endDate ? ' - ' + event.endDate : ''})`}
                                    >
                                        {event.title}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-wrap gap-6 items-center">
        <h3 className="text-lg font-bold text-slate-800 mr-4">Legend:</h3>
        <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-red-600 rounded border border-red-700 shadow-sm"></div>
            <span className="text-sm font-medium text-slate-700">Deadline (Critical)</span>
        </div>
        <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-amber-100 rounded border border-amber-300"></div>
            <span className="text-sm font-medium text-slate-700">Exam</span>
        </div>
        <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-blue-100 rounded border border-blue-200"></div>
            <span className="text-sm font-medium text-slate-700">Reminder/Step</span>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;