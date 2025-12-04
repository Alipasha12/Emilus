import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { MoveUp } from "lucide-react";
import Image from "next/image";

export default function Sales() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar />
      <Sidebar />
      <main className="flex-1 h-full overflow-y-scroll p-6 pt-28 bg-gray-100">
        <div className="flex gap-4">
          <div className="w-[65%] rounded-2xl p-4 bg-white">
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <h1 className="text-[18px] font-medium">Weekly Revenue</h1>
                <h1 className="text-[14px] text-gray-400">1-7 Dec, 2025</h1>
              </div>
              <button className="border border-gray-400 text-gray-500 rounded text-[14px] p-1 px-6">
                Download Report
              </button>
            </div>
            <div className="flex gap-6">
                <div className="pt-30 py-10w-20%">
                    <h1 className="text-[30px] font-bold">$27,188.00</h1>
                    <p className="flex text-green-300 py-4 text-[14px]">
                        <MoveUp size={16} className="pt-1"/>
                        17% growth from last week
                    </p>
                    <p className="text-gray-400 text-[14px]">Total gross income figure based from the data range given above</p>
                </div>
                <div className="w-[85%]">hello</div>
            </div>
            <div className="w-[30%]"></div>
            <div className="w-[70%]"></div>
          </div>
          <div className="grid grid-cols-2 w-[35%] rounded-2xl gap-4">
            <div className="bg-white py-4 p-2 flex flex-col items-center *:first:py-4  rounded-2xl text-center *:p-1">
                <Image
                width={50}
                height={50}
                alt="sheet image"
                src={"/sheet.svg"}
                />
              <h1 className="text-[20px] font-bold">11,831</h1>
              <p className="text-gray-700">Total Order</p>
            </div>
            <div className="bg-white py-4 flex flex-col items-center p-2 *:first:py-4  rounded-2xl text-center *:p-1">
                <Image
                width={50}
                height={50}
                alt="recycle image"
                src={"/recycle.svg"}
                />
              <h1 className="text-[20px] font-bold">26.9%</h1>
              <p className="text-gray-700">Conversion rate</p>
            </div>
            <div className="bg-white py-4 flex flex-col items-center p-2 *:first:py-4 rounded-2xl text-center *:p-1">
                <Image
                className=""
                width={50}
                height={50}
                alt="graph image"
                src={"/graph.svg"}
                />
              <h1 className="text-[20px] font-bold">$6,922</h1>
              <p className="text-gray-700">Total profit</p>
            </div>
            <div className="bg-white py-4 flex flex-col items-center p-2 *:first:py-4  rounded-2xl text-center *:p-1">
                <Image
                width={50}
                height={50}
                alt="profile image"
                src={"/profile.svg"}
                />
              <h1 className="text-[20px] font-bold">873</h1>
              <p className="text-gray-700">Daily Visitors</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
