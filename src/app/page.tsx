"use client";
import { Suspense } from "react";
import Dialog from "./components/Dialog";
import Header from "./components/Header";
import Todos from "./components/Todos";

export default function Home() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Carregando...</div>}>
        <Todos />
      </Suspense>
      <Dialog />
    </>
  );
}
