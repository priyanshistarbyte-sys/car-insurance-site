import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto px-4 py-8 flex gap-12">
        <div className="flex-1 max-w-2xl text-sm text-gray-300 leading-relaxed">
          <h2 className="text-base font-bold text-white mb-3">MyExpertAdvisor</h2>
          <p className="mb-6 font-bold text-gray-300">
            At MyExpertAdvisor, we are committed to empowering individuals like you to make
            informed, positive decisions about your health, wealth, and overall well-being. Our goal
            is to bring you insightful, actionable content that enhances your life in meaningful
            ways, whether you&apos;re looking to improve your fitness, boost your finances, or live a
            more balanced and fulfilling life.
          </p>

          <h2 className="text-base font-bold text-white mb-3">Why Choose MyExpertAdvisor?</h2>
          <p className="mb-6 font-bold text-gray-300">
            At MyExpertAdvisor, we believe in delivering powerful knowledge in a fraction of your
            time. Our blog is designed for busy individuals who want to make smarter decisions in
            health, finance, and lifestyle without spending hours researching.
          </p>

          <h2 className="text-base font-bold text-white mb-3">About Us - MyExpertAdvisor</h2>
          <p className="mb-4 font-bold text-gray-300">
            Welcome to MyExpertAdvisor, your go-to resource for quick, reliable, and actionable
            information on health, finance, and lifestyle! We understand that in today&apos;s
            fast-paced world, time is precious. That&apos;s why our mission is simple: to provide
            you with high-quality, expert-backed insights that you can consume in just a few minutes,
            empowering you to make smarter decisions for a better life.
          </p>
          <p className="mb-6 font-bold text-gray-300">
            We&apos;re passionate writers and industry experts, all keen on producing worthwhile
            content which is brief and to the point. You&apos;ll need health tips, financial
            planning, and lifestyle hacks — there you have it. Every piece is made so that it will
            save your time, delivering you very practical advice to implement and bring significant
            changes into your life, daily.
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
