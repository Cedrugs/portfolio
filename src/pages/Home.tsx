import Button from "../components/Button"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"

export default function Home() {
    const experiences = {
        "frontend": [
            {"name": "HTML", "level": "Advanced"},
            {"name": "CSS", "level": "Advanced"},
            {"name": "JavaScript", "level": "Advanced"},
            {"name": "TypeScript", "level": "Intermediate"},
            {"name": "React.js", "level": "Intermediate"},
            {"name": "SASS", "level": "Intermediate"},
        ],
        "backend": [
            {"name": "Node.js", "level": "Advanced"},
            {"name": "MySQL", "level": "Advanced"},
            {"name": "MongoDB", "level": "Advanced"},
            {"name": "Python", "level": "Intermediate"},
            {"name": "PHP", "level": "Intermediate"},
            {"name": ".NET", "level": "Basic"},
        ]
    }

    const techStacks = [
        "devicon-javascript-plain",
        "devicon-html5-plain",
        "devicon-css3-plain",
        "devicon-php-plain",
        "devicon-laravel-original",
        "devicon-azuresqldatabase-plain",
        "devicon-mysql-original",
        "devicon-postgresql-plain",
        "devicon-sqlite-plain",
        "devicon-microsoftsqlserver-plain",
        "devicon-docker-plain",
        "devicon-typescript-plain",
        "devicon-cplusplus-plain",
        "devicon-django-plain",
        "devicon-dot-net-plain",
        "devicon-git-plain",
        "devicon-java-plain",
        "devicon-nginx-original",
        "devicon-npm-original-wordmark",
        "devicon-python-plain",
        "devicon-react-original",
        "devicon-redis-plain",
        "devicon-c-plain",
        "devicon-nodejs-plain",
        "devicon-postman-plain",
        "devicon-ruby-plain",
        "devicon-ubuntu-plain",
        "devicon-vuejs-plain",
        "devicon-kubernetes-plain",
        "devicon-amazonwebservices-plain-wordmark",
        "devicon-googlecloud-plain",
        "devicon-azure-plain",
        "devicon-oracle-original",
        "devicon-digitalocean-original",
        "devicon-dbeaver-plain",
        "devicon-sass-original",
        "devicon-vscode-plain",
        "devicon-visualstudio-plain"
    ];
    
    const projects = [
        {"name": "Utility Discord Bot", "url": "https://github.com/Cedrugs/Ganyu-Hikari", "icon": "./src/assets/project-1.png"},
        {"name": "Memes API", "url": "https://github.com/Cedrugs/MemesAPI", "icon": "./src/assets/project-2.png"},
        {"name": "Hoyolab Auto Claim", "url": "https://github.com/Cedrugs/hoyolab-daily-reward-claimer", "icon": "./src/assets/project-3.png"},
    ]

    return (
        <>
            <Navbar />
            <section id="Landing" className="flex flex-wrap justify-center items-center lg:h-[calc(100vh-15vh)] gap-20 max-lg:gap-10">
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
            <section id="About" className="flex relative justify-center items-center lg:h-[100vh]">
                <div className="flex flex-wrap flex-col container gap-20">
                    <div className="flex flex-col justify-center items-center gap-4 pb-10">
                        <h2 className="font-medium text-gray-600">Get to know more</h2>
                        <h1 className="font-semibold text-5xl">About Me</h1>
                    </div>
                    <div className="flex flex-wrap lg:gap-10 justify-center items-center container">
                        <div className="flex flex-col border-gray-600 border-2 rounded-3xl w-[45rem] h-[15rem] justify-center items-center text-center gap-1">
                            <i className="material-icons text-3xl">workspace_premium</i>
                            <h3 className="text-lg font-semibold">Experience</h3>
                            <p className="text-gray-800">DevOps Engineering</p>
                            <p className="text-gray-800">Back End & Front End Development</p>
                        </div>
                        <div className="flex flex-col border-gray-600 border-2 rounded-3xl w-[45rem] h-[15rem] justify-center items-center text-center gap-1">
                            <i className="material-icons text-3xl">school</i>
                            <h3 className="text-lg font-semibold">Education</h3>
                            <p className="text-gray-800">Highschool Degree in Science</p>
                            <p className="text-gray-800">Bachelors Degree in Computer Science by 2028</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-justify text-lg px-10">Hey, I'm Samuel Cedric, a Fullstack Developer currently studying Computer Science at BINUS University. At 18, I'm really passionate about coding and technology, and I'm always looking for ways to make things more efficient and innovative. Ever since I was young, I've been fascinated by how software development can change the way we interact with technology. My goal is to help people and organizations harness the amazing potential of coding. As I get ready to start this exciting new chapter in my academic and professional journey, I invite you to join me in exploring how technology can lead to positive change in our world.</p>
                    </div>
                </div>
            </section>
            <section id="Experience" className="flex justify-center items-center lg:h-[100vh]">
                <div className="container flex flex-wrap flex-col gap-20">
                    <div className="flex flex-col justify-center items-center gap-4 pb-10">
                        <h2 className="font-medium text-gray-600">Have a look at my</h2>
                        <h1 className="font-semibold text-5xl">Experience</h1>
                    </div>
                    <div className="flex flex-wrap container gap-10 justify-center items-center">
                        <div className="flex flex-col border-gray-600 border-2 rounded-3xl w-[45rem] py-14 justify-center items-center text-center gap-4">
                            <h3 className="text-3xl font-semibold">Frontend Development</h3>
                            <div className="grid grid-cols-3 gap-10 px-16 py-8">
                                {experiences.frontend.map((experience) => (
                                    <article className="container grid grid-cols-3 text-left w-32">
                                        <i className="material-icons">verified</i>
                                        <div>
                                            <h3 className="font-semibold text-lg">{experience.name}</h3>
                                            <p className="text-gray-600">{experience.level}</p>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col border-gray-600 border-2 rounded-3xl w-[45rem] py-14 justify-center items-center text-center gap-4">
                            <h3 className="text-3xl font-semibold">Backend Development</h3>
                            <div className="grid grid-cols-3 gap-10 px-16 py-8">
                                {experiences.backend.map((experience) => (
                                    <article className="grid grid-cols-3 text-left w-32">
                                        <i className="material-icons">verified</i>
                                        <div>
                                            <h3 className="font-semibold text-lg">{experience.name}</h3>
                                            <p className="text-gray-600">{experience.level}</p>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="TechStack" className="flex justify-center items-center lg:h-[100vh]">
                <div className="container flex flex-wrap flex-col justify-center items-center">
                    <div className="flex flex-col justify-center items-center gap-4 pb-10">
                        <h2 className="font-medium text-gray-600">Check out my current</h2>
                        <h1 className="font-semibold text-5xl">Tech Stack</h1>
                    </div>
                    <div className="flex flex-wrap gap-5 justify-center items-center">
                        {techStacks.map((stack, index) => (
                            <div key={index} className="flex justify-center items-center">
                                <i className={`${stack} border rounded-md border-black p-8 text-5xl`}></i>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section id="Projects" className="flex justify-center items-center lg:h-[100vh]">
                <div className="container flex flex-wrap flex-col justify-center items-center">
                    <div className="flex flex-col justify-center items-center gap-4 pb-10">
                        <h2 className="font-medium text-gray-600">Browse my recent</h2>
                        <h1 className="font-semibold text-5xl">Project</h1>
                    </div>
                    <div className="flex flex-wrap justify-around items-center gap-10">
                        {projects.map((project, index) => (
                            <div key={index} className="flex flex-col justify-center items-center border-gray-600 border-2 p-10 rounded-3xl gap-6">
                                <div>
                                    <img src={project.icon} alt="Project 1 Image" className="rounded-2xl w-[350px] h-[350px]"/>
                                </div>
                                <h3 className="font-semibold text-3xl">{project.name}</h3>
                                <div className="flex">
                                    <Button text="Github" href={project.url} type={1}/>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section id="Contact" className="flex justify-center items-center lg:h-[100vh]">
                <div className="container flex flex-wrap flex-col justify-center items-center">
                    <div className="flex flex-col justify-center items-center gap-4 pb-10">
                        <h2 className="font-medium text-gray-600">Get in touch!</h2>
                        <h1 className="font-semibold text-5xl">Contact Me</h1>
                    </div>
                    <div className="flex justify-center items-center border-gray-600 border-2 p-8 rounded-[2.5rem] gap-6">
                        <a href="mailto:ceds.sam@gmail.com" className="flex items-center justify-center w-8 h-8 border-2 border-black rounded-full bg-black hover:opacity-70 transition-all ease-in-out duration-500">
                            <i className="fa-solid fa-envelope text-white"></i>
                        </a>
                        <a href="mailto:ceds.sam@gmail.com" className="group relative hover:text-gray-600 duration-500 transition-all ease-in-out text-xl">
                            ceds.sam@gmail.com
                            <span className="absolute top-8 left-0 w-full h-[2px] bg-current transform scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
                        </a>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )   
}