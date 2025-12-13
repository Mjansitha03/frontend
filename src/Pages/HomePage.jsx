import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ParticleAnimation = ({ duration = 5000, onFinish }) => {
  // Create random particles
  const [particles] = useState(() =>
    Array.from({ length: 50 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 12 + 4,
      color: Math.random() > 0.5 ? "#f39c12" : "#1abc9c",
      delay: Math.random() * 2,
      duration: Math.random() * 2 + 2,
    }))
  );

  // Hide animation after time
  useEffect(() => {
    const timer = setTimeout(() => onFinish?.(), duration);
    return () => clearTimeout(timer);
  }, [duration, onFinish]);

  return (
    <div
      className="position-relative w-100 vh-100"
      style={{ overflow: "hidden", backgroundColor: "#222" }}
    >
      {/* Show particles */}
      {particles.map((p, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            top: `${p.y}%`,
            left: `${p.x}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: "50%",
            backgroundColor: p.color,
            opacity: 0,
            animation: `floatParticle ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}

      <style>{`
        @keyframes floatParticle {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          50% { transform: translateY(-50px) scale(1.2); opacity: 1; }
          100% { transform: translateY(-100px) scale(0); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

// Home page after welcome animation
const HomePage = () => {
  const [showWelcome, setShowWelcome] = useState(false);

  return (
    <div>
      {/* Show animation first */}
      {!showWelcome && (
        <ParticleAnimation duration={5000} onFinish={() => setShowWelcome(true)} />
      )}

      {/* Show welcome content */}
      {showWelcome && (
        <div
          className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center"
          style={{ animation: "fadeIn 2s" }}
        >
          <h1 className="display-3 mb-3 text-primary">Welcome!</h1>
          <p className="lead text-secondary">Glad to have you here!</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;

