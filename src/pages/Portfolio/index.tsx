import { Container, SimpleGrid } from "@chakra-ui/react";
import { Button } from "../../components/Button";
import { DescriptionCard } from "../../components/DescriptionCard";
import { WorkCard } from "../../components/WorksCard";

export function Portfolio() {
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
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <WorkCard key={item} />
        ))}
      </SimpleGrid>
      <Button text="Learn More" mw={170} />
    </Container>
  );
}
