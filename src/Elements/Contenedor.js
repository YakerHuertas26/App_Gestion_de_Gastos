import styled from "styled-components";

const Contenedor = styled.div`
    border: solid 2px red;
    background: #fff;
    width: 90%;
    max-width: 60rem;
    height: 90vh;
    max-height: 50rem;
    overflow-y: auto;
    box-shadow: 0px 1.25rem 2.5rem rgba(0,0,0,.1);
    border-radius: 10px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    z-index: 100;

    @media (max-width:60rem){ //950px
        height: 90vh;
        max-width: none;
    }
`

export default Contenedor;