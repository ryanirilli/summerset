import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
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
import Lottie from "./Lottie";

const emailSchema = object({
  email: string().required().email(),
});

export default function Register() {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(emailSchema),
  });

  const onSubmit = useCallback(
    async ({ email }) => {
      if (!email) {
        return;
      }
      setIsLoading(true);
      error && setError(false);
      try {
        const res = await fetch("/api/rsvp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });
        const { error } = await res.json();
        if (error) {
          setError(true);
        } else {
          setSuccess(true);
        }
      } catch (err: any) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    },
    [error]
  );

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
        {success ? (
          <>
            <HStack>
              <Box maxW={32}>
                <Lottie
                  lottiePlayerOptions={{
                    path: "https://assets8.lottiefiles.com/packages/lf20_uu0x8lqv.json",
                    loop: false,
                  }}
                />
              </Box>
              <Box>
                <Text
                  fontSize={["3xl", null, "4xl"]}
                  fontFamily="Permanent Marker"
                >
                  Woot! You&apos;re in
                </Text>
                <Text fontSize={["lg", null, "xl"]}>
                  See you on August 27th!
                </Text>
              </Box>
            </HStack>
          </>
        ) : (
          <>
            <Text
              fontSize={["3xl", null, "4xl"]}
              textAlign="center"
              fontFamily="Permanent Marker"
              mb={8}
            >
              RSVP to the event
            </Text>
            {error && (
              <Alert status="error" borderRadius="lg" mb={4}>
                <AlertIcon />
                <AlertTitle>Damn!</AlertTitle>
                <AlertDescription>We hit an error, try again?</AlertDescription>
              </Alert>
            )}
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl>
                <FormLabel htmlFor="email">Email address</FormLabel>
                <HStack>
                  <Input
                    size="lg"
                    id="email"
                    type="email"
                    {...register("email")}
                  />
                  <Button
                    type="submit"
                    colorScheme="blue"
                    size="lg"
                    isLoading={isLoading}
                  >
                    Send
                  </Button>
                </HStack>
                {errors.email && <span>Email is required</span>}
                <FormHelperText>
                  We&apos;ll keep you posted on details
                </FormHelperText>
              </FormControl>
            </form>
          </>
        )}
      </Container>
    </Box>
  );
}
