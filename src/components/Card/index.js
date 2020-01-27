import React from "react";

import {
  Container,
  Area,
  Main,
  Title,
  Slug,
  Info,
  Price,
  Variation,
  Icon,
  Date
} from "./styles";

export default function Card({ action }) {
  return (
    <Container color={action.color}>
      <Area>
        <Main>
          <Title>{action?.name}</Title>
          <Slug>{action?.slug}</Slug>
        </Main>
        <Info>
          <Price pctChange={action?.pctChange}>{action?.price}</Price>
          <Variation pctChange={action?.pctChange}>
            <Icon size={20} />
            <h2>{action?.pctChange}%</h2>
          </Variation>
        </Info>
      </Area>
      <Date>Últ. consulta: {action?.date}</Date>
    </Container>
  );
}
