import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-700 pt-8 pb-4">
      <p className="text-sm mb-6" style={{ color: '#94a3b8' }}>
        MyExpertAdvisor brings you quick and valuable knowledge on a variety of topics. Accessible
        anytime, anywhere — no downloads needed, just an internet connection and your curiosity!
      </p>
      <div className="flex gap-16 flex-wrap">
        <div>
          <p className="font-bold text-white mb-2">Information</p>
          <ul className="flex flex-col gap-1 text-sm text-gray-400">
            <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-white mb-2">Terms And Policy</p>
          <ul className="flex flex-col gap-1 text-sm text-gray-400">
            <li><Link href="/terms-of-service" className="hover:text-white">Terms Of Service</Link></li>
            <li><Link href="/cookie-policy" className="hover:text-white">Cookie Policy</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/disclaimer" className="hover:text-white">Disclaimer</Link></li>
            <li><Link href="/gdpr" className="hover:text-white">GDPR</Link></li>
            <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
