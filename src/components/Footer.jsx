import {
    Box,
    Container,
    Typography,
    Link,
    IconButton,
    Grid,
    Button
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import AppleIcon from "@mui/icons-material/Apple";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const sections = [
    {
        title: "Sobre a empresa",
        links: ["Sobre nós", "Trabalhe conosco", "Sustentabilidade", "Imprensa"],
    },
    {
        title: "Fale conosco",
        links: ["Central de Atendimento", "Ouvidoria", "Telefones", "Segurança"],
    },
];

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                bgcolor: "#1d1d1d",
                color: "#fff",
                pt: 8,
                pb: 4,
                mt: 10,
                width: "100%",
            }}
        >
            {/* CORREÇÃO AQUI: 
        Caso precise empurrar o conteúdo para a direita por conta de uma Sidebar, 
        use o 'pl' (paddingLeft) apenas no desktop. No mobile (xs) ele fica zerado (0) 
        para manter tudo perfeitamente no centro.
      */}
            <Container
                maxWidth="xl"
                sx={{
                    pl: { xs: 2, md: 10 },
                    pr: { xs: 2, md: 2 }
                }}
            >

                {/* GRID GERAL REORGANIZADO */}
                <Grid
                    container
                    spacing={8}
                    justifyContent="center"
                    alignItems="flex-start"
                // Removido o ml daqui para evitar bugs visuais e vazamento de tela
                >

                    {/* As 3 colunas de textos iteradas */}
                    {sections.map((section) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={2.2}
                            key={section.title}
                            sx={{ textAlign: { xs: "center", sm: "left" } }}
                        >
                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, fontSize: "1.2rem" }}>
                                {section.title}
                            </Typography>

                            {section.links.map((item) => (
                                <Link
                                    href="#"
                                    key={item}
                                    underline="none"
                                    color="inherit"
                                    sx={{
                                        display: "block",
                                        mb: 1.8,
                                        fontSize: "0.95rem",
                                        color: "#d9d9d9",
                                        transition: "0.3s",
                                        "&:hover": {
                                            color: "#fff",
                                            transform: { xs: "none", sm: "translateX(3px)" },
                                        },
                                    }}
                                >
                                    {item}
                                </Link>
                            ))}
                        </Grid>
                    ))}

                    {/* COLUNA 4: Apenas as Redes Sociais */}
                    <Grid item xs={12} sm={6} md={2.4} sx={{ textAlign: { xs: "center", sm: "left" } }}>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, fontSize: "1.2rem" }}>
                            Redes sociais
                        </Typography>
                        <Box sx={{ display: "flex", gap: 1, justifyContent: { xs: "center", sm: "flex-start" } }}>
                            <IconButton sx={iconStyle}><FacebookIcon /></IconButton>
                            <IconButton sx={iconStyle}><InstagramIcon /></IconButton>
                            <IconButton sx={iconStyle}><LinkedInIcon /></IconButton>
                            <IconButton sx={iconStyle}><XIcon /></IconButton>
                            <IconButton sx={iconStyle}><YouTubeIcon /></IconButton>
                        </Box>
                    </Grid>

                    {/* COLUNA 5: Exclusiva para os Botões de Download */}
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={3}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: { xs: "center", sm: "flex-start" }
                        }}
                    >
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, fontSize: "1.2rem", textAlign: { xs: "center", sm: "left" } }}>
                            Leve o Koplo com você
                        </Typography>

                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, maxWidth: "200px", width: "100%" }}>
                            <Button
                                variant="contained"
                                component="a"
                                href="#"
                                target="_blank"
                                endIcon={<AppleIcon sx={{ fontSize: "1.8rem !important" }} />}
                                sx={estiloBotao}
                            >
                                <Box sx={{ textAlign: "left", width: "100%" }}>
                                    <Typography variant="caption" sx={{ display: "block", color: "#999", textTransform: "none", fontSize: "0.7rem", lineHeight: 1 }}>
                                        Baixar na
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontWeight: "bold", textTransform: "none", fontSize: "0.9rem", lineHeight: 1.2 }}>
                                        Apple Store
                                    </Typography>
                                </Box>
                            </Button>

                            <Button
                                variant="contained"
                                component="a"
                                href="#"
                                target="_blank"
                                endIcon={<PlayArrowIcon sx={{ color: "#00e676", fontSize: "1.8rem !important" }} />}
                                sx={estiloBotao}
                            >
                                <Box sx={{ textAlign: "left", width: "100%" }}>
                                    <Typography variant="caption" sx={{ display: "block", color: "#999", textTransform: "none", fontSize: "0.7rem", lineHeight: 1 }}>
                                        Baixar na
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontWeight: "bold", textTransform: "none", fontSize: "0.9rem", lineHeight: 1.2 }}>
                                        Google Store
                                    </Typography>
                                </Box>
                            </Button>
                        </Box>
                    </Grid>

                </Grid>

                {/* Linha Divisória */}
                <Box sx={{ borderTop: "1px solid #444", my: 5 }} />

                {/* Bottom */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexDirection: { xs: "column", sm: "row" },
                        gap: 3,
                        textAlign: { xs: "center", sm: "left" }
                    }}
                >
                    <Box>
                        <Typography variant="body2">© Koplo - Todos os direitos reservados</Typography>
                        <Typography variant="body2" sx={{ mt: 1, color: "#bdbdbd" }}>Montes Claros - MG</Typography>
                    </Box>

                    <Box sx={{ display: "flex", gap: 3, justifyContent: { xs: "center", sm: "flex-start" } }}>
                        <Link href="#" color="inherit" underline="hover">Privacidade</Link>
                        <Link href="#" color="inherit" underline="hover">Segurança</Link>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

const iconStyle = {
    border: "1px solid #666",
    color: "#fff",
    transition: "0.3s",
    "&:hover": { backgroundColor: "#fff", color: "#000", transform: "scale(1.1)" },
};

const estiloBotao = {
    backgroundColor: "#181818",
    color: "#fff",
    borderRadius: "10px",
    padding: "8px 16px",
    border: "1px solid #333",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    boxShadow: "none",
    transition: "0.2s",
    "&:hover": { backgroundColor: "#222", borderColor: "#555", boxShadow: "none" },
};
