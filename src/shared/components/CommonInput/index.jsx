import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

function CommonInput ({ id, label, placeholder, value, isRequired, register, errorMessage, name, type, max, ref, onChange, min }) {
  return (
    <>
      <label htmlFor={id} className='label'>{label}</label>
      {isRequired && <span className='error'>*</span>}
      <input
        ref={ref}
        onChange={onChange}
        type={type}
        id={id}
        name={name}
        max={max}
        min={min}
        placeholder={placeholder}
        value={value}
        {...register}
        className='form-control'
      />
      <span className='error'>{errorMessage}</span>
    </>
  )
}

export default CommonInput

CommonInput.propTypes = {
  id: PropTypes.any,
  ref: PropTypes.any,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.any,
  isRequired: PropTypes.bool,
  register: PropTypes.any,
  errorMessage: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  max: PropTypes.any,
  min: PropTypes.any
}
