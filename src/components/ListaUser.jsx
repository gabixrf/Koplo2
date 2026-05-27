import { Box, Card, CardContent, Typography, IconButton, Avatar, Grid } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import PersonIcon from "@mui/icons-material/Person";

function ListaUser({ email: usuarios, aoEditar }) {
  
  // ==========================================
  // SEÇÃO DE ESTILOS CSS (MUI SX)
  // ==========================================
  
  const estiloCardUsuario = {
    background: "linear-gradient(135deg, #151515, #111111)", // Mesmo fundo do formulário
    borderRadius: "16px",
    border: "1px solid #232323", // Borda sutil padrão Koplo
    transition: "all 0.25s ease",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
    '&:hover': {
      transform: "translateY(-4px)", // Efeito flutuante ao passar o mouse
      borderColor: "#d4af37", // A borda acende em dourado no hover
      boxShadow: "0px 6px 24px rgba(212, 175, 55, 0.1)",
    }
  };

  const estiloAvatar = {
    backgroundColor: "#d4af37", // Fundo dourado para o ícone/letra
    color: "#000000",           // Letra preta para dar alto contraste
    fontWeight: "700",
    width: 46,
    height: 46
  };

  const estiloBotaoEditar = {
    color: "#8b8b8b",
    backgroundColor: "#1d1d1d",
    border: "1px solid #2a2a2a",
    borderRadius: "10px",
    transition: "all 0.2s ease",
    '&:hover': {
      backgroundColor: "#d4af37",
      color: "#000000",
      borderColor: "#d4af37",
    }
  };

  // Caso não tenha nenhum usuário na lista ainda
  if (!usuarios || usuarios.length === 0) {
    return (
      <Box sx={{ textAlign: "center", mt: 4, p: 3, border: "1px dashed #262626", borderRadius: "16px" }}>
        <Typography sx={{ color: "#8b8b8b", fontSize: "15px" }}>
          Nenhum usuário cadastrado até o momento.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ mt: 2 }}>
      <Typography 
        variant="h6" 
        sx={{ fontWeight: "800", color: "#fff", mb: 3, letterSpacing: "-0.5px" }}
      >
        👥 Usuários no Sistema ({usuarios.length})
      </Typography>

      {/* Grid responsivo: se ajusta automaticamente em telas menores */}
      <Grid container spacing={2.5}>
        {usuarios.map((user, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={estiloCardUsuario}>
              <CardContent sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", p: "20px !important" }}>
                
                {/* Lado Esquerdo: Avatar e Infos */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Avatar sx={estiloAvatar}>
                    {user.nome ? user.nome.charAt(0).toUpperCase() : <PersonIcon />}
                  </Avatar>
                  
                  <Box sx={{ maxWidth: "160px", overflow: "hidden" }}>
                    <Typography 
                      variant="subtitle1" 
                      sx={{ fontWeight: "700", color: "#fff", lineHeight: 1.2, noWrap: true }}
                    >
                      {user.nome}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ color: "#8b8b8b", fontSize: "13px", noWrap: true, mt: 0.5 }}
                    >
                      {user.email}
                    </Typography>
                  </Box>
                </Box>

                {/* Lado Direito: Botão de Ação */}
                <IconButton 
                  onClick={() => aoEditar && aoEditar(index)}
                  sx={estiloBotaoEditar}
                  title="Editar Usuário"
                >
                  <EditIcon fontSize="small" />
                </IconButton>

              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ListaUser;
