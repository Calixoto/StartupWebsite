import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Link,
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";

interface NavLinksMobile {
  onClose(): void;
  isOpen: boolean;
  links: {
    slug: string;
    nav: string;
  }[];
}
export function NavLinksMobile({ onClose, isOpen, links }: NavLinksMobile) {
  return (
    <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent bg="green.100">
        <DrawerBody display="flex" flexDir="column" gap={4} mt={4}>
          {links.map((link) => (
            <Link
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
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
