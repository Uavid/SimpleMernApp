import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("/api/message")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div style={{ padding: "50px", fontSize: "24px" }}>
      <h1>Frontend Running fine ✔</h1>
      <p>Backend says: {data}</p>
    </div>
  );
}

export default App;
