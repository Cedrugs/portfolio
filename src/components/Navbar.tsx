export default function Navbar() {

    return (
        <>
            <nav id="DesktopNavbar" className="flex justify-around items-center py-10 h-[15vh] max-xl:hidden">
                <a href="/" className="text-2xl text-[#353535]">Samuel Cedric</a>
                <div>
                    <ul className="flex list-none gap-12 text-2xl">
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
                            <a href="https://links.samuelcedric.com" target="_blank" className="relative hover:text-gray-600 duration-500 transition-all ease-in-out text-[#353535]">
                                Links
                                <span className="absolute top-10 left-0 w-full h-[2px] bg-current transform scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <nav id="MobileNavbar" className="hidden items-center py-10 h-[15vh] max-xl:flex max-lg:flex-col">
                <div className="flex flex-row justify-around items-center w-full">
                    <a href="/" className="text-2xl">Samuel Cedric</a>
                    <button 
                        type="button" 
                        className="flex text-sm md:me-0"
                        id="user-menu-button" 
                        aria-expanded="false" 
                        data-dropdown-toggle="user-dropdown"
                        data-dropdown-placement="bottom-end"
                        data-dropdown-offset-distance="20"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div className="z-50 hidden list-none bg-white divide-y rounded-lg shadow-md" id="user-dropdown">
                    <ul className="py-2" aria-labelledby="user-menu-button">
                        <li>
                            <a href="#About" className="block px-4 py-2 text-xl text-black">About</a>
                        </li>
                        <li>
                            <a href="#Experience" className="block px-4 py-2 text-xl text-black">Experience</a>
                        </li>
                        <li>
                            <a href="#TechStack" className="block px-4 py-2 text-xl text-black">Tech Stack</a>
                        </li>
                        <li>
                            <a href="#Projects" className="block px-4 py-2 text-xl text-black">Projects</a>
                        </li>
                        <li>
                            <a href="#Contact" className="block px-4 py-2 text-xl text-black">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}