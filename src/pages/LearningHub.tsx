import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "../styles/LearningHub.css";

const LearningHub = () => {
  return (
    <div className="learning-hub-page">
      <Navigation />

      {/* Hero Section */}
      <section className="learning-hero-section">
        <div className="learning-hero-container">
          {/* Hero Image */}
          <div className="learning-hero-image">
            <div className="placeholder-image">
              <span className="placeholder-text">Hero Image Placeholder</span>
            </div>
          </div>
          
          {/* Hero Content */}
          <div className="learning-hero-content">
            <h3 className="learning-hero-title">
              A journey to fluent signing
              <br />
              <span className="highlight">— fun, friendly, and free.</span>
            </h3>
            
            <div className="learning-hero-buttons">
              <button className="learning-btn-primary">
                GET STARTED
              </button>
              
              <button className="learning-btn-secondary">
                I ALREADY HAVE AN ACCOUNT
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Level Up & Learn Section */}
      <section className="learning-feature-section alt-bg">
        <div className="learning-feature-container image-right">
          <div className="learning-feature-image">
            <div className="placeholder-image">
              <span className="placeholder-text">Level Up Image Placeholder</span>
            </div>
          </div>
          
          <div className="learning-feature-content">
            <h2 className="learning-feature-title">
              Level Up & Learn
            </h2>
            <p className="learning-feature-description">
              Explore bite-sized lessons in each level, followed by a quick quiz. Master them all to unlock the final challenge!
            </p>
          </div>
        </div>
      </section>

      {/* Practice with Your Webcam Section */}
      <section className="learning-feature-section">
        <div className="learning-feature-container image-left">
          <div className="learning-feature-image">
            <div className="placeholder-image">
              <span className="placeholder-text">Webcam Practice Image Placeholder</span>
            </div>
          </div>
          
          <div className="learning-feature-content">
            <h2 className="learning-feature-title">
              Practice with Your Webcam
            </h2>
            <p className="learning-feature-description">
              Use your webcam to practice real ASL signs. Get it right to move forward — just like a real sign coach!
            </p>
          </div>
        </div>
      </section>

      {/* Earn Stars Section */}
      <section className="learning-feature-section alt-bg">
        <div className="learning-feature-container image-right">
          <div className="learning-feature-image">
            <div className="placeholder-image">
              <span className="placeholder-text">Stars & Progress Image Placeholder</span>
            </div>
          </div>
          
          <div className="learning-feature-content">
            <h2 className="learning-feature-title">
              Earn Stars, Track Your Shine
            </h2>
            <p className="learning-feature-description">
              Score stars with each quiz, see your growth, and climb the leaderboard as you level up your signing game!
            </p>
          </div>
        </div>
      </section>

      {/* Final Challenge Section */}
      <section className="learning-feature-section">
        <div className="learning-feature-container image-left">
          <div className="learning-feature-image">
            <div className="placeholder-image">
              <span className="placeholder-text">Final Challenge Image Placeholder</span>
            </div>
          </div>
          
          <div className="learning-feature-content">
            <h2 className="learning-feature-title">
              Final Challenge Awaits
            </h2>
            <p className="learning-feature-description">
              Complete all levels to unlock the Final Test. Pass it and earn your official digital certificate — you've earned it!
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LearningHub;