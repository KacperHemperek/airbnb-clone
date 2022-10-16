import React from "react";
import Image from "next/image";

function Banner() {
    return (
        <div className=" relative h-[30vh] w-full md:h-[40vh] lg:h-[55vh] xl:h-[70vh]">
            <Image
                src={"https://links.papareact.com/0fm"}
                layout="fill"
                objectFit="cover"
            />
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center text-sm lg:text-base">
                <p className="mb-4">Not sure where to go? Perfect!</p>
                <button className="rounded-full bg-white px-8 py-4 font-semibold text-purple-500 shadow-lg transition-all hover:scale-[1.01] hover:shadow-xl active:scale-95 active:shadow">
                    I'm flexible
                </button>
            </div>
        </div>
    );
}

export default Banner;
