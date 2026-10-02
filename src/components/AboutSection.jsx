import { useState } from 'react';

export default function AboutSection() {
  const [activeSkill, setActiveSkill] = useState(null);

  const skills = [
    { name: 'Digital Marketing', desc: 'Social media, SEO, and strategic online campaigns.', level: '85%' },
    { name: 'Web Development', desc: 'Building clean React & Tailwind UI apps.', level: '60%' },
    { name: 'Photography', desc: 'Capturing landscapes, lighting, and moments.', level: '50%' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 animate-fade-in">
      <div className="bg-slate-800 text-slate-100 rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-700">
        
        {/* Profile Info */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="relative group">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 p-1 shadow-lg">
              <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center text-3xl font-extrabold text-white">
                ROBIUL
              </div>
            </div>
            <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-slate-800 rounded-full"></span>
          </div>

          <div className="flex-1 text-center md:text-left">
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
              Photographer & Visual Creator
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mt-1 mb-2">
              MD ROBIUL ISLAM
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
              Hi, I'm <span className="font-semibold text-white">MD Robiul</span>! I’m Md Robiul Islam, skilled
in marketing and computer
operations. I’m
hardworking, fast learner,
and ready to take new
challenges.

            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 pt-3 border-t border-slate-700">
              <div className="p-2 bg-slate-900/60 rounded-xl text-center">
                <p className="text-lg font-bold text-cyan-400">100+</p>
                <p className="text-[10px] text-slate-400">Photos</p>
              </div>
              <div className="p-2 bg-slate-900/60 rounded-xl text-center">
                <p className="text-lg font-bold text-cyan-400">3+</p>
                <p className="text-[10px] text-slate-400">Albums</p>
              </div>
              <div className="p-2 bg-slate-900/60 rounded-xl text-center">
                <p className="text-lg font-bold text-cyan-400">4K</p>
                <p className="text-[10px] text-slate-400">Quality</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-8 pt-6 border-t border-slate-700">
          <h3 className="text-sm font-bold text-slate-200 mb-3">Skills & Passions</h3>
          <div className="space-y-3">
            {skills.map((skill, index) => (
              <div 
                key={index}
                onClick={() => setActiveSkill(activeSkill === index ? null : index)}
                className="p-3 bg-slate-900/50 rounded-xl border border-slate-700/60 cursor-pointer hover:border-cyan-500/40 transition-all"
              >
                <div className="flex justify-between items-center mb-1 text-xs">
                  <span className="font-semibold text-slate-200">{skill.name}</span>
                  <span className="font-bold text-cyan-400">{skill.level}</span>
                </div>
                <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-cyan-400 h-full rounded-full transition-all duration-500" 
                    style={{ width: skill.level }}
                  ></div>
                </div>
                {activeSkill === index && (
                  <p className="text-[11px] text-slate-400 mt-2">{skill.desc}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-6 flex justify-center md:justify-start">
          <a
            href="mailto:contact@example.com"
            className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-bold text-xs shadow-lg transition-all"
          >
            Get In Touch
          </a>
        </div>

      </div>
    </div>
  );
}