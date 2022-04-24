import {Component} from "react"

import AsideOptionsLojasParceiras from "./AsideOptionsLojasParceiras"
import {menuOptions} from "../../store/products" // needs to be checked

class AsideLojasParceiras extends Component {
    render() {
        return (
            <aside className="px-5 bg-white md:col-span-1">
                <h3 className="hidden my-3 mb-1 text-sm italic md:block">Weblog</h3>

                <div className="mt-5">
                    {menuOptions.map(option => (
                        <AsideOptionsLojasParceiras key={option.id} text={option.text} />
                    ))}
                    

                </div>
        
            </aside>
        )
    }
}

export default AsideLojasParceiras

