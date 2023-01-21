import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  background-color: #000;
`;

export const Photos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 10px;
  width: 100%;
  img {
    max-width: 100%;
    min-height: 100%;
    //&:nth-child(1) {
    //  grid-row: 1/3;
    //}
    //&:nth-child(3) {
    //  grid-column: 3/4;
    //  grid-row: 1/4;
    //}
  }
`;
