import { Box, Flex, Heading } from "@chakra-ui/react";

export default function TopNav({ children }) {
  return (
    <Box
      bg="#6875B3"
      color="white"
      py={2}
      px={[2, null, 8]}
      position="sticky"
      top={0}
      zIndex="docked"
    >
      <Flex>
        <Box flex={1}>
          <Heading letterSpacing="tighter" size="lg" textTransform="uppercase">
            August 27th
          </Heading>
          <Heading letterSpacing="tighter" size="sm" textTransform="uppercase">
            2pm &nbsp; | &nbsp; Location TBD
          </Heading>
        </Box>
        <Box>{children}</Box>
      </Flex>
    </Box>
  );
}
