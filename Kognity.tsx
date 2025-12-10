import React from 'react';
import { KOGNITY_URL } from '../constants';
import { ExternalLink, BookOpen } from 'lucide-react';

const Kognity: React.FC = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-8 space-y-8 text-center bg-white rounded-xl shadow-sm border border-slate-200 min-h-[500px]">
        <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center">
            <BookOpen className="w-12 h-12 text-blue-600" />
        </div>
        <div className="max-w-md">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Kognity Digital Textbook</h2>
            <p className="text-slate-600 mb-8">
                Access your interactive textbook, assignments, and study materials directly through Kognity's platform.
            </p>
            <a 
                href={KOGNITY_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white text-lg font-bold rounded-xl hover:bg-teal-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
                Launch Kognity
                <ExternalLink className="w-5 h-5 ml-2" />
            </a>
        </div>
        <p className="text-sm text-slate-400">
            Note: Kognity will open in a new tab.
        </p>
    </div>
  );
};

export default Kognity;