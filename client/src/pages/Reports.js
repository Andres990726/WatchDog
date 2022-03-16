import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useRoute } from "wouter";

const Report = () => {
  const [match, params] = useRoute("/homeAdmin/reports/:id");
  const [rep, setRep] = useState();
 
  return (
    
    <Container className="mt-5">
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
            <td>123</td>
           
          </tr>
          <tr>
            <td>2</td>
            <td>Identificación del denunciante</td>
            <td>{123}</td>
         
          </tr>
          <tr>
            <td>3</td>
            <td>Ciudad</td>
            <td>city</td>
          </tr>

          <tr>
            <td>4</td>
            <td>Dirección</td>
            <td>cra 2</td>
          </tr>

          <tr>
            <td>5</td>
            <td>Tipo de denuncia</td>
            <td>cra3</td>
          </tr>

          <tr>
            <td>6</td>
            <td>Descripción</td>
            <td>obvio</td>
          </tr>

          <tr>
            <td>7</td>
            <td>Estado</td>
            <td>bien</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};
export default Report;
