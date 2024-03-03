import { useEffect, useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import { useNavigate } from "react-router";

const PurchaseSuccessPage = () => {

    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(3);
    useEffect(() => {
        const timeout = setTimeout(() => {
          navigate("/");
        }, 3000);
        const timer = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
          }, 1000);
    
        return () => {clearTimeout(timeout);
        clearInterval(timer);}
      }, [navigate]);

      
  return (
    <div className="h-[60vh] w-full flex flex-col items-center justify-center bg-teaGreen">
        <h2 className="text-2xl sm:text-4xl">Compra realizada con exito!! </h2>
        <p className="textlg sm:text-2xl">Redireccionando al HomePage en {countdown} segundos...</p>
        <div className="absolute inset-0 flex justify-between items-center">
        <div className="w-1/3 h-1/3 flex justify-start items-start">
          <ConfettiExplosion
            force={0.2}
            particleCount={50}
            origin={{ x: 0, y: 0 }}
            gravity={1200}
          />
        </div>
        <div className="w-1/3 h-1/3 flex justify-center items-center">
          <ConfettiExplosion
            force={0.2}
            particleCount={50}
            origin={{ x: 0.5, y: 0.5 }}
            gravity={1200}
          />
        </div>
        <div className="w-1/3 h-1/3 flex justify-end items-end">
          <ConfettiExplosion
            force={0.2}
            particleCount={50}
            origin={{ x: 1, y: 1 }}
            gravity={1200}
          />
        </div>
      </div>
    </div>
  )
}

export default PurchaseSuccessPage