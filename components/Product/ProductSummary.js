import { Segment, Header, Icon, Label } from "semantic-ui-react";

function ProductSummary({ name, quantity, _id, morning, afternoon, night }) {
  return (
    <>
      <Segment
        raised
        placeholder
        textAlign="center"
        style={{ marginTop: "20px", backgroundColor: "#563d7c" }}
        inverted
      >
        <Header icon as="h1">
          <Icon name="user doctor" size="large" />
          Medicine Details
        </Header>
      </Segment>
      <Segment.Group>
        <Segment textAlign="center">
          <Header as="h3" color="grey">
            {name}
          </Header>
        </Segment>
        <Segment textAlign="center">
          <Header as="h4" color="grey">
            <Label color="blue" horizontal size="large">
              Quantity
            </Label>
            {quantity}
          </Header>
        </Segment>
        <Segment.Group compact horizontal size="mini">
          <Label color="blue" ribbon>
            <h4>Doses</h4>
          </Label>
          <Segment textAlign="center">
            <Header as="h4" color="grey">
              {morning}
            </Header>
          </Segment>
          <Segment textAlign="center">
            <Header as="h4" color="grey">
              {afternoon}
            </Header>
          </Segment>
          <Segment textAlign="center">
            <Header as="h4" color="grey">
              {night}
            </Header>
          </Segment>
        </Segment.Group>
        <Segment>
          <Label color="yellow" size="large">
            Note
          </Label>
          <Header as="h4" color="grey">
            All of the medicines details presented here are according to the
            prescription of the patient. Can be subject to changes in their
            quantity and their doses depending on the health of the patient and
            their appointed doctor's suggestion.
          </Header>
        </Segment>
      </Segment.Group>
    </>
  );
}

export default ProductSummary;
