import {
  BarChart3,
  TrendingUpDown,
  CalendarDays,
  ClipboardList,
  PieChart,
} from "lucide-react";

import MenuButton from "./MenuButton";

export default function Menu() {
  const items = [
    {
      nome: "Visão Geral",
      icone: <BarChart3 size={18} />,
      active: true,
    },
    {
      nome: "Transações",
      icone: <TrendingUpDown size={18} />,
    },
    {
      nome: "Planejamento",
      icone: <CalendarDays size={18} />,
    },
    {
      nome: "Assinaturas",
      icone: <ClipboardList size={18} />,
    },
    {
      nome: "Relatórios",
      icone: <PieChart size={18} />,
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        marginBottom: "35px",
        flexWrap: "wrap",
      }}
    >
      {items.map((item) => (
        <MenuButton
          key={item.nome}
          title={item.nome}
          icon={item.icone}
          active={item.active}
        />
      ))}
    </div>
  );
}