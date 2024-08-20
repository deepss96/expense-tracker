import React, { useState, useRef } from "react";
import studyingGirl from "../assets/sleepingGirl.svg";
import Swal from 'sweetalert2'


function App() {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "7e600731-ef74-4be4-9c0f-75646e26c247");

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

    const [Name,] = useState("");

    return (
        <>
            <div className="ml-12 w-96 -mb-2">
                <img src={studyingGirl} alt="sleepingTextBookGirl" />
            </div>
            <div className="text-white font-poppins bg-black w-120 min-h-108 pt-6 rounded-lg" >
                <div className=" p-8 rounded-lg">
                    <h2 className="text-white text-2xl mb-4 ">Contact Us</h2>
                    <section>
                        <form onSubmit={onSubmit} className="text-white font-poppins bg-black rounded-lg">
                            <input
                                type="text"
                                value={Name}
                                name="name"
                                placeholder="Name"
                                className="bg-black mb-6 w-44 border-b-2 border-gray-500 text-white p-2 rounded"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="bg-black w-52 mb-6 border-b-2 md:ml-6 border-gray-500 text-white p-2  rounded"
                                required
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                className="bg-black w-44 mb-6 border-b-2  border-gray-500 text-white p-2  rounded"
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