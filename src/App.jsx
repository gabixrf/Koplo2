import { useState } from 'react'
import { Box } from '@mui/material'

// Deixamos apenas os imports necessários aqui
import Logo from "./Componentes/Logo";
import Dashboard from "./pages/Dashboard";

function App() {
  const [usuarios, setUsuarios] = useState(() => {
    const salvos = localStorage.getItem("usuarios");
    return salvos ? JSON.parse(salvos) : [];
  });

  const [usuarioParaEditar, setUsuarioParaEditar] = useState(null);
  const [mostrarIntro, setMostrarIntro] = useState(true);

  // Função para adicionar ou atualizar usuário
  function salvarUsuario(usuarioAtualizado) {
    if (usuarioParaEditar !== null) {
      const novaLista = [...usuarios];
      novaLista[usuarioParaEditar.index] = usuarioAtualizado;
      setUsuarios(novaLista);
      localStorage.setItem("usuarios", JSON.stringify(novaLista));
      setUsuarioParaEditar(null); 
    } else {
      const novaLista = [...usuarios, usuarioAtualizado];
      setUsuarios(novaLista);
      localStorage.setItem("usuarios", JSON.stringify(novaLista));
    }
  }

  // Função que ativa o modo de edição
  function ativarEdicao(index) {
    setUsuarioParaEditar({ ...usuarios[index], index });
  }

  const terminouAnimacao = () => {
    console.log("Logo terminou!");
    setTimeout(() => {
      setMostrarIntro(false);
    }, 1000);
  };

  // PASSO 1: Tela preta isolada com a animação da logo inicial
  if (mostrarIntro) {
    return (
      <Box
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
      </Box>
    );
  }

  // PASSO 2: Tela Principal (O Dashboard centraliza e desenha tudo no lado direito da Sidebar)
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#0d0d0d', color: '#fff' }}>
      <Dashboard 
        usuarios={usuarios}
        salvarUsuario={salvarUsuario}
        usuarioParaEditar={usuarioParaEditar}
        ativarEdicao={ativarEdicao}
      />
    </Box>
  );
}

export default App;
