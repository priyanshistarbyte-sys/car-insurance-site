import Link from "next/link";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function OwnDamageCover() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto px-4 py-8 flex gap-12">
        <div className="flex-1 max-w-2xl text-sm text-gray-300 leading-relaxed">
           <div className="header_space ad-slot-prominent"  >
            <div id="top_ad" className="gpt-display-slot gpt-display-slot-banner" ></div>
          </div>
          <h1 className="text-2xl font-bold text-white mb-6">Own Damage (OD) Cover</h1>

          {/* Intro */}
          <div className="border border-gray-600 rounded-lg px-5 py-5 mb-6 blog_container">
            <p>
              Own Damage (OD) Cover is a type of car insurance that protects the insured vehicle
              against damages due to accidents, theft, fire, and natural disasters. It is different
              from Third-Party Insurance, which only covers damages to others.
            </p>
          </div>

          {/* Coverage */}
          <div className="border border-gray-600 rounded-lg px-5 py-5 mb-6 blog_container">
            <h2 className="text-base font-bold text-white mb-3">Coverage of OD Insurance</h2>
            <ul className="list-disc list-outside pl-5 flex flex-col gap-2">
              <li>Accidental Damages: Covers repair costs if your car is damaged in an accident.</li>
              <li>Fire &amp; Explosion: Compensation for damages due to fire, lightning, or explosions.</li>
              <li>Theft &amp; Burglary: Covers financial loss if the car is stolen.</li>
              <li>Natural Disasters: Protection against floods, earthquakes, storms, etc.</li>
              <li>Man-Made Disasters: Covers damages due to riots, strikes, vandalism, and terrorism.</li>
              <li>Transit Damages: Protection against damages during transportation by rail, road, or water.</li>
            </ul>
          </div>

          <div className="header_space" >
                <div id="mid_ad" className="gpt-display-slot"></div>
          </div>

          {/* Who Should Get */}
          <div className="border border-gray-600 rounded-lg px-5 py-5 mb-6 blog_container">
            <h2 className="text-base font-bold text-white mb-3">Who Should Get Third-Party Liability Only Insurance?</h2>
            <ul className="list-disc list-outside pl-5 flex flex-col gap-2">
              <li>Third-Party Liabilities (Injury or damage to others)</li>
              <li>Mechanical or Electrical Breakdown</li>
              <li>Regular Wear and Tear</li>
              <li>Driving Without a License or Under Influence</li>
              <li>Damage Outside Policy Coverage Period</li>
            </ul>
          </div>

          {/* Eligibility */}
          <div className="border border-gray-600 rounded-lg px-5 py-5 mb-6 blog_container">
            <h2 className="text-base font-bold text-white mb-3">Eligibility for OD Cover</h2>
            <ul className="list-disc list-outside pl-5 flex flex-col gap-2">
              <li>Available only for cars with an active Third-Party Insurance policy.</li>
              <li>Mandatory for new vehicles for the first 3 years as per Indian regulations.</li>
              <li>Can be purchased as a standalone policy or as part of a Comprehensive Policy.</li>
            </ul>
          </div>

          {/* Add-On Covers */}
          <div className="border border-gray-600 rounded-lg px-5 py-5 mb-6 blog_container">
            <h2 className="text-base font-bold text-white mb-3">Add-On Covers Available with OD Insurance</h2>
            <ul className="list-disc list-outside pl-5 flex flex-col gap-2">
              <li>Zero Depreciation Cover: Full claim amount without depreciation deduction.</li>
              <li>Roadside Assistance: Help in case of breakdowns or flat tires.</li>
              <li>Engine Protection: Covers engine damages due to waterlogging or oil leaks.</li>
              <li>No-Claim Bonus (NCB) Protection: Retains NCB benefits even after a claim.</li>
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
