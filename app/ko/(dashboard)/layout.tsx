import LanguageToggle from '../../../components/LanguageToggle';
export default function DashboardLayout({children}:{children:React.ReactNode}){
  return (
    <section>
      <header className="sticky top-0 z-10 border bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
          <div className="font-semibold">Run with Jesus</div>
          <LanguageToggle />
        </div>
      </header>
      <main>{children}</main>
      <footer className="mt-16 border p-6 text-sm text-zinc-600">© Run with Jesus</footer>
    </section>
  );
}
