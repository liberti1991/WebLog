import { Component } from 'react'

import CardProduto from "./CardProduto"

const produtos = ["Reparo", "Peças", "Acessórios", "Serviços", "Produtos", "Outros", "Reparo", "Outros"]

export interface ICardProdutos {
    url: string
}

class CardProdutos extends Component<ICardProdutos> {
    render() {
        return (
            <div className="hidden w-5/6 grid-cols-2 mx-auto place-items-center gap-y-3 gap-x-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:grid">
                {produtos.map((produto, id) => <CardProduto key={id} url={this.props.url} produto={produto} />)}
                
                
            </div>
        )
    }
}

export default CardProdutos

