export const About = () => {
  return (
    <section className="py-16 bg-white" id="about">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          About This Project
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 text-lg mb-6">
            MusicAI was inspired by my passion for discovering new music that
            fits different moments in my life. Whether it's working out,
            relaxing, or boosting productivity, I always wanted a simple way to
            find personalized music. This project represents my journey of
            merging technology with my love for music. The project started as a
            personal passion but soon evolved into something greater. As part of
            my Portfolio Project for Holberton School, I wanted to showcase my
            skills in both front-end and back-end development, working with
            modern technologies like React, Node.js, TailwindCSS and OpenAI.
          </p>
          <p className="text-gray-700 text-lg mb-8">
            I started the project in August 2024 and i'm continually working on
            improving it. You can learn more about the project and contribute by
            checking out the GitHub repository below.
          </p>

          <div className="text-center mb-6">
            <a
              href="https://github.com/KingDez04/MusicAI"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
            >
              View Project on GitHub
            </a>
          </div>

          <h3 className="text-2xl font-bold text-center mb-4" id="contact">My Contacts</h3>
          <div className="text-blue-500 flex justify-evenly">
            <a
              href="https://www.linkedin.com/in/ademola-ademeso"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/KingDez04"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com/King_dez_04"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
