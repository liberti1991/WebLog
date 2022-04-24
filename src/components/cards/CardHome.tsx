import { Component } from "react"

class CardHome extends Component<any> {
    render() {
        return (
            <a href="/" title="" className="flex-grow-0 flex-shrink-0 w-full md:w-full">
                <div className="relative shadow-xl rounded-2xl">
                    <div className="absolute inset-0 bg-gray-900 bg-opacity-50 rounded-2xl"></div>
                
                    <div className="">
                        <div className="">
                            <img alt="product" className="object-cover w-full h-auto rounded-2xl" loading="lazy" src={this.props.src} />
                        </div>
                        <div className="absolute transform translate-x-1/2 right-1/2 bottom-2">
                            <h2 className="text-center text-white">{this.props.text}</h2>
                        </div>
                    </div>
                </div>
            </a>
            
        )
    }
}

export default CardHome

