"use client";
import { useContext, useEffect, useState } from "react";
import createPostImg from "../../assets/createPostImg.png";
import logo from "../../assets/Logo.svg";
import msgIcon from "../../assets/Message.svg";
import { LuLogOut } from "react-icons/lu";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { AuthContext } from "../Provider/AuthProvider";
import { Outlet, useLoaderData } from "react-router-dom";
import { BsGrid } from "react-icons/bs";
import { LuUsers } from "react-icons/lu";
import { FiMessageSquare, FiUser } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiWorld } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
const navigation = [
  {
    name: "Feed",
    href: "#",
    icon: BsGrid,
    current: true,
  },
  { name: "My community", href: "#", icon: LuUsers, current: false },
  { name: "Messages", href: "#", icon: FiMessageSquare, current: false },
  {
    name: "Notification",
    href: "#",
    icon: IoIosNotificationsOutline,
    current: false,
  },
  { name: "Explore", href: "#", icon: BiWorld, current: false },
  { name: "Profile", href: "#", icon: FiUser, current: false },
  { name: "Settings", href: "#", icon: IoSettingsOutline, current: false },
];
const mnavigation = [
  {
    name: "Feed",
    href: "#",
    icon: BsGrid,
    current: true,
  },
  { name: "My community", href: "#", icon: LuUsers, current: false },
  { name: "Explore", href: "#", icon: BiWorld, current: false },
  {
    name: "Notification",
    href: "#",
    icon: IoIosNotificationsOutline,
    current: false,
  },

  { name: "Settings", href: "#", icon: IoSettingsOutline, current: false },
];
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Mainsite() {
  const [usersData, setUsersData] = useState([]);
  const { userSignOut } = useContext(AuthContext);

  useEffect(() => {
    fetch("/info.json")
      .then((res) => res.json())
      .then((data) => setUsersData(data));
  }, []);
  return (
    <div className="flex min-h-[100vh] max-w-[1440px] mx-auto">
      {/* Static sidebar for desktop */}
      <div className="sticky top-0 hidden lg:fixed lg:flex lg:w-[240px] lg:flex-col h-full">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
          <div className="flex h-16 shrink-0 items-center gap-3">
            <img alt="Your Company" src={logo} className="h-8 w-auto" />
            <h1 className="text-lg font-bold text-[#4E5D78]">Meetmax</h1>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1 ">
                  {navigation &&
                    navigation?.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-[#4E5D78] text-white "
                              : "text-gray-400 hover:bg-[#4E5D78] hover:text-white",
                            "group flex gap-x-3 rounded-xl px-5 py-3 w-9/10  text-base font-bold leading-6 "
                          )}
                        >
                          {/* <img
                          src={item.icon}
                          alt=""
                          aria-hidden="true"
                          className="h-6 w-6 shrink-0"
                        /> */}
                          <item.icon
                            aria-hidden="true"
                            className="h-6 w-6 shrink-0"
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  {
                    <a
                      onClick={() => userSignOut()}
                      href="#"
                      className="text-gray-400 hover:bg-[#4E5D78] hover:text-white group flex gap-x-3 rounded-xl px-5 py-4 w-9/10  text-base font-bold leading-6 "
                    >
                      <LuLogOut className="h-6 w-6 shrink-0" />
                      LogOut
                    </a>
                  }
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="w-full lg:pl-[240px]">
        <div className="lg:sticky z-50 top-0 flex h-16 w-full fixed shrink-0 items-center gap-x-[21px] bg-white px-4  sm:gap-x-6 sm:px-6 lg:px-0 lg:pr-6 mb-4">
          <img
            alt=""
            src={createPostImg}
            className="h-9 w-9 rounded-lg bg-gray-50 lg:hidden mt-2"
          />
          <div className="flex flex-1 gap-x-[21px] self-stretch lg:gap-x-6 ">
            <form action="#" method="GET" className="relative flex flex-1">
              <label htmlFor="search-field" className="sr-only">
                Search
              </label>
              <MagnifyingGlassIcon
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-[5px] left-4 h-full w-5 text-[#4E5D78]"
              />
              <input
                id="search-field"
                name="search"
                type="search"
                placeholder="Search for something here..."
                className="block mt-4 mb-1 w-full lg:w-4/6  py-2 px-11  pr-0 text-gray-900  placeholder:text-gray-400  sm:text-sm rounded-xl border-2"
              />
            </form>
            <div className="flex items-center gap-x-4 lg:gap-x-6">
              <button
                type="button"
                className="mt-1 text-gray-400 hover:text-gray-500"
              >
                <img
                  src={msgIcon}
                  alt=""
                  aria-hidden="true"
                  className="h-6 w-6 lg:hidden mt-2 text-[#4E5D78]"
                />
              </button>
              {/* Separator */}

              {/* Profile dropdown */}
              <Menu as="div" className="relative">
                <MenuButton className="-m-1.5 flex flex-row-reverse items-center p-1.5 lg:gap-5">
                  <img
                    alt=""
                    src={createPostImg}
                    className=" hidden lg:block h-12 w-12 rounded-lg bg-gray-50"
                  />
                  <span className="hidden lg:flex lg:items-center">
                    <span
                      aria-hidden="true"
                      className="ml-4 text-base font-bold leading-6 text-[#4E5D78]"
                    >
                      Saleh Ahmed
                    </span>
                  </span>
                </MenuButton>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-whitepy-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  {userNavigation &&
                    userNavigation?.map((item) => (
                      <MenuItem key={item.name}>
                        <a
                          href={item.href}
                          className="block px-3 py-1 text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50"
                        >
                          {item.name}
                        </a>
                      </MenuItem>
                    ))}
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>

        <Outlet context={usersData}></Outlet>
      </div>
      <div className="flex gap-4 items-center fixed bottom-0 md:hidden justify-between bg-[#FFFFFF] w-full px-4 pt-2.5 pb-[2px] z-10">
        {mnavigation &&
          mnavigation?.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center pb-[5px] text-[#4E5D78]  ${
                item.current === true ? "border-b-2 border-[#4E5D78]" : ""
              }`}
            >
              <item.icon className="h-4 w-4" />
              <p className="text-[10px] whitespace-nowrap mt-1">{item.name}</p>
            </div>
          ))}
      </div>
      {/* </div> */}
    </div>
  );
}
