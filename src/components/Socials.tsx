import { Component } from "react"

import { Facebook, Instagram, Twitter } from "../assets/svgs/svgs"

export interface ISocialsProps {
    align?: string
}

class Socials extends Component<ISocialsProps> {
    render() {
        return (
            <div className={`${this.props.align ? this.props.align : ""}flex items-center`}>
                <div className="cursor-pointer"><Facebook/></div>
                <div className="mx-2 cursor-pointer"><Instagram/></div>
                <div className="cursor-pointer"><Twitter/></div>
            </div>
        )
    }
}

export default Socials

