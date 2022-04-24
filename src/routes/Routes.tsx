import {Component, Fragment} from 'react'

import { Redirect, Route, Switch } from 'react-router-dom'

import {Navbar} from "../components/Navbar"
import HomePreCadastro from "../screens/HomePreCadastro"
import CompletarCadastro from "../screens/CompletarCadastro"
import Serviços from "../screens/Serviços"
import Serviços03 from "../screens/Serviços03"
import LojasParceiras from "../screens/LojasParceiras"
import InnerLojas from "../screens/InnerLojas"
import { PainelADM } from "../screens/PainelADM.js"

class Routes extends Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={HomePreCadastro}/>
                    <Route path="/completar-cadastro" component={CompletarCadastro}/>
                    <Route path="/serviços" component={Serviços}/>
                    <Route path="/serviços-03/:id" component={Serviços03}/>
                    <Route path="/lojas-parceiras" component={LojasParceiras} />
                    <Route path="/inner-lojas/:id" component={InnerLojas} />
                    <Route path="/painel" component={PainelADM} />
                    <Route path="*" render={() => <Redirect to="/" />}/>
                </Switch>
            </Fragment>
        )
    }
}

export default Routes

