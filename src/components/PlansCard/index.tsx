import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { HiCheck } from "react-icons/hi";
import { Button } from "../Button";

export interface PlanProps {
  id: number;
  plan: string;
  price: number;
  description: string;
  benefits: {
    id: number;
    benefit: string;
  }[];
}

interface PlansCardProps {
  item: PlanProps;
}

export function PlansCard({ item }: PlansCardProps) {
  return (
    <Box
      display="flex"
      flexDir="column"
      gap={45}
      boxShadow="3px 4px 12px 1px rgba(0,0,0,0.25)"
      borderRadius="5px"
      maxW={340}
      px={30}
      py={46}
    >
      <VStack textAlign="center">
        <Text
          fontSize="xs"
          lineHeight="shorter"
          color="black"
          fontWeight="regular"
        >
          {item.plan}
        </Text>
        <HStack align="center" justifyContent="center">
          <Text
            fontSize="3xl"
            lineHeight="shorter"
            fontWeight="bold"
            color="black"
          >
            ${item.price}
          </Text>
          <Text
            fontSize="xs"
            lineHeight="shorter"
            fontWeight="regular"
            color="dark.50"
          >
            /month
          </Text>
        </HStack>
        <Text
          fontSize="xs"
          lineHeight="shorter"
          fontWeight="regular"
          color="dark.50"
        >
          {item.description}
        </Text>
      </VStack>
      <VStack align="left">
        {item.benefits.map((benefit) => (
          <HStack key={benefit.id} color="green.100" spacing={11}>
            <HiCheck size={25} />
            <Text
              fontSize="xs"
              lineHeight="shorter"
              fontWeight="regular"
              color="dark.100"
            >
              {benefit.benefit}
            </Text>
          </HStack>
        ))}
      </VStack>
      <Box display="flex" justifyContent="center">
        <Button text="Learn More" mw={170} />
      </Box>
    </Box>
  );
}
