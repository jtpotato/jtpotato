"use client";

import NameCard from "./nameCard";
import { Text, Container, Card, Grid, Image, Link } from "@nextui-org/react";
import ProjectCard from "./project";
import Projects from "./projects";

/* eslint-disable react/no-unescaped-entities */
function Home() {
  return (
    <>
      <NameCard />
      <Projects />
    </>
  );
}

export default Home;
