import Link from "next/link";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import BannerAd from "../components/BannerAd";

export default function UninsuredMotoristProtection() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto px-4 py-8 flex gap-12">
        <div className="flex-1 max-w-2xl text-sm text-gray-300 leading-relaxed">
          <BannerAd />
          <h1 className="text-2xl font-bold text-white mb-6">Uninsured Motorist Protection</h1>

          {/* Intro */}
          <div className="border border-gray-600 rounded-lg px-5 py-5 mb-6 blog_container">
            <p>
              Uninsured Motorist Protection (UM) is an auto insurance policy that covers you if you
              are involved in an accident with a driver who does not have insurance or flees the scene
              (hit-and-run). It also includes Underinsured Motorist (UIM) Coverage, which applies
              when the at-fault driver&apos;s insurance is insufficient to cover your losses.
            </p>
          </div>

          {/* Types */}
          <div className="border border-gray-600 rounded-lg px-5 py-5 mb-6 blog_container">
            <h2 className="text-base font-bold text-white mb-3">Types of Uninsured/Underinsured Motorist Coverage</h2>
            <ul className="list-disc list-outside pl-5 flex flex-col gap-2">
              <li>Uninsured Motorist Bodily Injury (UMBI): Covers medical expenses, lost wages, and pain &amp; suffering for you and passengers. Applies when the at-fault driver has no insurance or in hit-and-run cases.</li>
              <li>Uninsured Motorist Property Damage (UMPD) (Varies by State): Pays for repairs to your vehicle if an uninsured driver damages it. Some states require a deductible before coverage applies. Not available in all states—some require collision coverage instead.</li>
              <li>Underinsured Motorist Bodily Injury (UIMBI): Protects you when the at-fault driver has insurance but with low coverage limits. Pays the remaining medical expenses, lost wages, and damages.</li>
              <li>Underinsured Motorist Property Damage (UIMPD) (Limited Availability): Covers car repairs if the at-fault driver&apos;s insurance does not fully cover damages.</li>
            </ul>
          </div>

           <div className="header_space" >
                <div id="mid_ad" className="gpt-display-slot"></div>
            </div>
          {/* Why Important */}
          <div className="border border-gray-600 rounded-lg px-5 py-5 mb-6 blog_container">
            <h2 className="text-base font-bold text-white mb-3">Why is UM/UIM Important?</h2>
            <ul className="list-disc list-outside pl-5 flex flex-col gap-2">
              <li>1 in 8 drivers in the U.S. is uninsured (Insurance Research Council).</li>
              <li>Some drivers carry only minimum liability coverage, which may not fully pay for damages.</li>
              <li>In hit-and-run cases, UMBI ensures you&apos;re covered if the driver is never found.</li>
            </ul>
          </div>

          {/* Mandatory */}
          <div className="border border-gray-600 rounded-lg px-5 py-5 mb-6 blog_container">
            <h2 className="text-base font-bold text-white mb-3">Is UM/UIM Coverage Mandatory?</h2>
            <ul className="list-disc list-outside pl-5 flex flex-col gap-2">
              <li>Required in some states (e.g., New York, Illinois, North Carolina).</li>
              <li>Optional in others, but highly recommended.</li>
            </ul>
          </div>

          {/* Summary paragraphs */}
          <div className="flex flex-col gap-4 mb-6">
            <p>
              Car insurance is an essential financial safeguard that protects you, your vehicle, and
              others on the road from unexpected risks and expenses. One of the most basic and legally
              required forms of coverage is Third-Party Liability Only Cover, which ensures that any
              damage or injury caused to another person, vehicle, or property is financially covered.
              While this plan is cost-effective and meets legal requirements, it does not provide
              protection for your own vehicle. To address this gap, Own Damage (OD) Cover comes into
              play, offering financial assistance for repairs or replacement of your car due to
              accidents, natural disasters, theft, or fire. This makes it a valuable addition for car
              owners seeking more comprehensive protection.
            </p>
            <p>
              Another important component of car insurance is Personal Accident Cover, which provides
              compensation in case of injury, disability, or death resulting from a car accident. This
              coverage is crucial for ensuring the financial security of you and your family during
              unforeseen events. Additionally, Uninsured Motorist Protection safeguards you if you are
              involved in an accident with a driver who does not have valid insurance. In such cases,
              this cover ensures that you are not left bearing the financial burden alone, making it a
              smart and protective feature to include in your policy.
            </p>
            <p>
              For maximum protection, Comprehensive Car Insurance is the most recommended option. It
              combines both third-party liability and own damage coverage, along with additional
              benefits like personal accident protection and optional add-ons. This type of policy
              offers complete peace of mind by covering a wide range of risks, including accidents,
              theft, natural calamities, and man-made damages. With rising vehicle repair costs and
              increasing road risks, investing in a comprehensive plan not only secures your finances
              but also enhances your overall driving confidence.
            </p>
            <p>
              Choosing the right car insurance policy involves evaluating your needs, driving habits,
              and budget. By understanding the benefits of each type of coverage and selecting a
              well-rounded plan, you can ensure optimal protection and long-term savings while also
              benefiting from high-value insurance features that align with modern financial planning
              strategies.
            </p>
          </div>

            <div className="header_space" >
              <div id="bottom_ad" className="gpt-display-slot"></div>
          </div>
          {/* More Button */}
          <Link href="/carInsurance" className="block w-full py-3 bg-[#3b4fad] hover:bg-[#4a5fc0] text-white font-semibold rounded transition-colors mb-8 text-center">
            More
          </Link>

          <Footer />
        </div>

        <div className="hidden lg:block w-72">
          <Sidebar />
        </div>
      </div>
    </main>
  );
}
