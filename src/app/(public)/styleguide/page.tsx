export default function StyleGuidePage() {
  return (
    <div className="min-h-screen p-12 space-y-12">
      <section>
        <h1 className="text-6xl font-black text-foreground mb-4">
          Typography Test
        </h1>
        <p className="text-gradient text-5xl font-black">
          Gradient Display Heading
        </p>
        <p className="text-muted-foreground text-lg mt-4">
          Body text — this is how paragraphs will look throughout the site.
        </p>
      </section>

      <section className="flex gap-4">
        <button className="px-8 py-4 rounded-full bg-linear-to-r from-cyan-500 to-indigo-500 text-foreground font-bold glow-cyan">
          Primary Button
        </button>
        <button className="px-8 py-4 rounded-full glass text-foreground font-bold">
          Secondary Button
        </button>
      </section>

      <section className="grid grid-cols-3 gap-6">
        <div className="glass rounded-3xl p-8 neon-border">
          <h3 className="text-foreground text-2xl font-bold mb-2">Glass Card</h3>
          <p className="text-muted-foreground">
            Content inside a glass panel with neon border on hover.
          </p>
        </div>
        <div className="glass rounded-3xl p-8 neon-border">
          <h3 className="text-foreground text-2xl font-bold mb-2">Glass Card</h3>
          <p className="text-muted-foreground">Same styling, reused.</p>
        </div>
        <div className="glass rounded-3xl p-8 neon-border">
          <h3 className="text-foreground text-2xl font-bold mb-2">Glass Card</h3>
          <p className="text-muted-foreground">Consistent tokens.</p>
        </div>
      </section>
    </div>
  );
}