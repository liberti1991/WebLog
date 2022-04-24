import { Component } from 'react'

import { BsChevronDown } from "react-icons/bs"
import { BiFilterAlt } from "react-icons/bi"

import Card from "../components/cards/Card"
import AsideFilter from "../components/aside/AsideFilter"
import {AppContext, IAppContext} from "../store/AppContext"
import { Iproducts } from '../store/products'

export interface IServiçosState {
    isOpen: boolean
}

class Serviços extends Component<{}, IServiçosState> {
    state = {
        isOpen: false
    }

    toggleAsideFilter = () => {
        this.setState((prev: IServiçosState) => ({isOpen: !prev.isOpen}))
    }

    render() {
        return (
            <AppContext.Consumer>
                {({products}: IAppContext) => {
                    return (
                        <main className="relative min-h-screen grid-flow-row grid-cols-5 mt-20 lg:grid bg-grey">
                            <AsideFilter className="hidden col-span-1 py-4 bg-white row-span-full lg:block" />
                            
            
                            <section className="col-span-4 py-10 row-span-full">
                                <div className="absolute items-center justify-center hidden gap-2 text-sm text-black cursor-pointer top-28 right-28 lg:flex">
                                    <a href="/">Ordenar por</a><BsChevronDown />
                                </div>

                                <div onClick={this.toggleAsideFilter} className="z-30 flex items-center justify-center w-4/5 gap-2 mx-auto bg-white shadow-sm cursor-pointer lg:hidden">
                                    <BiFilterAlt/>
                                    <span className="py-2 text-xs font-bold uppercase">Busca Avançada</span>
                                    
                                </div>
                                <AsideFilter toggleAsideFilter={this.toggleAsideFilter} className={`${this.state.isOpen ? "translate-x-0 " : "translate-x-200 hidden "}bg-grey px-10 rounded-md py-36 w-4/5 fixed lg:-translate-x-full lg:hidden inset-y-0 z-4`} />

                                {products.map((product: Iproducts) => <Card key={product.id} product={product} />)}
                            </section>
                        </main>
                    )
                }}
            </AppContext.Consumer>
        )
        
    }
}

export default Serviços

