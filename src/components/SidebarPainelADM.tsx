import { Component } from 'react'
import { Link } from 'react-router-dom'

import {MdDashboard} from "react-icons/md"
import {BiStore} from "react-icons/bi"
import {RiAdvertisementLine} from "react-icons/ri"
import {BsChatDots} from "react-icons/bs"
import {MdFavorite} from "react-icons/md"
import {AiOutlineSetting} from "react-icons/ai"
import {HiLogout} from "react-icons/hi"
import {FaWallet} from "react-icons/fa"
import { InfoPainelADM } from './InfoPainelADM'

class Sidebar extends Component {
    render() {
        return (
            <>
                <InfoPainelADM />
                <div className="flex flex-col items-center py-4 px-8 space-y-2 md:items-start">

                    <button className="px-4 py-2 text-sm rounded-lg text-orange hover:bg-white hover:text-web-orange">
                        <Link className="flex items-center gap-3 font-semibold uppercase" to="/painel/dashBord"><MdDashboard />Dashboard</Link>
                    </button>

                    <button className="px-4 py-2 text-sm rounded-lg text-orange hover:bg-white hover:text-web-orange">
                        <Link className="flex items-center gap-3 font-semibold uppercase" to="/painel/lojas"><BiStore />Lojas</Link>
                    </button>

                    <button className="px-4 py-2 text-sm rounded-lg text-orange hover:bg-white hover:text-web-orange">
                        <Link className="flex items-center gap-3 font-semibold uppercase" to="/painel/meus-anuncios"><RiAdvertisementLine />Anúncios</Link>
                    </button>

                    <button className="px-4 py-2 text-sm rounded-lg text-orange hover:bg-white hover:text-web-orange">
                        <Link className="flex items-center gap-3 font-semibold uppercase" to="/painel/chat"><BsChatDots />Chat</Link>
                    </button>

                    <button className="pl-4 py-2 text-sm rounded-lg text-orange hover:bg-white hover:text-web-orange">
                        <Link className="flex items-center gap-3 font-semibold uppercase"to="/painel/carteira"><FaWallet />Carteira Virtual</Link>
                    </button>

                    <button className="px-4 py-2 text-sm rounded-lg text-orange hover:bg-white hover:text-web-orange">
                        <Link className="flex items-center gap-3 font-semibold uppercase" to="/painel/favoritos"><MdFavorite />Favoritos</Link>
                    </button>

                    <button className="px-4 py-2 text-sm rounded-lg text-orange hover:bg-white hover:text-web-orange">
                        <Link className="flex items-center gap-3 font-semibold uppercase" to="/painel/configuracoes"><AiOutlineSetting />Configurações</Link>
                    </button>

                    <button className="px-4 py-2 text-sm bg-transparent rounded-lg text-orange hover:bg-web-orange hover:text-white">
                        <Link className="flex items-center gap-3 font-semibold capitalize"to="/"><HiLogout />sair</Link>
                    </button>

                </div>
            </>
        )
    }   
}

export default Sidebar

