import { Bell, Globe, Logs,Search, Settings } from "lucide-react";
import Image from "next/image";

export default function Navbar() {

  return (
    <div className="fixed bg-white border-2 border-gray-300 z-1 w-full pb-4">
      <section className="flex px-8 justify-between pt-2">
        <div className="flex w-full h-16 gap-12">
        <Image
          width={120}
          height={15}
          alt="logo is missing"
          src={"/logo.png"}
          />
          <div className="flex pt-4 gap-7">
          <span className="pl-14 p-1"><Logs/></span>
          <span className="relative">
            <Search className="absolute text-gray-400 left-2 top-2" size={20} />
            <input type="text" className="border rounded-2xl border-gray-400 p-1 pl-8" placeholder="search . . ."/>
          </span>
          </div>
          </div>
      <div className="flex pt-4 gap-6">
        <span><Bell/></span>
        <span><Globe /></span>
        <span><Settings /></span>
        <span>hello frontend</span>
      </div>
      </section>
    </div>
  );
}
