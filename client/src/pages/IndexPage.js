import axios from "axios";
import { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useLocation } from "wouter";
import loginIcon from "../Images/undraw_profile_pic_ic-5-t.svg"
import './IndexPage.css'
import uiImg from "../Images/undraw_security_re_a2rk.svg"

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
      console.log(u.name)
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col lg={4} md={6} sm={12} className="text-center mt-5 p-3">
          <img className="icon-img" src={loginIcon} alt="icon" />
          {flag && <Alert variant="danger">Usuario o password inavlido</Alert>}
          <Form onSubmit={(e) => Loguearse(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <div class="d-grid gap-2">
              <Button variant="primary" type="submit" size="lg">
                Login
              </Button>
            </div>
            <div className="text-left mt-3">
              <a href= "/addUser"> <small className="reset">Register </small></a>
            </div>
          </Form>
        </Col>
        <Col lg={8} md={6} sm={12}>
          <img className="user-img" src={uiImg} alt="" />
        </Col>
      </Row>
    </Container>
  );
}
