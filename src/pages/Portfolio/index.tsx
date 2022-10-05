import { Container, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { DescriptionCard } from "../../components/DescriptionCard";
import { WorkCard, WorkProps } from "../../components/WorkCard";
import { api } from "../../services/api";

export function Portfolio() {
  const [works, setWorks] = useState<WorkProps[]>([]);

  async function requestWork() {
    await api
      .get("/works")
      .then((response) => response.data)
      .then((response) => setWorks(response));
  }

  useEffect(() => {
    requestWork();
  }, []);
  return (
    <Container
      maxW="xl"
      display="flex"
      flexDir="column"
      alignItems="center"
      my="60px"
      gap={50}
    >
      <DescriptionCard
        title="Works"
        heading="Portfolio"
        text="Lorem ipsum, dolor sit amet consectetur
        adipisicing elit."
      />
      <SimpleGrid columns={[1, 1, 2]} spacing={55}>
        {works.map((item) => (
          <WorkCard key={item.id} item={item} />
        ))}
      </SimpleGrid>
      <Button text="Learn More" mw={170} />
    </Container>
  );
}
