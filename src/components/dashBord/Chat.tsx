import styled from 'styled-components';
import { CardChat } from './CardChat';

export const Chat = () => {
    return (
        <div>
            <h1 className="my-3 italic text-center text-gray-500">Chat</h1>
            <ChatContainer>
                <section>
                    <CardChat />                    
                    <CardChat />                    
                    <CardChat />                    
                    <CardChat />                    
                    <CardChat />                    
                </section>
                <DivChat>
                    <h1>Tem Pronto!</h1>
                </DivChat>
            </ChatContainer>
        </div>
    );
}

const ChatContainer = styled.div`
    padding: 10px;
    gap: 10px;
    
    section {
        overflow-y: auto;
        height: 20vh;
        grid-column: 1;
    }
    
    @media screen and (min-width: 648px) {
        display: grid;
        grid-auto-flow: column;
        grid-template-columns: 2fr 4fr;
        grid-auto-flow: initial ;
        height: 350px;
        
        section {
            overflow-y: auto;
            height: 350px;
        }
    } 
`;

const DivChat = styled.div`
    grid-column: 2;
    border-radius: 5px;
    background: silver;
    height: 60vh;

    @media screen and (min-width: 648px) {
        height: 350px;
    }
`;
