import {Component} from "react"

import AsideLojasParceiras from "../components/aside/AsideLojasParceiras"
import CardsLojasParceiras from "../components/cards/CardsLojasParceiras"
import {AppContext, IAppContext} from "../store/AppContext"

class LojasParceiras extends Component {
    render() {
        return (
            <AppContext.Consumer>
                {({parceiros}: IAppContext) => {
                    return (
                        <main className="min-h-screen mt-20 grid-flow-row grid-cols-5 md:grid bg-grey">
                            <AsideLojasParceiras />
            
                            <section className="md:col-span-4">
                                
                                <div className="p-3 md:w-5/6 md:mx-auto">

                                    <div className="fixed inset-x-0 p-3 z-4 bg-grey top-20 md:hidden">
                                        <h3 className="mb-3 italic">Weblog</h3>
                                        <h1 className="">Lojas Online</h1>
                                        <div className="flex items-center justify-between my-3">
                                            <strong>1-12 de 100<br/> resultados</strong>
                                            <div className="flex items-center justify-center gap-3">
                                                <button className="px-3 py-2 text-white rounded-md bg-orange">Classificar</button>
                                                <button className="px-3 py-2 text-white rounded-md bg-orange">Filtrar</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h1 className="hidden italic md:block">Lojas Online</h1>
                                        <hr className="hidden mb-2 border-l border-black md:block"/>
                                        <div className="flex flex-col gap-2 pt-40 md:pt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:grid">  
                                            
                                            <>
                                                {parceiros.map((parceiro: any) => (
                                                    <CardsLojasParceiras key={parceiro.id} parceiro={parceiro} />
                                                ))}
                                            </>
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                            </section>
                        </main>
                    )
                }}
            </AppContext.Consumer>
        )
    }
}

export default LojasParceiras

