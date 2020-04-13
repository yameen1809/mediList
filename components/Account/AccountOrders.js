import { Header, Message, Segment, Icon } from "semantic-ui-react";
function AccountOrders() {
  return (
    <>
      <Message
        color="violet"
        icon="medkit circular"
        header="Welcome to mediList!"
        content="Get information about your medicines right at your doorsteps!"
      />
      <Header
        as="h4"
        attached="top"
        style={{
          borderColor: "#563d7c",
          backgroundColor: "#563d7c",
          color: "white",
        }}
      >
        Medicines List
      </Header>
      <Segment attached>
        Head over to the homepage to get an overview of the medicine list!
      </Segment>
      <Header
        as="h4"
        attached
        style={{
          borderColor: "#563d7c",
          backgroundColor: "#563d7c",
          color: "white",
        }}
      >
        Details of Medicines
      </Header>
      <Segment attached>
        If you want to see more about a specific medicine, simply click on it to
        view its details.
      </Segment>
      <Header
        as="h5"
        attached
        style={{
          borderColor: "#563d7c",
          backgroundColor: "#563d7c",
          color: "white",
        }}
      >
        Want to be an admin? Need to add medicines to the list?
      </Header>
      <Segment attached>
        Simply ask the other admins, you will be configured as an admin by them.
      </Segment>
      <Message attached="bottom" color="violet">
        <Icon name="ambulance" size="large" />
        Thank you for paying us a visit!{" "}
        <a href="/" style={{ color: "purple" }}>
          Click here to get started!
        </a>{" "}
        <Icon name="check" style={{ color: "purple" }} />
      </Message>
    </>
  );
}

export default AccountOrders;
