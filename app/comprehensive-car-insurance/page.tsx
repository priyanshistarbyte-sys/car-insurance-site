import Link from "next/link";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function ComprehensiveCarInsurance() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto px-4 py-8 flex gap-12">
        <div className="flex-1 max-w-2xl text-sm text-gray-300 leading-relaxed">
         <div className="header_space ad-slot-prominent"  >
            <div id="top_ad" className="gpt-display-slot gpt-display-slot-banner" ></div>
          </div>
          <h1 className="text-2xl font-bold text-white mb-6">Comprehensive Car Insurance</h1>

          {/* Intro */}
          <div className="border border-gray-600 rounded-lg px-5 py-5 mb-6 blog_container">
            <p>
              Comprehensive Car Insurance is an all-inclusive policy that covers both third-party
              liabilities and own vehicle damages. It provides financial protection against accidents,
              theft, natural disasters, fire, vandalism, and more. Unlike third-party insurance, which
              only covers damages to others, comprehensive insurance ensures your vehicle is also
              protected.
            </p>
          </div>

          {/* Coverage */}
          <div className="border border-gray-600 rounded-lg px-5 py-5 mb-6 blog_container">
            <h2 className="text-base font-bold text-white mb-3">Coverage of Comprehensive Car Insurance</h2>
            <ul className="list-disc list-outside pl-5 flex flex-col gap-2">
              <li>Accidental Damage: Covers repair costs if your car is damaged in an accident.</li>
              <li>Third-Party Liabilities: Pays for injury or property damage caused to others.</li>
              <li>Theft &amp; Burglary: Compensation if your car is stolen or parts are stolen.</li>
              <li>Fire &amp; Explosion: Covers damages due to fire, lightning, or explosions.</li>
              <li>Natural Disasters: Protection from floods, earthquakes, storms, cyclones, etc.</li>
              <li>Man-Made Disasters: Covers riots, vandalism, strikes, and terrorist activities.</li>
              <li>Damage During Transit: Protection if your car is damaged during transport by road, rail, or water.</li>
            </ul>
          </div>

          <div className="header_space" >
                <div id="mid_ad" className="gpt-display-slot"></div>
          </div>

          {/* Exclusions */}
          <div className="border border-gray-600 rounded-lg px-5 py-5 mb-6 blog_container">
            <h2 className="text-base font-bold text-white mb-3">Exclusions (What Comprehensive Insurance Does NOT Cover?)</h2>
            <ul className="list-disc list-outside pl-5 flex flex-col gap-2">
              <li>Driving Without a License: No coverage if the driver is unlicensed.</li>
              <li>Drunk Driving or Drug Influence: Claims are denied if intoxicated.</li>
              <li>Regular Wear and Tear: Mechanical failures and aging-related damages are not covered.</li>
              <li>Intentional Damage or Fraud: No coverage if damage is caused deliberately.</li>
              <li>Accidents Outside Policy Coverage: Damage occurring after the policy expires is not covered.</li>
            </ul>
          </div>

          {/* Add-On Covers */}
          <div className="border border-gray-600 rounded-lg px-5 py-5 mb-6 blog_container">
            <h2 className="text-base font-bold text-white mb-3">Add-On Covers Available with Comprehensive Insurance</h2>
            <ul className="list-disc list-outside pl-5 flex flex-col gap-2">
              <li>Zero Depreciation Cover: Ensures full claim amount without depreciation deductions.</li>
              <li>Roadside Assistance: Emergency support for breakdowns, towing, fuel refills, etc.</li>
              <li>Engine Protection Cover: Covers damage due to waterlogging, oil leaks, or mechanical failures.</li>
              <li>Personal Accident Cover: Compensation for medical expenses, disability, or death of the driver/passengers.</li>
              <li>No-Claim Bonus (NCB) Protection: Retains NCB benefits even after making a claim.</li>
            </ul>
          </div>

          {/* Who Should Buy */}
          <div className="border border-gray-600 rounded-lg px-5 py-5 mb-6 blog_container">
            <h2 className="text-base font-bold text-white mb-3">Who Should Buy Comprehensive Insurance?</h2>
            <ul className="list-disc list-outside pl-5 flex flex-col gap-2">
              <li>New &amp; Expensive Car Owners: High repair costs make coverage essential.</li>
              <li>Frequent Drivers: More driving means higher accident risk.</li>
              <li>Residents in Risky Areas: If you live in flood-prone or theft-prone regions.</li>
              <li>Owners Seeking Complete Protection: Covers almost all possible risks.</li>
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
