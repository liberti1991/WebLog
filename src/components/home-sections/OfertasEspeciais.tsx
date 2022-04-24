import { Component } from 'react'

import {Link} from "react-router-dom"

import { LocationIcon, MoneySign } from "../../assets/svgs/svgs"
import { products } from '../../store/products'

class OfertasEspeciais extends Component {
    render() {
        return (
            <div className="py-10 bg-grey">
                <div className="w-5/6 mx-auto">
                    <h3 className="pb-8 font-semibold text-center text-orange lg:text-xl">OFERTAS ESPECIAIS</h3>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-5">
                        {products.map((p, id) => {
                            return (
                                <div key={id} className="relative p-4 my-4 bg-white rounded-2xl" >
                                
                                    <div className="grid place-items-center">
                                        <img width="200px" height="200px" className="h-auto max-w-full mx-auto" alt={p.name} src={p.image} />
                                    </div>
                        
                                    <div className="grid my-1 place-items-center">
                                        <h3 className="text-xs font-bold overflow-ellipsis">{p.name}</h3>
                                        <div className="flex items-center justify-center gap-1 my-1">
                                            <LocationIcon />
                                            <span className="text-sm">{p.city}</span>
                                        </div>
                                        <span className="inline-block text-sm bg-grey py-0.5 px-4 mt-1">Novo</span>
                                    </div>
                        
                                    <div className="grid my-1 place-items-center">
                                        <span className="block font-bold text-center text-orange">R$ {p.price}</span>
                                        <Link className="inline-block px-6 my-1 border rounded-lg text-orange border-orange" to={`/serviços-03/${p.id}`}>Consultar</Link>
                                    </div>
                        
                                    <div className="absolute top-3 right-3"><MoneySign /></div>
                                    
                                </div>
                            )                
                        })}
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default OfertasEspeciais

