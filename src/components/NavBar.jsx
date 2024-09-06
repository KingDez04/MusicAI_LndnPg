export const NavBar = () => {
  return (
    <nav className="flex justify-evenly items-baseline">
      <p className="text-white text-4xl md:text-5xl font-bold">MusicAI</p>
      <a
        href="/about"
        className="text-white text-2xl md:text-4xl hover:text-red-400 transition-colors"
      >
        About
      </a>
      <a
        href="/features"
        className="text-white text-2xl md:text-4xl hover:text-red-400 transition-colors"
      >
        Features
      </a>
      <a
        href="https://musicai-client.vercel.app/"
        target="_blank"
        className="text-red-800 bg-white rounded-full px-3 pb-1 text-2xl md:text-4xl hover:bg-red-800 hover:text-white transition-colors"
      >
        Discover
      </a>
    </nav>
  );
};
