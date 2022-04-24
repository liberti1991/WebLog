import {Component} from "react"

import {AppContext, IAppContext} from "./AppContext"
import {products, Iparceiros, Iproducts, ImenuOptions} from "./products" // data from the server
import {parceiros} from "./products" // data from the server
import {menuOptions} from "./products" // data from the server

export interface IAppContextProviderState {
    products: Iproducts[],
    parceiros: Iparceiros[],
    menuOptions: Array<ImenuOptions>
}

class AppContextProvider extends Component<{}, IAppContextProviderState> {
    state = {
        products: [],
        parceiros: [],
        menuOptions: []
    }

    componentDidMount() {
        this.setState({products, parceiros, menuOptions})
    }

    render() {
        const ctx: IAppContext = {
            products: this.state.products,
            parceiros: this.state.parceiros,
            menuOptions: this.state.menuOptions,
        }

        return (
            <AppContext.Provider value={ctx}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default AppContextProvider

