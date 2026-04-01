interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <div className="relative h-dvh w-dvw bg-linear-to-br from-gray-950 via-gray-900 to-black flex items-center justify-center overflow-hidden">
      {/* Background blurs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20" />
      </div>

      {/* Main content card */}
      <div className="relative z-10 max-w-2xl mx-4 text-center">
        <div className="backdrop-blur-2xl bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl transition-all duration-500 hover:shadow-purple-500/10 hover:border-purple-500/30">
          {/* Decorative glow */}
          <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-48 h-48 bg-purple-500 rounded-full filter blur-[80px] opacity-30" />

          <h1 className="text-6xl md:text-7xl font-bold bg-linear-to-r from-white via-purple-200 to-white bg-clip-text text-transparent tracking-tight mb-4">
            Live Code
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-md mx-auto mb-8 leading-relaxed">
            Real‑time collaboration platform for developers — code together,
            instantly.
          </p>

          <button className="group relative px-8 py-4 bg-linear-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-white shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900 hover:cursor-pointer">
            <span className="relative flex items-center justify-center gap-2">
              Create Room
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </button>

          <p className="mt-6 text-xs text-gray-400">
            No sign‑up required · Free and open source
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
