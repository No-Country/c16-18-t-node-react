

const UserMenu = ({isOpen}) => {
    
    return(
        <div className={`${isOpen ? 'block' : 'hidden'} absolute top-full z-50 w-[120%] bg-[#f7f7f8]`}>
            <ul>
                <li className="hover:bg-gradient-to-r from-grayishGreen4 to-25%"><a className="flex items-center gap-2 py-4 px-8 text-darkGreen1" href="#"><img src="/home-icon.svg" alt=" " /> Home</a></li>
                <li className="hover:bg-gradient-to-r from-grayishGreen4 to-25%"><a className="flex items-center gap-2 py-4 px-8 text-darkGreen1" href="#"><img src="/profile-icon.svg" alt=" " /> Perfil</a></li>
                <li className="hover:bg-gradient-to-r from-grayishGreen4 to-25%"><a className="flex items-center gap-2 py-4 px-8 text-darkGreen1" href="#"><img src="/message-icon.svg" alt=" " /> Mensajes</a></li>
                <li className="hover:bg-gradient-to-r from-grayishGreen4 to-25%"><a className="flex items-center gap-2 py-4 px-8 text-darkGreen1" href="#"><img src="/order-icon.svg" alt=" " /> Mis pedidos</a></li>
                <li className="hover:bg-gradient-to-r from-grayishGreen4 to-25%"><a className="flex items-center gap-2 py-4 px-8 text-darkGreen1" href="#"><img src="/settings-icon.svg" alt=" " /> Configuración</a></li>
            </ul>
        </div>
    )
}

export default UserMenu