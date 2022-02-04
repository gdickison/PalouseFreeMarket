import HeaderBar from "../components/HeaderBar";
import Image from 'next/image'
import group69 from '../public/images/group69.png'

const HomePage = () => {
    return (
        <div>
            <HeaderBar text="latah christian directory"/>
            <div className="flex p-12">
                <div className="w-3/4">
                    <div className="flex">
                        <div className="w-2/3 p-20 flex flex-col space-y-8">
                            <h1 className="font-display text-5xl">Connecting Christian Businesses</h1>
                            <p className="font-body text-xl">
                                Welcome to the Latah Christian Directory! Use the menu bar to the right to search for a person, organization, or service, or simply scroll down.
                            </p>
                        </div>
                        <div className="w-1/3 p-20 flex justify-center items-center">
                            <Image src={group69}/>
                        </div>
                    </div>
                    <div className="pl-20 w-5/6">
                        <h1 className="font-display text-2xl py-6">Principles for Doing Business with Brothers</h1>
                        <div className="flex flex-col space-y-6">
                            <p className="text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ipsam, ipsa nam, consequatur aut possimus nemo omnis enim qui quae amet accusamus! Qui amet sed explicabo culpa, quo voluptatum dolores!</p>
                            <p className="text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ipsam, ipsa nam, consequatur aut possimus nemo omnis enim qui quae amet accusamus! Qui amet sed explicabo culpa, quo voluptatum dolores!</p>
                            <p className="text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ipsam, ipsa nam, consequatur aut possimus nemo omnis enim qui quae amet accusamus! Qui amet sed explicabo culpa, quo voluptatum dolores!</p>
                        </div>
                    </div>
                </div>
                <div className="w-1/4 ">
                    <input type="text" className="bg-gray-100 w-72 h-12 px-6" placeholder="Search" />
                    <ul className="text-blue-500">
                        <li>ACCS</li>
                        <li>ACCS</li>
                        <li>ACCS</li>
                        <li>ACCS</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HomePage;