import logoImg from './logo1.png'; 

export default function Header({ 
  searchTerm, 
  setSearchTerm, 
  selectedAlbum, 
  setSelectedAlbum, 
  darkMode, 
  setDarkMode, 
  activeTab, 
  setActiveTab
}) {
  return (
    <header className="bg-slate-900 text-white sticky top-0 z-40 shadow-lg transition-colors duration-300 dark:bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* লোগো অথবা নামে ক্লিক করলে হোম পেইজে নিয়ে যাবে */}
          <button 
            onClick={() => setActiveTab && setActiveTab('home')}
            className="flex items-center space-x-3 group cursor-pointer text-left focus:outline-none"
            title="Go to Home"
          >
            <img 
              src={logoImg} 
              alt="MD ROBIU..L Logo" 
              className="w-10 h-10 object-contain filter invert brightness-200 transition-transform duration-300 group-hover:scale-110" 
            />
            <div>
              <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-blue-400 transition-all duration-300">
                MD ROBIU..L
              </h1>
              <p className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors">Explore 100+ Stunning Photos</p>
            </div>
          </button>

          {/* Navigation Links (Home & About) */}
          <nav className="flex items-center space-x-2">
            <button
              onClick={() => setActiveTab && setActiveTab('home')}
              className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-lg ${
                activeTab === 'home'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-cyan-500/25 shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => setActiveTab && setActiveTab('about')}
              className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-lg ${
                activeTab === 'about'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-cyan-500/25 shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              About
            </button>
          </nav>

          {/* Search, Filter & Dark Mode Toggle */}
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-64">
              <input
                type="text"
                placeholder="Search photos by title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-800 text-slate-200 placeholder-slate-400 px-4 py-2 pl-9 rounded-lg text-sm border border-slate-700 focus:outline-none focus:border-cyan-500 transition-all"
              />
              <span className="absolute left-3 top-2.5 text-slate-400 text-xs">🔍</span>
            </div>

            {/* Album Filter */}
            <select
              value={selectedAlbum}
              onChange={(e) => setSelectedAlbum(e.target.value)}
              className="bg-slate-800 text-slate-200 px-3 py-2 rounded-lg text-sm border border-slate-700 focus:outline-none focus:border-cyan-500 transition-all cursor-pointer"
            >
              <option value="ALL">All Albums</option>
              <option value="1">Album 1</option>
              <option value="2">Album 2</option>
              <option value="3">Album 3</option>
            </select>

            {/* Dark Mode Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 bg-slate-800 text-slate-200 rounded-lg hover:bg-slate-700 border border-slate-700 transition-all duration-300 transform active:scale-95 hover:rotate-12"
              title="Toggle Theme"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}