import React, { PropTypes } from 'react'

const Select = ({ className, selectedValue, onChange, onClick, values }) => {
  const options = values.map(option => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ))

  return (
    <select
      className={`Select ${className}`}
      value={selectedValue}
      onChange={onChange}
      onClick={onClick}
    >
      {options}
    </select>
  )
}

const { array, func, number, string } = PropTypes

Select.propTypes = {
  className: string,
  onChange: func.isRequired,
  onClick: func.isRequired,
  selectedValue: number.isRequired,
  values: array.isRequired
}

export default Select
