import { Box, Image } from "@chakra-ui/react";

export function WorkCard() {
  return (
    <Box
      border="1.5px solid #000000"
      borderRadius="5px"
      overflow="hidden"
      boxSizing="border-box"
    >
      <Image src="images/work1.svg" />
    </Box>
  );
}
