import logo from "./img/cart.png";
const CartWidjet = () => {
  const amount= 2;  
  return (
    <>
      <img style={{width:30}} src={logo} alt=""/>
      {amount}
    </>
        
      );
}
 
export default  CartWidjet;