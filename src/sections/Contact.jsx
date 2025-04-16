import React, {useRef, useState} from 'react'
import TitleCard from "../components/TitleCard.jsx";
import {toast, ToastContainer} from "react-toastify";
import ContactExperience from "../components/contact/ContactExperience.jsx";
import * as emailjs from "@emailjs/browser";

const Contact = () => {
    const [formData, setFormData] = useState({name: "", email: "", message: ""})
    const [loading, setLoading] = useState(false);

    const formRef = useRef(null);

    const serviceID = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

    const handleFormDataChanged = (e) => {
            setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const { name, email, message } = formData;

        // Validation
        if (!name || !email || !message) {
            if (!name) toast.dark("Please provide a name");
            if (!email) toast.dark("Please provide an email");
            if (!message) toast.dark("Please provide a message");
            setLoading(false);
            return;
        }

        try {
            await emailjs.sendForm(serviceID, templateID, formRef.current, publicKey);
            toast.success("Message sent successfully!", { theme: "dark" }
            );
            setFormData({name: "", email: "", message: ""})
        } catch (error) {
            console.error(error);
            toast.dark("Something went wrong! Please try again.");
        } finally {
            setLoading(false);
        }
    };



    return (
        <section id="contact"  className="text-center md:mt-40 mt-20 mx-auto w-full padding-x-lg">

            <div className="w-full h-full md:px-20 px-5">
                <TitleCard title={"Get in Touch – Let’s Connect"} sub={"💬 Have questions or ideas? Let’s talk! 🚀"} />
            </div>

            <ToastContainer/>

            <div className="mx-auto grid-3-cols md:mt-20 mt-5 ">
                <form ref={formRef} onSubmit={handleSubmit} className="card-border p-6 rounded-lg bg-black-100 flex flex-col gap-8 columns-1">
                    <div className="form-group">
                        <label className="text-start" htmlFor="name">Your name</label>
                        <input name="name" value={formData.name} onChange={handleFormDataChanged} id="name" type="text" placeholder="What’s your good name?"  />

                    </div>
                    <div className="form-group">
                        <label className="text-start" htmlFor="email">Your email</label>
                        <input name="email" value={formData.email} onChange={handleFormDataChanged} id="email" type="email" placeholder="What’s your email address?"  />
                    </div>
                    <div className="form-group">
                        <label className="text-start" htmlFor="message">Your Message</label>
                        <textarea name="message" value={formData.message} id="message" onChange={handleFormDataChanged} rows={5} placeholder="What’s your message?"   />
                    </div>


                    <button type="submit" disabled={loading}>
                        <div className="cta-button group">
                            <div className="bg-circle"/>
                            <p className="text">{loading ? "Sending..." : "Send message"}</p>
                            <div className="arrow-wrapper">
                                <img src="/images/arrow-down.svg" alt="arrow" />
                            </div>
                        </div>
                    </button>
                </form>

                <div className="md:col-span-2 columns-1">
                    <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
                        <ContactExperience />
                    </div>
                </div>
                </div>
        </section>
    )
}
export default Contact
