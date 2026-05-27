import {
    Card,
    CardContent,
    Typography,
} from "@mui/material";

import GraficoArea from "./GraficoArea";

export default function CardGrafico() {
    return (
        <Card
            sx={{
                background: "#161616",
                color: "#fff",
                borderRadius: 4,
            }}
        >
            <CardContent>
                <Typography sx={{ fontSize: 12, color: "#a0aab0" }}>
                    HISTÓRICO DE DESPESAS
                </Typography>

                <GraficoArea />
            </CardContent>
        </Card>
    );
}
