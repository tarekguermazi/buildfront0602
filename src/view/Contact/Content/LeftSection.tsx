import React from "react";
import styled from "styled-components";

export default function LeftSection() {
  return (
    <LeftLayout>
      <h3>
        Echanger avec <br /> nous
      </h3>

      <h3 className='sectionTitle'>Par téléphone</h3>
      <p>Du lundi au Vendredi de 8H à 16H au 71.325.109</p>

      <h3 className='sectionTitle'>Par E-mail</h3>
      <p>
        Contactez-nous sur le{" "}
        <a href='mailto:contact@al-forum.org'>Contact@al-forum.org</a>
      </p>

      <h3 className='sectionTitle'>Par réseaux sociaux</h3>
      <p>SOCIAL_MEDIA_HERE</p>
    </LeftLayout>
  );
}

const LeftLayout = styled.section`
  h3 {
    font-family: "Proxima Nova";
    text-transform: capitalize;
    color: var(--violet);
  }

  .sectionTitle {
    margin-top: 1rem;
    font-family: "Proxima Nova";
    text-transform: capitalize;
    font-size: 1.2rem;
    color: #e1011a;
  }

  p {
    font-family: "Proxima Nova";
    line-height: 1.5;
    font-size: 1rem;
    color: #000;
  }
`;
