import {Component} from "react"

class CardProduto extends Component<any> {
    render() {
        return (
            <div className="p-3 bg-white rounded shadow lg:w-40">
                <div>
                    <img alt="logo" src={this.props.url}/>
                </div>
                <div className="mt-6">
                    <p className="mb-2 text-lg tracking-wide text-gray-600 text-bold">
                    {this.props.produto}
                    </p>
                    <p className="text-sm font-hairline text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <div className="mt-6">
                    <button className="flex items-center px-4 py-2 text-white rounded shadow-md bg-orange hover:bg-web-orange">
                        Consultar
                    </button>
                </div>
            </div>
        )
    }
}

export default CardProduto

