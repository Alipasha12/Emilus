"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";
import { Ellipsis, MoveDown, MoveUp, User } from "lucide-react";

export default function Hero() {
  const data = [
    {
      pv: 25,
      amt: 10,
    },
    {
      name: "Page B",
      pv: 15,
      amt: 20,
    },
    {
      name: "Page C",
      pv: 41,
      amt: 30,
    },
    {
      name: "Page D",
      pv: 25,
      amt: 40,
    },
    {
      name: "Page E",
      pv: 44,
      amt: 40,
    },
    {
      name: "Page F",
      pv: 12,
      amt: 50,
    },
    {
      name: "Page G",
      pv: 36,
      amt: 60,
    },
    {
      name: "Page H",
      pv: 19,
      amt: 70,
    },
    {
      name: "Page I",
      pv: 51,
      amt: 80,
    },
  ];
  const members = [
    {
      id: 1,
      img: "/terrance.jpg",
      title: "Terrance Moreno ",
      work: "Software Engineer",
    },
    {
      id: 2,
      img: "/ron.jpg",
      title: "Ron Vargas",
      work: "UI/UX Designer",
    },
    {
      id: 3,
      img: "/luke.jpg",
      title: "Luke Cook",
      work: "HR Executive",
    },
    {
      id: 4,
      img: "/joyce.jpg",
      title: "Joyce Freeman",
      work: "Frontend Develpoer",
    },
    {
      id: 5,
      img: "/samantha.jpg",
      title: "Samantha Phillips",
      work: "Comppliance Manager",
    },
  ];

  const percentage = 87;

  const linedata = [
    { day: "01 Jan", session: 45, views: 35 },
    { day: "02 Jan", session: 51, views: 40 },
    { day: "03 Jan", session: 38, views: 61 },
    { day: "04 Jan", session: 24, views: 42 },
    { day: "05 Jan", session: 32, views: 13 },
    { day: "06 Jan", session: 26, views: 18 },
    { day: "07 Jan", session: 21, views: 29 },
    { day: "08 Jan", session: 19, views: 37 },
    { day: "09 Jan", session: 6, views: 36 },
    { day: "10 Jan", session: 8, views: 50 },
    { day: "11 Jan", session: 15, views: 32 },
    { day: "12 Jan", session: 10, views: 35 },
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar />

      {/* Sidebar */}
      <Sidebar />

      {/* Main Page */}
      <main className="flex-1 h-full overflow-y-scroll p-6 pt-26 bg-gray-100">
        <div className="flex flex-row gap-4">
          <div className="w-screen">
            <div className="flex">
              <div className="w-full lg:w-[75%]">
                <div className="flex w-full flex-col *:lg:w-1/3 lg:flex-row gap-4 p-2 ">
                  <div className="flex flex-col p-3 rounded-xl bg-white">
                    <h1 className="flex text-[20px] text-gray-500 font-semibold pb-4">
                      Revenue
                    </h1>
                    <div className="flex items-center gap-4 pb-3">
                      <h1 className="flex text-[26px] font-bold">$2,454</h1>
                      <span className="flex text-red-500">
                        -11.4
                        <MoveDown size={10} className="mt-2" />
                      </span>
                    </div>
                    <p className="text-slate-600">
                      Compare to last year (2019)
                    </p>
                  </div>
                  <div className="flex flex-col p-3 rounded-xl bg-white">
                    <h1 className="flex text-[20px] text-gray-500 font-semibold pb-4">
                      Sales
                    </h1>
                    <div className="flex items-center gap-4 pb-3">
                      <h1 className="flex text-[26px] font-bold">$6,982</h1>
                      <span className="flex text-green-500">
                        8.2
                        <MoveUp size={10} className="mt-2" />
                      </span>
                    </div>
                    <p className="text-slate-600">
                      Compare to last year (2019)
                    </p>
                  </div>
                  <div className="flex flex-col p-3 rounded-xl bg-white">
                    <h1 className="flex text-[20px] text-gray-500 font-semibold pb-4">
                      Revenue
                    </h1>
                    <div className="flex items-center gap-4 pb-3">
                      <h1 className="flex text-[26px] font-bold">$2,454</h1>
                      <span className="flex text-green-500">
                        11.4
                        <MoveUp size={10} className="mt-2" />
                      </span>
                    </div>
                    <p className="text-slate-600">
                      Compare to last year (2019)
                    </p>
                  </div>
                </div>
                <div className="w-full h-[530px] bg-white rounded-2xl p-6 shadow">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold">Unique Visitors</h2>
                    <div className="flex gap-4 text-sm">
                      <span className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-blue-500" />
                        Session Duration
                      </span>
                      <span className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-green-500" />
                        Page Views
                      </span>
                    </div>
                  </div>

                  <ResponsiveContainer width="100%" height="100%" className="pb-10">
                    <LineChart
                      data={linedata}
                      margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      {/* <Legend /> */}

                      <Line
                        type="monotone"
                        dataKey="session"
                        stroke="#3B82F6"
                        strokeWidth={3}
                        dot={false}
                      />
                      <Line
                        type="monotone"
                        dataKey="views"
                        stroke="#22C55E"
                        strokeWidth={3}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="w-[25%]  hidden lg:block">
                <div className="w-full bg-gray-100 flex-col pl-4 ">
                  <div className="flex flex-col p-4 mb-4 h-[356px] min-w-[150px] bg-white rounded-xl items-center text-center gap-4">
                    <p className="font-bold">Monthly Target</p>
                    <CircularProgressbar
                      value={percentage}
                      className="px-6"
                      styles={{
                        path: {
                          stroke: "blue",
                        },
                        text: {
                          fill: "#000",
                        },
                      }}
                      text={`${percentage}%`}
                    />
                    <h1>You need abit more effects to hit monthly target</h1>
                    <button className="bg-blue-600 text-white p-2 rounded-xl">
                      Learn More
                    </button>
                  </div>
                  <div className="flex flex-col pl-3 pr-3 h-[316px] bg-white rounded-2xl">
                    <LineChart
                      className="bg-white px-7 hidden lg:block"
                      style={{
                        width: "8",
                        height: "8",
                        stroke: "green",
                      }}
                      responsive
                      data={data}
                      margin={{
                        top: 5,
                        right: 20,
                        left: 20,
                        bottom: 2,
                      }}
                    >
                      <Line type="monotone" dataKey="pv" />
                    </LineChart>
                    <div className="flex items-center gap-4 pb-3">
                      <h1 className="flex text-[26px] font-bold">$17,329</h1>
                      <span className="flex text-green-500">
                        3.7
                        <MoveUp size={10} className="mt-2" />
                      </span>
                    </div>
                    <p className="text-slate-600">Active members</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="block lg:hidden">
              <div className="w-full bg-gray-100 flex-col pt-4">
                <div className="flex flex-col pt-4 mb-4 bg-white rounded-xl items-center text-center gap-4">
                  <p className="font-bold">Monthly Target</p>
                  <CircularProgressbar
                    value={percentage}
                    className="px-6 w-100 h-50"
                    styles={{
                      path: {
                        stroke: "blue",
                      },
                      text: {
                        fill: "#000",
                      },
                    }}
                    text={`${percentage}%`}
                  />
                  <h1>You need abit more effects to hit monthly target</h1>
                  <button className="bg-blue-600 text-white p-2 rounded-xl">
                    Learn More
                  </button>
                </div>
                <div className="flex flex-col p-3 bg-white rounded-2xl pb-6">
                  <LineChart
                    className="bg-white h-50 px-7"
                    style={{
                      width: "8",
                      height: "8",
                      stroke: "green",
                    }}
                    responsive
                    data={data}
                    margin={{
                      top: 5,
                      right: 20,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <Line type="monotone" dataKey="pv" />
                  </LineChart>
                  <div className="flex items-center gap-4 pb-3">
                    <h1 className="flex text-[26px] font-bold">$17,329</h1>
                    <span className="flex text-green-500">
                      3.7
                      <MoveUp size={10} className="mt-2" />
                    </span>
                  </div>
                  <p className="text-slate-600">Active members</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row py-4 gap-6 ">
              <div className="bg-white w-full lg:w-[30%] rounded-xl">
                <div>
                  <div className="flex items-center justify-between px-8 py-4">
                    <h1 className="text-[20px] font-bold">New Join Member </h1>
                    <span>
                      <Ellipsis />
                    </span>
                  </div>
                  <div>
                    {members.map((items) => (
                      <div
                        key={items.id}
                        className="border-slate-200 gap-4 flex p-4 w-full"
                      >
                        <Image
                          alt={items.title}
                          width={40}
                          height={40}
                          src={items.img}
                          className=" rounded-4xl w-12 h-12 "
                        />
                        <div className="flex w-full justify-between">
                          <div>
                            <h1 className="text-[14px] font-semibold">
                              {items.title}
                            </h1>
                            <span className="text-[12px] font-medium text-gray-500">
                              {items.work}
                            </span>
                          </div>
                          <button className="flex items-center border-gray-300 hover:border-blue-500 rounded hover:text-blue-500 h-8 p-1 gap-1 border">
                            <User className="text-gray-500" size={16} />
                            <span className="text-gray-500 text-[14px]">
                              ADD
                            </span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-white w-full lg:w-[68%] rounded-xl">
                <div className="flex justify-between p-6">
                  <h1 className="text-[20px] font-bold ">
                    Latest Transactionsx
                  </h1>
                  <Ellipsis />
                </div>
                <table className="w-full px-8">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 px-2 text-left">Customer</th>
                      <th className="py-3 text-left">Date</th>
                      <th className="py-3 text-left">Amount</th>
                      <th className="py-3 text-center">Status</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-4">
                        <div className="flex items-center gap-2 px-2">
                          <span className="bg-green-400 text-[14px] w-7 h-7 flex items-center justify-center rounded-full text-white">
                            CB
                          </span>
                          <span className="text-[14px] text-gray-500">
                            Clayton Bates
                          </span>
                        </div>
                      </td>
                      <td className="text-[14px] text-gray-500">8 May 2020</td>
                      <td className="text-[14px] text-gray-500">$137.00</td>
                      <td className="text-center">
                        <span className="text-[12px] bg-[#E6FFFB] text-[#429C9C] border px-3 py-1 rounded">
                          Approved
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4">
                        <div className="flex items-center gap-2 px-2">
                          <span className="bg-orange-400 text-[14px] w-7 h-7 flex items-center justify-center rounded-full text-white">
                            GF
                          </span>
                          <span className="text-[14px] text-gray-500">
                            Gabriel Frazier
                          </span>
                        </div>
                      </td>
                      <td className="text-[14px] text-gray-500">6 May 2020</td>
                      <td className="text-[14px] text-gray-500">$322.00</td>
                      <td className="text-center">
                        <span className="text-[12px] bg-[#E6FFFB] text-[#429C9C] border px-3 py-1 rounded">
                          Approved
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4">
                        <div className="flex items-center gap-2 px-2">
                          <span className="bg-[#33A0EB] text-[14px] w-7 h-7 flex items-center justify-center rounded-full text-white">
                            DH
                          </span>
                          <span className="text-[14px] text-gray-500">
                            Debra Hamilton
                          </span>
                        </div>
                      </td>
                      <td className="text-[14px] text-gray-500">1 May 2020</td>
                      <td className="text-[14px] text-gray-500">$543.00</td>
                      <td className="text-center">
                        <span className="text-[12px] bg-[#E6F4FF] text-[#33A0EB] border px-3 py-1 rounded">
                          Pending
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4">
                        <div className="flex items-center gap-2 px-2">
                          <span className="bg-yellow-400 text-[14px] w-7 h-7 flex items-center justify-center rounded-full text-white">
                            SW
                          </span>
                          <span className="text-[14px] text-gray-500">
                            Stacey Ward
                          </span>
                        </div>
                      </td>
                      <td className="text-[14px] text-gray-500">
                        28 April 2020
                      </td>
                      <td className="text-[14px] text-gray-500">$876.00</td>
                      <td className="text-center">
                        <span className="text-[12px] bg-[#FFF2E8] text-[#D4380D] border px-3 py-1 rounded">
                          Rejected
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4">
                        <div className="flex items-center gap-2 px-2">
                          <span className="bg-red-400 text-[14px] w-7 h-7 flex items-center justify-center rounded-full text-white">
                            TA
                          </span>
                          <span className="text-[14px] text-gray-500">
                            Troy Alexander
                          </span>
                        </div>
                      </td>
                      <td className="text-[14px] text-gray-500">
                        28 April 2020
                      </td>
                      <td className="text-[14px] text-gray-500">$241.00</td>
                      <td className="text-center">
                        <span className="text-[12px] bg-[#E6FFFB] text-[#429C9C] border px-3 py-1 rounded">
                          Approved
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <Footer />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
