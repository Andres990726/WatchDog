import axios from "axios";
import { Component, useEffect, useState } from "react";
import { Container, ListGroup, Badge, Row, Col, Button } from "react-bootstrap";
import { useLocation } from "wouter";
import { Link } from "wouter";


const SesionAdmin = () => {
  const [r, setR] = useState([]);
  const [location, setLocation] = useLocation();
  return (
      <Container>
          <Row>
              <Col>
                <p>

                </p>
                <Button>

                </Button>
              </Col>
              <Col>
              </Col>
          </Row>
      </Container>
  )
}
export default SesionAdmin;