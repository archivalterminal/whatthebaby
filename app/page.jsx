"use client";

import { useState } from "react";

export default function Home() {
  const [facePreview, setFacePreview] = useState(null);
  const [objectPreview, setObjectPreview] = useState(null);

  function handleFaceUpload(event) {
    const file = event.target.files[0];
    if (file) {
      setFacePreview(URL.createObjectURL(file));
    }
  }

  function handleObjectUpload(event) {
    const file = event.target.files[0];
    if (file) {
      setObjectPreview(URL.createObjectURL(file));
    }
  }

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
          maxWidth: "700px",
          padding: "30px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "64px", marginBottom: "10px" }}>
          WhatTheBaby
        </h1>

        <p style={{ color: "#aaa", marginBottom: "35px", fontSize: "20px" }}>
          Upload yourself. Upload anything.
          <br />
          Generate your cursed offspring.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              border: "1px solid #333",
              borderRadius: "20px",
              padding: "20px",
              background: "#111",
            }}
          >
            <p>Your Face</p>
            <input type="file" accept="image/*" onChange={handleFaceUpload} />

            {facePreview && (
              <img
                src={facePreview}
                alt="Face preview"
                style={{
                  marginTop: "15px",
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                  borderRadius: "14px",
                }}
              />
            )}
          </div>

          <div
            style={{
              border: "1px solid #333",
              borderRadius: "20px",
              padding: "20px",
              background: "#111",
            }}
          >
            <p>Your Object</p>
            <input type="file" accept="image/*" onChange={handleObjectUpload} />

            {objectPreview && (
              <img
                src={objectPreview}
                alt="Object preview"
                style={{
                  marginTop: "15px",
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                  borderRadius: "14px",
                }}
              />
            )}
          </div>
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
