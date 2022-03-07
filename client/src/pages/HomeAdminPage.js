import axios from "axios";
import { Component, useEffect, useState } from "react";
import { Container, ListGroup, Badge } from "react-bootstrap";
import { useLocation } from "wouter";
import { Link } from "wouter";


const HomeAdminPage = () => {
  const [r, setR] = useState([]);
  const [location, setLocation] = useLocation();
 
  useEffect(() => {
    axios
      .get("http://localhost:5002/report/returnAll", null)
      .then((report) => setR(report.data));
  }, []);

  

  return (
    <Container>
      {r.map((rep) => (
        <ListGroup defaultActiveKey="#link1">
          <ListGroup.Item action >
            <div className="ms-2 me-auto">
              <Link 
                className="fw-bold text-decoration-none" 
                to={`/homeAdmin/reports/${rep.id}`}
              >
                Informe {rep.id}
              </Link>
                ubicado en {rep.address}
            </div>
            <Badge variant="primary" pill>
              14
            </Badge>
          </ListGroup.Item>
        </ListGroup>
      ))}
    </Container>
  );
};

export default HomeAdminPage;
