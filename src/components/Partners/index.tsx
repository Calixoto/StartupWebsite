import { HStack, Image, VStack } from "@chakra-ui/react";
import { Button } from "../Button";
import { DescriptionCard } from "../DescriptionCard";

export interface PartnerProps {
  id: number;
  partner: string;
}

type PartnersProps = {
  item: PartnerProps[];
};
export function Partners({ item }: PartnersProps) {
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
        {item.map((item) => (
          <Image src={item.partner} key={item.id} />
        ))}
      </HStack>
      <Button color="white" bg="dark.100" mw={170} text="Learn More" />
    </VStack>
  );
}
