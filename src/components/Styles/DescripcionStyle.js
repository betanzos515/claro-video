import styled from "@emotion/styled";

export const DescripcionStyle = styled.div` 
    width: 100%;
    height: 90vh; 
    background: black;
    color:white;
    padding: 3rem;
    display:flex;
    font-size:1.8rem;
    img{
        width: 35%;
        height: 300px;
    }
    .info{
        margin-left: 1rem;
        padding: 2rem;
        height:300px;
        h2{
            color:#F39C12;
            font-size: 3.5rem;
            margin-bottom: 2rem;
        }
        .titulo-original{
            margin-bottom: 2.5rem;
        }
        .descripcion{
            width: 70%
        }
        .generos{
            display:flex;
            margin-top: 3rem;
        }
        .lista-generos{
            display:flex;
            width: auto;
            justify-content: space-between;

            & > *{
                margin-left: 1rem;
            }
        }
    }
`;

