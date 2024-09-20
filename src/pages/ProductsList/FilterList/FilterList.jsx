import React, { useState } from 'react';
import './FilterList.css';

const filterData = {
  "categories": [
    {
      "name": "Furniture",
      "subcategories": [
        "Sofas and Couches",
        "Chairs and Recliners",
        "Tables (Dining, Coffee tables, or Side tables)",
        "Beds and Mattresses",
        "Storage (Cabinets, Shelves, or Dressers)"
      ]
    },
    {
      "name": "Lighting",
      "subcategories": [
        "Ceiling Lights",
        "Wall Lights",
        "Floor Lamps",
        "Table Lamps",
        "Outdoor Lighting"
      ]
    },
    {
      "name": "Decor",
      "subcategories": [
        "Rugs and Carpets",
        "Curtains and Blinds",
        "Wall Art and Mirrors",
        "Cushions and Throws",
        "Vases and Plant Pots"
      ]
    },
    {
      "name": "Kitchen",
      "subcategories": [
        "Cabinets and Pantries",
        "Countertops",
        "Sinks and Faucets",
        "Kitchen Islands and Carts",
        "Backsplashes"
      ]
    },
    {
      "name": "Bathroom",
      "subcategories": [
        "Vanities and Cabinets",
        "Showers and Bathtubs",
        "Toilets and Bidets",
        "Bathroom Sinks",
        "Mirrors and Medicine Cabinets"
      ]
    }
  ]
};

function FilterList({ searchValue, onSearch, minPrice, maxPrice, onMinPrice, onMaxPrice }) {

  return (
    <div className='filter-wrapper'>
      <h3>Filter Products</h3>

      <div className='filter-container'>
        {filterData.categories.map((category, index) => (
          <fieldset key={index}>
            <legend>{category.name}</legend>
            {category.subcategories.map((subcategory, subIndex) => {
              return (
                <div key={subIndex}>
                  <input type="checkbox" id={`category-${index}-subcategory-${subIndex}`} name={subcategory}
                    onChange={onSearch} value={subcategory} />
                  <label htmlFor={`category-${index}-subcategory-${subIndex}`}>{subcategory}</label>
                </div>
              );
            })}
          </fieldset>
        ))}
      </div>
    </div>
  );
}

export default FilterList;