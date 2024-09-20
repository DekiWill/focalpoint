"use client";
import Dialog from "./components/Dialog";
import Header from "./components/Header";
import Todos from "./components/Todos";

export default function Home() {
  return (
    <>
      <Header />
      <Todos />
      <Dialog />
    </>
  );
}
