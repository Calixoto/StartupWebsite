import { SimpleGrid, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Button } from "../Button";
import { DescriptionCard } from "../DescriptionCard";
import { CardTeam, TeamProps } from "./CardTeam";

export function Team() {
  const [teammate, setTeammate] = useState<TeamProps[]>([]);

  async function requestTeam() {
    await api
      .get("/teams")
      .then((response) => response.data)
      .then((response) => setTeammate(response));
  }

  useEffect(() => {
    requestTeam();
  }, []);
  return (
    <VStack gap={45}>
      <DescriptionCard
        title="team"
        heading="Our Talents"
        text="Lorem ipsum, dolor sit amet consectetur
Suscipit nemo hic quos, ab."
      />
      <SimpleGrid columns={[1, 2, 2, 3, 4]} spacing={[35, 47]}>
        {teammate.map((item) => (
          <CardTeam item={item} key={item.id} />
        ))}
      </SimpleGrid>
      <Button text="View Team" mw={170} />
    </VStack>
  );
}
