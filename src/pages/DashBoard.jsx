import Grid from "@mui/material/Grid";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Menu from "../components/Menu";

import CardSaldo from "../components/CardSaldo";
import CardOrcamento from "../components/CardOrcamento";
import CardIA from "../components/CardIA";
import CardGrafico from "../components/CardGrafico";

export default function Dashboard() {
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
      <Sidebar />

      <main
        style={{
          flex: 1,
          padding: "30px",
          width: "100%",
          overflowY: "auto",
        }}
      >
        <Header />
        <Menu />

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <CardSaldo />
          </Grid>

          <Grid item xs={12} md={4}>
            <CardOrcamento />
          </Grid>

          <Grid item xs={12} md={8}>
            <CardIA />
          </Grid>

          <Grid item xs={12} md={4}>
            <CardGrafico />
          </Grid>
        </Grid>
      </main>
    </div>
  );
}