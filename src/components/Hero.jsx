import { NavBar } from "./NavBar";

export const Hero = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('images/coverImage.png')` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
        <div className="absolute w-full top-0 bg-opacity-60">
          <NavBar />
        </div>
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
          MusicAI
        </h1>
        <p className="text-white text-lg md:text-2xl mb-8">
          Discover personalized music for every moment.
        </p>
        <a
          href="https://musicai-client.vercel.app/"
          target="_blank"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Start Discovering
        </a>
      </div>
    </div>
  );
};
