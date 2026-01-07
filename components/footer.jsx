export default function Footer() {
  return (
    <div className="flex w-full justify-between bg-white p-3 mt-4 rounded-xl">
      <h1 className="text-[10px] md:text-[16px]">
        Copyright ©2025 <a>Emilus</a> All rights reserved.
      </h1>
      <div className="flex gap-6">
        <span className="text-[10px] md:text-[16px]">Terms & Conditions </span>
        <span className="border-l-2 pl-5 border-gray-300 text-[10px] sm:text-[12px] md:text-[16px]">
          Privacy & Policy
        </span>
      </div>
    </div>
  );
}
