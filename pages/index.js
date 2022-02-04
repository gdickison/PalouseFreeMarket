import HeaderBar from "../components/HeaderBar";
import Image from 'next/image'
import group69 from '../public/images/group69.png'
import search from '../public/images/search.svg'
import { urlObjectKeys } from "next/dist/shared/lib/utils";

const HomePage = () => {
    return (
        <div>
            <HeaderBar text="palouse free market"/>
            <div className="w-full flex justify-around h-[450px] bg-gray-100">
                <div className="flex flex-col space-y-8 justify-center items-center">
                    <h1 className="font-display text-6xl">Palouse Free Market</h1>
                    <p className="font-body text-xl">
                        Blessing brothers through business
                    </p>
                </div>
                <div className="flex items-center">
                    <input type="text" className="border border-gray-300 w-96 h-14 px-6 rounded-md shadow-md" placeholder="Search by service or busness name" />
                </div>
                <div className="flex">
                <div className="flex justify-center items-center w-96">
                            <Image src={group69}/>
                        </div>
                </div>
            </div>
            <div className="text-center bg-gray-100 h-40">
                <p className="text-3xl">Want to add your business?</p>
                <button type="submit" className="h-12 w-56 px-6 my-4 rounded-md shadow-lg bg-sky-700 text-blue-50 text-2xl uppercase tracking-wide">Apply Now</button>
            </div>
            <div className="flex p-8">
                <div className="pl-20 w-5/6">
                    <h1 className="font-display text-3xl py-4">Principles for Doing Business with Brothers</h1>
                    <div className="flex flex-col space-y-6">
                        <p className="text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ipsam, ipsa nam, consequatur aut possimus nemo omnis enim qui quae amet accusamus! Qui amet sed explicabo culpa, quo voluptatum dolores!</p>
                        <p className="text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ipsam, ipsa nam, consequatur aut possimus nemo omnis enim qui quae amet accusamus! Qui amet sed explicabo culpa, quo voluptatum dolores!</p>
                        <p className="text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ipsam, ipsa nam, consequatur aut possimus nemo omnis enim qui quae amet accusamus! Qui amet sed explicabo culpa, quo voluptatum dolores!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;