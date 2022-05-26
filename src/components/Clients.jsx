import React from "react";
import styled from "styled-components";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
import client5 from "../assets/client5.png";

export default function Clients() {
  const clients = [client1, client2, client3, client4, client5];
  return (
    <Section>
      {clients.map((client, index) => {
        return (
          <div className="client" key={index}>
            <img src={client} alt="client" />
          </div>
        );
      })}
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 2rem;
  margin-bottom: 5rem;
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    margin-bottom: 2rem;
  }
`;
