import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Box, Button, Container, Grid, GridItem, Text } from "@chakra-ui/react";
import { BsFillLightningFill } from "react-icons/bs";
import Register from "../components/Register";
import TopNav from "../components/TopNav";
import FAQ from "../components/FAQ";

export default function Home() {
  const [isShowingFaq, setIsShowingFaq] = useState(false);
  return (
    <>
      <Head>
        <title>Summer Set &apos;22</title>
        <meta
          name="description"
          content="Summer Set 2022, an end of summer celebration"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content="Summer Set 2022, an end of summer celebration"
        />
        <meta
          property="og:image"
          content="https://summerset22.com/meta-image.jpg"
        />
        <meta property="og:url" content="https://summerset22.com" />
      </Head>
      <TopNav>
        <Button
          size="lg"
          borderRadius="full"
          colorScheme="gray"
          variant="outline"
          leftIcon={<BsFillLightningFill />}
          onClick={() => setIsShowingFaq(true)}
        >
          FAQs
        </Button>
      </TopNav>
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
          <Box p={[0, null, 32]}>
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
        <Container py={[16]}>
          <Text
            fontSize={["3xl", null, "4xl"]}
            textAlign="center"
            fontFamily="Permanent Marker"
            lineHeight="9"
            mb={8}
          >
            Join us for a picnic to celebrate the end of Summer in the Pacific
            Northwest.
          </Text>
          <Text fontSize={["xl", null, "2xl"]} textAlign="center" mb={32}>
            Friends and family are invited to enjoy live DJ sets, graffiti art,
            and good vibes. All are welcome to bring blankets and beverages as
            we close out the warm weather in style.
          </Text>
        </Container>
      </Box>
      <Register />
      <FAQ isOpen={isShowingFaq} onClose={() => setIsShowingFaq(false)} />
    </>
  );
}
