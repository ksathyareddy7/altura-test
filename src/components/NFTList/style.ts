import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 0px;
  margin-bottom: 30px;
  background-color: #732fd8;
`;

export const Paragraph = styled.p`
  font-size: 22px;
  margin: 30px 0px;
  text-align: center;
  color: white;
`;

export const Input = styled.input`
  height: 40px;
  outline: none;
  width: 400px;
  border: 1px solid #732fd8;
  padding: 10px;
  border-radius: 4px;
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  height: 40px;
  outline: none;
  background-color: #732fd8;
  padding: 10px;
  border: 1px solid white;
  margin-left: 10px;
  border-radius: 4px;
  font-weight: 700;
  cursor: pointer;
  color: white;

  svg {
    height: 24px;
    width: 24px;
    margin-left: 10px;
    fill: white;
  }
`;
export const MainContainer = styled.div`
  h2 {
    padding: 0px 30px;
    margin-bottom: 30px;
  }
`;
export const ListContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
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
