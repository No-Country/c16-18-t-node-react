import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const ConfirmUserPage = () => {

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
    <div className="h-[60vh] w-full flex flex-col items-center justify-center bg-yellowGreen">
        <h2 className="text-2xl sm:text-4xl">Usuario registrado con exito!! </h2>
        <p className="textlg sm:text-2xl">Redireccionando al HomePage en {countdown} segundos...</p>
    </div>
  )
}

export default ConfirmUserPage