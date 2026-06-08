import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function Disclaimer() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto px-4 py-8 flex gap-12">
        <div className="flex-1 max-w-2xl text-sm text-gray-300 leading-relaxed">
          <h1 className="text-2xl font-bold text-white mb-6">Disclaimer</h1>

          <h2 className="text-base font-bold text-white mb-3">1. General Information</h2>
          <p className="mb-6">
            The information provided by MyExpertAdvisor (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) on{" "}
            <a href="/" className="text-white underline font-bold">MyExpertAdvisor</a>{" "}
            (&quot;Site&quot;) is for general informational purposes only. All information on the Site is
            provided in good faith; however, we make no representation or warranty regarding the
            accuracy, adequacy, validity, reliability, availability, or completeness of any
            information on the Site.
          </p>

          <h2 className="text-base font-bold text-white mb-3">2. Disclaimer for MyExpertAdvisor</h2>
          <p className="mb-4">
            If you require any more information or have any questions about our site&apos;s disclaimer,
            please feel free to contact us by email at{" "}
            <a href="mailto:hello@myexpertadvisor.com" className="text-blue-400 underline">
              hello@myexpertadvisor.com
            </a>
            .
          </p>
          <p className="mb-6">
            All the information on this website — MyExpertAdvisor — is published in good faith and
            for general information purpose only. MyExpertAdvisor does not make any warranties about
            the completeness, reliability and accuracy of this information. Any action you take upon
            the information you find on this website (MyExpertAdvisor), is strictly at your own
            risk. MyExpertAdvisor will not be liable for any losses and/or damages in connection
            with the use of our website.
          </p>

          <h2 className="text-base font-bold text-white mb-3">3. External Links Disclaimer</h2>
          <p className="mb-6">
            From our website, you can access other websites through links to those other sites,
            which are outside of our control. We endeavor to provide only the best possible links to
            useful and ethical websites, but we cannot control the content and nature of these sites.
            All links to other websites imply no endorsement for all the content found on these
            sites. Site owners and content may change without notice and may occur before we have
            the opportunity to remove a link which may have gone &apos;bad&apos;.
          </p>

          <h2 className="text-base font-bold text-white mb-3">4. &quot;Use at Your Own Risk&quot; Disclaimer</h2>
          <p className="mb-6">
            All information on the Site is provided &quot;as is,&quot; without warranties of any kind,
            including fitness for a particular purpose or performance. We are not liable for
            decisions made based on Site content.
          </p>

          <h2 className="text-base font-bold text-white mb-3">5. Contact Information</h2>
          <p className="mb-6">
            If you have any questions, contact us at{" "}
            <a href="mailto:hello@myexpertadvisor.com" className="text-blue-400 underline">
              hello@myexpertadvisor.com
            </a>
            .
          </p>

          <Footer />
        </div>
        <div className="hidden lg:block w-72">
          <Sidebar />
        </div>
      </div>
    </main>
  );
}
