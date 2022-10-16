import React from "react";

function Footer() {
    const gridChild = "my-8 space-y-4";
    const hStyle = " text-sm font-bold uppercase";

    return (
        <footer className="border-t-2  bg-gray-100 text-xs text-gray-700">
            <div className="mx-auto grid max-w-7xl px-8 py-16 md:grid-cols-3 md:px-16 lg:py-8 xl:px-0">
                <div className={gridChild}>
                    <h4 className={hStyle}>About</h4>
                    <p>How Airbnb works</p>
                    <p>Newsroom</p>
                    <p>Investors</p>
                    <p>Airbnb Plus</p>
                    <p>Airbnb Luxe</p>
                </div>
                <div className={gridChild}>
                    <h4 className={hStyle}>Comunity</h4>
                    <p>Accesibility</p>
                    <p>This is not a real site</p>
                    <p>It's just a clone</p>
                    <p>Hosted on Vercel</p>
                    <p>Github KacperHemperek</p>
                </div>
                <div className={gridChild}>
                    <h4 className={hStyle}>Support</h4>
                    <p>Help Center</p>
                    <p>Trust & Safety</p>
                    <p>Lorem ipsum dolor</p>
                    <p> Quam, libero!</p>
                    <p>Lorem, ipsum dolor.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
