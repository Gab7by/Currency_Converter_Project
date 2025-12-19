import "./App.css";

import Currency_background from "./assets/Currency_background.jpg";
import Header from "./Components/header";
import SelectCurrency from "./components/SelectCurrency";
import Amount from "./components/Amount";

function App() {
  return (
    <>
      <div
        className="app-background"
        style={{ "--bg-image": `url(${Currency_background})` }}
      >
        <Header />
        <div className="bg-white shadow-2xl h-70 w-200 mt-30 ml-125 flex flex-col items-center justify-center space-y-5">
          <SelectCurrency />
          <Amount />
        </div>
      </div>
    </>
  );
}

export default App;
