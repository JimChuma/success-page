import "./App.css";
import logo from "./image/285278905_407543031517554_1762956712224382902_n - Copy.png";
import fb from "./image/facebook-svgrepo-com (4).svg";

function App() {
  return (
    <div className="App">
      <div>
        <img src={logo} alt="logo" />
        <span>Jim's Art</span>
      </div>
      <div>
        <h4>Kindly send us a message on Facebook Messenger</h4>
        <p>
          Send us a message with your <b>design details, pictures and receipt url </b>
          so our graphic designers can get started on your work. Our delivery
          time is within 0 -48 hours. Our designers will respond to your
          messages as soon as they can.
        </p>
        <p>Thank you! 😊</p>
        <a href="https://m.me/JimsArtUSA" target="blank">
          <button>
            <img src={fb} alt="Facebook logo" />
            Facebook Messenger
          </button>
        </a>
      </div>
    </div>
  );
}

export default App;
