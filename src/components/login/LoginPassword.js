import { useState } from "react"

export const LoginPassword = () =>{
  const [ message, setMessage ] = useState(false)
  return (
    <form>
      <h1 className="mb-4 text-2xl text-center font-bold text-orange">Esqueci minha senha</h1>
      <label id="email">Email:</label>
      <input className="input-cadastro my-3" for="email" type="email" placeholder="Digite seu e-mail cadastrado" required/>
      <button type="submit" className="items-center my-1 text-white btn bg-orange">Enviar</button>
      {message && <p>Mensagem enviada com sucesso!</p>}
    </form>
  )
}       