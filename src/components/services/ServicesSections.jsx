import "./ServicesSections.css";

const servicesData = [
  {
    icon: "🚕",
    tag: "Luxury Taxi",
    text: "Offers Airport, Hotel, Cruise Ship private car Service in luxury Sedans and minor luxury cars",
    href: "https://wa.me/+393446603111",
    payment: "A partire da €60",
    buttonText: "WhatsApp",
    classOfIcon: 'delivery',
  },
  {
    icon: "✈️",
    tag: "Ciampino",
    text: "Fast and safe transfers to Ciampino airport, with professional drivers and luxury vehicles at your disposal.",
    href: "https://wa.me/+393446603111",
    payment: "A partire da €60",
    buttonText: "WhatsApp",
    classOfIcon: 'service',
  },
  {
    icon: "🚤",
    tag: "Civitavecchia",
    text: "Reliable transport solutions for your transfers to the port of Civitavecchia, ensuring comfort and punctuality",
    href: "https://wa.me/+393446603111",
    payment: "A partire da €60",
    buttonText: "WhatsApp",
    classOfIcon: 'chakka',
  },
  {
    icon: "✈️",
    tag: "International Flights",
    text: "Seamless and punctual transfers for your international flight departures and arrivals, ensuring stress-free travel.",
    href: "https://wa.me/+393446603111",
    payment: "A partire da €120",
    buttonText: "WhatsApp",
    classOfIcon: 'global',
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
        {servicesData.map(({ icon, tag, text, href, buttonText, classOfIcon, payment }, idx) => (
          <div key={idx} className="service-card">
            <div className={`service-icon ${classOfIcon}`}>{icon}</div>
            <small className="service-tag">{tag}</small>
            <p className="service-text">{text}</p>
            <p className="service-text font-semibold">{payment}</p>
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
