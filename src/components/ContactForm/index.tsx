import { FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";
import { Button } from "../Button";

export function ContactForm() {
  return (
    <VStack w="100%" spacing={21}>
      <FormControl>
        <FormLabel
          color="black"
          fontSize="md"
          lineHeight="shorter"
          fontWeight="regular"
          mb={4}
        >
          Name
        </FormLabel>
        <Input
          type="text"
          border="1px solid"
          borderColor="black"
          borderRadius="5px"
          boxSizing="border-box"
          background="#EEEEEE"
          color="black"
          h={38}
        />
      </FormControl>
      <FormControl>
        <FormLabel
          color="black"
          fontSize="md"
          lineHeight="shorter"
          fontWeight="regular"
          mb={4}
        >
          Email
        </FormLabel>
        <Input
          type="email"
          border="1px solid"
          borderColor="black"
          borderRadius="5px"
          boxSizing="border-box"
          background="#EEEEEE"
          color="black"
          h={38}
        />
      </FormControl>
      <FormControl>
        <FormLabel
          color="black"
          fontSize="md"
          lineHeight="shorter"
          fontWeight="regular"
          mb={4}
        >
          Message
        </FormLabel>
        <Input
          type="text"
          border="1px solid"
          borderColor="black"
          borderRadius="5px"
          boxSizing="border-box"
          background="#EEEEEE"
          color="black"
          h={75}
        />
      </FormControl>
      <Button text="Submit" />
    </VStack>
  );
}
