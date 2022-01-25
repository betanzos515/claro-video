import styled from "@emotion/styled";

export const BusquedaStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-basis : calc(100%);
    width:100%;
    height: 5rem;
    label{
        font-size: 2.5 rem;
        margin-right: 1rem;
    }

    input{
        flex-basis: 25%;
        height: 70%;
        border-radius: 15px;
        padding: 1.5rem;
        font-size: 2rem;
        font-family: Roboto;
        background: black;
        border: 1px solid white;
        color: white;
    }

    @media screen and (max-width:768px){
        input{
            flex-basis:30%;
        }     
        label{
            margin-right:1rem;
        }
    }

    @media screen and (max-width:400px){
        input{
            flex-basis:10%;
        }     
        label{
            display: none;
        }
    }
`;



