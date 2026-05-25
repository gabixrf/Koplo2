import { useState } from "react";

import Logo from "./components/Logo";
import Dashboard from "./pages/Dashboard";

function App() {
  const [mostrarIntro, setMostrarIntro] = useState(true);

  const terminouAnimacao = () => {
    console.log("Logo terminou!");

    setTimeout(() => {
      setMostrarIntro(false);
    }, 1000);
  };

  if (mostrarIntro) {
    return (
      <div
        style={{
          backgroundColor: "black",
          width: "100%",
          height: "100vh",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Logo onComplete={terminouAnimacao} />
      </div>
    );
  }

  return <Dashboard />;
}

export default App;