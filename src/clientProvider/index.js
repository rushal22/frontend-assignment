"use client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

export default function QClientProvider({ children }) {
  const client = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    </div>
  );
}
