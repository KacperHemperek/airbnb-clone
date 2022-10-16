import Image from "next/image";
import React, { useState } from "react";
import {
    MagnifyingGlassIcon,
    UserCircleIcon,
    Bars3Icon,
    UsersIcon,
} from "@heroicons/react/24/solid";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker, Range } from "react-date-range";
import styles from "../styles/styles.module.css";

function Header() {
    const [search, setSearch] = useState("");
    const [count, setCount] = useState(1);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange: Range = {
        startDate,
        endDate,
        key: "selection",
    };

    function resetInput() {
        setSearch("");
        setStartDate(new Date());
        setEndDate(new Date());
    }

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
            <div className=" flex items-center justify-center ">
                <div className="flex w-full rounded-full p-1 md:border-2 md:py-2 md:pl-4 md:pr-2 md:shadow-sm">
                    <input
                        value={search}
                        onChange={(e) =>
                            setSearch((e.target as HTMLInputElement).value)
                        }
                        className="mr-2 w-full flex-grow text-sm text-gray-600 outline-none"
                        placeholder="search for "
                    />

                    <MagnifyingGlassIcon className="text-bold hidden h-8 w-8 rounded-full bg-red-400 p-2 text-slate-100 md:inline-flex" />
                </div>

                <div
                    className={`${
                        search.trim() === ""
                            ? "pointer-events-none translate-y-8 opacity-0"
                            : "pointer-events-auto  translate-y-0 opacity-100"
                    } absolute top-20 flex max-w-fit flex-col overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-500 md:top-24`}
                >
                    <DateRangePicker
                        ranges={[selectionRange]}
                        className={styles.responsive}
                        onChange={(e) => {
                            setEndDate(new Date(e.selection?.endDate ?? ""));
                            setStartDate(
                                new Date(e.selection?.startDate ?? "")
                            );
                        }}
                        minDate={new Date()}
                        rangeColors={["#FD5B61"]}
                    />
                    <div className="px-4 ">
                        <div className="flex justify-between border-b-2 border-gray-100">
                            <h2 className="text-lg md:text-xl ">
                                Number of Guests
                            </h2>
                            <div className="flex items-center ">
                                <UsersIcon className="mr-2 h-5" />
                                <input
                                    type="number"
                                    className="w-12 text-red-400 outline-none"
                                    value={count}
                                    onChange={(e) => {
                                        const value = Number(
                                            (e.target as HTMLInputElement).value
                                        );
                                        setCount(value <= 1 ? 1 : value);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="flex">
                            <button
                                onClick={resetInput}
                                className="flex-grow p-2 text-sm text-gray-400 transition-all hover:text-red-300 md:p-4 md:text-base"
                            >
                                Cancel
                            </button>
                            <button className="flex-grow p-2 text-sm text-red-400 transition-all hover:text-red-300 md:p-4 md:text-base">
                                Search
                            </button>
                        </div>
                    </div>
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
