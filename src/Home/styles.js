import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  margin-top:10px;
  width: 100%;
  justify-content:center;
  font-size:1rem;

  .circle1 {
      
      border-radius: 25px;
      background: #00C5CD;
      padding: 5px; 
      width: 15px;
      height: 15px;
      margin-right:10px;
      margin-left:10px;
  }

  .circle2 {
      border-radius: 25px;
      background: #228B22;
      padding: 5px; 
      width: 15px;
      height: 15px;
      margin-right:10px;
      margin-left:10px;
  }
`;

export const Buttons = styled.section`
  display: flex;
  height: 100%;
  margin-top:100px;
  width: 100%;

  button{
    margin:1rem;
    opacity:0.85;
  }

  justify-content:center;
`;