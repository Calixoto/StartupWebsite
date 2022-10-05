import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";

export function CardTeam() {
  return (
    <Box
      bg="white"
      py={5}
      px={38}
      borderRadius="5px"
      boxShadow="3px 4px 12px 1px rgba(0,0,0, 0.25)"
    >
      <Image src="images/person1.svg" />
      <VStack gap={17} mt={19} align="left">
        <Heading as="h4">Peg Legge</Heading>
        <Text>CEO</Text>
      </VStack>
    </Box>
  );
}
