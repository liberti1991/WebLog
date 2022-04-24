import { Route, Switch } from 'react-router-dom'

import { DashBord } from "../components/dashBord/DashBord";
import { Store } from '../components/dashBord/Store';
import { Settings } from '../components/dashBord/Settings';
import { Favorites } from '../components/dashBord/Favorites';
import { Wallet } from '../components/dashBord/Wallet';
import { Chat } from '../components/dashBord/Chat';
import { Adverts } from '../components/dashBord/Adverts';

export const RoutesPainelADM = () => {
    return(
        <Switch>
            <Route path="/painel/dashBord" exact render = {() => <DashBord />} />
            <Route path='/painel/lojas' component={Store}/>
            <Route path="/painel/meus-anuncios" component={Adverts}/>
            <Route path="/painel/chat" component={Chat}/>
            <Route path="/painel/carteira" component={Wallet}/>
            <Route path="/painel/favoritos" component={Favorites}/>
            <Route path="/painel/configuracoes" component={Settings}/>
        </Switch> 
    )
}