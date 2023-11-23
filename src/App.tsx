import { useState } from "react";
import { Button } from "@/components/ui/button";
import AppLayout from "@/components/applayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <AppLayout>
      <div className="flex justify-between pl-10">
        <h1 className="font-montserrat text-left font-black text-5xl">
          Controla tus gastos desde el alcanze de tu mano, con Expense Tracker
        </h1>
        <img
          src="/src/assets/hero-video.svg"
          alt="Expense Tracker"
          className="w-1/2"
        />
      </div>
      <Button>Click me</Button>
      <div className="card">
        <button
          onClick={() => {
            setCount((count) => count + 1);
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </AppLayout>
  );
}

export default App;
