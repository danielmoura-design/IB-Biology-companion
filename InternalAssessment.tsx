import React from 'react';
import { IA_RESOURCES } from '../constants';
import { FileText, Folder, Download } from 'lucide-react';

const InternalAssessment: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Internal Assessment Resources</h2>
        <p className="text-slate-600">
            Access guidelines, criteria, and samples to help you structure your Internal Assessment effectively.
            Always refer to the latest APA guidelines for your citations.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {IA_RESOURCES.map((resource, index) => (
            <a 
                key={index}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
            >
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:border-primary transition-all duration-200 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 rounded-lg ${resource.type === 'folder' ? 'bg-amber-50 text-amber-600' : 'bg-blue-50 text-blue-600'}`}>
                            {resource.type === 'folder' ? <Folder className="w-6 h-6" /> : <FileText className="w-6 h-6" />}
                        </div>
                        <Download className="w-5 h-5 text-slate-400 group-hover:text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-primary transition-colors">{resource.title}</h3>
                    <p className="text-slate-600 text-sm flex-grow">{resource.description}</p>
                </div>
            </a>
        ))}
      </div>
    </div>
  );
};

export default InternalAssessment;