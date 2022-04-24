import { Component } from 'react'

import CardHome from "../cards/CardHome"
import { menuOptions } from '../../store/products' // needs to be checked

class Categorias extends Component {
    render() {
        return (
            <div className="py-10 bg-white">
                <h3 className="pb-8 font-semibold text-center text-orange lg:text-xl">CATEGORIAS</h3>
                <div className="flex w-4/5 grid-cols-1 gap-3 mx-auto overflow-x-auto md:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-5">
                    {menuOptions.map((option, id) => (
                        <CardHome key={id} text={option.text} src={option.url} />
                    ))}
                </div>
                
            </div>
        )
    }
}

export default Categorias

