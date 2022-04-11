// import CartButton from "./CartButton";

import CartButton from "./CartButton";

// reusable card componen
  const my ={
    display:"flex",
    margin: "auto",
    justifyContent: "center"
    
  }
 const h6 ={
  marginLeft:"20px"
 }
 const hy=(data)=>{
   console.log(data)
  
 }
  
const GroceryItem = (props) => {
  console.log(props)

  return <>
  <div>
  <img  src={props.data.imgURL}  />
  <h5>{props.data.title}</h5>
  <div style={my}>  <h6>{props.data.sellingPrice}</h6>
    <h6 style={h6}>`M.R.P: {props.data.mrp}`</h6></div>
      <button onAuxClick={()=>hy(props.data)}>Add to cards</button>
      <CartButton/>
  </div>

  
  
  </>;
};
export default GroceryItem;
