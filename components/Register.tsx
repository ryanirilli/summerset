import { useState, useCallback } from "react";
import {
  Box,
  Button,
  Container,
  HStack,
  Text,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const onSend = useCallback(async () => {
    if (!email) {
      return;
    }
    error && setError(false);
    try {
      await fetch("/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
    } catch (err: any) {
      setError(true);
    }
  }, [email, error]);

  return (
    <Box pb={16} bgGradient="linear(to-t, #6875B3, #7490C1, #008AD0)">
      <Container
        bg="white"
        p={[4, null, 8]}
        pt={8}
        pb={[16, null, 12]}
        boxShadow={["none", null, "lg"]}
        transform="translateY(-32px)"
        borderRadius={["none", null, "lg"]}
      >
        <Text
          fontSize={["3xl", null, "4xl"]}
          textAlign="center"
          fontFamily="Permanent Marker"
          mb={8}
        >
          RSVP to the event
        </Text>
        {error && (
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>Damn!</AlertTitle>
            <AlertDescription>
              Something broke on our end, sorry...
            </AlertDescription>
          </Alert>
        )}
        <FormControl>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <HStack>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              size="lg"
              id="email"
              type="email"
            />
            <Button colorScheme="blue" size="lg" onClick={onSend}>
              Send
            </Button>
          </HStack>
          <FormHelperText>We&apos;ll keep you posted on details</FormHelperText>
        </FormControl>
      </Container>
    </Box>
  );
}
