import {
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

export default function CardIA() {
  return (
    <Card
      sx={{
        background: "#161616",
        color: "#fff",
        borderRadius: 4,
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14, color: "#a0aab0" }}>
          MENTOR IA
        </Typography>

        <Typography sx={{ fontSize: 18, fontWeight: "bold", mt: 1 }}>
          Seu assistente financeiro
        </Typography>

        <Typography sx={{ fontSize: 13, color: "#a0aab0", mt: 1 }}>
          Analise seus gastos e receba recomendações inteligentes.
        </Typography>

        <Box
          sx={{
            mt: 2,
            padding: "10px",
            background: "#232d2d",
            borderRadius: 2,
            color: "#47a899",
            fontSize: 13,
          }}
        >
          💡 Dica: Você gastou menos com lazer esse mês.
        </Box>
      </CardContent>
    </Card>
  );
}