import {Component} from "react"

import Socials from "../Socials"
import FormPreCadastro from "../forms/FormPreCadastro"

class HeroSection extends Component {
    render() {
        return (
            <div className="relative w-full bg-center bg-cover lg:min-h-screen bg-pre-cadastro-bg-2">
                <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
                <main className="grid w-4/5 h-full grid-cols-1 gap-12 mx-auto mt-20 py-11 place-items-center sm:grid-cols-2 sm:gap-16">

                    {/* left side */}
                    <section className="text-white z-4">
                        <h1 className="text-2xl font-bold">Conheça todos os serviços <span className="text-web-orange">exclusivos</span> que oferecemos!</h1>
                        <ul>
                            <li className="list-item">Ambiente focado e especializado nos equipamentos ou máquinas que você quer vender ou Alugar. </li>
                            <li className="list-item">Equipe comercial para ajudar você a vender ou alugar sua máquina ou equipamento! </li>
                            <li className="list-item">Nossa equipe irá procurar a melhor opção e o melhor preço para sua necessidade! </li>
                            <li className="list-item">Forneceremos média de preço exclusivo e te sinalizar se o ativo que pretende comprar esta caro ou barato.  </li>
                        </ul>
                        <button className="mt-2 bg-white btn text-orange">Saiba mais!</button>
                    </section>

                    {/* right side */}
                    <section className="px-10 py-4 text-center bg-white z-4 rounded-3xl">
                        
                        <div className="min-w-max">
                            <h1 className="mb-1 text-2xl font-bold">Cadastre-se</h1>
                            <p className="mb-2">Preencha o formulário abaixo</p>
                            <FormPreCadastro />
                            <a className="inline-block mb-3 text-sm outline-none" href="/">Já possui cadastro?</a>
                            <Socials align="justify-center " />
                        </div>
                    </section>

                </main>
            </div>
        )
    }
}

export default HeroSection

