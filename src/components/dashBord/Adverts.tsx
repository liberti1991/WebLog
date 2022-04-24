import styled from "styled-components";
import { CartAdverts } from "./CardAdverts";

export const Adverts = () => {
    return (
        <div>
            <h1 className="my-3 italic text-center text-gray-500">Meus Anúncios</h1>
            <DivAdverts>
                <CartAdverts />
                <CartAdverts />
                <CartAdverts />
                <CartAdverts />
                <CartAdverts />
                <CartAdverts />
                <CartAdverts />
                <CartAdverts />
                <CartAdverts />
            </DivAdverts>
        </div>
    );
}



const DivAdverts = styled.div`
    padding: 10px;

    @media screen and (min-width: 648px) {
        display: grid;
        grid-template-columns: auto auto;  
        column-gap: 10px;
    }
`;
