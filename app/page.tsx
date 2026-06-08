import Link from "next/link";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto px-4 py-8 flex gap-12">
        <div className="flex-1 max-w-2xl text-sm text-gray-300 leading-relaxed">

          {/* Ad Banner 1 */}
          <div className="border border-gray-600 rounded-lg px-6 py-5 mb-8 text-center">
            <p className="text-white font-semibold mb-3">Play Free Games on Minutes games</p>
            <div className="flex items-center justify-center gap-2">
              <Link href="/carInsurance" className="bg-[#3b4fad] hover:bg-[#4a5fc0] text-white text-sm font-medium px-5 py-2 rounded transition-colors">
                Play Now
              </Link>
              <span className="text-xs text-gray-400">Ad</span>
            </div>
          </div>
          <div className="header_space ad-slot-prominent">
            <div id="top_ad" className="gpt-display-slot gpt-display-slot-banner"></div>
          </div>

          {/* Main heading */}
          <h1 className="text-base font-bold text-white text-center mb-4">
            Top Insurance Plans: Car, Health, Life, and More
          </h1>

          {/* Ad Banner 2 */}
          <div className="border border-gray-600 rounded-lg px-6 py-5 mb-6 text-center">
            <p className="text-white font-semibold mb-3">Get exclusive insurance info</p>
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center gap-1">
                <Link href="/carInsurance" className="bg-[#3b4fad] hover:bg-[#4a5fc0] text-white text-sm font-medium px-5 py-2 rounded transition-colors">
                 Car
                </Link>
                <span className="text-xs text-gray-400">Ad</span>
              </div>
              <div className="flex items-center gap-1">
                <Link href="/carInsurance" className="bg-[#3b4fad] hover:bg-[#4a5fc0] text-white text-sm font-medium px-5 py-2 rounded transition-colors">
                  Health
                </Link>
                <span className="text-xs text-gray-400">Ad</span>
              </div>
            </div>
          </div>

          {/* Find the Best Insurance */}
          <h2 className="text-base font-bold text-white mb-2">Find the Best Insurance for Every Need</h2>
          <p className="mb-5">
            The right insurance plan offers peace of mind and financial security. Whether you are
            looking for health insurance plans, online car insurance, or a term life insurance
            policy, choosing the best provider ensures maximum benefits. Here, we explore the main
            types of insurance policies and the key benefits you should consider.
          </p>

          {/* Comprehensive Health Insurance */}
          <h2 className="text-base font-bold text-white mb-2">Comprehensive Health Insurance Plans</h2>
          <p className="mb-3">Health insurance is essential for managing medical expenses. Major providers offer options such as:</p>
          <ol className="list-decimal list-outside pl-5 flex flex-col gap-2 mb-6">
            <li><span className="font-bold text-white">Health Care Insurance:</span> Known for its extensive network of hospitals, this plan guarantees cashless treatment for insured individuals.</li>
            <li><span className="font-bold text-white">Family Health Insurance:</span> Designed for families, this type of plan covers multiple members with a single premium.</li>
            <li><span className="font-bold text-white">Private Medical Insurance:</span> Get access to top-notch healthcare facilities without long waiting times.</li>
            <li><span className="font-bold text-white">Mediclaim Policy:</span> A medical insurance policy reimburses hospitalization expenses, providing financial relief during emergencies.</li>
            <li>Whether you choose <span className="font-bold text-white">HDFC ERGO Health Insurance</span> or a plan from another provider, ensure it meets your healthcare needs.</li>
          </ol>

          {/* Car Insurance */}
          <h2 className="text-base font-bold text-white mb-2">Car Insurance: Protect Your Vehicle</h2>
          <p className="mb-3">Car insurance is essential for all vehicle owners. Here are some popular options:</p>
          <ol className="list-decimal list-outside pl-5 flex flex-col gap-2 mb-6">
            <li><span className="font-bold text-white">Tata AIG Car Insurance:</span> Offers comprehensive and <span className="font-bold text-white">third-party car insurance</span> plans with competitive pricing.</li>
            <li><span className="font-bold text-white">Acko Car Insurance:</span> Known for its digital-first approach, Acko simplifies <span className="font-bold text-white">car insurance online.</span></li>
            <li><span className="font-bold text-white">Car Insurance Quotes:</span> Comparing quotes helps you choose the most affordable and effective policy.</li>
            <li>From <span className="font-bold text-white">cheap car insurance</span> to premium coverage, the right policy ensures your car remains protected against accidents and theft.</li>
          </ol>

          {/* Life Insurance */}
          <h2 className="text-base font-bold text-white mb-2">Secure Your Future with Life Insurance</h2>
          <p className="mb-3"><span className="font-bold text-white">Life insurance</span> provides financial support to your loved ones in case of unforeseen events. Explore these options:</p>
          <ol className="list-decimal list-outside pl-5 flex flex-col gap-2 mb-6">
            <li><span className="font-bold text-white">Term Life Insurance:</span> A cost-effective way to secure your family&apos;s future with high coverage amounts.</li>
            <li><span className="font-bold text-white">Life Insurance Policy:</span> Includes a variety of plans like <span className="font-bold text-white">Maxlife Insurance</span>, offering investment and protection benefits.</li>
            <li><span className="font-bold text-white">Life Insurance Quotes:</span> Requesting quotes helps you compare policies to find one that matches your budget.</li>
          </ol>

          {/* Travel Insurance */}
          <h2 className="text-base font-bold text-white mb-2">Travel Insurance: Peace of Mind on the Go</h2>
          <p className="mb-3">Frequent travelers should consider <span className="font-bold text-white">travel insurance</span> to protect against unexpected events during trips. Policies cover:</p>
          <ul className="list-disc list-outside pl-5 flex flex-col gap-2 mb-3">
            <li>Flight cancellations</li>
            <li>Lost baggage</li>
            <li>Medical emergencies abroad</li>
          </ul>
          <p className="mb-6">By comparing travel insurance plans, you can ensure hassle-free journeys every time.</p>

          {/* Specialty Insurance */}
          <h2 className="text-base font-bold text-white mb-2">Specialty Insurance for Businesses and Homes</h2>
          <p className="mb-6">
            Insurance isn&apos;t limited to personal needs. Businesses can benefit from{" "}
            <span className="font-bold text-white">public liability insurance</span> or{" "}
            <span className="font-bold text-white">professional indemnity insurance</span>, while
            homeowners can explore <span className="font-bold text-white">home insurance</span> or{" "}
            <span className="font-bold text-white">house insurance</span> for property protection.
          </p>

          {/* Choosing the Best Provider */}
          <h2 className="text-base font-bold text-white mb-2">Choosing the Best Insurance Provider</h2>
          <p className="mb-4">
            When selecting an insurance provider, look for companies with a strong reputation,
            competitive rates, and excellent customer service. Providers like{" "}
            <span className="font-bold text-white">TataAIG</span>,{" "}
            <span className="font-bold text-white">HDFC ERGO</span>, and{" "}
            <span className="font-bold text-white">Maxlife Insurance</span> consistently rank among
            the best for their diverse range of policies and commitment to customer satisfaction.
          </p>
          <p className="mb-4">
            Car insurance is an essential financial safeguard that protects you, your vehicle, and
            others on the road from unexpected risks and expenses. One of the most basic and legally
            required forms of coverage is Third-Party Liability Only Cover, which ensures that any
            damage or injury caused to another person, vehicle, or property is financially covered.
            While this plan is cost-effective and meets legal requirements, it does not provide
            protection for your own vehicle. To address this gap, Own Damage (OD) Cover comes into
            play, offering financial assistance for repairs or replacement of your car due to
            accidents, natural disasters, theft, or fire.
          </p>
          <p className="mb-4">
            Another important component of car insurance is Personal Accident Cover, which provides
            compensation in case of injury, disability, or death resulting from a car accident. This
            coverage is crucial for ensuring the financial security of you and your family during
            unforeseen events. Additionally, Uninsured Motorist Protection safeguards you if you are
            involved in an accident with a driver who does not have valid insurance.
          </p>
          <p className="mb-4">
            For maximum protection, Comprehensive Car Insurance is the most recommended option. It
            combines both third-party liability and own damage coverage, along with additional
            benefits like personal accident protection and optional add-ons. This type of policy
            offers complete peace of mind by covering a wide range of risks, including accidents,
            theft, natural calamities, and man-made damages.
          </p>
          <p className="mb-6">
            Choosing the right car insurance policy involves evaluating your needs, driving habits,
            and budget. By understanding the benefits of each type of coverage and selecting a
            well-rounded plan, you can ensure optimal protection and long-term savings while also
            benefiting from high-value insurance features that align with modern financial planning
            strategies.
          </p>

          {/* Start Your Insurance Journey */}
          <h2 className="text-base font-bold text-white mb-2">Start Your Insurance Journey Today</h2>
          <p className="mb-6">
            From <span className="font-bold text-white">medical insurance</span> to{" "}
            <span className="font-bold text-white">car insurance quotes</span>, there&apos;s an
            insurance plan for every need. Compare options, request quotes, and select a policy that
            aligns with your lifestyle and budget. Secure your future today with the right coverage!
          </p>

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
