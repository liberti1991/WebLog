import { Component, Fragment } from 'react'

import HeroSection from "../components/home-sections/HeroSection"
import Categorias from "../components/home-sections/Categorias"
import OfertasEspeciais from "../components/home-sections/OfertasEspeciais"
import Parceiros from "../components/home-sections/Parceiros"
import Footer from "../components/Footer"

class PreCadastro extends Component {
    render() {
        return (
            <Fragment>
                <HeroSection/>

                <Categorias/>

                <OfertasEspeciais />

                <Parceiros />

                <Footer />
            </Fragment>
        )
    }
}

export default PreCadastro

