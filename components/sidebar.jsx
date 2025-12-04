import {
  Ban,
  Calendar,
  Captions,
  ChartLine,
  ChartPie,
  ChartScatter,
  Compass,
  Ellipsis,
  FileSearchCorner,
  FileText,
  Gauge,
  Info,
  Lightbulb,
  Mail,
  MapPin,
  MessageCircleMore,
  MessagesSquare,
  Monitor,
  PanelsTopLeft,
  ShieldCheck,
  ShoppingCart,
  StickyNote,
} from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="pt-22">
      <aside className="w-65 h-full overflow-y-scroll bg-white border-2 border-gray-300 py-2">
        <div className="flex flex-col pl-10 h-full w-50 ">
          <span className="text-[11px] text-gray-400 pt-6 font-semibold">
            DASHBOARD
          </span>
          <ul className="*:flex *:hover:text-blue-500 *:gap-2 *:text-gray-500 text-[14px] font-semibold *:pb-6 pt-5">
            <li>
              <Link href={"/"} className="flex gap-2">
                <Gauge size={18} />
                Default
              </Link>
            </li>
            <li>
              <Link href="/analytic" className="flex gap-2">
                <ChartScatter size={18} />
                Analytic
              </Link>
            </li>
            <li>
              <Link href="/sales" className="flex gap-2">
                <ChartLine size={18} />
                Sales
              </Link>
            </li>
          </ul>
          <span className="text-[13px] text-gray-400 pt-8 font-semibold">
            APPS
          </span>
          <ul className="*:flex *:hover:text-blue-500 *:gap-2 *:text-gray-500 text-[14px] font-semibold *:pb-6 pt-5">
            <li>
              <Mail size={18} />
              Mail
            </li>
            <li>
              <MessageCircleMore size={18} />
              Chat
            </li>
            <li>
              <Calendar size={18} />
              Calender
            </li>
            <li>
              <Lightbulb size={18} />
              Project
            </li>
            <li>
              <ShoppingCart size={18} />
              E-Commerce
            </li>
          </ul>
          <span className="text-[13px] text-gray-400 pt-8 font-semibold">
            COMPONENTS
          </span>
          <ul className="*:flex *:hover:text-blue-500 *:gap-2 *:text-gray-500 text-[14px] font-semibold *:pb-6 pt-5">
            <li>
              <Info size={18} />
              General
            </li>
            <li>
              <PanelsTopLeft size={18} />
              Layout
            </li>
            <li>
              <Compass size={18} />
              Navigation
            </li>
            <li>
              <FileSearchCorner size={18} />
              Data Entry
            </li>
            <li>
              <Monitor size={18} />
              Data Display
            </li>
            <li>
              <MessagesSquare size={18} />
              Feedback
            </li>
            <li>
              <Ellipsis size={18} />
              Other
            </li>
            <li>
              <ChartPie size={18} />
              Charts
            </li>
            <li>
              <MapPin size={18} />
              Maps
            </li>
          </ul>
          <span className="text-[13px] text-gray-400 pt-8 font-semibold">
            PAGES
          </span>
          <ul className="*:flex *:hover:text-blue-500 *:gap-2 *:text-gray-500 text-[14px] font-semibold *:pb-6 pt-5">
            <li>
              <StickyNote size={18} />
              Pages
            </li>
            <li>
              <ShieldCheck size={18} />
              Authentication
            </li>
            <li>
              <Ban size={18} />
              Errors
            </li>
          </ul>
          <span className="text-[13px] text-gray-400 pt-8 font-semibold">
            Docs
          </span>
          <ul className="*:flex *:hover:text-blue-500 *:gap-2 *:text-gray-500 text-[14px] font-semibold *:pb-6 pt-5">
            <li>
              <FileText size={18} />
              Documention
            </li>
            <li>
              <Captions size={18} />
              Changelog
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
