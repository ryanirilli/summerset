import { useEffect, useRef } from "react";

export default function Register() {
  const hasCreatedRef = useRef(false);
  useEffect(() => {
    if (hasCreatedRef.current) {
      return;
    }
    hasCreatedRef.current = true;
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
  }, []);
  return <div id="eventbrite-widget-container-348228961197"></div>;
}
