import { useState } from 'react'

import logo from "../assets/images/logo.png"
import SearchBar from "./SearchBar"

import { ModalLogin } from './login/ModalLogin.js';

export interface INavbarProps {
    isOpen: boolean
}

export const Navbar = () => {

    const [IsModalLogin, setIsModalLogin] = useState(false);
    
    return (
        <>
            <header className="fixed inset-x-0 top-0 z-20 px-10 bg-orange">
                <nav className="grid h-20 max-w-6xl mx-auto place-items-stretch">
                    <div className="flex items-center justify-between">
                        <div className="flex">
                            {/* logo */}
                            <div className="flex-shrink-0 cursor-pointer"><img className="h-9" src={logo} alt="logo" /></div>
                            {/* search bar */}
                            <SearchBar />
                        </div>
                        {/* publicar button */}
                        <div className="flex-1 hidden md:block">
                            <button className="block px-5 ml-auto mr-4 font-normal text-white bg-transparent border border-white btn lg:mr-10 h-9">
                                Publicar
                            </button>
                        </div>
                        <button className="inline-flex items-center my-1 mr-20 text-white border border-white btn bg-orange" onClick={()=> setIsModalLogin(true)}>Entrar</button>
                        {IsModalLogin ? (<ModalLogin onClose={()=> setIsModalLogin(false)} />):null}
                    </div>
                </nav>
            </header>
        </>
    )
};