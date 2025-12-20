import "./App.css";
import Currency_background from "./assets/Currency_background.jpg";
import Header from "./Components/header";
import SelectCurrency from "./components/SelectCurrency";
import Amount from "./components/Amount";
import { useState, useEffect } from "react";

const URL = "https://api.fastforex.io/fetch-all";
const API_KEY = "fd1e1a07be-e5843756e0-t7h4oc";

function App() {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  useEffect(() => {
    async function fetchCurrencies() {
      const res = await fetch(`${URL}?api_key=${API_KEY}`);
      const data = await res.json();
      console.log(data);

      const currencyCodes = Object.keys(data.results);
      const firstCurrency = Object.keys(data.results)[0];
      setCurrencies([data.base, ...currencyCodes]);
      setFromCurrency(data.base);
      setToCurrency(firstCurrency);
      setExchangeRate(data.results[firstCurrency]);
    }
    fetchCurrencies();
  }, []);

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(
        `${URL}?api_key=${API_KEY}&base=${fromCurrency}&results=${toCurrency}`
      )
        .then((res) => res.json())
        .then((data) => setExchangeRate(data.results[toCurrency]));
    }
  }, [fromCurrency, toCurrency]);
  return (
    <>
      <div
        className="app-background"
        style={{ "--bg-image": `url(${Currency_background})` }}
      >
        <Header />
        <div className="bg-white shadow-2xl h-70 w-200 mt-30 ml-125 flex flex-col items-center justify-center space-y-5">
          <SelectCurrency
            currencies={currencies}
            setCurrencies={setCurrencies}
            fromCurrency={fromCurrency}
            setFromCurrency={setFromCurrency}
            toCurrency={toCurrency}
            setToCurrency={setToCurrency}
          />
          <Amount
            toAmount={toAmount}
            fromAmount={fromAmount}
            setAmount={setAmount}
            setAmountInFromCurrency={setAmountInFromCurrency}
          />
        </div>
      </div>
    </>
  );
}

export default App;
