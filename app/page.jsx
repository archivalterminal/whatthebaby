export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#050505",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      padding: "24px"
    }}>
      <div>
        <h1 style={{ fontSize: "56px", marginBottom: "16px" }}>
          WhatTheBaby
        </h1>

        <p style={{ fontSize: "22px", color: "#cccccc", marginBottom: "32px" }}>
          Upload yourself. Upload anything. Generate your cursed offspring.
        </p>

        <button style={{
          background: "white",
          color: "black",
          border: "none",
          borderRadius: "999px",
          padding: "16px 28px",
          fontSize: "18px",
          fontWeight: "bold",
          cursor: "pointer"
        }}>
          MAKE OUR CHILD
        </button>
      </div>
    </main>
  );
}
