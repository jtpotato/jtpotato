import { Text, Container, Card, Grid, Image, Link } from "@nextui-org/react";

function ProjectCard(props: { projectName: any; date: any; imageSrc: any; imageAlt: any; linkText: any; linkHref: any;}) {
    const { projectName, date, imageSrc, imageAlt, linkText, linkHref } = props;
  return (
    <Card>
      <Card.Header>
        <Grid.Container>
          <Grid xs={12}>
            <Text h5 css={{ lineHeight: "$xs" }}>
              {projectName}
            </Text>
          </Grid>
          <Grid xs={12}>
            <Text color="secondary">{date}</Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body>
        <Image
          src={imageSrc}
          css={{ mh: "20em" }}
          alt={imageAlt}
        ></Image>
      </Card.Body>
      <Card.Footer>
        <Link target="_blank" href={linkHref}>
          {linkText}
        </Link>
      </Card.Footer>
    </Card>
  );
}

export default ProjectCard;
