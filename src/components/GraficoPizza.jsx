import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const dadosPizza = [
  { name: "Gasto", value: 1500 },
  { name: "Disponível", value: 3500 },
];

const CORES = ["#47a899", "#232d2d"];

export default function GraficoPizza() {
  return (
    <div style={{ width: "100%", height: 140 }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={dadosPizza}
            cx="50%"
            cy="50%"
            innerRadius={35}
            outerRadius={55}
            dataKey="value"
          >
            {dadosPizza.map((_, index) => (
              <Cell key={index} fill={CORES[index]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}