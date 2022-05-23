import Head from "next/head";
import { Box, Grid, GridItem } from "@chakra-ui/react";
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
        minH="100vh"
      >
        <GridItem maxW={96} px={8} color="white">
          <SummerSetType />
        </GridItem>
      </Grid>
    </>
  );
}
