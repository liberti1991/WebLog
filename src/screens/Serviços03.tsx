import { Component } from 'react'

import {IoIosArrowForward} from "react-icons/io"

import { LocationIcon, MoneySign } from "../assets/svgs/svgs"
import {products} from "../store/products" // data from the server
import Slider from "../components/Slider"
import FormServiços03 from "../components/forms/FormServiços03"

export interface IServiços03State {
    product: any
}

class Serviços03 extends Component<any, IServiços03State> {
    constructor(props: any) {
        super(props)
        this.state = {
            product: {}
        }
    }

    componentDidMount() {
        const product = products.find(p => p.id === +this.props.match.params.id)
        this.setState({product: product})
    }

    render() {
        const { name, city, price, image } = this.state.product
        
        const links = ["Home", "Empilhadeiras", "Novas e Usadas", name]

        return (
            <div className="p-4 mt-20 bg-grey">
                <div className="hidden mx-auto sm:w-3/5 lg:w-4/5 lg:block">
                    {links.map((link, id) => {
                        if(link !== name) {
                            return (
                                <a key={id} href="/" className="inline-flex items-center gap-3 pl-3 text-xs font-semibold">
                                    <>{link}</>
                                    <IoIosArrowForward className="mr-0.5" />
                                </a>
                            )
                        } else {
                            return (
                                <a key={id} href="/" className="pl-2 text-xs font-semibold text-orange">{link}</a>
                            )
                        }            
                    })}
                </div>
                
                <main className="grid grid-cols-1 gap-3 mx-auto lg:grid-cols-2 sm:w-3/5 lg:w-4/5 lg:pt-0">
                    <section className="relative m-3 mb-3 pb-9">
                        
                        <Slider name={name} image={image} />

                        <h3 className="mt-8 mb-1 font-bold">Descrição</h3>
                        <p className="text-sm">Empilhadeira Yale 70VX, 3.500, torre duplex, maquina reformada e revisada. Preço válido para modalidade venda direta CNPJ já com desconto. Sujeito a alteração sem prévio aviso. Imagens meramente ilustrativas.</p>
                        <h3 className="mt-4 mb-3 font-bold">Detalhamento técnico</h3>
                        <div>
                            <div className="flex w-full mb-2"><p className="flex-1 py-2 pr-2 text-sm font-bold text-right bg-white">Tipo de operação</p><p className="flex-1 py-2 text-sm text-center text-white bg-light-grey">Venda</p></div>
                            <div className="flex w-full mb-2"><p className="flex-1 py-2 pr-2 text-sm font-bold text-right bg-white">Condiçao</p><p className="flex-1 py-2 text-sm text-center text-white bg-light-grey">Novo</p></div>
                            <div className="flex w-full mb-2"><p className="flex-1 py-2 pr-2 text-sm font-bold text-right bg-white">País</p><p className="flex-1 py-2 text-sm text-center text-white bg-light-grey">Brasil</p></div>
                            <div className="flex w-full mb-2"><p className="flex-1 py-2 pr-2 text-sm font-bold text-right bg-white">Cidade/Estado</p><p className="flex-1 py-2 text-sm text-center text-white bg-light-grey">Curitiba-PR</p></div>
                            <div className="flex w-full mb-2"><p className="flex-1 py-2 pr-2 text-sm font-bold text-right bg-white">Envio</p><p className="flex-1 py-2 text-sm text-center text-white bg-light-grey">Imediato</p></div>
                            <div className="flex w-full mb-2"><p className="flex-1 py-2 pr-2 text-sm font-bold text-right bg-white">Marca</p><p className="flex-1 py-2 text-sm text-center text-white bg-light-grey">Yale</p></div>
                            <div className="flex w-full mb-2"><p className="flex-1 py-2 pr-2 text-sm font-bold text-right bg-white">Modelo</p><p className="flex-1 py-2 text-sm text-center text-white bg-light-grey">GP070PX</p></div>
                            <div className="flex w-full mb-2"><p className="flex-1 py-2 pr-2 text-sm font-bold text-right bg-white">Ano de fabricação</p><p className="flex-1 py-2 text-sm text-center text-white bg-light-grey">2014</p></div>
                        </div>
                    </section>

                    <section className="relative px-8 m-3 mb-3 bg-white rounded-md pb-9 lg:mx-9 lg:px-14">
                        <span className="text-sm bg-grey mt-5 inline-block px-3 py-0.5">Novo</span>
                        <span className="block mt-2 font-bold text-orange">R$ {price}</span>
                        <h3 className="mt-4 font-bold">{name}</h3>
                        <div className="inline-flex items-center justify-center gap-1 text-left">
                            <LocationIcon />
                            <span className="text-sm">{city}</span>
                        </div>
                        <hr className="mt-4 border border-black"/>
                        <FormServiços03 />
                        <div className="absolute top-4 right-4"><MoneySign /></div>
                    </section>
                </main>
            </div>
        )
    }
    
}

export default Serviços03

