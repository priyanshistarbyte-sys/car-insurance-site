"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import RewardedAd from "./RewardedAd";

const items = [
  {
    title: "Third-Party Liability Only Cover",
    href: "/third-party-liability-only-cover",
    content:
      "Third-Party Liability Only Cover is a type of car insurance that provides financial protection if you cause damage to another person, their vehicle, or property. It does not cover any damage to your own car. This is the most basic and legally required form of car insurance in most countries.",
  },
  {
    title: "Own Damage (OD) Cover",
    href: "/own-damage-cover",
    content:
      "Own Damage (OD) Cover is a type of car insurance that protects the insured vehicle against damages due to accidents, theft, fire, and natural disasters. It is different from Third-Party Insurance, which only covers damages to others.",
  },
  {
    title: "Personal Accident Cover",
    href: "/personal-accident-cover",
    content:
      "Personal Accident (PA) Cover is a car insurance policy that provides financial protection to the policyholder (driver) and passengers in case of accidental injuries, disability, or death. It is mandatory in many countries, including India, for vehicle owners.",
  },
  {
    title: "Uninsured Motorist Protection",
    href: "/uninsured-motorist-protection",
    content:
      "Uninsured Motorist Protection (UM) is an auto insurance policy that covers you if you are involved in an accident with a driver who does not have insurance or flees the scene (hit-and-run). It also includes Underinsured Motorist (UIM) Coverage.",
  },
  {
    title: "Comprehensive Car Insurance",
    href: "/comprehensive-car-insurance",
    content:
      "Comprehensive Car Insurance is an all-inclusive policy that covers both third-party liabilities and own vehicle damages. It provides financial protection against accidents, theft, natural disasters, fire, vandalism, and more.",
  },
];

export default function Accordion() {
  const router = useRouter();
  const [pendingHref, setPendingHref] = useState<string | null>(null);

  const handleClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setPendingHref(href);
  };

  const handleAdClose = () => {
    if (pendingHref) {
      router.push(pendingHref);
    }
    setPendingHref(null);
  };

  return (
    <>
      {pendingHref && <RewardedAd onClose={handleAdClose} />}
      <div className="flex flex-col gap-4">
        {items.map((item, i) => (
          <div key={i}>
            <a
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="w-full flex justify-between items-center px-4 py-3 carInsurance_Button_Container cursor-pointer"
            >
              <span className="font-medium">{item.title}</span>
              <span className="text-gray-400">❯</span>
            </a>
            <p className="mt-2 px-1 text-sm text-gray-300 leading-relaxed">{item.content}</p>
          </div>
        ))}
      </div>
    </>
  );
}
