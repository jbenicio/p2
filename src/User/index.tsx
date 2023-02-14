import { Button, Form, Input,Title } from "../Utils/globalStyles";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";
import api from "../Services/api";
import { useState } from "react";

export function User() {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [name, setName] = useState<string>("")
 
  const handleClick = async () => {
    
    if (name === '')
    {
        alert('User name is required');

        return;
    }

    if (email === '')
    {
        alert('User email is required');

        return;
    }

    if (!email.includes('@') || !email.includes('.'))
    {
        alert('User email requires a valid email adrress');

        return;
    }

    if (password === '')
    {
        alert('User password is required');

        return;
    }

    await api.post('users',{
      name: name,
      email: email,
      password: password
    })
    .then((response) => {

      localStorage.setItem('vibbra:Token', response.data.token)
      localStorage.setItem('vibbra:UserId', response.data.id)
      navigate('/')
      
    })
  }
  
  const handleLogin = (e: any) => {
    e.preventDefault();  
    localStorage.removeItem('vibbra:Token')
    window.location.reload();
    
  };

  return (
    
    <>
      <Title>Novo Usuário</Title>

      <Container>    
        
        <Form>
          <Input
            type="text"
            name="name"
            placeholder="Nome"
            autocomplete="false"
            onChange={(e:any) => setName(e.target.value)}
          />
          <Input
            type="text"
            name="email"
            placeholder="Email"
            autocomplete="false"
            onChange={(e:any) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            name="password"
            autocomplete="false"
            placeholder="Senha"
            onChange={(e:any) => setPassword(e.target.value)}
          />
          <Button type="button" onClick={handleClick}>Salvar</Button>
          <Button type="button" onClick={handleLogin}>Retornar</Button>
        </Form>
        

      </Container>
    </>
    
  );
}