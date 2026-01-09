// Стилове за App компонента
export const appStyles = {
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

