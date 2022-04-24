import styled from "styled-components";

export const CardChat = () => {
    return (
        <Card>
            <img alt="foto Empilhadeira" src="https://media.istockphoto.com/photos/forklift-truck-on-white-isolated-background-picture-id517818547?s=612x612"/>
            <div className='w-full'>
                <h3>Empilhadeira Yale 70Vx 2014</h3>
                <div className='flex justify-between'>
                    <p>Rodrigo Liberti</p>
                    <p>11/01/2022</p>
                </div>
            </div>
        </Card>
    )
}

const Card = styled.div`
    border: 1px solid #9E9E9E;
    border-radius: 5px;
    display: flex;
    padding: 10px;
    gap: 10px;
    height: 70px;
    margin-bottom: 7px;

    img {
        width: 50px;
        height: 50px;
        object-fit: cover;
    }

    h3 {
        font-weight: bold;
        font-size: 16px;
        line-height: 1.8;
    }

    p {
        font-size: 14px;
    }
`;

