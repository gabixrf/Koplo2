import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

// Seus componentes de estrutura
import Sidebar from "../Componentes/Sidebar";
import Header from "../Componentes/Header";
import Menu from "../Componentes/Menu";
import Footer from "../Componentes/Footer";

// Seus blocos de gráficos e IA
import CardSaldo from "../Componentes/CardSaldo";
import CardOrcamento from "../Componentes/CardOrcamento";
import CardIA from "../Componentes/CardIA";
import CardGrafico from "../Componentes/CardGrafico";

// Seus componentes de usuários
import FomularioCadastro from "../Componentes/FomularioCadastro";
import ListaUser from "../Componentes/ListaUser";

export default function Dashboard({ usuarios, salvarUsuario, usuarioParaEditar, ativarEdicao }) {
    return (
        <div
            style={{
                display: "flex",
                background: "#0b0b0b",
                minHeight: "100vh",
                width: "100%",
                color: "white",
                overflow: "hidden",
            }}
        >
            {/* LADO ESQUERDO: Barra lateral fixa */}
            <Sidebar />

            {/* LADO DIREITO: Todo o conteúdo rolável do sistema */}
            <main
                style={{
                    flex: 1,
                    padding: "30px",
                    width: "100%",
                    overflowY: "auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: "50px",
                }}
            >
                {/* Topo do painel */}
                <div>
                    <Header />
                    <Menu />
                </div>

                {/* BLOCO 1: Grid de Gráficos e Saldos CORRIGIDO */}
                <Grid container spacing={3}>
                    
                    {/* 1. Saldo Atual (Ocupa 4 colunas das 12) */}
                    <Grid item xs={12} md={4}>
                        <Box sx={{ height: '100%', display: 'flex' }}>
                            <CardSaldo />
                        </Box>
                    </Grid>

                    {/* 2. Orçamento Variável (Ocupa 4 colunas das 12) */}
                    <Grid item xs={12} md={4}>
                        <Box sx={{ height: '100%', display: 'flex' }}>
                            <CardOrcamento />
                        </Box>
                    </Grid>

                    {/* 3. Mentor IA (Antes md={8}, mudado para md={4} para fechar a linha perfeitamente) */}
                    <Grid item xs={12} md={4}>
                        <Box sx={{ height: '100%', display: 'flex' }}>
                            <CardIA />
                        </Box>
                    </Grid>

                    {/* 4. Histórico de Despesas / Gráfico de Linha (Ocupa a linha de baixo inteira) */}
                    <Grid item xs={12} md={12}>
                        <Box sx={{ width: '100%' }}>
                            <CardGrafico />
                        </Box>
                    </Grid>
                </Grid>

                {/* BLOCO 2: Formulário e Lista LADO A LADO */}
                <Grid container spacing={4} alignItems="flex-start">
                    
                    {/* Esquerda: Formulário (ocupa 5 colunas no desktop) */}
                    <Grid item xs={12} lg={5}>
                        <Box>
                            <FomularioCadastro
                                adicionarEmail={salvarUsuario}
                                usuarioParaEditar={usuarioParaEditar}
                            />
                        </Box>
                    </Grid>

                    {/* Direita: Lista de Usuários (ocupa 7 colunas no desktop) */}
                    <Grid item xs={12} lg={7}>
                        <Box sx={{ width: "100%" }}>
                            <ListaUser 
                                email={usuarios} 
                                aoEditar={ativarEdicao} 
                            />
                        </Box>
                    </Grid>

                </Grid>

                {/* BLOCO 3: Rodapé */}
                <Footer />
            </main>
        </div>
    );
}
