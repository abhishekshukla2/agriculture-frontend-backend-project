import "./ChooseUs.css";

function ChooseUs() {
  const points = [
    { icon: "🏥", title: "Trusted Hospital Care", desc: "We provide reliable healthcare support like a professional hospital." },
    { icon: "🩺", title: "Expert Doctors", desc: "Certified and experienced doctors available for guidance." },
    { icon: "💊", title: "Genuine Medicines", desc: "Only approved and high-quality medicines." },
    { icon: "🚑", title: "Emergency Support", desc: "Fast response for emergency health situations." },
    { icon: "📋", title: "Proper Diagnosis", desc: "Accurate health check and treatment planning." },
    { icon: "❤️", title: "Patient Care First", desc: "We always put patient safety and care first." },
  ];

  return (
    <section className="choose">
      <div className="choose-container">

        <h4 className="choose-tag">🏥 Why Choose Our Hospital Care</h4>

        <h2>Advanced Healthcare With Trust & Care</h2>

        <p>
          We combine modern hospital services with trusted medical care for better patient health and safety.
        </p>

        <div className="choose-grid">
          {points.map((item, index) => (
            <div className="choose-card" key={index}>
              <div className="choose-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ChooseUs;