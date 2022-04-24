import styled from "styled-components";

export const ModalWalletAddCard = ({ id = "modal", onClose = () => {} }) => {
  const handleOutsideClick = (evento) => {
    if (evento.target.id === id) onClose();
  };

  return (
    <DivModal id={id} onClick={handleOutsideClick}>
      <Div>
        <form>
          <fieldset>
            <h1 className="mb-4 text-2xl text-center font-bold text-orange">
              Adicionar Cartão
            </h1>
            <label id="newCard">Número do cartão</label>
            <input
              className="input-cadastro"
              for="newCard"
              type="number"
              placeholder="1234 5678 1234 5678"
              required
            />
            <label id="name">Nome Impresso no Cartão</label>
            <input
              className="input-cadastro"
              for="name"
              type="text"
              placeholder="Digite o nome impresso no cartão"
              required
            />
            <div className="flex justify-end gap-3">
              <div>
                <label id="valid">Validade</label>
                <input
                  className="input-cadastro"
                  for="valid"
                  type="number"
                  placeholder="11/21"
                  required
                />
              </div>
              {/* <div>
                <label id="cod">Código de segurança</label>
                <input className="input-cadastro" for="cod" type="number" placeholder="321" required/>
              </div> */}
            </div>
            <label id="cpf">CPF/CNPJ do titular</label>
            <input
              className="input-cadastro"
              for="cpf"
              type="number"
              placeholder="000.111.222-33"
              required
            />
            <div className="flex justify-center my-2 mt-4 gap-3">
              <button
                type="submit"
                className="inline-flex items-center my-1 text-white btn bg-orange"
                onClick={onClose}
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="inline-flex items-center my-1 text-white btn bg-orange"
              >
                Salvar{" "}
              </button>
            </div>
          </fieldset>
        </form>
      </Div>
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
  padding: 20px 10px;
  margin: auto 10px;

  label {
    line-height: 2;
  }

  input {
    margin-bottom: 5px;
  }

  @media screen and (min-width: 648px) {
    width: 450px;
    padding: 50px 50px 30px 50px;
  }
`;
