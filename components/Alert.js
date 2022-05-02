/* eslint-disable @next/next/no-img-element */
const Alert = ({message, closeAlert}) => {
  return (
    <div className="flex justify-around items-center w-80 min-h-[100px] h-max-content my-[20px] mx-auto absolute top-40 left-0 right-0 bg-sky-700 border-4 border-green-300 rounded-lg shadow-lg text-gray-100">
      <span className="w-3/5 pl-4 py-2">{message}</span>
      <span className="text-2xl text-center hover:cursor-pointer hover:scale-150" onClick={closeAlert}>&times;</span>
    </div>
  )
}

export default Alert