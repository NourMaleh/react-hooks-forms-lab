import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import itemData from "../data/items";

function ShoppingList() {
  const [items, setItems] = useState(itemData);
  const  [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");


  function onItemFormSubmit(item){
    setItems([...items, item]);
  }

  function handleSearchChange(event){
    console.log(event.target.value)
    setSearch(event.target.value);
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {

    if (selectedCategory === "All") {
      return item.name.toLowerCase().includes(search.toLowerCase());
    }

    return item.category === selectedCategory && item.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={search}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}

      </ul>
    </div>
  );
}

export default ShoppingList;
