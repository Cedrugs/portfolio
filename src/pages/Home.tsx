import Button from "../components/Button"
import Navbar from "../components/Navbar"

export default function Home() {
    return (
        <>
            <Navbar />
            <section id="Landing" className="flex flex-wrap justify-center items-center lg:h-[80vh] gap-20 max-lg:gap-10">
                <div className="flex">
                    <img src="./src/assets/face.png" alt="Face Image" className="h-[400px] w-[400px] max-lg:h-[200px] max-lg:w-[200px]"/>
                </div>
                <div className="flex flex-col justify-center items-center gap-4 max-lg:gap-2">
                    <p className="font-semibold text-gray-600 max-lg:text-sm">Hello I'm</p>
                    <h1 className="font-semibold text-5xl max-lg:text-4xl">Samuel Cedric</h1>
                    <h2 className="font-semibold text-3xl text-gray-600 max-lg:text-2xl">Full Stack Developer</h2>
                    <div className="flex gap-4 mt-2">
                        <Button href="#" text="Download CV" type={1} />
                        <Button href="#" text="Contact" type={2} />
                    </div>
                    <div className="flex gap-4 mt-2">
                        <a href="https://github.com/Cedrugs" target="_blank" className="flex items-center justify-center w-8 h-8 border-2 border-black rounded-full bg-white hover:opacity-70 transition-all ease-in-out duration-500">
                            <i className="fa-brands fa-github text-black text-3xl"></i>
                        </a>
                        <a href="https://linkedin.com/in/samuel-cedric" target="_blank" className="flex items-center justify-center w-8 h-8 border-2 border-black rounded-full bg-black hover:opacity-70 transition-all ease-in-out duration-500">
                            <i className="fa-brands fa-linkedin-in text-white"></i>
                        </a>
                        <a href="mailto:ceds.sam@gmail.com" className="flex items-center justify-center w-8 h-8 border-2 border-black rounded-full bg-black hover:opacity-70 transition-all ease-in-out duration-500">
                            <i className="fa-solid fa-envelope text-white"></i>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )   
}