import {Component, Fragment} from "react"

import { img1, img2, img3 } from "../store/products"

export interface ISliderProps {
    name: string;
    image: string;
}

class Slider extends Component<ISliderProps> {
    render() {
        return (
            <Fragment>
                <div className="grid place-items-center"><img className="h-auto max-w-full mx-auto" alt={this.props.name} src={this.props.image} /></div>

                <div className="w-full mt-4">
                    <div className="flex overflow-x-auto custom-scroll">
                        <div className="flex-none w-2/6 h-20"><img src={img1} alt="product" className="object-cover w-full h-full cursor-pointer" /></div>
                        <div className="flex-none w-2/6 h-20"><img src={img2} alt="product" className="object-cover w-full h-full cursor-pointer" /></div>
                        <div className="flex-none w-2/6 h-20"><img src={img3} alt="product" className="object-cover w-full h-full cursor-pointer" /></div>
                        <div className="flex-none w-2/6 h-20"><img src={img1} alt="product" className="object-cover w-full h-full cursor-pointer" /></div>
                        <div className="flex-none w-2/6 h-20"><img src={img2} alt="product" className="object-cover w-full h-full cursor-pointer" /></div>
                        <div className="flex-none w-2/6 h-20"><img src={img3} alt="product" className="object-cover w-full h-full cursor-pointer" /></div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Slider

