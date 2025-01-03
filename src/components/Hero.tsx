const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-white pt-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-4 animate-fade-in">
          Javvaji Akhil Kumar
        </h1>
        <p className="text-xl md:text-2xl text-text-secondary mb-8 animate-slide-up">
          B.Tech Student at Mallareddy University
        </p>
        <button 
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          className="bg-primary text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105"
        >
          Get in Touch
        </button>
      </div>
    </section>
  );
};

export default Hero;