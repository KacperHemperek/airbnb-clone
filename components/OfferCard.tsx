import Image from "next/image";
import React from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { SearchResult } from "../interface/Types";

function OfferCard({
    description,
    lat,
    location,
    long,
    total,
    title,
    star,
    price,
    img,
}: SearchResult) {
    return (
        <div className="flex flex-col py-4 text-sm md:flex-row">
            <div className="relative mb-6 mr-6 aspect-video w-full overflow-hidden rounded-2xl sm:w-64">
                <Image src={img} layout="fill" objectFit="cover" />
            </div>
            <div className="flex-grow  text-gray-500">
                <div className="mb-4 flex items-start justify-between">
                    <div className=" flex-grow ">
                        <p className="mb-1">{location}</p>
                        <h2 className="mb-3 text-xl text-gray-700">{title}</h2>
                        <div className="flex flex-wrap first:ml-0 ">
                            {description}
                        </div>
                    </div>
                    <button className="cursor-pointer">
                        <HeartIcon className="h-5 text-black" />
                    </button>
                </div>
                <div className="flex items-end justify-between">
                    <div className="flex items-center">
                        <StarIcon className="h-4 text-red-400" />
                        <span className="text-gray-700">{star}</span>
                    </div>
                    <div className="text-end">
                        <h3 className="mb-2 text-2xl font-semibold text-black">
                            {price}
                        </h3>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OfferCard;
