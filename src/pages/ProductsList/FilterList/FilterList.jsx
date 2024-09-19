import React from 'react'
import './FilterList.css'

function FilterList() {

  return (
    <div className='filter-wrapper'>
      <h3>Filter Products</h3>

      <div className='filter-container'>
        <fieldset>
          <legend>Type</legend>
          <div>
            <input type="checkbox" id="1" name="Option 1" />
            <label for="AG-Wahl">1</label>
          </div>

          <div>
            <input type="checkbox" id="2" name="Option 2" />
            <label for="AG-Wahl">2</label>
          </div>

          <div>
            <input type="checkbox" id="3" name="Option 3" />
            <label for="AG-Wahl">3</label>
          </div>

          <div>
            <input type="checkbox" id="4" name="Option 4" />
            <label for="AG-Wahl">4</label>
          </div>

          <div>
            <input type="checkbox" id="5" name="Option 5" />
            <label for="AG-Wahl">5</label>
          </div>
        </fieldset>

        <fieldset>
          <legend>Color</legend>
          <div>
            <input type="checkbox" id="1" name="Option 1" />
            <label for="AG-Wahl">1</label>
          </div>

          <div>
            <input type="checkbox" id="2" name="Option 2" />
            <label for="AG-Wahl">2</label>
          </div>

          <div>
            <input type="checkbox" id="3" name="Option 3" />
            <label for="AG-Wahl">3</label>
          </div>

          <div>
            <input type="checkbox" id="4" name="Option 4" />
            <label for="AG-Wahl">4</label>
          </div>

          <div>
            <input type="checkbox" id="5" name="Option 5" />
            <label for="AG-Wahl">5</label>
          </div>
        </fieldset>

        <fieldset>
          <legend>Price</legend>
        </fieldset>

      </div>
    </div>
  )
}

export default FilterList
