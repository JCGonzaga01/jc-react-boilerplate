import { useState, useEffect } from "react";

function useVisibleInViewport(divId: string, offsetTop: number = 0) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const scrolling = () => {
      const divEL = document.getElementById(divId);

      if (!isVisible && divEL && divEL.getBoundingClientRect().top + offsetTop < window.innerHeight)
        setIsVisible(true);
    };
    window.addEventListener("scroll", scrolling);

    return () => {
      window.removeEventListener("scroll", scrolling);
    };
  }, []);

  return isVisible;
}

export default useVisibleInViewport;
