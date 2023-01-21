import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  > div {
    background-color: #000;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    p {
      font-size: 13px;
      color: white;
    }
  }
`;
export const Search = styled.input`
  width: 1400px;
  padding: 10px 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1.2rem;
  &:focus {
    outline: none;
  }
`;
