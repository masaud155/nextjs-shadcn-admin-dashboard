"use client";

import { Toaster as Sonner } from "sonner";

function Toaster(props) {
  return <Sonner richColors closeButton position="top-right" toastOptions={{ className: "border bg-background text-foreground" }} {...props} />;
}

export { Toaster };
