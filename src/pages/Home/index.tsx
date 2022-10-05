import { Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Hero } from "../../components/Hero";
import { PartnerProps, Partners } from "../../components/Partners";
import { Team } from "../../components/Team";
import { api } from "../../services/api";

export function Home() {
  const [partners, setPartners] = useState<PartnerProps[]>([]);
  async function requestPartners() {
    await api
      .get("/partners")
      .then((response) => response.data)
      .then((response) => setPartners(response));
  }

  useEffect(() => {
    requestPartners();
  }, []);
  return (
    <>
      <Hero
        isWelcome
        subText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
              voluptate culpa nesciunt delectus iste?"
        headingText="Lorem ipsum dolor sit amet consectetur"
        color="white"
        subColor="white.75"
        buttonColor="black"
        buttonBg="white"
        buttonText="Explore"
        bg="green.100"
      />
      <Container maxW="xl" my={["30px", "30px", "60px"]}>
        <Partners item={partners} />
        <Hero
          subText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
              voluptate culpa nesciunt delectus iste?"
          headingText="Lorem ipsum dolor sit amet consectetur"
          color="dark.100"
          subColor="dark.50"
          buttonText="Learn More"
        />
        <Hero
          subText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
              voluptate culpa nesciunt delectus iste?"
          headingText="Lorem ipsum dolor sit amet consectetur"
          color="dark.100"
          subColor="dark.50"
          buttonText="Learn More"
          orderItems={1}
        />
        <Team />
      </Container>
    </>
  );
}
