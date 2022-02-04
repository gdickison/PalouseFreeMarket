const HeaderBar = ({ text }) => {
    return (
        <div className="w-screen h-20 bg-sky-700 flex justify-center items-center">
            <p className="uppercase text-white text-xl font-display tracking-widest">{text}</p>
        </div>
    )
}

export default HeaderBar