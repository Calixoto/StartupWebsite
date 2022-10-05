import { Container, Image, Stack } from "@chakra-ui/react";
import { ContactForm } from "../../components/ContactForm";
import { DescriptionCard } from "../../components/DescriptionCard";

export function Contact() {
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
        heading="Contact Us"
        text="Lorem ipsum, dolor sit amet consectetur
adipisicing elit."
      />
      <Stack
        display="flex"
        flexDir={["column-reverse", "column-reverse", "column-reverse", "row"]}
        align="center"
        justifyContent="space-between"
        gap={30}
        w="100%"
      >
        <ContactForm />
        <Image
          src="images/map.png"
          maxW={575}
          w={[335, 475, 575, 575]}
          objectFit="cover"
        />
      </Stack>
    </Container>
  );
}
