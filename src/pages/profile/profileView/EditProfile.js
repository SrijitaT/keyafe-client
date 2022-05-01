import { useState } from "react";

export default function UserForm({addContact}) {

  const [contactInfo, setContactInfo] = useState({
    username: "",
    email: "",
    contact: "",
    title: "",
    country: "",
    dob: "",
  });

  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(contactInfo);
    addContact(contactInfo);
    setContactInfo({ 
        username: "",
        email: "",
        contact: "",
        title: "",
        country: "",
        dob: "",
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Edit Profile</h3>
        </div>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Title"
            value={contactInfo.title}
          />
        </div>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={contactInfo.username}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={contactInfo.email}
          />
        </div>
        <div>
          <input
            type="text"
            name="countryName"
            placeholder="Country"
            value={contactInfo.country}
          />
        </div>
        <div>
          <input
            type="number"
            name="phonenumber"
            placeholder="Phone Number"
            value={contactInfo.phonenumber}
          />
        </div>
        <div>
          <button onClick={handleChange}>Submit Contact</button>
        </div>
      </form>
    </div>
  );
}
