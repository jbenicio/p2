import { useState } from "react";
import { Button, ButtonsSection, Form, Input, Title } from "../Utils/globalStyles";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";
import api from "../Services/api";

export function Login() {

  interface IUserLogin
  {
      token: string;
      id: string;
  }

  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)
  
  const handleSubmit = async (e: any) => {
    e.preventDefault();  
    
    try
    {
      setIsLoading(true)
      const user = await api.get<IUserLogin>('users',{ params: { email, password }})

      localStorage.setItem('vibbra:Token', user.data.token)
      localStorage.setItem('vibbra:UserId', user.data.id)

      setIsLoading(false)

      navigate('/')
      window.location.reload();
    }
    catch(ex: any)
    {
       console.log(ex)
       setIsLoading(false)
       alert('An error was found when attempt login user ' + email)
    }
  };

  const handleNewUser = (e: any) => {
    e.preventDefault();  
    localStorage.setItem("vibbra:Token", "newUser")
    navigate('/user')
    window.location.reload();
  };

  const handleChangeEmail = (e: any) => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e: any) => {
    setPassword(e.target.value)
  }
  
  if (isLoading) 
    return (
      <Title>Aguarde...</Title>
    ) 
    
  return (
    
    <>
      <Title>Login</Title>
      
      <Container>    
        
        <Form>
          <Input
            type="text"
            name="email"
            placeholder="Email"
            autocomplete="false"
            value={email}
            onChange={handleChangeEmail}
          />
          <Input
            type="password"
            name="password"
            autocomplete="false"
            placeholder="Senha"
            value={password}
            onChange={handleChangePassword}
          />          
          
          <Button type="button" onClick={(e: any) => handleSubmit(e)}>Entrar</Button>
          <Button type="button" onClick={(e: any) => handleNewUser(e)}>Cadastrar</Button>
          

        </Form>
        

      </Container>
    </>
    
  );
}