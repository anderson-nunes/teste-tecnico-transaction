import styled from "styled-components";

export const ContainerModal = styled.div`
  width: 500px;
  height: 300px;
  background: white;
  padding: 30px;
`;

export const Description = styled.div`
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
  }
`

export const HeaderModal = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

  button {
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  }
`

export const OverlayModal = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;