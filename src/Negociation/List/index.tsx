import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../Services/api";
import { Button } from "../../Utils/globalStyles";

export function ListNegociation() {

  interface INegociation
  {
      productName: string,
      value: number,
      description: string
  }
  
  const [list, setList] = useState<INegociation[]>();
  const navigate = useNavigate();
  
  const handleLoad = async() => 
  {
      try
      {
        const userId = localStorage.getItem('vibbra:UserId');
        const listNegociation = await api.get<INegociation[]>('negociation/list', {
          params:{
            userId: userId
          }
        });
      
        console.log(listNegociation.data);
        
        setList(listNegociation.data)
      }
      catch(ex: any)
      {
          alert(ex.message)
          localStorage.clear();
          navigate('/')
          window.location.reload();
      }    
  }

  return (
    
    <>
      
      {list?.map(item => {
        return <div key="item">{item.productName}</div>
      })}

      <Button type="button" onClick={handleLoad}>teste</Button>
      
    </>
    
  );
}