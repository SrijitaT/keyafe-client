import { useState } from "react";

export default function UserForm({formData, setFormData, setToggelform}) {

  const [contactInfo, setContactInfo] = useState(formData);

  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
    console.log(contactInfo);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData(contactInfo);
    setContactInfo({  
        email: "",
        contact: "",
        country: "",
        dob: "",
    });
    setToggelform(true);
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
            name="title"
            placeholder="Title"
            value={contactInfo.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="username"
            placeholder="Name"
            value={contactInfo.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={contactInfo.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={contactInfo.country}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="tel"
            name="contact"
            placeholder="Phone Number"
            value={contactInfo.contact}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Save Changes</button>
        </div>
      </form>
    </div>
  );
}
