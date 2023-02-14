import { useNavigate } from "react-router-dom";
import { Button, ButtonsSection } from "../../Utils/globalStyles";
import { Container } from "./styles";

interface INegociation
{
    id: string;
    userId: string;
    productName: string,
    value: string,
    description: string
}

interface IProps {
  product: INegociation
}

export function Product({ product }: IProps) {
  const navigate = useNavigate();

  // if current user is different than product user, can send a message
  var userId = localStorage.getItem('vibbra:UserId');
  const userCurrent = userId === product.userId;

  const handleEdit = async(product: INegociation) =>
  {
      const route = userCurrent? "/negociation/edit/": "/negociation/details/";

      navigate(route + product.id);
  }

  const handleCreateMessage = (product: INegociation) => {

    navigate('/message/create/', {
      state: {
        name: product.productName,
        value: product.value,
        productUserId: product.userId,
        productId: product.id
      }
    })
    
    window.location.reload();  
  }
    
  return (

      <Container key={product.id} userCurrent={userCurrent}>

        <div><span>Nome:</span>{product.productName}</div>
        <div><span>Valor:</span>{product.value}</div>
        <div><span>Descrição:</span>{product.description}</div>    

        <ButtonsSection>
              
          <Button onClick={() => handleEdit(product)}>
            {userCurrent?"Editar": "Visualizar"}
          </Button>

          {/* when is not a current user, allow send message */}
          {!userCurrent && (
            <Button onClick={() => handleCreateMessage(product)}>
              Enviar Mensagem
            </Button>
          )}

        </ButtonsSection>
        
      </Container>
  );

}