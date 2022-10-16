import Image from "next/image";
import React from "react";

type Props = {
    title: string;
    description: string;
    buttonText: string;
    img: string;
};

function LargeCard({ title, description, buttonText, img }: Props) {
    return (
        <div className=" relative flex h-[300px]  overflow-hidden rounded-2xl p-8 text-sm  lg:h-[350px] lg:text-base">
            <Image
                src={img}
                alt={title}
                layout="fill"
                objectFit="cover"
                className="absolute top-0 bottom-0 "
            />
            <div className="z-10 flex flex-col space-y-4">
                <h2 className="max-w-[200px] text-3xl lg:text-4xl">{title}</h2>
                <p>{description}</p>
                <button className="max-w-fit cursor-pointer rounded-xl  bg-black p-2 px-4 text-white transition-all hover:bg-black/90 active:bg-black/80">
                    {buttonText}
                </button>
            </div>
        </div>
    );
}

export default LargeCard;
