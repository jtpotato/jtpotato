import { Container, Row, Text } from "@nextui-org/react";
import dynamic from "next/dynamic";

const Animator = dynamic(
  import("react-scroll-motion").then((it) => it.Animator),
  { ssr: false }
);

import {
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";

function NameCard() {
  return (
    <>
      <ScrollContainer>
        <ScrollPage>
          <Animator animation={batch(Fade(-2, 1))}>
            <Container>
              <Row justify="center" align="center" css={{ height: "100vh" }}>
                <Text>
                  <Text
                    b
                    css={{
                      fontSize: "5em",
                    }}
                  >
                    Hi, I'm{" "}
                  </Text>
                  <Text
                    b
                    css={{
                      fontSize: "5em",
                      textGradient: "45deg, $yellow600 -20%, $red600 100%",
                    }}
                  >
                    Joel
                  </Text>
                </Text>
              </Row>
            </Container>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </>
  );
}

export default NameCard;
