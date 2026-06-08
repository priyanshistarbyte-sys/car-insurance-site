import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto px-4 py-8 flex gap-12">
        <div className="flex-1 max-w-2xl text-sm text-gray-300 leading-relaxed">
          <h1 className="text-2xl font-bold text-white mb-6">Cookie Policy</h1>

          <h2 className="text-base font-bold text-white mb-3">1. Introduction</h2>
          <p className="mb-6">
            This Cookie Policy explains how{" "}
            <a href="/" className="text-white underline font-bold">MyExpertAdvisor</a>{" "}
            (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) uses cookies and similar technologies to enhance your
            experience on our website. By continuing to use our site, you agree to the use of
            cookies as outlined in this policy.
          </p>

          <h2 className="text-base font-bold text-white mb-3">2. What Are Cookies?</h2>
          <p className="mb-6">
            Cookies are small text files stored on your device (computer, tablet, or smartphone)
            when you visit a website. These files help us recognize your device, improve website
            functionality, and provide personalized content based on your preferences.
          </p>

          <h2 className="text-base font-bold text-white mb-3">3. Performance Cookies</h2>
          <p className="mb-4">
            <span className="font-bold text-white">Essential Cookies:</span> These cookies are
            necessary for the proper functioning of our website. They allow you to navigate and use
            features like accessing secure areas of the site.
          </p>
          <p className="mb-4">
            <span className="font-bold text-white">Performance Cookies:</span> These cookies
            collect information about how visitors use our website, such as which pages are visited
            most often. The data is used to improve the site&apos;s functionality and user experience.
          </p>
          <p className="mb-6">
            <span className="font-bold text-white">Advertising and Targeting Cookies:</span> These
            cookies are used to deliver personalized ads and track the effectiveness of our
            marketing campaigns. They may also be used to show ads based on your browsing habits.
          </p>

          <h2 className="text-base font-bold text-white mb-3">4. Why We Use Cookies</h2>
          <p className="mb-3">Ensure our website functions properly.</p>
          <p className="mb-3">Enhance your browsing experience.</p>
          <p className="mb-3">Collect analytics data to improve site performance.</p>
          <p className="mb-6">Personalize content and advertisements.</p>

          <h2 className="text-base font-bold text-white mb-3">5. How to Manage Cookies</h2>
          <p className="mb-4">
            You can control or disable cookies through your browser settings. Most browsers allow
            you to:
          </p>
          <p className="mb-3">Block cookies.</p>
          <p className="mb-3">Delete existing cookies.</p>
          <p className="mb-6">Notify you when a cookie is being used.</p>

          <h2 className="text-base font-bold text-white mb-3">6. Third-Party Cookies</h2>
          <p className="mb-6">
            We may use third-party services, such as Google Analytics or social media platforms,
            that place cookies on your device to collect information about your interaction with
            their services. For more details, please refer to their privacy policies.
          </p>

          <h2 className="text-base font-bold text-white mb-3">7. Contact Information</h2>
          <p className="mb-6">
            For questions, contact us at{" "}
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
