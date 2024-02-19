

const Counter = () => {
  return (
    <div className="w-32 h-12 border border-platinum rounded-full flex justify-center items-center">
        <div className="w-10 h-10 rounded-full bg-whiteSmoke flex justify-center items-center">
        <img src="/remove.svg" alt="remove" />
        </div>
        <p className="w-10 h-6 text-center text-base leading-6 font-normal font-poppins">3</p>
        <div className="w-10 h-10 rounded-full bg-whiteSmoke flex justify-center items-center">
        <img src="/add.svg" alt="add" />
        </div>
    </div>
  )
}

export default Counter