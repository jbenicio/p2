import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../Services/api";
import { Button, ButtonsSection, Container, Form, Input, Title } from "../../Utils/globalStyles";

export function EditMessage() {

  interface INegociation 
  {
    id:string;
    productName: string;
    value: string;
    description: string;
  }

  const [identity, setIdentity] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [value, setValue] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    
    handleLoad();
  
  },[]);

  const handleLoad = async() =>
  {
    try
    {
      
      const negociation = await api.get<INegociation>('negociation/edit/?id='+ id);
    
      console.log(negociation)

      setIdentity(negociation.data.id)
      setName(negociation.data.productName);
      setValue(negociation.data.value);
      setDescription(negociation.data.description);
    }
    catch(ex: any)
    {
        alert("Negociation id: " +  id + " was not found")
        navigate('/')
    } 
  }
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
      id,
      name,
      value,
      description,
      userId
    })
    
    navigate('/')
  }
  
  const handleDelete = async () => {
    
    await api.delete('negociation/delete?id='+id)

    navigate('/')
  }

  const handleReturn = () => {
    navigate('/')
  }

 
  return (
    
    <>
      <Title>Editar Negociação</Title>

      <Container>    
        
        <Form>
          <Input
            type="text"
            name="product"
            placeholder="Produto"
            value={name}
            onChange={(e:any) => setName(e.target.value)}
          />
          <Input
            type="text"
            name="Valor"
            autocomplete="false"
            placeholder="valor"
            value={value}
            onChange={(e:any) => setValue(e.target.value)}
          />

          <textarea
            name="description"
            placeholder="Descrição da negociação"
            value={description}
            rows={10}
            onChange={(e:any) => setDescription(e.target.value)}
          />

          <ButtonsSection>
            <Button type="button" onClick={handleClick}>Salvar</Button>
            {id != null && <Button type="button" onClick={handleDelete}>Excluir</Button>}
            <Button type="button" onClick={handleReturn}>Retornar</Button>
          </ButtonsSection>
        </Form>
        

      </Container>
    </>
    
  );
}