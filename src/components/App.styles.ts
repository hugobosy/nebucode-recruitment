import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;

export const Photos = styled.div`
  margin-top: 50px;
  padding: 1em;
  column-count: 4;

  img {
    width: 100%;
    margin-bottom: 1em;
  }
`;
