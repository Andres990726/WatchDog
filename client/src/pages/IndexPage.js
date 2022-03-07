import axios from "axios";
import { useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { Redirect } from "wouter";
import { Link } from "wouter";
import { useLocation } from "wouter";

export default function IndexPage() {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [location, setLocation] = useLocation();
  const [flag, setFlag] = useState(false);
  const [u, setU] = useState([]);
  const Loguearse = (e) => {
  const un= 'natural'
    e.preventDefault();
    axios
      .post("http://localhost:5002/user/verifyUser", {
        email,
        password: pass
      },null)
      .then((user) => {
        setU(user.data)
        console.log(u.role)
        if(u.role===un){
          setLocation("/home")
        }else{
          setLocation("/homeAdmin")
        }

      })
      .catch(() => {
        setFlag(true);
        setTimeout(() => {
          setFlag(false);
        }, 2000);
      });
  };

  return (
    <Container>
      {flag && <Alert variant="danger">Usuario o password inavlido</Alert>}
      <Form onSubmit={(e) => Loguearse(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
