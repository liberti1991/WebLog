import { Link } from "react-router-dom";
import styled from "styled-components";

export const Login = ({teste, onClose = () => {} }) =>{
  const close = () => {
  }

  return (
    <form>
      <fieldset>
        <h1 className="mb-4 text-2xl text-center font-bold text-orange">Logar no Sistema</h1>
          <label id="email">Email:</label>
          <input className="input-cadastro my-3" for="email" type="email" placeholder="cliente@gmail.com"/>
          <label id="password">Senha:</label>
          <input className="input-cadastro my-3" for="password" type="password" placeholder="*******" />
          <button type="submit" className="w-full items-center my-2 text-white btn bg-orange" onClick={close}><Link to='/painel/dashBord'>Entrar</Link></button>
          <Button type="submit" onClick={teste}>Esqueci minha senha</Button>
      </fieldset>
    </form>
  )
}       

const Button = styled.button`
  font-size: 0.8rem;
  width: 100%;
  text-align: end;
`;