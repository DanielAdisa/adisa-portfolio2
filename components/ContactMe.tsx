import {PhoneArrowUpRightIcon, MapPinIcon, EnvelopeIcon} from "@heroicons/react/24/solid";
import Link from "next/link"

type Props = {}
function ContactMe({}: Props) {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left  
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center scroll-smooth">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            Experience
        </h3>
        <div className=" flex flex-col space-y-10">
            <h4 className="text-4xl font-semibold text-center">I am H.I.M, I deliver. <span className="underline decoration-[#25D366]/50"> Lets Talk.</span> </h4>

            <div className=" space-y-3">
                <div className=" flex items-center space-x-5 justify-center">
                    <PhoneArrowUpRightIcon className=" text-[#25D366] h-7 w-7 animate-pulse"/>
                    <p className="text-2xl">+2348037956920</p>
                </div>
 

                <div className=" flex items-center space-x-5 justify-center">
                    <Link href={'https://www.google.com/maps/place/Abuja,+Federal+Capital+Territory/data=!4m2!3m1!1s0x104e745f4cd62fd9:0x53bd17b4a20ea12b?sa=X&ved=1t:242&ictx=111'}>
                    <MapPinIcon className=" text-[#25D366] h-7 w-7 animate-ping"/>
                    <p className="text-2xl">Abuja, Nigeria</p>
                    </Link>
                </div>

                <div className=" flex items-center space-x-5 justify-center">
                    <EnvelopeIcon className=" text-[#25D366] h-7 w-7 animate-pulse"/>
                    <p className="text-2xl">adisadaniel4@gmail.com</p>
                </div>
            </div>
        </div>
    </div>
  )
}
export default ContactMe

