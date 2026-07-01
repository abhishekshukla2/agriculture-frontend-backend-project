import "./Introduction.css";

function Introduction() {
  return (
    <section className="intro">
      <div className="intro-container">

        <div className="intro-left">
          <span className="tag">🏥 Welcome to Medical Shop</span>

          <h1>Your Trusted Healthcare Partner</h1>

          <p>
            Welcome to our Medical Shop. We provide genuine medicines,
            healthcare products, and wellness essentials at affordable prices.
            Our mission is to deliver quality healthcare with fast delivery,
            secure ordering, and trusted customer support.
          </p>

          <div className="intro-buttons">
            <button className="shop-btn"><a href="http://localhost:8000/shop">Shop</a></button>
            <button className="learn-btn"><a href="#">Learn More</a></button>
          </div>

          <div className="features">
            <div className="feature-card">
              <h3>💊 Genuine Medicines</h3>
              <p>100% authentic and quality medicines.</p>
            </div>

            <div className="feature-card">
              <h3>🚚 Fast Delivery</h3>
              <p>Quick and safe delivery to your doorstep.</p>
            </div>

            <div className="feature-card">
              <h3>👨‍⚕️ Expert Support</h3>
              <p>Professional guidance whenever you need it.</p>
            </div>
          </div>
        </div>

        <div className="intro-right">
          <img
            src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600"
            alt="Medical Shop"
          />
        </div>

      </div>
    </section>
  );
}

export default Introduction;