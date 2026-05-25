export default function MenuButton({ icon, title, active }) {
  return (
    <button
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",

        padding: "14px 22px",

        background: active ? "#fff" : "#171717",

        color: active ? "#000" : "#fff",

        border: "1px solid transparent",

        borderRadius: "999px",

        cursor: "pointer",

        transition: "0.25s ease",

        fontSize: "15px",
        fontWeight: "600",
      }}
      onMouseEnter={(e) => {
        if (!active) {
          e.currentTarget.style.background = "#222";
          e.currentTarget.style.transform = "translateY(-2px)";
        }
      }}
      onMouseLeave={(e) => {
        if (!active) {
          e.currentTarget.style.background = "#171717";
          e.currentTarget.style.transform = "translateY(0px)";
        }
      }}
    >
      {icon}
      {title}
    </button>
  );
}