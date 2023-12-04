import React, {useState} from 'react';
import {sendEmail} from "../api/emailApi";
import {logDOM} from "@testing-library/react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        phone: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        sendEmail(formData).catch(error => console.log(error))
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    return (
        <div className="contact-form-container" id="contact-form">
            <h1 className="contact-header">Contact me</h1>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="contact-form-field">
                    <label
                        htmlFor="name"
                        className="contact-message-label">
                        Name:</label>
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
                    <label
                        htmlFor="email"
                        className="contact-message-label">
                        Email:
                    </label>
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
                    <label
                        htmlFor="phone"
                        className="contact-message-label">
                        Phone:</label>
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
                <div className="message contact-form-field">
                    <label htmlFor="message" className="contact-message-label">Message:</label>
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

        </div>
    );
};

export default ContactForm;
