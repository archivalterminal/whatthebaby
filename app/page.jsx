export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          padding: "30px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "64px", marginBottom: "10px" }}>
          WhatTheBaby
        </h1>

        <p
          style={{
            color: "#aaa",
            marginBottom: "40px",
            fontSize: "20px",
          }}
        >
          Upload yourself. Upload anything.
          <br />
          Generate your cursed offspring.
        </p>

        <div style={{ marginBottom: "20px" }}>
          <p>Your Face</p>
          <input type="file" />
        </div>

        <div style={{ marginBottom: "30px" }}>
          <p>Your Object</p>
          <input type="file" />
        </div>

        <button
          style={{
            background: "white",
            color: "black",
            border: "none",
            padding: "18px 32px",
            borderRadius: "999px",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          MAKE OUR CHILD
        </button>
      </div>
    </main>
  );
}
