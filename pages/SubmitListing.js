import NavBar from "../components/NavBar";

import { useForm } from "react-hook-form";
import { useState } from 'react';

const SubmitListing = () => {
  const [formData, setFormData] = useState()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)

  const { register, handleSubmit, watch, formState: {errors } } = useForm();

  const onSubmit = async data => console.log(data);

  if (isSubmitting) {
    // Returns a "Submitting comment" state if being processed
    return <h3>Submitting comment…</h3>
  }

  if (hasSubmitted) {
    // Returns the data that the user submitted for them to preview after submission
    return (
      <>
        <h3>Thanks for submitting your listing</h3>
        <h3>We will post it as soon as it is approved</h3>
        <ul>
          <li>
            Business Name: {formData.businessName} <br />
            Owner Name: {formData.ownerName} <br />
            Email: {formData.email}
          </li>
        </ul>
      </>
    )
  }

  return (
    <div className="max-w-[1600px]">
      <NavBar/>
      <div className="w-full my-2 pb-12 bg-gray-100">
        <h1 className="font-display text-2xl md:text-4xl py-4 text-center">Business Listing Application</h1>
        <form className="flex flex-col space-y-6 p-0 md:p-8 text-md md:text-xl justify-center items-center" onSubmit={handleSubmit(onSubmit)}>
        {/* <input ref={register} type="hidden" name="_id" value={_id} /> */}
          <div className="flex justify-between items-center w-80 md:w-96">
            <label className="w-60 md:w-80 text-left" htmlFor="agreeToPrinciples">I Agree to the Nine Principles for Doing Business with Brothers</label>
            <input type="checkbox" id="agreeToPrinciples" className="border border-gray-200" {...register('agreeToPrinciples', { required: true })} />
          </div>
          <div className="flex justify-between w-80 md:w-96">
            <label htmlFor="businessName">Business Name</label>
            <input id="businessName" className="border border-gray-200" {...register('businessName', { required: true })} />
          </div>
          <div className="flex justify-between w-80 md:w-96">
            <label htmlFor="ownerName">Owner Name</label>
            <input id="ownerName" className="border border-gray-200" {...register('ownerName', { required: true })} />
          </div>
          <div className="flex justify-between w-80 md:w-96">
            <label htmlFor="description">Description</label>
            <input id="description" className="border border-gray-200" {...register('description', { required: true })} />
          </div>
          <div className="flex justify-between w-80 md:w-96">
            <label htmlFor="keywords">Keywords</label>
            <input id="keywords" className="border border-gray-200" {...register('keywords')} />
          </div>
          <div className="flex justify-between w-80 md:w-96">
            <label htmlFor="logo">Logo</label>
            <input id="logo" className="border border-gray-200" {...register('logo')} />
          </div>
          <div className="flex justify-between w-80 md:w-96">
            <label htmlFor="email">Email</label>
            <input id="email" className="border border-gray-200" {...register('email', { required: true })} />
          </div>
          <div className="flex justify-between items-center w-80 md:w-96">
            <label htmlFor="emailPublish">Publish Email Address</label>
            <input type="checkbox" id="emailPublish" className="border border-gray-200" {...register('emailPublish')} />
          </div>
          <div className="flex justify-between items-center w-80 md:w-96">
            <label htmlFor="phone">Phone Number</label>
            <input id="phone" className="border border-gray-200" {...register('phone')} />
          </div>
          <div className="flex justify-between w-80 md:w-96">
            <label htmlFor="phonePublish">Publish Phone Number</label>
            <input type="checkbox" id="phonePublish" className="border border-gray-200" {...register('phonePublish')} />
          </div>
          <div className="flex justify-between w-80 md:w-96">
            <label htmlFor="website">Website</label>
            <input id="website" className="border border-gray-200" {...register('website')} />
          </div>
          <div className="flex justify-between w-80 md:w-96">
            <label htmlFor="facebook">Facebook</label>
            <input id="facebook" className="border border-gray-200" {...register('facebook')} />
          </div>
          <div className="flex justify-between w-80 md:w-96">
            <label htmlFor="instagram">Instagram</label>
            <input id="instagram" className="border border-gray-200" {...register('instagram')} />
          </div>
          <div className="flex justify-between w-80 md:w-96">
            <label htmlFor="twitter">Twitter</label>
            <input id="twitter" className="border border-gray-200" {...register('twitter')} />
          </div>
          <div className="flex justify-between w-80 md:w-96">
            <label htmlFor="linkedin">LinkedIn</label>
            <input id="linkedin" className="border border-gray-200" {...register('linkedin')} />
          </div>
          <div className="flex justify-between w-80 md:w-96">
            <label htmlFor="youtube">YouTube</label>
            <input id="youtube" className="border border-gray-200" {...register('youtube')} />
          </div>
          {errors.exampleRequired && <span>This field is required</span>}
          <input className="w-80 md:w-96 border border-gray-200 bg-sky-700 hover:bg-sky-800 lg:hover:cursor-pointer text-gray-100 py-2 rounded-lg" type="submit" />
        </form>
      </div>
    </div>
  )
}

export default SubmitListing;
