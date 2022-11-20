"use client";

import NameCard from "./nameCard";
import { Text, Container, Card, Grid, Image, Link } from "@nextui-org/react";

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
        <Grid.Container>
          <Grid xs={4}>
            <Card>
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
                <Image src="/assets/home/ytexperiments.png" css={{mh: "20em"}} alt="Screenshot of YouTube Experiments repl.it page"></Image>
              </Card.Body>
              <Card.Footer>
                <Link
                  target="_blank"
                  href="https://replit.com/@JTpotato/YTExperiments"
                >
                  See it in action on repl.it
                </Link>
              </Card.Footer>
            </Card>
          </Grid>
        </Grid.Container>
      </Container>
    </>
  );
}

export default Home;
