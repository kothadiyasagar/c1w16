import React from "react"
import data from '../data.json'
import GroceryItem from "./GroceryItem"
 import './GroceryItem.css'


const GroceryDetails = ()=>{
  
    return(
        <>
        <h1>Groceries</h1>
        <div className="container">
            {/* map through the data and display the cards */
            data.map(data=>{
                return<GroceryItem  key={data.id} data={data}/>
            })}
           

        </div>
        </>
    )
}
export default GroceryDetails