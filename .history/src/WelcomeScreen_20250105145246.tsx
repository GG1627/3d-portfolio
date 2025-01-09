import "./WelcomeScreen.css";

function WelcomeScreen() {
  return (
    <>
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
        </nav>
      </div>
    </>
  );
}

export default WelcomeScreen;
