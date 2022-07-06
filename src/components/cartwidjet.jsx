import logo from "./carrito.png";
const CartWidjet = () => {
  const amount= 2;  
  return (
    <>
      <img style={{width:20}} src={logo} alt=""/>
      {amount}
    </>
        
      );
}
 
export default  CartWidjet;