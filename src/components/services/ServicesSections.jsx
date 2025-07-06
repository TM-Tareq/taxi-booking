import "./ServicesSections.css";

const servicesData = [
  {
    icon: "🚕",
    tag: "Luxury Taxi",
    text: "Offers Airport, Hotel, Cruise Ship private car Service in luxury Sedans and minor luxury cars",
    href: "https://wa.me/+393275933303",
    buttonText: "A partire da €60",
    classOfIcon: 'delivery',
  },
  {
    icon: "✈️",
    tag: "Ciampino",
    text: "Fast and safe transfers to Ciampino airport, with professional drivers and luxury vehicles at your disposal.",
    href: "https://wa.me/+393275933303",
    buttonText: "A partire da €60",
    classOfIcon: 'service',
  },
  {
    icon: "🚤",
    tag: "Custom Solutions",
    text: "Tailored solutions to fit your unique business needs.",
    href: "https://wa.me/+393275933303",
    buttonText: "A partire da €60",
    classOfIcon: 'chakka',
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section" id="services">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Services</h2>
      <p className="services-intro">
        We provide a range of high-quality services to meet your needs.
      </p>

      <div className="services-cards">
        {servicesData.map(({ icon, tag, text, href, buttonText, classOfIcon }, idx) => (
          <div key={idx} className="service-card">
            <div className={`service-icon ${classOfIcon}`}>{icon}</div>
            <small className="service-tag">{tag}</small>
            <p className="service-text">{text}</p>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="service-button"
            >
              {buttonText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
