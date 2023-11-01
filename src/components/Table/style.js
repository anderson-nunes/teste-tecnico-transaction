import styled from "styled-components";

export const ContainerTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: auto;

  th, td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;    
  }

  th {
    background-color: #f2f2f2;
  }
  td {    
    cursor: pointer;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
  }
`;