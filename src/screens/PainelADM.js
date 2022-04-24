import SidebarPainelADM from "../components/SidebarPainelADM";
import { RoutesPainelADM } from '../routes/RoutesPainelADM';
import styled from "styled-components";
import { useState } from "react";
import { HamburgerMenu } from "../assets/svgs/svgs";

export const PainelADM = ({id = "Sombra"}) => {
    
  //o set da direita altera o estado inicial da esquerda
  const [menuLateral, setMenuLateral] = useState(false);
  
  const sombra = (evento) => {
    if (evento.target.id === id) setMenuLateral(false);
  }

  return (
    <DivGrid>
      <DivSombra id={id} menuLateral={menuLateral} onClick={sombra}>
        <DivMenu menuLateral={menuLateral}>
          {/* Botão Fake para navegação ver com calma o css */}
          <Button onClick={() => {setMenuLateral(atualValor => !atualValor )}}><HamburgerMenu /></Button>
          <SidebarPainelADM  />
        </DivMenu>
      </DivSombra>
      <DivConteudo>
        <RoutesPainelADM />         
      </DivConteudo>
    </DivGrid>
  ) 
};

const DivGrid = styled.div`
  background: #EEEEEE;
  display: grid;
  grid-template-columns: 1fr;
  min-height:100vh;

  @media screen and (min-width: 648px) {
    grid-template-columns: 1fr 4fr;
    gap: 10px;
  }
`;

const DivSombra = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  margin-top: 80px;
  z-index: 90;
  background-color: rgba(0, 0, 0, 0.5);
  transition: .80s;

  left: ${props => props.menuLateral ? "0" : "-100vw" };
 
  @media screen and (min-width: 648px) {
    z-index:0;
    position: static;
    grid-template-columns: 1;
    width: 100%;
    background: white;
  }
`;


const DivMenu = styled.div`
  grid-row: 1;
  z-index: 100;
  width: 75vw;
  height: 100vh;
  background: white;
  
  position: absolute;
  transition: .80s;
  
  // condição prop.menuLateral ? true : false
  left: ${props => props.menuLateral ? "0" : "-100vw" };
  
  @media screen and (min-width: 648px) {
    z-index: 0;
    position: static;
    width: 100%;
    grid-template-columns: 1;
  }
`;

const Button = styled.button`
  position: fixed;
  color: white;
  right: 15px;
  top: 15px;
  z-index: 100;
  width: 50px;
  
  @media screen and (min-width: 648px) {
    display: none;
  }
`;

const DivConteudo = styled.div`
  margin-top: 80px;
  grid-row: 1;

  @media screen and (min-width: 648px) {
    grid-row: 1;
    grid-column: 2;
    padding-right: 10px;
  }
`;