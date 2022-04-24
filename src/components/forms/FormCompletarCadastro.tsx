import { Component } from "react"

import {Link} from "react-router-dom"

import {AiOutlineEyeInvisible} from "react-icons/ai"

class FormCompletarCadastro extends Component {
    render() {
        return (
            <form onSubmit={() => {}}>

                <div className="grid grid-cols-1 py-2 lg:grid gap-y-2 lg:grid-cols-2 lg:gap-x-16">
                    <input className="input-cadastro" type="text" placeholder="Nome Completo"/>
                    <div className="relative">
                        <AiOutlineEyeInvisible className="absolute transform -translate-y-1/2 right-3 top-1/2" />
                        <input className="input-cadastro" type="password" placeholder="Senha"/>
                    </div>
                    <input className="input-cadastro" type="email" placeholder="E-mail"/>
                    <input className="input-cadastro" type="password" placeholder="Confirmar Senha"/>
                    <input className="input-cadastro" type="text" placeholder="CPF / CNPJ"/>
                    <input className="input-cadastro" type="text" placeholder="Profissão"/>
                    <input className="input-cadastro" type="date" placeholder="Data de nascimento"/>
                    <div>
                        <span className="block text-sm">Sexo</span>
                        <div className="flex gap-2 mb-3">
                            <div className="flex items-center">
                                <input id="masculino" className="rounded-lg" type="checkbox"/>
                                <label htmlFor="masculino" className="ml-0.5">Masculino</label>
                            </div>
                            <div className="flex items-center">
                                <input id="feminino" className="rounded-lg" type="checkbox"/>
                                <label htmlFor="feminino" className="ml-0.5">Feminino</label>
                            </div>
                        </div>
                    </div>
                    <input className="input-cadastro" type="text" placeholder="Endereço"/>
                    <input className="input-cadastro" type="text" placeholder="Cidade / Estado"/>
                    <div className="flex items-center gap-2 mt-1 text-sm">
                        <input id="terms-and-privacy" className="text-sm md:block" type="checkbox"/>
                        <label htmlFor="terms-and-privacy">Eu aceito os <a className="flex-1 font-bold text-blue-800" href="/">Termos e Condições</a></label>
                    </div>
                </div>

                <Link to="/serviços" type="submit" className="inline-flex items-center justify-center my-1 text-white truncate btn bg-orange">Crie seu cadastro</Link>
            </form>
        )
    }
}

export default FormCompletarCadastro

