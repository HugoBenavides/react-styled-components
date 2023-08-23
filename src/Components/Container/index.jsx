import React from "react";
import styled from "styled-components"
import Title from "../Title";
import Account from "../Account";

const ContainerStyle = styled.div`
  background-color: #f1f1f1;
  min-height: 90vh;
  padding: 0px 15vw;
`

const ContentStyle = styled.section `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Container = () => {
  return (
    <ContainerStyle>
      <Title>Smart Bank</Title>
      <ContentStyle>
        <Account />
      </ContentStyle>
    </ContainerStyle>
  );
};

export default Container;
