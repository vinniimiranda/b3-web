import React from "react";
import { useSocket } from "./../../hooks/Socket";
import Card from "./../../components/Card/index";
import { Container } from "./../../components/Layout/Container/index";
import { Row } from "./../../components/Layout/Row/index";
import { Column } from "./../../components/Layout/Column/index";

export default function List() {
  const colors = ["#68f", "#71c", "#0da", "#f90"];
  const data = useSocket();
  return (
    <Container>
      <Row>
        {data.map((action, index) => (
          <Column sm={12} md={6} lg={6} xl={6}>
            <Card color={colors[index]} key={action.code} />
          </Column>
        ))}
      </Row>
    </Container>
  );
}
