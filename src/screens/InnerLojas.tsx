import { Component } from 'react'

import { SearchIcon } from "../assets/svgs/svgs"
import Footer from "../components/Footer"
import CardProdutos from "../components/cards/CardProdutos"
import {parceiros} from "../store/products"

export interface IInnerLojasProps {
    match: any;
}

export interface IInnerLojasState {
    parceiro: any
}

class InnerLojas extends Component<IInnerLojasProps, IInnerLojasState> {
    constructor(props: IInnerLojasProps) {
        super(props)
        this.state = {
            parceiro: {}
        }
    }

    componentDidMount() {
        const parceiro = parceiros.find(p => p.id === +this.props.match.params.id)
        this.setState({parceiro: parceiro})
    }

    render() {
        return (
            <div>
                <div className="pb-5 mt-20 bg-grey">
                    <div>
                        <div className="relative px-3 md:hidden">
                            <input type="text" className="w-full h-12 px-6 my-1 border border-gray-400 rounded-lg outline-none" placeholder="O que você procura?" />
                            <div className="absolute grid w-10 h-12 text-white rounded-r-lg cursor-pointer top-1 right-3 bg-web-orange place-items-center">
                                <SearchIcon />
                            </div>
                        </div>
                        
                        <div className="relative flex flex-col-reverse m-0">
                            <div className="relative grid gap-2 my-10 transform sm:left-20 z-3 sm:gap-1 sm:top-1/2 sm:-translate-y-1/2 sm:transform sm:mt-0 place-items-center sm:absolute">
                                <img className="w-32 rounded-lg md:w-28 sm:w-20" alt="product" src={this.state.parceiro.url} />
                                <button className="flex items-center px-2 py-1 text-xs text-white rounded shadow-md md:px-4 md:text-sm bg-orange hover:bg-web-orange">Compartilhar</button>
                            </div>
                            <img alt="product" src="https://www.havan.com.br/media/weltpixel/owlcarouselslider/images/f/u/fullbanner-07.09-24.horas_1__1.webp"/>
                        </div>
                    </div>

                    <div className="w-5/6 mx-auto">
                        <div className="justify-center gap-2 my-5 font-semibold uppercase lg:gap-10 sm:bg-orange sm:flex">
                            <a className="block px-1.5 py-1 my-1 text-sm md:text-sm sm:text-xs text-gray-700 bg-white shadow-lg sm:bg-transparent sm:text-white sm:shadow-none" href="produtos">Produtos</a>
                            <a className="block px-1.5 py-1 my-1 text-sm md:text-sm sm:text-xs text-gray-700 bg-white shadow-lg sm:bg-transparent sm:text-white sm:shadow-none" href="serviços">Serviços</a>
                            <a className="block px-1.5 py-1 my-1 text-sm md:text-sm sm:text-xs text-gray-700 bg-white shadow-lg sm:bg-transparent sm:text-white sm:shadow-none" href="serviços">Informações</a>
                            <a className="block px-1.5 py-1 my-1 text-sm md:text-sm sm:text-xs text-gray-700 bg-white shadow-lg sm:bg-transparent sm:text-white sm:shadow-none" href="empilhadeiras">Empilhadeiras</a>
                            <a className="block px-1.5 py-1 my-1 text-sm md:text-sm sm:text-xs text-gray-700 bg-white shadow-lg sm:bg-transparent sm:text-white sm:shadow-none" href="outros">Outros</a>
                        </div>
                    </div>

                    <CardProdutos url={this.state.parceiro.url}/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default InnerLojas

