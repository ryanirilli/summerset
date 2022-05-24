import { Box, Heading } from "@chakra-ui/react";
export default function TopNav() {
  return (
    <Box
      bg="#6875B3"
      color="white"
      py={2}
      px={8}
      position="sticky"
      top={0}
      zIndex="docked"
    >
      <Heading letterSpacing="tighter" size="lg" textTransform="uppercase">
        August 27th
      </Heading>
      <Heading letterSpacing="tighter" size="sm" textTransform="uppercase">
        2pm &nbsp; | &nbsp; Golden Gardens
      </Heading>
    </Box>
  );
}
