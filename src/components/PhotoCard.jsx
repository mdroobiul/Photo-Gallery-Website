export default function PhotoCard({ photo, onSelectPhoto }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
      
      {/* Image with Placeholder fallback */}
      <div className="relative overflow-hidden aspect-square bg-slate-200 dark:bg-slate-700">
        <img
          src={photo.url}
          alt={photo.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-cyan-400 text-xs px-2.5 py-1 rounded-full font-semibold border border-slate-700">
          ID: #{photo.id}
        </div>
        <div className="absolute top-3 right-3 bg-cyan-600/90 text-white text-xs px-2.5 py-1 rounded-full font-medium">
          Album {photo.albumId}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col justify-between flex-grow">
        <h3 className="text-slate-800 dark:text-slate-100 font-semibold text-sm line-clamp-2 capitalize leading-snug mb-4">
          {photo.title}
        </h3>

        <button
          onClick={() => onSelectPhoto(photo)}
          className="w-full bg-slate-100 dark:bg-slate-700 hover:bg-cyan-600 hover:text-white dark:hover:bg-cyan-500 text-slate-700 dark:text-slate-200 text-xs font-semibold py-2 px-4 rounded-xl transition-colors duration-200 text-center"
        >
          View Details
        </button>
      </div>

    </div>
  );
}