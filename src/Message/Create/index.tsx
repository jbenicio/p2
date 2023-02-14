import { Button, ButtonsSection, Container, Form, Input, Title } from "../../Utils/globalStyles";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../Services/api";
import { DetailsProduct } from "./styles";

export function CreateMessage() {
  
  const [title, setTile] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const navigate = useNavigate();
  const location = useLocation();

  const productdName = location.state.name;
  const productValue = location.state.value;
  const productUserId = location.state.productUserId;
  const productId = location.state.productId;

  console.log(location)
  
  const handleClick = async () => {
    
    if (title === '')
    {
      alert('Title is required')
      return;
    }

    if (message === '')
    {
      alert('Message is required')
      return;
    }

    var userId = localStorage.getItem('vibbra:UserId');
    await api.post('message/save',{
      id: null,
      title,
      message,
      productId,
      userIdOwner: productUserId,
      userIdMessage:userId
    })
    
    navigate('/')
  }
  
  const handleReturn = () => {
    navigate('/')
  }

  return (
    
    <>
      <Title>Nova Mensagem</Title>

      <Container>    
        
        <Form>

          <DetailsProduct>
            <label><span>Produto</span>{productdName}</label>
            <label><span>Valor</span>{productValue}</label>
          </DetailsProduct>

          <Input
            type="text"
            name="title"
            placeholder="Titulo"
            onChange={(e:any) => setTile(e.target.value)}
          />
          <textarea
            name="description"
            placeholder="Mensagem"
            rows={10}
            onChange={(e:any) => setMessage(e.target.value)}
          />

          <ButtonsSection>
            <Button type="button" onClick={handleClick}>Salvar</Button>
            <Button type="button" onClick={handleReturn}>Retornar</Button>
          </ButtonsSection>

        </Form>
        

      </Container>
    </>
    
  );
}