export const metadata = {
  title: "WhatTheBaby",
  description: "Upload yourself. Upload anything. Generate your cursed offspring."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
