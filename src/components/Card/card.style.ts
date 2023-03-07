import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid white;
  background-color: #282c34;
  background: linear-gradient(
    0deg,
    rgba(115, 47, 216, 1) 0%,
    rgba(115, 47, 216, 0.5) 100%
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
    &:hover {
      text-decoration: underline;
    }
  }
  img {
    border-radius: 0.5rem;
    max-width: 100%;
    height: 250px;
    object-fit: cover;
    border: 2px dashed white;
  }
  .description {
    margin: 0.5rem 0;
    color: white;
    height: 100%;
  }
`;

export const ModalCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  .modal-description {
    margin: 20px 0px;
  }
  .open {
    width: auto;
    background-color: #732fd8;
    border: 0px;
    padding: 6px 16px;
  }
  h3 {
    margin: 20px 0;
  }
  img {
    border-radius: 0.5rem;
    max-width: 100%;
    height: 250px;
    object-fit: cover;
    border: 2px dashed #732fd8;
  }

  .description {
    margin: 0.5rem 0;
    height: 100%;
  }
`;
