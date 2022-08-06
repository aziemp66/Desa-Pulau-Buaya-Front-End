import { useLayoutEffect, useState } from "react";

const useIfDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  useLayoutEffect(() => {
    function updateSize() {
      setIsDesktop(window.innerWidth >= 1024 ? true : false);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return isDesktop;
};

export default useIfDesktop;
