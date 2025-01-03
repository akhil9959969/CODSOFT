const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-text-primary">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="/lovable-uploads/61597152-b0b7-4454-b3e7-4477abd47667.png"
              alt="Javvaji Akhil Kumar"
              className="rounded-lg shadow-xl max-w-sm mx-auto"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              Hello! I'm Akhil, a second-year B.Tech student at Mallareddy University with a passion for technology and innovation. As a beginner in the field, I'm enthusiastically learning and exploring various aspects of technology and software development.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              I believe in continuous learning and am always excited to take on new challenges that help me grow both personally and professionally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="mailto:javvajiakhil73@gmail.com"
                className="bg-primary text-white px-6 py-2 rounded hover:bg-opacity-90 text-center"
              >
                Email Me
              </a>
              <a 
                href="tel:7416611471"
                className="border border-primary text-primary px-6 py-2 rounded hover:bg-primary hover:text-white transition-colors text-center"
              >
                Call Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;