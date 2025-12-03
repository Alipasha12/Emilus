"use client";
import { Line, LineChart } from "recharts";
import { useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
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

  useEffect(() => {
    const loadGoogleCharts = () => {
      const script = document.createElement("script");
      script.src = "https://www.gstatic.com/charts/loader.js";
      script.onload = () => {
        window.google.charts.load("current", { packages: ["corechart"] });
        window.google.charts.setOnLoadCallback(drawChart);
      };
      document.body.appendChild(script);
    };

    const drawChart = () => {
      const data = window.google.visualization.arrayToDataTable([
        ["Year", "Session Duration", "Page Views"],
        ["1 Dec", 45, 35],
        ["2 Dec", 62, 41],
        ["3 Dec", 42, 62],
        ["4 Dec", 33, 42],
        ["5 Dec", 13, 33],
        ["6 Dec", 26, 18],
        ["7 Dec", 21, 29],
        ["8 Dec", 20, 37],
        ["9 Dec", 6, 36],
        ["10 Dec", 8, 51],
        ["11 Dec", 15, 32],
        ["12 Dec", 10, 35],
      ]);

      const options = {
        title: "Unique Visitors",
        curveType: "function",
        legend: { position: "top" },
        colors: ["blue", "green"],
        focusTarget: "category",
        chartArea: {
          width: "90%",
          height: "50%",
        },

        hAxis: {
          gridlines: { color: "transparent" },
        },
        vAxis: {
          gridlines: { color: "transparent" },
          ticks: [0, 10, 20, 30, 40, 50, 60, 70],
        },
      };

      const chart = new window.google.visualization.LineChart(
        document.getElementById("curve_chart")
      );

      chart.draw(data, options);
    };

    loadGoogleCharts();
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar />
      {/* Sidebar */}

      <Sidebar />
      {/* Main Page */}

      <main className="flex-1 h-full overflow-y-scroll p-6 pt-26 bg-gray-100">
        <div className="flex flex-row gap-4">
          <div className="w-[75%]">
            <div className="flex gap-4 p-2 *:w-1/3">
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
                <p className="text-slate-600">Compare to last year (2019)</p>
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
                <p className="text-slate-600">Compare to last year (2019)</p>
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
                <p className="text-slate-600">Compare to last year (2019)</p>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <div id="curve_chart" className="w-full h-136" />
            </div>
          </div>
          <div className="w-[25%] bg-gray-100 flex flex-col p-2 gap-4">
            <div className="flex flex-col p-4 bg-white rounded-xl items-center text-center gap-4">
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
            <div>
              <LineChart
                className="bg-white px-7"
                style={{
                  width: "8",
                  height: "8",
                  stroke: "green", // progress color (red)
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
              <div className="flex flex-col p-3 rounded-xl bg-white">
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
        <div className="flex py-4 gap-6">
          <div className="bg-white w-[30%] rounded-xl">
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
                      <button className="flex items-center hover:border-blue-500 rounded hover:text-blue-500 h-8 p-1 gap-1 border">
                        <User size={16} />
                        <span>ADD</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-white w-[68%] rounded-xl">
            <div className="flex justify-between p-6">
              <h1 className="text-[20px] font-bold ">Latest Transactions </h1>
              <Ellipsis />
            </div>
            <table className="flex flex-col w-full px-8">
              <thead>
                <tr className="flex justify-between pb-4">
                  <th>Customer</th>
                  <th>date</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody className="border-y pb-4">
                <tr className="flex justify-between pt-4">
                  <td className="flex gap-2">
                    <span className="bg-green-400 text-[14px] p-1 w-7 rounded-4xl text-white">
                      CB
                    </span>
                    Clayton Bates
                  </td>
                  <td>8 May 2020</td>
                  <td>$137.00</td>
                  <td className="text-[12px] bg-[#E6FFFB] text-[#429C9C] border text-center p-1">
                    Approved
                  </td>
                </tr>
              </tbody>
              <tbody className="border-y pb-4">
                <tr className="flex justify-between pt-4">
                  <td className="flex gap-2">
                    <span className=" bg-orange-400 text-[14px] p-1 w-7 rounded-4xl text-white">
                      GF
                    </span>
                    Gabriel Frazier
                  </td>
                  <td>6 MAY 2020</td>
                  <td>$322.00</td>
                  <td className="text-[12px] bg-[#E6FFFB] text-[#429C9C] border text-center p-1">
                    Approved
                  </td>
                </tr>
              </tbody>
              <tbody className="border-y pb-4">
                <tr className="flex justify-between pt-4">
                  <td className="flex gap-2">
                    <span className="bg-blue-400 text-[14px] p-1 w-7 rounded-4xl text-white">
                      DH
                    </span>
                    Debra Hamilton
                  </td>
                  <td>1 May 2020</td>
                  <td>$322.00</td>
                  <td className="text-[12px] bg-[#E6F4FF] text-[#095BDE] border text-center p-1">
                    Pending
                  </td>
                </tr>
              </tbody>
              <tbody className="border-y pb-4">
                <tr className="flex justify-between pt-4">
                  <td className="flex gap-2">
                    <span className="bg-yellow-400 text-[14px] p-1 w-7 rounded-4xl text-white">
                      SW
                    </span>
                    Stacey Ward
                  </td>
                  <td>28 APRIL 2020</td>
                  <td>$876.00</td>
                  <td className="text-[12px] bg-[#FFF2E8] text-[#E27C38] border text-center p-1">
                    Rejected
                  </td>
                </tr>
              </tbody>
              <tbody className="border-y pb-4">
                <tr className="flex justify-between pt-4">
                  <td className="flex gap-2">
                    <span className="bg-pink-400 text-[14px] p-1 w-7 rounded-4xl text-white">
                      TA
                    </span>
                    Troy Alexander
                  </td>
                  <td>28 APRIL 2020</td>
                  <td>$241.00</td>
                  <td className="text-[12px] bg-[#E6FFFB] text-[#429C9C] border text-center p-1">
                    Approved
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-between bg-white p-2 rounded-xl">
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
      </main>
    </div>
  );
}
