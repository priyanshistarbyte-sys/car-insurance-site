"use client";
import { useState } from "react";
import Link from "next/link";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const faqs = [
  {
    q: "Is the content free to access?",
    a: "Yes, all of our articles and blog posts are completely free to read. We believe in making valuable information accessible to everyone, so you can improve your life without any cost.",
  },
  {
    q: "How often do you publish new content?",
    a: "We publish fresh content multiple times a week to keep you up to date with the latest trends, tips, and advice in health, finance, and lifestyle. We make sure to cover a wide variety of topics to meet the needs of our diverse audience.",
  },
  {
    q: "How do I contact you if I have questions or feedback?",
    a: (
      <>
        We&apos;d love to hear from you! You can reach us through our{" "}
        <Link href="/contact" className="text-blue-400 underline">Contact Us</Link>{" "}
        page for any inquiries, feedback, or collaboration opportunities. Whether you have a question or want to share your thoughts, we&apos;re always happy to connect.
      </>
    ),
  },
  {
    q: "Who is behind the content at MyExpertAdvisor?",
    a: "Our team consists of experienced writers, health and finance experts, and guest contributors who specialize in their respective fields. We ensure that all content is well-researched, fact-checked, and based on credible sources, so you always get the best advice.",
  },
  {
    q: "Do you have a privacy policy?",
    a: (
      <>
       Yes, your privacy is important to us. We comply with GDPR regulations and other privacy laws to protect your personal information. Please visit our {" "}
        <Link href="/privacy-policy" className="text-blue-400 underline">Privacy Policy</Link>{" "} page for detailed information about how we collect, use, and safeguard your data.
      </>
    ),
  },
  {
    q: "Can I share your articles on social media?",
    a: "Definitely! We encourage you to share any articles you find helpful with your friends and followers.",
  },
  {
    q: "Can I contribute to MyExpertAdvisor?",
    a: (
      <>
       We are always open to contributions from passionate writers and experts! If you'd like to contribute to MyExpertAdvisor, please visit our{" "}
        <Link href="/contact" className="text-blue-400 underline">Contact Us</Link>{" "}
        page and submit your article idea or proposal. We&apos;re particularly interested in articles related to health, finance, and lifestyle.
      </>
    ),
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto px-4 py-8 flex gap-12">
        <div className="flex-1 max-w-2xl">
          <h1 className="text-2xl font-bold text-white mb-6">FAQ</h1>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full text-left px-4 py-3 bg-[#1e3a8a] hover:bg-[#1e40af] rounded text-sm font-semibold text-white"
                >
                  {i + 1}. {faq.q}
                </button>
                {open === i && (
                  <div className="px-4 py-4 bg-[#0f172a] text-sm text-gray-200 leading-relaxed border border-[#1e3a8a] rounded-b mt-0">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
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
