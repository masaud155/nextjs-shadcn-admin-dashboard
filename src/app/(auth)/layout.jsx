export default function AuthLayout({ children }) {
  return (
    <main className="grid min-h-screen lg:grid-cols-[1fr_480px]">
      <section className="hidden bg-muted/40 p-10 lg:flex lg:flex-col lg:justify-between">
        <div className="flex items-center gap-3 font-semibold"><span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">NK</span> Dashboard Kit</div>
        <div>
          <h1 className="max-w-xl text-4xl font-semibold tracking-normal">A polished admin starter for serious SaaS interfaces.</h1>
          <p className="mt-4 max-w-lg text-muted-foreground">Clean architecture, reusable components, realistic data, and production-minded patterns without TypeScript.</p>
        </div>
      </section>
      <section className="flex min-h-screen items-center justify-center p-6">{children}</section>
    </main>
  );
}
