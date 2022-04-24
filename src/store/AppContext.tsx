import { createContext } from "react"
import {Iproducts, ImenuOptions, Iparceiros} from "./products"

export interface IAppContext {
    products: Array<Iproducts>;
    parceiros: Array<Iparceiros>;
    menuOptions: Array<ImenuOptions>
}

export const AppContext = createContext<IAppContext>({
    products: [],
    parceiros: [],
    menuOptions: []
})

