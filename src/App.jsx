import { useState } from "react";
import { ShoesShop } from "./modules/buoi-4/shoes-shop";

function Count({ children }) {
  const [c, setC] = useState(0);

  return (
    <>
      <button
        onClick={() => {
          setC((c) => c + 1);
        }}
      >
        {children(c)}
      </button>
    </>
  );
}

function App() {
  const a = 10;

  return (
    <>
      <Count>
        {(count) => {
          return <>{count + a}</>;
        }}
      </Count>

      <ShoesShop />
    </>
  );
}

export default App;
