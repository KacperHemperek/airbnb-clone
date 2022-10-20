import { useRouter } from "next/router";
import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import OfferCard from "../../components/OfferCard";
import { format } from "date-fns";
import {  NextPageContext } from "next";
import { SearchResult } from "../../interface/Types";
import Map from "../../components/Map";

type SearchPageProps = {
    searchResults: SearchResult[];
};

function Search({ searchResults }: SearchPageProps) {
    const router = useRouter();

    const { start, end, q, guests } = router.query;

    const formatedStart = format(new Date(String(start)), "dd MMMM yy");
    const formatedEnd = format(new Date(String(end)), "dd MMMM yy");

    const range = `${formatedStart} - ${formatedEnd}`;

    const headerPlaceholder = `${q} | ${range} | ${guests} guests`;

    return (
        <div>
            <Header placeholder={headerPlaceholder} />
            <main className="grid grid-cols-2 md:pl-10 ">
                <section className="col-span-2 flex flex-col py-5 lg:col-span-1 lg:py-10">
                    <p className="mb-2 text-xs">
                        300+ Stays - {range} - for {guests} guests
                    </p>
                    <h1 className="mb-6 text-3xl font-semibold">
                        Stays in {q}
                    </h1>
                    <div className="mb-5 flex flex-wrap gap-3">
                        <button className="button">
                            Cancellation Flexability
                        </button>
                        <button className="button">Type of place</button>
                        <button className="button">Price</button>
                    </div>
                    <div className="mx-4 grid divide-y-2 border-y-2">
                        {searchResults?.map((result) => {
                            return <OfferCard {...result} />;
                        })}
                    </div>
                </section>
                <section className="m-0 hidden lg:inline-flex">
                    <Map searchResults={searchResults} />
                </section>
            </main>
            <Footer />
        </div>
    );
}

export async function getServerSideProps(
    ctx: NextPageContext
): Promise<{ props: SearchPageProps }> {
    console.log(ctx.query);

    const res = await fetch("https://www.jsonkeeper.com/b/5NPS");
    const searchResults = await res.json();

    return {
        props: {
            searchResults,
        },
    };
}
export default Search;
