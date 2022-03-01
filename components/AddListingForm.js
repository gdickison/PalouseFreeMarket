import { useForm } from "react-hook-form";
import {useState, forwardRef} from 'react';

const AddListingForm = () => {
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
    <div>
      <h1>Add New Listing Form</h1>
      <form className="flex flex-col space-y-6 w-1/2 p-8" onSubmit={handleSubmit(onSubmit)}>
      {/* <input ref={register} type="hidden" name="_id" value={_id} /> */}
        <div className="flex justify-between w-96">
          <label htmlFor="businessName">Business Name</label>
          <input id="businessName" className="border border-gray-200" {...register('businessName', { required: true })} />
        </div>
        <div className="flex justify-between w-96">
          <label htmlFor="ownerName">Owner Name</label>
          <input id="ownerName" className="border border-gray-200" {...register('ownerName', { required: true })} />
        </div>
        <div className="flex justify-between w-96">
          <label htmlFor="description">Description</label>
          <input id="description" className="border border-gray-200" {...register('description', { required: true })} />
        </div>
        <div className="flex justify-between w-96">
          <label htmlFor="keywords">Keywords</label>
          <input id="keywords" className="border border-gray-200" {...register('keywords')} />
        </div>
        <div className="flex justify-between w-96">
          <label htmlFor="logo">Logo</label>
          <input id="logo" className="border border-gray-200" {...register('logo')} />
        </div>
        <div className="flex justify-between w-96">
          <label htmlFor="email">Email</label>
          <input id="email" className="border border-gray-200" {...register('email', { required: true })} />
        </div>
        <div className="flex justify-between w-96">
          <label htmlFor="emailPublish">Email Publish</label>
          <input id="emailPublish" className="border border-gray-200" {...register('emailPublish', { required: true })} />
        </div>
        <div className="flex justify-between w-96">
          <label htmlFor="phone">Phone Number</label>
          <input id="phone" className="border border-gray-200" {...register('phone')} />
        </div>
        <div className="flex justify-between w-96">
          <label htmlFor="phonePublish">Phone Number Publish</label>
          <input id="phonePublish" className="border border-gray-200" {...register('phonePublish')} />
        </div>
        <div className="flex justify-between w-96">
          <label htmlFor="website">Website</label>
          <input id="website" className="border border-gray-200" {...register('website')} />
        </div>
        <div className="flex justify-between w-96">
          <label htmlFor="facebook">Facebook</label>
          <input id="facebook" className="border border-gray-200" {...register('facebook')} />
        </div>
        <div className="flex justify-between w-96">
          <label htmlFor="instagram">Instagram</label>
          <input id="instagram" className="border border-gray-200" {...register('instagram')} />
        </div>
        <div className="flex justify-between w-96">
          <label htmlFor="twitter">Twitter</label>
          <input id="twitter" className="border border-gray-200" {...register('twitter')} />
        </div>
        <div className="flex justify-between w-96">
          <label htmlFor="linkedin">LinkedIn</label>
          <input id="linkedin" className="border border-gray-200" {...register('linkedin')} />
        </div>
        <div className="flex justify-between w-96">
          <label htmlFor="youtube">YouTube</label>
          <input id="youtube" className="border border-gray-200" {...register('youtube')} />
        </div>
        {errors.exampleRequired && <span>This field is required</span>}
        <input className="w-96 border border-gray-200" type="submit" />
      </form>
    </div>
  )
}

export default AddListingForm;
