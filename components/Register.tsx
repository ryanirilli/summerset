import { useEffect, useRef, useState } from "react";
import {
  Box,
  Container,
  HStack,
  Skeleton,
  SkeletonCircle,
} from "@chakra-ui/react";
import Script from "next/script";

export default function Register() {
  const hasCreatedRef = useRef(false);
  const scriptLoadInterval = useRef<NodeJS.Timer>();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    if (hasCreatedRef.current) {
      return;
    }
    hasCreatedRef.current = true;

    function initWidget() {
      // @ts-ignore
      if (window.EBWidgets) {
        clearInterval(scriptLoadInterval.current);
        // @ts-ignore
        window.EBWidgets.createWidget({
          // Required
          widgetType: "checkout",
          eventId: "348228961197",
          iframeContainerId: "eventbrite-widget-container-348228961197",

          // Optional
          iframeContainerHeight: 425, // Widget height in pixels. Defaults to a minimum of 425px if not provided
          //onOrderComplete: exampleCallback  // Method called when an order has successfully completed
        });
        setIsLoaded(true);
      } else {
        scriptLoadInterval.current = setInterval(initWidget, 1000);
      }
    }

    initWidget();
  }, []);
  return (
    <Box py={16}>
      <Script src="https://www.eventbrite.com/static/widgets/eb_widgets.js" />
      <Container>
        {!isLoaded && (
          <>
            <HStack mb={4}>
              <SkeletonCircle size="10" />
              <Skeleton w="100%" h={8} />
            </HStack>
            <Skeleton h={8} mb={4} />
          </>
        )}

        <Box id="eventbrite-widget-container-348228961197" />
      </Container>
    </Box>
  );
}
