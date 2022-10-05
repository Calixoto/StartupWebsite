import { Container, SimpleGrid } from "@chakra-ui/react";
import { DescriptionCard } from "../../components/DescriptionCard";
import { PlansCard } from "../../components/PlansCard";

export function Plans() {
  return (
    <Container
      maxW="xl"
      display="flex"
      flexDir="column"
      alignItems="center"
      mt="60px"
      mb="135px"
      gap={50}
    >
      <DescriptionCard
        title="plans"
        heading="Our Services"
        text="Lorem ipsum, dolor sit amet consectetur
adipisicing elit."
      />
      <SimpleGrid columns={[1, 1, 3]} spacing={[50, 50, 4, 12, 105]}>
        {[1, 2, 3].map((item) => (
          <PlansCard key={item} />
        ))}
      </SimpleGrid>
    </Container>
  );
}
