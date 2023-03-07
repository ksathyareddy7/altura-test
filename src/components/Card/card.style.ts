import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid white;
  background-color: #282c34;
  background: linear-gradient(
    0deg,
    rgba(40, 44, 52, 1) 0%,
    rgba(17, 0, 32, 0.5) 100%
  );
  box-shadow: 0 7px 20px 5px #00000088;
  border-radius: 0.7rem;
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  overflow: hidden;
  transition: 0.5s all;
  padding: 16px;
  cursor: pointer;

  h3 {
    color: white;
    font-weight: 400;
    margin: 16px 0px;
  }
  img {
    border-radius: 0.5rem;
    max-width: 100%;
    height: 250px;
    object-fit: cover;
  }
  .description {
    margin: 0.5rem 0;
    color: #a89ec9;
    height: 100%;
  }
`;

export const ModalCard = styled(CardContainer)`
  .modal-description {
    margin: 20px 0px;
  }
  .open {
    width: auto;
  }
`;
