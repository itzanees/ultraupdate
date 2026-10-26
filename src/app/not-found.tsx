import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#071521] px-6 py-16 text-white">
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#8ddcff 1px, transparent 1px), linear-gradient(90deg, #8ddcff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[120px]"
      />

      <section className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Left: Message */}
        <div className="order-2 lg:order-1">
          {/* Brand */}
          <Link href="/" className="text-blue-400 hover:text-blue-300">

            <span className="flex h-11 w-11 items-center justify-center rounded-xl p-2 border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
              {/* <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path
                  d="M12 2v20M4 7l16 10M4 17 20 7M8 4l4 2 4-2M8 20l4-2 4 2M3 11l1 4 4 2M21 13l-1-4-4-2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg> */}
              <Image
                          src="/favicon.ico"
                          alt="Ultratek Arabia"
                          width={160}
                          height={48}
                          style={{ width: "auto", height: "40px" }}
                          className="h-10 w-auto object-contain brightness-0 invert"
                          priority
                        />
            </span>

            <span className="text-lg font-bold tracking-[0.16em] text-white">
              Ultratek Arabia Co.
              <span className="mt-0.5 block text-[10px] font-medium tracking-[0.3em] text-cyan-300">
                COOLING AND AIR-CONDITIONING COMPANY
              </span>
            </span>
          </Link>

          {/* Error label */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-cyan-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Error 404 · Page Not Found
            </span>
          </div>

          {/* Headline */}
          <h1 className="max-w-xl text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl xl:text-7xl">
            Looks Like
            <br />
            We&apos;ve Hit a
            <br />
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Cold Spot.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-md text-base leading-7 text-slate-400 sm:text-lg">
            Even the best-engineered cold rooms have their limits.
            Unfortunately, this page couldn&apos;t be found. Let&apos;s get
            you back on the right track.
          </p>

          {/* Actions */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-cyan-300">
              Back to Home
            </Link>
          </div>

          {/* Quick links */}
          <div className="mt-12 border-t border-white/10 pt-7">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Explore Our Solutions
            </p>

            <nav
              aria-label="Quick links"
              className="flex flex-wrap gap-x-6 gap-y-3"
            >
              <Link href="/services" className="text-sm text-slate-300 transition hover:text-cyan-300"
              >
                Our Services
              </Link>

              {/* <Link
                href="/projects"
                className="text-sm text-slate-300 transition hover:text-cyan-300"
              >
                Our Projects
              </Link> */}

              <Link
                href="/about"
                className="text-sm text-slate-300 transition hover:text-cyan-300"
              >
                About Us
              </Link>

              <Link
                href="/contact"
                className="text-sm text-slate-300 transition hover:text-cyan-300"
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>

        {/* Right: Industrial cold-room illustration */}
        <div className="order-1 lg:order-2">
          <div className="relative mx-auto w-full max-w-[500px]">
            {/* Decorative technical label */}
            <div className="absolute -right-2 top-0 z-20 rounded-md border border-cyan-300/20 bg-[#0c202e]/90 px-4 py-3 backdrop-blur sm:-right-5">
              <p className="text-[9px] uppercase tracking-[0.25em] text-slate-500">
                System Status
              </p>
              <div className="mt-1.5 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.8)]" />
                <span className="text-xs font-semibold text-cyan-200">
                  Page Not Found
                </span>
              </div>
            </div>

            {/* Main illustration panel */}
            <div className="relative overflow-hidden rounded-2xl border border-cyan-300/15 bg-gradient-to-br from-[#102a3b] to-[#081722] p-5 shadow-2xl shadow-black/30 sm:p-8">
              {/* Engineering dimensions */}
              <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-slate-500">
                  Cold Room / CR-404
                </span>
                <span className="font-mono text-xs text-cyan-300">
                  ERR_404
                </span>
              </div>

              {/* Cold-room door */}
              <div className="relative mx-auto max-w-[340px]">
                <div className="absolute -inset-4 rounded-2xl border border-dashed border-cyan-300/10" />

                <div className="relative overflow-hidden rounded-xl border-2 border-slate-500/40 bg-gradient-to-br from-slate-400 via-slate-200 to-slate-500 p-2 shadow-[0_20px_70px_rgba(0,0,0,0.5)]">
                  {/* Insulated door frame */}
                  <div className="relative overflow-hidden border border-slate-500/60 bg-gradient-to-br from-[#e8f5fa] via-[#b7d2e0] to-[#7396aa]">
                    {/* Panel grooves */}
                    <div className="absolute inset-0 flex flex-col justify-evenly opacity-40">
                      <div className="h-px bg-slate-600" />
                      <div className="h-px bg-white" />
                      <div className="h-px bg-slate-600" />
                      <div className="h-px bg-white" />
                      <div className="h-px bg-slate-600" />
                    </div>

                    {/* Error number */}
                    <div className="relative flex min-h-[290px] flex-col items-center justify-center px-3 py-8 sm:min-h-[330px]">
                      <span className="font-mono text-[100px] font-black leading-none tracking-[-0.1em] text-[#102b3b] drop-shadow-[0_3px_0_rgba(255,255,255,0.5)] sm:text-[124px]">
                        404
                      </span>

                      <div className="mt-4 flex items-center gap-2 rounded-full border border-slate-600/20 bg-white/60 px-4 py-2 backdrop-blur-sm">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="h-4 w-4 text-[#24546b]"
                          aria-hidden="true"
                        >
                          <path
                            d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9M8.5 5.5l3.5 2 3.5-2M8.5 18.5l3.5-2 3.5 2"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>

                        <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#102b3b]">
                          Lost in the Cold
                        </span>
                      </div>
                    </div>

                    {/* Door handle */}
                    <div className="absolute right-3 top-1/2 h-16 w-3 -translate-y-1/2 rounded-full border border-slate-600/50 bg-gradient-to-r from-slate-500 via-white to-slate-500 shadow-md">
                      <div className="absolute left-1/2 top-1/2 h-8 w-px -translate-x-1/2 -translate-y-1/2 bg-slate-500/50" />
                    </div>

                    {/* Frosted corner effect */}
                    <div
                      aria-hidden="true"
                      className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-white/40 blur-3xl"
                    />
                  </div>
                </div>

                {/* Door threshold */}
                <div className="mx-[-12px] mt-2 h-3 rounded-sm border border-slate-500/40 bg-gradient-to-b from-slate-400 to-slate-700" />
              </div>

              {/* Technical specifications */}
              <div className="mt-8 grid grid-cols-3 divide-x divide-white/10 border-t border-white/10 pt-5">
                <div className="px-2 text-center">
                  <p className="text-[9px] uppercase tracking-[0.15em] text-slate-500">
                    Precision
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-200">
                    Engineered
                  </p>
                </div>

                <div className="px-2 text-center">
                  <p className="text-[9px] uppercase tracking-[0.15em] text-slate-500">
                    Insulation
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-200">
                    High Performance
                  </p>
                </div>

                <div className="px-2 text-center">
                  <p className="text-[9px] uppercase tracking-[0.15em] text-slate-500">
                    Reliability
                  </p>
                  <p className="mt-2 text-sm font-semibold text-cyan-300">
                    Built to Last
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom floating accent */}
            <div className="absolute -bottom-4 -left-4 hidden h-16 w-16 rounded-xl border border-cyan-300/20 bg-cyan-400/5 backdrop-blur-sm sm:block">
              <div className="flex h-full items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-7 w-7 text-cyan-300"
                  aria-hidden="true"
                >
                  <path
                    d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9M8.5 5.5l3.5 2 3.5-2M8.5 18.5l3.5-2 3.5 2"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-5 -right-6 hidden h-16 w-16 rounded-xl border border-cyan-300/20 bg-cyan-400/5 backdrop-blur-sm sm:block">
              <div className="flex h-full items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-7 w-7 text-cyan-300"
                  aria-hidden="true"
                >
                  <path
                    d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9M8.5 5.5l3.5 2 3.5-2M8.5 18.5l3.5-2 3.5 2"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      
<footer className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/5 px-6 py-5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Ultratek Arabia Co. All rights reserved.
          </p>

          <p className="text-xs text-slate-500">
            Engineering the Infrastructure of Tomorrow.
          </p>
        </div>
      </footer>
    </main>
  );
};