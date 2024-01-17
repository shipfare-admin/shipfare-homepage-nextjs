import {Metadata} from "next";
import ContactUsForm from "@/app/(pages)/contact-us/ContactForm";


export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Contact us page',
}


export default function ContactUs() {
    return (
        <section id="contact-us" className="py-8">

            <h1 className="text-3xl uppercase text-center">Contact Us</h1>

            <ContactUsForm></ContactUsForm>

        </section>
    )
}
