import "./App.css";

import Currency_background from "./assets/Currency_background.jpg";
import Header from "./Components/header";

function App() {
  return (
    <>
      <div
        className="app-background"
        style={{ "--bg-image": `url(${Currency_background})` }}
      >
        <Header />
      </div>
    </>
  );
}

export default App;
