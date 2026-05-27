import { useState, useEffect } from "react";
import { TextField, Button, Typography, Box, Card, CardContent } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

function FomularioCadastro({ adicionarEmail, usuarioParaEditar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");

  // Monitora se há um usuário para editar e preenche os campos
  useEffect(() => {
    if (usuarioParaEditar) {
      setNome(usuarioParaEditar.nome);
      setEmail(usuarioParaEditar.email);
      setSenha(usuarioParaEditar.senha || "");
    }
  }, [usuarioParaEditar]);

  function salvarCadastro(evento) {
    evento.preventDefault(); 

    if (!email || !senha || !nome) {
      alert("Preencha todos os campos antes de continuar.");
      return;
    }
    
    // Envia os dados para a função do App.jsx
    if (adicionarEmail) {
      adicionarEmail({ email, senha, nome });
    }

    // Limpa os campos após salvar
    setEmail("");
    setSenha("");
    setNome("");
  }

  const modoEdicao = usuarioParaEditar !== null;

  // ==========================================
  // SEÇÃO DE ESTILOS CSS (MUI SX)
  // ==========================================
  
  const estiloCard = {
    maxWidth: 500, 
    margin: "0 auto", 
    background: "linear-gradient(135deg, #151515, #111111)", // Fundo escuro premium
    borderRadius: "18px",
    border: "1px solid #232323", // Borda fina combinando com os cards do Dashboard
    boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.4)",
    transition: "all 0.3s ease"
  };

  const estiloCampos = {
    '& .MuiOutlinedInput-root': {
      borderRadius: '14px',       // Cantos arredondados modernos
      color: '#ffffff',           // Cor do texto digitado
      backgroundColor: '#0d0d0d', // Fundo dos inputs casando com o fundo do site
      '& fieldset': { 
        borderColor: '#262626',   // Borda padrão sutil
      },
      '&:hover fieldset': { 
        borderColor: '#444444',   // Borda ao passar o mouse
      },
      '&.Mui-focused fieldset': { 
        borderColor: '#d4af37',   // Acende em Dourado no foco
      },
    },
    '& .MuiInputLabel-root': { 
      color: '#8b8b8b',           // Cor do placeholder em repouso
    },
    '& .MuiInputLabel-root.Mui-focused': { 
      color: '#d4af37',           // Texto flutuante fica dourado no foco
    }
  };

  const estiloBotao = {
    mt: 1, 
    borderRadius: '14px', 
    padding: '14px',
    fontWeight: '700',
    textTransform: 'none',       // Desativa o Caps Lock automático do MUI
    fontSize: '15px',
    backgroundColor: '#d4af37',  // Botão Dourado Koplo
    color: '#000000',            // Texto preto para contraste perfeito
    boxShadow: '0px 4px 14px rgba(212, 175, 55, 0.1)',
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: '#bfa030', // Tom mais escuro de dourado no hover
      boxShadow: '0px 6px 20px rgba(212, 175, 55, 0.2)',
    }
  };

  return (
    <Card sx={estiloCard}>
      <CardContent sx={{ p: 4 }}>
        <Typography 
          variant="h5" 
          component="h2" 
          gutterBottom 
          align="center" 
          sx={{ fontWeight: '800', color: '#fff', mb: 3 }}
        >
          {modoEdicao ? "Editar Usuário" : "Criar Nova Conta"}
        </Typography>

        <Box 
          component="form" 
          onSubmit={salvarCadastro} 
          sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}
        >
          <TextField
            label="Nome Completo"
            variant="outlined"
            fullWidth
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            sx={estiloCampos}
          />

          <TextField
            label="E-mail"
            type="email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={estiloCampos}
          />

          <TextField
            label="Senha"
            type="password"
            variant="outlined"
            fullWidth
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            sx={estiloCampos}
          />

          <Button 
            type="submit" 
            variant="contained" 
            size="large"
            startIcon={modoEdicao ? <SaveIcon /> : <PersonAddIcon />}
            sx={estiloBotao}
          >
            {modoEdicao ? "Salvar Alterações" : "Registrar Usuário"}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default FomularioCadastro;
