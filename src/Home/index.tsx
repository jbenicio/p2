import { Product } from "../Components/Products";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Button, Title } from "../Utils/globalStyles";
import { Buttons, Container } from "./styles";
import { useNavigate } from "react-router-dom";
import api from "../Services/api";
import { useEffect, useState } from "react";

export function Home() {
  
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [list, setList] = useState<INegociation[]>();

  interface INegociation
  {
      id: string;
      productName: string,
      value: string,
      description: string;
      userId: string;
  }

  useEffect(() => {
    
    handleLoad();
    
  },[])

  const handleLoad = async() => 
  {
      try
      {
        const userId = localStorage.getItem('vibbra:UserId');
        const listNegociation = await api.get<INegociation[]>('negociation/list', {
          params:{
            userId: userId,
            getAll: true
          }
        });
      
        console.log(listNegociation.data);
        
        setList(listNegociation.data)

        setIsLoading(false)
      }
      catch(ex: any)
      {
          alert(ex.message)
          localStorage.clear();
          navigate('/')
          window.location.reload();
      }    
  }

    const handleLogout = () => {
      localStorage.clear();
      window.location.reload();
    }

  if (isLoading) 
    return (
      <Title>Aguarde...</Title>
    ) 

  return (

    <>
      <Buttons>
        <Button type="button" onClick={() => navigate('/negociation/create')}>Criar negociação</Button>
        <Button type="button" onClick={handleLogout}>Sair do Sistema</Button>
      </Buttons>
      
      <Container>
        <p className="circle1"></p>
        <p>Meus Produtos</p>
        <p className="circle2"></p>
        <p>Todos Produtos</p>
      </Container>

      <Container>
        
          <Header />

          {list?.map(item => {
            return <Product key={item.id} product={item} />
          })}

          <Footer />
          
      </Container>
    
    </>

  )

}
