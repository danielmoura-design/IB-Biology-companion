import React from 'react';
import { EXERCISES } from '../constants';
import { useLocalStorage } from '../utils/storage';
import { ExerciseLog } from '../types';
import { Check, Download, Calendar } from 'lucide-react';

const Exercises: React.FC = () => {
  // Store status in format: { [exerciseId]: { completed: boolean, dateCompleted: string } }
  const [exerciseLogs, setExerciseLogs] = useLocalStorage<Record<string, ExerciseLog>>('ib-bio-exercises-log', {});

  const toggleComplete = (id: string, date?: string) => {
    setExerciseLogs(prev => {
        const current = prev[id] || { completed: false, dateCompleted: null };
        if (date) {
            // Updating date only
            return { ...prev, [id]: { ...current, dateCompleted: date, completed: true } };
        } else {
            // Toggling completion checkbox
            const newCompleted = !current.completed;
            return { 
                ...prev, 
                [id]: { 
                    completed: newCompleted, 
                    dateCompleted: newCompleted ? (current.dateCompleted || new Date().toISOString().split('T')[0]) : null 
                } 
            };
        }
    });
  };

  return (
    <div className="space-y-6">
       <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">List of Exercises</h2>
        <p className="text-slate-600">
            Track your progress through the exercise lists. Download the markscheme only after attempting the problems.
            Your progress is saved automatically in this browser.
        </p>
      </div>

      <div className="space-y-4">
        {EXERCISES.map((exercise) => {
            const log = exerciseLogs[exercise.id] || { completed: false, dateCompleted: '' };
            
            return (
                <div key={exercise.id} className={`bg-white rounded-xl shadow-sm border p-6 transition-all ${log.completed ? 'border-green-200 bg-green-50/30' : 'border-slate-200'}`}>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        
                        {/* Left Side: Checkbox and Title */}
                        <div className="flex items-start space-x-4 flex-grow">
                            <button 
                                onClick={() => toggleComplete(exercise.id)}
                                className={`mt-1 flex-shrink-0 w-6 h-6 rounded border flex items-center justify-center transition-colors ${log.completed ? 'bg-green-500 border-green-500 text-white' : 'bg-white border-slate-300 text-transparent hover:border-green-500'}`}
                            >
                                <Check className="w-4 h-4" />
                            </button>
                            <div>
                                <h3 className={`font-bold text-lg ${log.completed ? 'text-green-800' : 'text-slate-800'}`}>{exercise.title}</h3>
                                <div className="flex flex-wrap gap-4 mt-2 text-sm">
                                    <a href={exercise.pdfLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                                        <FileTextIcon className="w-4 h-4 mr-1"/> Open Exercise PDF
                                    </a>
                                    <a href={exercise.markschemeLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-500 hover:text-slate-800">
                                        <Download className="w-4 h-4 mr-1"/> Download Markscheme
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Date Picker */}
                        <div className="flex items-center space-x-2 bg-slate-50 p-2 rounded-lg border border-slate-200">
                            <Calendar className="w-4 h-4 text-slate-400" />
                            <span className="text-xs text-slate-500 font-medium uppercase tracking-wide">Completed:</span>
                            <input 
                                type="date" 
                                value={log.dateCompleted || ''}
                                onChange={(e) => toggleComplete(exercise.id, e.target.value)}
                                className="bg-transparent border-none text-sm text-slate-700 focus:ring-0 cursor-pointer"
                            />
                        </div>

                    </div>
                </div>
            );
        })}
      </div>
    </div>
  );
};

// Simple Icon Helper
const FileTextIcon = ({ className }: { className: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
);

export default Exercises;