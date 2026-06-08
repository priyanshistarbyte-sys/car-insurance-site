import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto px-4 py-8 flex gap-12">
        <div className="flex-1 max-w-2xl text-sm text-gray-300 leading-relaxed">
          <h1 className="text-2xl font-bold text-white mb-6">Privacy Policy</h1>

          <p className="mb-4">
            One of the main priorities of MyExpertAdvisor, accessible from
            https://myexpertadvisor.com, is the privacy of our visitors. This Privacy Policy
            document contains types of information that is collected and recorded by MyExpertAdvisor
            and how we use it.
          </p>
          <p className="mb-6">
            If you have additional questions or require more information about our Privacy Policy,
            do not hesitate to contact us.
          </p>

          <h2 className="text-base font-bold text-white mb-3">1. Cookies and Web Beacons</h2>
          <p className="mb-4">
            MyExpertAdvisor uses &quot;cookies&quot; like many other websites. These cookies are used to
            store information including visitors&apos; preferences, and the pages on the website that the
            visitor accessed or visited. The information is used to optimize the users&apos; experience
            by customizing our web page content based on visitors&apos; browser type and/or other
            information.
          </p>
          <p className="mb-6">
            More general information about Cookies can be found at: &quot;Cookies&quot; Privacy Policy
            Generator.
          </p>

          <h2 className="text-base font-bold text-white mb-3">2. Our Advertising Partners</h2>
          <p className="mb-4">
            You may consult this list to find the Privacy Policy for each of the advertising
            partners of MyExpertAdvisor. Third-party ad servers or ad networks uses technologies
            like cookies, JavaScript, or Web Beacons that are used in their respective
            advertisements and links that appear on https://myexpertadvisor.com, which are sent
            directly to users&apos; browser. They automatically receive your IP address when this occurs.
            These technologies are used to measure the effectiveness of their advertising campaigns
            and/or to personalize the advertising content that you see on websites that you visit.
            Note that MyExpertAdvisor has no access to or control over these cookies that are used
            by third-party advertisers. Read more at: https://myexpertadvisor.com
          </p>
          <ul className="list-disc pl-5 mb-6">
            <li>Google</li>
          </ul>

          <h2 className="text-base font-bold text-white mb-3">3. Third Party Privacy Policies</h2>
          <p className="mb-6">
            MyExpertAdvisor Privacy Policy does not apply to other advertisers or websites. Thus,
            we are advising you to consult the respective Privacy Policies of these third-party ad
            servers for more detailed information. It may include their practices and instructions
            about how to opt-out of certain options. You can choose to disable cookies through your
            individual browser options. To know more detailed information about cookie management
            with specific web browsers, it can be found at the browsers&apos; respective websites. Read
            more at: https://myexpertadvisor.com
          </p>

          <h2 className="text-base font-bold text-white mb-3">4. Children&apos;s Privacy</h2>
          <p className="mb-6">
            Another part of our priority is adding protection for children while using the
            internet. We encourage parents and guardians to observe, participate in, and/or monitor
            and guide their online activity. MyExpertAdvisor does not knowingly collect any Personal
            Identifiable Information from children under the age of 13. If you think that your
            child provided this kind of information on our website, we strongly encourage you to
            contact us immediately and we will do our best efforts to promptly remove such
            information from our records. Read more at: https://myexpertadvisor.com
          </p>

          <h2 className="text-base font-bold text-white mb-3">5. Online Privacy Policy Only</h2>
          <p className="mb-6">
            This Privacy Policy only covers our online activities and applies to visitors to our
            website only with respect to the personally identifiable information they have provided
            and/or collect on https://myexpertadvisor.com. This policy is not applicable to any
            offline or online information that is collected from channels other than this website.
          </p>

          <h2 className="text-base font-bold text-white mb-3">6. Contact Information</h2>
          <p className="mb-6">
            If you have any questions about these Terms of Service, please contact us at{" "}
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
