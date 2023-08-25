import React from "react";
import styled from "styled-components"
import Title from "../Title";
import Account from "../Account";
import List from "../List/List.jsx";

const ContainerStyle = styled.div`
  background-color: ${ ({theme}) => theme.body };
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
        <List />
      </ContentStyle>
    </ContainerStyle>
  );
};

export default Container;
