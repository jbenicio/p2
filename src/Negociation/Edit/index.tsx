import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../Services/api";
import { Button, ButtonsSection, Container, Form, Input, MessageList, Title } from "../../Utils/globalStyles";

export function EditNegotiation() {

  interface INegociation 
  {
    id:string;
    productName: string;
    value: string;
    description: string;
  }

  interface IMessage
  {
      id: string;
      title: string,
      message: string,      
  }

  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [identity, setIdentity] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [value, setValue] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [listMessage, setListMessage] = useState<IMessage[]>();
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
    
      setIdentity(negociation.data.id)
      setName(negociation.data.productName);
      setValue(negociation.data.value);
      setDescription(negociation.data.description);

      const userId = localStorage.getItem('vibbra:UserId');
      const listMessage = await api.get<IMessage[]>('message/list', {
        params:{
          userId: userId,
          productId: negociation.data.id
        }
      });
    
      setListMessage(listMessage.data)  
      
      setIsLoading(false)
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

  if (isLoading) 
  return (
    <Title>Aguarde...</Title>
  ) 

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

          <div>
            {listMessage && <Title>Lista de Mensagens</Title> }
            {listMessage?.map(item => {
            return <MessageList>
              <p>{item.title}</p>
              <div>{item.message}</div>
            </MessageList>
            })}
            {!listMessage && <Title>Não existem mensagens disponíveis</Title> }
          </div>

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