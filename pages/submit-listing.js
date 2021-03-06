import Link from "next/link";
import NavBar from "../components/NavBar";
import sanityClient from '../src/client'
import Alert from "../components/Alert";
import { useState } from "react";
import { useRouter } from "next/router";

const SubmitListing = () => {
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState()
  const router = useRouter()

  const checkUrlFormat = e => {
    const websiteFormat = /^(http(s?):\/\/)?\w+([\.-]?\w+)*(\.\w{2,10})+/;
    if(e.target.value && !e.target.value.match(websiteFormat)){
      alert("A valid web address is required")
      return
    }
  }

  const phoneNumberFormatter = (e) => {
    if(e.key === 'Tab'){
      return
    }
    if(e.key === 'Enter') {
      eventHandler(e)
      return
    }
    const inputField = document.getElementById("phone")
    const formattedInputValue = formatPhoneNumber(inputField.value)
    inputField.value = formattedInputValue
  }

  const formatPhoneNumber = (value) => {
    if(!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    if(phoneNumberLength < 4) return phoneNumber;
    if(phoneNumberLength < 7) {
      return `${phoneNumber.slice(0,3)}-${phoneNumber.slice(3)}`;
    }

    return `${phoneNumber.slice(0,3)}-${phoneNumber.slice(3,6)}-${phoneNumber.slice(6,9)}`;
  }

  const sendToSanity = (e) => {
    e.preventDefault()
    const agreeToPrinciples = document.getElementById('agreeToPrinciples')
    const businessName = document.getElementById('businessName')
    const ownerName = document.getElementById('ownerName')
    const description = document.getElementById('description')
    const keywords = document.getElementById('keywords')
    const website = document.getElementById('website')
    const email = document.getElementById('email')
    const emailPublish = document.getElementById('emailPublishYes')
    const phone = document.getElementById('phone')
    const phonePublish = document.getElementById('phonePublishYes')

    const newDoc = {
      _type: 'listing',
      agreeToPrinciples: agreeToPrinciples.checked,
      businessName: businessName.value,
      ownerName: ownerName.value,
      description: description.value,
      keywords: keywords.value,
      website: website.value.indexOf("https://") === -1 ? "https://" + website.value : website.value,
      email: email.value,
      emailPublish: emailPublish.checked,
      phone: phone.value,
      phonePublish: phonePublish.checked
    }

    sanityClient.create(newDoc)
    setShowAlert(true)
    setAlertMessage("Thank you! Your submission will be reviewed within 24 hours and will appear on the website once it is approved.")
  }

  const closeAlert = () => {
    setShowAlert(false)
    setAlertMessage("")
    router.push("/")
  }

  return (
    <div className="w-screen max-w-[1600px]">
      <NavBar/>
      <div className="w-full my-2 pb-12 bg-gray-100">
        <h1 className="font-display text-2xl md:text-4xl py-4 text-center">Business Listing Application</h1>
        <form className="flex flex-col space-y-6 p-0 text-md md:text-xl justify-center items-center" name="application" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={sendToSanity}>
          <input name="bot-field" hidden />
          <h1 className="text-xl md:text-2xl">Free Content</h1>
          <div className="flex justify-between items-center w-80 md:w-4/5 lg:w-1/2">
            <label className="w-60 md:w-80 lg:w-full text-left" htmlFor="agreeToPrinciples">I Agree to the Palouse Free Market's <Link href="/principles"><a className="underline">Principles</a></Link> for Doing Business with Christians</label>
            <input type="checkbox" id="agreeToPrinciples" name="agreeToPrinciples" className="border border-gray-200 w-6 h-6 md:w-8 md:h-8" required />
          </div>
          <div className="flex justify-between w-80 md:w-4/5 lg:w-1/2">
            <label htmlFor="businessName">Business Name</label>
            <input type="text" id="businessName" name="businessName" className="border border-gray-200 w-3/5 md:w-3/4 lg:w-4/5" required />
          </div>
          <div className="flex justify-between w-80 md:w-4/5 lg:w-1/2">
            <label htmlFor="ownerName">Owner Name</label>
            <input type="text" id="ownerName" name="ownerName" className="border border-gray-200 w-3/5 md:w-3/4 lg:w-4/5" required />
          </div>
          <div className="flex justify-between w-80 md:w-4/5 lg:w-1/2">
            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" className="border border-gray-200 w-3/5 md:w-3/4 lg:w-4/5" required />
          </div>
          <div className="flex justify-between w-80 md:w-4/5 lg:w-1/2">
            <label htmlFor="keywords">Keywords</label>
            <input type="text" id="keywords" name="keywords" className="border border-gray-200 w-3/5 md:w-3/4 lg:w-4/5" />
          </div>
          <div className="flex justify-between w-80 md:w-4/5 lg:w-1/2">
            <label htmlFor="website">Website</label>
            <input type="text" id="website" name="website" className="border border-gray-200 w-3/5 md:w-3/4 lg:w-4/5" onBlur={checkUrlFormat}/>
          </div>
          <div className="flex justify-between w-80 md:w-4/5 lg:w-1/2">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" className="border border-gray-200 w-3/5 md:w-3/4 lg:w-4/5" required />
          </div>
          <div className="flex justify-between items-center w-80 md:w-4/5 lg:w-1/2">
            <label htmlFor="emailPublish">Publish Email Address</label>
            <div className="flex items-center space-x-4">
              <label htmlFor="emailPublishYes">Yes</label>
              <input type="radio" id="emailPublishYes" name="emailPublish" value="yes" className="border border-gray-200 w-6 h-6 md:w-8 md:h-8" required/>
              <label htmlFor="emailPublishNo">No</label>
              <input type="radio" id="emailPublishNo" name="emailPublish" value="no" className="border border-gray-200 w-6 h-6 md:w-8 md:h-8" />
            </div>
          </div>
          <div className="flex justify-between items-center w-80 md:w-4/5 lg:w-1/2">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" className="border border-gray-200 w-3/5 md:w-3/4 lg:w-4/5" onKeyDown={phoneNumberFormatter} required/>
          </div>
          <div className="flex justify-between w-80 md:w-4/5 lg:w-1/2">
            <label htmlFor="phonePublish">Publish Phone Number</label>
            <div className="flex items-center space-x-4">
              <label htmlFor="phonePublishYes">Yes</label>
              <input type="radio" id="phonePublishYes" name="phonePublish" value="yes" className="border border-gray-200 w-6 h-6 md:w-8 md:h-8" required/>
              <label htmlFor="phonePublishNo">No</label>
              <input type="radio" id="phonePublishNo" name="phonePublish" value="no" className="border border-gray-200 w-6 h-6 md:w-8 md:h-8" />
            </div>
          </div>
          <div className="relative">
            <h1 className="text-xl md:text-2xl">Premium Content</h1>
            <div className="text-sm text-green-800 absolute -right-14 -top-3 rotate-12 bg-green-300 rounded-md shadow-lg px-2 py-1">Coming Soon!</div>
          </div>
          <div className="flex justify-between w-80 md:w-4/5 lg:w-1/2">
            <label className="text-slate-400" htmlFor="logo">Logo</label>
            <input type="file" id="logo" name="logo" className="border border-gray-200 w-3/5 md:w-3/4 lg:w-4/5 disabled:bg-slate-300" disabled/>
          </div>
          <div className="flex justify-between w-80 md:w-4/5 lg:w-1/2">
            <label className="text-slate-400" htmlFor="facebook">Facebook</label>
            <input type="url" id="facebook" name="facebook" className="border border-gray-200 w-3/5 md:w-3/4 lg:w-4/5 disabled:bg-slate-300" disabled/>
          </div>
          <div className="flex justify-between w-80 md:w-4/5 lg:w-1/2">
            <label className="text-slate-400" htmlFor="instagram">Instagram</label>
            <input type="url" id="instagram" name="instagram" className="border border-gray-200 w-3/5 md:w-3/4 lg:w-4/5 disabled:bg-slate-300" disabled/>
          </div>
          <div className="flex justify-between w-80 md:w-4/5 lg:w-1/2">
            <label className="text-slate-400" htmlFor="twitter">Twitter</label>
            <input type="url" id="twitter" name="twitter" className="border border-gray-200 w-3/5 md:w-3/4 lg:w-4/5 disabled:bg-slate-300" disabled/>
          </div>
          <div className="flex justify-between w-80 md:w-4/5 lg:w-1/2">
            <label className="text-slate-400" htmlFor="linkedin">LinkedIn</label>
            <input type="url" id="linkedin" name="linkedin" className="border border-gray-200 w-3/5 md:w-3/4 lg:w-4/5 disabled:bg-slate-300" disabled/>
          </div>
          <div className="flex justify-between w-80 md:w-4/5 lg:w-1/2">
            <label className="text-slate-400" htmlFor="youtube">YouTube</label>
            <input type="url" id="youtube" name="youtube" className="border border-gray-200 w-3/5 md:w-3/4 lg:w-4/5 disabled:bg-slate-300" disabled/>
          </div>
          <input type="submit" className="w-80 border border-gray-200 bg-sky-700 hover:bg-sky-800 lg:hover:cursor-pointer text-gray-100 py-2 rounded-lg" />
        </form>
      </div>
      {showAlert &&
        <Alert
          closeAlert={closeAlert}
          message={alertMessage}
        />
      }
    </div>
  )
}

export default SubmitListing;
