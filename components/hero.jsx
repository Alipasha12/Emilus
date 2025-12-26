"use client";
import { Line, LineChart } from "recharts";
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
                      <button className="flex items-center border-gray-300 hover:border-blue-500 rounded hover:text-blue-500 h-8 p-1 gap-1 border">
                        <User className="text-gray-500" size={16} />
                        <span className="text-gray-500 text-[14px]">ADD</span>
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
                  <td className="text-[14px] text-gray-500">28 April 2020</td>
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
                  <td className="text-[14px] text-gray-500">28 April 2020</td>
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
      </main>
    </div>
  );
}
