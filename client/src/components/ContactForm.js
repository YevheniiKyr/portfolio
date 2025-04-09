import React, {useState} from 'react';
import {sendEmail} from "../api/emailApi";
import "react-toastify/dist/ReactToastify.css";
import toast, {Toaster} from 'react-hot-toast';


const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        phone: ''
    });

    const contactFormErrorMessage = "The communication service is not working right now. Please contact through the top panel links: github, linkedIn, or email"
    const contactFormIsSendingMessage = "Request is processing..."
    const contactFormSuccessMessage = "Message received. Expect a reply in the near future. "

    const handleSubmit = (e) => {
        e.preventDefault();
        const promise = sendEmail(formData);
        toast.promise(promise, {
                loading: contactFormIsSendingMessage,
                success: contactFormSuccessMessage,
                error: contactFormErrorMessage,
            },
            {
                loading: {
                    duration: 4000,
                    position: "bottom-center",
                },
                success: {
                    duration: 4000,
                    position: "bottom-center",
                },
                error: {
                    duration: 4000,
                    position: "bottom-center",
                },
            })
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };


    return (
            <section className="contact-form-container" id="contact-form">
                <h1 className="contact-header">Contact me</h1>
                <form onSubmit={handleSubmit} className="contact-form">
                    <Toaster/>
                    <div className="contact-form-field">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="contact-message-input"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="contact-form-field">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="contact-message-input"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="contact-form-field">
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="number"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="contact-message-input"
                            required
                        />
                    </div>
                    <div className="message-field">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            className="contact-message-text-area"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="3"
                            required
                        ></textarea>
                    </div>
                    <div className="send-button-wrapper">
                        <input type="submit" value="Send" className="send-form-button"/>
                    </div>
                </form>

            </section>
    );
};

export default ContactForm;
