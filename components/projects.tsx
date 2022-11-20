import { Text, Container, Card, Grid, Image, Link } from "@nextui-org/react";
import dynamic from "next/dynamic";
const Animator = dynamic(
  import("react-scroll-motion").then((it) => it.Animator),
  { ssr: false }
);
import { batch, Fade, ScrollContainer, ScrollPage, Zoom } from "react-scroll-motion";
import ProjectCard from "./project";

function Projects() {
  return (
    <ScrollContainer>
      <ScrollPage>
        <Animator animation={batch(Fade(2, 0), Zoom(1, 0.7))}>
          <Container>
            <Text
              h1
              css={{
                textGradient: "45deg, $pink600 -20%, $blue600 100%",
              }}
            >
              Projects
            </Text>
            <Grid.Container gap={2}>
              <Grid xs={4}>
                <ProjectCard
                  projectName="YouTube Experiments"
                  date="ca. 2020"
                  imageSrc="/assets/home/ytexperiments.png"
                  imageAlt="Screenshot of YouTube Experiments repl.it page"
                  linkText="See it in action on repl.it"
                  linkHref="https://replit.com/@JTpotato/YTExperiments"
                />
              </Grid>
              <Grid xs={4}>
                <ProjectCard
                  projectName="RoboCup 2021"
                  date="ca. Nov 2021"
                  imageSrc="/assets/home/robocup.jpg"
                  imageAlt="RoboCup Robot"
                  linkText="View source code on github.com"
                  linkHref="https://github.com/jtpotato/robocup-2021"
                />
              </Grid>
              <Grid xs={4}>
                <ProjectCard
                  projectName="Anti-swear"
                  date="ca. Dec 2021"
                  imageSrc="/assets/home/antiswear.png"
                  imageAlt="Screenshot of GitHub page for Anti-swear"
                  linkText="View source code on github.com"
                  linkHref="https://github.com/jtpotato/random-things/tree/main/anti-swear"
                />
              </Grid>
              <Grid xs={4}>
                <ProjectCard
                  projectName="Genshin Music Generator"
                  date="Started 27/9/2022"
                  imageSrc="https://i3.ytimg.com/vi/8v47m-5Ekj4/maxresdefault.jpg"
                  imageAlt="YouTube thumbnail for Genshin Music Generator"
                  linkText="Check it out on YouTube"
                  linkHref="https://youtu.be/8v47m-5Ekj4"
                />
              </Grid>
              <Grid xs={4}>
                <ProjectCard
                  projectName="Moshi"
                  date="Started 4/10/2022"
                  imageSrc="/assets/home/moshi.png"
                  imageAlt="Screenshot of a Unity window"
                  linkText="Coming soon"
                  linkHref=""
                />
              </Grid>
              <Grid xs={4}>
                <ProjectCard
                  projectName="Megaphone"
                  date="Started 29/10/2022"
                  imageSrc="/assets/home/megaphone.png"
                  imageAlt="Screenshot of Megaphone work-in-progress"
                  linkText="Coming soon"
                  linkHref="https://megaphone-web.vercel.app/"
                />
              </Grid>
            </Grid.Container>
          </Container>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
}

export default Projects;
