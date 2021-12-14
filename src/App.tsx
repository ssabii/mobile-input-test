import React from "react";
import { Container, Form } from "react-bulma-components";

function App() {
  return (
    <Container>
      <form>
        <Form.Field>
          <Form.Label>Text</Form.Label>
          <Form.Control>
            <Form.Input type="text" />
          </Form.Control>
        </Form.Field>
        <Form.Field>
          <Form.Label>Phone</Form.Label>
          <Form.Control>
            <Form.Input type="number" inputMode="numeric" />
          </Form.Control>
        </Form.Field>
        <Form.Field>
          <Form.Label>Password</Form.Label>
          <Form.Control>
            <Form.Input type="password" pattern="[0-9]*" inputMode="numeric" />
          </Form.Control>
        </Form.Field>
      </form>
    </Container>
  );
}

export default App;
