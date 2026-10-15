import PageHero from "@/components/ui/PageHero";

export default function TestHeroPage() {
  return (
    <div className="min-h-screen bg-[#050816]">
      <PageHero
        eyebrow="Test Page"
        title={
          <>
            Hero Component <br />
            <span className="text-gradient">Live Preview</span>
          </>
        }
        subtitle="If you can read this with a clean background image behind it, the component works."
        backgroundImage="/about-construction.webp"
        backgroundAlt="Test background"
        height="md"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Test", href: "/test-hero" },
          { label: "Preview" },
        ]}
        ctas={[
          { label: "Primary Button", href: "/contact" },
          { label: "Ghost Button", href: "/about", variant: "ghost" },
        ]}
      />

      <section className="py-24 text-center text-slate-400">
        <p>Content below the hero</p>
      </section>
    </div>
  );
}