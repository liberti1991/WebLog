import { Component } from "react"

import {Link} from "react-router-dom"

import {AiOutlineEyeInvisible} from "react-icons/ai"

class FormPreCadastro extends Component {
    render() {
        return (
            <form onSubmit={() => {}} className="grid grid-cols-1 gap-y-2" >
                <input className="input-cadastro" type="text" placeholder="Nome Completo"/>
                <input className="input-cadastro" type="email" placeholder="E-mail"/>
                <div className="relative">
                    <AiOutlineEyeInvisible className="absolute transform -translate-y-1/2 right-3 top-1/2" />
                    <input className="input-cadastro" type="password" placeholder="Senha"/>
                </div>
                <input className="input-cadastro" type="password" placeholder="Confirmar Senha"/>
                <Link style={{outline: "none"}} to="/completar-cadastro"><button type="submit" className="inline-flex items-center justify-center my-2 text-white outline-none btn bg-orange">Criar conta</button></Link>
                
            </form>
        )
    }
}
// required
export default FormPreCadastro

