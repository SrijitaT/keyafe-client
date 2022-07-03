import React, { useEffect } from 'react'
import "./form-input.styles.scss";

export default function FormInput({handleChange,label,...otherProps}) {

  useEffect(() =>{
    console.log(otherProps.value)
  },[otherProps])
  return (
    <div className="group">
      <input className="form-input"  onChange={handleChange}/>
      {
        label ? (<label className={`${otherProps.value.length?'shrink':''} form-input-label`}>
          {label}
        </label>):null
      }
    </div>
  )
}
