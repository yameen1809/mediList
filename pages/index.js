import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Message } from "semantic-ui-react";
import ProductList from "../components/Index/ProductList";
import baseUrl from "../utils/baseUrl";
// import MorningButton from "../components/Morning-Button/MorningButton";
// import AfternoonButton from "../components/Afternoon-Button/AfternoonButton";
// import NightButton from "../components/Night-Button/NightButton";

function Home({ products, user }) {
  const isRoot = user && user.role === "root";
  const isAdmin = user && user.role === "admin";
  const isRootOrAdmin = isRoot || isAdmin;
  const [disabled, setDisabled] = useState(true);
  // const [date, setDate] = useState(new Date().toLocaleString());

  useEffect(() => {
    const isProduct = Object.values(products).every((el) => Boolean(el));
    isProduct ? setDisabled(false) : setDisabled(true);
  }, [products]);

  async function handleMorningClick() {
    products.map(async (product) => {
      if (product.morning === 1) {
        product.quantity = product.quantity - 1;
        const quantity = product.quantity;
        // console.log(quantity);
        const url = `${baseUrl}/api/products`;
        const payload = {
          _id: product._id,
          quantity: quantity,
        };
        setDisabled(true);
        await axios.put(url, payload);
        // setDate(new Date().toLocaleString());
        // // console.log(date);
        window.location.reload(true);
      }
    });
  }

  function handleAfternoonClick() {
    products.map(async (product) => {
      if (product.afternoon === 1) {
        product.quantity = product.quantity - 1;
        const quantity = product.quantity;
        // console.log(quantity);
        const url = `${baseUrl}/api/products`;
        const payload = {
          _id: product._id,
          quantity: quantity,
        };
        setDisabled(true);
        await axios.put(url, payload);
        window.location.reload(true);
      }
    });
  }
  function handleNightClick() {
    products.map(async (product) => {
      if (product.night === 1) {
        product.quantity = product.quantity - 1;
        const quantity = product.quantity;
        // console.log(quantity);
        const url = `${baseUrl}/api/products`;
        const payload = {
          _id: product._id,
          quantity: quantity,
        };
        setDisabled(true);
        await axios.put(url, payload);
        window.location.reload(true);
      }
    });
  }

  return (
    <>
      <Message color="violet">
        <b>Updated Date and Time: 7th April 2020</b>{" "}
      </Message>
      <ProductList products={products} />
      {isRootOrAdmin && (
        <>
          <Button
            style={{ marginLeft: "220px" }}
            color="yellow"
            onClick={handleMorningClick}
            disabled={disabled}
          >
            Morning
          </Button>
          <Button
            color="green"
            onClick={handleAfternoonClick}
            disabled={disabled}
          >
            Afternoon
          </Button>
          <Button color="blue" onClick={handleNightClick} disabled={disabled}>
            Night
          </Button>
        </>
      )}
    </>
  );
}

Home.getInitialProps = async () => {
  const url = `${baseUrl}/api/products`;
  const response = await axios.get(url);
  return { products: response.data };
};

export default Home;
