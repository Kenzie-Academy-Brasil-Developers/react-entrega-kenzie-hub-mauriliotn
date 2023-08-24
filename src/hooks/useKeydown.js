import { useEffect } from "react";

export const useKeydown = (key, callback) => {
  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key === key) {
        callback(e);
      }
    };
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);
};
