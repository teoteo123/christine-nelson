export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-white text-gray-900">
      <h1 className="text-4xl font-bold tracking-tight mb-4">Christine Nelson</h1>
      <p className="text-lg text-gray-600 max-w-md text-center mb-10">
        Writer, strategist, and creative consultant based in New York.
      </p>

      <section className="max-w-xl w-full space-y-8 mb-16">
        <div>
          <h2 className="text-xl font-semibold mb-2">About</h2>
          <p className="text-gray-600 leading-relaxed">
            Christine Nelson brings over a decade of experience in brand strategy
            and creative direction. She partners with organizations to craft
            compelling narratives and build lasting impact.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Work</h2>
          <ul className="text-gray-600 space-y-1">
            <li>→ Brand Strategy &amp; Positioning</li>
            <li>→ Content &amp; Editorial Direction</li>
            <li>→ Creative Consulting</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <p className="text-gray-600">
            <a href="mailto:hello@christinenelson.com" className="underline hover:text-gray-900">
              hello@christinenelson.com
            </a>
          </p>
        </div>
      </section>

      <footer className="text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Christine Nelson
      </footer>
    </main>
  );
}
