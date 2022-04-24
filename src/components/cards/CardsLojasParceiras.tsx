import {Component} from "react"

import { Link } from "react-router-dom"

import { LocationIcon } from "../../assets/svgs/svgs"
import { Iparceiros } from "../../store/products"

export interface ICardsLojasParceirasProps {
    parceiro: Iparceiros
}

class CardsLojasParceiras extends Component<any> {
    render() {
        return (
            <div className="relative inline-block p-3 mb-3 bg-white rounded-md shadow-lg" title="">
                <div className="">
                    <img alt="lojas" className="object-cover w-full h-auto rounded-lg" src={this.props.parceiro.url} />
                </div>
                
                <div className="flex flex-col items-center gap-3 my-2 text-base md:text-xs">
                    <h2 className="truncate">{this.props.parceiro.title}</h2>
                    
                    <div className="flex items-center justify-center gap-1 my-1 md:justify-start">
                        <LocationIcon />
                        <span className="">{this.props.parceiro.city}</span>
                    </div>
                    <Link to={`/inner-lojas/${this.props.parceiro.id}`} ><button className="block px-5 py-1 font-semibold border rounded-md cursor-pointer text-button-green border-button-green">Consultar</button></Link>
                </div>
                <div className="absolute top-3 right-3 filter">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                </div>
            </div>
        )
    }
}

export default CardsLojasParceiras

