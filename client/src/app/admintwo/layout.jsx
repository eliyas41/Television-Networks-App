"use client";
import React from "react";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { PiCarProfileLight } from "react-icons/pi";
import { VscListUnordered } from "react-icons/vsc";
import { AiFillSignal } from "react-icons/ai";
import { GiBurningTree } from "react-icons/gi";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { DashboardTwo } from "./dashboardtwo/page"

const sideBar = [
  {
    Arrow: IoIosArrowRoundForward,
    Icon: PiCarProfileLight,
    name: "channel",
    slug: "channel",
    href: "/admintwo/channel",
  },
  {
    Arrow: IoIosArrowRoundForward,
    Icon: VscListUnordered,
    name: "Program",
    slug: "program",
    href: "/admintwo/program",
  },
];

const page = ({ children }) => {
  return (
    <div className="">
      <div className="flex w-screen  bg-gray-100 shadow-sm">
        <div className="mx-5 ">
          <GiBurningTree size={60} />
        </div>
        <div className="mx-12 my-2">
          <h1 className="text-xl">T- Movie</h1>
        </div>

        <div className=" flex w-full justify-between bg-slate-900">
          <div className="mx-10 flex justify-start">
            <h2 className="text-xl text-white mt-4">Dashboard</h2>
          </div>
          <div className="flex justify-between mt-4 mr-8">
            <small className="">
              <NotificationsNoneOutlinedIcon sx={{ fontSize: "30px", fill: "white" }} />
            </small>
            <Link href='/'>
              <small className="">
                <AccountCircleOutlinedIcon sx={{ fontSize: "30px", fill: "white" }} />
              </small>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex h-screen  bg-gray-100 ">
        <div className="  w-1/4  flex justify-center">
          <div className="">
            <div className=" w-full h-screen ">
              <Link href="/admintwo/dashboardtwo">
                <div className="  py-3 px-16    hover:bg-slate-800 flex my-5">
                  <div>
                    {" "}
                    <AiFillSignal className="w-7 h-7 mr-4 hover:text-white" />{" "}
                  </div>
                  <div className="hover:text-white">Dashboard</div>
                </div>
              </Link>

              {sideBar.map(({ Icon, name, slug, href }, ind) => (
                <Link key={ind} href={`${href ? href : ""}`}>
                  <div className=" items-center   py-3 px-20 hover:shadow-lg  hover:bg-slate-900 flex my-5">
                    <div>
                      {" "}
                      <Icon className="w-7 h-7 mr-3  hover:text-white" />{" "}
                    </div>
                    <div className="hover:text-white">{name}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="shadow-lg w-full h-screen scrollbar scrollbar-thumb-sky-700 scrollbar-track-sky-300  overflow-y-scroll">
          {/* <DashboardTwo/> */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default page;


