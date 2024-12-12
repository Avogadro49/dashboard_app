import { useEffect, useState } from "react";
import { DetailType } from "../types";

const useDetailsItem = () => {
  const [responseData, setResponseData] = useState<DetailType[]>([]);
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
        const data: DetailType[] = await response.json();
        setResponseData(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Unknown error"));
        setResponseData([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { responseData, error, isLoading };
};

export default useDetailsItem;
