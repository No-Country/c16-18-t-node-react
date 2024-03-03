import { useCart } from "../../stores/useCart";

const Counter = (props) => {
  const { count, setCount, product } = props;

  const {setCart} = useCart()

  const handleChange = (quantity) => {
    setCount(count + quantity);
    setCart(product, count);
  };

  return (
    <div className="w-24 h-7 sm:w-32 sm:h-12 border border-platinum rounded-full flex justify-center items-center">
      {count === 0 ? (
        <button className="w-5 h-5 sm:w-10 sm:h-10 rounded-full bg-gray flex justify-center items-center">
          <img src="/remove.svg" alt="remove" />
        </button>
      ) : (
        <button
          className="w-5 h-5 sm:w-10 sm:h-10 rounded-full bg-whiteSmoke flex justify-center items-center"
          onClick={() => handleChange(-1)}
        >
          <img src="/remove.svg" alt="remove" />
        </button>
      )}

      <p className="w-10 h-6 text-center text-base leading-6 font-normal font-poppins">
        {count}
      </p>
      <button
        className="w-5 h-5 sm:w-10 sm:h-10 rounded-full bg-whiteSmoke flex justify-center items-center"
        onClick={() => handleChange(+1)}
      >
        <img src="/add.svg" alt="add" />
      </button>
    </div>
  );
};

export default Counter;
