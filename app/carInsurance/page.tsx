import Accordion from "../components/Accordion";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import BannerAd from "../components/BannerAd";

export default function CarInsurancePage() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto px-4 py-8 flex gap-12">
        <div className="flex-1 max-w-2xl">
          <h1 className="text-2xl font-bold mb-6">Car Insurance</h1>
          <BannerAd />
          <Accordion />

          <div className="mt-8 flex flex-col gap-4 text-sm text-gray-300 leading-relaxed">
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

          <Footer />
        </div>

        <div className="hidden lg:block w-72">
          <Sidebar />
        </div>
      </div>
    </main>
  );
}
