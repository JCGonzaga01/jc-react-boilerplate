import { useState, useEffect } from "react";

type DeviceType = "sp" | "tl" | "pc";

function useDeviceType() {
  const [deviceType, setDeviceType] = useState("sp" as DeviceType);

  useEffect(() => {
    if (!window.matchMedia) return;

    const mediaQueryTL = window.matchMedia("(max-width: 1023px)");
    const mediaQuerySP = window.matchMedia("(max-width: 743px)");

    function updateMediaQuery() {
      if (mediaQuerySP.matches) {
        setDeviceType("sp");
      } else if (mediaQueryTL.matches) {
        setDeviceType("tl");
      } else {
        setDeviceType("pc");
      }
    }

    updateMediaQuery();

    mediaQueryTL.addListener(updateMediaQuery);
    mediaQuerySP.addListener(updateMediaQuery);

    return () => {
      mediaQueryTL.removeListener(updateMediaQuery);
      mediaQuerySP.removeListener(updateMediaQuery);
    };
  }, []);

  return deviceType;
}

export default useDeviceType;
