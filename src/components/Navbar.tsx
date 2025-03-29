export default function Navbar() {
    return (
        <>
            <nav id="DesktopNavbar" className="flex justify-around items-center h-[15vh] max-lg:hidden">
                <div className="text-2xl">Samuel Cedric</div>
                <div>
                    <ul className="flex list-none gap-12 text-2xl">
                        <li className="group relative inline-block">
                            <a href="#About" className="relative hover:text-gray-600">
                                About
                                <span className="absolute top-10 left-0 w-full h-[2px] bg-current transform scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
                            </a>
                        </li>
                        <li className="group relative inline-block">
                            <a href="#Experience" className="relative hover:text-gray-600">
                                Experience
                                <span className="absolute top-10 left-0 w-full h-[2px] bg-current transform scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
                            </a>
                        </li>
                        <li className="group relative inline-block">
                            <a href="#Projects" className="relative hover:text-gray-600">
                                Projects
                                <span className="absolute top-10 left-0 w-full h-[2px] bg-current transform scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
                            </a>
                        </li>
                        <li className="group relative inline-block">
                            <a href="#Contact" className="relative hover:text-gray-600">
                                Contact
                                <span className="absolute top-10 left-0 w-full h-[2px] bg-current transform scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
                            </a>
                        </li>
                        <li className="group relative inline-block">
                            <a href="https://links.samuelcedric.com" className="relative hover:text-gray-600">
                                Links
                                <span className="absolute top-10 left-0 w-full h-[2px] bg-current transform scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <nav id="MobileNavbar" className="hidden justify-around items-center h-[15vh] max-lg:flex">
                {/* TODO: Continue the MobileNavbar */}
            </nav>
        </>
    )
}