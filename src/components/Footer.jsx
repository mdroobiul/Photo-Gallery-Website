export default function Footer({ setActiveTab }) {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800 transition-colors duration-300 dark:bg-slate-950 mt-auto w-full">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8 text-left">
          
          <div>
            <p className="text-sm font-medium text-slate-300">PhotoGallery Application</p>
            <p className="text-xs text-slate-500 mt-0.5">Powered by JSONPlaceholder & React</p>
          </div>

          <div>
            <p className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">Services</p>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li><button className="hover:text-slate-200">Branding</button></li>
              <li><button className="hover:text-slate-200">Design</button></li>
              <li><button className="hover:text-slate-200">Marketing</button></li>
              <li><button className="hover:text-slate-200"></button></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">Company</p>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <button 
                  onClick={() => setActiveTab && setActiveTab('about')} 
                  className="hover:text-slate-200"
                >
                  About us
                </button>
              </li>
              <li><button className="hover:text-slate-200">Contact</button></li>
              <li><button className="hover:text-slate-200">Jobs</button></li>
              <li><button className="hover:text-slate-200"></button></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">Legal</p>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li><button className="hover:text-slate-200">Terms of use</button></li>
              <li><button className="hover:text-slate-200">Privacy policy</button></li>
              <li><button className="hover:text-slate-200"></button></li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-6 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="text-sm text-slate-400 font-medium">
            Created by{" "}
            <span 
              onClick={() => setActiveTab && setActiveTab('about')}
              className="bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent font-semibold hover:underline cursor-pointer"
            >
              Md Robiul Islam
            </span>
          </div>
          <p>&copy; {new Date().getFullYear()} Roobiul. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}