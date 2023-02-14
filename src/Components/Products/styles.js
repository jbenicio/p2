import styled from 'styled-components'

export const Container = styled.div`
  
  display: flex;
  flex-wrap: wrap;
  flex-direction:column;
  opacity:0.85;
  padding: 20px;
  min-width:15rem;
  min-height:7rem;
  overflow:auto;
  margin: 0.5rem;
  border: solid 1px #c2c2c2;
  /* box-shadow: 1px 1px #f9f9fa, -0.3em 0 0.2em olive; */
  box-shadow: 1px 1px #c2c2c2, -0.3em 0 0.2em ${props => props.userCurrent ? '#00C5CD': '#228B22'}; 

  div {
    flex: 1; /* explanation below */
    span{
      margin-right:10px;
      font-weight:600;
    }
    margin-bottom:10px;
    font-size:0.85rem;   
  }

`;