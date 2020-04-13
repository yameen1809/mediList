import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import axios from "axios";
import baseUrl from "../../utils/baseUrl";

function AfternoonButton({ products }) {
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const isProduct = Object.values(products).every((el) => Boolean(el));
    isProduct ? setDisabled(false) : setDisabled(true);
  }, [products]);

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
  return (
    <>
      <Button color="green" onClick={handleAfternoonClick} disabled={disabled}>
        Afternoon
      </Button>
    </>
  );
}

export default AfternoonButton;
