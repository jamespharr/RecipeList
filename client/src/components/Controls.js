import React from 'react'

const Controls = props => (
  <div id="controls">
      <label htmlFor="dietLabels">Type of Diet:</label>
      <select
        id="dietLabels"
        name="dietLabels"
        value={props.dietLabels}
        // onChange={props.handleFilters}
      >
        <option value="all">All Diets</option>
        <option value="Low-Carb">Low Carb</option>
        <option value="Low-Fat">Low Fat</option>
        <option value="High-Protein">High Protein</option>

      </select>
  </div>
)

export default Controls
