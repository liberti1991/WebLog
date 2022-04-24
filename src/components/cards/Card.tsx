import { Component } from 'react'

import {Link} from "react-router-dom"

import { LocationIcon, MoneySign, Favorite } from "../../assets/svgs/svgs"
import { Iproducts } from '../../store/products'

export interface ICardProps {
    product: Iproducts
}

class Card extends Component<ICardProps> {
    render() {
        const { name, city, price, image, id } = this.props.product

        return (
            <article className="relative grid w-4/5 grid-cols-1 gap-1 p-3 mx-auto my-4 bg-white rounded-md shadow-sm md:grid-cols-3 md:gap-3 lg:gap-4">
                <div className="grid place-items-center"><img width="200px" height="200px" className="h-auto max-w-full mx-auto" alt={name} src={image} /></div>

                <div className="grid my-1 place-items-center md:place-items-start md:place-content-start">
                    <h3 className="text-sm font-bold sm:text-base">{name}</h3>
                    <div className="flex items-center justify-center gap-1 my-1 md:justify-start">
                        <LocationIcon />
                        <span className="text-sm">{city}</span>
                    </div>
                    <span className="inline-block text-sm md:mr-auto bg-grey py-0.5 px-4 mt-1 md:mt-8">Novo</span>
                </div>

                <div className="grid my-1 place-items-center md:place-content-start md:ml-4 lg:ml-8">
                    <span className="block font-bold text-center text-orange">R$ {price}</span>
                    <Link className="inline-block px-6 my-1 border rounded-lg text-orange border-orange" to={`/serviços-03/${id}`}>Consultar</Link>
                </div>

                <div className="flex absolute top-3 gap-2 right-3"><Favorite /><MoneySign /></div>
            </article>
        )
    }
}

export default Card

