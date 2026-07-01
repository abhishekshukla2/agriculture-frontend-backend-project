import "./OurServices.css";

function OurServices() {
  const services = [
    {
      icon: "💊",
      title: "Genuine Medicines",
      description:
        "We provide 100% genuine and high-quality medicines from trusted pharmaceutical brands.",
    },
    {
      icon: "🚚",
      title: "Fast Home Delivery",
      description:
        "Get your medicines delivered safely and quickly to your doorstep.",
    },
    {
      icon: "👨‍⚕️",
      title: "Expert Pharmacist",
      description:
        "Our experienced pharmacists are always available to guide you with the right medicines.",
    },
    {
      icon: "🕒",
      title: "24/7 Customer Support",
      description:
        "Our support team is available 24 hours a day to assist with your healthcare needs.",
    },
    {
      icon: "💳",
      title: "Secure Payment",
      description:
        "Pay safely using secure online payment methods with complete privacy.",
    },
    {
      icon: "❤️",
      title: "Health & Wellness",
      description:
        "We offer a wide range of healthcare products to keep you and your family healthy.",
    },
  ];

  return (
    <section className="services">
      <div className="services-container">
        <h4 className="services-tag">🏥 Our Services</h4>

        <h2>Quality Healthcare Services for Everyone</h2>

        <p className="services-text">
          We are committed to providing reliable healthcare solutions with
          genuine medicines, fast delivery, expert guidance, and exceptional
          customer service.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurServices;