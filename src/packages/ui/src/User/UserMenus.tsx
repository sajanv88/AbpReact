import React from "react";
import { UserDropDown } from "./UserDropDown";
import { signIn, signOut, useSession } from "next-auth/react";
import { getCookie } from "cookies-next";
export interface UserMenusProps {}

export const UserMenus = (props: UserMenusProps) => {
  var session = useSession();
  return (
    <div className="flex justify-center items-center">
      {session.data ? (
        <UserDropDown />
      ) : (
        <div>
          <button
            className="mr-6 hover:bg-slate-300  p-3 rounded-xl"
            onClick={() => {
              signIn("openiddict", undefined, {
                __tenant: getCookie("__tenant") as string,
                // prompt: "login",
              });
            }}
          >
            Login
          </button>
          <button
            className="py-2 px-4 text-white bg-black rounded-3xl"
            onClick={() =>
              (location.href = `${process.env.NEXT_PUBLIC_API_URL}/Account/Register`)
            }
          >
            Register
          </button>
        </div>
      )}
    </div>
  );
};
