import Image from "next/image";
import React from "react";
import { AnywhereDateType } from "../interface/Types";

function MediumCard({ img, title }: AnywhereDateType) {
    return (
        <div className="min-w-[250px] space-y-2 lg:min-w-[360px] ">
            <div className="relative aspect-square w-full cursor-pointer transition-all duration-500 hover:opacity-70">
                <Image
                    src={img}
                    alt={title}
                    layout="fill"
                    className="rounded-lg"
                />
            </div>
            <h3 className="text-lg lg:text-xl">{title}</h3>
        </div>
    );
}

export default MediumCard;
