import { useEffect, useState } from "react";
import { DetailsType } from "../types";

const useDetailsItem = () => {
  const [responseData, setResponseData] = useState<DetailsType[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const url = [import.meta.env.VITE_API_URL, "details"].join("/");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network error");
        }
        const data: DetailsType[] = await response.json();
        setResponseData(data);
        setError(null); // Clear previous errors
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Unknown error"));
        setResponseData([]); // Clear previous data in case of error
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { responseData, error, isLoading };
};

export default useDetailsItem;
