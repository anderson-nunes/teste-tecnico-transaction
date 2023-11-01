import styled from "styled-components";

export const ContainerHeader = styled.header`
  width: 100%;
  height: 150px;
  background-color: #d1d1d1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px; 


  ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 20px; /* Espaçamento entre os itens da lista. */

    li {
      margin-right: 1rem;
      font-size: 1.5rem;
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: #363636;
      }
    }   
  }
`;