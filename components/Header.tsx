import Image from "next/image";
import React from "react";
import {
    MagnifyingGlassIcon,
    UserCircleIcon,
    Bars3Icon,
} from "@heroicons/react/24/solid";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white p-5 shadow-md md:px-10">
            <div className="relative my-auto flex h-6 cursor-pointer items-center md:h-10">
                <Image
                    src={"https://links.papareact.com/qd3"}
                    alt={""}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>
            <div className="flex items-center justify-center ">
                <div className="flex w-full rounded-full p-1 md:border-2 md:py-2 md:pl-4 md:pr-2 md:shadow-sm">
                    <input
                        className="mr-2 w-full flex-grow text-sm text-gray-600 outline-none"
                        placeholder="search for "
                    />

                    <MagnifyingGlassIcon className="text-bold hidden h-8 w-8 rounded-full bg-red-400 p-2 text-slate-100 md:inline-flex" />
                </div>
            </div>
            <div className="flex items-center justify-end gap-4">
                <div className="flex cursor-pointer gap-3 text-gray-600">
                    {" "}
                    <p className="hidden lg:inline">Become a host</p>{" "}
                    <GlobeAltIcon className="h-4 md:h-6" />{" "}
                </div>
                <div className=" flex cursor-pointer gap-2 rounded-full border-2 p-2 text-gray-600">
                    <Bars3Icon className=" h-4 md:h-6" />
                    <UserCircleIcon className="h-4 md:h-6" />
                </div>
            </div>
        </header>
    );
}

export default Header;
