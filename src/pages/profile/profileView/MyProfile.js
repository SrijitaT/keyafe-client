import React , { useState } from "react";
import { FaMailBulk, FaPhoneAlt, FaSearchLocation } from "react-icons/fa";
import ProfileMenu from "../ProfileMenu";
import EditProfile from './EditProfile'
import "./myprofile.scss";
import "bootstrap/dist/css/bootstrap.css";
import { Col, Row , Card} from "react-bootstrap";

const MyProfile = () => {
  // const [username, setUserName] = useState('Chandan Bose');
  // const [email , setEmail] = useState('');
  // const [contact, setContact] = useState('');
  // const [title, setTitle] = useState('Mr.');
  // const [country, setCountry] = useState('');
  // const [dob, setDob] = useState('');
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    contact: "",
    title: "",
    country: "",
    dob: ""
  });

  const [contacts, updateContacts] = useState([]);

  const addContact = (contactInfo) => {
    updateContacts([...contacts, contactInfo]);
  };
  console.log(contacts)



  const [toggleform, setToggelform] = useState(false);

  const handleClick = () =>{
    setToggelform(true);
  }


  return (
    <div className="main-wrapper">
      <Col lg={3}>
      <Card className="profile-card">
      <ProfileMenu />
      </Card>
      </Col>
      <Col lg={9} className="profile-inner">
        <Card className="profile-card">
        <Row>
          <Col className="left-logo-profile" lg={3}>
            <div className="logo-profile">C</div>
          </Col>


          <Col className={toggleform? <EditProfile addContact={addContact} editbutton={setToggelform}/>: "right-info-profile" } lg={9}>
            <div className="profile-name">
              <h1>{formData.title}  {formData.username}</h1>
              <span>
                (<em>Subscribed</em>)
              </span>
              <button className="profile-button" onClick={handleClick}>Edit</button>
            </div>
            <hr />
            <div className="profile-details">
              <div className="profile-item">
                <FaMailBulk className="profile-icons" />
                <p>bosechandan21@gmail.com</p>
              </div>
              <div className="profile-item">
                <FaPhoneAlt className="profile-icons" /> <p> +91 9674979475</p>
              </div>
              <div className="profile-item">
                <FaSearchLocation className="profile-icons" /> <p> Kolkata</p>
              </div>
            </div>
          </Col>
          {/* <Col className={!toggleform? "right-info-profile d-none": "right-info-profile" } lg={9}>
            
          <Container>
            <Row>
              <Card className="mx-auto card" body style={{ width: "50%" }}>
                <Form>
                  <Form.Group className="form mt-2 mb-3" controlId="formBasicEmail">
                  <label htmlFor="title">Title</label>
                  <input value={formData.title} type="text" name="title" id="title" />
                  </Form.Group>
                  <Form.Group className="form mt-2 mb-3" controlId="formBasicEmail">
                  <label htmlFor="userName">Full Name</label>
                  <input value={formData.username} type="text" name="userFullName" id="userName" />
                  </Form.Group>
                  <Form.Group className="form mt-2 mb-3" controlId="formBasicEmail">
                  <label htmlFor="title">Email ID</label>
                  <input value={formData.email} type="text" name="title" id="title" />
                  </Form.Group>
                  <Form.Group className="form mt-2 mb-3" controlId="formBasicEmail">
                  <label htmlFor="title">Country</label>
                  <input value={formData.email} type="text" name="title" id="title" />
                  </Form.Group>
                  
                  <Button
                    className="btn"
                    variant="primary"
                    type="submit"
                    onClick={operation}>
                    Submit
                  </Button>
                </Form>
              </Card>
            </Row>
          </Container>



          </Col> */}
        </Row>
        </Card>
      </Col>
    </div>
  );
};

export default MyProfile;
