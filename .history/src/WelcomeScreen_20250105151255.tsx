import "./WelcomeScreen.css";

function WelcomeScreen() {
  function startLoader() {
    let counterElement = document.querySelector(".counter");
  }

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
