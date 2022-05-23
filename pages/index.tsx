import Head from "next/head";
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
        <GridItem maxW={96} px={8} color="white">
          <SummerSetType />
        </GridItem>
      </Grid>
      <Box bg="#074575" color="white">
        <Container py={[32, null, 64]}>
          <Text fontSize={["larger", null, "3xl"]} textAlign="center">
            Summerset is a picnic to celebrate the end of Summer in the Pacific
            Northwest. Friends and family are invited to join us for live DJ
            sets, graffiti art, and all around good vibes. All are welcome to
            bring blankets and beverages as we close out the warm weather in
            style.
          </Text>
        </Container>
      </Box>
    </>
  );
}
