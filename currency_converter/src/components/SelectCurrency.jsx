import { useState, useEffect } from "react";

const URL = "https://api.fastforex.io/fetch-all";
const API_KEY = "fd1e1a07be-e5843756e0-t7h4oc";

export default function SelectCurrency() {
  const [currencies, setCurrencies] = useState([]);
  const [base, setBase] = useState("");
  useEffect(() => {
    async function fetchCurrencies() {
      const res = await fetch(`${URL}?api_key=${API_KEY}`);
      const data = await res.json();
      console.log(data);

      const currencyCodes = Object.keys(data.results);
      setCurrencies(currencyCodes);
      const baseCode = data.base;
      setBase(baseCode);
    }
    fetchCurrencies();
  }, []);
  return (
    <div>
      <select className="rounded-2xl p-5 bg-white border-b hover:border outline-none shadow-[0_-4px_9px_rgba(0,0,0,0.2)] h-15 w-75 mr-10 text-black">
        <option>{base}</option>
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
      <select className="rounded-2xl p-5 bg-white border-b hover:border outline-none shadow-[0_-4px_9px_rgba(0,0,0,0.2)] h-15 w-75 mr-10 text-black">
        <option>{base}</option>
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
}
