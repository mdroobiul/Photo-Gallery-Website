export default function Hero() {
  return (
    <div className="hero bg-base-200 min-h-80 rounded-2xl my-6">
      <div className="hero-content flex-col lg:flex-row-reverse px-6 py-10">
        <img
          src="https://picsum.photos/seed/hero/600/400"
          alt="Hero Banner"
          className="max-w-xs sm:max-w-sm rounded-xl shadow-2xl flex-1 object-cover"
        />
        <div className="flex-1">
          <h1 className="text-4xl sm:text-5xl font-bold">Discover the World’s Best Free Stock Photos.</h1>
          <p className="py-6 text-base-content/80">High-resolution photos shared by a community of talented creators.</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}