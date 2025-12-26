"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { MoveDown, MoveUp, MoveUpIcon } from "lucide-react";
import Image from "next/image";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data2 = [
  { date: "08 Jul", value: 45 },
  { date: "09 Jul", value: 52 },
  { date: "10 Jul", value: 38 },
  { date: "11 Jul", value: 24 },
  { date: "12 Jul", value: 33 },
  { date: "13 Jul", value: 26 },
  { date: "14 Jul", value: 21 },
];
const data = [
  { name: "Cloths", value: 3561 },
  { name: "Devices", value: 1443 },
  { name: "Bags", value: 2462 },
  { name: "Watches", value: 1693 },
];

const COLORS = ["#3b82f6", "#22c55e", "#facc15", "#f97316"];

export default function Sales() {
  const total = data.reduce((sum, item) => sum + item.value, 0);

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
            <div className="flex ">
              <div className="pt-35 py-10 w-20%">
                <h1 className="text-[30px] font-bold">$27,188.00</h1>
                <p className="flex text-green-300 py-4 text-[14px]">
                  <MoveUp size={16} className="pt-1" />
                  17% growth from last week
                </p>
                <p className="text-gray-400 text-[14px]">
                  Total gross income figure based from the data range given
                  above
                </p>
              </div>
              <div className="w-full bg-white pt-18 rounded-2xl h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data2}>
                    <CartesianGrid
                      strokeDasharray="1"
                      vertical={false}
                      stroke="#e5e7eb"
                    />

                    <XAxis dataKey="date" axisLine={false} tickLine={false} />

                    <YAxis axisLine={false} tickLine={false} />

                    <Tooltip />

                    <Bar
                      dataKey="value"
                      fill="#3b82f6"
                      radius={[6, 6, 0, 0]}
                      barSize={10}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
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
        <div className=" flex gap-6 pt-8">
          <div className="pt-6 px-8 w-[50%] rounded-2xl bg-white">
            <h1 className="text-[18px] font-bold">Top Product</h1>
            <ul>
              <div className="flex py-2 items-center justify-between pt-8">
                <div className="flex gap-2">
                  <Image
                    alt="jacket image is missing"
                    className="p-1 rounded-xl"
                    src={"/bluejacket.jpg"}
                    width={42}
                    height={8}
                  />
                  <div>
                    <li className="text-[14px] font-medium">Blue Jacket</li>
                    <p className="text-gray-500 text-[14px]">cloths</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <h1 className="text-gray-500 text-[14px]">sales</h1>
                  <p className="flex text-[14px] font-semibold">
                    $5,930
                    <MoveUpIcon className="mt-1 text-green-400" size={12} />
                  </p>
                </div>
              </div>
              <div className="flex py-2 items-center justify-between pt-4">
                <div className="flex gap-2">
                  <Image
                    alt="sneaker image is missing"
                    className="p-1 rounded-xl"
                    src={"/whitesneaker.jpg"}
                    width={42}
                    height={8}
                  />
                  <div>
                    <li className="text-[14px] font-medium">White Sneaker</li>
                    <p className="text-gray-500 text-[14px]">cloths</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <h1 className="text-gray-500 text-[14px]">sales</h1>
                  <p className="flex text-[14px] font-semibold">
                    $5,117{" "}
                    <MoveUpIcon className="mt-1 text-green-400" size={12} />
                  </p>
                </div>
              </div>
              <div className="flex py-2 items-center justify-between pt-4">
                <div className="flex gap-2">
                  <Image
                    alt="headphone image is missing"
                    className="p-1 rounded-xl"
                    src={"/redbeatheadphone.jpg"}
                    width={42}
                    height={8}
                  />
                  <div>
                    <li className="text-[14px] font-medium">
                      Red Beat Headphone
                    </li>
                    <p className="text-gray-500 text-[14px]">Devices</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <h1 className="text-gray-500 text-[14px]">sales</h1>
                  <p className="flex text-[14px] font-semibold">
                    $4,701
                    <MoveDown className="mt-1 text-red-400" size={12} />
                  </p>
                </div>
              </div>
              <div className="flex py-2 items-center justify-between pt-4">
                <div className="flex gap-2">
                  <Image
                    alt="watch image is missing"
                    className="p-1 rounded-xl"
                    src={"/applewatch.jpg"}
                    width={42}
                    height={8}
                  />
                  <div>
                    <li className="text-[14px] font-medium">Apple Watch</li>
                    <p className="text-gray-500 text-[14px]">Devices</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <h1 className="text-gray-500 text-[14px]">sales</h1>
                  <p className="flex text-[14px] font-semibold">
                    $2,833
                    <MoveUpIcon className="mt-1 text-green-400" size={12} />
                  </p>
                </div>
              </div>
              <div className="flex py-2 items-center justify-between pt-4 pb-8">
                <div className="flex gap-2">
                  <Image
                    alt="bagpack image is missing"
                    className="p-1 rounded-xl"
                    src={"/bluebackpack.jpg"}
                    width={42}
                    height={8}
                  />
                  <div>
                    <li className="text-[14px] font-medium">Blue Bagpack</li>
                    <p className="text-gray-500 text-[14px]">Bags</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <h1 className="text-gray-500 text-[14px]">sales</h1>
                  <p className="flex text-[14px] font-semibold">
                    $1,692
                    <MoveDown className="mt-1 text-red-400" size={12} />
                  </p>
                </div>
              </div>
            </ul>
          </div>
          <div className="pt-6 px-8 w-[50%] rounded-2xl bg-white">
            <ResponsiveContainer className="pb-6">
              <PieChart>
                <Pie
                  data={data}
                  innerRadius={100}
                  outerRadius={110}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {data.map((_, index) => (
                    <Cell key={index} fill={COLORS[index]} />
                  ))}
                </Pie>

                {/* Center Text */}
                <text
                  x="50%"
                  y="38%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  style={{ fontSize: 18, fontWeight: "600", fill: "#0f172a" }}
                >
                  Sales by Category
                </text>
                <text
                  x="50%"
                  y="45%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  style={{ fontSize: 16, fill: "#0f172a" }}
                >
                  {total}
                </text>

                <Legend
                  verticalAlign="bottom"
                  iconType="circle"
                  iconSize={6}
                  layout="vertical"
                  formatter={(value, entry) => (
                    <span style={{ color: "black" }}>
                      {value}
                      <span
                        style={{
                          marginLeft: 12,
                          fontWeight: 600,
                          justifyContent: "space-between", // 👈 key
                          width: 180,
                          color: "black",
                        }}
                      >
                        {entry?.payload?.value}
                      </span>
                    </span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-white mt-8 pt-8 rounded-2xl px-8 gap-6 pb-8">
          <h1>Recent Order</h1>
          <table className="w-full border-collapse">
            <thead className="bg-gray-200">
              <tr className="text-center">
                <th className="p-3 rounded-l">ID</th>
                <th className="p-3 text-left">Product</th>
                <th className="p-3">Date</th>
                <th className="p-3">Order Status</th>
                <th className="p-3">Payment Status</th>
                <th className="p-3 rounded-r">Total</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-gray-300 text-center">
                <td className="py-4 text-gray-500 text-sm">#5331</td>
                <td className="py-4 text-left">
                  <div className="flex items-center gap-2 ml-10 text-[15px]">
                    <Image
                      src="/eileen.jpg"
                      alt="Eileen Horton"
                      width={30}
                      height={30}
                      className="rounded-2xl"
                    />
                    Eileen Horton
                  </div>
                </td>
                <td className="py-4 text-gray-500 text-sm">11-11-2019</td>
                <td className="py-4 text-[13px] text-indigo-500">
                  <span className="border px-2 py-1 rounded bg-indigo-50">
                    Ready
                  </span>
                </td>
                <td className="py-4 text-gray-500 text-sm">
                  <ul className="list-disc list-inside marker:text-green-500">
                    <li>Paid</li>
                  </ul>
                </td>
                <td className="py-4 text-gray-500 text-sm">$677.00</td>
              </tr>

              <tr className="border-b border-gray-300 text-center">
                <td className="py-4 text-gray-500 text-sm">#5328</td>
                <td className="py-4 text-left">
                  <div className="flex items-center gap-2 ml-10 text-[15px]">
                    <Image
                      src="/terrance.jpg"
                      alt="Terrance Moreno"
                      width={30}
                      height={30}
                      className="rounded-2xl"
                    />
                    Terrance Moreno
                  </div>
                </td>
                <td className="py-4 text-gray-500 text-sm">20-10-2019</td>
                <td className="py-4 text-[13px] text-indigo-500">
                  <span className="border px-2 py-1 rounded bg-indigo-50">
                    Ready
                  </span>
                </td>
                <td className="py-4 text-gray-500 text-sm">
                  <ul className="list-disc list-inside marker:text-green-500">
                    <li>Paid</li>
                  </ul>
                </td>
                <td className="py-4 text-gray-500 text-sm">$1328.35</td>
              </tr>

              <tr className="border-b border-gray-300 text-center">
                <td className="py-4 text-gray-500 text-sm">#5321</td>
                <td className="py-4 text-left">
                  <div className="flex items-center gap-2 ml-10 text-[15px]">
                    <Image
                      src="/ron.jpg"
                      alt="Ron Vargas"
                      width={30}
                      height={30}
                      className="rounded-2xl"
                    />
                    Ron Vargas
                  </div>
                </td>
                <td className="py-4 text-gray-500 text-sm">05-07-2020</td>
                <td className="py-4 text-[13px] text-teal-600">
                  <span className="border px-2 py-1 rounded bg-teal-50">
                    Shipped
                  </span>
                </td>
                <td className="py-4 text-gray-500 text-sm">
                  <ul className="list-disc list-inside marker:text-green-500">
                    <li>Paid</li>
                  </ul>
                </td>
                <td className="py-4 text-gray-500 text-sm">$629.00</td>
              </tr>

              <tr className="border-b border-gray-300 text-center">
                <td className="py-4 text-gray-500 text-sm">#5287</td>
                <td className="py-4 text-left">
                  <div className="flex items-center gap-2 ml-10 text-[15px]">
                    <Image
                      src="/luke.jpg"
                      alt="Luke Cook"
                      width={30}
                      height={30}
                      className="rounded-2xl"
                    />
                    Luke Cook
                  </div>
                </td>
                <td className="py-4 text-gray-500 text-sm">16-01-2019</td>
                <td className="py-4 text-[13px] text-teal-600">
                  <span className="border px-2 py-1 rounded bg-teal-50">
                    Shipped
                  </span>
                </td>
                <td className="py-4 text-gray-500 text-sm">
                  <ul className="list-disc list-inside marker:text-green-500">
                    <li>Paid</li>
                  </ul>
                </td>
                <td className="py-4 text-gray-500 text-sm">$25.90</td>
              </tr>

              <tr className="border-b border-gray-300 text-center">
                <td className="py-4 text-gray-500 text-sm">#5351</td>
                <td className="py-4 text-left">
                  <div className="flex items-center gap-2 ml-10 text-[15px]">
                    <Image
                      src="/joyce.jpg"
                      alt="Joyce Freeman"
                      width={30}
                      height={30}
                      className="rounded-2xl"
                    />
                    Joyce Freeman
                  </div>
                </td>
                <td className="py-4 text-gray-500 text-sm">04-06-2020</td>
                <td className="py-4 text-[13px] text-indigo-500">
                  <span className="border px-2 py-1 rounded bg-indigo-50">
                    Ready
                  </span>
                </td>
                <td className="py-4 text-gray-500 text-sm">
                  <ul className="list-disc list-inside marker:text-yellow-500">
                    <li>Pending</li>
                  </ul>
                </td>
                <td className="py-4 text-gray-500 text-sm">$817.50</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <Footer />
        </div>
      </main>
    </div>
  );
}
