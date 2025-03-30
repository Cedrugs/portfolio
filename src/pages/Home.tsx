import Button from "../components/Button"
import Navbar from "../components/Navbar"

export default function Home() {
    return (
        <>
            <Navbar />
            <section id="Landing" className="flex justify-center items-center h-[80vh] gap-20">
                <div className="flex h-[400px] w-[400px]">
                    <img src="./src/assets/face.png" alt="Face Image" />
                </div>
                <div className="flex flex-col items-center gap-4">
                    <p className="font-semibold text-gray-600">Hello I'm</p>
                    <h1 className="font-semibold text-5xl">Samuel Cedric</h1>
                    <h2 className="font-semibold text-3xl text-gray-600">Full Stack Developer</h2>
                    <div className="flex gap-4 items-center mt-2">
                        <Button href="#" text="Download CV" type={1} />
                        <Button href="#" text="Contact" type={2} />
                    </div>
                </div>
            </section>
        </>
    )   
}