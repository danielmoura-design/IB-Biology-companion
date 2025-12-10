import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-gradient-to-r from-primary to-teal-800 text-white rounded-2xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Welcome to IB Biology</h2>
        <p className="text-teal-100 text-lg leading-relaxed">
          Your comprehensive companion for the Biology Guide (2025). This platform is designed to help you track your progress, manage deadlines, and access vital resources for your success in the International Baccalaureate program.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-bold text-slate-800 mb-3">Course Description</h3>
          <p className="text-slate-600 leading-relaxed">
            Biologists have accumulated a huge amount of information about living organisms, and it would be easy to confuse students by teaching large numbers of seemingly unrelated facts. In the IB Biology course, it is hoped that students will acquire a limited body of facts and, at the same time, develop a broad, general understanding of the principles of the subject.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-bold text-slate-800 mb-3">Key Objectives</h3>
          <ul className="space-y-2 text-slate-600">
            <li className="flex items-start">
              <span className="mr-2 text-primary">•</span>
              <span>Demonstrate knowledge and understanding of facts, concepts, and terminology.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-primary">•</span>
              <span>Apply methodologies and techniques.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-primary">•</span>
              <span>Formulate, analyze and evaluate hypotheses, research questions and predictions.</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-amber-50 border-l-4 border-accent p-6 rounded-r-xl">
        <h3 className="text-lg font-bold text-accent mb-2">Important Note</h3>
        <p className="text-slate-700">
            Please regularly check the <strong>E-Coursework Calendar</strong> for upcoming internal assessment deadlines. Notifications will appear in the top right corner of this screen.
        </p>
      </div>
    </div>
  );
};

export default Home;