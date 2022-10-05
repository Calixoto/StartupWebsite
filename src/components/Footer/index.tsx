import { Container, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTiktok,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

export function Footer() {
  return (
    <Flex as="footer" bg="green.100" color="white">
      <Container maxW="xl">
        <Stack
          flexDir={["column", "column", "row"]}
          gap={5}
          align="center"
          justifyContent="space-between"
          py={50}
        >
          <HStack gap={5}>
            <FaFacebookF size={18} />
            <FaInstagram size={18} />
            <FaTwitter size={18} />
            <FaPinterestP size={18} />
            <FaTiktok size={18} />
            <FaWhatsapp size={18} />
            <FaYoutube size={18} />
          </HStack>
          <Text fontSize="md" lineHeight="shorter" fontWeight="regular">
            © Start, 2022. All rights reserved.
          </Text>
        </Stack>
      </Container>
    </Flex>
  );
}
