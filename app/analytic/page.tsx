"use client";
import { useEffect } from "react";
import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { MoveDown, MoveUp } from "lucide-react";
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function Analytic() {
  const barchart = [
    {
      name: "1 Dec",
      uv: 40,
      pv: 24,
    },
    {
      name: "2 dec",
      uv: 30,
      pv: 13,
    },
    {
      name: "3 Dec",
      uv: 20,
      pv: 46,
    },
    {
      name: "4 Dec",
      uv: 27,
      pv: 39,
    },
    {
      name: "5 Dec",
      uv: 18,
      pv: 48,
    },
    {
      name: "6 Dec",
      uv: 23,
      pv: 38,
    },
    {
      name: "7 Dec",
      uv: 34,
      pv: 43,
    },
  ];

  const facebook = [
    {
      fb: 12,
    },
    {
      fb: 14,
    },
    {
      fb: 2,
    },
    {
      fb: 47,
    },
    {
      fb: 42,
    },
    {
      fb: 15,
    },
    {
      fb: 47,
    },
  ];
  const visitor = [
    {
      sd: 9,
    },
    {
      sd: 32,
    },
    {
      sd: 12,
    },
    {
      sd: 42,
    },
    {
      sd: 25,
    },
    {
      sd: 33,
    },
  ];
  const linkedin = [
    {
      ln: 25,
    },
    {
      ln: 66,
    },
    {
      ln: 41,
    },
    {
      ln: 89,
    },
    {
      ln: 63,
    },
    {
      ln: 25,
    },
    {
      ln: 44,
    },
  ];
  const dribble = [
    {
      db: 12,
    },
    {
      db: 14,
    },
    {
      db: 2,
    },
    {
      db: 47,
    },
    {
      db: 42,
    },
    {
      db: 15,
    },
    {
      db: 47,
    },
    {
      db: 75,
    },
    {
      db: 65,
    },
    {
      db: 19,
    },
    {
      db: 14,
    },
  ];
  const youtube = [
    {
      yt: 10,
    },
    {
      yt: 9,
    },
    {
      yt: 29,
    },
    {
      yt: 19,
    },
    {
      yt: 22,
    },
    {
      yt: 9,
    },
    {
      yt: 12,
    },
  ];
  useEffect(() => {
    // Load Google Charts script
    const script = document.createElement("script");
    script.src = "https://www.gstatic.com/charts/loader.js";
    script.onload = () => {
      window.google.charts.load("current", { packages: ["corechart"] });
      window.google.charts.setOnLoadCallback(drawChart);
    };
    document.body.appendChild(script);

    function drawChart() {
      const data = window.google.visualization.arrayToDataTable([
        [" Task", "Hours per Day"],
        [" Desktops", 3561],
        [" Tablets", 1443],
        [" Mobiles", 2462],
      ]);

      const options = {
        height: 450,
        title: "Session device",
        pieHole: 0.9, // donut effect
        colors: ["#FFC107", "#3E82F7", "#04D182"],
        legend: { position: "bottom" },
      };

      const chart = new window.google.visualization.PieChart(
        document.getElementById("donutchart")
      );

      chart.draw(data, options);
    }
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.gstatic.com/charts/loader.js";
    script.onload = () => {
      window.google.charts.load("current", {
        packages: ["geochart"],
      });

      window.google.charts.setOnLoadCallback(drawRegionsMap);
    };
    document.body.appendChild(script);

    function drawRegionsMap() {
      const data = window.google.visualization.arrayToDataTable([
        ["Country", "percentage"],
        ["India", 12.42],
        ["United States", 37.61],
        ["Brazil", 16.79],
        ["Thailand", 5.11],
        ["Malaysia", 7.68],
        ["China", 9.85],
      ]);

      var options = {
        legend: "None",
        colorAxis: {
          values: [5.11, 7.68, 9.85, 12.42, 16.79, 37.61], // Map these specific values
          colors: ["purple", "pink", "orange", "yellow", "green", "blue"], // To these specific colors
        },
      };

      const chart = new window.google.visualization.GeoChart(
        document.getElementById("regions_div")
      );

      chart.draw(data, options);
    }
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Sidebar */}
      <Sidebar />

      {/* Main Page */}
      <main className="flex flex-col w-full overflow-y-scroll p-6 pt-26 bg-gray-100">
        <div className="flex flex-row">
          <div
            className="bg-white border-y border-l border-gray-200 w-[30%] rounded-l-2xl px-8 py-4"
            style={{ height: "450px" }}
          >
            <h1 className="text-[20px] font-bold">Entrance by region</h1>
            <div className="py-6 h-22">
              <p className="flex h-6 text-[26px] items-center gap-1 font-medium">
                <Image width={20} height={10} alt="us logo" src={"/us.png"} />
                37.61%
              </p>
              <p className="text-slate-400 pt-2">Top entrance region</p>
            </div>
            <ul className="flex flex-col gap-3  *:flex pt-4 *:justify-between">
              <li className="text-gray-400">
                United States of America
                <span className="text-black">37.61%</span>
              </li>
              <li className="text-gray-400">
                Brazil <span className="text-black">16.79%</span>
              </li>
              <li className="text-gray-400">
                India <span className="text-black">12.42%</span>
              </li>
              <li className="text-gray-400">
                China <span className="text-black">9.85%</span>
              </li>
              <li className="text-gray-400">
                Malaysia <span className="text-black">7.68%</span>
              </li>
              <li className="text-gray-400">
                Thailand <span className="text-black">5.11%</span>
              </li>
            </ul>
          </div>
          <div
            className="w-[70%] h-[450px] border-2 border-gray-200"
            id="regions_div"
            style={{ height: "450px" }}
          ></div>
        </div>
        <div
          className="py-4 w-full h-screen"
          id="donutchart"
          style={{ height: "450px" }}
        ></div>
        <div className=" flex gap-6 pt-8">
          <div className="pt-6 px-8 w-[50%] rounded-2xl bg-white">
            <h1 className="text-[18px] font-bold">Most visited pages</h1>
            <ul>
              <div className="flex py-2 border-b border-gray-400 items-center justify-between pt-8">
                <div>
                  <li className="text-[16px] font-bold">Home</li>
                  <p className="text-gray-500 text-[14px]">/app/home</p>
                </div>
                <button className="flex items-center font-bold border-blue-500 rounded text-[12px] text-blue-700 h-6 p-1 gap-1 border">
                  7,616
                </button>
              </div>
              <div className="flex py-2 border-b border-gray-400 items-center justify-between pt-4">
                <div>
                  <li className="text-[16px] font-bold">Resources</li>
                  <p className="text-gray-500 text-[14px]">/app/resource</p>
                </div>
                <button className="flex items-center font-bold border-blue-500 rounded text-[12px] text-blue-700 h-6 p-1 gap-1 border">
                  6,923
                </button>
              </div>
              <div className="flex py-2 border-b border-gray-400 items-center justify-between pt-4">
                <div>
                  <li className="text-[16px] font-bold">Integrations</li>
                  <p className="text-gray-500 text-[14px]">
                    /integrations/paypal
                  </p>
                </div>
                <button className="flex items-center font-bold border-blue-500 rounded text-[12px] text-blue-700 h-6 p-1 gap-1 border">
                  5,228
                </button>
              </div>
              <div className="flex py-2 border-b border-gray-400 items-center justify-between pt-4">
                <div>
                  <li className="text-[16px] font-bold">Partners</li>
                  <p className="text-gray-500 text-[14px]">
                    partners/our-partners
                  </p>
                </div>
                <button className="flex items-center font-bold border-blue-500 rounded text-[12px] text-blue-700 h-6 p-1 gap-1 border">
                  3,512
                </button>
              </div>
              <div className="flex py-2 items-center justify-between pt-4 pb-8">
                <div>
                  <li className="text-[16px] font-bold">Developers</li>
                  <p className="text-gray-500 text-[14px]">developers/docs/</p>
                </div>
                <button className="flex items-center font-bold border-blue-500 rounded text-[12px] text-blue-700 h-6 p-1 gap-1 border">
                  1,707
                </button>
              </div>
            </ul>
          </div>
          <div className="pt-6 px-8 w-[50%] rounded-2xl bg-white">
            <h1 className="text-[18px] font-bold">Social media referrals</h1>
            <ul>
              <div className="flex py-2 border-b border-gray-400 items-center justify-between pt-8">
                <div className="flex items-center gap-4">
                  <span>
                    <Image
                      width={30}
                      height={30}
                      alt="us logo"
                      src={"/facebook.svg"}
                    />
                  </span>
                  <div>
                    <li className="text-[16px] font-bold">Facebook</li>
                    <p className="text-gray-400 text-[14px]">Total: 322</p>
                  </div>
                </div>
                <div className="flex items-center w-[30%]">
                  <LineChart
                    style={{
                      width: "50%",
                      aspectRatio: 1.6,
                      maxWidth: 70,
                      margin: "auto",
                    }}
                    data={facebook}
                  >
                    <XAxis hide />
                    <YAxis hide />

                    <Line
                      type="monotone"
                      dataKey="fb"
                      stroke="green"
                      dot={false}
                      activeDot={{ r: 5 }}
                    />

                    <Tooltip
                      formatter={(value) => [value]} // show no "sd"
                      labelFormatter={() => ""} // hide label
                    />
                  </LineChart>

                  <button className="flex items-center font-bold text-[14px] h-6 p-1 gap-1">
                    30.1%
                    <MoveUp className="text-green-500" size={12} />
                  </button>
                </div>
              </div>
              <div className="flex py-3 border-b border-gray-400 items-center justify-between  ">
                <div className="flex items-center gap-4">
                  <span>
                    <Image
                      width={30}
                      height={30}
                      alt="us logo"
                      src={"/twitter.svg"}
                    />
                  </span>
                  <div>
                    <li className="text-[16px] font-bold">Twitter</li>
                    <p className="text-gray-400 text-[14px]">Total: 217</p>
                  </div>
                </div>
                <div className="flex items-center w-[30%]">
                  <LineChart
                    style={{
                      width: "50%",
                      aspectRatio: 1.6,
                      maxWidth: 70,
                      margin: "auto",
                    }}
                    data={visitor}
                  >
                    <XAxis hide />
                    <YAxis hide />

                    <Line
                      type="monotone"
                      dataKey="sd"
                      stroke="green"
                      dot={false}
                      activeDot={{ r: 5 }}
                    />

                    <Tooltip
                      formatter={(value) => [value]} // show no "sd"
                      labelFormatter={() => ""} // hide label
                    />
                  </LineChart>
                  <button className="flex items-center font-bold text-[14px] h-6 p-1 gap-1">
                    21.6%
                    <MoveUp className="text-green-500" size={12} />
                  </button>
                </div>
              </div>
              <div className="flex py-3 border-b border-gray-400 items-center justify-between  ">
                <div className="flex items-center gap-4">
                  <span>
                    <Image
                      width={30}
                      height={30}
                      alt="us logo"
                      src={"/youtube.svg"}
                    />
                  </span>
                  <div>
                    <li className="text-[16px] font-bold">Youtube</li>
                    <p className="text-gray-400 text-[14px]">Total: 188</p>
                  </div>
                </div>
                <div className="flex items-center w-[30%]">
                  <LineChart
                    style={{
                      width: "50%",
                      aspectRatio: 1.6,
                      maxWidth: 70,
                      margin: "auto",
                    }}
                    data={youtube}
                  >
                    <XAxis hide />
                    <YAxis hide />

                    <Line
                      type="monotone"
                      dataKey="yt"
                      stroke="red"
                      dot={false}
                      activeDot={{ r: 5 }}
                    />

                    <Tooltip
                      formatter={(value) => [value]} // show no "sd"
                      labelFormatter={() => ""} // hide label
                    />
                  </LineChart>
                  <button className="flex items-center font-bold text-[14px] h-6 p-1 gap-1">
                    -7.1%
                    <MoveDown className="text-red-500" size={12} />
                  </button>
                </div>
              </div>
              <div className="flex py-3 border-b border-gray-400 items-center justify-between  ">
                <div className="flex items-center gap-4">
                  <span>
                    <Image
                      width={30}
                      height={30}
                      alt="us logo"
                      src={"/linkedin.svg"}
                    />
                  </span>
                  <div>
                    <li className="text-[16px] font-bold">Linkedin</li>
                    <p className="text-gray-400 text-[14px]">Total: 207</p>
                  </div>
                </div>
                <div className="flex items-center w-[30%]">
                  <LineChart
                    style={{
                      width: "50%",
                      aspectRatio: 1.6,
                      maxWidth: 70,
                      margin: "auto",
                    }}
                    data={linkedin}
                  >
                    <XAxis hide />
                    <YAxis hide />

                    <Line
                      type="monotone"
                      dataKey="ln"
                      stroke="green"
                      dot={false}
                      activeDot={{ r: 5 }}
                    />

                    <Tooltip
                      formatter={(value) => [value]} // show no "sd"
                      labelFormatter={() => ""} // hide label
                    />
                  </LineChart>

                  <button className="flex items-center font-bold text-[14px] h-6 p-1 gap-1">
                    11.9%
                    <MoveUp className="text-green-500" size={12} />
                  </button>
                </div>
              </div>
              <div className="flex py-3 border-b border-gray-400 items-center justify-between  ">
                <div className="flex items-center gap-4">
                  <span>
                    <Image
                      width={30}
                      height={30}
                      alt="us logo"
                      src={"/dribble.svg"}
                    />
                  </span>
                  <div>
                    <li className="text-[16px] font-bold">Dribble</li>
                    <p className="text-gray-400 text-[14px]">Total: 86</p>
                  </div>
                </div>
                <div className="flex items-center w-[30%]">
                  <LineChart
                    style={{
                      width: "50%",
                      aspectRatio: 1.6,
                      maxWidth: 70,
                      margin: "auto",
                    }}
                    data={dribble}
                  >
                    <XAxis hide />
                    <YAxis hide />

                    <Line
                      type="monotone"
                      dataKey="db"
                      stroke="red"
                      dot={false}
                      activeDot={{ r: 5 }}
                    />

                    <Tooltip
                      formatter={(value) => [value]} // show no "sd"
                      labelFormatter={() => ""} // hide label
                    />
                  </LineChart>

                  <button className="flex items-center font-bold text-[14px] h-6 p-1 gap-1">
                    -28.5%
                    <MoveDown className="text-red-500" size={12} />
                  </button>
                </div>
              </div>
            </ul>
          </div>
        </div>
        <div>
          <div className="bg-white mt-6 rounded-2xl p-8">
            <BarChart
              style={{
                aspectRatio: 1.618,
                height: 400,
                width:1200,
                maxWidth: 1400
              }}
              responsive
              data={barchart}
              margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 5,
              }}
              barGap={5}
              barCategoryGap={"100%"}
            >
              <XAxis dataKey="name" />
              <Tooltip />
              <Bar dataKey="pv" fill="#3E82F7" barSize={20} />
              <Bar dataKey="uv" fill="#04D182" barSize={20} />
            </BarChart>
          </div>
        </div>
      </main>
    </div>
  );
}
