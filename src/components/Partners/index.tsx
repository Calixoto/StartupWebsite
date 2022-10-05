import { HStack, Image, VStack } from "@chakra-ui/react";
import { Button } from "../Button";
import { DescriptionCard } from "../DescriptionCard";
import airbnb from "/public/images/airbnb.svg";
import facebook from "/public/images/facebook.svg";
import google from "/public/images/google.svg";
import microsoft from "/public/images/microsoft.svg";
import spotify from "/public/images/spotify.svg";

const mockPartners = [google, microsoft, airbnb, facebook, spotify];

export function Partners() {
  return (
    <VStack gap={55}>
      <DescriptionCard
        title="partners"
        heading="Lorem Ipsum Dolor"
        text="Lorem ipsum, dolor sit amet consectetur
        adipisicing elit."
      />
      <HStack
        gap={[10, 10, 10, 10, 10, 68]}
        align="center"
        justifyContent="center"
        flexWrap={["wrap", "wrap", "wrap", "wrap", "wrap", "nowrap"]}
        flex={1}
      >
        {mockPartners.map((item) => (
          <Image src={item} key={item} />
        ))}
      </HStack>
      <Button color="white" bg="dark.100" mw={170} text="Learn More" />
    </VStack>
  );
}
