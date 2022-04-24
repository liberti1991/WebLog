import { Component } from 'react'

import FormCompletarCadastro from "../components/forms/FormCompletarCadastro"
// import Footer from "../components/Footer"

class CompletarCadastro extends Component {
    render() {
        return (
            <>
                <main className="grid w-full mt-20 pt-4 place-items-center">
                    <div className="fixed inset-y-0 w-full bg-grey -z-10"></div>
                    <section className="w-5/6 px-6 py-4 m-auto my-4 bg-white md:px-14 md:w-4/5 rounded-3xl">
                        <h1 className="mb-1 text-2xl font-bold text-orange">Completar cadastro</h1>
                        <p>Por favor, complete o restante do seu cadastro.</p>
                        <FormCompletarCadastro />  
                    </section>
                </main>
                {/* <Footer/> */}
            </>
        )
    }
}

export default CompletarCadastro

