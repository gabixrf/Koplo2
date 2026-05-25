import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const dados = [
  { mes: "Abr", despesas: 120000 },
  { mes: "Mai", despesas: 215700 },
  { mes: "Jun", despesas: 150000 },
  { mes: "Jul", despesas: 260000 },
];

export default function GraficoArea() {
  return (
    <div style={{ width: "100%", height: 180 }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={dados}>
          <XAxis dataKey="mes" stroke="#6b7a80" />
          <YAxis stroke="#6b7a80" />
          <Tooltip />

          <Area
            type="monotone"
            dataKey="despesas"
            stroke="#47a899"
            fill="#2d7a6e"
            fillOpacity={0.3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}