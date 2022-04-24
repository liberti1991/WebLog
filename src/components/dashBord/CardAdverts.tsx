import styled from "styled-components";
import { LocationIcon } from "../../assets/svgs/svgs";

export const CartAdverts = () => {
    return (
        <CardAdverts>
            <img src="https://media.istockphoto.com/photos/forklift-truck-on-white-isolated-background-picture-id517818547?s=612x612" />
            <div>
                <h2>Empilhadeira Yale 70Vx 2014</h2>
                <div className="flex items-center justify-center gap-1 my-1">
                    <LocationIcon /> 
                    <span>Curitiba</span>
                <span className="block font-bold text-center text-orange">R$ 90,000</span>
                </div>
                <div className="flex m-2 justify-center">
                    <button className="px-6 mx-1 border rounded-lg text-orange border-orange">Editar</button>
                    <button className="px-6 border rounded-lg text-orange border-orange">Excluir</button>
                </div>                        
            </div>
        </CardAdverts>
    )
}

const CardAdverts = styled.div`
    background: white;
    display: flex;
    justify-content: space-around;
    padding: 10px;   
    gap: 10px;
    border: 1px solid #9E9E9E;
    border-radius: 5px;
    grid-template-columns: 1;
    margin-bottom: 10px;
 
    img {
        width: 100px;
        height: 100px;
        object-fit: cover;
    }

    h2 {
        font-weight: bold;
        font-size: 16px;
        line-height: 2;
    }
`;