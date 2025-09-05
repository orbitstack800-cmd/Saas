import react from "react";

export const FooterBottom = () => {
    return(
        <>
            {/* Footer */}
            {/* Call Now */}
            <section className="py-12 px-6 bg-blue-600 text-white text-center">
                <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                <p className="mb-6">Have questions? Call us today or visit our showroom.</p>
                <a href="tel:+919924748951" className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold">
                    Call Now
                </a>
            </section>
        </>
    )
}