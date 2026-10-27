import PageHero from "@/components/ui/PageHero";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and Conditions for Ultratek Arabia. Please read our terms of service regarding the use of our website and B2B industrial services.",
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        eyebrow="Legal"
        title={<>Terms &amp; <span className="text-gradient">Conditions</span></>}
        subtitle="Effective Date: October 27, 2026"
        backgroundImage="/about-construction.webp"
        backgroundAlt="Terms and Conditions Background"
        height="sm"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms and Conditions" },
        ]}
      />

      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/4 -right-40 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto glass rounded-3xl p-8 md:p-12 border border-border">
            <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-headings:font-black prose-p:text-slate-300 prose-a:text-cyan-400 hover:prose-a:text-cyan-300 prose-strong:text-white prose-li:text-slate-300">
              
              <div className="space-y-8">
                <p>
                  Your access to, browsing, use, review or availing of any of the services or products offered by ULTRATEK ARABIA COOLING AND AIR-CONDITIONING COMPANY, of AL BAGHDADIYAH, Jeddah, 22235, K.S.A, Tax ID: 311347307300003 on the website <a href="https://ultratekcs.com/" target="_blank" rel="noopener noreferrer">https://ultratekcs.com/</a> is subject to the following Terms and Conditions, as well as all the applicable laws. By accessing, browsing, using, reviewing or availing any of the services or products offered by this website you accept these Terms and Conditions without limitation or qualification. If, at any time, you no longer find the Terms and Conditions or any part of it acceptable, immediately terminate your use of this website.
                </p>

                <div>
                  <h2>1. Our Services</h2>
                  <p>
                    Thank you for choosing ULTRATEK ARABIA COOLING AND AIR-CONDITIONING COMPANY. We are committed to providing you with Ultratek Arabia Co. is a leading multi-disciplinary industrial contractor based in Saudi Arabia. We provide turnkey B2B construction, engineering, and installation services for the cold chain and logistics sectors.
                  </p>
                  <p>
                    Our core services include the design and construction of cold storage facilities, structural and civil works, warehouse cooling systems, and the installation of sandwich panels. We also provide industrial doors, loading bay equipment, racking systems, and fire fighting systems for warehouses.
                  </p>
                  <p>
                    Our website provides information about our services, allows potential B2B clients to submit project enquiries via a contact form, and provides access to a private, password-protected portal for internal administrators to manage website content. We do not sell physical products directly through the website. through our platform, as made available from time to time. The scope, availability, and functionality of our services may evolve over time to reflect technical, commercial, or regulatory requirements, and your access to and use of the services is governed by these Terms and any applicable supplemental terms or documentation.
                  </p>
                </div>

                <div>
                  <h2>2. User Eligibility and Accounts</h2>
                  <p>This website is intended solely for individuals who are located in any of the following jurisdictions:</p>
                  <ul>
                    <li>Saudi Arabia</li>
                    <li>Oman</li>
                    <li>United Arab Emirates</li>
                    <li>Bahrain</li>
                    <li>Qatar</li>
                    <li>Kuwait</li>
                    <li>South Africa</li>
                  </ul>
                  <p>
                    Users must also have attained the age of majority applicable in their respective jurisdiction. By accessing, browsing, registering for, or otherwise using this website, you represent and warrant that you satisfy these eligibility criteria and that you have the full legal capacity and authority to enter into a legally binding agreement under the laws of the country or region in which you are located. Use of this website by minors, or by persons who are otherwise legally incompetent or restricted from contracting under applicable law, is strictly prohibited. If you do not meet these requirements, or if you are not legally permitted to enter into a contract in your jurisdiction, you must immediately discontinue access to and use of this website.
                  </p>
                </div>

                <div>
                  <h2>3. Usage and Restrictions</h2>
                  <p>
                    You may not access or use our website or services for any purpose other than mentioned in these terms. You also agree that your usage of our services is restricted to the maximum extent permissible by the law. Where you are found to be in violation of these restrictions, We reserve the right to suspend or terminate your access to our services.
                  </p>
                </div>

                <div>
                  <h2>4. License and Use Rights</h2>
                  <p>
                    Subject to your continued compliance with these Terms, ULTRATEK ARABIA COOLING AND AIR-CONDITIONING COMPANY grants you a limited, non-exclusive, non-transferable, non-sublicensable, and revocable right to access and use the platform, content, and features made available to you under your subscription solely for their intended and lawful purposes during the applicable subscription term. This right is personal to you and does not confer any ownership, proprietary, or intellectual property rights in the platform, content, or underlying technology.
                  </p>
                  <p>
                    Except as expressly permitted under these Terms, you may not copy, reproduce, distribute, modify, sell, lease, sublicense, commercialise, or otherwise exploit any part of the platform or content, nor attempt to reverse engineer, decompile, or extract source materials or data. All rights not expressly granted to you are reserved by ULTRATEK ARABIA COOLING AND AIR-CONDITIONING COMPANY.
                  </p>
                </div>

                <div>
                  <h2>5. Acceptable Use</h2>
                  <p>
                    As a condition of accessing and using the platform and services, you agree to comply with these Terms and all applicable laws and regulations, and to use the platform solely for lawful and authorised purposes. You are responsible for maintaining the accuracy of the information you provide, safeguarding your account credentials, and ensuring that all activity carried out through your account complies with these Terms. You must not misuse the platform, interfere with its operation or security, access or attempt to access non-public areas, or use the platform in a manner that is fraudulent, abusive, harmful, or infringes the rights of any third party. You are solely responsible for any content, data, or materials you upload, submit, or transmit through the platform, and for ensuring that such content does not violate applicable law or third-party rights. Failure to comply with these obligations may result in suspension or termination of your access, without prejudice to any other rights or remedies available to ULTRATEK ARABIA COOLING AND AIR-CONDITIONING COMPANY.
                  </p>
                </div>

                <div>
                  <h2>6. Intellectual Property Rights</h2>
                  <p>
                    All intellectual property rights in and to the website, platform, content, features, design elements, text, graphics, databases, documentation, and all other materials made available through the platform are and shall remain the exclusive property of ULTRATEK ARABIA COOLING AND AIR-CONDITIONING COMPANY and/or its licensors. Nothing in these Terms operates to transfer, assign, or convey to you any ownership or proprietary rights in the platform or its content, and all rights not expressly granted are reserved.
                  </p>
                  <p>
                    Subject to your compliance with these Terms, you are granted a limited, revocable right to access and view the platform and content solely for their intended purposes during the applicable subscription term. You must not copy, reproduce, distribute, modify, create derivative works from, publicly display, commercially exploit, or otherwise use any part of the platform or content without our prior written consent, except to the extent expressly permitted by applicable law.
                  </p>
                  <p>
                    Any feedback, comments, or suggestions you provide regarding the platform may be used by ULTRATEK ARABIA COOLING AND AIR-CONDITIONING COMPANY without restriction or obligation, and you grant us a perpetual, irrevocable, worldwide, royalty-free right to use and incorporate such feedback for any purpose.
                  </p>
                </div>

                <div>
                  <h2>7. User Content</h2>
                  <p>
                    You may be permitted to submit, upload, post, transmit, or otherwise make available content, data, or materials through the platform (“User Content”). You retain ownership of your User Content. By submitting User Content, you grant ULTRATEK ARABIA COOLING AND AIR-CONDITIONING COMPANY a non-exclusive, worldwide, royalty-free, and sublicensable licence to host, store, reproduce, use, display, modify, and process such User Content solely to operate, maintain, provide, and improve the platform, comply with legal obligations, and enforce these Terms.
                  </p>
                  <p>
                    You represent and warrant that you have all necessary rights, permissions, and authority to submit the User Content and that the User Content does not infringe or violate any applicable law or the rights of any third party. You are solely responsible for your User Content and for any consequences arising from its submission or use through the platform. We reserve the right, but have no obligation, to review, monitor, remove, or restrict access to any User Content that, in our reasonable discretion, violates these Terms or applicable law.
                  </p>
                </div>

                <div>
                  <h2>8. Confidentiality</h2>
                  <p>
                    In connection with your use of the platform and our provision of the services, you and ULTRATEK ARABIA COOLING AND AIR-CONDITIONING COMPANY may each receive or have access to confidential or proprietary information of the other (“Confidential Information”). Confidential Information includes any information disclosed in any form that is identified as confidential or that, by its nature or the circumstances of disclosure, ought reasonably to be treated as confidential, including business, commercial, technical, operational, financial, user-related, or other non-public information.
                  </p>
                  <p>
                    Each of you and ULTRATEK ARABIA COOLING AND AIR-CONDITIONING COMPANY agree to keep the other’s Confidential Information strictly confidential and to use such Confidential Information solely as necessary to perform obligations or exercise rights under these Terms. Confidential Information shall not be disclosed to any third party except where required by applicable law, regulation, or court order, provided that, to the extent legally permitted, the disclosing party is given prompt notice and reasonable cooperation to seek protective measures.
                  </p>
                  <p>
                    Confidential Information does not include information that (a) is or becomes publicly available through no breach of these Terms; (b) was lawfully known to the receiving party prior to disclosure; (c) is lawfully received from a third party without restriction; or (d) is independently developed without reference to the Confidential Information. These confidentiality obligations apply for as long as you use the platform, or, in respect of trade secrets, for so long as such information remains protected under applicable law.
                  </p>
                </div>

                <div>
                  <h2>9. Data Protection and Privacy</h2>
                  <p>
                    The collection, use, and disclosure of personal data collected in connection with this platform is governed by our{" "}
                    <Link href="/privacy" className="font-bold underline decoration-cyan-400/30 hover:decoration-cyan-400 transition-colors">
                      Privacy Policy
                    </Link>
                    , which also forms an integral part of these terms. By accessing and using this platform, you acknowledge that you have read and understood the Privacy Policy and that you agree to processing your personal data as described therein.
                  </p>
                </div>

                <div>
                  <h2>10. Warranties</h2>
                  <p>We warrant that:</p>
                  <p>(a) we have the legal right and authority to make the website and any materials made available through it accessible to users in accordance with these Terms; and</p>
                  <p>(b) we will not knowingly make available any materials through the website that infringe third-party intellectual property rights.</p>
                  <p>These warranties apply only to the extent required by applicable law and do not extend beyond what is expressly stated in this section.</p>
                </div>

                <div>
                  <h2>11. Disclaimer of Warranties</h2>
                  <p>
                    Except for the limited warranties expressly stated above, the website, and any content, features, functionality, software, or other materials made available through it, are provided on an “as is” and “as available” basis.
                  </p>
                  <p>
                    To the maximum extent permitted by applicable law, we expressly disclaim all other warranties, conditions, representations, or guarantees of any kind, whether express, implied, statutory, or otherwise, including any implied warranties of merchantability, satisfactory quality, fitness for a particular purpose, non-infringement, accuracy, availability, reliability, or error-free operation.
                  </p>
                  <p>
                    We do not warrant that the website or any materials made available through it will meet your requirements, achieve any particular results, operate uninterrupted, or be compatible with any third-party systems, software, or services.
                  </p>
                </div>

                <div>
                  <h2>12. Limitation of Liabilities</h2>
                  <p>Nothing in these Terms limits or excludes liability where such limitation or exclusion is not permitted by applicable law.</p>
                  <p>
                    Nothing in these Terms excludes or limits either party’s liability for death or personal injury caused by its negligence, for fraud or fraudulent misrepresentation, or for any other liability that cannot be excluded or limited under applicable law.
                  </p>
                  <p>
                    Subject to the foregoing, neither party shall be liable to the other for any loss of profits, loss of revenue, loss of business or business opportunities, loss of anticipated savings, or any indirect or consequential loss arising out of or in connection with these Terms, whether in contract, tort (including negligence), breach of statutory duty, or otherwise.
                  </p>
                  <p>
                    The parties acknowledge that the limitations and exclusions of liability set out in this section constitute a reasonable allocation of risk, taking into account the fees payable under these Terms, the availability of alternative services, and the parties’ respective ability to obtain insurance coverage.
                  </p>
                </div>

                <div>
                  <h2>13. Indemnification</h2>
                  <p>
                    Each party shall indemnify the other for direct losses finally awarded by a court of competent jurisdiction arising from a third-party claim that the indemnifying party has infringed the intellectual property rights of that third party through its breach of these Terms, provided that the indemnifying party is given prompt written notice of the claim and a reasonable opportunity to participate in the defence of the claim.
                  </p>
                  <p>
                    This indemnity applies only to the extent permitted by applicable law and does not apply to consumer contracts or to the extent that the claim arises from the indemnified party’s own acts or omissions.
                  </p>
                </div>

                <div>
                  <h2>14. Termination and Effects of Termination</h2>
                  <p>
                    Either party may terminate these Terms with immediate effect by giving written notice to the other party if the other party commits a material breach of these Terms and, where such breach is capable of remedy, fails to remedy that breach within a period of 15 day(s) after being notified to do so. Either party may also terminate these Terms with immediate effect by giving written notice if the other party becomes insolvent, enters into liquidation, has a receiver or administrator appointed, ceases or threatens to cease carrying on business, or is otherwise unable to pay its debts as they fall due.
                  </p>
                  <p>
                    Upon termination, all rights granted to the Customer under these Terms shall immediately cease and the Customer shall stop using the Services. Any outstanding fees owed as at the effective date of termination shall become immediately due and payable.
                  </p>
                  <p>
                    Termination shall not affect any rights, remedies, obligations, or liabilities of either party that have accrued up to the date of termination. Any provisions which by their nature are intended to survive termination shall continue in full force and effect.
                  </p>
                </div>

                <div>
                  <h2>15. Governing Law and Jurisdiction</h2>
                  <p>
                    These Terms, and any dispute or claim arising out of or in connection with them, including any non-contractual disputes or claims, shall be governed by and construed in accordance with the laws of Saudi Arabia, as selected by the parties through the Service.
                  </p>
                  <p>
                    Subject to any mandatory provisions of applicable law, the courts of Saudi Arabia shall have jurisdiction to hear and determine any dispute or claim arising out of or in connection with these Terms, including any non-contractual disputes or claims.
                  </p>
                  <p>
                    Nothing in this section shall limit or exclude any rights that a consumer may have to bring proceedings in a court of competent jurisdiction under applicable mandatory law.
                  </p>
                </div>

                <div>
                  <h2>16. Dispute Resolution</h2>
                  <p>
                    Any dispute, controversy, or claim arising out of or in connection with these Terms, including any question regarding their existence, validity, or termination, shall be resolved exclusively through proceedings before the courts of Saudi Arabia, in accordance with the governing law specified in these Terms.
                  </p>
                  <p>
                    Nothing in this section shall prevent either party from seeking interim or injunctive relief from any court of competent jurisdiction where such relief is necessary to protect its rights.
                  </p>
                </div>

                <div>
                  <h2>17. Compliance with Laws</h2>
                  <p>
                    Each party shall comply with all laws, regulations, and legally binding requirements applicable to it in connection with the performance of its obligations under these Terms.
                  </p>
                </div>

                <div>
                  <h2>18. Force Majeure</h2>
                  <p>
                    Neither party shall be liable for any failure or delay in the performance of its obligations under these Terms (other than payment obligations) to the extent that such failure or delay is caused by events beyond its reasonable control, including acts of God, natural disasters, war, terrorism, civil unrest, strikes or labour disputes, epidemics or pandemics, governmental actions, or failures of utilities or telecommunications networks.
                  </p>
                  <p>
                    The affected party shall use reasonable efforts to mitigate the effects of the force majeure event and to resume performance as soon as reasonably practicable.
                  </p>
                </div>

                <div>
                  <h2>19. Assignment</h2>
                  <p>
                    Neither party may assign, transfer, or otherwise dispose of any of its rights or obligations under these Terms without the prior written consent of the other party, such consent not to be unreasonably withheld or delayed.
                  </p>
                  <p>
                    Notwithstanding the foregoing, either party may assign these Terms in whole or in part without consent in connection with a merger, reorganisation, change of control, or sale of all or substantially all of its assets, provided that the assignee agrees in writing to be bound by these Terms.
                  </p>
                </div>

                <div>
                  <h2>20. Changes to the Terms</h2>
                  <p>
                    The Supplier may modify these Terms from time to time by providing notice to the Customer in accordance with the Notices section. Unless otherwise stated, any changes shall take effect on the date specified in the notice.
                  </p>
                  <p>
                    Where the Customer continues to use the Services after the effective date of the updated Terms, the Customer shall be deemed to have accepted the modified Terms. If the Customer does not agree to the changes, the Customer may terminate the Terms in accordance with the Termination section.
                  </p>
                </div>

                <div>
                  <h2>21. Severability</h2>
                  <p>
                    If any provision of these Terms is held to be invalid, illegal, or unenforceable by a court or other competent authority, such provision shall be deemed modified to the minimum extent necessary to make it valid and enforceable, or, if modification is not possible, shall be deemed deleted. Any such modification or deletion shall not affect the validity and enforceability of the remaining provisions of these Terms.
                  </p>
                </div>

                <div>
                  <h2>22. Survival</h2>
                  <p>
                    Any provisions of these Terms which by their nature are intended to survive termination or expiry, including provisions relating to intellectual property, limitation of liability, indemnification, dispute resolution, governing law, and jurisdiction, shall survive termination or expiry of these Terms.
                  </p>
                </div>

                <div>
                  <h2>23. Notices</h2>
                  <p>
                    Any notice given under these Terms shall be in writing and shall be deemed duly given when delivered personally, sent by pre-paid post, or transmitted by email to the contact details specified by the relevant party.
                  </p>
                  <p>Notices shall be deemed received:</p>
                  <ul>
                    <li>if delivered personally, at the time of delivery;</li>
                    <li>if sent by post, 3 business day(s) after posting; and</li>
                    <li>if sent by email, at the time of transmission, provided that no delivery failure notice is received.</li>
                  </ul>
                  <p>Notices to us shall be sent to:</p>
                  <p><strong>Company Name:</strong> ULTRATEK ARABIA COOLING AND AIR-CONDITIONING COMPANY</p>
                  <p><strong>Address:</strong> AL BAGHDADIYAH, Jeddah, 22235, K.S.A</p>
                  <p><strong>Email:</strong> <a href="mailto:info@ultratekcs.com">info@ultratekcs.com</a></p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}