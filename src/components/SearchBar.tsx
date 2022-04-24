import { Component } from "react"

import { SearchIcon } from "../assets/svgs/svgs"

class SearchBar extends Component {
    render() {
        return (
            <div className="hidden md:block relative ml-16 mr-5">
                <input type="text" className="rounded-lg h-9 pl-5 outline-none w-48" placeholder="Buscar..." />
                <div className="cursor-pointer bg-web-orange w-10 h-9 text-white rounded-l-lg absolute top-0 -left-6 grid place-items-center">
                    <SearchIcon />
                </div>
            </div>
        )
    } 
}

export default SearchBar

