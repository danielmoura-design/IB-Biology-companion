import React, { useState } from 'react';
import { SYLLABUS_DATA } from '../constants';
import { ChevronDown, ChevronRight, FileText } from 'lucide-react';

const Syllabus: React.FC = () => {
  // State to track which themes are expanded
  const [expandedThemes, setExpandedThemes] = useState<string[]>(['A']); // Default open first theme

  const toggleTheme = (id: string) => {
    setExpandedThemes(prev => 
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-6">
       <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Full Syllabus Guide</h2>
        <p className="text-slate-600">
            Detailed breakdown of Themes A, B, C, and D. Click on a theme to view specific topics and descriptions.
        </p>
      </div>

      <div className="space-y-4">
        {SYLLABUS_DATA.map((theme) => {
            const isExpanded = expandedThemes.includes(theme.id);
            
            return (
                <div key={theme.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                    <button 
                        onClick={() => toggleTheme(theme.id)}
                        className="w-full flex items-center justify-between p-6 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
                    >
                        <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center font-bold text-lg">
                                {theme.id}
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-800">{theme.title}</h3>
                                <p className="text-sm text-slate-500">{theme.name}</p>
                            </div>
                        </div>
                        {isExpanded ? <ChevronDown className="text-slate-400" /> : <ChevronRight className="text-slate-400" />}
                    </button>
                    
                    {isExpanded && (
                        <div className="p-6 border-t border-slate-100">
                            <p className="text-slate-600 mb-6 italic">{theme.description}</p>
                            
                            <a 
                                href={theme.link}
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-sm font-medium text-primary hover:underline mb-6"
                            >
                                <FileText className="w-4 h-4 mr-1" /> View Official Theme PDF
                            </a>

                            <div className="space-y-4 pl-4 border-l-2 border-slate-200 ml-4">
                                {theme.items.map(item => (
                                    <div key={item.id} className="relative">
                                        <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-slate-300 border-2 border-white"></div>
                                        <h4 className="font-bold text-slate-800">{item.title}</h4>
                                        <div className="mt-1 text-slate-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.content }} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            );
        })}
      </div>
    </div>
  );
};

export default Syllabus;