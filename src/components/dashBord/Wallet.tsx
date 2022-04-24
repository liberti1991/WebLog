import { ModalWalletAddCard } from './ModalWalletAddCard.js';
import { useState } from 'react';
import styled from 'styled-components';

export const Wallet = () =>{
    
  const [IsModalWalletAddCardVisible, setIsModalWalletAddCardVisible] = useState(false);

  const dataBase = [
    {
      id: "0",
      numberCard: '0000 1111 2222 3333',
      valid: '11/21',
      nome: 'Rodrigo Liberti'
    },
    {
      id: "1",
      numberCard: '1111 2222 3333 4444',
      valid: '12/22',
      nome: 'Marcus A&M Solutions'
    },
    {
      id: "2",
      numberCard: '2222 3333 4444 5555',
      valid: '12/22',
      nome: 'Fulano da silva'
    },

  ]
  return (
    <div>
      <h1 className="my-3 italic text-center text-gray-500">Carteira Virtual</h1>
      <DivWallet>
        <h1>Minha Carteira</h1>
        <h3>Saldo disponível</h3>
        <p>R$ 127,00</p>
      </DivWallet>
      <Section>
        <h1 className="my-3 italic text-center text-gray-500">Meus Cartões</h1>
        {dataBase.map((item) => {
          return (
            <article key={item.id}>
              <div>
                <h1>{item.nome}</h1>
                <button />
              </div>
              <p>{item.numberCard}</p>
              <h3>{item.valid}</h3>
            </article>
          )
        })}
      </Section>
      <DivFolter>
        <button className="inline-flex items-center my-1 text-white btn bg-orange" onClick={()=> setIsModalWalletAddCardVisible(true)}>Adicionar Cartão</button>
        {IsModalWalletAddCardVisible ? (<ModalWalletAddCard onClose={() => setIsModalWalletAddCardVisible(false)} />): null}
      </DivFolter>
    </div>
  )
}

const DivWallet = styled.div`
  background: #07070750;
  line-height: 1.5;
  padding: 15px 30px;
  margin-bottom: 10px;
  
  h1 {
    font-size:1.3rem;
    font-weight: 600;
  }

  h3 {
    font-weight: 300;
    font-style: italic;
  }

  p {
    font-weight: 500;
  }
`;

const Section = styled.section`
  margin: 10px ;

  article {
    margin: 10px 0;
    padding: 10px 10px 10px 30px;
    background: #74737334;
    
    div {
      display: flex; 
      justify-content: space-between;
      place-items: center;
    
      h1 {
        font-size: 1.2rem;
        font-weight: 600;
      }
      // criando um botão com css!!
      button {
        background-color: transparent;
        border: none;
        outline: none;
        width: 32px;
        height: 32px;
        padding: 0 15px;
        cursor: pointer;
        display: flex;
        position: relative;
        align-items: center;

        ::before, ::after {
          content: '';
          position: absolute;
          width: 2.5px;
          height: 24px;
          background-color: black;
        }

        ::after {
          transform: rotate(45deg);
        }

        ::before {
          transform: rotate(-45deg);
        }
      }
    }

    p {
      font-weight: 300;
      font-size: 1.1rem;
    }

    h3 {
      font-weight: 400;
    }
  }
  @media screen and (min-width: 648px) {
    margin: 15px 50px;
  }
`;

const DivFolter = styled.div`
  margin-right: 10px;
  display: flex;
  justify-content: space-around;
  
  @media screen and (min-width: 648px) {
    margin-right: 50px;
    justify-content: flex-end;
  }
`;