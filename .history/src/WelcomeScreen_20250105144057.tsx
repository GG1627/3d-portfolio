import React, { useEffect, useState } from "react";

const WlecomeScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let currentProgress = 0;
    const particleInterval = setInterval(createParticle, 300);
    const progressInterval = setInterval(() => {
      currentProgress += Math.random() * 12;
      if (currentProgress > 100) currentProgress = 100;
      setProgress(Math.round(currentProgress));

      if (currentProgress === 100) {
        clearInterval(progressInterval);
        clearInterval(particleInterval);
        setTimeout(hideLoadingScreen, 500);
      }
    }, 200);

    return () => {
      clearInterval(progressInterval);
      clearInterval(particleInterval);
    };
  }, []);

  const createParticle = () => {
    const loadingContainer = document.querySelector(".loading-container");
    if (!loadingContainer) return;

    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animation = "particleFloat 3s ease-in-out forwards";
    loadingContainer.appendChild(particle);

    particle.addEventListener("animationend", () => {
      particle.remove();
    });
  };

  const hideLoadingScreen = () => {
    const loadingScreen = document.querySelector(
      ".loading-screen"
    ) as HTMLElement;
    const content = document.querySelector(".content");
    if (loadingScreen && content) {
      loadingScreen.classList.add("hidden");
      setTimeout(() => {
        loadingScreen.style.display = "none";
        content.classList.add("visible");
      }, 800);
    }
  };

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="loading-screen">
        <div className="loading-container">
          <div className="loader-ring">
            <div className="loader-core"></div>
          </div>
          <div className="progress-container">
            <div className="progress-text">{progress}%</div>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
          <div className="loading-text">Loading Experience</div>
        </div>
      </div>

      <main className="content">
        <h1>Welcome to the Experience</h1>
        <p style={{ margin: "1rem 0", fontSize: "1.2rem", opacity: 0.9 }}>
          Loading screen demonstration complete!
        </p>
        <button className="refresh-btn" onClick={refreshPage}>
          Try Again
        </button>
      </main>
    </>
  );
};

export default WlecomeScreen;
