export function GET() {
  return Response.json({ status: "ok", name: "next-shadcn-dashboard-kit", timestamp: new Date().toISOString() });
}
