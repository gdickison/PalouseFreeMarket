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
      <div className="w-full flex justify-around md:justify-end md:pr-20 lg:pr-32 h-[450px] lg:h-[600px] 2xl:h-[900px] bg-gray-100" style={{ backgroundImage: "url('/images/bg-table.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
        <div className="flex flex-col space-y-8 justify-center items-center md:items-end text-gray-100">
          <h1 className="font-display text-6xl lg:text-7xl text-center">Palouse Free Market</h1>
          <p className="font-body text-xl md:text-2xl lg:text-3xl text-center">
            Goods and Services Provided with Christian Values
          </p>
        </div>
      </div>
      <div className="flex justify-center bg-gray-100 py-2">
         <input type="text" className="border border-gray-300 h-14 w-5/6 px-6 rounded-md shadow-md" placeholder="Search by service or busness name" />
      </div>
      <div className="text-center bg-gray-100 h-40 py-4">
        <p className="text-3xl">Want to add your business?</p>
        <Link href="/SubmitListing">
          <a className="relative">
            <button className="h-12 w-56 px-6 my-4 rounded-md shadow-lg bg-sky-700 hover:bg-sky-900 text-blue-50 text-2xl uppercase tracking-wide">Apply Now</button>
            <div className="text-sm text-green-800 absolute -right-9 -top-7 rotate-12 bg-green-300 rounded-md shadow-lg px-2 py-1">It's Free!</div>
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