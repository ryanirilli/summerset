import Head from "next/head";
import Image from "next/image";
import { Box, Container, Grid, GridItem, Text } from "@chakra-ui/react";
import SummerSetType from "../components/SummerSetType";

export default function Home() {
  return (
    <>
      <Head>
        <title>Summer Set &apos;22</title>
        <meta
          name="description"
          content="Summer Set 2022, an end of summer celebration"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid
        placeContent="center"
        bgGradient="linear(to-b, #6875B3, #7490C1, #008AD0)"
        bgSize="cover"
        minH="75vh"
        position="relative"
        sx={{
          ":after": {
            content: '""',
            bgImage: "url(/gloop-glop.svg)",
            position: "absolute",
            width: "100%",
            bottom: "-1px",
            left: 0,
            height: "135px",
          },
        }}
      >
        <GridItem px={8} color="white" transform="translateY(-67px)">
          <Box p={32}>
            <Image
              alt="summer set logo"
              src="/summerset-logo-full.svg"
              width={686}
              height={539}
            />
          </Box>
        </GridItem>
      </Grid>
      <Box bg="#074575" color="white">
        <Container py={[32, null, 64]}>
          <Text fontSize={["larger", null, "3xl"]} textAlign="center">
            Join us for a picnic to celebrate the end of Summer in the Pacific
            Northwest. Friends and family are invited to enjoy live DJ sets,
            graffiti art, and all around good vibes. All are welcome to bring
            blankets and beverages as we close out the warm weather in style.
          </Text>
        </Container>
      </Box>
    </>
  );
}
