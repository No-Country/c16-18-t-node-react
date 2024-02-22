import { clsx } from "clsx";
const ProductCard = ({ category, image, rating, price, name }) => {
  return (
    <div className="w-[298px] h-[466px] rounded-2xl border border-gray-300 overflow-hidden">
      <div className="w-full h-[31px] flex justify-start ">
        <div
          className={clsx(
            "w-[64.5px]  flex justify-center items-center  rounded-br-[20px]",
            {
              "bg-greenLabel": category === "Sin TACC",
              "bg-redLabel": category === "Vegano" || category === "Sin azúcar",
              "bg-orangeLabel": category === "Keto",
              "bg-blueLabel": category === "Orgánico"
            }
          )}
        >
          <p className="text-xs text-white text-center">{category}</p>
        </div>
      </div>
      <div className="w-full h-[435px] flex flex-col justify-between pt-1 pb-8 items-center px-5">
        <div className="w-[246px h-[246px] rounded-lg px-2">
          <img className="" src={image} alt=" " />
        </div>
        <div className="w-full flex flex-col items-center gap-1">
          <div className="w-full flex flex-col items-start  gap-0">
            <h3 className="text-[15px] text-darkGreen1 font-normal leading-6">
              {name}
            </h3>
            <div className="w-full flex">
              <span className="text-[14px]">⭐⭐⭐⭐</span>
              <span className="font-normal text-sm text-gray-400">
                ({rating})
              </span>
            </div>
          </div>
          <div className="w-full items-start">
            <p className="text-[18px] text-black font-bold ">${price}</p>
          </div>
          <button className="flex items-center justify-center w-[148px] h-[36px]  rounded-[4px] bg-avocadoGreen">
            <img src="/button-cart.svg" />
            <p className="px-1 text-sm text-white">Agregar al carrito</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
