import { Container, Flex, HStack, Image } from "@chakra-ui/react";
import { NavLinks } from "./NavLinks";

const links = [
  { nav: "Home", slug: "/" },
  { nav: "Portfolio", slug: "/portfolio" },
  { nav: "Services", slug: "/services" },
  { nav: "Contact", slug: "/contact" },
];

export function Header() {
  return (
    <Flex as="header" bg="green.100">
      <Container maxW="xl">
        <HStack justifyContent="space-between" align="center" py={35}>
          <Image src="images/logo.svg" width={187} height={50} />
          <NavLinks links={links} />
        </HStack>
      </Container>
    </Flex>
  );
}
