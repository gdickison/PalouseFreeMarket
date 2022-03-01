import {useState, useEffect} from 'react'
import sanityClient from '../src/client'

const AllListings = () => {
  const [listingData, setListingData] = useState(null);

  

  useEffect(() => {
      sanityClient.fetch(`*[_type == "listing"] | order(businessName desc) {
          _id,
          businessName,
          ownerName,
          email,
          description,
          website
      }`)
      .then((data) => setListingData(data));
  }, []);

  const openModal = (id) => {
    const modal = document.getElementById(id)
    modal.classList.remove('hidden')
  }

  function closeModal(id) {
      const modal = document.getElementById(id)
      modal.classList.add('hidden')
  }

  return (
    <div className='flex flex-wrap justify-center'>
      {console.log(listingData)}
      {listingData && listingData.map((data, i) => {
        return(
          <div key={data._id} className="w-1/3 max-w-sm h-96 rounded-lg border-green-300 border-2 overflow-hidden shadow-lg m-2">
            <div className="relative px-6 py-4 h-full">
              <div className="font-bold text-sky-700 text-xl mb-2">{data.businessName}</div>
              <p className='my-4'>{data.ownerName}</p>
              <div className='my-2 text-[1rem] text-sky-800 hover:text-sky-600'>
                <a href={`mailto:${data.email}`}>{data.email}</a>
              </div>
              <div className='text-gray-600 text-base line-clamp-6 hover:cursor-pointer hover:italic' onClick={() => openModal(data._id)}>
                {data.description}
              </div>
              {data.website &&
                <div className='absolute bottom-0 my-6 text-[1.15rem] bg-sky-700 rounded-md hover:bg-sky-900'>
                  <a className='p-3 text-sky-100' href={`${data.website}`} target="_blank">Visit Website</a>
                </div>
              }
            </div>

            <div id={data._id} className="fixed hidden z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4">
                <div className="relative top-40 mx-auto shadow-lg rounded-md bg-white max-w-md">
                    <div className="flex justify-between text-xl p-4 font-bold">
                        <span className='text-sky-700'>{data.businessName}</span>
                        <button onClick={() => closeModal(data._id)}>X</button>
                    </div>
                    <div className="text-base text-gray-600 p-4">
                        {data.description}
                    </div>

                    <div className="px-4 py-2 border-t border-t-gray-500 flex justify-end items-center space-x-4">
                        <button className="bg-sky-700 text-white px-4 py-2 rounded-md hover:bg-sky-900 transition" onClick={() => closeModal(data._id)}>Close</button>
                    </div>
                </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default AllListings