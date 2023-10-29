import React from "react";
import { Container, Item, Button, Form, Grid } from "semantic-ui-react";

import HeaderNew from "../HeaderNew/header.new";

const Login = () => {
  return (
    <div style={{ backgroundColor: " #EFEFEF" }}>
      <Container>
        <br />
        <HeaderNew pageTitle="Get Started" />
        <>
          <Item.Group divided>
            <Item>
              <Item.Content>
                <Item.Meta>
                  <p
                    style={{
                      textAlign: "center",
                    }}
                  >
                    Just enter your email address and we'll email you a magic
                    link to log straight in.
                  </p>
                  <Form>
                    <Form.Field>
                      <input
                        style={{
                          textAlign: "center",
                          marginTop: "30vh",
                        }}
                        type="text"
                        placeholder="What's your email address?"
                      />
                    </Form.Field>
                  </Form>
                  <br />
                </Item.Meta>
                <Item.Extra>
                  <Grid>
                    <Grid.Column textAlign="center">
                      <Button color="dark green" size="tiny" icon="play">
                        Log in
                      </Button>
                    </Grid.Column>
                  </Grid>
                </Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        </>
        <br />
      </Container>
    </div>
  );
};

export default Login;
