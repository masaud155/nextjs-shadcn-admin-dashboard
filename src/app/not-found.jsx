import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-semibold">Page not found</h1>
        <p className="mt-2 text-sm text-muted-foreground">The page you are looking for does not exist.</p>
        <Button asChild className="mt-4"><Link href="/dashboard">Back to dashboard</Link></Button>
      </div>
    </main>
  );
}
