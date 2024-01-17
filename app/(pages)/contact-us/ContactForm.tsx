"use client"
import {useRouter} from "next/router";
import {useState} from "react";

export default function ContactUsForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [company, setCompany] = useState("")
    const [message, setMessage] = useState("")
    const [phone, setPhone] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        setIsSubmitting(true)
        console.log('submitting form')
        return;

        const form = {name, email, company, message, phone}

        const response = await fetch('https://ship.shipfare.com/api/v1/email/contact-us', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        console.log(response)
        return;

        const json = await response.json();

        if (!response.ok) {
            setIsSubmitting(false)
        }

        if (response.ok) {
            console.log('Submitted sucessfully')
        }
        console.log('submitting')
    }
    

    return (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto shadow-lg p-4 lg:p-8 rounded-2xl">

            <div className="grid lg:grid-cols-2 gap-4 lg:gap-8">
                <div className="relative z-0 w-full mb-5 group">
                    <input type="name"
                           onChange={(e) => setName(e.target.value)}
                           name="name"
                           id="name"
                           className="form-input peer"
                           placeholder=" " required/>
                    <label htmlFor="name" className="form-label">Name</label>
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <input onChange={(e) => setCompany(e.target.value)}
                           type="company"
                           name="company"
                           id="company"
                           className="form-input peer"
                           placeholder=" "
                           required/>
                    <label htmlFor="company" className="form-label">Company Name</label>
                </div>
            </div>


            <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 mt-4">
                <div className="relative z-0 w-full mb-5 group">
                    <input onChange={(e) => setEmail(e.target.value)}
                           type="email"
                           name="email"
                           id="email"
                           className="form-input peer"
                           placeholder=" "
                           required/>
                    <label htmlFor="email" className="form-label">Email address</label>
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <input type="phone"
                           onChange={(e) => setPhone(e.target.value)}
                           name="phone"
                           id="phone"
                           className="form-input peer"
                           placeholder=" " required/>
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                </div>
            </div>


            <div className="relative z-0 w-full mb-5 group">
                <textarea onChange={(e) => setMessage(e.target.value)}
                          rows={5}
                          name="message"
                          id="message"
                          className="form-input peer"
                          placeholder=" " required/>
                <label htmlFor="message" className="form-label">Message</label>
            </div>

            <button type="submit"
                    disabled={isSubmitting}
                    className={`${isSubmitting ? 'btn-disabled' : 'btn-primary'} `}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
        </form>
    )
}
