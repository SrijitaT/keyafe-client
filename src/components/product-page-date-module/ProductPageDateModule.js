import React, { useState } from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "./productpagedatemodule.scss";

const ProductPageDateModule = () => {
  const [date, setDate] = useState(new Date());
  const [deliverystatus, setDeliverystatus] = useState(false);
  const todayMonth = new Date().toLocaleString('default', { month: 'short' });
  const todayDate = new Date().getDate();
  const currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  const day = currentDate.getDate()
  const month = currentDate.toLocaleString('default', { month: 'short' });

  return (
    <>
      <h2 className="date-heading">SELECT DATE</h2>
      <div className="date-module">
        <button className="btn timeslot-button" onClick={() =>setDeliverystatus(true)}>TODAY, {todayDate} {todayMonth}</button>
        <button className="btn timeslot-button" onClick={() =>setDeliverystatus(true)}>TOMORROW, {day} {month}</button>
        <DatePicker className='timeslot-button' value={date} onChange={setDate} onBlur={() =>setDeliverystatus(true)} />
      </div>
      <div className={!deliverystatus? "delivery-time d-none": "delivery-time"}>
        <h2 className="delivery-heading">SELECT DELIVERY TIME</h2>
        <div className="delivery-time-module">
          <div>
            <button className="btn delivery-slot-button">
              Standard
              <p>Free</p>
            </button>
            <p>Delivery during selected slot</p>
          </div>
          <div>
            <button className="btn delivery-slot-button">
              Fixed Time
              <p>Rs 100</p>
            </button>
            <p>Delivery during selected 2 hour slot</p>
          </div>
          <div>
            <button className="btn delivery-slot-button">
              Midnight
              <p>Rs 200</p>
            </button>
            <p>Delivery between 11:00PM & 11:59PM</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPageDateModule;
