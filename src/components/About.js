import React from "react";

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md_w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi I'm Abigail
                        <br className="hidden lg:inline-block" />I'm enjoying building my skills and building apps
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        I'm a dynamic technologist with a background that uniquely blends full stack web development, Division I soccer experience, and six years in healthcare, specializing in ophthalmology. My recent completion of the University of Minnesota's Full Stack Web Development Bootcamp has equipped me with a comprehensive skill set spanning both front-end and back-end technologies. This experience, coupled with my background in soccer, has cultivated a collaborative approach to problem-solving and an unwavering commitment to excellence. My tenure in healthcare has instilled in me a deep appreciation for detail, precision, and effective communication. These skills, coupled with my technical and teamwork abilities, position me as a valuable asset in DevOps and Full Stack Engineering roles. I'm eager to contribute my unique blend of experiences to innovative projects and collaborative teams, delivering solutions that harmonize technology and human-centric care.
                    </p>
                    <div className="flex justify-center">
                        <a
                        href="#contact"
                        className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Work with me
                        </a>
                        <a
                        href="#projects"
                        className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            See my past work
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                    className="object-cover object-center rounded"
                    alt="hero"
                    src="/IMG_0190.jpeg"
                />
                </div>
            </div>
        </section>
    )
}