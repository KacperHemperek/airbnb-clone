import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";
import { AnywhereDateType, ExploreDataType } from "../interface/Types";



const Home: NextPage<{
    exploreData?: ExploreDataType[];
    anywhereData?: AnywhereDateType[];
}> = ({ exploreData, anywhereData }) => {

    return (
        <div className="">
            <Head>
                <title>Airbnb clones</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Banner />

            <main className="mx-auto max-w-7xl space-y-16 px-8 py-4 md:px-16 lg:py-8 xl:px-0">
                <section>
                    <h2 className="mb-8 text-3xl font-semibold">
                        Explore Nearby
                    </h2>
                    <div className="grid grid-cols-1 gap-x-2 gap-y-4 md:grid-cols-2 lg:grid-cols-4 ">
                        {exploreData?.map((d, index) => {
                            return (
                                <SmallCard
                                    key={index}
                                    distance={d.distance}
                                    location={d.location}
                                    img={d.img}
                                />
                            );
                        })}
                    </div>
                </section>
                <section>
                    <h2 className="mb-8 text-3xl font-semibold">
                        Live Anywhere
                    </h2>
                    <div className="flex flex-nowrap space-x-6 overflow-x-scroll py-4 scrollbar-hide">
                        {anywhereData?.map((d, index) => {
                            return (
                                <MediumCard
                                    key={index}
                                    img={d.img}
                                    title={d.title}
                                />
                            );
                        })}
                    </div>
                </section>
                <section>
                    <LargeCard
                        img="https://links.papareact.com/4cj"
                        title="The Greatest Outdors"
                        buttonText="Get Inspired"
                        description="Wishlists curated by Airbnb"
                    />
                </section>
            </main>
            <Footer />
        </div>
    );
};
export async function getStaticProps() {
    try {
        const exploreData: ExploreDataType[] = await fetch(
            "https://www.jsonkeeper.com/b/4G1G",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        ).then((res) => res.json());

        const anywhereData = await fetch("https://www.jsonkeeper.com/b/VHHT", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => res.json());

        return {
            props: {
                exploreData,
                anywhereData,
            },
        };
    } catch (error: any) {
        console.error(error);
        throw new Error(error);
    }
}

export default Home;
