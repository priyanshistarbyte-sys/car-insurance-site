import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto px-4 py-8 flex gap-12">
        <div className="flex-1 max-w-2xl text-sm text-gray-300 leading-relaxed">
          <h1 className="text-2xl font-bold text-white mb-6">Terms of Service</h1>

          <h2 className="text-base font-bold text-white mb-3">1. Introduction</h2>
          <p className="mb-4">Welcome to MyExpertAdvisor (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;)!</p>
          <p className="mb-4">
            These Terms of Service (&quot;Terms&quot;, &quot;Terms of Service&quot;) govern your use of our website
            located at https://myexpertadvisor.com (together or individually &quot;Service&quot;) operated by
            MyExpertAdvisor.
          </p>
          <p className="mb-4">
            Our Privacy Policy also governs your use of our Service and explains how we collect,
            safeguard and disclose information that results from your use of our web pages.
          </p>
          <p className="mb-4">
            Your agreement with us includes these Terms and our Privacy Policy (&quot;Agreements&quot;). You
            acknowledge that you have read and understood Agreements, and agree to be bound of them.
            If you do not agree with (or cannot comply with) Agreements, then you may not use the
            Service, but please let us know by emailing at hello@myexpertadvisor.com so we can try
            to find a solution. These Terms apply to all visitors, users and others who wish to
            access or use Service.
          </p>
          <p className="mb-6">
            If you do not agree, email us at{" "}
            <a href="mailto:hello@myexpertadvisor.com" className="text-blue-400 underline">
              hello@myexpertadvisor.com
            </a>
            .
          </p>

          <h2 className="text-base font-bold text-white mb-3">2. Intellectual Property</h2>
          <p className="mb-6">
            Service and its original content (except for Content provided by users), features and
            functionality are and will remain the exclusive property of MyExpertAdvisor and its
            licensors. Service is protected by copyright, trademark, and other laws of and foreign
            countries. Our trademarks may not be used in connection with any product or service
            without the prior written consent of MyExpertAdvisor.
          </p>

          <h2 className="text-base font-bold text-white mb-3">3. No Use By Minors</h2>
          <p className="mb-6">
            Service is designed only for access and use by persons who are at least eighteen (18)
            years old. By accessing or using Service, you warrant and represent that you are at
            least eighteen (18) years of age and with the full authority, right, and capacity to
            enter into this agreement and abide by all of the terms and conditions of Terms. If you
            are less than eighteen (18) years of age, you are barred from both accessing and using
            the Service.
          </p>

          <h2 className="text-base font-bold text-white mb-3">4. Copyright Policy</h2>
          <p className="mb-4">
            We respect the intellectual property rights of others. It is our policy to respond to
            any claim that Content posted on Service infringes on the copyright or other
            intellectual property rights (&quot;Infringement&quot;) of any person or entity.
          </p>
          <p className="mb-6">
            If you are a copyright owner, or have the authorization of one, and you believe that
            the copyrighted work has been copied in a way that constitutes copyright infringement,
            please submit your claim via email to hello@myexpertadvisor.com, with the subject line:
            &quot;Copyright Infringement&quot; and include in your claim a detailed description of the
            alleged Infringement as detailed below, under &quot;DMCA Notice and Procedure for Copyright
            Infringement Claims&quot;
          </p>

          <h2 className="text-base font-bold text-white mb-3">5. Changes To Service</h2>
          <p className="mb-6">
            We may in our sole discretion change or terminate this Service, or any part of it, and
            the services or materials provided via this Service, with immediate effect without
            notice. We shall not be liable to you if for any reason Service becomes unavailable or
            access to it is handicapped for any period. From time to time, we may restrict access
            to some parts of Service, or the entirety of Service, to users including those who have
            registered.
          </p>

          <h2 className="text-base font-bold text-white mb-3">6. Privacy</h2>
          <p className="mb-6">Your use of the site is governed by our Privacy Policy.</p>

          <h2 className="text-base font-bold text-white mb-3">7. Acknowledgement</h2>
          <p className="mb-6 font-bold text-gray-300">
            BY USING SERVICE OR OTHER SERVICES PROVIDED BY US, YOU ACKNOWLEDGE THAT YOU HAVE READ
            THESE TERMS OF SERVICE AND AGREE TO BE BOUND BY THEM.
          </p>

          <h2 className="text-base font-bold text-white mb-3">8. Contact Information</h2>
          <p className="mb-6">
            If you have questions, contact us at{" "}
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
