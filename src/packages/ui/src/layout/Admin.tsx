import React from "react";
import { Sidebar } from "../Admin/Sidebar";
import ThemeSwitcher from "../Shared/ThemeChanger";
import { UserMenus } from "../User/UserMenus";

export interface AdminLayoutProps {
  children: React.ReactNode;
  menus: {
    Name: string;
    Link: string;
    Icon: React.FC;
  }[];
}

export const AdminLayout = (props: AdminLayoutProps) => {
  return (
    <div>
      <main className=" h-screen overflow-hidden relative">
        <div className="flex items-start justify-between">
          <Sidebar menus={props.menus} />
          <div className="flex flex-col w-full md:space-y-4">
            <header className="w-full h-16 z-40 flex items-center justify-between">
              <div className="block lg:hidden ml-6">
                <button className="flex p-2 items-center rounded-full bg-white shadow text-gray-500 text-md">
                  <svg
                    width="20"
                    height="20"
                    className="text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                  </svg>
                </button>
              </div>
              <div className="relative z-20 flex flex-col justify-end h-full px-3 md:w-full">
                <div className="relative p-1 flex items-center w-full space-x-4 justify-end">
                  <ThemeSwitcher />
                  <span className="w-1 h-8 rounded-lg bg-gray-200"></span>
                  <UserMenus />
                </div>
              </div>
            </header>
            <div className="overflow-auto h-screen pb-24 px-4 md:px-6">
              {props.children}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};