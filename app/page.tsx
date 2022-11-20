"use client";

import NameCard from "./nameCard";
import { Text, Container, Card, Grid, Image } from "@nextui-org/react";

/* eslint-disable react/no-unescaped-entities */
function Home() {
  return (
    <>
      <NameCard />
      <Container>
        <Text
          h1
          css={{
            textGradient: "45deg, $pink600 -20%, $blue600 100%",
          }}
        >
          Projects
        </Text>
        <Card css={{ p: "$6", mw: "400px" }}>
          <Card.Header>
            <Grid.Container>
              <Grid xs={12}>
                <Text h5 css={{ lineHeight: "$xs" }}>
                  YouTube Experiments
                </Text>
              </Grid>
              <Grid xs={12}>
                <Text color="secondary">ca. 2020</Text>
              </Grid>
            </Grid.Container>
          </Card.Header>
          <Card.Body>
            <Image src="/public/assets/home/ytexperiments.png"></Image>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Home;
