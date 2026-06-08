import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto px-4 py-8 flex gap-12">
        <div className="flex-1 max-w-2xl text-sm text-gray-300 leading-relaxed">
          <form className="flex flex-col gap-4 mb-8">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded bg-white text-gray-800 placeholder-gray-400 outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded bg-white text-gray-800 placeholder-gray-400 outline-none"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded bg-white text-gray-800 placeholder-gray-400 outline-none"
            />
            <textarea
              placeholder="Message"
              rows={5}
              className="w-full px-4 py-3 rounded bg-white text-gray-800 placeholder-gray-400 outline-none resize-none"
            />
            <button
              type="submit"
              className="w-full py-3 bg-[#3b4fad] hover:bg-[#4a5fc0] text-white font-semibold rounded transition-colors"
            >
              Submit
            </button>
          </form>

          <h2 className="text-base font-bold text-white mb-3">Contact Us</h2>
          <p className="mb-3">
            If you have any query related to the advertisement, a technical issue, or a suggestion,
            then you can directly reach us at:{" "}
            <a href="mailto:hello@myexpertadvisor.com" className="text-blue-400 underline">
              hello@myexpertadvisor.com
            </a>
          </p>
          <p className="mb-3">
            We value your time and effort and we always try to respond to emails as quickly as
            possible. Thank You!
          </p>
          <p className="mb-6 font-bold text-gray-300">
            Our goal is to deliver the highest caliber content that provides a sense of clarity and
            inspires healthy actions for our readers along their health and well-being journeys. When
            a reader alerts us to a potential issue with our content, such as incomplete, inaccurate,
            outdated, unclear, or contradictory information, our editorial and medical teams research
            the feedback, determine the opportunities for improvement, and republish our content with
            necessary revisions.
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
