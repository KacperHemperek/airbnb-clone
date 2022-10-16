import Image from "next/image";
import React from "react";
import { ExploreDataType } from "../interface/Types";

function SmallCard({ img, distance, location }: ExploreDataType) {
    return (
        <div className=" flex cursor-pointer items-center rounded-lg transition-all hover:scale-[1.015] hover:bg-slate-100">
            <div className="relative mr-4 h-12 w-12 overflow-hidden rounded-lg">
                <Image
                    src={img}
                    alt={location}
                    layout="fill"
                    className="w-min-content"
                    objectFit="cover"
                />
            </div>
            <div className="text-xs lg:text-sm">
                <h3>{location}</h3>
                <p className="text-gray-400">{distance}</p>
            </div>
        </div>
    );
}

export default SmallCard;
