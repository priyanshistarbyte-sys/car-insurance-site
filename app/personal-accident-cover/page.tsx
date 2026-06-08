import Link from "next/link";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function PersonalAccidentCover() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto px-4 py-8 flex gap-12">
        <div className="flex-1 max-w-2xl text-sm text-gray-300 leading-relaxed">
          <div className="header_space ad-slot-prominent"  >
                <div id="top_ad" className="gpt-display-slot gpt-display-slot-banner" ></div>
          </div>
          <h1 className="text-2xl font-bold text-white mb-6">Personal Accident Cover in Car Insurance</h1>

          {/* Intro */}
          <div className="border border-gray-600 rounded-lg px-5 py-5 mb-6 blog_container">
            <p>
              Personal Accident (PA) Cover is a car insurance policy that provides financial
              protection to the policyholder (driver) and passengers in case of accidental injuries,
              disability, or death. It is mandatory in many countries, including India, for vehicle
              owners.
            </p>
          </div>

          {/* Coverage of PA Insurance */}
          <div className="border border-gray-600 rounded-lg px-5 py-5 mb-6 blog_container">
            <h2 className="text-base font-bold text-white mb-3">Coverage of PA Insurance</h2>
            <ul className="list-disc list-outside pl-5 flex flex-col gap-2">
              <li>Accidental Death: Provides a lump sum amount to the nominee if the insured dies in a car accident.</li>
              <li>Permanent Total Disability (PTD): Covers full disability (e.g., loss of both limbs, eyesight, or paralysis).</li>
              <li>Permanent Partial Disability (PPD): Compensation for partial disabilities like loss of one limb or reduced mobility.</li>
              <li>Temporary Total Disability (TTD) (Optional): Provides weekly compensation if the insured is unable to work temporarily.</li>
              <li>Medical Expenses Cover: Reimburses hospitalization, surgeries, and rehabilitation costs.</li>
              <li>Passenger Cover (Optional Add-on): Extends coverage to co-passengers in the vehicle.</li>
              <li>Funeral &amp; Transportation Costs: Covers the cost of cremation or burial and transportation of the deceased.</li>
            </ul>
          </div>

           <div className="header_space" >
                <div id="mid_ad" className="gpt-display-slot"></div>
            </div>

          {/* Exclusions */}
          <div className="border border-gray-600 rounded-lg px-5 py-5 mb-6 blog_container">
            <h2 className="text-base font-bold text-white mb-3">Exclusions (What is NOT Covered?)</h2>
            <ul className="list-disc list-outside pl-5 flex flex-col gap-2">
              <li>Drunk Driving or Driving Without a License</li>
              <li>Intentional Self-Injury or Suicide Attempts</li>
              <li>Accidents Due to Illegal Activities (Racing, Stunts, etc.)</li>
              <li>Pre-existing Conditions or Natural Death</li>
              <li>Injuries from War, Terrorist Acts, or Nuclear Risks</li>
            </ul>
          </div>

          {/* Who Needs */}
          <div className="border border-gray-600 rounded-lg px-5 py-5 mb-6 blog_container">
            <h2 className="text-base font-bold text-white mb-3">Who Needs a PA Cover?</h2>
            <ul className="list-disc list-outside pl-5 flex flex-col gap-2">
              <li>Car Owners &amp; Drivers: (Mandatory in many regions like India).</li>
              <li>Frequent Travelers: Those who drive long distances regularly.</li>
              <li>Passengers: Families or business travelers can opt for additional coverage.</li>
            </ul>
          </div>

          {/* Types */}
          <div className="border border-gray-600 rounded-lg px-5 py-5 mb-6 blog_container">
            <h2 className="text-base font-bold text-white mb-3">Types of PA Cover in India</h2>
            <ul className="list-disc list-outside pl-5 flex flex-col gap-2">
              <li>Mandatory PA Cover: Required for vehicle owners with a minimum ₹15 lakh coverage.</li>
              <li>Standalone PA Cover: A separate policy that provides higher sum insured options.</li>
              <li>PA Cover for Passengers: Optional add-on that protects co-passengers in the car.</li>
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
