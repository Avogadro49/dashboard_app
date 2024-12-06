import { useEffect, useState } from "react";
import { ModuleRespone } from "../types";

const useModuleItem = () => {
  const [responseData, setResponseData] = useState<ModuleRespone | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const url = [import.meta.env.VITE_API_URL, "modules"].join("/");

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
        const data: ModuleRespone = await response.json();
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

  const deleteModule = async (id: string) => {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete module");
      }

      // Update state after deletion
      setResponseData((prev) =>
        prev
          ? {
              ...prev,
              data: prev.data.filter((module) => module.id !== id),
              total: prev.total - 1,
            }
          : null
      );
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Unknown error"));
    }
  };

  return { responseData, error, isLoading, deleteModule };
};

export default useModuleItem;
