const Hero = () => {
  return (
    <section id="home" className="section-padding pt-32 min-h-screen flex items-center">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <img 
            src="/src/assets/logo.png" 
            alt="TriFusion Management GmbH" 
            className="h-32 w-auto mx-auto mb-8"
          />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            TriFusion Management GmbH
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Professional Hotel Management Services
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert hotel management and related business services in Grevenbroich, Germany. 
            We deliver excellence in hospitality management solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
