import PageHero from "@/components/ui/PageHero";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Ultratek Arabia. Learn how we collect, use, and protect your personal information when you visit our website.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true }, 
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        eyebrow="Legal"
        title={<>Privacy <span className="text-gradient">Policy</span></>}
        subtitle="Effective Date: October 27, 2026"
        backgroundImage="/about-construction.webp"
        backgroundAlt="Privacy Policy Background"
        height="sm"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />

      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/4 -right-40 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto glass rounded-3xl p-8 md:p-12 border border-border">
            <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-headings:font-black prose-p:text-slate-300 prose-a:text-cyan-400 hover:prose-a:text-cyan-300 prose-strong:text-white prose-li:text-slate-300">
              
              <div className="space-y-8">
                {/* Intro */}
                <div>
                  <p>
                    This privacy policy for Ultratek Arabia Co. (<strong>"We"</strong>, <strong>"Us"</strong> or <strong>"Our"</strong>) tells you how we may collect, use and share your information when you visit our website <a href="https://www.ultratekcs.com" target="_blank" rel="noopener noreferrer">www.ultratekcs.com</a>.
                  </p>
                  <p>
                    We appreciate your decision to use our website and to trust us with your valuable personal information. In this document, we seek to explain in the clearest terms possible our privacy practices. We strongly encourage you to read this document carefully before using the website. If there are any terms or conditions in this document that you do not agree with, please do not use the website, or discontinue use immediately. By using the website, you are accepting and consenting to the practices described in this Privacy Policy.
                  </p>
                </div>

                {/* Section 1 */}
                <div>
                  <h2>What information do we collect about you?</h2>
                  <p>When we collect information, we do so to ensure that you get to experience our service seamlessly. For that, we collect the following information. Some are your personal information and some are your sensitive personal information.</p>
                  <p>The personal information that we collect about you are the following:</p>
                  <ul>
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number, that customer enters</li>
                  </ul>
                </div>

                {/* Section 2 */}
                <div>
                  <h2>How do we collect such information?</h2>
                  <p>We may use any of the following three ways to get information about you.</p>
                  <ol type="a">
                    <li>The information that you give us</li>
                    <li>The information that we automatically collect from you</li>
                    <li>Information that we collect from third parties</li>
                  </ol>
                  <p>Before going into the reasons why we collect the information that we do, we want you to understand what the above three terms mean.</p>
                  <p><em>a. The information that you give us</em></p>
                  <p>When you sign up for an account to use our service/product we will ask you certain questions like your name or email address. These are the information that you give us. This may not be limited to what we have mentioned and can change according to the nature of the service/product that we provide.</p>
                  <p><em>b. The information that we automatically collect from you</em></p>
                  <p>When you access our service from a device, we may automatically collect information from your device, such as through the use of cookies. You will know more about automatic collection of personal information in the next section.</p>
                  <p><em>c. Information that we collect from third parties</em></p>
                  <p>These third parties can be data aggregators, online directories, data marketplaces or exchanges, etc from where we may collect information about you.</p>
                </div>

                {/* Section 3 - UPDATED COOKIES SECTION */}
                <div>
                  <h2>Cookies and similar technologies</h2>
                  <p>Cookies are small packets of information that are placed on your device, so that we can retrieve the information about you, such as your login information, your choices on our websites and other information.</p>
                  <p>
                    For more information about cookies and similar technologies, please visit our{" "}
                    <Link href="/cookie-policy" className="font-bold underline decoration-cyan-400/30 hover:decoration-cyan-400 transition-colors">
                      Cookie Policy
                    </Link>.
                  </p>
                </div>

                {/* Section 4 */}
                <div>
                    <h2>Do Not Track (DNT) Requests</h2>
                    <p>
                        "Do Not Track" (DNT) is a privacy preference that you can set in certain web browsers. It sends a signal to websites asking them not to track you. 
                    </p>
                    <p>
                        Because there is currently no industry or legal standard for how companies should interpret DNT signals, our website does not currently respond to or alter its practices based on DNT headers. 
                    </p>
                    <p>
                        However, we do respect your privacy choices. We manage all tracking and analytics (such as Google Analytics) through our Cookie Consent banner. You can restrict all non-essential tracking by clicking the <strong>"Consent Preferences"</strong> button on our <strong><a href="/cookie-policy">Cookie Policy</a></strong> page.
                    </p>
                </div>

                {/* Section 5 */}
                <div>
                  <h2>Why do we collect information about you?</h2>
                  <p>We collect information about you for a variety of reasons. It helps us, among other things, to serve you better. The following are the ways in which we use the information that we collect about you.</p>
                  <ul>
                    <li>To provide and maintain service</li>
                    <li>To send marketing and promotional communications</li>
                    <li>To evaluate and improve our products/services</li>
                    <li>To contact the user</li>
                  </ul>
                </div>

                {/* Section 6 */}
                <div>
                  <h2>How long do we retain your information?</h2>
                  <p>We will only keep your personal information for 6 months, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice requires us to retain your personal information for longer than the period during which users have an account with us.</p>
                  <p>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymise such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>
                </div>

                {/* Section 7 */}
                <div>
                  <h2>Sale/sharing of information</h2>
                  <p>We do not sell or share the information we collect from our users.</p>
                </div>

                {/* Section 8 */}
                <div>
                  <h2>Privacy of children</h2>
                  <p>We do not knowingly provide our services to children. If you are a parent or legal guardian and believe that your child has provided us with information without your consent, please contact us. Upon verification that we have collected such information without parental consent, we will remove the information from our database.</p>
                </div>

                {/* Section 9 */}
                <div>
                  <h2>Security of your personal information</h2>
                  <p>We take reasonable measures to ensure that the information we collect from you is stored securely and protected to the best extent possible. However, no method of internet transmission or digital storage is completely secure, and we cannot guarantee absolute security. While we use commercially reasonable and appropriate security measures to protect your information, we cannot promise that it will be 100% secure.</p>
                </div>

                {/* Section 10 */}
                <div>
                  <h2>Links to other websites or apps</h2>
                  <p>On our website, we may provide links to external websites, apps, or services. These are not operated by us and therefore are not governed by our Privacy Policy or practices. We strongly recommend that you review the privacy policies of such websites or services before engaging with them to ensure that you do not provide personal information that you do not wish to share.</p>
                </div>

                {/* Section 11 */}
                <div>
                  <h2>Changes to this privacy policy</h2>
                  <p>We may update this Privacy Policy from time to time to reflect changes in the law or our privacy practices. We recommend that you review this privacy policy periodically to ensure it remains in line with your expectations.</p>
                  <p>The privacy policy will be effective from the date it is posted on this page.</p>
                </div>

                {/* Contact */}
                <div>
                  <h2>Contact us</h2>
                  <p>For any questions or concerns regarding your privacy, or to exercise any of your rights, you may contact us using the following details:</p>
                  <p><strong>Address:</strong> AL BAGHDADIYAH, Jeddah, 22235, K.S.A</p>
                  <p><strong>Email address:</strong> <a href="mailto:info@ultratekcs.com">info@ultratekcs.com</a></p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}