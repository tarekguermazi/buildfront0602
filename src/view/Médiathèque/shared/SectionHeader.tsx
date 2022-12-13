import React from "react";
import styled from "styled-components";

export default function SectionHeader({ title }) {
  return (
    <HeaderLayout>
      <header>
        <span>{title}</span>
      </header>
    </HeaderLayout>
  );
}

const HeaderLayout = styled.div`
  header {
    width: 100%;
    margin-bottom: 1rem;

    span {
      font-size: 2.5rem;
      text-transform: uppercase;
      font-family: "Bebas Neue Pro";
      line-height: 0.5;
      padding: 0;

      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: space-between;

      &:after {
        content: "";
        display: inline-block;
        height: 1px;
        flex-grow: 1;
        background-color: red;
      }
    }
  }
`;
