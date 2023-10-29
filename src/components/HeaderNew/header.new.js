import React from "react";
import { Header, Icon } from "semantic-ui-react";

const HeaderNew = (props) => (
  <>
    <Header as="h1">
      <Icon name="angle left" />
      <Header.Content className="ui center align">
        {props.pageTitle}
      </Header.Content>
    </Header>
  </>
);

export default HeaderNew;
