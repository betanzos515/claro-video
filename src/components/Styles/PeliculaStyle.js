import styled from "@emotion/styled";

export const PeliculaStyle = styled.div`
    flex-basis: calc(25% - 1rem);
    height: 18rem;
    margin-top: 2rem;
    position: relative;
    margin-right: 1rem;
    
    img{
        width: 100%;
        height: 100%;
    }

    .capa-play{
        position: absolute;
        width: 100%;
        height: 100%;
        top:0;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: .5s ease;
        background: black;
    }
    .capa-play i{
        font-size: 6rem;
        color: white;
    }

    .capa-play:hover{
        opacity:.6;
        cursor:pointer;
        transform: scale(1.1);œ
    }

    @media screen and (max-width:768px){
        flex-basis: calc(33.3% - 1rem);        
    }
    
    @media screen and (max-width:420px){
        flex-basis: calc(50% - 1rem );
    }

`;