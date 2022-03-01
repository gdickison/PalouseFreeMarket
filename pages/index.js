import HeaderBar from "../components/HeaderBar";
import Principles from "../components/Principles";
import Image from 'next/image'
import Link from "next/link";
import group69 from '../public/images/group69.png'
import AllListings from "../components/AllListings";

const HomePage = () => {
  return (
    <div>
      <HeaderBar text="palouse free market"/>
      <div className="w-full flex justify-around h-[450px] bg-gray-100" >
        <div className="flex flex-col space-y-8 justify-center items-center">
          <h1 className="font-display text-6xl text-center">Palouse Free Market</h1>
          <p className="font-body text-xl text-center">
            Blessing our community through business
          </p>
        </div>
        <div className="flex justify-center items-center w-96 shrink-0">
          <Image className="shrink-0" src={group69}/>
        </div>
      </div>
      <div className="flex justify-center bg-gray-100 py-2">
         <input type="text" className="border border-gray-300 h-14 w-5/6 px-6 rounded-md shadow-md" placeholder="Search by service or busness name" />
      </div>
      <div className="text-center bg-gray-100 h-40 py-4">
        <p className="text-3xl">Want to add your business?</p>
        <Link href="/SubmitListing">
          <a>
            <button className="h-12 w-56 px-6 my-4 rounded-md shadow-lg bg-sky-700 hover:bg-sky-900 text-blue-50 text-2xl uppercase tracking-wide">Apply Now</button>
          </a>
        </Link>
      </div>
      <div className="flex p-8 justify-center">
        {/* <div className="w-1/3">
          <Principles />
        </div> */}
        <div className="p-8 text-xl">
          <AllListings/>
        </div>
      </div>
    </div>
  )
}

export default HomePage;