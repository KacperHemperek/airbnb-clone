import Image from "next/image";
import React from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

type OfferCardProps = {
    desc: string;
    title: string;
    rating: number;
    price: number;
    liked: boolean;
    img: string;
};

function OfferCard({ desc, title, rating, price, liked, img }: OfferCardProps) {
    const mockTags = [
        "1 guest",
        "1 bedroom",
        "1 bed",
        "Wifi",
        "Kitchen",
        "Close to centrum",
    ];

    return (
        <div className="flex flex-col py-4 text-sm md:flex-row">
            <div className="mr-6 aspect-video w-full overflow-hidden rounded-lg sm:w-64">
                <Image src={img} />
            </div>
            <div className="flex-grow  text-gray-500">
                <div className="mb-4 flex items-start justify-between">
                    <div className=" flex-grow ">
                        <p className="mb-1">Private room in center of London</p>
                        <h2 className="text-xl text-gray-700">{title}</h2>
                        <div className="flex flex-wrap first:ml-0 ">
                            {mockTags.map((item, index, arr) => (
                                <>
                                    <p className="whitespace-nowrap">{item}</p>
                                    {index < arr.length - 1 && (
                                        <span className="mx-1">•</span>
                                    )}
                                </>
                            ))}
                        </div>
                    </div>
                    <button className="cursor-pointer">
                        <HeartIcon className="h-5 text-black" />
                    </button>
                </div>
                <div className="flex items-end justify-between">
                    <div className="flex items-center">
                        <StarIcon className="h-4 text-yellow-400" />
                        <span className="text-gray-700">4.3</span>
                    </div>
                    <div className="text-end">
                        <h3 className="mb-2 text-2xl font-semibold text-black">
                            £{price} &#x2f; night
                        </h3>
                        <p>£117 total</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OfferCard;
