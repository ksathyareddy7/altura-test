import styled from "styled-components";

export const Container = styled.div`
  &.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }

  .modal-main {
    position: fixed;
    background: white;
    width: 50%;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
  }

  &.display-block {
    display: block;
  }

  &.display-none {
    display: none;
  }
  button {
    height: 40px;
    width: 100px;
    outline: none;
    background-color: black;
    color: white;
    padding: 10px;
    border-radius: 6px;
    cursor: pointer;
    margin: 30px auto 0;
    border: 0px;
  }
`;
