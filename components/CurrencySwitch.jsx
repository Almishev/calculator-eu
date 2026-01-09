import React from 'react';
import { currencySwitchStyles as styles } from '../styles';

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

export default CurrencySwitch;

