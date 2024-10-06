import React, { useState, useRef } from "react";
import studyingGirl from "../assets/sleepingGirl.svg";
import Swal from 'sweetalert2'


function App() {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "95e4c223-ec3a-4866-a274-18444c564687");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
              });
        }
    };

    

    return (
        <>
            <div className="ml-12 w-96 -mb-2">
                <img src={studyingGirl} alt="sleepingTextBookGirl" />
            </div>
            <div className="text-white font-poppins bg-black w-108 min-h-108 pt-6 rounded-lg" >
                <div className=" p-8 rounded-lg">
                    <h2 className="text-white text-2xl mb-4 ">Contact Us</h2>
                    <section>
                        <form onSubmit={onSubmit} className="text-white font-poppins bg-black rounded-lg">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="bg-black mb-6 w-40 border-b-2 border-gray-500 text-white p-2 rounded"
                                required
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                className="bg-black w-40 mb-6 border-b-2 ml-12 border-gray-500 text-white p-2  rounded"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="bg-black w-72 mb-6 border-b-2  border-gray-500 text-white p-2  rounded"
                                required
                            />
                            <input
                                name="message"
                                type="text"
                                placeholder="Message"
                                className="bg-black w-full h-18 mb-6 border-b-2 border-gray-500 text-white p-2 rounded"
                                required
                            ></input>
                            <button
                                type="submit"
                                className="bg-purple-600 mt-6  w-full text-white p-2 rounded hover:bg-purple-700"
                            >
                                SUBMIT FORM
                            </button>
                        </form>
                    </section>
                </div>
            </div>
        </>
    );
}

export default App;