import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Form, Row, Col, Button, Alert } from "react-bootstrap";
import { Link } from "wouter";
import { useLocation } from "wouter";

const HomePage = () => {
  const [h, setH] = useState([]);
  const [name, setName] = useState();
  const [id, setId] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [description, setDescription] = useState();
  const [type, setType] = useState();
  const [city, setCity] = useState();
  const [address, setAddress] = useState();
  const [flag, setFlag] = useState(false);
  const [location, setLocation] = useLocation();
  useEffect(() => {
    axios
      .get("http://localhost:5002/user/returnAll", null)
      .then((user) => setH(user.data));
  }, []);
  const sendReport = (e) => {
    axios
      .post(
        "http://localhost:5002/report/add",
        {
          address,
          city,
          cod_id: id,
          description,
          status: "Enviado",
          type,
          user_id: "1",
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
    <Container>
      {flag && <Alert variant="danger">Error al enviar el reporte</Alert>}
      <Form onSubmit={(e) => sendReport(e)}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridId">
            <Form.Label>Identification</Form.Label>
            <Form.Control
              value={id}
              onChange={(e) => setId(e.target.value)}
              type="Id"
              placeholder="0000"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="Name"
              placeholder="Name"
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="1234 Main St"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGriDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="..."
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridType">
            <Form.Label>Type of demage</Form.Label>
            <Form.Control
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <div className="mb-2">    
      </div>
    </Container>
  );
};

export default HomePage;
