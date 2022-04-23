import NavBar from "../components/NavBar";
import Link from "next/link";
import AllListings from "../components/AllListings";

const HomePage = () => {
  return (
    <div className="max-w-[1600px]">
      <NavBar/>
      <div className="w-full flex flex-col justify-center items-center md:items-end md:pr-12 lg:pr-32 h-[450px] lg:h-[600px] 2xl:h-[900px] bg-gray-100" style={{ backgroundImage: "url('/images/bg-table.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
        <div className="flex flex-col space-y-8 py-10 justify-center items-center md:items-end text-gray-100">
          <h1 className="font-display font-normal md:font-semibold text-6xl md:text-7xl text-center">Palouse Free Market</h1>
          <p className="font-body font-semibold lg:font-normal text-xl md:text-2xl lg:text-3xl text-center">
            Goods and Services Provided with Christian Values
          </p>
        </div>
        <div className="flex justify-center md:justify-end w-full md:w-4/5 lg:w-2/3 py-2">
          <input type="text" className="border-2 border-sky-700 bg-gray-100 h-14 w-5/6 px-6 rounded-lg shadow-md placeholder:text-center placeholder:text-md md:placeholder:text-lg lg:placeholder:text-xl placeholder:text-gray-500" placeholder="Search by service or busness name" />
        </div>
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
      <div className="flex md:p-8 justify-center">
        <div className="p-8 text-xl">
          <AllListings/>
        </div>
      </div>
    </div>
  )
}

export default HomePage;