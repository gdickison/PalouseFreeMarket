import NavBar from "../components/NavBar"
import Link from "next/link"

const Terms = () => {
  return (
    <div className="w-screen max-w-[1600px]">
      <NavBar/>
      <div className="flex flex-col my-2 pb-12 mx-4 md:mx-8 lg:mx-16 bg-gray-100">
        <h1 className="font-display text-2xl md:text-4xl py-4">Terms & Conditions</h1>
        <ul className="space-y-6 text-md md:text-xl font-body ">
          <li>
            <p className="font-display text-2xl uppercase">One</p>
            <p>
              After you submit your application the moderator will review it - we want to make sure you aren't some icky business. Once your listing is approved it will appear on the website.
            </p>
          </li>
          <li>
            <p className="font-display text-2xl uppercase">Two</p>
            <p>
              If you don't abide by the <Link href="/ten-principles"><a className="underline">Ten Prinicples</a></Link> your listing will be removed from the site. If you have paid for Premium Content a prorated amount will be refunded to you.
            </p>
          </li>
          <li>
            <p className="font-display text-2xl uppercase">Three</p>
            That's it. Pretty simple, huh?
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Terms