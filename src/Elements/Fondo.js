import styled from "styled-components";
// import {ReactComponent as Img} from './../img/img.png';
import { ReactComponent as Puntos } from "../img/grid.svg";

const PuntoTop = styled(Puntos)`
  position: fixed;
  z-index: 1;
  top: 2.5rem;
  left: 2.5rem;
`;

const PuntoBotton = styled(Puntos)`
  position: fixed;
  z-index: 1;
  bottom: 2.5rem;
  right: 2.5rem;
`;
const Svg = styled.svg`
    height: 50vh;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 0;
    path {
        fill: rgba(135,182,194,.5);
    }
`;

const Fondo = () => {
  return (
    <>
        <PuntoTop />
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
            // fill="#0099ff"
            fillOpacity="1"
            d="M0,96L48,90.7C96,85,192,75,288,112C384,149,480,235,576,240C672,245,768,171,864,149.3C960,128,1056,160,1152,181.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        >   </path>
        </Svg>
        <PuntoBotton />
    </>
  );
};

export default Fondo;
