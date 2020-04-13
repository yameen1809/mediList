import { Segment, Icon, Header, Statistic, Label } from "semantic-ui-react";

function AboutPage() {
  return (
    <>
      <Segment textAlign="center" style={{ backgroundColor: "#563d7c" }} raised>
        <Header as="h1" icon style={{ color: "white" }}>
          <Icon name="medkit" circular style={{ color: "white" }} />
          mediList
        </Header>
        <Segment.Inline>
          <h3 style={{ color: "white" }}>Making your life easier</h3>
        </Segment.Inline>
      </Segment>
      <Segment.Group style={{ border: "2px solid #563d7c" }}>
        <Segment textAlign="center">
          <Label color="violet" horizontal size="big">
            About
          </Label>
        </Segment>
        <Segment.Group style={{ border: "2px solid #563d7c" }}>
          <Segment style={{ borderBottom: "2px solid #563d7c" }}>
            <p style={{ color: "#563d7c", fontSize: "15px" }}>
              <b>
                <Icon name="star" /> As people nowadays are getting nothing more
                but busier with their lives. This led to the inspiration behind{" "}
                <span
                  style={{
                    fontSize: "20px",
                    color: "#6435c9",
                  }}
                >
                  <b>mediList</b>
                </span>{" "}
                to provide people with simpler lives.
              </b>
            </p>
          </Segment>
          <Segment style={{ borderBottom: "2px solid #563d7c" }}>
            <p style={{ color: "#563d7c", fontSize: "15px" }}>
              <Icon name="star" />
              <b>
                <span
                  style={{
                    fontSize: "20px",
                    color: "#6435c9",
                  }}
                >
                  <b>mediList</b>
                </span>{" "}
                is just nothing but a way to help people who cannot keep track
                of their stock of medicines they take, leading them to
                unnecessary errands. It is just a way to make them always keep
                track of their medicines.
              </b>
            </p>
          </Segment>
          <Segment>
            <p style={{ color: "#563d7c", fontSize: "15px" }}>
              <Icon name="star" />
              <b>
                A way to keep track of your daily life needs often helps you
                stay relaxed. Just a simple way of life to live.
              </b>
            </p>
          </Segment>
        </Segment.Group>
        <Segment.Group horizontal>
          <Segment
            style={{
              borderTop: "2px solid #563d7c",
              borderBottom: "2px solid #563d7c",
              borderRight: "2px solid #563d7c",
            }}
            textAlign="center"
          >
            <Icon name="twitter" size="large" color="violet" />
            <b style={{ color: "#604984" }}>@yam33nz</b>
          </Segment>
          <Segment
            style={{
              borderTop: "2px solid #563d7c",
              borderBottom: "2px solid #563d7c",
              borderRight: "2px solid #563d7c",
            }}
            textAlign="center"
          >
            {" "}
            <Icon name="facebook official" size="large" color="violet" />
            <b style={{ color: "#604984" }}>Yameen Irteza</b>
          </Segment>
          <Segment
            style={{
              borderTop: "2px solid #563d7c",
              borderBottom: "2px solid #563d7c",
            }}
            textAlign="center"
          >
            <Icon name="linkedin square" size="large" color="violet" />
            <b style={{ color: "#604984" }}>Yameen Irteza</b>
          </Segment>
        </Segment.Group>
        <Segment textAlign="center">
          <Icon name="copyright outline" size="large" color="violet" />
          <b style={{ color: "#604984" }}>
            2020 mediList<sup>TM</sup>. All rights reserved by Yameen Irteza.
          </b>
        </Segment>
      </Segment.Group>
      <Statistic.Group color="violet" style={{ marginLeft: "50px" }}>
        <Statistic>
          <Statistic.Value>10</Statistic.Value>
          <Statistic.Label>Views</Statistic.Label>
        </Statistic>

        <Statistic>
          <Statistic.Value>7</Statistic.Value>
          <Statistic.Label>Signups</Statistic.Label>
        </Statistic>

        <Statistic>
          <Statistic.Value>
            <Icon name="star" />
            <Icon name="star" />
            <Icon name="star" />
            <Icon name="star half" />
            3.5
          </Statistic.Value>
          <Statistic.Label>Ratings</Statistic.Label>
        </Statistic>

        <Statistic>
          <Statistic.Value>5</Statistic.Value>
          <Statistic.Label>Team Members</Statistic.Label>
        </Statistic>
      </Statistic.Group>
    </>
  );
}

export default AboutPage;
