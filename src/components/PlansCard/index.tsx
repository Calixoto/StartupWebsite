import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { HiCheck } from "react-icons/hi";
import { Button } from "../Button";

export function PlansCard() {
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
          Basic
        </Text>
        <HStack align="center" justifyContent="center">
          <Text
            fontSize="3xl"
            lineHeight="shorter"
            fontWeight="bold"
            color="black"
          >
            $100
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
          nemo hic quos, ab, dolor aperiam
        </Text>
      </VStack>
      <VStack align="left">
        {[1, 2, 3, 4].map((item) => (
          <HStack key={item} color="green.100" spacing={11}>
            <HiCheck size={25} />
            <Text
              fontSize="xs"
              lineHeight="shorter"
              fontWeight="regular"
              color="dark.100"
            >
              Lorem ipsum, dolor sit{" "}
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
