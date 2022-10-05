import { Heading, Text, VStack } from "@chakra-ui/react";

interface DescriptionCardProps {
  title?: string;
  heading: string;
  text: string;
}

export function DescriptionCard({
  title,
  heading,
  text,
}: DescriptionCardProps) {
  return (
    <VStack textAlign="center" gap={4} maxW={411}>
      {title && (
        <Text
          lineHeight="shorter"
          fontWeight="bold"
          letterSpacing="wide"
          textTransform="uppercase"
          color="green.100"
        >
          {title}
        </Text>
      )}
      <Heading
        lineHeight="shorter"
        fontWeight="bold"
        fontSize="3xl"
        color="black"
      >
        {heading}
      </Heading>
      <Text
        lineHeight="shorter"
        fontWeight="regular"
        fontSize="md"
        color="black"
      >
        {text}
      </Text>
    </VStack>
  );
}
