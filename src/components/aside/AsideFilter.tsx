import {Component} from "react"

import AsideItems from "./AsideItems"

export interface IAsideFilterProps {
    className: string;
    toggleAsideFilter?: () => void
}

class AsideFilter extends Component<IAsideFilterProps> {
    render() {
        return (
            <aside className={`${this.props.className}`}>
                <div onClick={this.props.toggleAsideFilter} className="absolute flex-shrink-0 cursor-pointer top-24 right-4 text-orange lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <AsideItems>Estado</AsideItems>
                <AsideItems>Marca</AsideItems>
                <AsideItems>Modelo</AsideItems>
                <AsideItems>Condição</AsideItems>
                <AsideItems>Ano</AsideItems>
                <AsideItems>Preço</AsideItems>
                <AsideItems>Frete</AsideItems>
                <AsideItems>Operação</AsideItems>  
            </aside>
        )
    }
}

export default AsideFilter

