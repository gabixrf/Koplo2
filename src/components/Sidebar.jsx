import { useState } from "react";

import {
  Menu,
  ChevronLeft,
  PieChart,
  BarChart3,
  TrendingUpDown,
  Users,
  Bot,
  LogIn,
  UserPlus,
} from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  const menuItems = [
    {
      title: "Relatórios",
      icon: <PieChart size={20} />,
      active: true,
    },
    {
      title: "Contas",
      icon: <BarChart3 size={20} />,
    },
    {
      title: "Tendências",
      icon: <TrendingUpDown size={20} />,
    },
    {
      title: "Equipe",
      icon: <Users size={20} />,
    },
  ];

  return (
    <aside
      style={{
        width: open ? "250px" : "90px",
        flexShrink: 0,
        background: "#111111",
        transition: "0.3s ease",
        padding: "20px 14px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRight: "1px solid #232323",
      }}
    >
      {/* TOPO */}
      <div>
        {/* LOGO */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: open ? "space-between" : "center",
            marginBottom: "45px",
          }}
        >
          {open && (
            <h1
              style={{
                fontSize: "30px",
                margin: 0,
                fontWeight: "800",
                letterSpacing: "-1px",
              }}
            >
              Koplo
            </h1>
          )}

          <button
            onClick={() => setOpen(!open)}
            style={{
              background: "#1d1d1d",
              border: "1px solid #2a2a2a",
              color: "white",
              width: "42px",
              height: "42px",
              borderRadius: "14px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "0.2s",
            }}
          >
            {open ? <ChevronLeft /> : <Menu />}
          </button>
        </div>

        {/* MENU */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          {menuItems.map((item) => (
            <button
              key={item.title}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",

                padding: "15px",

                borderRadius: "16px",

                border: "none",

                cursor: "pointer",

                background: item.active ? "#d4af37" : "transparent",

                color: item.active ? "#000" : "#fff",

                transition: "0.25s ease",

                fontSize: "15px",
                fontWeight: "600",
              }}
              onMouseEnter={(e) => {
                if (!item.active) {
                  e.currentTarget.style.background = "#1d1d1d";
                }
              }}
              onMouseLeave={(e) => {
                if (!item.active) {
                  e.currentTarget.style.background = "transparent";
                }
              }}
            >
              {item.icon}

              {open && <span>{item.title}</span>}
            </button>
          ))}
        </div>
      </div>

      {/* RODAPÉ */}
      <div>
        {/* IA */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",

            padding: "16px",

            borderRadius: "18px",

            background:
              "linear-gradient(135deg, #1c1c1c, #151515)",

            border: "1px solid #262626",

            marginBottom: "20px",
          }}
        >
          <Bot size={22} color="#d4af37" />

          {open && (
            <div>
              <p
                style={{
                  margin: 0,
                  fontWeight: "700",
                }}
              >
                Mentor IA
              </p>

              <span
                style={{
                  fontSize: "13px",
                  color: "#8b8b8b",
                }}
              >
                Assistente financeiro
              </span>
            </div>
          )}
        </div>

        {/* LOGIN / CADASTRO */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: open ? "flex-start" : "center",

              gap: "12px",

              padding: "14px",

              borderRadius: "14px",

              border: "none",

              background: "#1d1d1d",

              color: "white",

              cursor: "pointer",

              transition: "0.2s",
            }}
          >
            <LogIn size={20} />

            {open && <span>Entrar</span>}
          </button>

          <button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: open ? "flex-start" : "center",

              gap: "12px",

              padding: "14px",

              borderRadius: "14px",

              border: "none",

              background: "#d4af37",

              color: "#000",

              fontWeight: "700",

              cursor: "pointer",

              transition: "0.2s",
            }}
          >
            <UserPlus size={20} />

            {open && <span>Criar Conta</span>}
          </button>
        </div>
      </div>
    </aside>
  );
}