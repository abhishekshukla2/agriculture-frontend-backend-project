import "./FeaturedMedicines.css";

function FeaturedMedicines() {
  const medicines = [
    {
      name: "Paracetamol 500mg",
      price: "₹25",
      type: "Pain Relief",
    },
    {
      name: "Cough Syrup",
      price: "₹80",
      type: "Cold & Cough",
    },
    {
      name: "Vitamin C Tablets",
      price: "₹150",
      type: "Immunity",
    },
    {
      name: "Antacid Tablets",
      price: "₹60",
      type: "Digestion",
    },
    {
      name: "Ibuprofen 400mg",
      price: "₹40",
      type: "Pain Relief",
    },
    {
      name: "Multivitamin Capsules",
      price: "₹200",
      type: "Health Care",
    },
  ];

  return (
    <section className="medicines">
      <div className="med-container">

        <h4 className="med-tag">💊 Featured Medicines</h4>

        <h2>Popular & Trusted Medicines</h2>

        <p>
          Buy genuine medicines at affordable prices with fast delivery and
          trusted quality assurance.
        </p>

        <div className="med-grid">
          {medicines.map((item, index) => (
            <div className="med-card" key={index}>
              <div className="med-icon">💊</div>

              <h3>{item.name}</h3>

              <span className="med-type">{item.type}</span>

              <p className="med-price">{item.price}</p>

              <button className="buy-btn">Add to Cart</button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedMedicines;