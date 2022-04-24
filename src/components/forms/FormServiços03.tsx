import {Component} from "react"

class FormServiços03 extends Component {
    render() {
        return (
            <form onSubmit={() => {}}>
                <fieldset className="my-6 font-bold text-orange">Contatar o vendedor</fieldset>
                <input className="w-full mb-3 border-black input-cadastro" type="text" placeholder="Nome Completo"/>
                <input className="w-full mb-3 border-black input-cadastro" type="email" placeholder="E-mail"/>
                <input className="w-full mb-5 border-black input-cadastro" type="text" placeholder="Telefone"/>
                <textarea onChange={() => {}} rows={6} className="w-full border-black resize-none input-cadastro" defaultValue="Oi, estou interessado e gostaria de receber mais informações sobre este produto. Obrigado."/>
                <button type="submit" className="block mx-auto mt-4 text-white btn bg-button-green">Consultar</button>
            </form>
        )
    }
}

export default FormServiços03

