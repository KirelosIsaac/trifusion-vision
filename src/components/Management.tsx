const Management = () => {
  const directors = [
    "Masiulla Harari",
    "Sayed Tahir Taghadossi",
    "Mina Isaac Roshdi Youssef",
  ];

  return (
    <section id="management" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto slide-up">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Management Team</h2>
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground text-center mb-8">
              Our company is led by experienced managing directors who bring expertise and 
              dedication to every aspect of our operations.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {directors.map((director, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-lg border border-border bg-card text-center hover-lift transition-smooth"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {director}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Managing Director
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Management;
