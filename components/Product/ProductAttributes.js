import {
  Button,
  Icon,
  Modal,
  Form,
  Message,
  Input,
  Divider,
} from "semantic-ui-react";
import React, { useState } from "react";
import baseUrl from "../../utils/baseUrl";
import axios from "axios";
import { useRouter } from "next/router";
import catchErrors from "../../utils/catchErrors";

function ProductAttributes({
  _id,
  name,
  quantity,
  morning,
  afternoon,
  night,
  user,
}) {
  const isRoot = user && user.role === "root";
  const isAdmin = user && user.role === "admin";
  const isRootOrAdmin = isRoot || isAdmin;
  const [modal, setModal] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const router = useRouter();

  const INITIAL_PRODUCT = {
    name: "",
    quantity: "",
    morning: "",
    afternoon: "",
    night: "",
  };

  const [products, setProducts] = useState(INITIAL_PRODUCT);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleDelete() {
    const url = `${baseUrl}/api/product`;
    const payload = { params: { _id } };
    await axios.delete(url, payload);
    router.push("/");
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setProducts((prevState) => ({ ...prevState, [name]: value })); //[] indicates computed property.
    // console.log(products);
  }

  async function handleUpdate(event) {
    try {
      event.preventDefault();
      setLoading(true);
      // console.log(products);
      const url = `${baseUrl}/api/product`;
      const payload = {
        _id: _id,
        name: products.name,
        quantity: products.quantity,
        morning: products.morning,
        afternoon: products.afternoon,
        night: products.night,
      };
      await axios.put(url, payload);
      //console.log(response.data);
      setProducts(INITIAL_PRODUCT);
      setSuccess(true);
      window.location.reload(true);
    } catch (error) {
      catchErrors(error, setError);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {isRootOrAdmin && (
        <>
          <Button
            style={{ float: "right" }}
            color="red"
            icon
            labelPosition="left"
            onClick={() => setModal(true)}
          >
            <Icon name="trash alternate outline" />
            Delete
          </Button>
          <Modal open={modal} dimmer="blurring">
            <Modal.Header style={{ color: "red" }}>Confirm Delete</Modal.Header>
            <Modal.Content>
              <h4>Are you sure you want to delete this medicine?</h4>
            </Modal.Content>
            <Modal.Actions>
              <Button content="Cancel" onClick={() => setModal(false)} />
              <Button
                negative
                icon="trash"
                labelPosition="right"
                content="Delete"
                onClick={handleDelete}
              />
            </Modal.Actions>
          </Modal>
          <Button
            style={{ float: "right" }}
            color="blue"
            icon
            labelPosition="left"
            onClick={() => setModalUpdate(true)}
          >
            <Icon name="edit outline" />
            Update
          </Button>
          <Modal open={modalUpdate} dimmer="blurring">
            <Modal.Header style={{ color: "#2185d0" }}>
              Update Medicine Information
            </Modal.Header>
            <Modal.Content>
              <Form
                loading={loading}
                error={Boolean(error)}
                success={success}
                onSubmit={handleUpdate}
              >
                <Message
                  error
                  icon="exclamation"
                  header="Oops!"
                  content={error}
                />
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
                    value={products.name}
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
                    value={products.quantity}
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
                    value={products.morning}
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
                    value={products.afternoon}
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
                    value={products.night}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Divider />
                <Form.Group style={{ float: "right" }}>
                  <Form.Field
                    control={Button}
                    content="Cancel"
                    onClick={() => setModalUpdate(false)}
                  />
                  <Form.Field
                    control={Button}
                    color="blue"
                    icon="edit outline"
                    content="Update"
                    type="submit"
                  />
                </Form.Group>
              </Form>
            </Modal.Content>
          </Modal>
        </>
      )}
    </>
  );
}

export default ProductAttributes;
