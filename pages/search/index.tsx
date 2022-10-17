import { useRouter } from "next/router";
import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import OfferCard from "../../components/OfferCard";
import { format } from "date-fns";

function Search() {
    const router = useRouter();

    const { start, end, q, guests } = router.query;

    const formatedStart = format(new Date(String(start)), "dd MMMM yy");
    const formatedEnd = format(new Date(String(end)), "dd MMMM yy");

    const range = `${formatedStart} - ${formatedEnd}`;

    const headerPlaceholder = `${q} | ${range} | ${guests} guests`;

    return (
        <div>
            <Header placeholder={headerPlaceholder} />
            <main className="mx-auto grid grid-cols-2 space-y-16 px-5 py-4 md:px-10 lg:py-8 ">
                <section className="col-span-2 flex flex-col lg:col-span-1">
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
                        <OfferCard
                            title="Stay in special  Edwardian house"
                            price={30}
                        />
                        <OfferCard />
                        <OfferCard />
                    </div>
                </section>
                <section className="hidden lg:flex"></section>
            </main>
            <Footer />
        </div>
    );
}

export default Search;
