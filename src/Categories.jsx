import "./Categories.css";

function Categories() {
  const categories = [
    {
      icon: "💊",
      name: "Tablets",
      desc: "Pain relief, fever, antibiotics",
    },
    {
      icon: "🧴",
      name: "Syrups",
      desc: "Cough, cold & immunity syrups",
    },
    {
      icon: "💉",
      name: "Injections",
      desc: "Hospital grade injections",
    },
    {
      icon: "🧪",
      name: "Vitamins",
      desc: "Health & immunity boosters",
    },
    {
      icon: "🧴",
      name: "Personal Care",
      desc: "Skin & hygiene products",
    },
    {
      icon: "👶",
      name: "Baby Care",
      desc: "Baby nutrition & care products",
    },
    {
      icon: "🩺",
      name: "Medical Devices",
      desc: "BP machine, thermometer etc",
    },
    {
      icon: "❤️",
      name: "Wellness",
      desc: "Herbal & health supplements",
    },
  ];

  return (
    <section className="categories">
      <div className="cat-container">

        <h4 className="cat-tag">📦 Categories</h4>

        <h2>Browse Medicine Categories</h2>

        <p>
          Find medicines and healthcare products easily by selecting your required category.
        </p>

        <div className="cat-grid">
          {categories.map((item, index) => (
            <div className="cat-card" key={index}>
              <div className="cat-icon">{item.icon}</div>
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Categories;