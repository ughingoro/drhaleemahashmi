import React from "react"
import Image from "next/image"

const skills = [
  { skill: "Patient Examination" },
  { skill: "Diagnostic Procedures" },
  { skill: "Surgical Proficiency" },
  { skill: "Postpartum Care" },
  { skill: "Labor and Delivery Management" },
  { skill: "Gynecological Procedures" },
  { skill: "Obstetric Ultrasound and Imaging Interpretation" },
  { skill: "Fertility Assessment and Treatment" },
  { skill: "High-Risk Pregnancy Management" },
  { skill: "Family Planning and Contraception" },
  { skill: "Menopause Management" },
  { skill: "Sexual and Reproductive Health Counseling" },
  { skill: "Emergency Obstetric and Gynecological Care" },
  { skill: "Adolescent Gynecology" },
  { skill: "Patient Communication and Counseling" },

]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            {/* <p>
              Hi, my name is Dr. Haleema Hashmi and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> "Consultant Obstetrician & Gynaecologist"
              based in Karachi, Pakistan.
            </p>
            <br /> */}
            <p>
              Hi, my name is Dr. Haleema Hashmi and I am a senior academician & consultant obstetrician & gynaecologists
              of Pakistan, at present working at Liaquat National Hospital & Medical College, Karachi since 2007.
              Graduated from Dow Medical College, Karachi. I had been trained for MRCOG in U.K. and
              got MRCOG in 1980 & FRCOG in 1993. CPSP honored me FCPS in 2003.
            </p>
            <br />
            <p>
              Previously I worked at Dow Medical College from 1982 to 2003, KMDC from 1992 to 1993
              and Baqai Medical University from 2003 to 2007.
            </p>
            <br />
            <p>
              I have been Vice President, Secretary & Treasurer of SOGP & President of PUGA now.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            {/* <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            /> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
