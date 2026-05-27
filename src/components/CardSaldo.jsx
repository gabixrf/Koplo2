import { Card, CardContent, Typography } from "@mui/material";

export default function CardSaldo() {
  return (
    <Card
      sx={{
        background: "#161616",
        color: "#fff",
        borderRadius: 4,
      }}
    >
      <CardContent>
        <Typography sx={{ color: "#a0aab0", fontSize: 13 }}>
          SALDO ATUAL
        </Typography>

        <Typography sx={{ fontSize: 26, fontWeight: "bold" }}>
          R$ 8.240
        </Typography>

        <Typography sx={{ color: "#47a899", fontSize: 13 }}>
          +12% esse mês
        </Typography>
      </CardContent>
    </Card>
  );
}
