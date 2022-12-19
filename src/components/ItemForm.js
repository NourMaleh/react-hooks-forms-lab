import React from "react";
import { v4 as uuid } from "uuid";
import { useState } from "react";

function ItemForm({onItemFormSubmit}) {
  const [categroy, setCategroy] = useState("Produce")
  const [newitem , setNewItem]= useState("")

  function handlecategorychange(e) {
    setCategroy(e.target.value)
  }
  
  function handlenewitemchange(e) {
    e.preventDefault();
    // setNewItem(e.target.value)
    onItemFormSubmit ({
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: newitem,
      category: categroy,
    });
    console.log(newitem)  
  }
  

  return (
    <form className="NewItem" onSubmit={handlenewitemchange} >
      <label >
        Name:
        <input type="text" name="name" value={newitem} onChange={(e)=>setNewItem(e.target.value)}  />
      </label>

      <label>
        Category:
        <select name="category" onChange={handlecategorychange} >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
