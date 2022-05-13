import NavBar from "../components/NavBar";
import Link from "next/link";
import AllListings from "../components/AllListings";

const HomePage = () => {
  const filterList = () => {
    const input = document.getElementById("listingFilter");
    const filter = input.value.toUpperCase();
    const businessNames = document.getElementsByClassName("business-name");
    for (let i = 0; i< businessNames.length; i++) {
      const textValue = businessNames[i].textContent || businessNames[i].innerText;
      if(textValue.toUpperCase().indexOf(filter) > -1) {
        businessNames[i].closest(".business-card").style.display = "";
      } else {
        businessNames[i].closest(".business-card").style.display = "none";
      }
    }
  }

  return (
    <div className="w-screen max-w-[1600px]">
      <NavBar/>
      <div className="w-full flex flex-col justify-center items-center md:space-y-16 lg:space-y-24 md:items-end md:pr-12 lg:pr-32 h-[450px] lg:h-[600px] 2xl:h-[900px] bg-gray-100" style={{ backgroundImage: "url('/images/bg-table.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
        <div className="flex flex-col space-y-8 py-10 justify-center items-center md:items-end text-gray-100">
          <h1 className="font-display font-normal md:font-semibold text-6xl md:text-7xl text-center">Palouse Free Market</h1>
          <p className="font-body font-semibold lg:font-normal text-xl md:text-2xl lg:text-3xl text-center">
            A Listing of Goods and Services Provided with Christian Values
          </p>
        </div>
        <div className="flex justify-center md:justify-end lg:justify-start w-full md:w-4/5 lg:w-2/3 py-2">
          <input id="listingFilter" type="text" className="border-4 border-gray-900 bg-gray-100 h-14 w-5/6 px-6 rounded-lg shadow-md placeholder:text-center placeholder:text-md md:placeholder:text-xl lg:placeholder:text-2xl placeholder:text-gray-900 opacity-70 md:opacity-60" placeholder="Search by service or business name" onChange={filterList} />
        </div>
      </div>
      <div className="text-center bg-gray-100 h-40 py-4">
        <p className="text-3xl">Want to add your business?</p>
        <Link href="/submit-listing">
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