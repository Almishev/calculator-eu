import React, { useState } from "react";
import CurrencySwitch from "./components/CurrencySwitch";
import { appStyles as styles } from "./styles";

const RATE = 1.95583;

function App() {
  const [price, setPrice] = useState("");
  const [priceCurrency, setPriceCurrency] = useState("BGN");

  const [paid, setPaid] = useState("");
  const [paidCurrency, setPaidCurrency] = useState("EUR");

  const toEUR = (value, currency) => {
    if (!value) return 0;
    return currency === "EUR" ? value : value / RATE;
  };

  const priceEUR = toEUR(Number(price), priceCurrency);
  const paidEUR = toEUR(Number(paid), paidCurrency);

  const changeEUR = (paidEUR - priceEUR).toFixed(2);

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.title}>Калкулатор за ресто в евро</h1>
      <h3 style={styles.subtitle}>Изчислете рестото бързо и точно</h3>

      {/* Цена */}
      <div style={styles.section}>
        <label>Сметка сума</label>
        <div style={styles.row}>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="0.00"
            style={styles.input}
          />
          <CurrencySwitch
            value={priceCurrency}
            onChange={setPriceCurrency}
          />
        </div>
      </div>

      {/* Платено */}
      <div style={styles.section}>
        <label>Платена сума</label>
        <div style={styles.row}>
          <input
            type="number"
            value={paid}
            onChange={(e) => setPaid(e.target.value)}
            placeholder="0.00"
            style={styles.input}
          />
          <CurrencySwitch
            value={paidCurrency}
            onChange={setPaidCurrency}
          />
        </div>
      </div>

      <hr />

      {/* Ресто */}
      <div>
        <p><b>Ресто (винаги в евро)</b></p>
        <div style={styles.result}>
          {changeEUR < 0 ? "0.00" : changeEUR} EUR
        </div>
        {changeEUR < 0 && (
          <p style={{ color: "red" }}>Недостатъчна сума</p>
        )}
      </div>

      <div style={styles.footer}>
        <p>Курс на БНБ: 1 EUR = 1.95583 BGN</p>
        <p>Обратен курс: 1 BGN = 0.511292 EUR</p>
      </div>
    </div>
  );
}

export default App;
