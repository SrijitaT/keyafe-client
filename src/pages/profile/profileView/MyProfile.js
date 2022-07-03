import React , { useState } from "react";
import { FaMailBulk, FaPhoneAlt, FaSearchLocation } from "react-icons/fa";
import ProfileMenu from "../ProfileMenu";
import EditProfile from './EditProfile'
import "./myprofile.scss";
import "bootstrap/dist/css/bootstrap.css";
import { Col, Row , Card} from "react-bootstrap";

const MyProfile = () => {

  const [formData, setFormData] = useState({
    username: "Chandan Bose",
    email: "",
    contact: "+91 9674979475",
    title: "Mr.",
    country: "",
    // dob: ""
  });


  const [toggleform, setToggelform] = useState(true);

  const handleClick = () =>{
    setToggelform(false);
  }


  return (
    <div className="main-wrapper">
      <Col lg={3}>
      <Card className="profile-card">
      <ProfileMenu />
      </Card>
      </Col>
      <Col lg={9} className="profile-inner">
      <button className="profile-button" onClick={handleClick}>Edit</button>
        
      {toggleform?
      <Card className="profile-card">
        <Row>
          <Col className="left-logo-profile" lg={3}>
            <div className="logo-profile">C</div>
          </Col>
          <Col className="right-info-profile"  lg={9}>
            <div className="profile-name">
              <h1>{formData.title}  {formData.username}</h1>
              <span>
                (<em>Subscribed</em>)
              </span>
              {/* <button className="profile-button" onClick={handleClick}>Edit</button> */}
            </div>
            <hr />
            <div className="profile-details">
              <div className="profile-item">
                <FaMailBulk className="profile-icons" />
                <p>{formData.email}</p>
              </div>
              <div className="profile-item">
                <FaPhoneAlt className="profile-icons" /> <p>{formData.contact}</p>
              </div>
              <div className="profile-item">
                <FaSearchLocation className="profile-icons" /> <p> {formData.country}</p>
              </div>
            </div>
          </Col>
        </Row>
        </Card> :
         <Card className="profile-card">
           <EditProfile formData={formData} setFormData={setFormData} setToggelform={setToggelform}/>
           </Card>}
         
      </Col>
    </div>
  );
};

export default MyProfile;
