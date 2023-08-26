import React from "react";

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md_w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hey there! I'm Abigail and I'm thrilled to welcome you to my portfolio
                        <br className="hidden lg:inline-block" />I'm enjoying building my skills and building apps
                    </h1>
                    <p className="mb-8 leading-relaxed">
                    With a diverse journey shaping my path, I am a passionate Full Stack Engineer applying my unique background to create innovative solutions. As a former Division 1 soccer player, I bring the tenacity and discipline necessary to tackle complex challenges in the tech world. My six-year immersion in the healthcare sector, specifically in ophthalmology working alongside surgeons, has honed my meticulous attention to detail, teamwork, and ability to thrive in high-pressure environments. These skills seamlessly translate into my approach to coding, where precision and collaboration are paramount. I am a graduate of the University of Minnesota's rigorous Full Stack Web Development Bootcamp, where I not only acquired a solid foundation in web technologies like HTML, CSS, JavaScript, and SQL but also developed a problem-solving mindset that is attuned to user-centric design. My journey, from the soccer field to the operating room, and now into the realm of full stack engineering, reflects my adaptability, resilience, and hunger for continuous growth. Eager to contribute my diverse skills and unwavering dedication to crafting seamless and impactful digital experiences, I am excited to embark on new challenges and leverage technology to make a lasting impact                    </p>
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