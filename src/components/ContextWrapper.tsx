"use client";

import { VamikaProvider } from "@/context/VamikaContext";

export default function ContextWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <VamikaProvider>{children}</VamikaProvider>;
}