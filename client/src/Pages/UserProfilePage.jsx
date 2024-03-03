/* eslint-disable react/no-unknown-property */
import { AuthContext } from "../auth/context/AuthContext.jsx";
import { useContext } from "react";
import { Link } from "react-router-dom";

const UserProfilePage = () => {
  const { user } = useContext(AuthContext);

  if (user.rol === "Vendedor") {
    return (
      <>
        <section className="flex pb-12 gap-6">
          <aside className="flex flex-col gap-8 p-2 w-[20%] bg-darkGreen2 text-grayishGreen4">
            <div className="flex flex-col items-center self-center">
              <img className="w-[90px]" src={user.avatar} alt=" " />
              <p className="font-bold">{user.name}</p>
              <p className="font-bold opacity-75">{user.email}</p>
            </div>
            <ul>
              <li className="flex gap-4 p-4">
                <svg
                  width="22"
                  height="17"
                  viewBox="0 0 22 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.8">
                    <path
                      d="M8.97247 17V11H13.0459V17H18.1376V9H21.1927L11.0092 0L0.825684 9H3.88073V17H8.97247Z"
                      fill="#EDEBEE"
                    />
                  </g>
                </svg>
                Home
              </li>
              <li className="flex gap-4 p-4">
                <svg
                  width="20"
                  height="24"
                  viewBox="0 0 20 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 22C14 18 18 14.4182 18 10C18 5.58172 14.4183 2 10 2C5.58173 2 2 5.58172 2 10C2 14.4182 6 18 10 22Z"
                    stroke="#EDEBEE"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Mis direcciones
              </li>
              <li className="flex gap-4 p-4">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.74225 0H14.277C17.4227 0 19.1743 1.78 19.1743 4.83V15.16C19.1743 18.26 17.4227 20 14.277 20H5.74225C2.64647 20 0.843994 18.26 0.843994 15.16V4.83C0.843994 1.78 2.64647 0 5.74225 0ZM6.01721 4.66V4.65H9.06105C9.49996 4.65 9.85638 5 9.85638 5.429C9.85638 5.87 9.49996 6.22 9.06105 6.22H6.01721C5.5783 6.22 5.22289 5.87 5.22289 5.44C5.22289 5.01 5.5783 4.66 6.01721 4.66ZM6.01721 10.74H14.0011C14.4389 10.74 14.7954 10.39 14.7954 9.96C14.7954 9.53 14.4389 9.179 14.0011 9.179H6.01721C5.5783 9.179 5.22289 9.53 5.22289 9.96C5.22289 10.39 5.5783 10.74 6.01721 10.74ZM6.01721 15.31H14.0011C14.4074 15.27 14.7139 14.929 14.7139 14.53C14.7139 14.12 14.4074 13.78 14.0011 13.74H6.01721C5.7117 13.71 5.41638 13.85 5.25344 14.11C5.09051 14.36 5.09051 14.69 5.25344 14.95C5.41638 15.2 5.7117 15.35 6.01721 15.31Z"
                    fill="#EDEBEE"
                  />
                </svg>
                <Link to="/misproductos" >
                    Mis productos
                  </Link>
              </li>
              <li className="flex gap-4 p-4">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.5655 11.58C18.9298 11.77 19.2108 12.07 19.4085 12.37C19.7936 12.99 19.7624 13.75 19.3877 14.42L18.6592 15.62C18.2741 16.26 17.5561 16.66 16.8172 16.66C16.4529 16.66 16.047 16.56 15.714 16.36C15.4434 16.19 15.1312 16.13 14.7982 16.13C13.7679 16.13 12.9041 16.96 12.8729 17.95C12.8729 19.1 11.9154 20 10.7186 20H9.30324C8.09601 20 7.13856 19.1 7.13856 17.95C7.11775 16.96 6.25396 16.13 5.22366 16.13C4.88022 16.13 4.56801 16.19 4.30783 16.36C3.97481 16.56 3.55852 16.66 3.20468 16.66C2.45537 16.66 1.73728 16.26 1.35222 15.62L0.634131 14.42C0.249069 13.77 0.228255 12.99 0.613317 12.37C0.779831 12.07 1.09204 11.77 1.44588 11.58C1.73728 11.44 1.92461 11.21 2.10153 10.94C2.62189 10.08 2.30967 8.95 1.42507 8.44C0.394768 7.87 0.0617416 6.6 0.654946 5.61L1.35222 4.43C1.95583 3.44 3.24631 3.09 4.28702 3.67C5.19244 4.15 6.36844 3.83 6.8992 2.98C7.06571 2.7 7.15938 2.4 7.13856 2.1C7.11775 1.71 7.23223 1.34 7.42996 1.04C7.81502 0.42 8.5123 0.02 9.27201 0H10.7394C11.5095 0 12.2068 0.42 12.5919 1.04C12.7792 1.34 12.9041 1.71 12.8729 2.1C12.8521 2.4 12.9457 2.7 13.1122 2.98C13.643 3.83 14.819 4.15 15.7348 3.67C16.7651 3.09 18.066 3.44 18.6592 4.43L19.3565 5.61C19.9601 6.6 19.6271 7.87 18.5864 8.44C17.7018 8.95 17.3895 10.08 17.9203 10.94C18.0868 11.21 18.2741 11.44 18.5655 11.58ZM7.06571 10.01C7.06571 11.58 8.38741 12.83 10.0213 12.83C11.6552 12.83 12.9457 11.58 12.9457 10.01C12.9457 8.44 11.6552 7.18 10.0213 7.18C8.38741 7.18 7.06571 8.44 7.06571 10.01Z"
                    fill="#EDEBEE"
                  />
                </svg>
                Configuración
              </li>
            </ul>
          </aside>
          <main className="flex flex-col gap-8 w-[60%] pr-8">
            <h1 className="font-extrabold text-[2.625rem] text-darkGreen1">
              Mi cuenta
            </h1>
            <section>
              <h2 className="mb-2 font-semibold text-2xl">Perfil</h2>
              <div className="flex items-center justify-between p-4 text-2xl font-semibold bg-grayishGreen2">
                <div className="flex items-center gap-4">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 26 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_192_1021)">
                      <path
                        d="M13.0093 12C15.2599 12 17.0827 10.21 17.0827 8C17.0827 5.79 15.2599 4 13.0093 4C10.7588 4 8.93594 5.79 8.93594 8C8.93594 10.21 10.7588 12 13.0093 12ZM13.0093 14C10.2903 14 4.86255 15.34 4.86255 18V20H21.1561V18C21.1561 15.34 15.7283 14 13.0093 14Z"
                        fill="#ffffff"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_192_1021">
                        <rect
                          width="24.4404"
                          height="24"
                          fill="white"
                          transform="translate(0.789062)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="text-white">Información personal</p>
                </div>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.55984 12L0.839844 11.28L5.79984 6.36C5.87984 6.25333 5.91984 6.13333 5.91984 6C5.91984 5.86667 5.87984 5.74667 5.79984 5.64L0.839844 0.72L1.55984 0L6.47984 4.92C6.77318 5.21333 6.91984 5.57333 6.91984 6C6.91984 6.42667 6.77318 6.78667 6.47984 7.08L1.55984 12Z"
                    fill="#ffffff"
                  />
                </svg>
              </div>
            </section>
            <section>
              <h2 className="mb-2 font-semibold text-2xl">Soporte técnico</h2>
              <div className="flex items-center justify-between gap-4 p-4 text-2xl font-semibold bg-grayishGreen2">
                <div className="flex items-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
                      fill="#ffffff"
                    />
                  </svg>
                  <p className="text-white">Términos y condiciones</p>
                </div>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.55984 12L0.839844 11.28L5.79984 6.36C5.87984 6.25333 5.91984 6.13333 5.91984 6C5.91984 5.86667 5.87984 5.74667 5.79984 5.64L0.839844 0.72L1.55984 0L6.47984 4.92C6.77318 5.21333 6.91984 5.57333 6.91984 6C6.91984 6.42667 6.77318 6.78667 6.47984 7.08L1.55984 12Z"
                    fill="#ffffff"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-between gap-4 p-4 text-2xl font-semibold bg-grayishGreen2">
                <div className="flex items-center gap-4">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.8025 23.2884C22.9842 25.38 20.5449 26.8355 17.8407 27.4425C15.1365 28.0494 12.3091 27.7759 9.77139 26.662C7.23366 25.5478 5.1186 23.6515 3.73506 21.25C2.35153 18.8485 1.77199 16.0676 2.08109 13.3133C2.38994 10.5588 3.57139 7.97519 5.45288 5.93983C7.33437 3.90447 9.81734 2.52398 12.5391 2M17.4617 2.01054C19.2895 2.36254 21.0203 3.10307 22.537 4.182C24.0538 5.26094 25.3211 6.6531 26.2531 8.26429C27.1853 9.87549 27.7604 11.6681 27.9396 13.5209C28.1188 15.3737 27.898 17.2433 27.2919 19.0033"
                      stroke="white"
                      strokeWidth="3.75"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12.1932 14.0683V11.557C12.1932 10.0342 13.4512 8.7998 15.0031 8.7998C16.5551 8.7998 17.813 10.0342 17.813 11.557V14.0683M11.4908 14.0683H18.5155C19.2938 14.0683 19.9204 14.6949 19.9204 15.4733V19.3369C19.9204 20.1152 19.2938 20.7418 18.5155 20.7418H11.4908C10.7124 20.7418 10.0858 20.1152 10.0858 19.3369V15.4733C10.0858 14.6949 10.7124 14.0683 11.4908 14.0683Z"
                      stroke="white"
                      strokeWidth="3.75"
                    />
                  </svg>
                  <p className="text-white">Políticas de privacidad</p>
                </div>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.55984 12L0.839844 11.28L5.79984 6.36C5.87984 6.25333 5.91984 6.13333 5.91984 6C5.91984 5.86667 5.87984 5.74667 5.79984 5.64L0.839844 0.72L1.55984 0L6.47984 4.92C6.77318 5.21333 6.91984 5.57333 6.91984 6C6.91984 6.42667 6.77318 6.78667 6.47984 7.08L1.55984 12Z"
                    fill="#ffffff"
                  />
                </svg>
              </div>
            </section>
            <section>
              <div className="flex items-center  gap-4 p-4 text-2xl font-semibold bg-grayishGreen2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
                    fill="#ffffff"
                  />
                </svg>
                <p className="text-white">Cerrar sesión </p>
              </div>
            </section>
          </main>
        </section>
      </>
    );
  } else {
    return (
      <>
        <section className="flex pb-12 gap-6">
          <aside className="flex flex-col gap-8 p-2 w-[20%] bg-darkGreen2 text-grayishGreen4">
            <div className="flex flex-col items-center self-center">
              <img className="w-[90px]" src={user.avatar} alt=" " />
              <p className="font-bold">{user.name}</p>
              <p className="font-bold opacity-75">{user.email}</p>
            </div>
            <ul>
              <li className="flex gap-4 p-4">
                <svg
                  width="22"
                  height="17"
                  viewBox="0 0 22 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.8">
                    <path
                      d="M8.97247 17V11H13.0459V17H18.1376V9H21.1927L11.0092 0L0.825684 9H3.88073V17H8.97247Z"
                      fill="#EDEBEE"
                    />
                  </g>
                </svg>
                Home
              </li>
              <li className="flex gap-4 p-4">
                <svg
                  width="20"
                  height="24"
                  viewBox="0 0 20 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 22C14 18 18 14.4182 18 10C18 5.58172 14.4183 2 10 2C5.58173 2 2 5.58172 2 10C2 14.4182 6 18 10 22Z"
                    stroke="#EDEBEE"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Mis direcciones
              </li>
              <li className="flex gap-4 p-4">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.74225 0H14.277C17.4227 0 19.1743 1.78 19.1743 4.83V15.16C19.1743 18.26 17.4227 20 14.277 20H5.74225C2.64647 20 0.843994 18.26 0.843994 15.16V4.83C0.843994 1.78 2.64647 0 5.74225 0ZM6.01721 4.66V4.65H9.06105C9.49996 4.65 9.85638 5 9.85638 5.429C9.85638 5.87 9.49996 6.22 9.06105 6.22H6.01721C5.5783 6.22 5.22289 5.87 5.22289 5.44C5.22289 5.01 5.5783 4.66 6.01721 4.66ZM6.01721 10.74H14.0011C14.4389 10.74 14.7954 10.39 14.7954 9.96C14.7954 9.53 14.4389 9.179 14.0011 9.179H6.01721C5.5783 9.179 5.22289 9.53 5.22289 9.96C5.22289 10.39 5.5783 10.74 6.01721 10.74ZM6.01721 15.31H14.0011C14.4074 15.27 14.7139 14.929 14.7139 14.53C14.7139 14.12 14.4074 13.78 14.0011 13.74H6.01721C5.7117 13.71 5.41638 13.85 5.25344 14.11C5.09051 14.36 5.09051 14.69 5.25344 14.95C5.41638 15.2 5.7117 15.35 6.01721 15.31Z"
                    fill="#EDEBEE"
                  />
                </svg>
                Mis pedidos
              </li>
              <li className="flex gap-4 p-4">
                <svg
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.8579 0.891938C18.7639 0.891938 21.1202 3.28076 21.1202 6.22683C21.1202 7.74045 20.4979 9.1043 19.4993 10.0757L11.0008 18.7349L2.34806 9.91926C1.4402 8.96038 0.880627 7.66096 0.880627 6.22683C0.880627 3.27992 3.23694 0.891938 6.14293 0.891938C8.33171 0.891938 10.2077 2.24742 11.0008 4.17521C11.794 2.24742 13.6691 0.891938 15.8579 0.891938ZM15.8579 0C13.9225 0 12.1447 0.911183 11 2.41309C9.85609 0.911183 8.07833 0 6.14211 0C2.75495 0 0 2.79379 0 6.22683C0 7.84002 0.608269 9.37121 1.71256 10.5376L11 20L20.1224 10.7058C21.3274 9.53269 22 7.93792 22 6.22767C22 2.79379 19.2442 0.000837053 15.8579 0.000837053V0Z"
                    fill="#EDEBEE"
                  />
                </svg>
                Mis favoritos
              </li>
              <li className="flex gap-4 p-4">
                <svg
                  width="25"
                  height="18"
                  viewBox="0 0 25 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 1.125L1.08696 0H23.913L25 1.125V7.1718H23.913C22.9375 7.1718 22.1467 7.99035 22.1467 9C22.1467 10.0097 22.9375 10.8282 23.913 10.8282H25V16.875L23.913 18H1.08696L0 16.875V10.8282H1.08696C2.06246 10.8282 2.85326 10.0097 2.85326 9C2.85326 7.99035 2.06246 7.1718 1.08696 7.1718H0V1.125ZM2.17391 2.25V5.07903C3.82141 5.56735 5.02717 7.1379 5.02717 9C5.02717 10.8621 3.82141 12.4326 2.17391 12.921V15.75H7.6087V2.25H2.17391ZM9.78261 2.25V15.75H22.8261V12.921C21.1786 12.4326 19.9728 10.8621 19.9728 9C19.9728 7.1379 21.1786 5.56735 22.8261 5.07903V2.25H9.78261Z"
                    fill="#EDEBEE"
                  />
                </svg>
                Mis cupones
              </li>
              <li className="flex gap-4 p-4">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.5655 11.58C18.9298 11.77 19.2108 12.07 19.4085 12.37C19.7936 12.99 19.7624 13.75 19.3877 14.42L18.6592 15.62C18.2741 16.26 17.5561 16.66 16.8172 16.66C16.4529 16.66 16.047 16.56 15.714 16.36C15.4434 16.19 15.1312 16.13 14.7982 16.13C13.7679 16.13 12.9041 16.96 12.8729 17.95C12.8729 19.1 11.9154 20 10.7186 20H9.30324C8.09601 20 7.13856 19.1 7.13856 17.95C7.11775 16.96 6.25396 16.13 5.22366 16.13C4.88022 16.13 4.56801 16.19 4.30783 16.36C3.97481 16.56 3.55852 16.66 3.20468 16.66C2.45537 16.66 1.73728 16.26 1.35222 15.62L0.634131 14.42C0.249069 13.77 0.228255 12.99 0.613317 12.37C0.779831 12.07 1.09204 11.77 1.44588 11.58C1.73728 11.44 1.92461 11.21 2.10153 10.94C2.62189 10.08 2.30967 8.95 1.42507 8.44C0.394768 7.87 0.0617416 6.6 0.654946 5.61L1.35222 4.43C1.95583 3.44 3.24631 3.09 4.28702 3.67C5.19244 4.15 6.36844 3.83 6.8992 2.98C7.06571 2.7 7.15938 2.4 7.13856 2.1C7.11775 1.71 7.23223 1.34 7.42996 1.04C7.81502 0.42 8.5123 0.02 9.27201 0H10.7394C11.5095 0 12.2068 0.42 12.5919 1.04C12.7792 1.34 12.9041 1.71 12.8729 2.1C12.8521 2.4 12.9457 2.7 13.1122 2.98C13.643 3.83 14.819 4.15 15.7348 3.67C16.7651 3.09 18.066 3.44 18.6592 4.43L19.3565 5.61C19.9601 6.6 19.6271 7.87 18.5864 8.44C17.7018 8.95 17.3895 10.08 17.9203 10.94C18.0868 11.21 18.2741 11.44 18.5655 11.58ZM7.06571 10.01C7.06571 11.58 8.38741 12.83 10.0213 12.83C11.6552 12.83 12.9457 11.58 12.9457 10.01C12.9457 8.44 11.6552 7.18 10.0213 7.18C8.38741 7.18 7.06571 8.44 7.06571 10.01Z"
                    fill="#EDEBEE"
                  />
                </svg>
                Configuración
              </li>
            </ul>
          </aside>
          <main className="flex flex-col gap-8 w-[60%] pr-8">
            <h1 className="font-extrabold text-[2.625rem] text-darkGreen1">
              Mi cuenta
            </h1>
            <section>
              <h2 className="mb-2 font-semibold text-2xl">Perfil</h2>
              <div className="flex items-center justify-between p-4 text-2xl font-semibold bg-grayishGreen2">
                <div className="flex items-center gap-4">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 26 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_192_1021)">
                      <path
                        d="M13.0093 12C15.2599 12 17.0827 10.21 17.0827 8C17.0827 5.79 15.2599 4 13.0093 4C10.7588 4 8.93594 5.79 8.93594 8C8.93594 10.21 10.7588 12 13.0093 12ZM13.0093 14C10.2903 14 4.86255 15.34 4.86255 18V20H21.1561V18C21.1561 15.34 15.7283 14 13.0093 14Z"
                        fill="#ffffff"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_192_1021">
                        <rect
                          width="24.4404"
                          height="24"
                          fill="white"
                          transform="translate(0.789062)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="text-white">Información personal</p>
                </div>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.55984 12L0.839844 11.28L5.79984 6.36C5.87984 6.25333 5.91984 6.13333 5.91984 6C5.91984 5.86667 5.87984 5.74667 5.79984 5.64L0.839844 0.72L1.55984 0L6.47984 4.92C6.77318 5.21333 6.91984 5.57333 6.91984 6C6.91984 6.42667 6.77318 6.78667 6.47984 7.08L1.55984 12Z"
                    fill="#ffffff"
                  />
                </svg>
              </div>
            </section>
            <section>
              <h2 className="mb-2 font-semibold text-2xl">Soporte técnico</h2>
              <div className="flex items-center justify-between gap-4 p-4 text-2xl font-semibold bg-grayishGreen2">
                <div className="flex items-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
                      fill="#ffffff"
                    />
                  </svg>
                  <p className="text-white">Términos y condiciones</p>
                </div>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.55984 12L0.839844 11.28L5.79984 6.36C5.87984 6.25333 5.91984 6.13333 5.91984 6C5.91984 5.86667 5.87984 5.74667 5.79984 5.64L0.839844 0.72L1.55984 0L6.47984 4.92C6.77318 5.21333 6.91984 5.57333 6.91984 6C6.91984 6.42667 6.77318 6.78667 6.47984 7.08L1.55984 12Z"
                    fill="#ffffff"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-between gap-4 p-4 text-2xl font-semibold bg-grayishGreen2">
                <div className="flex items-center gap-4">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.8025 23.2884C22.9842 25.38 20.5449 26.8355 17.8407 27.4425C15.1365 28.0494 12.3091 27.7759 9.77139 26.662C7.23366 25.5478 5.1186 23.6515 3.73506 21.25C2.35153 18.8485 1.77199 16.0676 2.08109 13.3133C2.38994 10.5588 3.57139 7.97519 5.45288 5.93983C7.33437 3.90447 9.81734 2.52398 12.5391 2M17.4617 2.01054C19.2895 2.36254 21.0203 3.10307 22.537 4.182C24.0538 5.26094 25.3211 6.6531 26.2531 8.26429C27.1853 9.87549 27.7604 11.6681 27.9396 13.5209C28.1188 15.3737 27.898 17.2433 27.2919 19.0033"
                      stroke="white"
                      strokeWidth="3.75"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12.1932 14.0683V11.557C12.1932 10.0342 13.4512 8.7998 15.0031 8.7998C16.5551 8.7998 17.813 10.0342 17.813 11.557V14.0683M11.4908 14.0683H18.5155C19.2938 14.0683 19.9204 14.6949 19.9204 15.4733V19.3369C19.9204 20.1152 19.2938 20.7418 18.5155 20.7418H11.4908C10.7124 20.7418 10.0858 20.1152 10.0858 19.3369V15.4733C10.0858 14.6949 10.7124 14.0683 11.4908 14.0683Z"
                      stroke="white"
                      strokeWidth="3.75"
                    />
                  </svg>
                  <p className="text-white">Políticas de privacidad</p>
                </div>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.55984 12L0.839844 11.28L5.79984 6.36C5.87984 6.25333 5.91984 6.13333 5.91984 6C5.91984 5.86667 5.87984 5.74667 5.79984 5.64L0.839844 0.72L1.55984 0L6.47984 4.92C6.77318 5.21333 6.91984 5.57333 6.91984 6C6.91984 6.42667 6.77318 6.78667 6.47984 7.08L1.55984 12Z"
                    fill="#ffffff"
                  />
                </svg>
              </div>
            </section>
            <section>
              <div className="flex items-center  gap-4 p-4 text-2xl font-semibold bg-grayishGreen2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
                    fill="#ffffff"
                  />
                </svg>
                <p className="text-white">Cerrar sesión </p>
              </div>
            </section>
          </main>
        </section>
      </>
    );
  }
};

export default UserProfilePage;
