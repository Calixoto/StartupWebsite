import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";

export interface TeamProps {
  id: number;
  thumbnail: string;
  name: string;
  role: string;
}

type CardTeamProps = {
  item: TeamProps;
};

export function CardTeam({ item }: CardTeamProps) {
  return (
    <Box
      bg="white"
      py={5}
      px={38}
      borderRadius="5px"
      boxShadow="3px 4px 12px 1px rgba(0,0,0, 0.25)"
    >
      <Image src={item.thumbnail} />
      <VStack spacing="9px" mt={19} align="left">
        <Heading
          as="h4"
          fontWeight="bold"
          fontSize="lg"
          lineHeight="shorter"
          color="dark.100"
        >
          {item.name}
        </Heading>
        <Text
          fontSize="xs"
          fontWeight="regular"
          lineHeight="shorter"
          color="dark.75"
          mt={0}
        >
          {item.role}
        </Text>
      </VStack>
    </Box>
  );
}
