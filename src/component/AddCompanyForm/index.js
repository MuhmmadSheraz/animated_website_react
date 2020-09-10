import React, { useState, useEffect } from "react";
import { Modal, Form, Button } from "react-bootstrap";

const AddCompanyForm = () => {
  const [companyData, setCompanyData] = useState({});
  return (
    <div>
        <Form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Company Name</Form.Label>
        <Form.Control type="text" placeholder="Name of Company" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Since</Form.Label>
        <Form.Control type="number" placeholder="Since" />
      </Form.Group>
      <Form>
        <Form.Group>
          <Form.File label="Certificates (Max 3 Images)" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Timings</Form.Label>
          <Form.Control type="text" placeholder="Enter Timing" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Adress</Form.Label>
          <Form.Control type="text" placeholder="Enter Company Adress" />
        </Form.Group>
      </Form>
    </Form>
    </div>
  );
};
export default AddCompanyForm;
