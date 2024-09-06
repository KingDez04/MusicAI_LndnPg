export const Video = () => {
  return (
    <section className="py-16 bg-gray-100" id="video">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Project Overview Video</h2>
        <p className="text-gray-700 text-lg mb-8">
          Meet the team behind MusicAI, discover our project’s story, and learn
          about the amazing features we've developed. Find out what's coming
          next!
        </p>
        <div className="max-w-4xl mx-auto">
          <video
            className="w-full rounded-lg shadow-lg"
            controls
            poster="images/videoThumbnail.png"
          >
            <source src="musicai-overview.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};
