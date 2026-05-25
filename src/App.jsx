import { useState } from "react";

import Logo from "./components/Logo";
import Dashboard from "./pages/Dashboard";
import Footer from "./componentes/Footer";
import FomularioCadastro from "./componentes/FomularioCadastro";
import ListaUser from "./componentes/ListaUser"; // Importado como ListaUser

function App() {
  // Array inicial de estados
  const [email, setEmail] = useState([]);

  // Função que recebe o novo usuário e adiciona no array
  function adicionarEmail(novoEmail) {
    setEmail([...email, novoEmail]);
  }
  
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

      <div className="container">

      {/* 1. Formulário de Cadastro */}
      <FomularioCadastro adicionarEmail={adicionarEmail} />

      {/* 2. Lista de Usuários (CORRIGIDO: usando o nome do import e passando a prop 'user') */}
      <ListaUser email={email} />

      {/* 3. Rodapé sempre no final */}
      <Footer />

    </div>
    );
  }

  return <Dashboard />;
}

export default App;
