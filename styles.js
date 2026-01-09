// Стилове за App компонента
export const appStyles = {
  wrapper: {
    maxWidth: "420px",
    width: "calc(100% - 40px)", // 20px margin от всяка страна
    margin: "20px auto",
    padding: "20px",
    boxSizing: "border-box", // Включва padding в ширината
    border: "4px solid #2ea8ff",
    borderRadius: "20px",
    fontFamily: "Arial",
  },
  title: { textAlign: "center" },
  subtitle: { textAlign: "center", marginBottom: "20px" },
  section: { marginBottom: "20px" },
  row: { 
    display: "flex", 
    gap: "10px",
    flexWrap: "wrap", // Позволява wrap на малки екрани
  },
  input: {
    flex: 1,
    minWidth: "120px", // Минимална ширина за input полето
    padding: "10px",
    fontSize: "16px",
    boxSizing: "border-box",
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

// Стилове за CurrencySwitch компонента
export const currencySwitchStyles = {
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
};

