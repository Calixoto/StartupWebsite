import { Container, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { DescriptionCard } from "../../components/DescriptionCard";
import { PlanProps, PlansCard } from "../../components/PlansCard";
import { api } from "../../services/api";

export function Plans() {
  const [plans, setPlans] = useState<PlanProps[]>([]);

  async function requestPlans() {
    await api
      .get("/plans")
      .then((response) => response.data)
      .then((response) => setPlans(response));
  }

  useEffect(() => {
    requestPlans();
  }, []);
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
        {plans.map((plan) => (
          <PlansCard item={plan} key={plan.id} />
        ))}
      </SimpleGrid>
    </Container>
  );
}
