import {
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Button } from "../Button";

interface HeroProps {
  orderItems?: number;
  headingText: string;
  subText: string;
  isWelcome?: boolean;
  color: string;
  subColor: string;
  buttonColor?: string;
  buttonBg?: string;
  buttonText: string;
  bg?: string;
}

export function Hero({
  orderItems = 0,
  isWelcome = false,
  subText,
  headingText,
  color,
  subColor,
  buttonColor,
  buttonBg,
  buttonText,
  bg,
}: HeroProps) {
  return (
    <Flex bg={bg}>
      <Container maxW="xl">
        <Stack
          flexDir={["column", "column", "row"]}
          justifyContent="space-between"
          align="center"
          gap={[30, 30, 120]}
          pt={8}
          pb={[30, 30, 20]}
        >
          <VStack
            align="left"
            color={color}
            gap={15}
            order={[1, 1, orderItems]}
          >
            {isWelcome && (
              <Text
                fontSize="sm"
                fontWeight="bold"
                lineHeight="shorter"
                letterSpacing="wide"
                textTransform="uppercase"
              >
                Welcome
              </Text>
            )}
            <Heading
              fontSize={["lg", "lg", "xl", "2xl", "3xl"]}
              fontWeight="bold"
              lineHeight="shorter"
            >
              {headingText}
            </Heading>
            <Text
              fontSize="xs"
              fontWeight="regular"
              lineHeight="shorter"
              color={subColor}
            >
              {subText}
            </Text>
            <Button
              color={buttonColor}
              bg={buttonBg}
              mw={170}
              text={buttonText}
            />
          </VStack>
          <Image src="images/image1.png" w={[355, 355, 355, 645]} />
        </Stack>
      </Container>
    </Flex>
  );
}
