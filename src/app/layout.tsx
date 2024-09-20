import type { Metadata } from "next";
import "./scss/index.scss";

export const metadata: Metadata = {
  title: "Focal Point - Lista de Tarefas",
  description:
    "Lista de tarefas desenvolvida por Focal Point para te ajudar a ter um dia mais organizado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-Br">
      <body>{children}</body>
    </html>
  );
}
