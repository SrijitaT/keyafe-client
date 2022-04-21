import React from 'react'
import { Form } from "react-bootstrap";

const TimeSlot = () => {
  return (
    <div className="delivery-time-slot-module">
    <button className="btn delivery-time-slot-button">
    <Form.Select className="time-slot-form">
          <option>Select Time Slot</option>
          <option value="1">17:00 - 21:00</option>
          <option value="2">13:00 - 16:00</option>
        </Form.Select>
    </button>
  </div>
 
  )
}

export default TimeSlot