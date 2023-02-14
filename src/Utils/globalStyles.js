import styled, { createGlobalStyle }  from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background: #FDF9F3;
  }

  body, html, #root {
    height: 100%;
    font-family: -apple-system, Ubuntu , BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;;
  }
`;


export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;

  .disableItens {
    display:flex;
    flex-direction:column;
    margin:0.5rem;
    font-size:0.85rem;
    padding-bottom:0.5rem;
    text-transform: uppercase;
    color: navy;
    font-weight:600;
    text-align:center;
  }
`;

export const MessageList = styled.form`
  font-size:1rem;
  border: solid 1px #c2c2c2;
  margin:10px;
  padding:10px;
  box-shadow: 1px 1px #c2c2c2, -0.3em 0 0.2em olive; 
  
  > p{
    font-weight:600;
    text-align:center;
  }
  >div{
    text-align:center;
  }
`;


export const Input = styled.input`
  max-width: 100%;
  padding: 11px 13px;
  background: #f9f9fa;
  color: #f03d4e;
  margin-bottom: 0.9rem;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`;

export const Button = styled.button`
  max-width: 100%;
  padding: 5px 10px;
  color: rgb(253, 249, 243);
  font-weight: 600;
  font-size:0.75rem;
  text-transform: uppercase;
  background: #f03d4e;
  border: none;
  border-radius: 2px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: rgb(200, 50, 70);
  }
`;

export const Title = styled.h3`
    color:#f03d4e;
    justify-content:center;
    text-align:center;
`;

export const ButtonsSection = styled.div `

  display:flex;
  justify-content:space-evenly;
  
`