import styled from "styled-components";
import { CartFavorites } from "./CardFavorites";

export const Favorites = () => {
    return (
        <div>
            <h1 className="my-3 italic text-center text-gray-500">Meus Favoritos</h1>
            <DivAdverts>
                <CartFavorites />
                <CartFavorites />
                <CartFavorites />
                <CartFavorites />
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
