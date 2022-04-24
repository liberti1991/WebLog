import {Component} from "react"

export interface IAsideOptionsLojasParceirasProps {
    text: string
}

class AsideOptionsLojasParceiras extends Component<IAsideOptionsLojasParceirasProps> {
    render() {
        return (
            <div className="mb-3 cursor-pointer items-center justify-between hidden gap-2 py-0.5 px-1 border border-l-0 border-r-0 border-black md:flex bg-grey">
                <p className="text-xs text-gray-900">{this.props.text}</p>
                <span className="">
                    <svg width="13" height="9" viewBox="0 0 13 9" xmlns="http://www.w3.org/2000/svg" className="StyledIcon-sc-1ch6fwv-0 climpy withCssProps__StyledComponent-rco7dm-0 kUpvkZ">
                        <path d="M13 2.00885L11.4833 0.492188L6.5 5.47552L1.51667 0.492188L0 2.00885L6.5 8.50885L13 2.00885Z" fill="black"></path>
                    </svg>
                </span>
            </div>
        )
    }
}

export default AsideOptionsLojasParceiras

