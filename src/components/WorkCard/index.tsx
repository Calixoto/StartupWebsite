import { Box, Image } from "@chakra-ui/react";

export interface WorkProps {
  id: number;
  work: string;
}

type WorkCardProps = {
  item: WorkProps;
};

export function WorkCard({ item }: WorkCardProps) {
  return (
    <Box
      border="1.5px solid #000000"
      borderRadius="5px"
      overflow="hidden"
      boxSizing="border-box"
    >
      <Image src={item.work} objectFit="cover" />
    </Box>
  );
}
