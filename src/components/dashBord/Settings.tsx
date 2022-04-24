import {Link} from "react-router-dom"

export const Settings = () => {
    return (
        <div>
            <h1 className="my-3 italic text-center text-gray-500">Configurações</h1>
            <div className="px-10">
                <h1 className="mb-1 text-2xl font-bold text-orange">Atualizar cadastro</h1>
                <div className="grid grid-cols-1 py-2 lg:grid gap-y-2 lg:grid-cols-2 lg:gap-x-4">
                    <input className="input-cadastro" type="text" placeholder="Nome Completo"/>
                    <div className="relative">
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
                        
                </div>
                <Link to="/serviços" type="submit" className="inline-flex items-center justify-center my-1 text-white truncate btn bg-orange">Salvar</Link>
            </div>
        </div>
    );
}