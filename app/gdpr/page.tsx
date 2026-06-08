import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function GDPR() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto px-4 py-8 flex gap-12">
        <div className="flex-1 max-w-2xl text-sm text-gray-300 leading-relaxed">
          <h1 className="text-2xl font-bold text-white mb-6">
            General Data Protection Regulation (GDPR)
          </h1>

          <h2 className="text-base font-bold text-white mb-3">1. Introduction</h2>
          <p className="mb-6">
            At MyExpertAdvisor we respect your privacy rights and are committed to complying with
            the General Data Protection Regulation (GDPR). This page outlines your rights under
            these regulations and how we comply with them.
          </p>

          <h2 className="text-base font-bold text-white mb-3">2. GDPR Data Protection Rights</h2>
          <p className="mb-4">
            We would like to make sure you are fully aware of all of your data protection rights.
            Every user is entitled to the following
          </p>
          <p className="mb-4">
            Right to rectification – You have the right to ask for correction of information that
            you think is incorrect. You also have the right to ask for completion of information
            that you think is incomplete.
          </p>
          <p className="mb-4">
            The right to erasure – You have the right to request that we erase your personal data,
            under certain conditions.
          </p>
          <p className="mb-4">
            The right to restrict processing – You have the right to request that we restrict the
            processing of your personal data, under certain conditions.
          </p>
          <p className="mb-4">
            The right to object to processing – You have the right to object to our processing of
            your personal data, under certain conditions.
          </p>
          <p className="mb-4">
            The right to data portability – You have the right to request that we transfer the data
            that we have collected to another organization, or directly to you, under certain
            conditions.
          </p>
          <p className="mb-6">
            If you make a request, we have one month to respond to you. If you would like to
            exercise any of these rights, please contact us.
          </p>

          <h2 className="text-base font-bold text-white mb-3">3. User Rights under GDPR</h2>
          <p className="mb-4">
            <span className="font-bold text-white">Right to Data Portability:</span> Receive your
            data in a structured, commonly used format.
          </p>
          <p className="mb-4">
            <span className="font-bold text-white">Right to Restrict Processing:</span> Limit the
            use of your data in specific cases.
          </p>
          <p className="mb-4">
            <span className="font-bold text-white">Right to Withdraw Consent:</span> Revoke
            permission for data collection or processing anytime.
          </p>
          <p className="mb-6">
            You can complain to a Data Protection Authority regarding our collection and use of
            your Personal Data. For more details, contact{" "}
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
