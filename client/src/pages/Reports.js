import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useRoute } from "wouter";

const Report = () => {
  const [match, params] = useRoute("/homeAdmin/reports/:id");
  const [rep, setRep] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:5002/report/findReport/${params.id}`, null)
      .then((report) => setRep(report.data));
  }, []);

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Info</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Codigo reporte</td>
            <td>{rep.id}</td>
           
          </tr>
          <tr>
            <td>2</td>
            <td>Identificación del denunciante</td>
            <td>{rep.cod_id}</td>
         
          </tr>
          <tr>
            <td>3</td>
            <td>Ciudad</td>
            <td>{rep.city}</td>
          </tr>

          <tr>
            <td>4</td>
            <td>Dirección</td>
            <td>{rep.address}</td>
          </tr>

          <tr>
            <td>5</td>
            <td>Tipo de denuncia</td>
            <td>{rep.type}</td>
          </tr>

          <tr>
            <td>6</td>
            <td>Descripción</td>
            <td>{rep.description}</td>
          </tr>

          <tr>
            <td>7</td>
            <td>Estado</td>
            <td>{rep.status}</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};
export default Report;
