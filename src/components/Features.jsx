export const Features = () => {
  const features = [
    {
      name: "Personalized Music Recommendations",
      description:
        "Get song suggestions based on your favorite genre, mood, activity, and time of day.",
      image: "src/assets/personalizedMusic.png",
    },
    {
      name: "Explore by Mood and Activity",
      description:
        "Discover new music that perfectly matches your current mood or activity, whether it's working out or relaxing.",
      image: "src/assets/exploreMoodActivity.png",
    },
    {
      name: "Discover New Music and Artists",
      description:
        "Find specific tracks to listen and discover new music and artists that matches your taste.",
      image: "src/assets/discoverNewArtists.png",
    },
  ];

  return (
    <section className="py-16 bg-gray-100" id="features">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <img
                src={feature.image}
                alt={feature.name}
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h3 className="text-xl font-bold mb-2">{feature.name}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
