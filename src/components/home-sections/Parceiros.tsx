import { Component } from 'react'

class Parceiros extends Component {
    render() {
        return (
            <div className="py-10 bg-white">
                <h3 className="pb-8 font-semibold text-center text-orange lg:text-xl">LOJAS</h3>
                <div className="flex items-center justify-center w-4/5 gap-3 mx-auto bg-white md:gap-5">
                    <a title="" target="_blank" href="/" className="grid w-2/4 h-auto border-2 rounded-lg shadow-lg border-orange place-items-center">
                        <img className="rounded-2xl" loading="lazy" src="https://brasil.agrofystatic.com/media/catalog/agroshop/Logomarca_Comercial_2.jpg" alt="brand"/>
                        <span className="py-1 text-xs font-semibold text-orange">Clique aqui</span>
                    </a>
                    <a title="" target="_blank" href="/" className="grid w-2/4 border-2 rounded-lg shadow-lg border-orange place-items-center">
                        <img className="rounded-2xl" loading="lazy" src="https://brasil.agrofystatic.com/media/catalog/agroshop/nissan-agrofy-logo.jpg" alt="brand"/>
                        <span className="py-1 text-xs font-semibold text-orange">Clique aqui</span>
                    </a>
                    <a title="" target="_blank" href="/" className="hidden w-2/4 border-2 rounded-lg shadow-lg sm:grid border-orange place-items-center">
                        <img className="rounded-2xl" loading="lazy" src="https://brasil.agrofystatic.com/media/catalog/agroshop/Logomarca_Comercial_2.jpg" alt="brand"/>
                        <span className="py-1 text-xs font-semibold text-orange">Clique aqui</span>
                    </a>
                    <a title="" target="_blank" href="/" className="hidden w-2/4 border-2 rounded-lg shadow-lg md:grid border-orange place-items-center">
                        <img className="rounded-2xl" loading="lazy" src="https://brasil.agrofystatic.com/media/catalog/agroshop/nissan-agrofy-logo.jpg" alt="brand"/>
                        <span className="py-1 text-xs font-semibold text-orange">Clique aqui</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Parceiros

