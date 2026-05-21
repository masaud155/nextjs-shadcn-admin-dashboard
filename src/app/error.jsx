"use client";

import { Button } from "@/components/ui/button";

export default function Error({ error, reset }) {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-semibold">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error?.message || "The dashboard could not be rendered."}</p>
        <Button className="mt-4" onClick={() => reset()}>Try again</Button>
      </div>
    </main>
  );
}
