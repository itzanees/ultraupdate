import PageHero from "@/components/ui/PageHero";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Learn how Ultratek Arabia uses cookies and similar technologies to improve your experience on our website.",
  alternates: { canonical: "/cookie-policy" },
  robots: { index: false, follow: true },
};

export default function CookiePolicyPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        eyebrow="Legal"
        title={<>Cookie <span className="text-gradient">Policy</span></>}
        subtitle="Effective Date: October 27, 2026"
        backgroundImage="/about-construction.webp"
        backgroundAlt="Cookie Policy Background"
        height="sm"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Cookie Policy" },
        ]}
      />

      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto glass rounded-3xl p-8 md:p-12 border border-border">
            
            {/* 
              This script is required by CookieYes to automatically inject 
              the cookie audit table into the div below.
            */}
            <Script 
              id="cookieyes-audit-table" 
              src="https://cdn-cookieyes.com/client_data/23exxxxxxxxxxxxb51506/script.js" 
              strategy="afterInteractive"
            />

            <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-headings:font-black prose-p:text-slate-300 prose-a:text-cyan-400 hover:prose-a:text-cyan-300 prose-strong:text-white prose-li:text-slate-300">
              
              <div className="space-y-8">
                <p>
                  This Cookie Policy explains what cookies are, how we use them, the types of cookies we use (i.e., the information we collect using cookies and how that information is used), and how to manage your cookie settings.
                </p>

                <div>
                  <h2>What are cookies?</h2>
                  <p>
                    Cookies are small text files used to store small pieces of information. They are stored on your device when a website loads in your browser. These cookies help ensure that the website functions properly, enhance security, provide a better user experience, and analyse performance to identify what works and where improvements are needed.
                  </p>
                </div>

                <div>
                  <h2>How do we use cookies?</h2>
                  <p>
                    Like most online services, our website uses both first-party and third-party cookies for various purposes. First-party cookies are primarily necessary for the website to function properly and do not collect any personally identifiable data.
                  </p>
                  <p>
                    The third-party cookies used on our website primarily help us understand how the website performs, track how you interact with it, keep our services secure, deliver relevant advertisements, and enhance your overall user experience while improving the speed of your future interactions with our website.
                  </p>
                </div>

                <div>
                  <h2>Types of cookies we use</h2>
                  {/* CookieYes injects the audit table here automatically */}
                  <div className="cky-audit-table-element my-6 bg-[#050816]/50 rounded-xl p-4 border border-border"></div>
                </div>

                <div>
                  <h2>Manage cookie preferences</h2>
                  <p>
                    You can modify your cookie settings anytime by clicking the button below. This will allow you to revisit the cookie consent banner and update your preferences or withdraw your consent immediately.
                  </p>
                  
                  {/* Custom styled button to trigger CookieYes banner */}
                  <button 
                    className="cky-banner-element inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-bold hover:opacity-90 transition-opacity not-prose"
                  >
                    Consent Preferences
                  </button>

                  <p className="mt-8">
                    Additionally, different browsers offer various methods to block and delete cookies used by websites. You can adjust your browser settings to block or delete cookies. Below are links to support documents on how to manage and delete cookies in major web browsers.
                  </p>
                  
                  <ul>
                    <li><strong>Chrome:</strong> <a target="_blank" rel="noopener noreferrer" href="https://support.google.com/accounts/answer/32050">Google Support</a></li>
                    <li><strong>Safari:</strong> <a target="_blank" rel="noopener noreferrer" href="https://support.apple.com/en-in/guide/safari/sfri11471/mac">Apple Support</a></li>
                    <li><strong>Firefox:</strong> <a target="_blank" rel="noopener noreferrer" href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox">Mozilla Support</a></li>
                    <li><strong>Microsoft Edge:</strong> <a target="_blank" rel="noopener noreferrer" href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09">Microsoft Support</a></li>
                  </ul>
                  
                  <p className="mt-6">
                    If you are using a different web browser, please refer to its official support documentation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}