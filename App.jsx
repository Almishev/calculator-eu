import React, { useState } from "react";

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

function CurrencySwitch({ value, onChange }) {
  return (
    <div style={styles.switch}>
      <button
        style={value === "BGN" ? styles.activeBtn : styles.btn}
        onClick={() => onChange("BGN")}
      >
        BGN
      </button>
      <button
        style={value === "EUR" ? styles.activeBtn : styles.btn}
        onClick={() => onChange("EUR")}
      >
        EUR
      </button>
    </div>
  );
}

const styles = {
  wrapper: {
    maxWidth: "420px",
    margin: "20px auto",
    padding: "20px",
    border: "4px solid #2ea8ff",
    borderRadius: "20px",
    fontFamily: "Arial",
  },
  title: { textAlign: "center" },
  subtitle: { textAlign: "center", marginBottom: "20px" },
  section: { marginBottom: "20px" },
  row: { display: "flex", gap: "10px" },
  input: {
    flex: 1,
    padding: "10px",
    fontSize: "16px",
  },
  switch: { display: "flex" },
  btn: {
    padding: "10px",
    border: "1px solid #ccc",
    background: "#fff",
    cursor: "pointer",
  },
  activeBtn: {
    padding: "10px",
    border: "1px solid #007bff",
    background: "#007bff",
    color: "#fff",
    cursor: "pointer",
  },
  result: {
    marginTop: "10px",
    padding: "15px",
    fontSize: "28px",
    fontWeight: "bold",
    color: "green",
    border: "1px solid green",
    borderRadius: "10px",
    display: "inline-block",
  },
  footer: {
    marginTop: "20px",
    fontSize: "13px",
    color: "#555",
  },
};

export default App;
