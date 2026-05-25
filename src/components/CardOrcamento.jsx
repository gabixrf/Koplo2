import {
  Card,
  CardContent,
  Typography,
  LinearProgress,
} from "@mui/material";

import GraficoPizza from "./GraficoPizza";

export default function CardOrcamento() {
  return (
    <Card
      sx={{
        background: "#161616",
        color: "#fff",
        borderRadius: 4,
      }}
    >
      <CardContent>
        <GraficoPizza />

        <Typography sx={{ fontSize: 12, color: "#a0aab0", mt: 1 }}>
          ORÇAMENTO VARIÁVEL
        </Typography>

        <Typography sx={{ fontWeight: "bold" }}>
          R$ 1.500 / R$ 5.000
        </Typography>

        <LinearProgress
          variant="determinate"
          value={30}
          sx={{
            height: 8,
            borderRadius: 5,
            backgroundColor: "#232d2d",
            mt: 1,
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#47a899",
            },
          }}
        />
      </CardContent>
    </Card>
  );
}