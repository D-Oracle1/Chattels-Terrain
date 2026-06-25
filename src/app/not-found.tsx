import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-navy-950 px-6 text-center">
      <div className="bg-grid absolute inset-0 opacity-20" aria-hidden />
      <p className="font-heading text-8xl text-gold-300">404</p>
      <h1 className="mt-4 font-heading text-3xl text-white">Page not found</h1>
      <p className="mt-3 max-w-md text-light-grey/60">
        The page you are looking for may have moved or no longer exists.
      </p>
      <Button href="/" variant="gold" size="lg" className="mt-8">
        Return home
      </Button>
    </section>
  );
}
