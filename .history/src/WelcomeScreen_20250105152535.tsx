import gsap from "gsap";
import "./WelcomeScreen.css";

function WelcomeScreen() {
  function startLoader() {
    let counterElement = document.querySelector(".counter");
    let currentValue = 0;

    function updateCounter() {
      if (currentValue == 100) {
        return;
      }

      currentValue += Math.floor(Math.random() * 10) + 1;

      if (currentValue > 100) {
        currentValue = 100;
      }

      (counterElement as HTMLElement).textContent = String(currentValue);

      let delay = Math.floor(Math.random() * 200) + 50;
      setTimeout(updateCounter, delay);
    }

    updateCounter();
  }
  startLoader();

  gsap.to(".counter", 0.25, {
    delay: 3.5,
    opacity: 0,
  });

  gsap.to(".bar", 1.5, {
    delay: 3.5,
    height: 0,
    stagger: {
      amount: 0.5,
    },
    ease: "power4.inOut",
  });

  gsap.to(".h1", 1.5, {
    delay: 4,
    y: 700,
    stagger: {
      amount: 0.5,
    },
    ease: "power4.inOut",
  });

  return (
    <div className="screen">
      <h1 className="counter">0</h1>

      <div className="overlay">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className="container">
        <nav>
          <div>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
          <div>
            <a href="#">Playgound</a>
          </div>
        </nav>
        <div className="header">
          <div className="h1">f</div>
          <div className="h1">l</div>
          <div className="h1">a</div>
          <div className="h1">u</div>
          <div className="h1">.</div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeScreen;
