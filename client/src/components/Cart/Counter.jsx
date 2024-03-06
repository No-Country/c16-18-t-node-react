import { useEffect, useState } from "react";
import { useCart } from "../../stores/useCart";


const Counter = (props) => {
  const { count, setCount, productId } = props;

  const {updateProductAmount} = useCart();

  const [newAmount, setNewAmount] = useState(count);


  const handleChange = (quantity) => {
    const updatedAmount = count + quantity
    console.log(updatedAmount);
    setCount(count + quantity);
    setNewAmount(updatedAmount);
  };

  // updateProductAmount(productId, newAmount);
  useEffect(() => {
    // Access the state value for newAmount within useEffect
    updateProductAmount(productId, newAmount);
  }, [updateProductAmount, newAmount, productId]);


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
