import { useEffect, useState } from "react";
import { CollegeResponse } from "../types";

const useCollegeItem = () => {
  const [responseData, setResponseData] = useState<CollegeResponse | null>(
    null
  );
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const url = [import.meta.env.VITE_API_URL, "colleges"].join("/");

  useEffect(() => {
    let isMounted = true; // Flag to prevent state updates on unmounted component
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url, { signal });
        if (!response.ok) {
          throw new Error("Network error originated");
        }
        const data: CollegeResponse = await response.json();
        if (isMounted) {
          setResponseData(data);
          setError(null);
        }
      } catch (err) {
        if (signal.aborted) {
          console.log("Fetch Aborted");
        } else if (isMounted) {
          setResponseData(null);
          setError(err instanceof Error ? err : new Error("Unknown error"));
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [url]);

  return { responseData, error, isLoading };
};

export default useCollegeItem;
