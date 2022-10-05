import { SimpleGrid, VStack } from "@chakra-ui/react";
import { Button } from "../Button";
import { DescriptionCard } from "../DescriptionCard";
import { CardTeam } from "./CardTeam";

export function Team() {
  return (
    <VStack gap={45}>
      <DescriptionCard
        title="team"
        heading="Our Talents"
        text="Lorem ipsum, dolor sit amet consectetur
Suscipit nemo hic quos, ab."
      />
      <SimpleGrid columns={[1, 2, 2, 3, 4]} spacing={[35, 47]}>
        {[1, 2, 3, 4].map((item) => (
          <CardTeam key={item} />
        ))}
      </SimpleGrid>
      <Button text="View Team" mw={170} />
    </VStack>
  );
}
