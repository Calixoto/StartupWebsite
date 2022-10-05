import { Button, HStack, Link, useDisclosure } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { Link as ReachLink } from "react-router-dom";
import { NavLinksMobile } from "./Mobile";

interface NavLinksProps {
  links: {
    slug: string;
    nav: string;
  }[];
}

export function NavLinks({ links }: NavLinksProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <HStack spacing={30}>
        {links.map((link) => (
          <Link
            display={["none", "none", "inline-flex"]}
            as={ReachLink}
            key={link.nav}
            color="white"
            textDecoration="none !important"
            fontSize="md"
            fontWeight="regular"
            lineHeight="shorter"
            _hover={{ opacity: 0.45, transition: "0.2s linear" }}
            to={link.slug}
          >
            {link.nav}
          </Link>
        ))}
        <Button
          paddingEnd={0}
          paddingStart={0}
          minW="max-content"
          h="max-content"
          bg="transparent"
          lineHeight="normal"
          color="white"
          display={["inline-flex", "inline-flex", "none"]}
          _hover={{ background: "transparent", opacity: 0.8 }}
          onClick={onOpen}
        >
          <FiMenu size={35} />
        </Button>
      </HStack>
      <NavLinksMobile links={links} isOpen={isOpen} onClose={onClose} />
    </>
  );
}
