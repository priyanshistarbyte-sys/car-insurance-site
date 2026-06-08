import Image from "next/image";

export default function Sidebar() {
  return (
    <div className="sticky top-8 flex flex-col items-center text-center gap-4">
      <div className="w-64 h-64">
        <Image src="/sidePoster.svg" alt="Insurance illustration" width={256} height={256} className="object-contain w-full h-full" />
      </div>
      <p className="text-sm text-gray-300 font-semibold">
        Comprehensive coverage for life&apos;s unexpected moments.
      </p>
      <p className="text-xl font-bold text-white">Protect What Matters Most</p>
    </div>
  );
}
