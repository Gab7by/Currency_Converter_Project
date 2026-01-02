import "./App.css";
import Currency_background from "./assets/Currency_background.jpg";
import Header from "./components/header";
import SelectCurrency from "./components/SelectCurrency";
import Amount from "./components/Amount";
import { useState, useEffect } from "react";

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
      const res = await fetch(
        `https://v6.exchangerate-api.com/v6/1f751992a9c0f6cdae68c44f/latest/USD`
      );
      const data = await res.json();
      console.log(data);

      const currencyCodes = Object.keys(data.conversion_rates);
      const firstCurrency = Object.keys(data.conversion_rates)[1];
      setCurrencies([data.base_code, ...currencyCodes]);
      setFromCurrency(data.base_code);
      setToCurrency(firstCurrency);
      setExchangeRate(data.conversion_rates[firstCurrency]);
    }
    fetchCurrencies();
  }, []);

  useEffect(() => {
    if (fromCurrency !== null && toCurrency !== null) {
      fetch(
        `https://v6.exchangerate-api.com/v6/1f751992a9c0f6cdae68c44f/latest/${fromCurrency}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.conversion_rates && data.conversion_rates[toCurrency]) {
            setExchangeRate(data.conversion_rates[toCurrency]);
          }
        })
        .catch((error) => {
          console.error("Error fetching exchange rate:", error);
        });
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
