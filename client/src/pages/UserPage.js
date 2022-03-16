import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Form, Row, Col, Button, Alert } from "react-bootstrap";
import { useLocation } from "wouter";
import './UserPage.css'
import uiImg from "../Images/undraw_sign_in_re_o58h.svg"

const UserPage = () => {
  const [h, setH] = useState([]);
  const [name, setName] = useState();
  const [lastname, setLast] = useState();
  const [username, setUser] = useState();
  const [pass, setPass] = useState();
  const [email, setEmail] = useState();
  const [location, setLocation] = useLocation();
  const [flag, setFlag] = useState(false);

  
  const sendReport = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:5002/user/addUser",
        {
          id: 1,
          email,
          lastname,
          name,
          password: pass,
          role: "natural", 
          username
        },
        null
      )
      .then(() => setLocation("/home"))
      .catch(() => {
        setFlag(true);
        setTimeout(() => {
          setFlag(false);
        }, 2000);
      });
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col lg={4} md={6} sm={12} className="p-3">
        <h1 className="text-center">Sing up</h1>
          {flag && <Alert variant="danger">Error al enviar el reporte</Alert>}
          <Form onSubmit={(e) => sendReport(e)}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="Id"
                  placeholder="Name"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  value={lastname}
                  onChange={(e) => setLast(e.target.value)}
                  type="lastname"
                  placeholder="last name"
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridUserName">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  value={username}
                  onChange={(e) => setUser(e.target.value)}
                  type="username"
                  placeholder="username"
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="@gmail"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGriPass">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="..."
              />
            </Form.Group>

            <Row className="mb-3">
        
            </Row>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col lg={6} md={14} sm={18}>
        <img className="register-img" src={uiImg}/>
        </Col>
      </Row>
    </Container>
  );
};

export default UserPage;