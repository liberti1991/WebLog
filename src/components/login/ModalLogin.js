import { useState } from "react";
import styled from "styled-components";

import { Login } from "./login";
import { LoginPassword } from "./LoginPassword";

export const ModalLogin = ({ id = "modal", onClose = () => {} }) => {
  const handleOutsideClick = (evento) => {
    if (evento.target.id === id) onClose();
  };

  const [handlerLogin, setHandlerLogin] = useState(true);

  const teste = (e) => {
    e.preventDefault();
    setHandlerLogin(!handlerLogin);
  };

  return (
    <DivModal id={id} onClick={handleOutsideClick}>
      <Div>{handlerLogin ? <Login teste={teste} /> : <LoginPassword />}</Div>
    </DivModal>
  );
};

const DivModal = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Div = styled.div`
  border: 1px solid grey;
  background: white;
  border-radius: 10px;
  width: 90%;
  padding: 30px;
  margin: auto;

  @media screen and (min-width: 648px) {
    width: 450px;
    margin-top: 100px;
  }
`;
