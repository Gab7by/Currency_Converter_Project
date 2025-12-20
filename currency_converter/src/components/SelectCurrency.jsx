export default function SelectCurrency({
  currencies,
  setCurrencies,
  fromCurrency,
  setFromCurrency,
  toCurrency,
  setToCurrency,
}) {
  return (
    <div>
      <select
        onChange={(e) => setFromCurrency(e.target.value)}
        value={fromCurrency}
        className="rounded-2xl p-5 bg-white border-b hover:border outline-none shadow-[0_-4px_9px_rgba(0,0,0,0.2)] h-15 w-75 mr-10 text-black"
      >
        {currencies.map((currency1) => (
          <option key={currency1} value={currency1}>
            {currency1}
          </option>
        ))}
      </select>
      <select
        onChange={(e) => setToCurrency(e.target.value)}
        value={toCurrency}
        className="rounded-2xl p-5 bg-white border-b hover:border outline-none shadow-[0_-4px_9px_rgba(0,0,0,0.2)] h-15 w-75 mr-10 text-black"
      >
        {currencies.map((currency2) => (
          <option key={currency2} value={currency2}>
            {currency2}
          </option>
        ))}
      </select>
    </div>
  );
}
