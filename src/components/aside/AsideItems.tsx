import {Component} from "react"

import {BsPlus} from "react-icons/bs"

const estados = ["São Paulo (23)", "Minas Gerais (20)", "Paraná (15)", "Pará (5)"]

export interface IAsideItemsProps {
    children: string
}

export interface IAsideItemsState {
    isOpen: boolean
}

class AsideItems extends Component<IAsideItemsProps, IAsideItemsState> {
    state = {
        isOpen: false
    }

    toggleMenuFilter = () => {
        this.setState((prev: IAsideItemsState) => ({isOpen: !prev.isOpen}))
    }

    render() {
        return (
            <>
                <div onClick={this.toggleMenuFilter} className="relative grid w-full py-1 mx-auto my-1 text-sm text-white cursor-pointer bg-orange place-items-center">
                    
                    <div className="flex items-center justify-end w-24 gap-2">
                        <h3 className="">{this.props.children}</h3>
                        <BsPlus />
                    </div>
                    
                </div>
                {this.props.children === "Estado" && (
                    <div className={`${this.state.isOpen ? "" : "hidden "}bg-white text-black w-full py-1 text-center`}>
                        
                        <>
                            {estados.map((estado, id) => (
                                
                                <div key={id} className="">
                                    <div className="flex items-center justify-between w-3/5 mx-auto">
                                        <span className="text-xs">{estado} </span>
                                        <input type="checkbox"/>
                                    </div>
                                    
                                </div>
                            ))}
                                
                                
                        </>
                        <span className="inline-block mt-2 text-xs italic text-web-orange sm:text-md">Mostrar mais</span>
                    </div>
                )}
            </>
        )
    }
}

export default AsideItems

