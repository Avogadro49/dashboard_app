import { useEffect, useState } from "react";

interface ApiResponse<T> {
  data: T[];
  total: number;
}

const useData = <T>(endpoint: string) => {
  const [responseData, setResponseData] = useState<ApiResponse<T> | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const url = [import.meta.env.VITE_API_URL, endpoint].join("/");

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url, { signal });
        if (!response.ok) {
          throw new Error(`Failed to fetch data from ${endpoint}`);
        }
        const data: ApiResponse<T> = await response.json();
        if (isMounted) {
          setResponseData(data);
          setError(null);
        }
      } catch (err) {
        if (!signal.aborted) {
          setError(err instanceof Error ? err : new Error("Unknown error"));
          setResponseData(null);
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

  const deleteItem = async (id: string) => {
    try {
      const response = await fetch(`${url}/${id}`, { method: "DELETE" });
      if (!response.ok) {
        throw new Error(`Failed to delete item with id ${id}`);
      }

      // Update state after deletion
      setResponseData((prev) =>
        prev
          ? {
              ...prev,
              data: prev.data.filter((item) => (item as any).id !== id),
              total: prev.total - 1,
            }
          : null
      );
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Unknown error"));
    }
  };

  return { responseData, error, isLoading, deleteItem };
};

export default useData;
