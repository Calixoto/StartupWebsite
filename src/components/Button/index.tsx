import { Button as ButtonChakra } from "@chakra-ui/react";

interface ButtonProps {
  color?: string;
  bg?: string;
  mw?: number;
  text: string;
}
export function Button({
  color = "white",
  bg = "dark.100",
  mw,
  text,
}: ButtonProps) {
  return (
    <>
      <ButtonChakra
        fontSize="md"
        fontWeight="regular"
        lineHeight="shorter"
        textAlign="center"
        color={color}
        bg={bg}
        // mt="5px !important"
        maxW={mw}
        width="100%"
        py={3}
        _hover={{ opacity: 0.75, transition: "0.2s linear" }}
      >
        {text}
      </ButtonChakra>
    </>
  );
}
