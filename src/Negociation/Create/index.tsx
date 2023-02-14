import { Button, Container, Form, Input, Title } from "../../Utils/globalStyles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../Services/api";

export function CreateNegociation() {
  
  const [name, setName] = useState<string>('')
  const [value, setValue] = useState<string>('')
  const [description, setDescription] = useState<string>('')

  const navigate = useNavigate();

  const handleClick = async () => {
    
    if (name === '')
    {
      alert('Name is required')
      return;
    }

    if (value === '')
    {
      alert('Value is required')
      return;
    }

    if (description === '')
    {
      alert('Description is required')
      return;
    }

    var userId = localStorage.getItem('vibbra:UserId');
    await api.post('negociation/save',{
      name,
      value,
      description,
      userId
    })
    
    navigate('/')
  }
  
  const handleReturn = () => {
    navigate('/')
  }

  return (
    
    <>
      <Title>Nova Negociação</Title>

      <Container>    
        
        <Form>
          <Input
            type="text"
            name="product"
            placeholder="Produto"
           onChange={(e:any) => setName(e.target.value)}
          />
          <Input
            type="text"
            name="Valor"
            autocomplete="false"
            placeholder="valor"
            onChange={(e:any) => setValue(e.target.value)}
          />

          <textarea
            name="description"
            placeholder="Descrição da negociação"
            rows={10}
            onChange={(e:any) => setDescription(e.target.value)}
          />

          <Button type="button" onClick={handleClick}>Cadastrar</Button>
          <Button type="button" onClick={handleReturn}>Retornar</Button>
        </Form>
        

      </Container>
    </>
    
  );
}