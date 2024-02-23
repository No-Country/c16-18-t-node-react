const Counter = (props) => {


  const { count, setCount, context, productSku } = props;

  const handleChange = (quantity) => {
    setCount(count + quantity);
  };

  return (
    <div className="w-32 h-12 border border-platinum rounded-full flex justify-center items-center">
      <button
        className="w-10 h-10 rounded-full bg-whiteSmoke flex justify-center items-center"
        onClick={() => handleChange(-1)}
      >
        <img src="/remove.svg" alt="remove" />
      </button>
      <p className="w-10 h-6 text-center text-base leading-6 font-normal font-poppins">
        {count}
      </p>
      <button
        className="w-10 h-10 rounded-full bg-whiteSmoke flex justify-center items-center"
        onClick={() => handleChange(+1)}
      >
        <img src="/add.svg" alt="add" />
      </button>
    </div>
  );
};

export default Counter;
