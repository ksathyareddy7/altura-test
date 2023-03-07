import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 0px;
  margin-bottom: 30px;
`;

export const H1 = styled.h1`
  font-weight: 500;
  position: relative;
  font-size: 60px;
  line-height: 60px;
  text-align: center;
`;

export const Paragraph = styled.p`
  font-size: 22px;
  margin: 30px 0px;
  text-align: center;
`;

export const Input = styled.input`
  height: 40px;
  outline: none;
  width: 300px;
  border: 1px solid black;
  padding: 10px;
  border-radius: 4px;
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  height: 40px;
  outline: none;
  background-color: black;
  padding: 10px;
  border: 0px;
  margin-left: 10px;
  border-radius: 4px;
  font-weight: 700;
  cursor: pointer;
  color: white;

  svg {
    height: 40px;
    width: 40px;
    margin-left: 10px;
    fill: white;
  }
`;
export const MainContainer = styled.div`
  h2 {
    padding: 0px 30px;
    margin-bottom: 30px;
    code {
      background-color: black;
      color: white;
      padding: 0 10px;
      border-radius: 4px;
    }
  }
`;
export const ListContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, auto));
  grid-gap: 30px;
  justify-content: center;
  padding: 0px 30px;
`;
export const LoaderContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;
