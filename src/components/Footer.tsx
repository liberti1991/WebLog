import {Component} from "react"

import logo from "../assets/images/logo.png"
import EntrarEnviarButton from "./EntrarEnviarButton"
import Socials from "./Socials"

class Footer extends Component {
    render() {
        return (
            <footer className="w-full">
                <div className="relative py-16 bg-center bg-cover bg-pre-cadastro-bg">
                    <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
                    <div className="grid w-4/5 gap-5 mx-auto my-4 text-white sm:grid-cols-2 md:grid-cols-3 md:gap-7">
                        
                        <div className="z-10">
                            <h3 className="mb-2 font-bold">Sobre Nós</h3>
                            <ul className=""> 
                                <li><a href="/">Fale Conosco</a></li>
                                <li><a href="/">Trabalhe Conosco</a></li>
                                <li><a href="/">Tenha sua Loja Online</a></li>
                            </ul>
                        </div>
                        <div className="z-10">
                            <h3 className="mb-2 font-bold">Minha Conta</h3>
                            <ul className=""> 
                                <li><a href="/">Minha Conta</a></li>
                                <li><a href="/">Meus Anúncios</a></li>
                                <li><a href="/">Meus Favoritos</a></li>
                            </ul>
                        </div>
                        <div className="z-10">
                            <h3 className="mb-2 font-bold">Siga-nos</h3>
                            <Socials />
                        </div>
                    
                    </div>     
                </div>
                
                <div className="py-6 bg-orange">
                    <div className="items-center justify-between sm:flex sm:w-4/5 sm:mx-auto">
                        <a href="/">
                            <div className="flex-shrink-0">
                                <img className="mx-auto h-9" src={logo} alt="logo" />
                            </div>
                        </a>

                        <div className="flex items-center justify-center gap-1 py-5">
                            <input type="text" className="w-40 px-2 text-xs rounded-lg outline-none sm:text-sm h-9" placeholder="Insira seu e-mail" />
                            <EntrarEnviarButton className="rounded-lg bg-web-orange h-9">Enviar</EntrarEnviarButton>
                        </div>

                        
                    </div>
                    <p className="text-xs text-center text-white">®  WebLog 2021 - Todos os direitos reservados - Desenvolvido por A&M Solutions - Agência Digital</p>
                </div>
            </footer>
        )
    }
}

export default Footer

