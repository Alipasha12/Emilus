export default function Footer() {
  return (
    <div className="flex justify-between bg-white p-3 mt-4 rounded-xl">
      <h1>
        Copyright ©2025 <a>Emilus</a> All rights reserved.
      </h1>
      <div className="flex gap-6">
        <span>Terms & Conditions </span>
        <span className="border-l-2 pl-5 border-gray-300">
          Privacy & Policy
        </span>
      </div>
    </div>
  );
}
