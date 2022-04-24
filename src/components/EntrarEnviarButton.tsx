import {Component} from "react"

export interface IEntrarEnviarButtonProps {
    className: string;
    bg?: string;
    children: string;
    color?: string
}

class EntrarEnviarButton extends Component<IEntrarEnviarButtonProps> {
    render() {
        return (
            <div className={`${this.props.className} inline-block`}>
                <button className={`btn ${this.props.bg} text-white h-9`}>
                    {this.props.children}
                </button>
                
            </div>
        )
    }
}

export default EntrarEnviarButton

