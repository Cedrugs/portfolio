import { ButtonProps } from "../types/type"

export default function Button({ href, text, type }: ButtonProps) {

    return (
        <>
            <a 
                href={href} 
                className={
                    `flex items-center rounded-full border border-[#353535] p-[16px_30px] gap-3 ${ type === 2 ? 'bg-[#353535] text-white hover:bg-transparent hover:text-[#353535]' : 'hover:bg-[#353535] hover:text-white'} transition-all duration-500 ease-in-out`
                }
            >
                <span className="text-sm font-semibold">{text}</span>
            </a>
        </>
    )
}