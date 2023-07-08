import "../globals.css";

export const metadata = {
  title: "Sanja Stosic | Portfolio",
  description: "My portfolio site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
