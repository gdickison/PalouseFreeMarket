import NavBar from "../components/NavBar";
import AddListingForm from "../components/AddListingForm";

const SubmitListing = () => {
  return (
    <div className="max-w-[1600px]">
      {/* <NavBar/> */}
      <div className="flex flex-col my-2 pb-12 mx-4 md:mx-8 lg:mx-16 bg-gray-100">
        <AddListingForm/>
      </div>
    </div>
  )
}

export default SubmitListing