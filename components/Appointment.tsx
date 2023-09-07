"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const Appointment = () => {
    return (
        <section id="home">
            <div className="flex flex-row text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
                <div className="md:mt-2 md:w-3/5">
                    <h1 className="text-4xl font-bold mt-6 mb-2 md:mt-0 md:text-5xl">Appointment</h1>
                    <p className="text-lg mt-2 md:text-2xl">
                        <u><b>Consultant Office </b></u><br />
                        Suite # 549, Doctor Plaza, Karachi. <br />
                        <span className="font-semibold text-teal-600">
                            Monday & Wednesday{" "}
                        </span> <br />
                        07:00 pm - 08:30 pm <br />
                        +92-321-3143930 <br /> +92-21-3530857
                    </p>
                </div>
                <div className="md:mt-2 md:w-3/5">
                    <p className="text-lg mt-8 mb-6 md:text-2xl"><br />
                        <u><b>Liaquat National Hospital</b></u><br />
                        Clinic # 4, Wajid Ali Shah Complex, LNH, National Stadium Road, Karachi. <br />
                        <span className="font-semibold text-teal-600">
                            Tuesday & Thrusday{" "}
                        </span> <br />
                        06:00 pm - 08:00 pm <br />
                        +92-21-34412364
                    </p>
                </div>
                <div className="md:mt-2 md:w-3/5">
                    <p className="text-lg mt-4 mb-6 md:text-2xl">
                        <u><b>Dr. Ziauddin Hospital</b></u><br />
                        4/B Shahrah-e-Ghalib Rd, Block 6, Clifton, Karachi. <br />
                        <span className="font-semibold text-teal-600">
                            Friday & Saturday{" "}
                        </span> <br />
                        11:00 am - 01:00 pm <br />
                        +92-21-35862937
                    </p>
                </div>
            </div>

        </section>
    )
}

export default Appointment
