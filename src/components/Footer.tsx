export default function Footer() {
    return (
        <>
            <footer className="flex flex-wrap justify-center items-center">
                <nav id="DesktopNavbar" className="flex flex-col justify-around items-center py-10 h-[15vh]">
                    <div>
                        <ul className="flex flex-wrap list-none gap-12 text-2xl">
                            <li className="group relative inline-block">
                                <a href="#About" className="relative hover:text-gray-600 duration-500 transition-all ease-in-out text-[#353535]">
                                    About
                                    <span className="absolute top-10 left-0 w-full h-[2px] bg-current transform scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
                                </a>
                            </li>
                            <li className="group relative inline-block">
                                <a href="#Experience" className="relative hover:text-gray-600 duration-500 transition-all ease-in-out text-[#353535]">
                                    Experience
                                    <span className="absolute top-10 left-0 w-full h-[2px] bg-current transform scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
                                </a>
                            </li>
                            <li className="group relative inline-block">
                                <a href="#TechStack" className="relative hover:text-gray-600 duration-500 transition-all ease-in-out text-[#353535]">
                                    Tech Stack
                                    <span className="absolute top-10 left-0 w-full h-[2px] bg-current transform scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
                                </a>
                            </li>
                            <li className="group relative inline-block">
                                <a href="#Projects" className="relative hover:text-gray-600 duration-500 transition-all ease-in-out text-[#353535]">
                                    Projects
                                    <span className="absolute top-10 left-0 w-full h-[2px] bg-current transform scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
                                </a>
                            </li>
                            <li className="group relative inline-block">
                                <a href="#Contact" className="relative hover:text-gray-600 duration-500 transition-all ease-in-out text-[#353535]">
                                    Contact
                                    <span className="absolute top-10 left-0 w-full h-[2px] bg-current transform scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
                                </a>
                            </li>
                            <li className="group relative inline-block">
                                <a href="https://links.samuelcedric.com" className="relative hover:text-gray-600 duration-500 transition-all ease-in-out text-[#353535]">
                                    Links
                                    <span className="absolute top-10 left-0 w-full h-[2px] bg-current transform scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <p className="py-10 text-xl text-[#353535]">© Samuel Cedric. All Rights Reserved.</p>
                </nav>
            </footer>
        </>
    )
}