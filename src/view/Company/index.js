import React, { useState, useEffect } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addUser, removeUser } from "../../Store/actions/authAction";
import { firebase, logOut } from "../../config/firebase";
import { useHistory } from "react-router-dom";
// import AddCompanyForm from "../../component/AddCompanyForm";
import "./company.css";
const Company = (props) => {
  const [companyList, setCompanyList] = useState([{}]);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    console.log(companyList);
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const history = useHistory();
  console.log("Company Props*****", props.user);
  console.log(props.user && props.user.name);
  useEffect(() => {
    userStatus();
  }, []);
  let userStatus = () => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user || props.user) {
        const currUser = { name: user.displayName, email: user.email };
        console.log("From Use Effect ***", currUser);
        props.isLoggedIn(currUser);
      } else {
        history.push("/");
        props.isLoggedIn(null);
      }
    });
  };
  const loggedOut = async () => {
    try {
      await logOut();
      props.isLoggedOut();
      console.log("Logged Out From Are Company");
    } catch (err) {
      console.log(err, "Error from My Company");
    }
  };
  const geInput = (e) => {
    const { name, value } = e.target;
    setCompanyList((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  return (
    <div className="companyWrapper">
      <div className="ModalForm">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Company</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  name="companyName"
                  onChange={(e) => geInput(e)}
                  type="text"
                  placeholder="Name of Company"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Since</Form.Label>
                <Form.Control
                  name="since"
                  onChange={(e) => geInput(e)}
                  type="number"
                  placeholder="Since"
                />
              </Form.Group>
              <Form>
                <Form.Group>
                  <Form.File label="Certificates (Max 3 Images)" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Timings</Form.Label>
                  <Form.Control
                    name="timing"
                    onChange={(e) => geInput(e)}
                    type="text"
                    placeholder="Enter Timing"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Adress</Form.Label>
                  <Form.Control
                    name="address"
                    type="text"
                    placeholder="Enter Company Adress"
                    onChange={(e) => geInput(e)}
                  />
                </Form.Group>
              </Form>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div className="companyContent">
        <h1 className="text-center mb-3">Queue App</h1>
        <Button className="btn " onClick={handleShow}>
          Add Your Company +
        </Button>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { user: state.user };
};
const mapDispatchToProps = (dispatch) => {
  return {
    isLoggedIn: (user) => dispatch(addUser(user)),
    isLoggedOut: () => dispatch(removeUser()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Company);
