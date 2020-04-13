import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  Message,
  Header,
  Icon,
  Segment,
} from "semantic-ui-react";
import baseUrl from "../utils/baseUrl";
import axios from "axios";
import catchErrors from "../utils/catchErrors";

const INITIAL_PRODUCT = {
  name: "",
  quantity: "",
  morning: "",
  afternoon: "",
  night: "",
};

function CreateProduct() {
  const [product, setProduct] = useState(INITIAL_PRODUCT);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const isProduct = Object.values(product).every((el) => Boolean(el));
    isProduct ? setDisabled(false) : setDisabled(true);
  }, [product]);

  function handleChange(event) {
    const { name, value } = event.target;
    setProduct((prevState) => ({ ...prevState, [name]: value })); //[] indicates computed property.
  }

  async function handleSubmit(event) {
    try {
      event.preventDefault();
      setLoading(true);
      setError("");
      //console.log(product);
      const url = `${baseUrl}/api/product`;
      const { name, quantity, morning, afternoon, night } = product;
      const payload = { name, quantity, morning, afternoon, night };
      const response = await axios.post(url, payload);
      // console.log(response.data);
      setProduct(INITIAL_PRODUCT);
      setSuccess(true);
    } catch (error) {
      catchErrors(error, setError);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Segment raised>
        <Segment inverted color="red">
          <Header icon textAlign="center" as="h2">
            <Icon name="plus square" inverted />
            Add Medicine
          </Header>
        </Segment>
        <Form
          loading={loading}
          error={Boolean(error)}
          success={success}
          onSubmit={handleSubmit}
        >
          <Message error icon="exclamation" header="Oops!" content={error} />
          <Message
            success
            icon="check"
            header="Success!"
            content="Your medicine has been added!"
          />
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              name="name"
              label="Name"
              placeholder="Medicine Name"
              value={product.name}
              onChange={handleChange}
            />
            <Form.Field
              control={Input}
              type="number"
              name="quantity"
              label="Quantity"
              placeholder="Quantity"
              min="1"
              step="1"
              value={product.quantity}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              type="number"
              name="morning"
              label="Morning"
              min="0"
              max="1"
              step="1"
              placeholder="Morning Dose"
              value={product.morning}
              onChange={handleChange}
            />
            <Form.Field
              control={Input}
              type="number"
              name="afternoon"
              label="Afternoon"
              min="0"
              max="1"
              step="1"
              placeholder="Afternoon Dose"
              value={product.afternoon}
              onChange={handleChange}
            />
            <Form.Field
              control={Input}
              type="number"
              name="night"
              label="Night"
              min="0"
              max="1"
              step="1"
              placeholder="Night Dose"
              value={product.night}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Field
            control={Button}
            color="red"
            icon="pencil alternate"
            content="Submit"
            type="submit"
            disabled={loading || disabled}
          />
        </Form>
      </Segment>
    </>
  );
}

export default CreateProduct;
