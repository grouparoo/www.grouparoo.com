import { Row, Col, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Router from "next/router";

const onSubmit = async (data) => {
  Router.push(`/meet?email=${data.email}`);
};

export default function PartialMeet() {
  const { handleSubmit, register } = useForm();

  return (
    <Form id="form" onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Col md={3} />
        <Col md={4} style={{ margin: 0 }}>
          <Form.Group className="mr-auto">
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
              defaultValue=""
              ref={register}
            />
          </Form.Group>
        </Col>
        <Col md={2} style={{ margin: 0 }}>
          <Button variant="primary" type="submit" className="ml-auto">
            Get a Demo →
          </Button>
        </Col>
        <Col md={3} />
      </Row>
    </Form>
  );
}
