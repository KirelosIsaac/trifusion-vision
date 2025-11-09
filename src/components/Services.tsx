const Services = () => {
  const services = [
    {
      title: "Hotel Operations Management",
      description: "Comprehensive management of day-to-day hotel operations, ensuring smooth functioning and exceptional guest experiences.",
    },
    {
      title: "Business Strategy",
      description: "Strategic planning and consultation services to optimize hotel performance and maximize profitability.",
    },
    {
      title: "Staff Management",
      description: "Professional recruitment, training, and management of hotel staff to maintain high service standards.",
    },
    {
      title: "Financial Management",
      description: "Expert financial oversight, budgeting, and reporting to ensure fiscal responsibility and growth.",
    },
    {
      title: "Quality Assurance",
      description: "Implementation of quality control systems to maintain excellence in all aspects of hotel operations.",
    },
    {
      title: "Guest Relations",
      description: "Development and maintenance of exceptional guest service programs to ensure satisfaction and loyalty.",
    },
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto slide-up">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg border border-border bg-card hover-lift transition-smooth"
              >
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
