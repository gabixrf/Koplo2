import { Plus } from "lucide-react";

export default function Header() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "30px",
      }}
    >
   
      <button
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",

          background: "#d4af37",
          color: "black",

          border: "none",
          borderRadius: "999px",

          padding: "14px 22px",

          fontSize: "15px",
          fontWeight: "700",

          cursor: "pointer",
        }}
      >
        <Plus size={20} />
        Novo lançamento rápido
      </button>
    </div>
  );
}
