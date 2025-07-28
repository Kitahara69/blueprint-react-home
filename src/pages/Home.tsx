import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import handSignsImage from "@/assets/hand-signs.png";
import "../styles/Home.css"; // Keep the CSS import as it's likely general styling

const Home = () => {
  return (
    <div className="homepage">
      <Navigation />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          {/* Hand Signs Icons */}
          <div className="hand-signs-container">
            <img
              src={handSignsImage}
              alt="ASL Hand Signs"
              className="hand-signs-image"
            />
          </div>

          {/* Main Heading */}
          <h2 className="hero-title">
            Communicate With Deaf And<br />
            Hard of Hearing People
          </h2>

          {/* Subtext */}
          <p className="hero-subtitle">
            studying ASL promotes better awareness of and<br />
            sensitivity to the deaf and hard hearing community.
          </p>

          {/* CTA Button */}
          <button className="cta-button">
            Join Us Now
          </button>
        </div>
      </section>

      {/* Our Features Section */}
      <section className="features-section">
        <div className="features-container">
          <h2 className="features-title">
            Our Features
          </h2>

          <div className="features-grid">
            {/* Communication Feature Card */}
            <div className="feature-card">
              <div className="feature-card-content">
                <h3 className="feature-card-title">
                  Translate words or phrases<br />
                  to ASL
                </h3>
                <p className="feature-card-description">
                  studying ASL promotes better awareness of and<br />
                  sensitivity to the deaf and hard hearing community.
                </p>
                <button className="feature-button">
                  Start Chat
                </button>
              </div>
            </div>

            {/* Learning Feature Card */}
            <div className="feature-card">
              <div className="feature-card-content">
                <h3 className="feature-card-title">
                  Learn Sign Language<br />
                  At Your Own Pace
                </h3>
                <p className="feature-card-description">
                  Interactive lessons and practice sessions to help you
                  master American Sign Language effectively.
                </p>
                <button className="feature-button">
                  Start Lesson
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;