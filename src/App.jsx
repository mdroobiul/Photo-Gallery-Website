import { useState } from 'react';
import Header from './components/Header';
import PhotoGallery from './components/PhotoGallery';
import Footer from './components/Footer';
import AboutSection from './components/AboutSection';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAlbum, setSelectedAlbum] = useState('ALL');
  const [darkMode, setDarkMode] = useState(true); // ডিফল্ট ডার্ক মোড অন রাখার জন্য
  const [activeModalPhoto, setActiveModalPhoto] = useState(null);
  
  // ১. পেজ নেভিগেশনের জন্য স্টেট
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${darkMode ? 'dark bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Header */}
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedAlbum={selectedAlbum}
        setSelectedAlbum={setSelectedAlbum}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Dynamic Content Body */}
      <main className="flex-1 w-full">
        {activeTab === 'home' ? (
          <PhotoGallery
            searchTerm={searchTerm}
            selectedAlbum={selectedAlbum}
            onSelectPhoto={setActiveModalPhoto}
          />
        ) : (
          <AboutSection />
        )}
      </main>

      {/* Detail Modal */}
      {activeModalPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-800 max-w-lg w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700">
            <div className="relative aspect-square">
              <img
                src={activeModalPhoto.url}
                alt={activeModalPhoto.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActiveModalPhoto(null)}
                className="absolute top-3 right-3 bg-slate-900/80 hover:bg-black text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 capitalize mb-4">
                {activeModalPhoto.title}
              </h3>
              <button
                onClick={() => setActiveModalPhoto(null)}
                className="w-full bg-slate-800 hover:bg-slate-900 text-white font-medium py-2.5 rounded-xl text-sm transition-all"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />

    </div>
  );
}