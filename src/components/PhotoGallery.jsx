import { useState, useEffect } from 'react';
import PhotoCard from './PhotoCard';

export default function PhotoGallery({ searchTerm, selectedAlbum, onSelectPhoto }) {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // API data fetch using native fetch()
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch photo collection.');
        }
        return res.json();
      })
      .then((data) => {
        // Taking first 100 photos only
        setPhotos(data.slice(0, 100));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Filter photos by search & album
  const filteredPhotos = photos.filter((photo) => {
    const matchesSearch = photo.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesAlbum = selectedAlbum === 'ALL' || photo.albumId.toString() === selectedAlbum;
    return matchesSearch && matchesAlbum;
  });

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-24">
        <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-slate-600 dark:text-slate-400 font-medium text-sm">Loading 100 photos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 px-4">
        <div className="text-4xl mb-3">⚠️</div>
        <p className="text-red-500 font-semibold">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-slate-800 text-white rounded-lg text-sm"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
      
      {/* Status / Counter */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold text-slate-800 dark:text-slate-200">
          Photo Gallery <span className="text-slate-400 font-normal text-sm">({filteredPhotos.length} Items)</span>
        </h2>
      </div>

      {/* Empty State */}
      {filteredPhotos.length === 0 ? (
        <div className="text-center py-20 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700">
          <p className="text-slate-500 dark:text-slate-400 text-lg">No photos found matching your criteria.</p>
        </div>
      ) : (
        /* Photo Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} onSelectPhoto={onSelectPhoto} />
          ))}
        </div>
      )}

    </main>
  );
}