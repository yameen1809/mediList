import { Table, Header, Label, Button, Icon } from "semantic-ui-react";
import Link from "next/link";

function ProductList({ products }) {
  return (
    <div style={{ margin: "2em 0" }}>
      <Header floated="left" as="h1">
        Medicines
        <Label style={{ marginLeft: "20px" }} color="yellow" tag>
          Every Day
        </Label>
      </Header>
      <Table
        stackable
        compact
        selectable
        celled
        striped
        color="violet"
        style={{ color: "purple" }}
      >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Quantity</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Morning</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Afternoon</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Night</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {products.map((product) => (
            <ProductDetails key={product._id} product={product} />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

function ProductDetails({ product }) {
  return (
    <Table.Row style={{ cursor: "pointer" }} key={product._id}>
      <Link href={`/product?_id=${product._id}`}>
        <Table.Cell>{product.name}</Table.Cell>
      </Link>
      <Link href={`/product?_id=${product._id}`}>
        <Table.Cell textAlign="center">
          {product.quantity === 5 || product.quantity < 5 ? (
            <Icon name="warning sign" color="yellow" size="large" />
          ) : (
            product.quantity
          )}
        </Table.Cell>
      </Link>
      <Link href={`/product?_id=${product._id}`}>
        <Table.Cell textAlign="center">{product.morning}</Table.Cell>
      </Link>
      <Link href={`/product?_id=${product._id}`}>
        <Table.Cell textAlign="center">{product.afternoon}</Table.Cell>
      </Link>
      <Link href={`/product?_id=${product._id}`}>
        <Table.Cell textAlign="center">{product.night}</Table.Cell>
      </Link>
    </Table.Row>
  );
}

export default ProductList;
