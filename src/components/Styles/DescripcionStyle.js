import styled from "@emotion/styled";

export const DescripcionStyle = styled.div` 
    min-width: 100%;
    min-height: 90vh; 
    background: black;
    color:white;
    padding: 3rem;
    display:flex;
    flex-wrap: wrap;
    font-size:1.8rem;
    .imagen-descripcion{
        flex-basis:calc(60% - 1rem);
    }
    img{
        width:100%;
    }
    .info{
        flex-basis: 40%;
        margin-left: 1rem;
        padding: 2rem;
        min-height:300px;
        h2{
            color:#F39C12;
            font-size: 3.5rem;
            margin-bottom: 2rem;
        }
        .titulo-original{
            margin-bottom: 2.5rem;
        }
        .descripcion{
            width: 100%;
        }
        .generos{
            margin-top: 3rem;
            display:flex;
            flex-wrap:wrap;
        }
        .lista-generos{ 
            display: flex;
            justify-content: space-around;
            & > *{
                margin-left: 2rem;
            }
        }
    }

    @media screen and (min-width:1024px){
        .imagen-descripcion{
            flex-basis:calc(40%);
        }
        .info{
            flex-basis:calc(50%-1rem);
        }
    }

    @media screen and (max-width:768px){
        .imagen-descripcion{
            flex-basis: 100%;
        }
        .info{
            flex-basis: 100%;
        }  
        .generos{
            flex-basis: 100%;
            margin-top: 3rem;
            display:flex;
        }
        .lista-generos{ 
            flex-basis:100%
            display: flex;
            flex-wrap:wrap;
            justify-content: space-around;
            & > *{
                margin-left: 2rem;
            }
        }      
    }
    
    @media screen and (max-width:420px){
        flex-basis: calc(50% - 1rem );
    }
`;

